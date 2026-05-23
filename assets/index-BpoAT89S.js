var _=Object.defineProperty;var B=(n,t,o)=>t in n?_(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var u=(n,t,o)=>B(n,typeof t!="symbol"?t+"":t,o);import{a as c,r as L}from"./react-BPWfBN2A.js";import{G as E}from"./genai-D3MRwhLH.js";import{C as W,W as G,f as U,P as F,e as H,a as Y,B as S,g as $,A as K,b as A,T as V,S as q,c as J,M as X,d as Z}from"./three-b5FbYRUM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();var k={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=c,ee=Symbol.for("react.element"),te=Symbol.for("react.fragment"),ie=Object.prototype.hasOwnProperty,se=Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ae={key:!0,ref:!0,__self:!0,__source:!0};function R(n,t,o){var a,e={},r=null,s=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)ie.call(t,a)&&!ae.hasOwnProperty(a)&&(e[a]=t[a]);if(n&&n.defaultProps)for(a in t=n.defaultProps,t)e[a]===void 0&&(e[a]=t[a]);return{$$typeof:ee,type:n,key:r,ref:s,props:e,_owner:se.current}}z.Fragment=te;z.jsx=R;z.jsxs=R;k.exports=z;var i=k.exports,T,M=L;T=M.createRoot,M.hydrateRoot;function oe({onSubmit:n}){const[t,o]=c.useState(""),[a,e]=c.useState(!1),r=s=>{s.preventDefault();const l=t.trim();l&&n(l)};return i.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:i.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Step 1 of 3"}),i.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),i.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",i.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),i.jsxs("form",{onSubmit:r,style:{display:"flex",flexDirection:"column",gap:12},children:[i.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),i.jsxs("div",{style:{position:"relative"},children:[i.jsx("input",{id:"api-key",className:"input",type:a?"text":"password",value:t,onChange:s=>o(s.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),i.jsx("button",{type:"button",onClick:()=>e(s=>!s),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:a?"🙈":"👁️"})]}),i.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!t.trim(),style:{opacity:t.trim()?1:.5},children:"CONTINUE →"})]})]})})}const v={mood:"energetic",energy:.7,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave"};async function re(n,t){const o=new E({apiKey:n}),a=`You are a music mood analyzer. Analyze this music reference: "${t}"

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

The colors array must contain exactly 3 hex color values that evoke the mood. The imagePrompt should describe surreal, abstract, generative-art style visuals suitable for a VJ performance — no text, no people, no realistic objects.`;try{const s=((await o.models.generateContent({model:"gemini-2.0-flash",contents:a})).text??"").match(/\{[\s\S]*\}/);if(!s)throw new Error("No JSON in response");const l=JSON.parse(s[0]);return{mood:l.mood??v.mood,energy:typeof l.energy=="number"?l.energy:v.energy,genre:l.genre??v.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:v.colors,description:l.description??v.description,imagePrompt:l.imagePrompt??v.imagePrompt}}catch{return v}}async function ne(n,t){var a,e,r;const o=new E({apiKey:n});try{const l=(r=(e=(a=(await o.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${t}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:a[0])==null?void 0:e.image)==null?void 0:r.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const m=new Uint8Array(l);let y="";for(let h=0;h<m.byteLength;h++)y+=String.fromCharCode(m[h]);return`data:image/jpeg;base64,${btoa(y)}`}catch(s){return console.warn("Imagen generation failed:",s),null}}function le({apiKey:n,onResult:t,onError:o}){const[a,e]=c.useState(""),[r,s]=c.useState("idle"),[l,m]=c.useState(""),y=async()=>{if(a.trim()){s("analyzing"),m("Analyzing music with Gemini...");try{const d=await re(n,a.trim());s("generating"),m("Generating visuals with Imagen...");const b=await ne(n,d.imagePrompt);t(d,b)}catch(d){o(d instanceof Error?d.message:"Gemini error — check your API key"),s("idle")}}},h=r!=="idle";return i.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:i.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Step 2 of 3"}),i.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"MUSIC SOURCE"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL or type an artist + song name. Gemini will analyze the mood and generate matching visuals."})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[i.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),i.jsx("input",{id:"url-input",className:"input",type:"text",value:a,onChange:d=>e(d.target.value),onKeyDown:d=>d.key==="Enter"&&!h&&void y(),placeholder:"https://youtube.com/watch?v=... or Daft Punk – One More Time",disabled:h,spellCheck:!1})]}),h?i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[i.jsx("div",{className:"spinner"}),i.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1,animation:"pulse 1.5s infinite"},children:l})]}):i.jsx("button",{className:"btn btn-primary",onClick:()=>void y(),disabled:!a.trim()||h,style:{opacity:a.trim()?1:.5},children:"ANALYZE + GENERATE →"}),h&&i.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","generating"].map(d=>i.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:r===d?"var(--pink)":r==="generating"&&d==="analyzing"?"var(--cyan)":"var(--border)",transition:"background 0.3s",boxShadow:r===d?"var(--glow-pink)":"none"}},d))})]})})}function ce({onFile:n}){const t=c.useRef(null),o=e=>{var s;const r=(s=e.target.files)==null?void 0:s[0];r&&n(r)},a=e=>{e.preventDefault();const r=e.dataTransfer.files[0];r&&r.type.startsWith("audio/")&&n(r)};return i.jsxs("div",{className:"fade-in",onDrop:a,onDragOver:e=>e.preventDefault(),onClick:()=>{var e;return(e=t.current)==null?void 0:e.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"32px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:16,cursor:"pointer",background:"rgba(255,0,128,0.03)",transition:"background 0.2s"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255,0,128,0.03)"},children:[i.jsx("input",{ref:t,type:"file",accept:"audio/*",style:{display:"none"},onChange:o}),i.jsx("div",{style:{fontSize:48,lineHeight:1},children:"🎵"}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("p",{style:{fontSize:14,fontWeight:700,letterSpacing:2,marginBottom:6},children:"TAP TO LOAD AUDIO"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]}),i.jsx("p",{style:{fontSize:11,color:"var(--text-dim)",letterSpacing:1},children:"Audio plays locally — no uploads"})]})}const x=1e4,de=`
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
    float theta = i * float(${x}) * GOLDEN_ANGLE;
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
    float col  = mod(i * float(${x}), cols);
    float row  = floor(i * float(${x}) / cols);
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
`,ue=`
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
`;class he{constructor(t){u(this,"renderer");u(this,"scene");u(this,"camera");u(this,"material");u(this,"clock");u(this,"rafId",0);u(this,"bgMesh",null);u(this,"resizeObserver");u(this,"audioData",{bass:0,mid:0,treble:0,beat:0,isPlaying:!1});this.clock=new W,this.renderer=new G({canvas:t,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new U,this.camera=new F(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const o=new H(this.buildGeometry(),this.material);this.scene.add(o),this.resizeObserver=new ResizeObserver(()=>this.resize(t)),this.resizeObserver.observe(t.parentElement??t),this.resize(t),this.animate()}buildGeometry(){const t=new Y,o=new Float32Array(x),a=new Float32Array(x);for(let e=0;e<x;e++)o[e]=e/x,a[e]=Math.random();return t.setAttribute("position",new S(new Float32Array(x*3),3)),t.setAttribute("aIndex",new S(o,1)),t.setAttribute("aRandom",new S(a,1)),t}buildMaterial(){return new $({vertexShader:de,fragmentShader:ue,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uColor1:{value:new A("#ff0080")},uColor2:{value:new A("#00ffff")},uColor3:{value:new A("#8000ff")}},transparent:!0,depthWrite:!1,blending:K})}resize(t){const o=t.parentElement,a=o?o.clientWidth:window.innerWidth,e=o?o.clientHeight:window.innerHeight;this.renderer.setSize(a,e,!1),this.camera.aspect=a/e,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(a,e)}fitBgMesh(t,o){if(!this.bgMesh)return;const a=this.camera.position.z-this.bgMesh.position.z,e=this.camera.fov*Math.PI/180,r=2*Math.tan(e/2)*a,s=r*(t/o);this.bgMesh.scale.set(s,r,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const t=this.clock.getElapsedTime(),o=this.material.uniforms;if(o.uTime.value=t,o.uBass.value=this.audioData.bass,o.uMid.value=this.audioData.mid,o.uTreble.value=this.audioData.treble,o.uBeat.value=this.audioData.beat,o.uMode.value===2)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const e=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(t*.08)*e,this.camera.position.z=Math.cos(t*.08)*e,this.camera.position.y=Math.sin(t*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const e=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e}this.renderer.render(this.scene,this.camera)}updateAudio(t){this.audioData=t}setMode(t){this.material.uniforms.uMode.value=t,t===2&&this.camera.lookAt(0,0,-10)}setColors(t){this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])}setBackgroundImage(t){new V().load(t,a=>{a.colorSpace=q,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const e=new J({map:a,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new X(new Z(1,1),e),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function pe({audioData:n,moodData:t,backgroundImage:o,mode:a}){const e=c.useRef(null),r=c.useRef(null);return c.useEffect(()=>{if(!e.current)return;const s=new he(e.current);return r.current=s,()=>{s.dispose(),r.current=null}},[]),c.useEffect(()=>{var s;(s=r.current)==null||s.setMode(a)},[a]),c.useEffect(()=>{var s;o&&((s=r.current)==null||s.setBackgroundImage(o))},[o]),c.useEffect(()=>{var s;t&&((s=r.current)==null||s.setColors(t.colors))},[t]),c.useEffect(()=>{var s;(s=r.current)==null||s.updateAudio(n)},[n]),i.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const me=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"}];function fe({mode:n,onMode:t,isPlaying:o,onToggle:a,onReset:e,songName:r}){return i.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[r&&i.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",r.toUpperCase()]}),i.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:me.map((s,l)=>i.jsxs("button",{className:`btn btn-ghost${n===l?" active":""}`,onClick:()=>t(l),style:{flex:1,padding:"8px 4px",fontSize:10},children:[s.icon," ",s.label]},s.label))}),i.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[i.jsx("button",{className:"btn btn-ghost",onClick:e,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),i.jsx("button",{className:"btn btn-primary",onClick:a,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:o?"⏸":"▶"})]})]})}class ye{constructor(t){u(this,"context");u(this,"analyser");u(this,"source");u(this,"audio");u(this,"dataArray");u(this,"energyHistory");u(this,"beat");u(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.energyHistory=new Array(60).fill(0),this.beat=0,this.objectUrl=URL.createObjectURL(t),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const t=this.context.sampleRate,o=this.analyser.fftSize,a=t/o,e=Math.floor(300/a),r=Math.floor(3e3/a),s=this.dataArray.length;let l=0,m=0,y=0;for(let p=1;p<e;p++)l+=this.dataArray[p];for(let p=e;p<r;p++)m+=this.dataArray[p];for(let p=r;p<s;p++)y+=this.dataArray[p];const h=Math.min(l/(e-1)/255*2.2,1),d=Math.min(m/(r-e)/255*2.8,1),b=Math.min(y/(s-r)/255*3.5,1),g=h*1.8+d*.6,w=this.energyHistory.reduce((p,j)=>p+j,0)/this.energyHistory.length;return g>w*1.4&&g>.25&&(this.beat=Math.min(g/(w+.001),1)),this.beat*=.82,this.energyHistory.push(g),this.energyHistory.shift(),{bass:h,mid:d,treble:b,beat:this.beat,isPlaying:!this.audio.paused}}isPlaying(){return!this.audio.paused}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}const ge={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function xe(n){const[t,o]=c.useState(ge),a=c.useRef(null),e=c.useRef(0);c.useEffect(()=>{if(!n)return;const s=new ye(n);a.current=s,s.play();const l=()=>{o(s.getData()),e.current=requestAnimationFrame(l)};return e.current=requestAnimationFrame(l),()=>{cancelAnimationFrame(e.current),s.dispose(),a.current=null}},[n]);const r=c.useCallback(()=>{var s;(s=a.current)==null||s.toggle()},[]);return{data:t,toggle:r}}function ve(){const[n,t]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[o,a]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[e,r]=c.useState(null),[s,l]=c.useState(null),[m,y]=c.useState(null),[h,d]=c.useState(0),[b,g]=c.useState(""),{data:w,toggle:p}=xe(m),j=f=>{localStorage.setItem("nwvj-api-key",f),t(f),a("input")},N=c.useCallback((f,D)=>{r(f),l(D),a("ready")},[]),O=c.useCallback(f=>{g(f)},[]),I=f=>{y(f),a("playing")},P=()=>{y(null),r(null),l(null),g(""),a("input")},C=o==="playing";return i.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[C&&i.jsxs("div",{style:{position:"absolute",inset:0},children:[i.jsx(pe,{audioData:w,moodData:e,backgroundImage:s,mode:h}),i.jsx(fe,{mode:h,onMode:d,isPlaying:w.isPlaying,onToggle:p,onReset:P,songName:(m==null?void 0:m.name.replace(/\.[^.]+$/,""))??""})]}),!C&&i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[i.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),i.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),o==="api-key"&&i.jsx(oe,{onSubmit:j}),(o==="input"||o==="analyzing"||o==="generating")&&i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[i.jsx(le,{apiKey:n,onResult:N,onError:O}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),t(""),a("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),o==="ready"&&e&&i.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[i.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[s&&i.jsx("img",{src:s,alt:"Generated visual",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),i.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:12},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Step 2 complete — Mood analyzed"}),i.jsx("h2",{style:{fontSize:20,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:e.mood}),i.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[e.genre," · energy ",Math.round(e.energy*100),"%"]})]}),i.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:e.description}),i.jsx("div",{style:{display:"flex",gap:8},children:e.colors.map(f=>i.jsx("div",{style:{width:32,height:32,borderRadius:4,background:f,boxShadow:`0 0 12px ${f}80`}},f))})]})]}),i.jsxs("div",{className:"card",children:[i.jsx("p",{className:"label",style:{marginBottom:16},children:"Step 3 of 3 — Load audio"}),i.jsx(ce,{onFile:I})]}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>a("input"),style:{width:"100%",fontSize:11},children:"← ANALYZE DIFFERENT SONG"})]}),b&&i.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[i.jsx("span",{style:{fontSize:16},children:"⚠️"}),i.jsxs("div",{children:[i.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:b})]}),i.jsx("button",{onClick:()=>g(""),style:{marginLeft:"auto",background:"none",color:"var(--text-dim)",fontSize:16},children:"×"})]})]})]})}T(document.getElementById("root")).render(i.jsx(c.StrictMode,{children:i.jsx(ve,{})}));
