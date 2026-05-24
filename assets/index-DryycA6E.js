var de=Object.defineProperty;var ue=(l,t,a)=>t in l?de(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a;var p=(l,t,a)=>ue(l,typeof t!="symbol"?t+"":t,a);import{a as n,r as he}from"./react-BPWfBN2A.js";import{G as Q}from"./genai-D3MRwhLH.js";import{C as pe,W as me,f as fe,P as ye,e as ge,a as xe,B as W,g as be,A as ve,b as H,T as we,S as Se,c as je,M as Ae,d as ze}from"./three-b5FbYRUM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();var ee={exports:{}},L={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=n,Ee=Symbol.for("react.element"),Ce=Symbol.for("react.fragment"),Re=Object.prototype.hasOwnProperty,Te=Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ke={key:!0,ref:!0,__self:!0,__source:!0};function te(l,t,a){var i,e={},o=null,r=null;a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(r=t.ref);for(i in t)Re.call(t,i)&&!ke.hasOwnProperty(i)&&(e[i]=t[i]);if(l&&l.defaultProps)for(i in t=l.defaultProps,t)e[i]===void 0&&(e[i]=t[i]);return{$$typeof:Ee,type:l,key:o,ref:r,props:e,_owner:Te.current}}L.Fragment=Ce;L.jsx=te;L.jsxs=te;ee.exports=L;var s=ee.exports,se,q=he;se=q.createRoot,q.hydrateRoot;function Pe({onSubmit:l}){const[t,a]=n.useState(""),[i,e]=n.useState(!1),o=r=>{r.preventDefault();const c=t.trim();c&&l(c)};return s.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:s.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[s.jsxs("div",{children:[s.jsx("p",{className:"label",children:"Step 1 of 3"}),s.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),s.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",s.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),s.jsxs("form",{onSubmit:o,style:{display:"flex",flexDirection:"column",gap:12},children:[s.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),s.jsxs("div",{style:{position:"relative"},children:[s.jsx("input",{id:"api-key",className:"input",type:i?"text":"password",value:t,onChange:r=>a(r.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),s.jsx("button",{type:"button",onClick:()=>e(r=>!r),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:i?"🙈":"👁️"})]}),s.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!t.trim(),style:{opacity:t.trim()?1:.5},children:"CONTINUE →"})]})]})})}const M={mood:"energetic",energy:.7,bpm:120,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave"};async function Ie(l,t){const a=new Q({apiKey:l}),i=`You are a music mood analyzer. Analyze this music reference: "${t}"

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

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people.`;try{const r=((await a.models.generateContent({model:"gemini-2.0-flash",contents:i})).text??"").match(/\{[\s\S]*\}/);if(!r)throw new Error("No JSON in response");const c=JSON.parse(r[0]);return{mood:c.mood??M.mood,energy:typeof c.energy=="number"?c.energy:M.energy,bpm:typeof c.bpm=="number"&&c.bpm>0?Math.round(c.bpm):M.bpm,genre:c.genre??M.genre,colors:Array.isArray(c.colors)&&c.colors.length>=3?[c.colors[0],c.colors[1],c.colors[2]]:M.colors,description:c.description??M.description,imagePrompt:c.imagePrompt??M.imagePrompt}}catch{return M}}async function Oe(l,t){var i,e,o;const a=new Q({apiKey:l});try{const c=(o=(e=(i=(await a.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${t}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:i[0])==null?void 0:e.image)==null?void 0:o.imageBytes;if(!c)return null;if(typeof c=="string")return`data:image/jpeg;base64,${c}`;const h=new Uint8Array(c);let u="";for(let f=0;f<h.byteLength;f++)u+=String.fromCharCode(h[f]);return`data:image/jpeg;base64,${btoa(u)}`}catch{return null}}function Ne(l){const t=[/[?&]v=([A-Za-z0-9_-]{11})/,/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/];for(const a of t){const i=l.match(a);if(i)return i[1]}return null}async function K(l){const t=await fetch("https://api.cobalt.tools/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)});if(!t.ok)throw new Error(`cobalt ${t.status}`);const a=await t.json();if(!a.url)throw new Error(`cobalt: no url (status=${a.status})`);const i=await fetch(a.url);if(!i.ok)throw new Error(`audio fetch ${i.status}`);return i.blob()}async function De(l){try{return await K({url:l,downloadMode:"audio",audioFormat:"mp3"})}catch{return K({url:l,isAudioOnly:!0,audioFormat:"mp3",filenamePattern:"basic"})}}const Be={idle:"",analyzing:"Analyzing mood with Gemini…",downloading:"Fetching audio from YouTube…"};function _e({apiKey:l,onResult:t,onError:a}){const[i,e]=n.useState(""),[o,r]=n.useState("idle"),c=async()=>{const u=i.trim();if(!u)return;const f=Ne(u),b=u.startsWith("http")&&f!==null;r("analyzing");try{const v=Ie(l,u),y=b?De(u).catch(w=>(console.warn("Audio fetch failed:",w),null)):Promise.resolve(null);b&&r("downloading");const[g,d]=await Promise.all([v,y]);t(g,d,f)}catch(v){a(v instanceof Error?v.message:"Something went wrong")}finally{r("idle")}},h=o!=="idle";return s.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:s.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[s.jsxs("div",{children:[s.jsx("p",{className:"label",children:"Step 2 of 2"}),s.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"PASTE A YOUTUBE LINK"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically. Or type an artist + song name to get visuals only."})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[s.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),s.jsx("input",{id:"url-input",className:"input",type:"url",inputMode:"url",value:i,onChange:u=>e(u.target.value),onKeyDown:u=>u.key==="Enter"&&!h&&void c(),placeholder:"https://youtube.com/watch?v=…",disabled:h,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"})]}),h?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[s.jsx("div",{className:"spinner"}),s.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:Be[o]})]}),s.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","downloading"].map(u=>s.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:o===u?"var(--pink)":"var(--border)",transition:"background 0.3s",boxShadow:o===u?"var(--glow-pink)":"none"}},u))})]}):s.jsx("button",{className:"btn btn-primary",onClick:()=>void c(),disabled:!i.trim(),style:{opacity:i.trim()?1:.5},children:"ANALYZE + FETCH AUDIO →"})]})})}function Le({onFile:l}){const t=n.useRef(null),a=e=>{var r;const o=(r=e.target.files)==null?void 0:r[0];o&&l(o)},i=e=>{e.preventDefault();const o=e.dataTransfer.files[0];o&&o.type.startsWith("audio/")&&l(o)};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[s.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",s.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),s.jsxs("div",{className:"fade-in",onDrop:i,onDragOver:e=>e.preventDefault(),onClick:()=>{var e;return(e=t.current)==null?void 0:e.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:e=>{e.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:e=>{e.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:e=>{e.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:e=>{e.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[s.jsx("input",{ref:t,type:"file",accept:"audio/*",style:{display:"none"},onChange:a}),s.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),s.jsxs("div",{style:{textAlign:"center"},children:[s.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const E=1e4,Ue=`
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
    float theta = i * float(${E}) * GOLDEN_ANGLE;
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
    float col  = mod(i * float(${E}), cols);
    float row  = floor(i * float(${E}) / cols);
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
`,Fe=`
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
`;class We{constructor(t){p(this,"renderer");p(this,"scene");p(this,"camera");p(this,"material");p(this,"clock");p(this,"rafId",0);p(this,"bgMesh",null);p(this,"resizeObserver");p(this,"audioData",{bass:0,mid:0,treble:0,beat:0,isPlaying:!1});this.clock=new pe(!1),this.renderer=new me({canvas:t,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new fe,this.camera=new ye(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const a=new ge(this.buildGeometry(),this.material);this.scene.add(a),this.resizeObserver=new ResizeObserver(()=>this.resize(t)),this.resizeObserver.observe(t.parentElement??t),this.resize(t)}buildGeometry(){const t=new xe,a=new Float32Array(E),i=new Float32Array(E);for(let e=0;e<E;e++)a[e]=e/E,i[e]=Math.random();return t.setAttribute("position",new W(new Float32Array(E*3),3)),t.setAttribute("aIndex",new W(a,1)),t.setAttribute("aRandom",new W(i,1)),t}buildMaterial(){return new be({vertexShader:Ue,fragmentShader:Fe,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uColor1:{value:new H("#ff0080")},uColor2:{value:new H("#00ffff")},uColor3:{value:new H("#8000ff")}},transparent:!0,depthWrite:!1,blending:ve})}resize(t){const a=t.parentElement,i=a?a.clientWidth:window.innerWidth,e=a?a.clientHeight:window.innerHeight;this.renderer.setSize(i,e,!1),this.camera.aspect=i/e,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(i,e)}fitBgMesh(t,a){if(!this.bgMesh)return;const i=this.camera.position.z-this.bgMesh.position.z,e=this.camera.fov*Math.PI/180,o=2*Math.tan(e/2)*i,r=o*(t/a);this.bgMesh.scale.set(r,o,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const t=this.clock.getElapsedTime(),a=this.material.uniforms;if(a.uTime.value=t,a.uBass.value=this.audioData.bass,a.uMid.value=this.audioData.mid,a.uTreble.value=this.audioData.treble,a.uBeat.value=this.audioData.beat,a.uMode.value===2)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const e=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(t*.08)*e,this.camera.position.z=Math.cos(t*.08)*e,this.camera.position.y=Math.sin(t*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const e=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*e,this.camera.position.y+=(Math.random()-.5)*e}this.renderer.render(this.scene,this.camera)}updateAudio(t){this.audioData=t,t.isPlaying&&this.rafId===0?(this.clock.start(),this.animate()):!t.isPlaying&&this.rafId!==0&&(cancelAnimationFrame(this.rafId),this.rafId=0)}setMode(t){this.material.uniforms.uMode.value=t,t===2&&this.camera.lookAt(0,0,-10)}setColors(t){this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])}setBackgroundImage(t){new we().load(t,i=>{i.colorSpace=Se,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const e=new je({map:i,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new Ae(new ze(1,1),e),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function He({audioData:l,moodData:t,backgroundImage:a,mode:i}){const e=n.useRef(null),o=n.useRef(null);return n.useEffect(()=>{if(!e.current)return;const r=new We(e.current);return o.current=r,()=>{r.dispose(),o.current=null}},[]),n.useEffect(()=>{var r;(r=o.current)==null||r.setMode(i)},[i]),n.useEffect(()=>{var r;a&&((r=o.current)==null||r.setBackgroundImage(a))},[a]),n.useEffect(()=>{var r;t&&((r=o.current)==null||r.setColors(t.colors))},[t]),n.useEffect(()=>{var r;(r=o.current)==null||r.updateAudio(l)},[l]),s.jsx("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const Ge=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"}];function Ye({mode:l,onMode:t,isPlaying:a,onToggle:i,onReset:e,songName:o,micActive:r,onMic:c}){return s.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[o&&s.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",o.toUpperCase()]}),s.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:Ge.map((h,u)=>s.jsxs("button",{className:`btn btn-ghost${l===u?" active":""}`,onClick:()=>t(u),style:{flex:1,padding:"8px 4px",fontSize:10},children:[h.icon," ",h.label]},h.label))}),s.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[s.jsx("button",{className:"btn btn-ghost",onClick:e,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),s.jsx("button",{className:"btn btn-primary",onClick:i,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:a?"⏸":"▶"}),c&&s.jsx("button",{className:`btn ${r?"btn-primary":"btn-ghost"}`,onClick:c,title:r?"Stop microphone":"Use microphone input",style:{fontSize:18,padding:"12px 16px"},children:"🎤"})]})]})}let J=!1,G=[];function $e(){return new Promise(l=>{if(J){l();return}if(G.push(l),!document.getElementById("yt-api")){window.onYouTubeIframeAPIReady=()=>{J=!0,G.forEach(a=>a()),G=[]};const t=document.createElement("script");t.id="yt-api",t.src="https://www.youtube.com/iframe_api",document.head.appendChild(t)}})}const Ve=n.forwardRef(function({videoId:t,onPlayingChange:a},i){const e=n.useRef(null),o=n.useRef(null);return n.useImperativeHandle(i,()=>({play(){var r;(r=o.current)==null||r.playVideo()},pause(){var r;(r=o.current)==null||r.pauseVideo()}})),n.useEffect(()=>{if(!e.current)return;const r=e.current;let c=!0;return $e().then(()=>{!c||!r||(o.current=new window.YT.Player(r,{videoId:t,playerVars:{autoplay:0,rel:0,modestbranding:1},events:{onStateChange:h=>a==null?void 0:a(h.data===1)}}))}),()=>{var h;c=!1,(h=o.current)==null||h.destroy(),o.current=null}},[t,a]),s.jsx("div",{style:{position:"absolute",bottom:100,right:12,width:160,height:90,borderRadius:6,overflow:"hidden",border:"1px solid rgba(255,255,255,0.2)",boxShadow:"0 4px 24px rgba(0,0,0,0.6)",zIndex:15},children:s.jsx("div",{ref:e,style:{width:"100%",height:"100%"}})})});class qe{constructor(t){p(this,"context");p(this,"analyser");p(this,"source");p(this,"audio");p(this,"dataArray");p(this,"energyHistory");p(this,"beat");p(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.energyHistory=new Array(60).fill(0),this.beat=0,this.objectUrl=URL.createObjectURL(t),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const t=this.context.sampleRate,a=this.analyser.fftSize,i=t/a,e=Math.floor(300/i),o=Math.floor(3e3/i),r=this.dataArray.length;let c=0,h=0,u=0;for(let d=1;d<e;d++)c+=this.dataArray[d];for(let d=e;d<o;d++)h+=this.dataArray[d];for(let d=o;d<r;d++)u+=this.dataArray[d];const f=Math.min(c/(e-1)/255*2.2,1),b=Math.min(h/(o-e)/255*2.8,1),v=Math.min(u/(r-o)/255*3.5,1),y=f*1.8+b*.6,g=this.energyHistory.reduce((d,w)=>d+w,0)/this.energyHistory.length;return y>g*1.4&&y>.25&&(this.beat=Math.min(y/(g+.001),1)),this.beat*=.82,this.energyHistory.push(y),this.energyHistory.shift(),{bass:f,mid:b,treble:v,beat:this.beat,isPlaying:!this.audio.paused}}isPlaying(){return!this.audio.paused}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}const Ke={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function Je(l){const[t,a]=n.useState(Ke),i=n.useRef(null),e=n.useRef(0);n.useEffect(()=>{if(!l)return;const r=new qe(l);i.current=r,r.play();const c=()=>{a(r.getData()),e.current=requestAnimationFrame(c)};return e.current=requestAnimationFrame(c),()=>{cancelAnimationFrame(e.current),r.dispose(),i.current=null}},[l]);const o=n.useCallback(()=>{var r;return(r=i.current)==null?void 0:r.toggle()},[]);return{data:t,toggle:o}}const Z={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function Ze(){const[l,t]=n.useState(Z),[a,i]=n.useState(!1),[e,o]=n.useState(""),r=n.useRef(null),c=n.useRef(null),h=n.useRef(0),u=n.useRef(0),f=n.useRef(new Array(60).fill(0)),b=n.useCallback(()=>{var y,g;cancelAnimationFrame(h.current),(y=c.current)==null||y.getTracks().forEach(d=>d.stop()),(g=r.current)==null||g.close(),r.current=null,c.current=null,u.current=0,f.current=new Array(60).fill(0),i(!1),t(Z)},[]),v=n.useCallback(async()=>{if(a){b();return}try{const y=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),g=new AudioContext,d=g.createAnalyser();d.fftSize=2048,d.smoothingTimeConstant=.85,g.createMediaStreamSource(y).connect(d),r.current=g,c.current=y;const w=new Uint8Array(d.frequencyBinCount),D=g.sampleRate/d.fftSize,S=Math.floor(300/D),j=Math.floor(3e3/D),P=w.length,B=()=>{d.getByteFrequencyData(w);let I=0,R=0,T=0;for(let x=1;x<S;x++)I+=w[x];for(let x=S;x<j;x++)R+=w[x];for(let x=j;x<P;x++)T+=w[x];const C=Math.min(I/(S-1)/255*2.2,1),_=Math.min(R/(j-S)/255*2.8,1),U=Math.min(T/(P-j)/255*3.5,1),k=C*1.8+_*.6,A=f.current,O=A.reduce((x,F)=>x+F,0)/A.length;k>O*1.4&&k>.25&&(u.current=Math.min(k/(O+.001),1)),u.current*=.82,A.push(k),A.shift(),t({bass:C,mid:_,treble:U,beat:u.current,isPlaying:!0}),h.current=requestAnimationFrame(B)};h.current=requestAnimationFrame(B),i(!0),o("")}catch(y){o(y instanceof Error?y.message:"Microphone access denied")}},[a,b]);return{data:l,active:a,toggle:v,error:e,stop:b}}const Xe={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};class Qe{constructor(t,a){p(this,"bpm");p(this,"energy");p(this,"startTime");p(this,"beat",0);p(this,"prevPhase",0);this.bpm=t,this.energy=a,this.startTime=performance.now()}reset(){this.startTime=performance.now(),this.beat=0,this.prevPhase=0}getData(t){if(!t)return Xe;const a=(performance.now()-this.startTime)/1e3,i=60/this.bpm,e=a%i/i;e<this.prevPhase&&(this.beat=this.energy),this.prevPhase=e,this.beat*=.82;const o=Math.pow(Math.max(0,1-e*2.5),2)*this.energy,r=a%(i/2)/(i/2),c=Math.pow(Math.max(0,1-r*2.5),1.5)*this.energy*.55,h=(.4+.3*Math.sin(a*Math.PI*this.bpm/30))*this.energy*.45;return{bass:Math.min(o,1),mid:Math.min(c,1),treble:Math.min(h,1),beat:Math.min(this.beat,1),isPlaying:!0}}}const X={bass:0,mid:0,treble:0,beat:0,isPlaying:!1};function et(){const[l,t]=n.useState(()=>localStorage.getItem("nwvj-api-key")??""),[a,i]=n.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[e,o]=n.useState(null),[r,c]=n.useState(null),[h,u]=n.useState(!1),[f,b]=n.useState(null),[v,y]=n.useState(null),[g,d]=n.useState(!1),[w,D]=n.useState(X),S=n.useRef(null),j=n.useRef(0),[P,B]=n.useState(0),[I,R]=n.useState(""),T=n.useRef(null),C=n.useRef(!1),{data:_,toggle:U}=Je(f),{data:k,active:A,toggle:O,error:x}=Ze(),F=n.useCallback(m=>{var z;m&&!C.current&&((z=S.current)==null||z.reset()),C.current=m},[]);n.useEffect(()=>{if(!g||!e)return;C.current=!1,S.current=new Qe(e.bpm,e.energy);const m=()=>{D(S.current.getData(C.current)),j.current=requestAnimationFrame(m)};return j.current=requestAnimationFrame(m),()=>{cancelAnimationFrame(j.current),S.current=null}},[g,e]);const Y=A?k:f?_:g?w:X,ie=m=>{localStorage.setItem("nwvj-api-key",m),t(m),i("input")},ae=n.useCallback((m,z,N)=>{o(m),c(null),b(null),y(N),d(!1),z?(b(z),i("playing")):N?(d(!1),i("playing")):i("ready"),u(!0),Oe(l,m.imagePrompt).then(V=>{V&&c(V)}).catch(()=>{}).finally(()=>u(!1))},[l]),re=n.useCallback(m=>R(m),[]),oe=m=>{b(m),d(!1),i("playing")},ne=()=>{d(!0),i("playing")},le=()=>{b(null),d(!1),o(null),c(null),R(""),y(null),i("input")},$=a==="playing"||A,ce=f instanceof File?f.name.replace(/\.[^.]+$/,""):(e==null?void 0:e.description)??"";return s.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[$&&s.jsxs("div",{style:{position:"absolute",inset:0},children:[s.jsx(He,{audioData:Y,moodData:e,backgroundImage:r,mode:P}),s.jsx(Ye,{mode:P,onMode:B,isPlaying:f?Y.isPlaying:g,onToggle:f?U:()=>{d(m=>{var z,N;return m?(z=T.current)==null||z.pause():(N=T.current)==null||N.play(),!m})},onReset:le,songName:ce,micActive:A,onMic:()=>void O()}),!f&&v&&s.jsx(Ve,{ref:T,videoId:v,onPlayingChange:F})]}),!$&&s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[s.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[s.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),s.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),a==="api-key"&&s.jsx(Pe,{onSubmit:ie}),a==="input"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[s.jsx(_e,{apiKey:l,onResult:ae,onError:re}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>void O(),children:"🎤 USE MICROPHONE"}),x&&s.jsx("p",{style:{fontSize:12,color:"var(--error, #ff4466)",textAlign:"center"},children:x}),s.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),t(""),i("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),a==="ready"&&e&&s.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[s.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[r&&s.jsx("img",{src:r,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),s.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:10},children:[s.jsxs("div",{children:[s.jsx("p",{className:"label",children:"Mood analyzed ✓"}),s.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:e.mood}),s.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[e.genre," · ",e.bpm," BPM · energy ",Math.round(e.energy*100),"%"]})]}),s.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:e.description}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.colors.map(m=>s.jsx("div",{style:{width:28,height:28,borderRadius:4,background:m,boxShadow:`0 0 12px ${m}80`}},m)),h&&s.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),r&&!h&&s.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),s.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[s.jsxs("div",{children:[s.jsx("p",{className:"label",children:"Upload audio to sync visuals"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Upload the audio file for real-time beat detection, or launch with BPM-synced visuals only."})]}),s.jsx(Le,{onFile:oe}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),s.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),s.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),s.jsxs("button",{className:"btn btn-secondary",onClick:ne,children:["▶ LAUNCH WITH BPM VISUALS (",e.bpm," BPM)"]})]}),s.jsx("button",{className:"btn btn-ghost",onClick:()=>i("input"),style:{width:"100%",fontSize:11},children:"← TRY DIFFERENT SONG"})]}),I&&s.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[s.jsx("span",{style:{fontSize:16},children:"⚠️"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:I})]}),s.jsx("button",{onClick:()=>R(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}se(document.getElementById("root")).render(s.jsx(n.StrictMode,{children:s.jsx(et,{})}));
