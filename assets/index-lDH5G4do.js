var le=Object.defineProperty;var ce=(n,e,s)=>e in n?le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var d=(n,e,s)=>ce(n,typeof e!="symbol"?e+"":e,s);import{a as c,r as ue}from"./react-BPWfBN2A.js";import{G as Y}from"./genai-D3MRwhLH.js";import{C as de,W as pe,f as he,P as fe,e as me,a as ye,B as k,g as ge,A as xe,b as O,T as be,S as ve,c as we,M as Se,d as Ae}from"./three-b5FbYRUM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();var $={exports:{}},C={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=c,ze=Symbol.for("react.element"),Me=Symbol.for("react.fragment"),je=Object.prototype.hasOwnProperty,Ce=Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ee={key:!0,ref:!0,__self:!0,__source:!0};function V(n,e,s){var a,t={},i=null,r=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(r=e.ref);for(a in e)je.call(e,a)&&!Ee.hasOwnProperty(a)&&(t[a]=e[a]);if(n&&n.defaultProps)for(a in e=n.defaultProps,e)t[a]===void 0&&(t[a]=e[a]);return{$$typeof:ze,type:n,key:i,ref:r,props:t,_owner:Ce.current}}C.Fragment=Me;C.jsx=V;C.jsxs=V;$.exports=C;var o=$.exports,q,F=ue;q=F.createRoot,F.hydrateRoot;function Ie({onSubmit:n}){const[e,s]=c.useState(""),[a,t]=c.useState(!1),i=r=>{r.preventDefault();const l=e.trim();l&&n(l)};return o.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:o.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[o.jsxs("div",{children:[o.jsx("p",{className:"label",children:"Step 1 of 3"}),o.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),o.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",o.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),o.jsxs("form",{onSubmit:i,style:{display:"flex",flexDirection:"column",gap:12},children:[o.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),o.jsxs("div",{style:{position:"relative"},children:[o.jsx("input",{id:"api-key",className:"input",type:a?"text":"password",value:e,onChange:r=>s(r.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),o.jsx("button",{type:"button",onClick:()=>t(r=>!r),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:a?"🙈":"👁️"})]}),o.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!e.trim(),style:{opacity:e.trim()?1:.5},children:"CONTINUE →"})]})]})})}const A={mood:"energetic",energy:.7,bpm:120,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave"};async function Re(n,e){const s=new Y({apiKey:n}),a=`You are a music mood analyzer. Analyze this music reference: "${e}"

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

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people.`;try{const r=((await s.models.generateContent({model:"gemini-2.0-flash",contents:a})).text??"").match(/\{[\s\S]*\}/);if(!r)throw new Error("No JSON in response");const l=JSON.parse(r[0]);return{mood:l.mood??A.mood,energy:typeof l.energy=="number"?l.energy:A.energy,bpm:typeof l.bpm=="number"&&l.bpm>0?Math.round(l.bpm):A.bpm,genre:l.genre??A.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:A.colors,description:l.description??A.description,imagePrompt:l.imagePrompt??A.imagePrompt}}catch{return A}}async function Be(n,e){var a,t,i;const s=new Y({apiKey:n});try{const l=(i=(t=(a=(await s.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${e}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:a[0])==null?void 0:t.image)==null?void 0:i.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const u=new Uint8Array(l);let p="";for(let h=0;h<u.byteLength;h++)p+=String.fromCharCode(u[h]);return`data:image/jpeg;base64,${btoa(p)}`}catch{return null}}function Pe(n){const e=[/[?&]v=([A-Za-z0-9_-]{11})/,/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/];for(const s of e){const a=n.match(s);if(a)return a[1]}return null}async function G(n){const e=await fetch("https://api.cobalt.tools/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n)});if(!e.ok)throw new Error(`cobalt ${e.status}`);const s=await e.json();if(!s.url)throw new Error(`cobalt: no url (status=${s.status})`);const a=await fetch(s.url);if(!a.ok)throw new Error(`audio fetch ${a.status}`);return a.blob()}async function ke(n){try{return await G({url:n,downloadMode:"audio",audioFormat:"mp3"})}catch{return G({url:n,isAudioOnly:!0,audioFormat:"mp3",filenamePattern:"basic"})}}const Oe={idle:"",analyzing:"Analyzing mood with Gemini…",downloading:"Fetching audio from YouTube…"};function Ne({apiKey:n,onResult:e,onError:s}){const[a,t]=c.useState(""),[i,r]=c.useState("idle"),l=async()=>{const p=a.trim();if(!p)return;const h=Pe(p),g=p.startsWith("http")&&h!==null;r("analyzing");try{const f=Re(n,p),v=g?ke(p).catch(y=>(console.warn("Audio fetch failed:",y),null)):Promise.resolve(null);g&&r("downloading");const[x,b]=await Promise.all([f,v]);e(x,b,h)}catch(f){s(f instanceof Error?f.message:"Something went wrong")}finally{r("idle")}},u=i!=="idle";return o.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:o.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[o.jsxs("div",{children:[o.jsx("p",{className:"label",children:"Step 2 of 2"}),o.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"PASTE A YOUTUBE LINK"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically. Or type an artist + song name to get visuals only."})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[o.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),o.jsx("input",{id:"url-input",className:"input",type:"url",inputMode:"url",value:a,onChange:p=>t(p.target.value),onKeyDown:p=>p.key==="Enter"&&!u&&void l(),placeholder:"https://youtube.com/watch?v=…",disabled:u,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"})]}),u?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[o.jsx("div",{className:"spinner"}),o.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:Oe[i]})]}),o.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","downloading"].map(p=>o.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:i===p?"var(--pink)":"var(--border)",transition:"background 0.3s",boxShadow:i===p?"var(--glow-pink)":"none"}},p))})]}):o.jsx("button",{className:"btn btn-primary",onClick:()=>void l(),disabled:!a.trim(),style:{opacity:a.trim()?1:.5},children:"ANALYZE + FETCH AUDIO →"})]})})}function De({onFile:n}){const e=c.useRef(null),s=t=>{var r;const i=(r=t.target.files)==null?void 0:r[0];i&&n(i)},a=t=>{t.preventDefault();const i=t.dataTransfer.files[0];i&&i.type.startsWith("audio/")&&n(i)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[o.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",o.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),o.jsxs("div",{className:"fade-in",onDrop:a,onDragOver:t=>t.preventDefault(),onClick:()=>{var t;return(t=e.current)==null?void 0:t.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:t=>{t.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[o.jsx("input",{ref:e,type:"file",accept:"audio/*",style:{display:"none"},onChange:s}),o.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const z=32,T={bass:0,mid:0,treble:0,beat:0,isPlaying:!1,spectrum:new Array(z).fill(0)};function K(){return{energyHistory:new Array(60).fill(0),beat:0}}function J(n,e,s,a){const t=e/s,i=Math.floor(300/t),r=Math.floor(3e3/t),l=n.length;let u=0,p=0,h=0;for(let y=1;y<i;y++)u+=n[y];for(let y=i;y<r;y++)p+=n[y];for(let y=r;y<l;y++)h+=n[y];const g=Math.min(u/(i-1)/255*2.2,1),f=Math.min(p/(r-i)/255*2.8,1),v=Math.min(h/(l-r)/255*3.5,1),x=g*1.8+f*.6,b=a.energyHistory.reduce((y,E)=>y+E,0)/a.energyHistory.length;return x>b*1.4&&x>.25&&(a.beat=Math.min(x/(b+.001),1)),a.beat*=.82,a.energyHistory.push(x),a.energyHistory.shift(),{bass:g,mid:f,treble:v,beat:a.beat}}function Z(n){const e=new Array(z).fill(0),a=n.length*.6/z;for(let t=0;t<z;t++){const i=Math.floor(t*a),r=Math.max(i+1,Math.floor((t+1)*a));let l=0;for(let u=i;u<r;u++)l+=n[u];e[t]=Math.min(l/(r-i)/255*1.8,1)}return e}const S=1e4,_e=32,Le=`
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
    float theta = i * float(${S}) * GOLDEN_ANGLE;
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
    float col  = mod(i * float(${S}), cols);
    float row  = floor(i * float(${S}) / cols);
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
    float col  = mod(i * float(${S}), cols);
    float row  = floor(i * float(${S}) / cols);
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
    float twist  = i * float(${S}) * .04 + uTime;
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
`,We=`
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
`;class Ue{constructor(e){d(this,"renderer");d(this,"scene");d(this,"camera");d(this,"material");d(this,"clock");d(this,"rafId",0);d(this,"bgMesh",null);d(this,"resizeObserver");d(this,"audioData",T);this.clock=new de,this.renderer=new pe({canvas:e,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new he,this.camera=new fe(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const s=new me(this.buildGeometry(),this.material);this.scene.add(s),this.resizeObserver=new ResizeObserver(()=>this.resize(e)),this.resizeObserver.observe(e.parentElement??e),this.resize(e),this.animate()}buildGeometry(){const e=new ye,s=new Float32Array(S),a=new Float32Array(S);for(let t=0;t<S;t++)s[t]=t/S,a[t]=Math.random();return e.setAttribute("position",new k(new Float32Array(S*3),3)),e.setAttribute("aIndex",new k(s,1)),e.setAttribute("aRandom",new k(a,1)),e}buildMaterial(){return new ge({vertexShader:Le,fragmentShader:We,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uSpectrum:{value:new Array(_e).fill(0)},uColor1:{value:new O("#ff0080")},uColor2:{value:new O("#00ffff")},uColor3:{value:new O("#8000ff")}},transparent:!0,depthWrite:!1,blending:xe})}resize(e){const s=e.parentElement,a=s?s.clientWidth:window.innerWidth,t=s?s.clientHeight:window.innerHeight;this.renderer.setSize(a,t,!1),this.camera.aspect=a/t,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(a,t)}fitBgMesh(e,s){if(!this.bgMesh)return;const a=this.camera.position.z-this.bgMesh.position.z,t=this.camera.fov*Math.PI/180,i=2*Math.tan(t/2)*a,r=i*(e/s);this.bgMesh.scale.set(r,i,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime(),s=this.material.uniforms;s.uTime.value=e,s.uBass.value=this.audioData.bass,s.uMid.value=this.audioData.mid,s.uTreble.value=this.audioData.treble,s.uBeat.value=this.audioData.beat,s.uSpectrum.value=this.audioData.spectrum;const a=s.uMode.value;if(a===2||a===7)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const t=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(e*.08)*t,this.camera.position.z=Math.cos(e*.08)*t,this.camera.position.y=Math.sin(e*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const t=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t}this.renderer.render(this.scene,this.camera)}updateAudio(e){this.audioData=e}setMode(e){this.material.uniforms.uMode.value=e,(e===2||e===7)&&this.camera.lookAt(0,0,-10)}setColors(e){this.material.uniforms.uColor1.value.set(e[0]),this.material.uniforms.uColor2.value.set(e[1]),this.material.uniforms.uColor3.value.set(e[2])}setBackgroundImage(e){new be().load(e,a=>{a.colorSpace=ve,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const t=new we({map:a,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new Se(new Ae(1,1),t),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function Fe({audioData:n,moodData:e,backgroundImage:s,mode:a}){const t=c.useRef(null),i=c.useRef(null);return c.useEffect(()=>{if(!t.current)return;const r=new Ue(t.current);return i.current=r,()=>{r.dispose(),i.current=null}},[]),c.useEffect(()=>{var r;(r=i.current)==null||r.setMode(a)},[a]),c.useEffect(()=>{var r;s&&((r=i.current)==null||r.setBackgroundImage(s))},[s]),c.useEffect(()=>{var r;e&&((r=i.current)==null||r.setColors(e.colors))},[e]),c.useEffect(()=>{var r;(r=i.current)==null||r.updateAudio(n)},[n]),o.jsx("canvas",{ref:t,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const Ge=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"},{label:"EQ",icon:"📊"},{label:"MANDALA",icon:"✴️"},{label:"PLASMA",icon:"🔥"},{label:"STARS",icon:"✨"},{label:"RING",icon:"🎯"},{label:"SCOPE",icon:"📈"},{label:"HELIX",icon:"🧬"},{label:"BURST",icon:"🎆"}];function He({mode:n,onMode:e,isPlaying:s,onToggle:a,onReset:t,songName:i}){return o.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[i&&o.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",i.toUpperCase()]}),o.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"},children:Ge.map((r,l)=>o.jsxs("button",{className:`btn btn-ghost${n===l?" active":""}`,onClick:()=>e(l),style:{flexBasis:"calc(25% - 6px)",flexGrow:0,padding:"8px 2px",fontSize:10},children:[r.icon," ",r.label]},r.label))}),o.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[o.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),o.jsx("button",{className:"btn btn-primary",onClick:a,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:s?"⏸":"▶"})]})]})}let H=!1,N=[];function Ye(){return new Promise(n=>{if(H){n();return}if(N.push(n),!document.getElementById("yt-api")){window.onYouTubeIframeAPIReady=()=>{H=!0,N.forEach(s=>s()),N=[]};const e=document.createElement("script");e.id="yt-api",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}const $e=c.forwardRef(function({videoId:e,onPlayingChange:s},a){const t=c.useRef(null),i=c.useRef(null);return c.useImperativeHandle(a,()=>({play(){var r;(r=i.current)==null||r.playVideo()},pause(){var r;(r=i.current)==null||r.pauseVideo()}})),c.useEffect(()=>{if(!t.current)return;const r=t.current;let l=!0;return Ye().then(()=>{!l||!r||(i.current=new window.YT.Player(r,{videoId:e,playerVars:{autoplay:1,rel:0,modestbranding:1},events:{onStateChange:u=>s==null?void 0:s(u.data===1)}}))}),()=>{var u;l=!1,(u=i.current)==null||u.destroy(),i.current=null}},[e,s]),o.jsx("div",{style:{position:"absolute",top:12,right:12,width:160,height:90,borderRadius:6,overflow:"hidden",border:"1px solid rgba(255,255,255,0.2)",boxShadow:"0 4px 24px rgba(0,0,0,0.6)",zIndex:15},children:o.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})})});class Ve{constructor(e){d(this,"context");d(this,"analyser");d(this,"source");d(this,"audio");d(this,"dataArray");d(this,"beatState");d(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=K(),this.objectUrl=URL.createObjectURL(e),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:s,treble:a,beat:t}=J(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),i=Z(this.dataArray);return{bass:e,mid:s,treble:a,beat:t,isPlaying:!this.audio.paused,spectrum:i}}isPlaying(){return!this.audio.paused}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}function qe(n){const[e,s]=c.useState(T),a=c.useRef(null),t=c.useRef(0);c.useEffect(()=>{if(!n)return;const r=new Ve(n);a.current=r,r.play();const l=()=>{s(r.getData()),t.current=requestAnimationFrame(l)};return t.current=requestAnimationFrame(l),()=>{cancelAnimationFrame(t.current),r.dispose(),a.current=null}},[n]);const i=c.useCallback(()=>{var r;return(r=a.current)==null?void 0:r.toggle()},[]);return{data:e,toggle:i}}async function Ke(){var s;if(!((s=navigator.mediaDevices)!=null&&s.getDisplayMedia))throw new Error("Tab audio capture isn't supported in this browser. Use desktop Chrome or Edge.");const n=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),e=n.getAudioTracks();if(n.getVideoTracks().forEach(a=>a.stop()),e.length===0)throw n.getTracks().forEach(a=>a.stop()),new Error('No audio was shared — pick "Chrome Tab", select the YouTube tab, and check "Share tab audio".');return n}class Je{constructor(e){d(this,"context");d(this,"analyser");d(this,"source");d(this,"stream");d(this,"dataArray");d(this,"beatState");this.stream=e,this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=K(),this.source=this.context.createMediaStreamSource(e),this.source.connect(this.analyser)}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:s,treble:a,beat:t}=J(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),i=Z(this.dataArray);return{bass:e,mid:s,treble:a,beat:t,isPlaying:!0,spectrum:i}}dispose(){this.stream.getTracks().forEach(e=>e.stop()),this.context.close()}}function Ze(){const[n,e]=c.useState(T),[s,a]=c.useState(!1),[t,i]=c.useState(""),r=c.useRef(null),l=c.useRef(0),u=c.useRef(!1),p=c.useCallback(()=>{var f;cancelAnimationFrame(l.current),(f=r.current)==null||f.dispose(),r.current=null,u.current=!1,a(!1),e(T)},[]),h=c.useCallback(async()=>{i("");try{const f=await Ke(),v=new Je(f);r.current=v,u.current=!1,a(!0),f.getTracks().forEach(b=>b.addEventListener("ended",p));const x=()=>{e(u.current?T:v.getData()),l.current=requestAnimationFrame(x)};l.current=requestAnimationFrame(x)}catch(f){i(f instanceof Error?f.message:"Tab audio capture was cancelled or blocked")}},[p]),g=c.useCallback(()=>{u.current=!u.current},[]);return{data:n,active:s,error:t,start:h,stop:p,toggle:g}}class Xe{constructor(e,s){d(this,"bpm");d(this,"energy");d(this,"startTime");d(this,"beat",0);d(this,"prevPhase",0);d(this,"spectrum",new Array(z).fill(0));this.bpm=e,this.energy=s,this.startTime=performance.now()}getData(e){if(!e)return T;const s=(performance.now()-this.startTime)/1e3,a=60/this.bpm,t=s%a/a;t<this.prevPhase&&(this.beat=this.energy),this.prevPhase=t,this.beat*=.82;const i=Math.min(Math.pow(Math.max(0,1-t*2.5),2)*this.energy,1),r=s%(a/2)/(a/2),l=Math.min(Math.pow(Math.max(0,1-r*2.5),1.5)*this.energy*.55,1),u=Math.min((.4+.3*Math.sin(s*Math.PI*this.bpm/30))*this.energy*.45,1),p=Math.min(this.beat,1);for(let h=0;h<z;h++){const g=h/z,f=g<.33?i:g<.66?l:u,v=.5+.5*Math.sin(s*6+h*.7);this.spectrum[h]=Math.min(f*(.5+v*.6),1)}return{bass:i,mid:l,treble:u,beat:p,isPlaying:!0,spectrum:this.spectrum}}}function Qe(){const[n,e]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[s,a]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[t,i]=c.useState(null),[r,l]=c.useState(null),[u,p]=c.useState(!1),[h,g]=c.useState(null),[f,v]=c.useState(null),[x,b]=c.useState(!1),[y,E]=c.useState(T),I=c.useRef(null),R=c.useRef(0),[D,X]=c.useState(0),[_,B]=c.useState(""),P=c.useRef(null),{data:Q,toggle:ee}=qe(h),w=Ze();c.useEffect(()=>{if(!x||!t)return;I.current=new Xe(t.bpm,t.energy);const m=()=>{E(I.current.getData(!0)),R.current=requestAnimationFrame(m)};return R.current=requestAnimationFrame(m),()=>{cancelAnimationFrame(R.current),I.current=null}},[x,t]),c.useEffect(()=>{w.active&&a("playing")},[w.active]);const L=w.active?w.data:h?Q:x?y:T,te=m=>{localStorage.setItem("nwvj-api-key",m),e(m),a("input")},oe=c.useCallback((m,M,j)=>{i(m),l(null),g(null),v(j),b(!1),M?(g(M),a("playing")):a("ready"),p(!0),Be(n,m.imagePrompt).then(U=>{U&&l(U)}).catch(()=>{}).finally(()=>p(!1))},[n]),ae=c.useCallback(m=>B(m),[]),se=m=>{g(m),b(!1),a("playing")},re=()=>{b(!0),a("playing")},ie=()=>{w.stop(),g(null),b(!1),i(null),l(null),B(""),v(null),a("input")},W=s==="playing",ne=h instanceof File?h.name.replace(/\.[^.]+$/,""):(t==null?void 0:t.description)??"";return o.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[W&&o.jsxs("div",{style:{position:"absolute",inset:0},children:[o.jsx(Fe,{audioData:L,moodData:t,backgroundImage:r,mode:D}),o.jsx(He,{mode:D,onMode:X,isPlaying:L.isPlaying,onToggle:w.active?w.toggle:h?ee:()=>{b(m=>{var M,j;return m?(M=P.current)==null||M.pause():(j=P.current)==null||j.play(),!m})},onReset:ie,songName:ne}),!w.active&&!h&&x&&f&&o.jsx($e,{ref:P,videoId:f})]}),!W&&o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[o.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[o.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),o.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),s==="api-key"&&o.jsx(Ie,{onSubmit:te}),s==="input"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[o.jsx(Ne,{apiKey:n,onResult:oe,onError:ae}),o.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),e(""),a("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),s==="ready"&&t&&o.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[o.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[r&&o.jsx("img",{src:r,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),o.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:10},children:[o.jsxs("div",{children:[o.jsx("p",{className:"label",children:"Mood analyzed ✓"}),o.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:t.mood}),o.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[t.genre," · ",t.bpm," BPM · energy ",Math.round(t.energy*100),"%"]})]}),o.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:t.description}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.colors.map(m=>o.jsx("div",{style:{width:28,height:28,borderRadius:4,background:m,boxShadow:`0 0 12px ${m}80`}},m)),u&&o.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),r&&!u&&o.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),o.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:12},children:[o.jsxs("div",{children:[o.jsx("p",{className:"label",children:"Capture tab audio (recommended)"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Open the video in a new tab, play it there, then share that tab's audio for real, perfectly-synced visuals. Desktop Chrome or Edge only."})]}),f&&o.jsx("button",{className:"btn btn-ghost",onClick:()=>window.open(`https://www.youtube.com/watch?v=${f}`,"_blank"),children:"↗ OPEN YOUTUBE IN NEW TAB"}),o.jsx("button",{className:"btn btn-primary",onClick:w.start,children:"🎙 CAPTURE TAB AUDIO"}),w.error&&o.jsx("p",{style:{fontSize:12,color:"var(--error, #ff4466)"},children:w.error})]}),o.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsxs("div",{children:[o.jsx("p",{className:"label",children:"Or upload an audio file"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Upload the audio file for real-time beat detection, or launch with approximate BPM-synced visuals only."})]}),o.jsx(De,{onFile:se}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[o.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),o.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),o.jsxs("button",{className:"btn btn-secondary",onClick:re,children:["▶ LAUNCH WITH BPM VISUALS (",t.bpm," BPM, approximate sync)"]})]}),o.jsx("button",{className:"btn btn-ghost",onClick:()=>a("input"),style:{width:"100%",fontSize:11},children:"← TRY DIFFERENT SONG"})]}),_&&o.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[o.jsx("span",{style:{fontSize:16},children:"⚠️"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:_})]}),o.jsx("button",{onClick:()=>B(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}q(document.getElementById("root")).render(o.jsx(c.StrictMode,{children:o.jsx(Qe,{})}));
