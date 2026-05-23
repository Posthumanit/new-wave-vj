var L=Object.defineProperty;var W=(n,i,r)=>i in n?L(n,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[i]=r;var d=(n,i,r)=>W(n,typeof i!="symbol"?i+"":i,r);import{a as c,r as G}from"./react-BPWfBN2A.js";import{G as T}from"./genai-D3MRwhLH.js";import{C as U,W as F,f as H,P as Y,e as $,a as K,B as S,g as V,A as q,b as A,T as J,S as X,c as Z,M as Q,d as ee}from"./three-b5FbYRUM.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();var k={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=c,ie=Symbol.for("react.element"),oe=Symbol.for("react.fragment"),se=Object.prototype.hasOwnProperty,ae=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function R(n,i,r){var s,e={},a=null,o=null;r!==void 0&&(a=""+r),i.key!==void 0&&(a=""+i.key),i.ref!==void 0&&(o=i.ref);for(s in i)se.call(i,s)&&!re.hasOwnProperty(s)&&(e[s]=i[s]);if(n&&n.defaultProps)for(s in i=n.defaultProps,i)e[s]===void 0&&(e[s]=i[s]);return{$$typeof:ie,type:n,key:a,ref:o,props:e,_owner:ae.current}}z.Fragment=oe;z.jsx=R;z.jsxs=R;k.exports=z;var t=k.exports,O,E=G;O=E.createRoot,E.hydrateRoot;function ne({onSubmit:n}){const[i,r]=c.useState(""),[s,e]=c.useState(!1),a=o=>{o.preventDefault();const l=i.trim();l&&n(l)};return t.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:t.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[t.jsxs("div",{children:[t.jsx("p",{className:"label",children:"Step 1 of 3"}),t.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),t.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",t.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),t.jsxs("form",{onSubmit:a,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("input",{id:"api-key",className:"input",type:s?"text":"password",value:i,onChange:o=>r(o.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),t.jsx("button",{type:"button",onClick:()=>e(o=>!o),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:s?"🙈":"👁️"})]}),t.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!i.trim(),style:{opacity:i.trim()?1:.5},children:"CONTINUE →"})]})]})})}const g={mood:"energetic",energy:.7,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave"};async function le(n,i){const r=new T({apiKey:n}),s=`You are a music mood analyzer. Analyze this music reference: "${i}"

This could be a YouTube URL, song title, artist name, or description. Use your knowledge to determine the musical characteristics.

Respond with ONLY a valid JSON object — no markdown, no explanation — in this exact shape:
{
  "mood": "one of: euphoric|melancholic|aggressive|dreamy|energetic|dark|uplifting|hypnotic",
  "energy": 0.85,
  "genre": "one of: electronic|rock|pop|jazz|classical|hip-hop|ambient|metal|synthwave|house|techno",
  "colors": ["#hex1", "#hex2", "#hex3"],
  "description": "One sentence describing the musical atmosphere",
  "imagePrompt": "Detailed visual description for abstract psychedelic background art that matches this music"
}

The colors array must contain exactly 3 hex color values that evoke the mood. The imagePrompt should describe surreal, abstract, generative-art style visuals suitable for a VJ performance — no text, no people, no realistic objects.`;try{const o=((await r.models.generateContent({model:"gemini-2.0-flash",contents:s})).text??"").match(/\{[\s\S]*\}/);if(!o)throw new Error("No JSON in response");const l=JSON.parse(o[0]);return{mood:l.mood??g.mood,energy:typeof l.energy=="number"?l.energy:g.energy,genre:l.genre??g.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:g.colors,description:l.description??g.description,imagePrompt:l.imagePrompt??g.imagePrompt}}catch{return g}}async function ce(n,i){var s,e,a;const r=new T({apiKey:n});try{const l=(a=(e=(s=(await r.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${i}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:s[0])==null?void 0:e.image)==null?void 0:a.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const u=new Uint8Array(l);let f="";for(let m=0;m<u.byteLength;m++)f+=String.fromCharCode(u[m]);return`data:image/jpeg;base64,${btoa(f)}`}catch(o){return console.warn("Imagen generation failed:",o),null}}function de({apiKey:n,onResult:i,onError:r}){const[s,e]=c.useState(""),[a,o]=c.useState(!1),l=async()=>{if(s.trim()){o(!0);try{const u=await le(n,s.trim());i(u)}catch(u){r(u instanceof Error?u.message:"Gemini error — check your API key")}finally{o(!1)}}};return t.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:t.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[t.jsxs("div",{children:[t.jsx("p",{className:"label",children:"Step 2 of 3"}),t.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"MUSIC SOURCE"}),t.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL or type an artist + song name. Gemini analyzes the mood and generates a matching visual palette."})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG TITLE"}),t.jsx("input",{id:"url-input",className:"input",type:"text",value:s,onChange:u=>e(u.target.value),onKeyDown:u=>u.key==="Enter"&&!a&&void l(),placeholder:"https://youtube.com/watch?v=… or Daft Punk – One More Time",disabled:a,spellCheck:!1})]}),a?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[t.jsx("div",{className:"spinner"}),t.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:"Analyzing mood with Gemini…"})]}):t.jsx("button",{className:"btn btn-primary",onClick:()=>void l(),disabled:!s.trim(),style:{opacity:s.trim()?1:.5},children:"ANALYZE →"})]})})}function ue({onFile:n}){const i=c.useRef(null),r=e=>{var o;const a=(o=e.target.files)==null?void 0:o[0];a&&n(a)},s=e=>{e.preventDefault();const a=e.dataTransfer.files[0];a&&a.type.startsWith("audio/")&&n(a)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[t.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",t.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),t.jsxs("div",{className:"fade-in",onDrop:s,onDragOver:e=>e.preventDefault(),onClick:()=>{var e;return(e=i.current)==null?void 0:e.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:e=>{e.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:e=>{e.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[t.jsx("input",{ref:i,type:"file",accept:"audio/*",style:{display:"none"},onChange:r}),t.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),t.jsxs("div",{style:{textAlign:"center"},children:[t.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),t.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const y=1e4,he=`
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
    float theta = i * float(${y}) * GOLDEN_ANGLE;
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
  }else{
    float cols = 100.;
    float col  = mod(i * float(${y}), cols);
    float row  = floor(i * float(${y}) / cols);
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
  }

  // Treble shimmer on color brightness
  vColor = color * (1. + uTreble * r * .6);
  vAlpha = .75 + r * .25;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.);
  gl_Position   = projectionMatrix * mvPos;
  gl_PointSize  = clamp(size * (300. / -mvPos.z), .5, 24.);
}
`,pe=`
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
`;class me{constructor(i){d(this,"renderer");d(this,"scene");d(this,"camera");d(this,"material");d(this,"clock");d(this,"rafId",0);d(this,"bgMesh",null);d(this,"resizeObserver");d(this,"audioData",{bass:0,mid:0,treble:0,beat:0,isPlaying:!1});this.clock=new U,this.renderer=new F({canvas:i,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new H,this.camera=new Y(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const r=new $(this.buildGeometry(),this.material);this.scene.add(r),this.resizeObserver=new ResizeObserver(()=>this.resize(i)),this.resizeObserver.observe(i.parentElement??i),this.resize(i),this.animate()}buildGeometry(){const i=new K,r=new Float32Array(y),s=new Float32Array(y);for(let e=0;e<y;e++)r[e]=e/y,s[e]=Math.random();return i.setAttribute("position",new S(new Float32Array(y*3),3)),i.setAttribute("aIndex",new S(r,1)),i.setAttribute("aRandom",new S(s,1)),i}buildMaterial(){return new V({vertexShader:he,fragmentShader:pe,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uColor1:{value:new A("#ff0080")},uColor2:{value:new A("#00ffff")},uColor3:{value:new A("#8000ff")}},transparent:!0,depthWrite:!1,blending:q})}resize(i){const r=i.parentElement,s=r?r.clientWidth:window.innerWidth,e=r?r.clientHeight:window.innerHeight;this.renderer.setSize(s,e,!1),this.camera.aspect=s/e,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(s,e)}fitBgMesh(i,r){if(!this.bgMesh)return;const s=this.camera.position.z-this.bgMesh.position.z,e=this.camera.fov*Math.PI/180,a=2*Math.tan(e/2)*s,o=a*(i/r);this.bgMesh.scale.set(o,a,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const i=this.clock.getElapsedTime(),r=this.material.uniforms;if(r.uTime.value=i,r.uBass.value=this.audioData.bass,r.uMid.value=this.audioData.mid,r.uTreble.value=this.audioData.treble,r.uBeat.value=this.audioData.beat,r.uMode.value===2)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const e=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(i*.08)*e,this.camera.position.z=Math.cos(i*.08)*e,this.camera.position.y=Math.sin(i*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const e=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e}this.renderer.render(this.scene,this.camera)}updateAudio(i){this.audioData=i}setMode(i){this.material.uniforms.uMode.value=i,i===2&&this.camera.lookAt(0,0,-10)}setColors(i){this.material.uniforms.uColor1.value.set(i[0]),this.material.uniforms.uColor2.value.set(i[1]),this.material.uniforms.uColor3.value.set(i[2])}setBackgroundImage(i){new J().load(i,s=>{s.colorSpace=X,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const e=new Z({map:s,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new Q(new ee(1,1),e),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function fe({audioData:n,moodData:i,backgroundImage:r,mode:s}){const e=c.useRef(null),a=c.useRef(null);return c.useEffect(()=>{if(!e.current)return;const o=new me(e.current);return a.current=o,()=>{o.dispose(),a.current=null}},[]),c.useEffect(()=>{var o;(o=a.current)==null||o.setMode(s)},[s]),c.useEffect(()=>{var o;r&&((o=a.current)==null||o.setBackgroundImage(r))},[r]),c.useEffect(()=>{var o;i&&((o=a.current)==null||o.setColors(i.colors))},[i]),c.useEffect(()=>{var o;(o=a.current)==null||o.updateAudio(n)},[n]),t.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const ye=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"}];function ge({mode:n,onMode:i,isPlaying:r,onToggle:s,onReset:e,songName:a}){return t.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[a&&t.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",a.toUpperCase()]}),t.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:ye.map((o,l)=>t.jsxs("button",{className:`btn btn-ghost${n===l?" active":""}`,onClick:()=>i(l),style:{flex:1,padding:"8px 4px",fontSize:10},children:[o.icon," ",o.label]},o.label))}),t.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[t.jsx("button",{className:"btn btn-ghost",onClick:e,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),t.jsx("button",{className:"btn btn-primary",onClick:s,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:r?"⏸":"▶"})]})]})}class xe{constructor(i){d(this,"context");d(this,"analyser");d(this,"source");d(this,"audio");d(this,"dataArray");d(this,"energyHistory");d(this,"beat");d(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.energyHistory=new Array(60).fill(0),this.beat=0,this.objectUrl=URL.createObjectURL(i),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const i=this.context.sampleRate,r=this.analyser.fftSize,s=i/r,e=Math.floor(300/s),a=Math.floor(3e3/s),o=this.dataArray.length;let l=0,u=0,f=0;for(let h=1;h<e;h++)l+=this.dataArray[h];for(let h=e;h<a;h++)u+=this.dataArray[h];for(let h=a;h<o;h++)f+=this.dataArray[h];const m=Math.min(l/(e-1)/255*2.2,1),v=Math.min(u/(a-e)/255*2.8,1),w=Math.min(f/(o-a)/255*3.5,1),x=m*1.8+v*.6,b=this.energyHistory.reduce((h,j)=>h+j,0)/this.energyHistory.length;return x>b*1.4&&x>.25&&(this.beat=Math.min(x/(b+.001),1)),this.beat*=.82,this.energyHistory.push(x),this.energyHistory.shift(),{bass:m,mid:v,treble:w,beat:this.beat,isPlaying:!this.audio.paused}}isPlaying(){return!this.audio.paused}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}const ve={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function be(n){const[i,r]=c.useState(ve),s=c.useRef(null),e=c.useRef(0);c.useEffect(()=>{if(!n)return;const o=new xe(n);s.current=o,o.play();const l=()=>{r(o.getData()),e.current=requestAnimationFrame(l)};return e.current=requestAnimationFrame(l),()=>{cancelAnimationFrame(e.current),o.dispose(),s.current=null}},[n]);const a=c.useCallback(()=>{var o;(o=s.current)==null||o.toggle()},[]);return{data:i,toggle:a}}function we(){const[n,i]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[r,s]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[e,a]=c.useState(null),[o,l]=c.useState(null),[u,f]=c.useState(!1),[m,v]=c.useState(null),[w,x]=c.useState(0),[b,h]=c.useState(""),{data:j,toggle:I}=be(m),N=p=>{localStorage.setItem("nwvj-api-key",p),i(p),s("input")},P=c.useCallback(p=>{a(p),l(null),f(!0),s("ready"),ce(n,p.imagePrompt).then(M=>{M&&l(M)}).catch(()=>{}).finally(()=>f(!1))},[n]),D=c.useCallback(p=>{h(p)},[]),_=p=>{v(p),s("playing")},B=()=>{v(null),a(null),l(null),h(""),s("input")},C=r==="playing";return t.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[C&&t.jsxs("div",{style:{position:"absolute",inset:0},children:[t.jsx(fe,{audioData:j,moodData:e,backgroundImage:o,mode:w}),t.jsx(ge,{mode:w,onMode:x,isPlaying:j.isPlaying,onToggle:I,onReset:B,songName:(m==null?void 0:m.name.replace(/\.[^.]+$/,""))??""})]}),!C&&t.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[t.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[t.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),t.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),r==="api-key"&&t.jsx(ne,{onSubmit:N}),r==="input"&&t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[t.jsx(de,{apiKey:n,onResult:P,onError:D}),t.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),i(""),s("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),r==="ready"&&e&&t.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[o&&t.jsx("img",{src:o,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),t.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsx("p",{className:"label",children:"Mood analyzed ✓"}),t.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:e.mood}),t.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[e.genre," · energy ",Math.round(e.energy*100),"%"]})]}),t.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:e.description}),t.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.colors.map(p=>t.jsx("div",{style:{width:28,height:28,borderRadius:4,background:p,boxShadow:`0 0 12px ${p}80`}},p)),u&&t.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),o&&!u&&t.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),t.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("div",{children:[t.jsx("p",{className:"label",children:"Step 3 of 3 — Load your audio file"}),t.jsxs("p",{style:{fontSize:13,color:"var(--text-dim)",lineHeight:1.5},children:["The YouTube audio ",t.jsx("strong",{style:{color:"var(--text)"},children:"cannot stream directly"})," in a browser. Download the song as an MP3 first, then load it below."]})]}),t.jsx(ue,{onFile:_})]}),t.jsx("button",{className:"btn btn-ghost",onClick:()=>s("input"),style:{width:"100%",fontSize:11},children:"← ANALYZE A DIFFERENT SONG"})]}),b&&t.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[t.jsx("span",{style:{fontSize:16},children:"⚠️"}),t.jsxs("div",{style:{flex:1},children:[t.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),t.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:b})]}),t.jsx("button",{onClick:()=>h(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}O(document.getElementById("root")).render(t.jsx(c.StrictMode,{children:t.jsx(we,{})}));
