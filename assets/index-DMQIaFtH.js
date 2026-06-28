var pe=Object.defineProperty;var he=(s,e,r)=>e in s?pe(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var h=(s,e,r)=>he(s,typeof e!="symbol"?e+"":e,r);import{a as c,r as me}from"./react-BPWfBN2A.js";import{G as V}from"./genai-D3MRwhLH.js";import{C as ye,W as ge,f as xe,P as be,e as ve,a as we,B as D,g as Se,A as Ae,b as L,T as Te,S as ze,c as Ce,M as je,d as Ee}from"./three-b5FbYRUM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();var K={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=c,ke=Symbol.for("react.element"),Ie=Symbol.for("react.fragment"),Re=Object.prototype.hasOwnProperty,Be=Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pe={key:!0,ref:!0,__self:!0,__source:!0};function J(s,e,r){var o,t={},i=null,n=null;r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(n=e.ref);for(o in e)Re.call(e,o)&&!Pe.hasOwnProperty(o)&&(t[o]=e[o]);if(s&&s.defaultProps)for(o in e=s.defaultProps,e)t[o]===void 0&&(t[o]=e[o]);return{$$typeof:ke,type:s,key:i,ref:n,props:t,_owner:Be.current}}B.Fragment=Ie;B.jsx=J;B.jsxs=J;K.exports=B;var a=K.exports,Z,H=me;Z=H.createRoot,H.hydrateRoot;function Oe({onSubmit:s}){const[e,r]=c.useState(""),[o,t]=c.useState(!1),i=n=>{n.preventDefault();const l=e.trim();l&&s(l)};return a.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[a.jsxs("div",{children:[a.jsx("p",{className:"label",children:"Step 1 of 3"}),a.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),a.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",a.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),a.jsxs("form",{onSubmit:i,style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{id:"api-key",className:"input",type:o?"text":"password",value:e,onChange:n=>r(n.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),a.jsx("button",{type:"button",onClick:()=>t(n=>!n),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:o?"🙈":"👁️"})]}),a.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!e.trim(),style:{opacity:e.trim()?1:.5},children:"CONTINUE →"})]})]})})}const T={mood:"energetic",energy:.7,bpm:120,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave",title:"",artist:"",album:"",year:""};async function Ne(s,e){const r=new V({apiKey:s}),o=`You are a music mood analyzer. Analyze this music reference: "${e}"

This could be a YouTube URL, song title, artist name, or description. Use your knowledge to determine musical characteristics.

Respond with ONLY a valid JSON object — no markdown, no explanation:
{
  "mood": "one of: euphoric|melancholic|aggressive|dreamy|energetic|dark|uplifting|hypnotic",
  "energy": 0.85,
  "bpm": 128,
  "genre": "one of: electronic|rock|pop|jazz|classical|hip-hop|ambient|metal|synthwave|house|techno",
  "colors": ["#hex1", "#hex2", "#hex3"],
  "description": "One sentence describing the musical atmosphere",
  "imagePrompt": "Detailed visual description for abstract psychedelic background art matching this music",
  "title": "Best-guess song title, or empty string if you can't identify the specific track",
  "artist": "Best-guess artist/band name, or empty string if unknown",
  "album": "Best-guess album name, or empty string if unknown",
  "year": "Best-guess release year as a string, or empty string if unknown"
}

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people. Only fill title/artist/album/year when you actually recognize the specific track — never invent plausible-sounding metadata for a track you don't recognize.`;try{const n=((await r.models.generateContent({model:"gemini-2.0-flash",contents:o})).text??"").match(/\{[\s\S]*\}/);if(!n)throw new Error("No JSON in response");const l=JSON.parse(n[0]);return{mood:l.mood??T.mood,energy:typeof l.energy=="number"?l.energy:T.energy,bpm:typeof l.bpm=="number"&&l.bpm>0?Math.round(l.bpm):T.bpm,genre:l.genre??T.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:T.colors,description:l.description??T.description,imagePrompt:l.imagePrompt??T.imagePrompt,title:typeof l.title=="string"?l.title:"",artist:typeof l.artist=="string"?l.artist:"",album:typeof l.album=="string"?l.album:"",year:typeof l.year=="string"?l.year:""}}catch{return T}}async function De(s,e){var o,t,i;const r=new V({apiKey:s});try{const l=(i=(t=(o=(await r.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${e}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:o[0])==null?void 0:t.image)==null?void 0:i.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const u=new Uint8Array(l);let f="";for(let d=0;d<u.byteLength;d++)f+=String.fromCharCode(u[d]);return`data:image/jpeg;base64,${btoa(f)}`}catch{return null}}function Le(s){const e=[/[?&]v=([A-Za-z0-9_-]{11})/,/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/];for(const r of e){const o=s.match(r);if(o)return o[1]}return null}async function Y(s){const e=await fetch("https://api.cobalt.tools/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error(`cobalt ${e.status}`);const r=await e.json();if(!r.url)throw new Error(`cobalt: no url (status=${r.status})`);const o=await fetch(r.url);if(!o.ok)throw new Error(`audio fetch ${o.status}`);return o.blob()}async function _e(s){try{return await Y({url:s,downloadMode:"audio",audioFormat:"mp3"})}catch{return Y({url:s,isAudioOnly:!0,audioFormat:"mp3",filenamePattern:"basic"})}}const We={idle:"",analyzing:"Analyzing mood with Gemini…",downloading:"Fetching audio from YouTube…"};function Ue({apiKey:s,onResult:e,onError:r}){const[o,t]=c.useState("https://youtu.be/HNqyA0zC894?si=KVOyElLI3IEh49di"),[i,n]=c.useState("idle"),l=async()=>{const f=o.trim();if(!f)return;const d=Le(f),g=f.startsWith("http")&&d!==null;n("analyzing");try{const p=Ne(s,f),v=g?_e(f).catch(m=>(console.warn("Audio fetch failed:",m),null)):Promise.resolve(null);g&&n("downloading");const[b,x]=await Promise.all([p,v]);e(b,x,d)}catch(p){r(p instanceof Error?p.message:"Something went wrong")}finally{n("idle")}},u=i!=="idle";return a.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[a.jsxs("div",{children:[a.jsx("p",{className:"label",children:"Step 2 of 2"}),a.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"PASTE A YOUTUBE LINK"}),a.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically. Or type an artist + song name to get visuals only."})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),a.jsx("input",{id:"url-input",className:"input",type:"url",inputMode:"url",value:o,onChange:f=>t(f.target.value),onKeyDown:f=>f.key==="Enter"&&!u&&void l(),placeholder:"https://youtube.com/watch?v=…",disabled:u,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"})]}),u?a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[a.jsx("div",{className:"spinner"}),a.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:We[i]})]}),a.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","downloading"].map(f=>a.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:i===f?"var(--pink)":"var(--border)",transition:"background 0.3s",boxShadow:i===f?"var(--glow-pink)":"none"}},f))})]}):a.jsx("button",{className:"btn btn-primary",onClick:()=>void l(),disabled:!o.trim(),style:{opacity:o.trim()?1:.5},children:"ANALYZE + FETCH AUDIO →"})]})})}function Fe({onFile:s}){const e=c.useRef(null),r=t=>{var n;const i=(n=t.target.files)==null?void 0:n[0];i&&s(i)},o=t=>{t.preventDefault();const i=t.dataTransfer.files[0];i&&i.type.startsWith("audio/")&&s(i)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[a.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",a.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),a.jsxs("div",{className:"fade-in",onDrop:o,onDragOver:t=>t.preventDefault(),onClick:()=>{var t;return(t=e.current)==null?void 0:t.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:t=>{t.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[a.jsx("input",{ref:e,type:"file",accept:"audio/*",style:{display:"none"},onChange:r}),a.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),a.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const j=32,z={bass:0,mid:0,treble:0,beat:0,isPlaying:!1,spectrum:new Array(j).fill(0)};function X(){return{energyHistory:new Array(60).fill(0),beat:0}}function Q(s,e,r,o){const t=e/r,i=Math.floor(300/t),n=Math.floor(3e3/t),l=s.length;let u=0,f=0,d=0;for(let m=1;m<i;m++)u+=s[m];for(let m=i;m<n;m++)f+=s[m];for(let m=n;m<l;m++)d+=s[m];const g=Math.min(u/(i-1)/255*2.2,1),p=Math.min(f/(n-i)/255*2.8,1),v=Math.min(d/(l-n)/255*3.5,1),b=g*1.8+p*.6,x=o.energyHistory.reduce((m,E)=>m+E,0)/o.energyHistory.length;return b>x*1.3&&b>.2&&(o.beat=Math.min(b/(x+.001),1)),o.beat*=.87,o.energyHistory.push(b),o.energyHistory.shift(),{bass:g,mid:p,treble:v,beat:o.beat}}function ee(s){const e=new Array(j).fill(0),o=s.length*.6/j;for(let t=0;t<j;t++){const i=Math.floor(t*o),n=Math.max(i+1,Math.floor((t+1)*o));let l=0;for(let u=i;u<n;u++)l+=s[u];e[t]=Math.min(l/(n-i)/255*1.8,1)}return e}const S=1e4,Ge=32,He=`
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
    float beat= sin(length(vec2(x,z))*2. - uTime*4.) * uBeat * 2.2;
    // beat scales the whole surface AND lifts it uniformly, so a hit reads as one big bump
    float y   = (w1 + w2 + w3) * (1. + uBeat * .9) + beat + uBeat * 1.4;

    pos   = vec3(x, y, z);
    float hn = clamp((y + 2.5)/5., 0., 1.);
    color = mix(uColor1, uColor2, hn);
    color = mix(color, uColor3, uBeat * .6);
    size  = 1.5 + abs(y)*.4 + uBeat * 4.;

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
    // beat scales the plasma amplitude AND lifts it, so a hit punches the whole field upward
    float y = plasma * (.4 + uBass*.5) * (1. + uBeat * 1.4) + uBeat * 1.6;

    pos = vec3(x, y, z);
    float pn = (plasma + 4.)/8.;
    color = mix(uColor1, uColor2, pn);
    color = mix(color, uColor3, uMid*.5);
    size  = 1.5 + abs(plasma)*.6 + uBeat*3.5;

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

  // Global beat punch: a small uniform scale on top of each mode's own reaction
  pos *= 1. + uBeat * 0.18;

  // Treble shimmer on color brightness
  vColor = color * (1. + uTreble * r * .6);
  vAlpha = .75 + r * .25;

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.);
  gl_Position   = projectionMatrix * mvPos;
  gl_PointSize  = clamp(size * (300. / -mvPos.z), .5, 24.);
}
`,Ye=`
precision highp float;

varying vec3  vColor;
varying float vAlpha;

void main(){
  vec2  uv   = gl_PointCoord - .5;
  float dist = length(uv);

  // Tight core edge (crisp dot) + a much smaller, faster-falloff glow so particles
  // read as defined points instead of soft overlapping blobs.
  float core = 1. - smoothstep(0., .1, dist);
  float ring = 1. - smoothstep(.08, .22, dist);
  float glow = pow(1. - smoothstep(.15, .42, dist), 3.);
  float alpha= (ring * .95 + glow * .22) * vAlpha;

  if(alpha < .01) discard;

  vec3 col = vColor + vColor * core * 1.1;
  gl_FragColor = vec4(col, alpha);
}
`;class $e{constructor(e){h(this,"renderer");h(this,"scene");h(this,"camera");h(this,"material");h(this,"clock");h(this,"rafId",0);h(this,"bgMesh",null);h(this,"resizeObserver");h(this,"audioData",z);this.clock=new ye,this.renderer=new ge({canvas:e,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new xe,this.camera=new be(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const r=new ve(this.buildGeometry(),this.material);this.scene.add(r),this.resizeObserver=new ResizeObserver(()=>this.resize(e)),this.resizeObserver.observe(e.parentElement??e),this.resize(e),this.animate()}buildGeometry(){const e=new we,r=new Float32Array(S),o=new Float32Array(S);for(let t=0;t<S;t++)r[t]=t/S,o[t]=Math.random();return e.setAttribute("position",new D(new Float32Array(S*3),3)),e.setAttribute("aIndex",new D(r,1)),e.setAttribute("aRandom",new D(o,1)),e}buildMaterial(){return new Se({vertexShader:He,fragmentShader:Ye,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uSpectrum:{value:new Array(Ge).fill(0)},uColor1:{value:new L("#ff0080")},uColor2:{value:new L("#00ffff")},uColor3:{value:new L("#8000ff")}},transparent:!0,depthWrite:!1,blending:Ae})}resize(e){const r=e.parentElement,o=r?r.clientWidth:window.innerWidth,t=r?r.clientHeight:window.innerHeight;this.renderer.setSize(o,t,!1),this.camera.aspect=o/t,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(o,t)}fitBgMesh(e,r){if(!this.bgMesh)return;const o=this.camera.position.z-this.bgMesh.position.z,t=this.camera.fov*Math.PI/180,i=2*Math.tan(t/2)*o,n=i*(e/r);this.bgMesh.scale.set(n,i,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime(),r=this.material.uniforms;r.uTime.value=e,r.uBass.value=this.audioData.bass,r.uMid.value=this.audioData.mid,r.uTreble.value=this.audioData.treble,r.uBeat.value=this.audioData.beat,r.uSpectrum.value=this.audioData.spectrum;const o=r.uMode.value;if(o===2||o===7)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const t=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(e*.08)*t,this.camera.position.z=Math.cos(e*.08)*t,this.camera.position.y=Math.sin(e*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const t=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t}this.renderer.render(this.scene,this.camera)}updateAudio(e){this.audioData=e}setMode(e){this.material.uniforms.uMode.value=e,(e===2||e===7)&&this.camera.lookAt(0,0,-10)}setColors(e){this.material.uniforms.uColor1.value.set(e[0]),this.material.uniforms.uColor2.value.set(e[1]),this.material.uniforms.uColor3.value.set(e[2])}setBackgroundImage(e){new Te().load(e,o=>{o.colorSpace=ze,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const t=new Ce({map:o,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new je(new Ee(1,1),t),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function qe({audioData:s,moodData:e,backgroundImage:r,mode:o}){const t=c.useRef(null),i=c.useRef(null);return c.useEffect(()=>{if(!t.current)return;const n=new $e(t.current);return i.current=n,()=>{n.dispose(),i.current=null}},[]),c.useEffect(()=>{var n;(n=i.current)==null||n.setMode(o)},[o]),c.useEffect(()=>{var n;r&&((n=i.current)==null||n.setBackgroundImage(r))},[r]),c.useEffect(()=>{var n;e&&((n=i.current)==null||n.setColors(e.colors))},[e]),c.useEffect(()=>{var n;(n=i.current)==null||n.updateAudio(s)},[s]),a.jsx("canvas",{ref:t,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const Ve=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"},{label:"EQ",icon:"📊"},{label:"MANDALA",icon:"✴️"},{label:"PLASMA",icon:"🔥"},{label:"STARS",icon:"✨"},{label:"RING",icon:"🎯"},{label:"SCOPE",icon:"📈"},{label:"HELIX",icon:"🧬"},{label:"BURST",icon:"🎆"}];function Ke({mode:s,onMode:e,isPlaying:r,onToggle:o,onReset:t,songName:i}){return a.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[i&&a.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",i.toUpperCase()]}),a.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"},children:Ve.map((n,l)=>a.jsxs("button",{className:`btn btn-ghost${s===l?" active":""}`,onClick:()=>e(l),style:{flexBasis:"calc(25% - 6px)",flexGrow:0,padding:"8px 2px",fontSize:10},children:[n.icon," ",n.label]},n.label))}),a.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[a.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),a.jsx("button",{className:"btn btn-primary",onClick:o,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:r?"⏸":"▶"})]})]})}let $=!1,_=[];function Je(){return new Promise(s=>{if($){s();return}if(_.push(s),!document.getElementById("yt-api")){window.onYouTubeIframeAPIReady=()=>{$=!0,_.forEach(r=>r()),_=[]};const e=document.createElement("script");e.id="yt-api",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}const Ze=c.forwardRef(function({videoId:e,onPlayingChange:r},o){const t=c.useRef(null),i=c.useRef(null);return c.useImperativeHandle(o,()=>({play(){var n;(n=i.current)==null||n.playVideo()},pause(){var n;(n=i.current)==null||n.pauseVideo()},getCurrentTime(){var n;return((n=i.current)==null?void 0:n.getCurrentTime())??0}})),c.useEffect(()=>{if(!t.current)return;const n=t.current;let l=!0;return Je().then(()=>{!l||!n||(i.current=new window.YT.Player(n,{videoId:e,playerVars:{autoplay:1,rel:0,modestbranding:1},events:{onStateChange:u=>r==null?void 0:r(u.data===1)}}))}),()=>{var u;l=!1,(u=i.current)==null||u.destroy(),i.current=null}},[e,r]),a.jsx("div",{style:{position:"absolute",top:12,right:12,width:160,height:90,borderRadius:6,overflow:"hidden",border:"1px solid rgba(255,255,255,0.2)",boxShadow:"0 4px 24px rgba(0,0,0,0.6)",zIndex:15},children:a.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})})});function Xe({mood:s}){if(!s.title)return null;const e=[s.artist,s.album,s.year].filter(Boolean).join(" · ");return a.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"14px 180px 10px 16px",background:"linear-gradient(rgba(10,10,15,0.85), transparent)",textAlign:"center",pointerEvents:"none",zIndex:5},children:[a.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,textTransform:"uppercase"},children:s.title}),e&&a.jsx("p",{style:{fontSize:11,color:"var(--text-dim)",marginTop:2},children:e})]})}function Qe({lines:s,currentIndex:e,onNudge:r}){if(!s||!s.length)return null;const o=e>=0?s[e].text:"",t=e+1<s.length?s[e+1].text:"";return a.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:215,display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"0 24px",textAlign:"center",zIndex:4},children:[a.jsx("p",{style:{fontSize:18,fontWeight:700,letterSpacing:1,color:"var(--cyan, #00ffff)",textShadow:"0 0 16px rgba(0,255,255,0.6)",maxWidth:680,pointerEvents:"none"},children:o}),a.jsx("p",{style:{fontSize:13,color:"var(--text-dim)",opacity:.7,maxWidth:680,pointerEvents:"none"},children:t}),a.jsxs("div",{style:{display:"flex",gap:8,marginTop:2},children:[a.jsx("button",{className:"btn btn-ghost",style:{fontSize:10,padding:"4px 10px"},onClick:()=>r(-.5),children:"−0.5s"}),a.jsx("button",{className:"btn btn-ghost",style:{fontSize:10,padding:"4px 10px"},onClick:()=>r(.5),children:"+0.5s"})]})]})}class et{constructor(e){h(this,"context");h(this,"analyser");h(this,"source");h(this,"audio");h(this,"dataArray");h(this,"beatState");h(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=X(),this.objectUrl=URL.createObjectURL(e),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:r,treble:o,beat:t}=Q(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),i=ee(this.dataArray);return{bass:e,mid:r,treble:o,beat:t,isPlaying:!this.audio.paused,spectrum:i}}isPlaying(){return!this.audio.paused}getCurrentTime(){return this.audio.currentTime}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}function tt(s){const[e,r]=c.useState(z),o=c.useRef(null),t=c.useRef(0);c.useEffect(()=>{if(!s)return;const l=new et(s);o.current=l,l.play();const u=()=>{r(l.getData()),t.current=requestAnimationFrame(u)};return t.current=requestAnimationFrame(u),()=>{cancelAnimationFrame(t.current),l.dispose(),o.current=null}},[s]);const i=c.useCallback(()=>{var l;return(l=o.current)==null?void 0:l.toggle()},[]),n=c.useCallback(()=>{var l;return((l=o.current)==null?void 0:l.getCurrentTime())??null},[]);return{data:e,toggle:i,getCurrentTime:n}}async function ot(){var r;if(!((r=navigator.mediaDevices)!=null&&r.getDisplayMedia))throw new Error("Tab audio capture isn't supported in this browser. Use desktop Chrome or Edge.");const s=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),e=s.getAudioTracks();if(s.getVideoTracks().forEach(o=>o.stop()),e.length===0)throw s.getTracks().forEach(o=>o.stop()),new Error('No audio was shared — pick "Chrome Tab", select the YouTube tab, and check "Share tab audio".');return s}class at{constructor(e){h(this,"context");h(this,"analyser");h(this,"source");h(this,"stream");h(this,"dataArray");h(this,"beatState");this.stream=e,this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=X(),this.source=this.context.createMediaStreamSource(e),this.source.connect(this.analyser)}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:r,treble:o,beat:t}=Q(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),i=ee(this.dataArray);return{bass:e,mid:r,treble:o,beat:t,isPlaying:!0,spectrum:i}}dispose(){this.stream.getTracks().forEach(e=>e.stop()),this.context.close()}}function rt(){const[s,e]=c.useState(z),[r,o]=c.useState(!1),[t,i]=c.useState(""),n=c.useRef(null),l=c.useRef(0),u=c.useRef(!1),f=c.useCallback(()=>{var p;cancelAnimationFrame(l.current),(p=n.current)==null||p.dispose(),n.current=null,u.current=!1,o(!1),e(z)},[]),d=c.useCallback(async()=>{i("");try{const p=await ot(),v=new at(p);n.current=v,u.current=!1,o(!0),p.getTracks().forEach(x=>x.addEventListener("ended",f));const b=()=>{e(u.current?z:v.getData()),l.current=requestAnimationFrame(b)};l.current=requestAnimationFrame(b)}catch(p){i(p instanceof Error?p.message:"Tab audio capture was cancelled or blocked")}},[f]),g=c.useCallback(()=>{u.current=!u.current},[]);return{data:s,active:r,error:t,start:d,stop:f,toggle:g}}const q=/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;function te(s){const e=[];for(const r of s.split(`
`)){const o=[...r.matchAll(q)];if(!o.length)continue;const t=r.replace(q,"").trim();if(t)for(const i of o){const n=parseInt(i[1],10),l=parseInt(i[2],10),u=i[3]?parseInt(i[3].padEnd(3,"0"),10)/1e3:0;e.push({time:n*60+l+u,text:t})}}return e.sort((r,o)=>r.time-o.time)}async function st(s,e){try{const r=new URLSearchParams({artist_name:s,track_name:e}),o=await fetch(`https://lrclib.net/api/get?${r}`);if(!o.ok)return null;const t=await o.json();return t.syncedLyrics?te(t.syncedLyrics):null}catch{return null}}async function it(s,e){try{const r=new URLSearchParams({q:`${s} ${e}`.trim()}),o=await fetch(`https://lrclib.net/api/search?${r}`);if(!o.ok)return null;const i=(await o.json()).find(n=>n.syncedLyrics);return i!=null&&i.syncedLyrics?te(i.syncedLyrics):null}catch{return null}}async function nt(s,e){if(!s&&!e)return null;const r=await st(s,e);if(r&&r.length)return r;const o=await it(s,e);return o&&o.length?o:null}function lt({artist:s,title:e,isPlaying:r,getPlaybackTime:o}){const[t,i]=c.useState(null),[n,l]=c.useState(-1),[u,f]=c.useState(0),d=c.useRef(0),g=c.useRef(null),p=c.useRef(-1),v=c.useRef(0);c.useEffect(()=>{if(i(null),p.current=-1,l(-1),d.current=0,g.current=null,!s&&!e)return;let x=!1;return nt(s,e).then(m=>{x||i(m)}),()=>{x=!0}},[s,e]),c.useEffect(()=>{const x=()=>{const m=performance.now(),E=o();if(E==null&&(r?(g.current!=null&&(d.current+=(m-g.current)/1e3),g.current=m):g.current=null),t&&t.length){const M=(E??d.current)+u;let A=-1;for(let C=0;C<t.length&&t[C].time<=M;C++)A=C;A!==p.current&&(p.current=A,l(A))}v.current=requestAnimationFrame(x)};return v.current=requestAnimationFrame(x),()=>cancelAnimationFrame(v.current)},[t,u,r,o]);const b=c.useCallback(x=>f(m=>m+x),[]);return{lines:t,currentIndex:n,offset:u,nudge:b}}class ct{constructor(e,r){h(this,"bpm");h(this,"energy");h(this,"startTime");h(this,"beat",0);h(this,"prevPhase",0);h(this,"spectrum",new Array(j).fill(0));this.bpm=e,this.energy=r,this.startTime=performance.now()}getData(e){if(!e)return z;const r=(performance.now()-this.startTime)/1e3,o=60/this.bpm,t=r%o/o;t<this.prevPhase&&(this.beat=this.energy),this.prevPhase=t,this.beat*=.87;const i=Math.min(Math.pow(Math.max(0,1-t*2.5),2)*this.energy,1),n=r%(o/2)/(o/2),l=Math.min(Math.pow(Math.max(0,1-n*2.5),1.5)*this.energy*.55,1),u=Math.min((.4+.3*Math.sin(r*Math.PI*this.bpm/30))*this.energy*.45,1),f=Math.min(this.beat,1);for(let d=0;d<j;d++){const g=d/j,p=g<.33?i:g<.66?l:u,v=.5+.5*Math.sin(r*6+d*.7);this.spectrum[d]=Math.min(p*(.5+v*.6),1)}return{bass:i,mid:l,treble:u,beat:f,isPlaying:!0,spectrum:this.spectrum}}}function ut(){const[s,e]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[r,o]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[t,i]=c.useState(null),[n,l]=c.useState(null),[u,f]=c.useState(!1),[d,g]=c.useState(null),[p,v]=c.useState(null),[b,x]=c.useState(!1),[m,E]=c.useState(z),M=c.useRef(null),A=c.useRef(0),[C,oe]=c.useState(0),[W,P]=c.useState(""),I=c.useRef(null),{data:ae,toggle:re,getCurrentTime:U}=tt(d),w=rt();c.useEffect(()=>{if(!b||!t)return;M.current=new ct(t.bpm,t.energy);const y=()=>{E(M.current.getData(!0)),A.current=requestAnimationFrame(y)};return A.current=requestAnimationFrame(y),()=>{cancelAnimationFrame(A.current),M.current=null}},[b,t]),c.useEffect(()=>{w.active&&o("playing")},[w.active]);const O=w.active?w.data:d?ae:b?m:z,se=c.useCallback(()=>{var y;return d&&!w.active?U():!w.active&&!d&&b&&p?((y=I.current)==null?void 0:y.getCurrentTime())??null:null},[d,w.active,b,p,U]),N=lt({artist:(t==null?void 0:t.artist)??"",title:(t==null?void 0:t.title)??"",isPlaying:O.isPlaying,getPlaybackTime:se}),ie=y=>{localStorage.setItem("nwvj-api-key",y),e(y),o("input")},ne=c.useCallback((y,k,R)=>{i(y),l(null),g(null),v(R),x(!1),k?(g(k),o("playing")):o("ready"),f(!0),De(s,y.imagePrompt).then(G=>{G&&l(G)}).catch(()=>{}).finally(()=>f(!1))},[s]),le=c.useCallback(y=>P(y),[]),ce=y=>{g(y),x(!1),o("playing")},ue=()=>{x(!0),o("playing")},de=()=>{w.stop(),g(null),x(!1),i(null),l(null),P(""),v(null),o("input")},F=r==="playing",fe=d instanceof File?d.name.replace(/\.[^.]+$/,""):(t==null?void 0:t.description)??"";return a.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[F&&a.jsxs("div",{style:{position:"absolute",inset:0},children:[a.jsx(qe,{audioData:O,moodData:t,backgroundImage:n,mode:C}),t&&a.jsx(Xe,{mood:t}),a.jsx(Qe,{lines:N.lines,currentIndex:N.currentIndex,onNudge:N.nudge}),a.jsx(Ke,{mode:C,onMode:oe,isPlaying:O.isPlaying,onToggle:w.active?w.toggle:d?re:()=>{x(y=>{var k,R;return y?(k=I.current)==null||k.pause():(R=I.current)==null||R.play(),!y})},onReset:de,songName:fe}),!w.active&&!d&&b&&p&&a.jsx(Ze,{ref:I,videoId:p})]}),!F&&a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[a.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),a.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),r==="api-key"&&a.jsx(Oe,{onSubmit:ie}),r==="input"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[a.jsx(Ue,{apiKey:s,onResult:ne,onError:le}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),e(""),o("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),r==="ready"&&t&&a.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[n&&a.jsx("img",{src:n,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),a.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:10},children:[a.jsxs("div",{children:[a.jsx("p",{className:"label",children:"Mood analyzed ✓"}),a.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:t.mood}),a.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[t.genre," · ",t.bpm," BPM · energy ",Math.round(t.energy*100),"%"]})]}),a.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:t.description}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.colors.map(y=>a.jsx("div",{style:{width:28,height:28,borderRadius:4,background:y,boxShadow:`0 0 12px ${y}80`}},y)),u&&a.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),n&&!u&&a.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{children:[a.jsx("p",{className:"label",children:"Capture tab audio (recommended)"}),a.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Open the video in a new tab, play it there, then share that tab's audio for real, perfectly-synced visuals. Desktop Chrome or Edge only."})]}),p&&a.jsx("button",{className:"btn btn-ghost",onClick:()=>window.open(`https://www.youtube.com/watch?v=${p}`,"_blank"),children:"↗ OPEN YOUTUBE IN NEW TAB"}),a.jsx("button",{className:"btn btn-primary",onClick:w.start,children:"🎙 CAPTURE TAB AUDIO"}),w.error&&a.jsx("p",{style:{fontSize:12,color:"var(--error, #ff4466)"},children:w.error})]}),a.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsxs("div",{children:[a.jsx("p",{className:"label",children:"Or upload an audio file"}),a.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Upload the audio file for real-time beat detection, or launch with approximate BPM-synced visuals only."})]}),a.jsx(Fe,{onFile:ce}),a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[a.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),a.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),a.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),a.jsxs("button",{className:"btn btn-secondary",onClick:ue,children:["▶ LAUNCH WITH BPM VISUALS (",t.bpm," BPM, approximate sync)"]})]}),a.jsx("button",{className:"btn btn-ghost",onClick:()=>o("input"),style:{width:"100%",fontSize:11},children:"← TRY DIFFERENT SONG"})]}),W&&a.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[a.jsx("span",{style:{fontSize:16},children:"⚠️"}),a.jsxs("div",{style:{flex:1},children:[a.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),a.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:W})]}),a.jsx("button",{onClick:()=>P(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}Z(document.getElementById("root")).render(a.jsx(c.StrictMode,{children:a.jsx(ut,{})}));
