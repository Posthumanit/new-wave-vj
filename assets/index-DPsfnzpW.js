var Ee=Object.defineProperty;var Me=(a,e,r)=>e in a?Ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var h=(a,e,r)=>Me(a,typeof e!="symbol"?e+"":e,r);import{a as c,r as ke}from"./react-BPWfBN2A.js";import{G as re}from"./genai-D3MRwhLH.js";import{C as Ie,W as Re,f as Be,P as Pe,e as Ne,a as Oe,B as G,g as De,A as _e,b as H,T as Le,S as Ue,c as We,M as Fe,d as Ge}from"./three-b5FbYRUM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();var ne={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=c,Ye=Symbol.for("react.element"),$e=Symbol.for("react.fragment"),qe=Object.prototype.hasOwnProperty,Ve=He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0};function ae(a,e,r){var o,t={},s=null,i=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(i=e.ref);for(o in e)qe.call(e,o)&&!Ke.hasOwnProperty(o)&&(t[o]=e[o]);if(a&&a.defaultProps)for(o in e=a.defaultProps,e)t[o]===void 0&&(t[o]=e[o]);return{$$typeof:Ye,type:a,key:s,ref:i,props:t,_owner:Ve.current}}D.Fragment=$e;D.jsx=ae;D.jsxs=ae;ne.exports=D;var n=ne.exports,se,X=ke;se=X.createRoot,X.hydrateRoot;function Je({onSubmit:a}){const[e,r]=c.useState(""),[o,t]=c.useState(!1),s=i=>{i.preventDefault();const l=e.trim();l&&a(l)};return n.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:n.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[n.jsxs("div",{children:[n.jsx("p",{className:"label",children:"Step 1 of 3"}),n.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"GEMINI API KEY"}),n.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Your key is stored locally in the browser and never sent to any server. Get a free key at"," ",n.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"aistudio.google.com"})]})]}),n.jsxs("form",{onSubmit:s,style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsx("label",{className:"label",htmlFor:"api-key",children:"API KEY"}),n.jsxs("div",{style:{position:"relative"},children:[n.jsx("input",{id:"api-key",className:"input",type:o?"text":"password",value:e,onChange:i=>r(i.target.value),placeholder:"AIza...",autoComplete:"off",spellCheck:!1,style:{paddingRight:48}}),n.jsx("button",{type:"button",onClick:()=>t(i=>!i),style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",color:"var(--text-dim)",fontSize:16,padding:4},children:o?"🙈":"👁️"})]}),n.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!e.trim(),style:{opacity:e.trim()?1:.5},children:"CONTINUE →"})]})]})})}const E={mood:"energetic",energy:.7,bpm:120,genre:"electronic",colors:["#ff0080","#00ffff","#8000ff"],description:"High-energy electronic music with pulsing synthesizers",imagePrompt:"Abstract psychedelic digital art, neon pink and cyan laser beams, fractal geometry, music visualizer aesthetic, dark background, 80s synthwave",title:"",artist:"",album:"",year:""};async function Ze(a,e){const r=new re({apiKey:a}),o=`You are a music mood analyzer. Analyze this music reference: "${e}"

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

bpm must be a realistic integer tempo for this genre/song. colors must be 3 hex values evoking the mood. imagePrompt describes surreal abstract VJ visuals — no text, no people. Only fill title/artist/album/year when you actually recognize the specific track — never invent plausible-sounding metadata for a track you don't recognize.`;try{const i=((await r.models.generateContent({model:"gemini-2.0-flash",contents:o})).text??"").match(/\{[\s\S]*\}/);if(!i)throw new Error("No JSON in response");const l=JSON.parse(i[0]);return{mood:l.mood??E.mood,energy:typeof l.energy=="number"?l.energy:E.energy,bpm:typeof l.bpm=="number"&&l.bpm>0?Math.round(l.bpm):E.bpm,genre:l.genre??E.genre,colors:Array.isArray(l.colors)&&l.colors.length>=3?[l.colors[0],l.colors[1],l.colors[2]]:E.colors,description:l.description??E.description,imagePrompt:l.imagePrompt??E.imagePrompt,title:typeof l.title=="string"?l.title:"",artist:typeof l.artist=="string"?l.artist:"",album:typeof l.album=="string"?l.album:"",year:typeof l.year=="string"?l.year:""}}catch{return E}}async function Xe(a,e){var o,t,s;const r=new re({apiKey:a});try{const l=(s=(t=(o=(await r.models.generateImages({model:"imagen-3.0-generate-002",prompt:`${e}. Abstract art, no text, no people, psychedelic music visualizer background, high quality`,config:{numberOfImages:1,aspectRatio:"16:9",outputMimeType:"image/jpeg"}})).generatedImages)==null?void 0:o[0])==null?void 0:t.image)==null?void 0:s.imageBytes;if(!l)return null;if(typeof l=="string")return`data:image/jpeg;base64,${l}`;const u=new Uint8Array(l);let f="";for(let d=0;d<u.byteLength;d++)f+=String.fromCharCode(u[d]);return`data:image/jpeg;base64,${btoa(f)}`}catch{return null}}function Qe(a){const e=[/[?&]v=([A-Za-z0-9_-]{11})/,/youtu\.be\/([A-Za-z0-9_-]{11})/,/youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/];for(const r of e){const o=a.match(r);if(o)return o[1]}return null}async function Q(a){const e=await fetch("https://api.cobalt.tools/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)});if(!e.ok)throw new Error(`cobalt ${e.status}`);const r=await e.json();if(!r.url)throw new Error(`cobalt: no url (status=${r.status})`);const o=await fetch(r.url);if(!o.ok)throw new Error(`audio fetch ${o.status}`);return o.blob()}async function et(a){try{return await Q({url:a,downloadMode:"audio",audioFormat:"mp3"})}catch{return Q({url:a,isAudioOnly:!0,audioFormat:"mp3",filenamePattern:"basic"})}}const tt=/\s*[([][^)\]]*(official|video|audio|lyrics?|hd|hq|remaster\w*|visualizer|mv)[^)\]]*[)\]]\s*/gi,ee=/ [-–—] /;function ot(a){return a.replace(tt," ").replace(/\s{2,}/g," ").trim()}async function rt(a){try{const e=`https://www.youtube.com/watch?v=${a}`,r=await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(e)}&format=json`);if(!r.ok)return null;const o=await r.json();return o.title?{title:o.title,author:o.author_name??""}:null}catch{return null}}function nt(a){const e=ot(a.title);if(ee.test(e)){const[r,...o]=e.split(ee);return{artist:r.trim(),title:o.join(" - ").trim()}}return{artist:a.author,title:e}}const at={idle:"",analyzing:"Analyzing mood with Gemini…",downloading:"Fetching audio from YouTube…"};function st({apiKey:a,onResult:e,onError:r}){const[o,t]=c.useState("https://youtu.be/HNqyA0zC894?si=KVOyElLI3IEh49di"),[s,i]=c.useState("idle"),l=async()=>{const f=o.trim();if(!f)return;const d=Qe(f),y=f.startsWith("http")&&d!==null;i("analyzing");try{const g=Ze(a,f),S=y?et(f).catch(R=>(console.warn("Audio fetch failed:",R),null)):Promise.resolve(null),m=y&&d?rt(d):Promise.resolve(null);y&&i("downloading");const[b,x,A]=await Promise.all([g,S,m]),v=A?nt(A):null,z={...b,title:b.title||(v==null?void 0:v.title)||"",artist:b.artist||(v==null?void 0:v.artist)||""};e(z,x,d)}catch(g){r(g instanceof Error?g.message:"Something went wrong")}finally{i("idle")}},u=s!=="idle";return n.jsx("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto"},children:n.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:20},children:[n.jsxs("div",{children:[n.jsx("p",{className:"label",children:"Step 2 of 2"}),n.jsx("h2",{style:{fontSize:18,fontWeight:700,letterSpacing:2,marginBottom:8},children:"PASTE A YOUTUBE LINK"}),n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:"Paste a YouTube URL — Gemini analyzes the mood and the audio downloads automatically. Or type an artist + song name to get visuals only."})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[n.jsx("label",{className:"label",htmlFor:"url-input",children:"YOUTUBE URL OR SONG NAME"}),n.jsx("input",{id:"url-input",className:"input",type:"url",inputMode:"url",value:o,onChange:f=>t(f.target.value),onKeyDown:f=>f.key==="Enter"&&!u&&void l(),placeholder:"https://youtube.com/watch?v=…",disabled:u,spellCheck:!1,autoCapitalize:"none",autoCorrect:"off"})]}),u?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[n.jsx("div",{className:"spinner"}),n.jsx("span",{style:{fontSize:12,color:"var(--text-dim)",letterSpacing:1},children:at[s]})]}),n.jsx("div",{style:{display:"flex",gap:8},children:["analyzing","downloading"].map(f=>n.jsx("div",{style:{flex:1,height:2,borderRadius:1,background:s===f?"var(--pink)":"var(--border)",transition:"background 0.3s",boxShadow:s===f?"var(--glow-pink)":"none"}},f))})]}):n.jsx("button",{className:"btn btn-primary",onClick:()=>void l(),disabled:!o.trim(),style:{opacity:o.trim()?1:.5},children:"ANALYZE + FETCH AUDIO →"})]})})}function it({onFile:a}){const e=c.useRef(null),r=t=>{var i;const s=(i=t.target.files)==null?void 0:i[0];s&&a(s)},o=t=>{t.preventDefault();const s=t.dataTransfer.files[0];s&&s.type.startsWith("audio/")&&a(s)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsxs("div",{style:{background:"rgba(0,255,255,0.06)",border:"1px solid rgba(0,255,255,0.2)",borderRadius:6,padding:"12px 14px",fontSize:12,color:"var(--text-dim)",lineHeight:1.7},children:[n.jsx("span",{style:{color:"var(--cyan)",fontWeight:700,letterSpacing:1},children:"HOW TO GET THE SONG: "}),"On Android, use a YouTube-to-MP3 app or"," ",n.jsx("strong",{style:{color:"var(--text)"},children:"download the audio file to your phone"}),", then tap the button below to load it. The audio never leaves your device."]}),n.jsxs("div",{className:"fade-in",onDrop:o,onDragOver:t=>t.preventDefault(),onClick:()=>{var t;return(t=e.current)==null?void 0:t.click()},style:{border:"2px dashed var(--pink)",borderRadius:8,padding:"36px 24px",display:"flex",flexDirection:"column",alignItems:"center",gap:14,cursor:"pointer",background:"rgba(255,0,128,0.04)",transition:"background 0.2s",userSelect:"none",WebkitUserSelect:"none"},onTouchStart:t=>{t.currentTarget.style.background="rgba(255,0,128,0.1)"},onTouchEnd:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},onMouseEnter:t=>{t.currentTarget.style.background="rgba(255,0,128,0.08)"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(255,0,128,0.04)"},children:[n.jsx("input",{ref:e,type:"file",accept:"audio/*",style:{display:"none"},onChange:r}),n.jsx("div",{style:{fontSize:52,lineHeight:1},children:"🎵"}),n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,color:"var(--pink)",marginBottom:6},children:"TAP TO SELECT AUDIO FILE"}),n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:"MP3 · WAV · OGG · M4A · FLAC"})]})]})]})}const I=32,M={bass:0,mid:0,treble:0,beat:0,isPlaying:!1,spectrum:new Array(I).fill(0)};function ie(){return{energyHistory:new Array(60).fill(0),beat:0}}function le(a,e,r,o){const t=e/r,s=Math.floor(300/t),i=Math.floor(3e3/t),l=a.length;let u=0,f=0,d=0;for(let x=1;x<s;x++)u+=a[x];for(let x=s;x<i;x++)f+=a[x];for(let x=i;x<l;x++)d+=a[x];const y=Math.min(u/(s-1)/255*2.2,1),g=Math.min(f/(i-s)/255*2.8,1),S=Math.min(d/(l-i)/255*3.5,1),m=y*1.8+g*.6,b=o.energyHistory.reduce((x,A)=>x+A,0)/o.energyHistory.length;return m>b*1.3&&m>.2&&(o.beat=Math.min(m/(b+.001),1)),o.beat*=.87,o.energyHistory.push(m),o.energyHistory.shift(),{bass:y,mid:g,treble:S,beat:o.beat}}function ce(a){const e=new Array(I).fill(0),o=a.length*.6/I;for(let t=0;t<I;t++){const s=Math.floor(t*o),i=Math.max(s+1,Math.floor((t+1)*o));let l=0;for(let u=s;u<i;u++)l+=a[u];e[t]=Math.min(l/(i-s)/255*1.8,1)}return e}const C=1e4,lt=32,ct=`
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
    float theta = i * float(${C}) * GOLDEN_ANGLE;
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
    float col  = mod(i * float(${C}), cols);
    float row  = floor(i * float(${C}) / cols);
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
    float col  = mod(i * float(${C}), cols);
    float row  = floor(i * float(${C}) / cols);
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
    float twist  = i * float(${C}) * .04 + uTime;
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
`,ut=`
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
`;class dt{constructor(e){h(this,"renderer");h(this,"scene");h(this,"camera");h(this,"material");h(this,"clock");h(this,"rafId",0);h(this,"bgMesh",null);h(this,"resizeObserver");h(this,"audioData",M);this.clock=new Ie,this.renderer=new Re({canvas:e,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(657935,1),this.scene=new Be,this.camera=new Pe(75,1,.1,100),this.camera.position.set(0,0,7),this.material=this.buildMaterial();const r=new Ne(this.buildGeometry(),this.material);this.scene.add(r),this.resizeObserver=new ResizeObserver(()=>this.resize(e)),this.resizeObserver.observe(e.parentElement??e),this.resize(e),this.animate()}buildGeometry(){const e=new Oe,r=new Float32Array(C),o=new Float32Array(C);for(let t=0;t<C;t++)r[t]=t/C,o[t]=Math.random();return e.setAttribute("position",new G(new Float32Array(C*3),3)),e.setAttribute("aIndex",new G(r,1)),e.setAttribute("aRandom",new G(o,1)),e}buildMaterial(){return new De({vertexShader:ct,fragmentShader:ut,uniforms:{uTime:{value:0},uBeat:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uMode:{value:0},uSpectrum:{value:new Array(lt).fill(0)},uColor1:{value:new H("#ff0080")},uColor2:{value:new H("#00ffff")},uColor3:{value:new H("#8000ff")}},transparent:!0,depthWrite:!1,blending:_e})}resize(e){const r=e.parentElement,o=r?r.clientWidth:window.innerWidth,t=r?r.clientHeight:window.innerHeight;this.renderer.setSize(o,t,!1),this.camera.aspect=o/t,this.camera.updateProjectionMatrix(),this.bgMesh&&this.fitBgMesh(o,t)}fitBgMesh(e,r){if(!this.bgMesh)return;const o=this.camera.position.z-this.bgMesh.position.z,t=this.camera.fov*Math.PI/180,s=2*Math.tan(t/2)*o,i=s*(e/r);this.bgMesh.scale.set(i,s,1)}animate(){this.rafId=requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime(),r=this.material.uniforms;r.uTime.value=e,r.uBass.value=this.audioData.bass,r.uMid.value=this.audioData.mid,r.uTreble.value=this.audioData.treble,r.uBeat.value=this.audioData.beat,r.uSpectrum.value=this.audioData.spectrum;const o=r.uMode.value;if(o===2||o===7)this.camera.position.set(0,0,5),this.camera.lookAt(0,0,-10);else{const t=7+this.audioData.bass*.5;this.camera.position.x=Math.sin(e*.08)*t,this.camera.position.z=Math.cos(e*.08)*t,this.camera.position.y=Math.sin(e*.05)*2.5,this.camera.lookAt(0,0,0)}if(this.audioData.beat>.6){const t=(this.audioData.beat-.6)*.08;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t}this.renderer.render(this.scene,this.camera)}updateAudio(e){this.audioData=e}setMode(e){this.material.uniforms.uMode.value=e,(e===2||e===7)&&this.camera.lookAt(0,0,-10)}setColors(e){this.material.uniforms.uColor1.value.set(e[0]),this.material.uniforms.uColor2.value.set(e[1]),this.material.uniforms.uColor3.value.set(e[2])}setBackgroundImage(e){new Le().load(e,o=>{o.colorSpace=Ue,this.bgMesh&&(this.scene.remove(this.bgMesh),this.bgMesh.material.dispose());const t=new We({map:o,depthWrite:!1,opacity:.35,transparent:!0});this.bgMesh=new Fe(new Ge(1,1),t),this.bgMesh.position.z=-5,this.scene.add(this.bgMesh),this.fitBgMesh(this.renderer.domElement.clientWidth,this.renderer.domElement.clientHeight)})}dispose(){cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.renderer.dispose()}}function ft({audioData:a,moodData:e,backgroundImage:r,mode:o}){const t=c.useRef(null),s=c.useRef(null);return c.useEffect(()=>{if(!t.current)return;const i=new dt(t.current);return s.current=i,()=>{i.dispose(),s.current=null}},[]),c.useEffect(()=>{var i;(i=s.current)==null||i.setMode(o)},[o]),c.useEffect(()=>{var i;r&&((i=s.current)==null||i.setBackgroundImage(r))},[r]),c.useEffect(()=>{var i;e&&((i=s.current)==null||i.setColors(e.colors))},[e]),c.useEffect(()=>{var i;(i=s.current)==null||i.updateAudio(a)},[a]),n.jsx("canvas",{ref:t,style:{width:"100%",height:"100%",display:"block",touchAction:"none"}})}const pt=[{label:"SPHERE",icon:"⚪"},{label:"GALAXY",icon:"🌀"},{label:"TUNNEL",icon:"⬛"},{label:"WAVE",icon:"〰️"},{label:"EQ",icon:"📊"},{label:"MANDALA",icon:"✴️"},{label:"PLASMA",icon:"🔥"},{label:"STARS",icon:"✨"},{label:"RING",icon:"🎯"},{label:"SCOPE",icon:"📈"},{label:"HELIX",icon:"🧬"},{label:"BURST",icon:"🎆"}];function ht({mode:a,onMode:e,isPlaying:r,onToggle:o,onReset:t,songName:s,onIdentify:i,identifying:l}){return n.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px 16px max(16px, env(safe-area-inset-bottom))",background:"linear-gradient(transparent, rgba(10,10,15,0.9))",display:"flex",flexDirection:"column",gap:12,pointerEvents:"auto"},children:[s&&n.jsxs("p",{style:{fontSize:11,letterSpacing:2,color:"var(--text-dim)",textAlign:"center",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:["♪ ",s.toUpperCase()]}),n.jsx("div",{style:{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"},children:pt.map((u,f)=>n.jsxs("button",{className:`btn btn-ghost${a===f?" active":""}`,onClick:()=>e(f),style:{flexBasis:"calc(25% - 6px)",flexGrow:0,padding:"8px 2px",fontSize:10},children:[u.icon," ",u.label]},u.label))}),n.jsxs("div",{style:{display:"flex",gap:12,justifyContent:"center",alignItems:"center"},children:[n.jsx("button",{className:"btn btn-ghost",onClick:t,style:{fontSize:12,padding:"10px 20px"},children:"↩ RESET"}),n.jsx("button",{className:"btn btn-primary",onClick:o,style:{fontSize:18,padding:"12px 32px",minWidth:80},children:r?"⏸":"▶"}),i&&n.jsx("button",{className:"btn btn-ghost",onClick:i,disabled:l,style:{fontSize:12,padding:"10px 20px",opacity:l?.6:1},children:l?"◌ SCANNING…":"🎵 IDENTIFY"})]})]})}let te=!1,Y=[];function mt(){return new Promise(a=>{if(te){a();return}if(Y.push(a),!document.getElementById("yt-api")){window.onYouTubeIframeAPIReady=()=>{te=!0,Y.forEach(r=>r()),Y=[]};const e=document.createElement("script");e.id="yt-api",e.src="https://www.youtube.com/iframe_api",document.head.appendChild(e)}})}const yt=c.forwardRef(function({videoId:e,onPlayingChange:r},o){const t=c.useRef(null),s=c.useRef(null);return c.useImperativeHandle(o,()=>({play(){var i;(i=s.current)==null||i.playVideo()},pause(){var i;(i=s.current)==null||i.pauseVideo()},getCurrentTime(){var i;return((i=s.current)==null?void 0:i.getCurrentTime())??0}})),c.useEffect(()=>{if(!t.current)return;const i=t.current;let l=!0;return mt().then(()=>{!l||!i||(s.current=new window.YT.Player(i,{videoId:e,playerVars:{autoplay:1,rel:0,modestbranding:1},events:{onStateChange:u=>r==null?void 0:r(u.data===1)}}))}),()=>{var u;l=!1,(u=s.current)==null||u.destroy(),s.current=null}},[e,r]),n.jsx("div",{style:{position:"absolute",top:12,right:12,width:160,height:90,borderRadius:6,overflow:"hidden",border:"1px solid rgba(255,255,255,0.2)",boxShadow:"0 4px 24px rgba(0,0,0,0.6)",zIndex:15},children:n.jsx("div",{ref:t,style:{width:"100%",height:"100%"}})})});function gt({mood:a}){if(!a.title)return null;const e=[a.artist,a.album,a.year].filter(Boolean).join(" · ");return n.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,padding:"14px 180px 10px 16px",background:"linear-gradient(rgba(10,10,15,0.85), transparent)",textAlign:"center",pointerEvents:"none",zIndex:5},children:[n.jsx("p",{style:{fontSize:15,fontWeight:700,letterSpacing:2,textTransform:"uppercase"},children:a.title}),e&&n.jsx("p",{style:{fontSize:11,color:"var(--text-dim)",marginTop:2},children:e})]})}const $={position:"absolute",left:0,right:0,bottom:215,display:"flex",flexDirection:"column",alignItems:"center",gap:6,padding:"0 24px",textAlign:"center",zIndex:4};function xt({lines:a,status:e,currentIndex:r,onNudge:o}){if(e==="idle")return null;if(e==="loading")return n.jsx("div",{style:$,children:n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",opacity:.6,pointerEvents:"none"},children:"♪ looking for synced lyrics…"})});if(e==="not-found"||!a||!a.length)return n.jsx("div",{style:$,children:n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",opacity:.6,pointerEvents:"none"},children:"♪ no synced lyrics found for this track"})});const t=r>=0?a[r].text:"",s=r+1<a.length?a[r+1].text:"";return n.jsxs("div",{style:$,children:[n.jsx("p",{style:{fontSize:18,fontWeight:700,letterSpacing:1,color:"var(--cyan, #00ffff)",textShadow:"0 0 16px rgba(0,255,255,0.6)",maxWidth:680,pointerEvents:"none"},children:t}),n.jsx("p",{style:{fontSize:13,color:"var(--text-dim)",opacity:.7,maxWidth:680,pointerEvents:"none"},children:s}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:2},children:[n.jsx("button",{className:"btn btn-ghost",style:{fontSize:10,padding:"4px 10px"},onClick:()=>o(-.5),children:"−0.5s"}),n.jsx("button",{className:"btn btn-ghost",style:{fontSize:10,padding:"4px 10px"},onClick:()=>o(.5),children:"+0.5s"})]})]})}function bt({onSave:a,onCancel:e}){const[r,o]=c.useState(""),t=s=>{s.preventDefault();const i=r.trim();i&&a(i)};return n.jsxs("form",{onSubmit:t,style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsx("input",{className:"input",type:"text",value:r,onChange:s=>o(s.target.value),placeholder:"AudD API token",autoComplete:"off",spellCheck:!1}),n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{type:"button",className:"btn btn-ghost",onClick:e,style:{flex:1},children:"CANCEL"}),n.jsx("button",{type:"submit",className:"btn btn-primary",disabled:!r.trim(),style:{flex:1,opacity:r.trim()?1:.5},children:"SAVE + SCAN"})]})]})}class vt{constructor(e){h(this,"context");h(this,"analyser");h(this,"source");h(this,"audio");h(this,"dataArray");h(this,"beatState");h(this,"objectUrl");this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=ie(),this.objectUrl=URL.createObjectURL(e),this.audio=new Audio(this.objectUrl),this.audio.loop=!0,this.audio.crossOrigin="anonymous",this.source=this.context.createMediaElementSource(this.audio),this.source.connect(this.analyser),this.analyser.connect(this.context.destination)}async play(){this.context.state==="suspended"&&await this.context.resume(),await this.audio.play()}pause(){this.audio.pause()}toggle(){this.audio.paused?this.play():this.pause()}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:r,treble:o,beat:t}=le(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),s=ce(this.dataArray);return{bass:e,mid:r,treble:o,beat:t,isPlaying:!this.audio.paused,spectrum:s}}isPlaying(){return!this.audio.paused}getCurrentTime(){return this.audio.currentTime}dispose(){this.audio.pause(),URL.revokeObjectURL(this.objectUrl),this.context.close()}}function wt(a){const[e,r]=c.useState(M),o=c.useRef(null),t=c.useRef(0);c.useEffect(()=>{if(!a)return;const l=new vt(a);o.current=l,l.play();const u=()=>{r(l.getData()),t.current=requestAnimationFrame(u)};return t.current=requestAnimationFrame(u),()=>{cancelAnimationFrame(t.current),l.dispose(),o.current=null}},[a]);const s=c.useCallback(()=>{var l;return(l=o.current)==null?void 0:l.toggle()},[]),i=c.useCallback(()=>{var l;return((l=o.current)==null?void 0:l.getCurrentTime())??null},[]);return{data:e,toggle:s,getCurrentTime:i}}async function St(){var r;if(!((r=navigator.mediaDevices)!=null&&r.getDisplayMedia))throw new Error("Tab audio capture isn't supported in this browser. Use desktop Chrome or Edge.");const a=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}),e=a.getAudioTracks();if(a.getVideoTracks().forEach(o=>o.stop()),e.length===0)throw a.getTracks().forEach(o=>o.stop()),new Error('No audio was shared — pick "Chrome Tab", select the YouTube tab, and check "Share tab audio".');return a}class At{constructor(e){h(this,"context");h(this,"analyser");h(this,"source");h(this,"stream");h(this,"dataArray");h(this,"beatState");this.stream=e,this.context=new AudioContext,this.analyser=this.context.createAnalyser(),this.analyser.fftSize=2048,this.analyser.smoothingTimeConstant=.85,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.beatState=ie(),this.source=this.context.createMediaStreamSource(e),this.source.connect(this.analyser)}getData(){this.analyser.getByteFrequencyData(this.dataArray);const{bass:e,mid:r,treble:o,beat:t}=le(this.dataArray,this.context.sampleRate,this.analyser.fftSize,this.beatState),s=ce(this.dataArray);return{bass:e,mid:r,treble:o,beat:t,isPlaying:!0,spectrum:s}}dispose(){this.stream.getTracks().forEach(e=>e.stop()),this.context.close()}}function Tt(){const[a,e]=c.useState(M),[r,o]=c.useState(!1),[t,s]=c.useState(""),i=c.useRef(null),l=c.useRef(0),u=c.useRef(!1),f=c.useRef(null),d=c.useCallback(()=>{var m;cancelAnimationFrame(l.current),(m=i.current)==null||m.dispose(),i.current=null,f.current=null,u.current=!1,o(!1),e(M)},[]),y=c.useCallback(async()=>{s("");try{const m=await St(),b=new At(m);i.current=b,f.current=m,u.current=!1,o(!0),m.getTracks().forEach(A=>A.addEventListener("ended",d));const x=()=>{e(u.current?M:b.getData()),l.current=requestAnimationFrame(x)};l.current=requestAnimationFrame(x)}catch(m){s(m instanceof Error?m.message:"Tab audio capture was cancelled or blocked")}},[d]),g=c.useCallback(()=>{u.current=!u.current},[]),S=c.useCallback(()=>f.current,[]);return{data:a,active:r,error:t,start:y,stop:d,toggle:g,getStream:S}}const oe=/\[(\d{2}):(\d{2})(?:\.(\d{2,3}))?\]/g;function ue(a){const e=[];for(const r of a.split(`
`)){const o=[...r.matchAll(oe)];if(!o.length)continue;const t=r.replace(oe,"").trim();if(t)for(const s of o){const i=parseInt(s[1],10),l=parseInt(s[2],10),u=s[3]?parseInt(s[3].padEnd(3,"0"),10)/1e3:0;e.push({time:i*60+l+u,text:t})}}return e.sort((r,o)=>r.time-o.time)}async function jt(a,e){try{const r=new URLSearchParams({artist_name:a,track_name:e}),o=await fetch(`https://lrclib.net/api/get?${r}`);if(!o.ok)return null;const t=await o.json();return t.syncedLyrics?ue(t.syncedLyrics):null}catch{return null}}async function Ct(a,e){try{const r=new URLSearchParams({q:`${a} ${e}`.trim()}),o=await fetch(`https://lrclib.net/api/search?${r}`);if(!o.ok)return null;const s=(await o.json()).find(i=>i.syncedLyrics);return s!=null&&s.syncedLyrics?ue(s.syncedLyrics):null}catch{return null}}async function zt(a,e){if(!a&&!e)return null;const r=await jt(a,e);if(r&&r.length)return r;const o=await Ct(a,e);return o&&o.length?o:null}function Et({artist:a,title:e,isPlaying:r,getPlaybackTime:o}){const[t,s]=c.useState(null),[i,l]=c.useState("idle"),[u,f]=c.useState(-1),[d,y]=c.useState(0),g=c.useRef(0),S=c.useRef(null),m=c.useRef(-1),b=c.useRef(0);c.useEffect(()=>{if(s(null),m.current=-1,f(-1),g.current=0,S.current=null,!a&&!e){l("idle");return}l("loading");let A=!1;return zt(a,e).then(v=>{A||(s(v),l(v&&v.length?"found":"not-found"))}),()=>{A=!0}},[a,e]),c.useEffect(()=>{const A=()=>{const v=performance.now(),z=o();if(z==null&&(r?(S.current!=null&&(g.current+=(v-S.current)/1e3),S.current=v):S.current=null),t&&t.length){const R=(z??g.current)+d;let B=-1;for(let k=0;k<t.length&&t[k].time<=R;k++)B=k;B!==m.current&&(m.current=B,f(B))}b.current=requestAnimationFrame(A)};return b.current=requestAnimationFrame(A),()=>cancelAnimationFrame(b.current)},[t,d,r,o]);const x=c.useCallback(A=>y(v=>v+A),[]);return{lines:t,status:i,currentIndex:u,offset:d,nudge:x}}class Mt{constructor(e,r){h(this,"bpm");h(this,"energy");h(this,"startTime");h(this,"beat",0);h(this,"prevPhase",0);h(this,"spectrum",new Array(I).fill(0));this.bpm=e,this.energy=r,this.startTime=performance.now()}getData(e){if(!e)return M;const r=(performance.now()-this.startTime)/1e3,o=60/this.bpm,t=r%o/o;t<this.prevPhase&&(this.beat=this.energy),this.prevPhase=t,this.beat*=.87;const s=Math.min(Math.pow(Math.max(0,1-t*2.5),2)*this.energy,1),i=r%(o/2)/(o/2),l=Math.min(Math.pow(Math.max(0,1-i*2.5),1.5)*this.energy*.55,1),u=Math.min((.4+.3*Math.sin(r*Math.PI*this.bpm/30))*this.energy*.45,1),f=Math.min(this.beat,1);for(let d=0;d<I;d++){const y=d/I,g=y<.33?s:y<.66?l:u,S=.5+.5*Math.sin(r*6+d*.7);this.spectrum[d]=Math.min(g*(.5+S*.6),1)}return{bass:s,mid:l,treble:u,beat:f,isPlaying:!0,spectrum:this.spectrum}}}const kt="https://api.audd.io/",It=12;async function Rt(a){const e=await a.arrayBuffer(),r=new AudioContext;try{const o=await r.decodeAudioData(e),t=o.sampleRate,s=Math.min(o.length,Math.floor(It*t)),i=Math.max(0,Math.floor((o.length-s)/2)),l=o.numberOfChannels,u=new Float32Array(s);for(let f=0;f<l;f++){const d=o.getChannelData(f);for(let y=0;y<s;y++)u[y]+=d[i+y]/l}return Bt(u,t)}finally{r.close()}}function Bt(a,e){const r=new ArrayBuffer(44+a.length*2),o=new DataView(r),t=(i,l)=>{for(let u=0;u<l.length;u++)o.setUint8(i+u,l.charCodeAt(u))};t(0,"RIFF"),o.setUint32(4,36+a.length*2,!0),t(8,"WAVE"),t(12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),t(36,"data"),o.setUint32(40,a.length*2,!0);let s=44;for(let i=0;i<a.length;i++,s+=2){const l=Math.max(-1,Math.min(1,a[i]));o.setInt16(s,l<0?l*32768:l*32767,!0)}return new Blob([r],{type:"audio/wav"})}function Pt(a,e){return new Promise((r,o)=>{const t=MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?"audio/webm;codecs=opus":"audio/webm",s=new MediaRecorder(a,{mimeType:t}),i=[];s.ondataavailable=l=>{l.data.size&&i.push(l.data)},s.onerror=()=>o(new Error("Recording tab audio failed")),s.onstop=()=>r(new Blob(i,{type:t})),s.start(),setTimeout(()=>s.stop(),e*1e3)})}function Nt(a){const e=a.result;return e?{artist:e.artist??"",title:e.title??"",album:e.album??"",year:e.release_date?e.release_date.slice(0,4):""}:null}async function de(a,e){var s;const r=new FormData;r.append("file",a,"clip"),r.append("api_token",e);const o=await fetch(kt,{method:"POST",body:r});if(!o.ok)throw new Error(`Recognition request failed (${o.status})`);const t=await o.json();if(t.status==="error")throw new Error(((s=t.error)==null?void 0:s.error_message)??"Recognition failed");return Nt(t)}async function Ot(a,e){const r=await Rt(a);return de(r,e)}async function Dt(a,e,r=10){const o=new MediaStream(a.getAudioTracks()),t=await Pt(o,r);return de(t,e)}function _t(){const[a,e]=c.useState(()=>localStorage.getItem("nwvj-api-key")??""),[r,o]=c.useState(()=>localStorage.getItem("nwvj-api-key")?"input":"api-key"),[t,s]=c.useState(null),[i,l]=c.useState(null),[u,f]=c.useState(!1),[d,y]=c.useState(null),[g,S]=c.useState(null),[m,b]=c.useState(!1),[x,A]=c.useState(M),v=c.useRef(null),z=c.useRef(0),[R,B]=c.useState(0),[k,_]=c.useState(""),P=c.useRef(null),[L,fe]=c.useState(()=>localStorage.getItem("nwvj-audd-token")??""),[pe,U]=c.useState(!1),[he,q]=c.useState(!1),[V,N]=c.useState(""),{data:me,toggle:ye,getCurrentTime:K}=wt(d),w=Tt();c.useEffect(()=>{if(!m||!t)return;v.current=new Mt(t.bpm,t.energy);const p=()=>{A(v.current.getData(!0)),z.current=requestAnimationFrame(p)};return z.current=requestAnimationFrame(p),()=>{cancelAnimationFrame(z.current),v.current=null}},[m,t]),c.useEffect(()=>{w.active&&o("playing")},[w.active]);const W=w.active?w.data:d?me:m?x:M,ge=c.useCallback(()=>{var p;return d&&!w.active?K():!w.active&&!d&&m&&g?((p=P.current)==null?void 0:p.getCurrentTime())??null:null},[d,w.active,m,g,K]),O=Et({artist:(t==null?void 0:t.artist)??"",title:(t==null?void 0:t.title)??"",isPlaying:W.isPlaying,getPlaybackTime:ge}),xe=p=>{localStorage.setItem("nwvj-api-key",p),e(p),o("input")},be=c.useCallback((p,T,j)=>{s(p),l(null),y(null),S(j),b(!1),T?(y(T),o("playing")):o("ready"),f(!0),Xe(a,p.imagePrompt).then(Z=>{Z&&l(Z)}).catch(()=>{}).finally(()=>f(!1))},[a]),F=c.useCallback(async p=>{q(!0),N("");try{const T=w.active?await Dt(w.getStream()??new MediaStream,p):d?await Ot(d,p):null;if(!T){N("No match found");return}s(j=>j&&{...j,title:T.title||j.title,artist:T.artist||j.artist,album:T.album||j.album,year:T.year||j.year})}catch(T){N(T instanceof Error?T.message:"Recognition failed")}finally{q(!1)}},[w,d]),ve=c.useCallback(()=>{if(!L){U(!0);return}F(L)},[L,F]),we=p=>{localStorage.setItem("nwvj-audd-token",p),fe(p),U(!1),F(p)},Se=c.useCallback(p=>_(p),[]),Ae=p=>{y(p),b(!1),o("playing")},Te=()=>{b(!0),o("playing")},je=()=>{w.stop(),y(null),b(!1),s(null),l(null),_(""),S(null),o("input")},J=r==="playing",Ce=d instanceof File?d.name.replace(/\.[^.]+$/,""):(t==null?void 0:t.description)??"",ze=w.active||d!=null;return n.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",position:"relative",overflow:"hidden"},children:[J&&n.jsxs("div",{style:{position:"absolute",inset:0},children:[n.jsx(ft,{audioData:W,moodData:t,backgroundImage:i,mode:R}),t&&n.jsx(gt,{mood:t}),n.jsx(xt,{lines:O.lines,status:O.status,currentIndex:O.currentIndex,onNudge:O.nudge}),n.jsx(ht,{mode:R,onMode:B,isPlaying:W.isPlaying,onToggle:w.active?w.toggle:d?ye:()=>{b(p=>{var T,j;return p?(T=P.current)==null||T.pause():(j=P.current)==null||j.play(),!p})},onReset:je,songName:Ce,onIdentify:ze?ve:void 0,identifying:he}),!w.active&&!d&&m&&g&&n.jsx(yt,{ref:P,videoId:g}),V&&n.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",background:"rgba(255,68,102,0.15)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,padding:"8px 14px",fontSize:12,color:"var(--text-dim)",zIndex:6},children:[V,n.jsx("button",{onClick:()=>N(""),style:{background:"none",color:"var(--text-dim)",marginLeft:10,fontSize:14},children:"×"})]}),pe&&n.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(10,10,15,0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,padding:16},children:n.jsxs("div",{className:"card",style:{maxWidth:420,width:"100%",display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{children:[n.jsx("p",{className:"label",children:"Song recognition"}),n.jsx("h2",{style:{fontSize:16,fontWeight:700,letterSpacing:1,marginBottom:8},children:"AudD.io API TOKEN"}),n.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.6},children:["Scans a short clip of the actual audio to confirm the real title/artist — no more guessing. Get a free token (300 lifetime scans) at"," ",n.jsx("a",{href:"https://dashboard.audd.io",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--cyan)"},children:"dashboard.audd.io"}),". Stored locally, never sent anywhere else."]})]}),n.jsx(bt,{onSave:we,onCancel:()=>U(!1)})]})})]}),!J&&n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto",padding:"32px 16px 48px"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[n.jsx("h1",{className:"neon-title",children:"NEW WAVE VJ"}),n.jsx("p",{className:"subtitle",style:{marginTop:8},children:"AI-powered music visualizer"})]}),r==="api-key"&&n.jsx(Je,{onSubmit:xe}),r==="input"&&n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:480,width:"100%",margin:"0 auto"},children:[n.jsx(st,{apiKey:a,onResult:be,onError:Se}),n.jsx("button",{className:"btn btn-ghost",onClick:()=>{localStorage.removeItem("nwvj-api-key"),e(""),o("api-key")},style:{maxWidth:480,margin:"0 auto",width:"100%",fontSize:11},children:"← CHANGE API KEY"})]}),r==="ready"&&t&&n.jsxs("div",{className:"fade-in",style:{maxWidth:480,width:"100%",margin:"0 auto",display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[i&&n.jsx("img",{src:i,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.25}}),n.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:10},children:[n.jsxs("div",{children:[n.jsx("p",{className:"label",children:"Mood analyzed ✓"}),n.jsx("h2",{style:{fontSize:22,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:t.mood}),n.jsxs("p",{style:{fontSize:12,color:"var(--text-dim)",marginTop:4},children:[t.genre," · ",t.bpm," BPM · energy ",Math.round(t.energy*100),"%"]})]}),n.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-dim)"},children:t.description}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[t.colors.map(p=>n.jsx("div",{style:{width:28,height:28,borderRadius:4,background:p,boxShadow:`0 0 12px ${p}80`}},p)),u&&n.jsx("span",{style:{fontSize:11,color:"var(--text-dim)",marginLeft:8},children:"generating visual…"}),i&&!u&&n.jsx("span",{style:{fontSize:11,color:"var(--cyan)",marginLeft:8},children:"✓ visual ready"})]})]})]}),n.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsxs("div",{children:[n.jsx("p",{className:"label",children:"Capture tab audio (recommended)"}),n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Open the video in a new tab, play it there, then share that tab's audio for real, perfectly-synced visuals. Desktop Chrome or Edge only."})]}),g&&n.jsx("button",{className:"btn btn-ghost",onClick:()=>window.open(`https://www.youtube.com/watch?v=${g}`,"_blank"),children:"↗ OPEN YOUTUBE IN NEW TAB"}),n.jsx("button",{className:"btn btn-primary",onClick:w.start,children:"🎙 CAPTURE TAB AUDIO"}),w.error&&n.jsx("p",{style:{fontSize:12,color:"var(--error, #ff4466)"},children:w.error})]}),n.jsxs("div",{className:"card",style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{children:[n.jsx("p",{className:"label",children:"Or upload an audio file"}),n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)",lineHeight:1.5},children:"Upload the audio file for real-time beat detection, or launch with approximate BPM-synced visuals only."})]}),n.jsx(it,{onFile:Ae}),n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}}),n.jsx("span",{style:{fontSize:11,color:"var(--text-dim)"},children:"OR"}),n.jsx("div",{style:{flex:1,height:1,background:"var(--border)"}})]}),n.jsxs("button",{className:"btn btn-secondary",onClick:Te,children:["▶ LAUNCH WITH BPM VISUALS (",t.bpm," BPM, approximate sync)"]})]}),n.jsx("button",{className:"btn btn-ghost",onClick:()=>o("input"),style:{width:"100%",fontSize:11},children:"← TRY DIFFERENT SONG"})]}),k&&n.jsxs("div",{style:{maxWidth:480,margin:"16px auto 0",width:"100%",padding:"12px 16px",background:"rgba(255,68,102,0.1)",border:"1px solid rgba(255,68,102,0.4)",borderRadius:4,display:"flex",gap:12,alignItems:"flex-start"},children:[n.jsx("span",{style:{fontSize:16},children:"⚠️"}),n.jsxs("div",{style:{flex:1},children:[n.jsx("p",{className:"error",style:{marginBottom:4},children:"ERROR"}),n.jsx("p",{style:{fontSize:12,color:"var(--text-dim)"},children:k})]}),n.jsx("button",{onClick:()=>_(""),style:{background:"none",color:"var(--text-dim)",fontSize:18,lineHeight:1},children:"×"})]})]})]})}se(document.getElementById("root")).render(n.jsx(c.StrictMode,{children:n.jsx(_t,{})}));
