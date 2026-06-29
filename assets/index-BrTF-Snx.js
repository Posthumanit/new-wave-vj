var he=Object.defineProperty;var me=(a,e,s)=>e in a?he(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var h=(a,e,s)=>me(a,typeof e!="symbol"?e+"":e,s);import{a as c,r as ye}from"./react-BPWfBN2A.js";import{G as K}from"./genai-D3MRwhLH.js";import{C as ge,W as xe,f as be,P as ve,e as we,a as Se,B as D,g as Ae,A as Te,b as L,T as ze,S as je,c as Ce,M as Ee,d as Me}from"./three-b5FbYRUM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();var J={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re=c,Ie=Symbol.for("react.element"),ke=Symbol.for("react.fragment"),Be=Object.prototype.hasOwnProperty,Pe=Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Oe={key:!0,ref:!0,__self:!0,__source:!0};function Z(a,e,s){var o,t={},i=null,n=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(n=e.ref);for(o in e)Be.call(e,o)&&!Oe.hasOwnProperty(o)&&(t[o]=e[o]);if(a&&a.defaultProps)for(o in e=a.defaultProps,e)t[o]===void 0&&(t[o]=e[o]);return{$$typeof:Ie,type:a,key:i,ref:n,props:t,_owner:Pe.current}}B.Fragment=ke;B.jsx=Z;B.jsxs=Z;J.exports=B;var r=J.exports,X,H=ye;X=H.createRoot,H.hydrateRoot;function Ne({onSubmit:a}){const[e,s]=c.useState(""),[o,t]=c.useState(!1),i=n=>{n.preventDefault();const l=e.trim();l&&a(l)};return r.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:r.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"Step 1 of 3"}),r.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),r.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",r.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),r.jsxs("form",{onSubmit:i,style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx("input",{id:"api-key",className:"input",type:o?"text":"password",value:e,onChange:n=>s(n.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),r.jsx("button",{type:"button",onClick:()=>t(n=>!n),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:o?"🙈":"👁️"})]}),r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!e.trim(),style:{opacity:e.trim()?1:.5},children:"CONTINUE →"})]})]})})}const C={mood:"energetic",energy:.7,bpm:120,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave",title:"",artist:"",album:"",year:""};async function De(a,e){const s=new K({apiKey:a}),o=`You are a music mood analyzer. Analyze this music reference: "${e}"

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

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people. Only fill title/artist/album/year when you actually recognize the specific track — never invent plausible-sounding metadata for a track you don't recognize.`;try{const n=((await s.models.generateContent({model:"gemini-2.0-flash",contents:o})).text??"").match(/\{[\s\S]*\}/);if(!n)throw new Error("No JSON in response");const l=JSON.parse(n[0]);return{mood:l.mood??C.mood,energy:typeof l.energy=="number"?l.energy:C.energy,bpm:typeof l.bpm=="number"&&l.bpm>0?Math.round(l.bpm):C.bpm,genre:l.genre??C.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:C.colors,description:l.description??C.description,imagePrompt:l.imagePrompt??C.imagePrompt,title:typeof l.title=="string"?l.title:"",artist:typeof l.artist=="string"?l.artist:"",album:typeof l.album=="string"?l.album:"",year:typeof l.year=="string"?l.year:""}}catch{return C}}async function Le(a,e){var o,t,i;const s=new K({apiKey:a});try{const l=(i=(t=(o=(await s.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${e}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:o[0])==null?void 0:t.image)==null?void 0:i.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const u=new Uint8Array(l);let f="";for(let d=0;d<u.byteLength;d++)f+=String.fromCharCode(u[d]);return`data:image/jpeg;base64,${btoa(f)}`}catch{return null}}function _e(a){const e=[/[?&]v=([A-Za-z0-9_-]{11})/,/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/];for(const s of e){const o=a.match(s);if(o)return o[1]}return null}async function Y(a){const e=await fetch("https://api.cobalt.tools/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});if(!e.ok)throw new Error(`cobalt ${e.status}`);const s=await e.json();if(!s.url)throw new Error(`cobalt: no url (status=${s.status})`);const o=await fetch(s.url);if(!o.ok)throw new Error(`audio fetch ${o.status}`);return o.blob()}async function We(a){try{return await Y({url:a,downloadMode:"audio",audioFormat:"mp3"})}catch{return Y({url:a,isAudioOnly:!0,audioFormat:"mp3",filenamePattern:"basic"})}}const Ue=/\s*[([][^)\]]*(official|video|audio|lyrics?|hd|hq|remaster\w*|visualizer|mv)[^)\]]*[)\]]\s*/gi,$=/ [-–—] /;function Fe(a){return a.replace(Ue," ").replace(/\s{2,}/g," ").trim()}async function Ge(a){try{const e=`https://www.youtube.com/watch?v=${a}`,s=await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(e)}&format=json`);if(!s.ok)return null;const o=await s.json();return o.title?{title:o.title,author:o.author_name??""}:null}catch{return null}}function He(a){const e=Fe(a.title);if($.test(e)){const[s,...o]=e.split($);return{artist:s.trim(),title:o.join(" - ").trim()}}return{artist:a.author,title:e}}const Ye={idle:"",analyzing:"Analyzing mood with Gemini…",downloading:"Fetching audio from YouTube…"};function $e({apiKey:a,onResult:e,onError:s}){const[o,t]=c.useState("https://youtu.be/HNqyA0zC894?si=KVOyElLI3IEh49di"),[i,n]=c.useState("idle"),l=async()=>{const f=o.trim();if(!f)return;const d=_e(f),y=f.startsWith("http")&&d!==null;n("analyzing");try{const p=De(a,f),v=y?We(f).catch(j=>(console.warn("Audio fetch failed:",j),null)):Promise.resolve(null),b=y&&d?Ge(d):Promise.resolve(null);y&&n("downloading");const[g,m,z]=await Promise.all([p,v,b]),S=z?He(z):null,T={...g,title:g.title||(S==null?void 0:S.title)||"",artist:g.artist||(S==null?void 0:S.artist)||""};e(T,m,d)}catch(p){s(p instanceof Error?p.message:"Something went wrong")}finally{n("idle")}},u=i!=="idle";return r.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:r.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"Step 2 of 2"}),r.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"PASTE A YOUTUBE LINK"}),r.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically. Or type an artist + song name to get visuals only."})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),r.jsx("input",{id:"url-input",className:"input",type:"url",inputMode:"url",value:o,onChange:f=>t(f.target.value),onKeyDown:f=>f.key==="Enter"&&!u&&void l(),placeholder:"https://youtube.com/watch?v=…",disabled:u,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"})]}),u?r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[r.jsx("div",{className:"spinner"}),r.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:Ye[i]})]}),r.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","downloading"].map(f=>r.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:i===f?"var(--pink)":"var(--border)",transition:"background 0.3s",boxShadow:i===f?"var(--glow-pink)":"none"}},f))})]}):r.jsx("button",{className:"btn btn-primary",onClick:()=>void l(),disabled:!o.trim(),style:{opacity:o.trim()?1:.5},children:"ANALYZE + FETCH AUDIO →"})]})})}function qe({onFile:a}){const e=c.useRef(null),s=t=>{var n;const i=(n=t.target.files)==null?void 0:n[0];i&&a(i)},o=t=>{t.preventDefault();const i=t.dataTransfer.files[0];i&&i.type.startsWith("audio/")&&a(i)};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[r.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",r.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),r.jsxs("div",{className:"fade-in",onDrop:o,onDragOver:t=>t.preventDefault(),onClick:()=>{var t;return(t=e.current)==null?void 0:t.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:t=>{t.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[r.jsx("input",{ref:e,type:"file",accept:"audio/*",style:{display:"none"},onChange:s}),r.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),r.jsxs("div",{style:{textAlign:"center"},children:[r.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),r.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const M=32,E={bass:0,mid:0,treble:0,beat:0,isPlaying:!1,spectrum:new Array(M).fill(0)};function Q(){return{energyHistory:new Array(60).fill(0),beat:0}}function ee(a,e,s,o){const t=e/s,i=Math.floor(300/t),n=Math.floor(3e3/t),l=a.length;let u=0,f=0,d=0;for(let m=1;m<i;m++)u+=a[m];for(let m=i;m<n;m++)f+=a[m];for(let m=n;m<l;m++)d+=a[m];const y=Math.min(u/(i-1)/255*2.2,1),p=Math.min(f/(n-i)/255*2.8,1),v=Math.min(d/(l-n)/255*3.5,1),b=y*1.8+p*.6,g=o.energyHistory.reduce((m,z)=>m+z,0)/o.energyHistory.length;return b>g*1.3&&b>.2&&(o.beat=Math.min(b/(g+.001),1)),o.beat*=.87,o.energyHistory.push(b),o.energyHistory.shift(),{bass:y,mid:p,treble:v,beat:o.beat}}function te(a){const e=new Array(M).fill(0),o=a.length*.6/M;for(let t=0;t<M;t++){const i=Math.floor(t*o),n=Math.max(i+1,Math.floor((t+1)*o));let l=0;for(let u=i;u<n;u++)l+=a[u];e[t]=Math.min(l/(n-i)/255*1.8,1)}return e}const A=1e4,Ve=32,Ke=`
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
    float theta = i * float(${A}) * GOLDEN_ANGLE;
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
    float col  = mod(i * float(${A}), cols);
    float row  = floor(i * float(${A}) / cols);
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
    float col  = mod(i * float(${A}), cols);
    float row  = floor(i * float(${A}) / cols);
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
    float twist  = i * float(${A}) * .04 + uTime;
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
`,Je=`
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
`;class Ze{constructor(e){h(this,"renderer");h(this,"scene");h(this,"camera");h(this,"material");h(this,"clock");h(this,"rafId",0);h(this,"bgMesh",null);h(this,"resizeObserver");h(this,"audioData",E);this.clock=new ge,this.renderer=new xe({canvas:e,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new be,this.camera=new ve(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const s=new we(this.buildGeometry(),this.material);this.scene.add(s),this.resizeObserver=new ResizeObserver(()=>this.resize(e)),this.resizeObserver.observe(e.parentElement??e),this.resize(e),this.animate()}buildGeometry(){const e=new Se,s=new Float32Array(A),o=new Float32Array(A);for(let t=0;t<A;t++)s[t]=t/A,o[t]=Math.random();return e.setAttribute("position",new D(new Float32Array(A*3),3)),e.setAttribute("aIndex",new D(s,1)),e.setAttribute("aRandom",new D(o,1)),e}buildMaterial(){return new Ae({vertexShader:Ke,fragmentShader:Je,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uSpectrum:{value:new Array(Ve).fill(0)},uColor1:{value:new L("#ff0080")},uColor2:{value:new L("#00ffff")},uColor3:{value:new L("#8000ff")}},transparent:!0,depthWrite:!1,blending:Te})}resize(e){const s=e.parentElement,o=s?s.clientWidth:window.innerWidth,t=s?s.clientHeight:window.innerHeight;this.renderer.setSize(o,t,!1),this.camera.aspect=o/t,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(o,t)}fitBgMesh(e,s){if(!this.bgMesh)return;const o=this.camera.position.z-this.bgMesh.position.z,t=this.camera.fov*Math.PI/180,i=2*Math.tan(t/2)*o,n=i*(e/s);this.bgMesh.scale.set(n,i,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime(),s=this.material.uniforms;s.uTime.value=e,s.uBass.value=this.audioData.bass,s.uMid.value=this.audioData.mid,s.uTreble.value=this.audioData.treble,s.uBeat.value=this.audioData.beat,s.uSpectrum.value=this.audioData.spectrum;const o=s.uMode.value;if(o===2||o===7)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const t=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(e*.08)*t,this.camera.position.z=Math.cos(e*.08)*t,this.camera.position.y=Math.sin(e*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const t=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t}this.renderer.render(this.scene,this.camera)}updateAudio(e){this.audioData=e}setMode(e){this.material.uniforms.uMode.value=e,(e===2||e===7)&&this.camera.lookAt(0,0,-10)}setColors(e){this.material.uniforms.uColor1.value.set(e[0]),this.material.uniforms.uColor2.value.set(e[1]),this.material.uniforms.uColor3.value.set(e[2])}setBackgroundImage(e){new ze().load(e,o=>{o.colorSpace=je,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const t=new Ce({map:o,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new Ee(new Me(1,1),t),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function Xe({audioData:a,moodData:e,backgroundImage:s,mode:o}){const t=c.useRef(null),i=c.useRef(null);return c.useEffect(()=>{if(!t.current)return;const n=new Ze(t.current);return i.current=n,()=>{n.dispose(),i.current=null}},[]),c.useEffect(()=>{var n;(n=i.current)==null||n.setMode(o)},[o]),c.useEffect(()=>{var n;s&&((n=i.current)==null||n.setBackgroundImage(s))},[s]),c.useEffect(()=>{var n;e&&((n=i.current)==null||n.setColors(e.colors))},[e]),c.useEffect(()=>{var n;(n=i.current)==null||n.updateAudio(a)},[a]),r.jsx("canvas",{ref:t,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const Qe=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"},{label:"EQ",icon:"📊"},{label:"MANDALA",icon:"✴️"},{label:"PLASMA",icon:"🔥"},{label:"STARS",icon:"✨"},{label:"RING",icon:"🎯"},{label:"SCOPE",icon:"📈"},{label:"HELIX",icon:"🧬"},{label:"BURST",icon:"🎆"}];function et({mode:a,onMode:e,isPlaying:s,onToggle:o,onReset:t,songName:i}){return r.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[i&&r.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",i.toUpperCase()]}),r.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"},children:Qe.map((n,l)=>r.jsxs("button",{className:`btn btn-ghost${a===l?" active":""}`,onClick:()=>e(l),style:{flexBasis:"calc(25% - 6px)",flexGrow:0,padding:"8px 2px",fontSize:10},children:[n.icon," ",n.label]},n.label))}),r.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[r.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),r.jsx("button",{className:"btn btn-primary",onClick:o,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:s?"⏸":"▶"})]})]})}let q=!1,_=[];function tt(){return new Promise(a=>{if(q){a();return}if(_.push(a),!document.getElementById("yt-api")){window.onYouTubeIframeAPIReady=()=>{q=!0,_.forEach(s=>s()),_=[]};const e=document.createElement("script");e.id="yt-api",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}const ot=c.forwardRef(function({videoId:e,onPlayingChange:s},o){const t=c.useRef(null),i=c.useRef(null);return c.useImperativeHandle(o,()=>({play(){var n;(n=i.current)==null||n.playVideo()},pause(){var n;(n=i.current)==null||n.pauseVideo()},getCurrentTime(){var n;return((n=i.current)==null?void 0:n.getCurrentTime())??0}})),c.useEffect(()=>{if(!t.current)return;const n=t.current;let l=!0;return tt().then(()=>{!l||!n||(i.current=new window.YT.Player(n,{videoId:e,playerVars:{autoplay:1,rel:0,modestbranding:1},events:{onStateChange:u=>s==null?void 0:s(u.data===1)}}))}),()=>{var u;l=!1,(u=i.current)==null||u.destroy(),i.current=null}},[e,s]),r.jsx("div",{style:{position:"absolute",top:12,right:12,width:160,height:90,borderRadius:6,overflow:"hidden",border:"1px solid rgba(255,255,255,0.2)",boxShadow:"0 4px 24px rgba(0,0,0,0.6)",zIndex:15},children:r.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})})});function rt({mood:a}){if(!a.title)return null;const e=[a.artist,a.album,a.year].filter(Boolean).join(" · ");return r.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"14px 180px 10px 16px",background:"linear-gradient(rgba(10,10,15,0.85), transparent)",textAlign:"center",pointerEvents:"none",zIndex:5},children:[r.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,textTransform:"uppercase"},children:a.title}),e&&r.jsx("p",{style:{fontSize:11,color:"var(--text-dim)",marginTop:2},children:e})]})}function st({lines:a,currentIndex:e,onNudge:s}){if(!a||!a.length)return null;const o=e>=0?a[e].text:"",t=e+1<a.length?a[e+1].text:"";return r.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:215,display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"0 24px",textAlign:"center",zIndex:4},children:[r.jsx("p",{style:{fontSize:18,fontWeight:700,letterSpacing:1,color:"var(--cyan, #00ffff)",textShadow:"0 0 16px rgba(0,255,255,0.6)",maxWidth:680,pointerEvents:"none"},children:o}),r.jsx("p",{style:{fontSize:13,color:"var(--text-dim)",opacity:.7,maxWidth:680,pointerEvents:"none"},children:t}),r.jsxs("div",{style:{display:"flex",gap:8,marginTop:2},children:[r.jsx("button",{className:"btn btn-ghost",style:{fontSize:10,padding:"4px 10px"},onClick:()=>s(-.5),children:"−0.5s"}),r.jsx("button",{className:"btn btn-ghost",style:{fontSize:10,padding:"4px 10px"},onClick:()=>s(.5),children:"+0.5s"})]})]})}class at{constructor(e){h(this,"context");h(this,"analyser");h(this,"source");h(this,"audio");h(this,"dataArray");h(this,"beatState");h(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=Q(),this.objectUrl=URL.createObjectURL(e),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:s,treble:o,beat:t}=ee(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),i=te(this.dataArray);return{bass:e,mid:s,treble:o,beat:t,isPlaying:!this.audio.paused,spectrum:i}}isPlaying(){return!this.audio.paused}getCurrentTime(){return this.audio.currentTime}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}function it(a){const[e,s]=c.useState(E),o=c.useRef(null),t=c.useRef(0);c.useEffect(()=>{if(!a)return;const l=new at(a);o.current=l,l.play();const u=()=>{s(l.getData()),t.current=requestAnimationFrame(u)};return t.current=requestAnimationFrame(u),()=>{cancelAnimationFrame(t.current),l.dispose(),o.current=null}},[a]);const i=c.useCallback(()=>{var l;return(l=o.current)==null?void 0:l.toggle()},[]),n=c.useCallback(()=>{var l;return((l=o.current)==null?void 0:l.getCurrentTime())??null},[]);return{data:e,toggle:i,getCurrentTime:n}}async function nt(){var s;if(!((s=navigator.mediaDevices)!=null&&s.getDisplayMedia))throw new Error("Tab audio capture isn't supported in this browser. Use desktop Chrome or Edge.");const a=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),e=a.getAudioTracks();if(a.getVideoTracks().forEach(o=>o.stop()),e.length===0)throw a.getTracks().forEach(o=>o.stop()),new Error('No audio was shared — pick "Chrome Tab", select the YouTube tab, and check "Share tab audio".');return a}class lt{constructor(e){h(this,"context");h(this,"analyser");h(this,"source");h(this,"stream");h(this,"dataArray");h(this,"beatState");this.stream=e,this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=Q(),this.source=this.context.createMediaStreamSource(e),this.source.connect(this.analyser)}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:s,treble:o,beat:t}=ee(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),i=te(this.dataArray);return{bass:e,mid:s,treble:o,beat:t,isPlaying:!0,spectrum:i}}dispose(){this.stream.getTracks().forEach(e=>e.stop()),this.context.close()}}function ct(){const[a,e]=c.useState(E),[s,o]=c.useState(!1),[t,i]=c.useState(""),n=c.useRef(null),l=c.useRef(0),u=c.useRef(!1),f=c.useCallback(()=>{var p;cancelAnimationFrame(l.current),(p=n.current)==null||p.dispose(),n.current=null,u.current=!1,o(!1),e(E)},[]),d=c.useCallback(async()=>{i("");try{const p=await nt(),v=new lt(p);n.current=v,u.current=!1,o(!0),p.getTracks().forEach(g=>g.addEventListener("ended",f));const b=()=>{e(u.current?E:v.getData()),l.current=requestAnimationFrame(b)};l.current=requestAnimationFrame(b)}catch(p){i(p instanceof Error?p.message:"Tab audio capture was cancelled or blocked")}},[f]),y=c.useCallback(()=>{u.current=!u.current},[]);return{data:a,active:s,error:t,start:d,stop:f,toggle:y}}const V=/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;function oe(a){const e=[];for(const s of a.split(`
`)){const o=[...s.matchAll(V)];if(!o.length)continue;const t=s.replace(V,"").trim();if(t)for(const i of o){const n=parseInt(i[1],10),l=parseInt(i[2],10),u=i[3]?parseInt(i[3].padEnd(3,"0"),10)/1e3:0;e.push({time:n*60+l+u,text:t})}}return e.sort((s,o)=>s.time-o.time)}async function ut(a,e){try{const s=new URLSearchParams({artist_name:a,track_name:e}),o=await fetch(`https://lrclib.net/api/get?${s}`);if(!o.ok)return null;const t=await o.json();return t.syncedLyrics?oe(t.syncedLyrics):null}catch{return null}}async function dt(a,e){try{const s=new URLSearchParams({q:`${a} ${e}`.trim()}),o=await fetch(`https://lrclib.net/api/search?${s}`);if(!o.ok)return null;const i=(await o.json()).find(n=>n.syncedLyrics);return i!=null&&i.syncedLyrics?oe(i.syncedLyrics):null}catch{return null}}async function ft(a,e){if(!a&&!e)return null;const s=await ut(a,e);if(s&&s.length)return s;const o=await dt(a,e);return o&&o.length?o:null}function pt({artist:a,title:e,isPlaying:s,getPlaybackTime:o}){const[t,i]=c.useState(null),[n,l]=c.useState(-1),[u,f]=c.useState(0),d=c.useRef(0),y=c.useRef(null),p=c.useRef(-1),v=c.useRef(0);c.useEffect(()=>{if(i(null),p.current=-1,l(-1),d.current=0,y.current=null,!a&&!e)return;let g=!1;return ft(a,e).then(m=>{g||i(m)}),()=>{g=!0}},[a,e]),c.useEffect(()=>{const g=()=>{const m=performance.now(),z=o();if(z==null&&(s?(y.current!=null&&(d.current+=(m-y.current)/1e3),y.current=m):y.current=null),t&&t.length){const S=(z??d.current)+u;let T=-1;for(let j=0;j<t.length&&t[j].time<=S;j++)T=j;T!==p.current&&(p.current=T,l(T))}v.current=requestAnimationFrame(g)};return v.current=requestAnimationFrame(g),()=>cancelAnimationFrame(v.current)},[t,u,s,o]);const b=c.useCallback(g=>f(m=>m+g),[]);return{lines:t,currentIndex:n,offset:u,nudge:b}}class ht{constructor(e,s){h(this,"bpm");h(this,"energy");h(this,"startTime");h(this,"beat",0);h(this,"prevPhase",0);h(this,"spectrum",new Array(M).fill(0));this.bpm=e,this.energy=s,this.startTime=performance.now()}getData(e){if(!e)return E;const s=(performance.now()-this.startTime)/1e3,o=60/this.bpm,t=s%o/o;t<this.prevPhase&&(this.beat=this.energy),this.prevPhase=t,this.beat*=.87;const i=Math.min(Math.pow(Math.max(0,1-t*2.5),2)*this.energy,1),n=s%(o/2)/(o/2),l=Math.min(Math.pow(Math.max(0,1-n*2.5),1.5)*this.energy*.55,1),u=Math.min((.4+.3*Math.sin(s*Math.PI*this.bpm/30))*this.energy*.45,1),f=Math.min(this.beat,1);for(let d=0;d<M;d++){const y=d/M,p=y<.33?i:y<.66?l:u,v=.5+.5*Math.sin(s*6+d*.7);this.spectrum[d]=Math.min(p*(.5+v*.6),1)}return{bass:i,mid:l,treble:u,beat:f,isPlaying:!0,spectrum:this.spectrum}}}function mt(){const[a,e]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[s,o]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[t,i]=c.useState(null),[n,l]=c.useState(null),[u,f]=c.useState(!1),[d,y]=c.useState(null),[p,v]=c.useState(null),[b,g]=c.useState(!1),[m,z]=c.useState(E),S=c.useRef(null),T=c.useRef(0),[j,re]=c.useState(0),[W,P]=c.useState(""),I=c.useRef(null),{data:se,toggle:ae,getCurrentTime:U}=it(d),w=ct();c.useEffect(()=>{if(!b||!t)return;S.current=new ht(t.bpm,t.energy);const x=()=>{z(S.current.getData(!0)),T.current=requestAnimationFrame(x)};return T.current=requestAnimationFrame(x),()=>{cancelAnimationFrame(T.current),S.current=null}},[b,t]),c.useEffect(()=>{w.active&&o("playing")},[w.active]);const O=w.active?w.data:d?se:b?m:E,ie=c.useCallback(()=>{var x;return d&&!w.active?U():!w.active&&!d&&b&&p?((x=I.current)==null?void 0:x.getCurrentTime())??null:null},[d,w.active,b,p,U]),N=pt({artist:(t==null?void 0:t.artist)??"",title:(t==null?void 0:t.title)??"",isPlaying:O.isPlaying,getPlaybackTime:ie}),ne=x=>{localStorage.setItem("nwvj-api-key",x),e(x),o("input")},le=c.useCallback((x,R,k)=>{i(x),l(null),y(null),v(k),g(!1),R?(y(R),o("playing")):o("ready"),f(!0),Le(a,x.imagePrompt).then(G=>{G&&l(G)}).catch(()=>{}).finally(()=>f(!1))},[a]),ce=c.useCallback(x=>P(x),[]),ue=x=>{y(x),g(!1),o("playing")},de=()=>{g(!0),o("playing")},fe=()=>{w.stop(),y(null),g(!1),i(null),l(null),P(""),v(null),o("input")},F=s==="playing",pe=d instanceof File?d.name.replace(/\.[^.]+$/,""):(t==null?void 0:t.description)??"";return r.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[F&&r.jsxs("div",{style:{position:"absolute",inset:0},children:[r.jsx(Xe,{audioData:O,moodData:t,backgroundImage:n,mode:j}),t&&r.jsx(rt,{mood:t}),r.jsx(st,{lines:N.lines,currentIndex:N.currentIndex,onNudge:N.nudge}),r.jsx(et,{mode:j,onMode:re,isPlaying:O.isPlaying,onToggle:w.active?w.toggle:d?ae:()=>{g(x=>{var R,k;return x?(R=I.current)==null||R.pause():(k=I.current)==null||k.play(),!x})},onReset:fe,songName:pe}),!w.active&&!d&&b&&p&&r.jsx(ot,{ref:I,videoId:p})]}),!F&&r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[r.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[r.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),r.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),s==="api-key"&&r.jsx(Ne,{onSubmit:ne}),s==="input"&&r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[r.jsx($e,{apiKey:a,onResult:le,onError:ce}),r.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),e(""),o("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),s==="ready"&&t&&r.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[r.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[n&&r.jsx("img",{src:n,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),r.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:10},children:[r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"Mood analyzed ✓"}),r.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:t.mood}),r.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[t.genre," · ",t.bpm," BPM · energy ",Math.round(t.energy*100),"%"]})]}),r.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:t.description}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.colors.map(x=>r.jsx("div",{style:{width:28,height:28,borderRadius:4,background:x,boxShadow:`0 0 12px ${x}80`}},x)),u&&r.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),n&&!u&&r.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),r.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"Capture tab audio (recommended)"}),r.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Open the video in a new tab, play it there, then share that tab's audio for real, perfectly-synced visuals. Desktop Chrome or Edge only."})]}),p&&r.jsx("button",{className:"btn btn-ghost",onClick:()=>window.open(`https://www.youtube.com/watch?v=${p}`,"_blank"),children:"↗ OPEN YOUTUBE IN NEW TAB"}),r.jsx("button",{className:"btn btn-primary",onClick:w.start,children:"🎙 CAPTURE TAB AUDIO"}),w.error&&r.jsx("p",{style:{fontSize:12,color:"var(--error, #ff4466)"},children:w.error})]}),r.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"Or upload an audio file"}),r.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Upload the audio file for real-time beat detection, or launch with approximate BPM-synced visuals only."})]}),r.jsx(qe,{onFile:ue}),r.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[r.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),r.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),r.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),r.jsxs("button",{className:"btn btn-secondary",onClick:de,children:["▶ LAUNCH WITH BPM VISUALS (",t.bpm," BPM, approximate sync)"]})]}),r.jsx("button",{className:"btn btn-ghost",onClick:()=>o("input"),style:{width:"100%",fontSize:11},children:"← TRY DIFFERENT SONG"})]}),W&&r.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[r.jsx("span",{style:{fontSize:16},children:"⚠️"}),r.jsxs("div",{style:{flex:1},children:[r.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),r.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:W})]}),r.jsx("button",{onClick:()=>P(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}X(document.getElementById("root")).render(r.jsx(c.StrictMode,{children:r.jsx(mt,{})}));
