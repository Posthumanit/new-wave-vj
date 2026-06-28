import * as THREE from 'three'
import type { AudioData, VisualMode } from '../types'
import { SILENT_AUDIO } from './audioMath'

const PARTICLE_COUNT = 10_000
const SPECTRUM_BINS = 32

// ─── Vertex Shader ───────────────────────────────────────────────────────────
const VERT = /* glsl */ `
precision highp float;

attribute float aIndex;
attribute float aRandom;

uniform float uTime;
uniform float uBeat;
uniform float uBass;
uniform float uMid;
uniform float uTreble;
uniform float uMode;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSpectrum[32];

varying vec3 vColor;
varying float vAlpha;

#define PI     3.14159265359
#define TWO_PI 6.28318530718
#define GOLDEN_ANGLE 2.39996323

// ── Simplex 3D noise ──────────────────────────────────────────────────────────
vec3 _mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 _mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 _perm(vec4 x){return _mod289(((x*34.)+1.)*x);}
vec4 _tis(vec4 r){return 1.79284291400159-0.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=_mod289(i);
  vec4 p=_perm(_perm(_perm(
    i.z+vec4(0.,i1.z,i2.z,1.))
    +i.y+vec4(0.,i1.y,i2.y,1.))
    +i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=_tis(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

float hash11(float p){
  p=fract(p*.1031);
  p*=p+33.33;
  p*=p+p;
  return fract(p);
}

void main(){
  float i   = aIndex;   // 0 → 1
  float r   = aRandom;  // 0 → 1

  vec3 pos   = vec3(0.);
  vec3 color = mix(uColor1, uColor2, i);
  float size = 2.;

  // ── MODE 0 : FIBONACCI SPHERE ─────────────────────────────────────────────
  if(uMode < .5){
    float phi   = acos(1. - 2.*i);
    float theta = i * float(${PARTICLE_COUNT}) * GOLDEN_ANGLE;
    float radius= 2.5 + uBass * 2.;

    vec3 sp = vec3(
      sin(phi)*cos(theta),
      cos(phi),
      sin(phi)*sin(theta)
    ) * radius;

    float noise = snoise(sp * .25 + uTime * .15);
    vec3 disp   = normalize(sp) * noise * uMid * 1.8;
    float pulse = 1. + uBeat * .45;

    pos   = (sp + disp) * pulse;
    color = mix(uColor1, uColor2, (sp.y/radius + 1.)*.5);
    color = mix(color, uColor3, uMid * .4);
    size  = 2. + uBeat * 5. + uTreble * r * 4.;

  // ── MODE 1 : GALAXY ───────────────────────────────────────────────────────
  }else if(uMode < 1.5){
    float arm    = floor(r * 3.);
    float armOff = arm * (TWO_PI / 3.);
    float rad    = i * 4.5;
    float angle  = i * TWO_PI * 3. + armOff + rad * .6 + uTime * .18;

    float spread = (hash11(i * 137. + arm) - .5) * (.25 + uBass * .5);

    pos = vec3(
      cos(angle)*rad + spread*cos(angle+PI*.5),
      (hash11(i*231.)-.5)*.6 + sin(i*12.+uTime)*uMid*.35,
      sin(angle)*rad + spread*sin(angle+PI*.5)
    );
    pos *= 1. + uBeat * .18;

    color = mix(uColor3, mix(uColor1, uColor2, arm*.5), i);
    size  = 1.5 + uBeat * 4. + (1.-i) * 2.5;

  // ── MODE 2 : WARP TUNNEL ──────────────────────────────────────────────────
  }else if(uMode < 2.5){
    float angle = i * TWO_PI * 9. + r * .4;
    float z     = (i - .5) * 14.;
    float sz    = mod(z - uTime * 3.5, 14.) - 7.;
    float rad   = 1.8 + uBass * 1.6 + sin(sz*1.4 + uTime*2.)*uMid*.9;

    pos = vec3(cos(angle)*rad, sin(angle)*rad, sz);

    float ripple = sin(length(pos.xy)*3. - uTime*5.) * uBeat * .35;
    pos.xy *= 1. + ripple;

    float ct = fract(angle / TWO_PI);
    color = mix(uColor1, uColor2, ct);
    color = mix(color, uColor3, abs(sz)/7.);
    size  = 1.5 + uBeat * 3. + uTreble * r * 2.5;

  // ── MODE 3 : WAVE GRID ────────────────────────────────────────────────────
  }else if(uMode < 3.5){
    float cols = 100.;
    float col  = mod(i * float(${PARTICLE_COUNT}), cols);
    float row  = floor(i * float(${PARTICLE_COUNT}) / cols);
    float x    = (col/cols - .5) * 8.;
    float z    = (row/cols - .5) * 8.;

    float w1 = sin(x*1.5 + uTime*2.)  * cos(z*1.5 + uTime*1.5) * uBass * 2.;
    float w2 = sin(x*3.  + z*2. + uTime*3.) * uMid * .6;
    float w3 = snoise(vec3(x*2., z*2., uTime)) * uTreble * .4;
    float beat= sin(length(vec2(x,z))*2. - uTime*4.) * uBeat * 1.2;
    float y   = w1 + w2 + w3 + beat;

    pos   = vec3(x, y, z);
    float hn = clamp((y + 2.5)/5., 0., 1.);
    color = mix(uColor1, uColor2, hn);
    color = mix(color, uColor3, uBeat * .6);
    size  = 1.5 + abs(y)*.4 + uBeat * 2.5;

  // ── MODE 4 : EQUALIZER BARS ───────────────────────────────────────────────
  }else if(uMode < 4.5){
    float BINS = 32.;
    float bin     = floor(i * BINS);
    float binFrac = fract(i * BINS);
    float spec    = uSpectrum[int(bin)];
    float barW    = 8. / BINS;
    float x = (bin/BINS - .5) * 8. + barW*.5;
    float h = spec * 6. + .05;
    float y = binFrac * h - h*.5 - 1.5;
    float z = (r - .5) * .6;

    pos   = vec3(x, y, z);
    color = mix(uColor1, uColor2, bin/BINS);
    color = mix(color, uColor3, spec*.5);
    size  = 2. + spec*4. + uBeat*2.;

  // ── MODE 5 : MANDALA ──────────────────────────────────────────────────────
  }else if(uMode < 5.5){
    float PETALS = 8.;
    float ring    = floor(i * 40.);
    float ringT   = fract(i * 40.);
    float petalAngle = floor(r * PETALS) * (TWO_PI/PETALS);
    float radius  = (ring/40.) * (3. + uBass*2.);
    float wobble  = sin(ringT*TWO_PI*3. + uTime*2. + ring*.3) * uMid * .6;
    float angle   = petalAngle + ringT*TWO_PI*.15 + uTime*.3 + wobble*.2;
    float rad     = radius + wobble;

    pos = vec3(cos(angle)*rad, sin(angle)*rad, sin(ring*.5+uTime)*uTreble*.8);
    pos *= 1. + uBeat*.25;

    color = mix(uColor1, uColor2, ringT);
    color = mix(color, uColor3, sin(ring*.2+uTime)*.5+.5);
    size  = 2. + uBeat*4. + uTreble*r*3.;

  // ── MODE 6 : PLASMA FIELD ─────────────────────────────────────────────────
  }else if(uMode < 6.5){
    float cols = 100.;
    float col  = mod(i * float(${PARTICLE_COUNT}), cols);
    float row  = floor(i * float(${PARTICLE_COUNT}) / cols);
    float x    = (col/cols - .5) * 8.;
    float z    = (row/cols - .5) * 8.;
    float d    = length(vec2(x,z));

    float plasma = sin(x*1.2+uTime) + sin(z*1.2-uTime) + sin(d*1.5-uTime*1.4) + sin((x+z)*.8+uTime*.6);
    float y = plasma * (.4 + uBass*.5) + uBeat*.6;

    pos = vec3(x, y, z);
    float pn = (plasma + 4.)/8.;
    color = mix(uColor1, uColor2, pn);
    color = mix(color, uColor3, uMid*.5);
    size  = 1.5 + abs(plasma)*.6 + uBeat*2.;

  // ── MODE 7 : STARFIELD WARP ───────────────────────────────────────────────
  }else if(uMode < 7.5){
    float speed = 6. + uBass*8.;
    float z     = mod(i * 40. - uTime * speed, 40.) - 20.;
    float depth = (z + 20.)/40.;
    float angle = r * TWO_PI + i*3.;
    float rad   = (1.-depth) * .3 + depth * 4.5 + uMid*1.5;

    pos = vec3(cos(angle)*rad, sin(angle)*rad, z);

    color = mix(uColor3, uColor1, depth);
    color = mix(color, uColor2, uTreble*.4);
    size  = (1.-depth)*6. + 1. + uBeat*3.;

  // ── MODE 8 : SPECTRUM RING ────────────────────────────────────────────────
  }else if(uMode < 8.5){
    float BINS = 32.;
    float bin     = floor(i * BINS);
    float binFrac = fract(i * BINS);
    float spec    = uSpectrum[int(bin)];
    float angle   = (bin/BINS) * TWO_PI + uTime*.2;
    float innerR  = 1.8;
    float barLen  = spec * 3.2 + .05;
    float rad     = innerR + binFrac * barLen;

    pos = vec3(cos(angle)*rad, sin(angle)*rad, sin(bin*.5+uTime)*uBass*.6);

    color = mix(uColor1, uColor2, bin/BINS);
    color = mix(color, uColor3, spec*.6);
    size  = 2. + spec*4. + uBeat*2.;

  // ── MODE 9 : LISSAJOUS SCOPE ───────────────────────────────────────────────
  }else if(uMode < 9.5){
    float a = 2. + floor(uBass*3.);
    float b = 3. + floor(uMid*3.);
    float t = i * TWO_PI * 4. + uTime*.5;

    vec2 curve = vec2(sin(a*t), sin(b*t + uTreble*PI)) * (2.2 + uBeat*.8);
    float thickness = (r-.5) * .25 * (1.+uBeat);

    pos = vec3(curve.x + thickness, curve.y, sin(t*.3)*1.2);

    color = mix(uColor1, uColor2, sin(t)*.5+.5);
    color = mix(color, uColor3, uTreble*.5);
    size  = 2. + uBeat*4.;

  // ── MODE 10 : DNA HELIX ───────────────────────────────────────────────────
  }else if(uMode < 10.5){
    float strand = step(.5, r);
    float twist  = i * float(${PARTICLE_COUNT}) * .04 + uTime;
    float y      = (i - .5) * 12.;
    float angle  = twist + strand*PI;
    float rad    = 1.4 + uMid*.8;

    pos = vec3(cos(angle)*rad, y, sin(angle)*rad);
    pos.xz *= 1. + uBeat*.3;

    color = mix(uColor1, uColor3, strand);
    color = mix(color, uColor2, uBass*.5);
    size  = 2. + uBeat*3. + uTreble*r*3.;

  // ── MODE 11 : FIREWORK BURST ──────────────────────────────────────────────
  }else{
    float cycle = 3.2;
    float seed  = floor(i * 60.);
    float burstOffset = hash11(seed) * cycle;
    float life  = mod(uTime + burstOffset, cycle) / cycle;

    float ha = hash11(seed*7.1 + 1.);
    float he = hash11(seed*3.3 + 2.);
    float burstAngle = ha * TWO_PI;
    float elevation  = (he - .5) * PI;
    vec3 dir = vec3(cos(burstAngle)*cos(elevation), sin(elevation), sin(burstAngle)*cos(elevation));

    float speed = 4. + uBass*4.;
    vec3 burstCenter = vec3(hash11(seed*5.)-.5, hash11(seed*9.)-.5, hash11(seed*11.)-.5) * 4.;

    pos = burstCenter + dir * life * speed;
    pos.y -= life*life*1.8;

    float fade = 1. - life;
    color = mix(uColor1, uColor2, hash11(seed*13.));
    color = mix(color, uColor3, life);
    color *= max(fade, .15);
    size  = (2. + uBeat*3.) * fade;
  }

  // Treble shimmer on color brightness
  vColor = color * (1. + uTreble * r * .6);
  vAlpha = .75 + r * .25;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.);
  gl_Position   = projectionMatrix * mvPos;
  gl_PointSize  = clamp(size * (300. / -mvPos.z), .5, 24.);
}
`

// ─── Fragment Shader ──────────────────────────────────────────────────────────
const FRAG = /* glsl */ `
precision highp float;

varying vec3  vColor;
varying float vAlpha;

void main(){
  vec2  uv   = gl_PointCoord - .5;
  float dist = length(uv);

  float core = 1. - smoothstep(0., .18, dist);
  float glow = pow(1. - smoothstep(.1, .5, dist), 2.);
  float alpha= (core * .9 + glow * .45) * vAlpha;

  if(alpha < .01) discard;

  vec3 col = vColor + vColor * core * 1.8;
  gl_FragColor = vec4(col, alpha);
}
`

export class ThreeScene {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private material: THREE.ShaderMaterial
  private clock: THREE.Clock
  private rafId: number = 0
  private bgMesh: THREE.Mesh | null = null
  private resizeObserver: ResizeObserver
  private audioData: AudioData = SILENT_AUDIO

  constructor(canvas: HTMLCanvasElement) {
    this.clock = new THREE.Clock()

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setClearColor(0x0a0a0f, 1)

    // Scene & camera
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100)
    this.camera.position.set(0, 0, 7)

    // Particle system
    this.material = this.buildMaterial()
    const particles = new THREE.Points(this.buildGeometry(), this.material)
    this.scene.add(particles)

    // Resize handling
    this.resizeObserver = new ResizeObserver(() => this.resize(canvas))
    this.resizeObserver.observe(canvas.parentElement ?? canvas)
    this.resize(canvas)

    this.animate()
  }

  private buildGeometry(): THREE.BufferGeometry {
    const geo = new THREE.BufferGeometry()
    const indices = new Float32Array(PARTICLE_COUNT)
    const randoms = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      indices[i] = i / PARTICLE_COUNT
      randoms[i] = Math.random()
    }

    // Dummy positions (real positions computed in vertex shader)
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(PARTICLE_COUNT * 3), 3))
    geo.setAttribute('aIndex', new THREE.BufferAttribute(indices, 1))
    geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))
    return geo
  }

  private buildMaterial(): THREE.ShaderMaterial {
    return new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: {
        uTime:   { value: 0 },
        uBeat:   { value: 0 },
        uBass:   { value: 0 },
        uMid:    { value: 0 },
        uTreble: { value: 0 },
        uMode:   { value: 0 },
        uSpectrum: { value: new Array(SPECTRUM_BINS).fill(0) },
        uColor1: { value: new THREE.Color('#ff0080') },
        uColor2: { value: new THREE.Color('#00ffff') },
        uColor3: { value: new THREE.Color('#8000ff') },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  }

  private resize(canvas: HTMLCanvasElement) {
    const parent = canvas.parentElement
    const w = parent ? parent.clientWidth : window.innerWidth
    const h = parent ? parent.clientHeight : window.innerHeight
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    if (this.bgMesh) {
      this.fitBgMesh(w, h)
    }
  }

  private fitBgMesh(w: number, h: number) {
    if (!this.bgMesh) return
    const dist = this.camera.position.z - (this.bgMesh.position.z)
    const vFov = (this.camera.fov * Math.PI) / 180
    const planeH = 2 * Math.tan(vFov / 2) * dist
    const planeW = planeH * (w / h)
    this.bgMesh.scale.set(planeW, planeH, 1)
  }

  private animate() {
    this.rafId = requestAnimationFrame(() => this.animate())

    const t = this.clock.getElapsedTime()
    const u = this.material.uniforms

    u.uTime.value   = t
    u.uBass.value   = this.audioData.bass
    u.uMid.value    = this.audioData.mid
    u.uTreble.value = this.audioData.treble
    u.uBeat.value   = this.audioData.beat
    u.uSpectrum.value = this.audioData.spectrum

    // Gentle camera orbit; forward-facing in tunnel/starfield modes
    const mode = u.uMode.value as number
    if (mode === 2 || mode === 7) {
      this.camera.position.set(0, 0, 5)
      this.camera.lookAt(0, 0, -10)
    } else {
      const orbitR = 7 + this.audioData.bass * 0.5
      this.camera.position.x = Math.sin(t * 0.08) * orbitR
      this.camera.position.z = Math.cos(t * 0.08) * orbitR
      this.camera.position.y = Math.sin(t * 0.05) * 2.5
      this.camera.lookAt(0, 0, 0)
    }

    // Beat shake
    if (this.audioData.beat > 0.6) {
      const shake = (this.audioData.beat - 0.6) * 0.08
      this.camera.position.x += (Math.random() - 0.5) * shake
      this.camera.position.y += (Math.random() - 0.5) * shake
    }

    this.renderer.render(this.scene, this.camera)
  }

  updateAudio(data: AudioData) {
    this.audioData = data
  }

  setMode(mode: VisualMode) {
    this.material.uniforms.uMode.value = mode
    // Reset camera for forward-facing modes
    if (mode === 2 || mode === 7) {
      this.camera.lookAt(0, 0, -10)
    }
  }

  setColors(colors: [string, string, string]) {
    this.material.uniforms.uColor1.value.set(colors[0])
    this.material.uniforms.uColor2.value.set(colors[1])
    this.material.uniforms.uColor3.value.set(colors[2])
  }

  setBackgroundImage(dataUrl: string) {
    const loader = new THREE.TextureLoader()
    loader.load(dataUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      if (this.bgMesh) {
        this.scene.remove(this.bgMesh)
        ;(this.bgMesh.material as THREE.MeshBasicMaterial).dispose()
      }
      const mat = new THREE.MeshBasicMaterial({ map: tex, depthWrite: false, opacity: 0.35, transparent: true })
      this.bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat)
      this.bgMesh.position.z = -5
      this.scene.add(this.bgMesh)
      this.fitBgMesh(
        this.renderer.domElement.clientWidth,
        this.renderer.domElement.clientHeight,
      )
    })
  }

  dispose() {
    cancelAnimationFrame(this.rafId)
    this.resizeObserver.disconnect()
    this.renderer.dispose()
  }
}
