import{H as e,I as t,S as n,i,e as o,a,s,J as m,y as d,b as l,q as r,h as c,c as f,d as p,g as h,r as x,j as $,l as w,u as g,K as u,B as b,w as y,L as z,v,C as j,D as M,x as S,o as T,E as B,M as E}from"./client.90e79331.js";import{F as A,M as I,B as N,N as q}from"./Menu.76e9bbba.js";import"./index.08749a8e.js";import{i as C,v as O}from"./index.e0afecf9.js";function P(e){let t;const n=new I({props:{isScrolled:e[1],placeholder:void 0!==e[0],$$slots:{default:[F]},$$scope:{ctx:e}}});return{c(){r(n.$$.fragment)},l(e){x(n.$$.fragment,e)},m(e,i){g(n,e,i),t=!0},p(e,t){const i={};2&t&&(i.isScrolled=e[1]),1&t&&(i.placeholder=void 0!==e[0]),1025&t&&(i.$$scope={dirty:t,ctx:e}),n.$set(i)},i(e){t||(v(n.$$.fragment,e),t=!0)},o(e){y(n.$$.fragment,e),t=!1},d(e){S(n,e)}}}function D(e){let t;const n=new N({props:{segment:e[0],isScrolled:e[1],hasPlaceholder:void 0!==e[0],$$slots:{default:[H]},$$scope:{ctx:e}}});return{c(){r(n.$$.fragment)},l(e){x(n.$$.fragment,e)},m(e,i){g(n,e,i),t=!0},p(e,t){const i={};1&t&&(i.segment=e[0]),2&t&&(i.isScrolled=e[1]),1&t&&(i.hasPlaceholder=void 0!==e[0]),1025&t&&(i.$$scope={dirty:t,ctx:e}),n.$set(i)},i(e){t||(v(n.$$.fragment,e),t=!0)},o(e){y(n.$$.fragment,e),t=!1},d(e){S(n,e)}}}function F(e){let t;const n=new q({props:{segment:e[0],row:!0}});return{c(){r(n.$$.fragment)},l(e){x(n.$$.fragment,e)},m(e,i){g(n,e,i),t=!0},p(e,t){const i={};1&t&&(i.segment=e[0]),n.$set(i)},i(e){t||(v(n.$$.fragment,e),t=!0)},o(e){y(n.$$.fragment,e),t=!1},d(e){S(n,e)}}}function H(e){let t;const n=new q({props:{segment:e[0]}});return{c(){r(n.$$.fragment)},l(e){x(n.$$.fragment,e)},m(e,i){g(n,e,i),t=!0},p(e,t){const i={};1&t&&(i.segment=e[0]),n.$set(i)},i(e){t||(v(n.$$.fragment,e),t=!0)},o(e){y(n.$$.fragment,e),t=!1},d(e){S(n,e)}}}function J(e){let t,n,i,a,s,T,B,I,N=!1,q=()=>{N=!1};m(e[8]),m(e[9]);const C=[D,P],O=[];function F(e,t){return e[4]?0:1}n=F(e),i=O[n]=C[n](e);const H=e[7].default,J=d(H,e,e[10],null),K=new A({});return{c(){i.c(),a=l(),s=o("main"),J&&J.c(),T=l(),r(K.$$.fragment),this.h()},l(e){i.l(e),a=c(e),s=f(e,"MAIN",{class:!0});var t=p(s);J&&J.l(t),t.forEach(h),T=c(e),x(K.$$.fragment,e),this.h()},h(){$(s,"class","center")},m(i,o,m){O[n].m(i,o),w(i,a,o),w(i,s,o),J&&J.m(s,null),w(i,T,o),g(K,i,o),B=!0,m&&u(I),I=[b(window,"resize",e[5]),b(window,"scroll",e[6]),b(window,"resize",e[8]),b(window,"scroll",()=>{N=!0,clearTimeout(t),t=setTimeout(q,100),e[9]()})]},p(e,[o]){8&o&&!N&&(N=!0,clearTimeout(t),scrollTo(window.pageXOffset,e[3]),t=setTimeout(q,100));let s=n;n=F(e),n===s?O[n].p(e,o):(E(),y(O[s],1,1,()=>{O[s]=null}),z(),i=O[n],i||(i=O[n]=C[n](e),i.c()),v(i,1),i.m(a.parentNode,a)),J&&J.p&&1024&o&&J.p(j(H,e,e[10],null),M(H,e[10],o,null))},i(e){B||(v(i),v(J,e),v(K.$$.fragment,e),B=!0)},o(e){y(i),y(J,e),y(K.$$.fragment,e),B=!1},d(e){O[n].d(e),e&&h(a),e&&h(s),J&&J.d(e),e&&h(T),S(K,e),u(I)}}}let K;async function L({params:n,query:i}){return K=n.lang,e.set(K),t()}function W(e,t,n){let i;T(e,C,e=>n(4,i=e));let{segment:o}=t,a=!0,s=0,m=0;function d(){C.set(s<780),O.set(s)}function l(){n(1,a=m>90)}B(()=>{d(),l()});let{$$slots:r={},$$scope:c}=t;return e.$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(10,c=e.$$scope)},[o,a,s,m,i,d,l,r,function(){n(2,s=window.innerWidth)},function(){n(3,m=window.pageYOffset)},c]}export default class extends n{constructor(e){var t;super(),document.getElementById("svelte-l4zxl2-style")||((t=o("style")).id="svelte-l4zxl2-style",t.textContent="*{box-sizing:border-box}html,body,h1,h2,h3,h4,h5,h6,p,ul,li,figure{margin:0;padding:0}a{text-decoration:none;color:initial;color:#EA5A0B}html{font-size:100%}html,body{height:100%}@media(max-width: 650px){html,body{font-size:100%}}@media(max-width: 449px){html,body{font-size:96%}}@media(max-width: 399px){html,body{font-size:92%}}@media(max-width: 349px){html,body{font-size:88%}}@media(max-width: 299px){html,body{font-size:84%}}@media(max-width: 249px){html,body{font-size:80%}}@media(min-width: 650px) and (max-width: 1600px){html,body{font-size:100%}}@media(min-width: 650px) and (max-width: 1500px){html,body{font-size:96%}}@media(min-width: 650px) and (max-width: 1400px){html,body{font-size:92%}}@media(min-width: 650px) and (max-width: 1300px){html,body{font-size:88%}}@media(min-width: 650px) and (max-width: 1200px){html,body{font-size:84%}}@media(min-width: 650px) and (max-width: 1100px){html,body{font-size:80%}}@media(min-width: 650px) and (max-width: 1000px){html,body{font-size:76%}}@media(min-width: 650px) and (max-width: 900px){html,body{font-size:76%}}body{font-family:'Montserrat', sans-serif}.center{position:relative;max-width:1600px;margin:0 auto}main{overflow:hidden}img,embed,object,video{max-width:100%}img{vertical-align:top}li{list-style:none}.row{margin-bottom:1.875rem}.row--big{margin-bottom:1.875rem}@media(min-width: 650px){.row--big{margin-bottom:3.75rem}}.flex{display:flex;justify-content:space-between}@media(min-width: 650px){.flex-mobile{display:flex;justify-content:space-between}}@media(min-width: 780px){.flex-medium{display:flex;justify-content:space-between}}.medium-zoom-overlay{z-index:300}.medium-zoom-image{z-index:301}",a(document.head,t)),i(this,e,W,J,s,{segment:0})}}export{L as preload};
