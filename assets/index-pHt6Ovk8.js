var J=Object.defineProperty;var Z=(n,t,o)=>t in n?J(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var d=(n,t,o)=>Z(n,typeof t!="symbol"?t+"":t,o);import{a as c,r as X}from"./react-BPWfBN2A.js";import{G as D}from"./genai-D3MRwhLH.js";import{C as Q,W as ee,f as te,P as ie,e as se,a as oe,B as M,g as ae,A as re,b as C,T as ne,S as le,c as ce,M as de,d as ue}from"./three-b5FbYRUM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();var B={exports:{}},S={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he=c,pe=Symbol.for("react.element"),me=Symbol.for("react.fragment"),fe=Object.prototype.hasOwnProperty,ye=he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ge={key:!0,ref:!0,__self:!0,__source:!0};function _(n,t,o){var s,e={},r=null,a=null;o!==void 0&&(r=""+o),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)fe.call(t,s)&&!ge.hasOwnProperty(s)&&(e[s]=t[s]);if(n&&n.defaultProps)for(s in t=n.defaultProps,t)e[s]===void 0&&(e[s]=t[s]);return{$$typeof:pe,type:n,key:r,ref:a,props:e,_owner:ye.current}}S.Fragment=me;S.jsx=_;S.jsxs=_;B.exports=S;var i=B.exports,L,O=X;L=O.createRoot,O.hydrateRoot;function xe({onSubmit:n}){const[t,o]=c.useState(""),[s,e]=c.useState(!1),r=a=>{a.preventDefault();const l=t.trim();l&&n(l)};return i.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:i.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Step 1 of 3"}),i.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),i.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",i.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),i.jsxs("form",{onSubmit:r,style:{display:"flex",flexDirection:"column",gap:12},children:[i.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),i.jsxs("div",{style:{position:"relative"},children:[i.jsx("input",{id:"api-key",className:"input",type:s?"text":"password",value:t,onChange:a=>o(a.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),i.jsx("button",{type:"button",onClick:()=>e(a=>!a),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:s?"🙈":"👁️"})]}),i.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!t.trim(),style:{opacity:t.trim()?1:.5},children:"CONTINUE →"})]})]})})}const v={mood:"energetic",energy:.7,bpm:120,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave"};async function ve(n,t){const o=new D({apiKey:n}),s=`You are a music mood analyzer. Analyze this music reference: "${t}"

This could be a YouTube URL, song title, artist name, or description. Use your knowledge to determine musical characteristics.

Respond with ONLY a valid JSON object — no markdown, no explanation:
{
  "mood": "one of: euphoric|melancholic|aggressive|dreamy|energetic|dark|uplifting|hypnotic",
  "energy": 0.85,
  "bpm": 128,
  "genre": "one of: electronic|rock|pop|jazz|classical|hip-hop|ambient|metal|synthwave|house|techno",
  "colors": ["#hex1", "#hex2", "#hex3"],
  "description": "One sentence describing the musical atmosphere",
  "imagePrompt": "Detailed visual description for abstract psychedelic background art matching this music"
}

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people.`;try{const a=((await o.models.generateContent({model:"gemini-2.0-flash",contents:s})).text??"").match(/\{[\s\S]*\}/);if(!a)throw new Error("No JSON in response");const l=JSON.parse(a[0]);return{mood:l.mood??v.mood,energy:typeof l.energy=="number"?l.energy:v.energy,bpm:typeof l.bpm=="number"&&l.bpm>0?Math.round(l.bpm):v.bpm,genre:l.genre??v.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:v.colors,description:l.description??v.description,imagePrompt:l.imagePrompt??v.imagePrompt}}catch{return v}}async function be(n,t){var s,e,r;const o=new D({apiKey:n});try{const l=(r=(e=(s=(await o.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${t}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:s[0])==null?void 0:e.image)==null?void 0:r.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const f=new Uint8Array(l);let u="";for(let m=0;m<f.byteLength;m++)u+=String.fromCharCode(f[m]);return`data:image/jpeg;base64,${btoa(u)}`}catch{return null}}function we(n){const t=[/[?&]v=([A-Za-z0-9_-]{11})/,/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/];for(const o of t){const s=n.match(o);if(s)return s[1]}return null}async function je(n){const t=await fetch("https://api.cobalt.tools/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({url:n,isAudioOnly:!0,audioFormat:"mp3",filenamePattern:"basic"})});if(!t.ok)throw new Error(`Cobalt API ${t.status}: ${t.statusText}`);const o=await t.json();if(o.status==="error"||o.status==="rate-limit")throw new Error(`Cobalt: ${o.status}`);if(!o.url)throw new Error("Cobalt returned no download URL");const s=await fetch(o.url);if(!s.ok)throw new Error(`Audio fetch failed: ${s.status}`);return s.blob()}const Se={idle:"",analyzing:"Analyzing mood with Gemini…",downloading:"Fetching audio from YouTube…"};function ze({apiKey:n,onResult:t,onError:o}){const[s,e]=c.useState(""),[r,a]=c.useState("idle"),l=async()=>{const u=s.trim();if(!u)return;const m=we(u),g=u.startsWith("http")&&m!==null;a("analyzing");try{const x=ve(n,u),y=g?je(u).catch(w=>(console.warn("Audio fetch failed:",w),null)):Promise.resolve(null);g&&a("downloading");const[j,p]=await Promise.all([x,y]);t(j,p,m)}catch(x){o(x instanceof Error?x.message:"Something went wrong")}finally{a("idle")}},f=r!=="idle";return i.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:i.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Step 2 of 2"}),i.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"PASTE A YOUTUBE LINK"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically. Or type an artist + song name to get visuals only."})]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[i.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),i.jsx("input",{id:"url-input",className:"input",type:"url",inputMode:"url",value:s,onChange:u=>e(u.target.value),onKeyDown:u=>u.key==="Enter"&&!f&&void l(),placeholder:"https://youtube.com/watch?v=…",disabled:f,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"})]}),f?i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[i.jsx("div",{className:"spinner"}),i.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:Se[r]})]}),i.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","downloading"].map(u=>i.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:r===u?"var(--pink)":"var(--border)",transition:"background 0.3s",boxShadow:r===u?"var(--glow-pink)":"none"}},u))})]}):i.jsx("button",{className:"btn btn-primary",onClick:()=>void l(),disabled:!s.trim(),style:{opacity:s.trim()?1:.5},children:"ANALYZE + FETCH AUDIO →"})]})})}function Ae({onFile:n}){const t=c.useRef(null),o=e=>{var a;const r=(a=e.target.files)==null?void 0:a[0];r&&n(r)},s=e=>{e.preventDefault();const r=e.dataTransfer.files[0];r&&r.type.startsWith("audio/")&&n(r)};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[i.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[i.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",i.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),i.jsxs("div",{className:"fade-in",onDrop:s,onDragOver:e=>e.preventDefault(),onClick:()=>{var e;return(e=t.current)==null?void 0:e.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:e=>{e.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:e=>{e.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[i.jsx("input",{ref:t,type:"file",accept:"audio/*",style:{display:"none"},onChange:o}),i.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),i.jsxs("div",{style:{textAlign:"center"},children:[i.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const b=1e4,Me=`
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
    float theta = i * float(${b}) * GOLDEN_ANGLE;
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
    float col  = mod(i * float(${b}), cols);
    float row  = floor(i * float(${b}) / cols);
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
`,Ce=`
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
`;class Ee{constructor(t){d(this,"renderer");d(this,"scene");d(this,"camera");d(this,"material");d(this,"clock");d(this,"rafId",0);d(this,"bgMesh",null);d(this,"resizeObserver");d(this,"audioData",{bass:0,mid:0,treble:0,beat:0,isPlaying:!1});this.clock=new Q,this.renderer=new ee({canvas:t,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new te,this.camera=new ie(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const o=new se(this.buildGeometry(),this.material);this.scene.add(o),this.resizeObserver=new ResizeObserver(()=>this.resize(t)),this.resizeObserver.observe(t.parentElement??t),this.resize(t),this.animate()}buildGeometry(){const t=new oe,o=new Float32Array(b),s=new Float32Array(b);for(let e=0;e<b;e++)o[e]=e/b,s[e]=Math.random();return t.setAttribute("position",new M(new Float32Array(b*3),3)),t.setAttribute("aIndex",new M(o,1)),t.setAttribute("aRandom",new M(s,1)),t}buildMaterial(){return new ae({vertexShader:Me,fragmentShader:Ce,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uColor1:{value:new C("#ff0080")},uColor2:{value:new C("#00ffff")},uColor3:{value:new C("#8000ff")}},transparent:!0,depthWrite:!1,blending:re})}resize(t){const o=t.parentElement,s=o?o.clientWidth:window.innerWidth,e=o?o.clientHeight:window.innerHeight;this.renderer.setSize(s,e,!1),this.camera.aspect=s/e,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(s,e)}fitBgMesh(t,o){if(!this.bgMesh)return;const s=this.camera.position.z-this.bgMesh.position.z,e=this.camera.fov*Math.PI/180,r=2*Math.tan(e/2)*s,a=r*(t/o);this.bgMesh.scale.set(a,r,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const t=this.clock.getElapsedTime(),o=this.material.uniforms;if(o.uTime.value=t,o.uBass.value=this.audioData.bass,o.uMid.value=this.audioData.mid,o.uTreble.value=this.audioData.treble,o.uBeat.value=this.audioData.beat,o.uMode.value===2)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const e=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(t*.08)*e,this.camera.position.z=Math.cos(t*.08)*e,this.camera.position.y=Math.sin(t*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const e=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e}this.renderer.render(this.scene,this.camera)}updateAudio(t){this.audioData=t}setMode(t){this.material.uniforms.uMode.value=t,t===2&&this.camera.lookAt(0,0,-10)}setColors(t){this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])}setBackgroundImage(t){new ne().load(t,s=>{s.colorSpace=le,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const e=new ce({map:s,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new de(new ue(1,1),e),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function Te({audioData:n,moodData:t,backgroundImage:o,mode:s}){const e=c.useRef(null),r=c.useRef(null);return c.useEffect(()=>{if(!e.current)return;const a=new Ee(e.current);return r.current=a,()=>{a.dispose(),r.current=null}},[]),c.useEffect(()=>{var a;(a=r.current)==null||a.setMode(s)},[s]),c.useEffect(()=>{var a;o&&((a=r.current)==null||a.setBackgroundImage(o))},[o]),c.useEffect(()=>{var a;t&&((a=r.current)==null||a.setColors(t.colors))},[t]),c.useEffect(()=>{var a;(a=r.current)==null||a.updateAudio(n)},[n]),i.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const Pe=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"}];function ke({mode:n,onMode:t,isPlaying:o,onToggle:s,onReset:e,songName:r}){return i.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[r&&i.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",r.toUpperCase()]}),i.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:Pe.map((a,l)=>i.jsxs("button",{className:`btn btn-ghost${n===l?" active":""}`,onClick:()=>t(l),style:{flex:1,padding:"8px 4px",fontSize:10},children:[a.icon," ",a.label]},a.label))}),i.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[i.jsx("button",{className:"btn btn-ghost",onClick:e,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),i.jsx("button",{className:"btn btn-primary",onClick:s,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:o?"⏸":"▶"})]})]})}class Re{constructor(t){d(this,"context");d(this,"analyser");d(this,"source");d(this,"audio");d(this,"dataArray");d(this,"energyHistory");d(this,"beat");d(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.energyHistory=new Array(60).fill(0),this.beat=0,this.objectUrl=URL.createObjectURL(t),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const t=this.context.sampleRate,o=this.analyser.fftSize,s=t/o,e=Math.floor(300/s),r=Math.floor(3e3/s),a=this.dataArray.length;let l=0,f=0,u=0;for(let p=1;p<e;p++)l+=this.dataArray[p];for(let p=e;p<r;p++)f+=this.dataArray[p];for(let p=r;p<a;p++)u+=this.dataArray[p];const m=Math.min(l/(e-1)/255*2.2,1),g=Math.min(f/(r-e)/255*2.8,1),x=Math.min(u/(a-r)/255*3.5,1),y=m*1.8+g*.6,j=this.energyHistory.reduce((p,w)=>p+w,0)/this.energyHistory.length;return y>j*1.4&&y>.25&&(this.beat=Math.min(y/(j+.001),1)),this.beat*=.82,this.energyHistory.push(y),this.energyHistory.shift(),{bass:m,mid:g,treble:x,beat:this.beat,isPlaying:!this.audio.paused}}isPlaying(){return!this.audio.paused}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}const Ie={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function Oe(n){const[t,o]=c.useState(Ie),s=c.useRef(null),e=c.useRef(0);c.useEffect(()=>{if(!n)return;const a=new Re(n);s.current=a,a.play();const l=()=>{o(a.getData()),e.current=requestAnimationFrame(l)};return e.current=requestAnimationFrame(l),()=>{cancelAnimationFrame(e.current),a.dispose(),s.current=null}},[n]);const r=c.useCallback(()=>{var a;return(a=s.current)==null?void 0:a.toggle()},[]);return{data:t,toggle:r}}const Ne={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};class De{constructor(t,o){d(this,"bpm");d(this,"energy");d(this,"startTime");d(this,"beat",0);d(this,"prevPhase",0);this.bpm=t,this.energy=o,this.startTime=performance.now()}getData(t){if(!t)return Ne;const o=(performance.now()-this.startTime)/1e3,s=60/this.bpm,e=o%s/s;e<this.prevPhase&&(this.beat=this.energy),this.prevPhase=e,this.beat*=.82;const r=Math.pow(Math.max(0,1-e*2.5),2)*this.energy,a=o%(s/2)/(s/2),l=Math.pow(Math.max(0,1-a*2.5),1.5)*this.energy*.55,f=(.4+.3*Math.sin(o*Math.PI*this.bpm/30))*this.energy*.45;return{bass:Math.min(r,1),mid:Math.min(l,1),treble:Math.min(f,1),beat:Math.min(this.beat,1),isPlaying:!0}}}const N={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function Be(){const[n,t]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[o,s]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[e,r]=c.useState(null),[a,l]=c.useState(null),[f,u]=c.useState(!1),[m,g]=c.useState(null),[x,y]=c.useState(!1),[j,p]=c.useState(N),w=c.useRef(null),z=c.useRef(0),[E,U]=c.useState(0),[T,A]=c.useState(""),{data:W,toggle:F}=Oe(m);c.useEffect(()=>{if(!x||!e)return;w.current=new De(e.bpm,e.energy);const h=()=>{p(w.current.getData(!0)),z.current=requestAnimationFrame(h)};return z.current=requestAnimationFrame(h),()=>{cancelAnimationFrame(z.current),w.current=null}},[x,e]);const P=m?W:x?j:N,G=h=>{localStorage.setItem("nwvj-api-key",h),t(h),s("input")},H=c.useCallback((h,R,_e)=>{r(h),l(null),g(null),y(!1),R?(g(R),s("playing")):s("ready"),u(!0),be(n,h.imagePrompt).then(I=>{I&&l(I)}).catch(()=>{}).finally(()=>u(!1))},[n]),Y=c.useCallback(h=>A(h),[]),$=h=>{g(h),y(!1),s("playing")},K=()=>{y(!0),s("playing")},V=()=>{g(null),y(!1),r(null),l(null),A(""),s("input")},k=o==="playing",q=m instanceof File?m.name.replace(/\.[^.]+$/,""):(e==null?void 0:e.description)??"";return i.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[k&&i.jsxs("div",{style:{position:"absolute",inset:0},children:[i.jsx(Te,{audioData:P,moodData:e,backgroundImage:a,mode:E}),i.jsx(ke,{mode:E,onMode:U,isPlaying:P.isPlaying,onToggle:m?F:()=>y(h=>!h),onReset:V,songName:q})]}),!k&&i.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[i.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),i.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),o==="api-key"&&i.jsx(xe,{onSubmit:G}),o==="input"&&i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[i.jsx(ze,{apiKey:n,onResult:H,onError:Y}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),t(""),s("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),o==="ready"&&e&&i.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[i.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[a&&i.jsx("img",{src:a,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),i.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:10},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Mood analyzed ✓"}),i.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:e.mood}),i.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[e.genre," · ",e.bpm," BPM · energy ",Math.round(e.energy*100),"%"]})]}),i.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:e.description}),i.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.colors.map(h=>i.jsx("div",{style:{width:28,height:28,borderRadius:4,background:h,boxShadow:`0 0 12px ${h}80`}},h)),f&&i.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),a&&!f&&i.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),i.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[i.jsxs("div",{children:[i.jsx("p",{className:"label",children:"Audio couldn't be auto-fetched"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"This happens when a song name was entered or the download service was unavailable. Upload an audio file, or launch with BPM-synced visuals only."})]}),i.jsx(Ae,{onFile:$}),i.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[i.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),i.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),i.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),i.jsxs("button",{className:"btn btn-secondary",onClick:K,children:["▶ LAUNCH WITH BPM VISUALS (",e.bpm," BPM)"]})]}),i.jsx("button",{className:"btn btn-ghost",onClick:()=>s("input"),style:{width:"100%",fontSize:11},children:"← TRY DIFFERENT SONG"})]}),T&&i.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[i.jsx("span",{style:{fontSize:16},children:"⚠️"}),i.jsxs("div",{style:{flex:1},children:[i.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),i.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:T})]}),i.jsx("button",{onClick:()=>A(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}L(document.getElementById("root")).render(i.jsx(c.StrictMode,{children:i.jsx(Be,{})}));
