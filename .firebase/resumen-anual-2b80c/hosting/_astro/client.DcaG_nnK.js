function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/signals.module.CT4gS1-t.js","_astro/preact.module.f0aBeTlA.js","_astro/hooks.module.qewwIMhK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{y as g,N as v,q as S}from"./preact.module.f0aBeTlA.js";const w="modulepreload",b=function(e){return"/"+e},y={},N=function(i,n,l){let u=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),h=o?.nonce||o?.getAttribute("nonce");u=Promise.all(n.map(t=>{if(t=b(t),t in y)return;y[t]=!0;const r=t.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!l)for(let c=a.length-1;c>=0;c--){const m=a[c];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${f}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":w,r||(s.as="script",s.crossOrigin=""),s.href=t,h&&s.setAttribute("nonce",h),document.head.appendChild(s),r)return new Promise((c,m)=>{s.addEventListener("load",c),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return u.then(()=>i()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a})},E=({value:e,name:i,hydrate:n=!0})=>e?g(n?"astro-slot":"astro-static-slot",{name:i,dangerouslySetInnerHTML:{__html:e}}):null;E.shouldComponentUpdate=()=>!1;var _=E;const p=new Map;var R=e=>async(i,n,{default:l,...u},{client:a})=>{if(!e.hasAttribute("ssr"))return;for(const[t,r]of Object.entries(u))n[t]=g(_,{value:r,name:t});if(e.dataset.preactSignals){const{signal:t}=await N(()=>import("./signals.module.CT4gS1-t.js"),__vite__mapDeps([0,1,2]));let r=JSON.parse(e.dataset.preactSignals);for(const[f,d]of Object.entries(r)){if(!p.has(d)){const s=t(n[f]);p.set(d,s)}n[f]=p.get(d)}}(a!=="only"?S:v)(g(i,n,l!=null?g(_,{value:l}):l),e),e.addEventListener("astro:unmount",()=>v(null,e),{once:!0})};export{R as default};