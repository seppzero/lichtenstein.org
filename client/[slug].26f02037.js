import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,f as r,g as l,c,b as u,d as h,h as f,j as d,k as p,l as m,n as j}from"./client.f8a3d5a9.js";function v(t){let s,a,v,g,y,x,E=t[0].title+"",H=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),g=o(E),y=e(),x=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);g=h(s,E),s.forEach(r),y=l(t),x=c(t,"DIV",{class:!0}),u(x).forEach(r),this.h()},h(){f(x,"class","content svelte-nsonjy")},m(t,s){d(t,a,s),d(t,v,s),p(v,g),d(t,y,s),d(t,x,s),x.innerHTML=H},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&E!==(E=t[0].title+"")&&m(g,E),1&a&&H!==(H=t[0].html+"")&&(x.innerHTML=H)},i:j,o:j,d(t){t&&r(a),t&&r(v),t&&r(y),t&&r(x)}}}async function g({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function y(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,y,v,a,{post:0})}}export{g as preload};
