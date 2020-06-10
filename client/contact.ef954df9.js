import{S as e,i as t,s as a,e as s,a as n,b as l,t as r,c as o,d as c,g as i,h as m,f as u,j as d,l as f,m as p,n as h,P as v,z as $,M as g,w as y,L as w,v as b,o as x,X as E,E as z,q as j,r as _,u as S,B as R,V as O,x as N,A as I}from"./client.90e79331.js";import{H as L,S as P}from"./Section.c02c022d.js";import"./Text.910ea1cf.js";import{T as q,S as D,B as F}from"./Button.97574068.js";function V(e){let t,a,v,$,g;return{c(){t=s("div"),a=s("textarea"),v=l(),$=s("label"),g=r(e[0]),this.h()},l(s){t=o(s,"DIV",{class:!0});var n=c(t);a=o(n,"TEXTAREA",{id:!0,rows:!0,value:!0,required:!0,class:!0}),c(a).forEach(i),v=m(n),$=o(n,"LABEL",{for:!0,class:!0});var l=c($);g=u(l,e[0]),l.forEach(i),n.forEach(i),this.h()},h(){d(a,"id",e[1]),d(a,"rows",e[4]),a.value=e[2],a.required=e[3],d(a,"class","svelte-1e84zm"),d($,"for",e[1]),d($,"class","svelte-1e84zm"),d(t,"class","has-float-label svelte-1e84zm")},m(e,s){f(e,t,s),n(t,a),n(t,v),n(t,$),n($,g)},p(e,[t]){2&t&&d(a,"id",e[1]),16&t&&d(a,"rows",e[4]),4&t&&(a.value=e[2]),8&t&&(a.required=e[3]),1&t&&p(g,e[0]),2&t&&d($,"for",e[1])},i:h,o:h,d(e){e&&i(t)}}}function k(e,t,a){let{label:s=""}=t,{name:n="default"}=t,{value:l=""}=t,{required:r=!1}=t,{rows:o=3}=t;return e.$set=e=>{"label"in e&&a(0,s=e.label),"name"in e&&a(1,n=e.name),"value"in e&&a(2,l=e.value),"required"in e&&a(3,r=e.required),"rows"in e&&a(4,o=e.rows)},[s,n,l,r,o]}class A extends e{constructor(e){var l;super(),document.getElementById("svelte-1e84zm-style")||((l=s("style")).id="svelte-1e84zm-style",l.textContent=".has-float-label.svelte-1e84zm.svelte-1e84zm{display:block;position:relative}.has-float-label.svelte-1e84zm label.svelte-1e84zm{position:absolute;left:1.25rem;font-weight:600;top:10px;cursor:text;font-size:75%;opacity:1;transition:all 0.2s}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm{display:block;width:100%;padding-top:1.875rem;padding-left:1.25rem;padding-bottom:0.5rem;resize:vertical;border:0;border-radius:3px;border:2px solid #ccc;line-height:150%;font-size:1.125rem;font-weight:500;background:transparent;-webkit-appearance:none;-moz-appearance:none}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm::-webkit-input-placeholder{opacity:1;-webkit-transition:all 0.2s;transition:all 0.2s}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm::-moz-placeholder{opacity:1;-moz-transition:all 0.2s;transition:all 0.2s}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:-ms-input-placeholder{opacity:1;-ms-transition:all 0.2s;transition:all 0.2s}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm::-ms-input-placeholder{opacity:1;-ms-transition:all 0.2s;transition:all 0.2s}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm::placeholder{opacity:1;transition:all 0.2s}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:placeholder-shown:not(:focus)::-webkit-input-placeholder{opacity:0}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:placeholder-shown:not(:focus)::-moz-placeholder{opacity:0}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:placeholder-shown:not(:focus):-ms-input-placeholder{opacity:0}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:placeholder-shown:not(:focus)::-ms-input-placeholder{opacity:0}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:placeholder-shown:not(:focus)::placeholder{opacity:0}.has-float-label textarea:placeholder-shown:not(:focus)+.svelte-1e84zm.svelte-1e84zm{font-size:120%;font-weight:500;opacity:0.5;top:1.25rem}.has-float-label.svelte-1e84zm textarea.svelte-1e84zm:focus{outline:none;border-color:#ccc}",n(document.head,l)),t(this,e,k,V,a,{label:0,name:1,value:2,required:3,rows:4})}}function T(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function B(e,t){return e(t={exports:{}},t.exports),t.exports}var M=B((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a}));T(M);M.EmailJSResponseStatus;var J=B((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a}));T(J);J.UI;var C=B((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=M.EmailJSResponseStatus;var a=null,s="https://api.emailjs.com";function n(e,t,a){return void 0===a&&(a={}),new Promise((function(s,n){var l=new XMLHttpRequest;for(var r in l.addEventListener("load",(function(e){var t=new M.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?s(t):n(t)})),l.addEventListener("error",(function(e){n(new M.EmailJSResponseStatus(e.target))})),l.open("POST",e,!0),a)l.setRequestHeader(r,a[r]);l.send(t)}))}function l(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function r(e,t){a=e,s=t||"https://api.emailjs.com"}function o(e,t,r,o){var c={lib_version:"2.4.1",user_id:o||a,service_id:e,template_id:t,template_params:l(r)};return n(s+"/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})}function c(e,t,l,r){if("string"==typeof l&&(l=document.querySelector(l)),!l||"FORM"!==l.nodeName)throw"Expected the HTML form element or the style selector of form";J.UI.progressState(l);var o=new FormData(l);return o.append("lib_version","2.4.1"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",r||a),n(s+"/api/v1.0/email/send-form",o).then((function(e){return J.UI.successState(l),e}),(function(e){return J.UI.errorState(l),Promise.reject(e)}))}t.init=r,t.send=o,t.sendForm=c,t.default={init:r,send:o,sendForm:c}})),H=T(C);C.EmailJSResponseStatus,C.init,C.send,C.sendForm;const{document:U}=v;function G(e){let t,a,r,u,p,h,v,$,g,w,x,E,z,I,P,V,k,T,B,M,J;const C=new L({props:{bold:!0,twenty:!0,$$slots:{default:[K]},$$scope:{ctx:e}}}),H=new q({props:{label:e[1]("firstName"),name:"first_name",required:!0}}),U=new q({props:{label:e[1]("lastName"),name:"last_name",required:!0}}),G=new A({props:{label:e[1]("address"),name:"address",required:!0}}),X=new D({props:{label:e[1]("language"),name:"language",$$slots:{default:[Q]},$$scope:{ctx:e}}}),Y=new q({props:{label:e[1]("age"),name:"age",required:!0}}),Z=new F({props:{type:"submit",$$slots:{default:[W]},$$scope:{ctx:e}}});return{c(){j(C.$$.fragment),t=l(),a=s("form"),r=s("input"),u=l(),p=s("div"),h=s("div"),j(H.$$.fragment),v=l(),$=s("div"),j(U.$$.fragment),g=l(),w=s("div"),j(G.$$.fragment),x=l(),E=s("div"),j(X.$$.fragment),z=l(),I=s("div"),j(Y.$$.fragment),P=l(),V=s("div"),k=s("div"),T=l(),B=s("div"),j(Z.$$.fragment),this.h()},l(e){_(C.$$.fragment,e),t=m(e),a=o(e,"FORM",{class:!0,id:!0});var s=c(a);r=o(s,"INPUT",{type:!0,name:!0}),u=m(s),p=o(s,"DIV",{class:!0});var n=c(p);h=o(n,"DIV",{class:!0});var l=c(h);_(H.$$.fragment,l),l.forEach(i),v=m(n),$=o(n,"DIV",{class:!0});var d=c($);_(U.$$.fragment,d),d.forEach(i),n.forEach(i),g=m(s),w=o(s,"DIV",{class:!0});var f=c(w);_(G.$$.fragment,f),f.forEach(i),x=m(s),E=o(s,"DIV",{class:!0});var y=c(E);_(X.$$.fragment,y),y.forEach(i),z=m(s),I=o(s,"DIV",{class:!0});var b=c(I);_(Y.$$.fragment,b),b.forEach(i),P=m(s),V=o(s,"DIV",{class:!0});var j=c(V);k=o(j,"DIV",{id:!0}),c(k).forEach(i),j.forEach(i),T=m(s),B=o(s,"DIV",{class:!0});var S=c(B);_(Z.$$.fragment,S),S.forEach(i),s.forEach(i),this.h()},h(){d(r,"type","hidden"),d(r,"name","contact_number"),d(h,"class","firstName svelte-1ynh4jc"),d($,"class","lastName svelte-1ynh4jc"),d(p,"class","row flex-medium"),d(w,"class","row address svelte-1ynh4jc"),d(E,"class","row language svelte-1ynh4jc"),d(I,"class","row age svelte-1ynh4jc"),d(k,"id","captcha"),d(V,"class","row"),d(B,"class","button svelte-1ynh4jc"),d(a,"class","contactForm svelte-1ynh4jc"),d(a,"id","contactForm")},m(s,l,o){S(C,s,l),f(s,t,l),f(s,a,l),n(a,r),n(a,u),n(a,p),n(p,h),S(H,h,null),n(p,v),n(p,$),S(U,$,null),n(a,g),n(a,w),S(G,w,null),n(a,x),n(a,E),S(X,E,null),n(a,z),n(a,I),S(Y,I,null),n(a,P),n(a,V),n(V,k),n(a,T),n(a,B),S(Z,B,null),M=!0,o&&J(),J=R(a,"submit",O(e[2]))},p(e,t){const a={};18&t&&(a.$$scope={dirty:t,ctx:e}),C.$set(a);const s={};2&t&&(s.label=e[1]("firstName")),H.$set(s);const n={};2&t&&(n.label=e[1]("lastName")),U.$set(n);const l={};2&t&&(l.label=e[1]("address")),G.$set(l);const r={};2&t&&(r.label=e[1]("language")),18&t&&(r.$$scope={dirty:t,ctx:e}),X.$set(r);const o={};2&t&&(o.label=e[1]("age")),Y.$set(o);const c={};18&t&&(c.$$scope={dirty:t,ctx:e}),Z.$set(c)},i(e){M||(b(C.$$.fragment,e),b(H.$$.fragment,e),b(U.$$.fragment,e),b(G.$$.fragment,e),b(X.$$.fragment,e),b(Y.$$.fragment,e),b(Z.$$.fragment,e),M=!0)},o(e){y(C.$$.fragment,e),y(H.$$.fragment,e),y(U.$$.fragment,e),y(G.$$.fragment,e),y(X.$$.fragment,e),y(Y.$$.fragment,e),y(Z.$$.fragment,e),M=!1},d(e){N(C,e),e&&i(t),e&&i(a),N(H),N(U),N(G),N(X),N(Y),N(Z),J()}}}function X(e){let t,a,s,n;const l=[Z,Y],r=[];return t=1,a=r[1]=l[1](e),{c(){a.c(),s=$()},l(e){a.l(e),s=$()},m(e,t){r[1].m(e,t),f(e,s,t),n=!0},p(e,t){a.p(e,t)},i(e){n||(b(a),n=!0)},o(e){y(a),n=!1},d(e){r[1].d(e),e&&i(s)}}}function K(e){let t,a=e[1]("page.contact.register")+"";return{c(){t=r(a)},l(e){t=u(e,a)},m(e,a){f(e,t,a)},p(e,s){2&s&&a!==(a=e[1]("page.contact.register")+"")&&p(t,a)},d(e){e&&i(t)}}}function Q(e){let t,a,d,h,v,$,g,y=e[1]("languages.english")+"",w=e[1]("languages.german")+"";return{c(){t=s("option"),a=r(y),h=l(),v=s("option"),$=r(w),this.h()},l(e){t=o(e,"OPTION",{value:!0});var s=c(t);a=u(s,y),s.forEach(i),h=m(e),v=o(e,"OPTION",{value:!0});var n=c(v);$=u(n,w),n.forEach(i),this.h()},h(){t.__value=d=e[1]("languages.english"),t.value=t.__value,v.__value=g=e[1]("languages.german"),v.value=v.__value},m(e,s){f(e,t,s),n(t,a),f(e,h,s),f(e,v,s),n(v,$)},p(e,s){2&s&&y!==(y=e[1]("languages.english")+"")&&p(a,y),2&s&&d!==(d=e[1]("languages.english"))&&(t.__value=d),t.value=t.__value,2&s&&w!==(w=e[1]("languages.german")+"")&&p($,w),2&s&&g!==(g=e[1]("languages.german"))&&(v.__value=g),v.value=v.__value},d(e){e&&i(t),e&&i(h),e&&i(v)}}}function W(e){let t,a=e[1]("register")+"";return{c(){t=r(a)},l(e){t=u(e,a)},m(e,a){f(e,t,a)},p(e,s){2&s&&a!==(a=e[1]("register")+"")&&p(t,a)},d(e){e&&i(t)}}}function Y(e){let t;const a=new L({props:{bold:!0,twenty:!0,$$slots:{default:[ee]},$$scope:{ctx:e}}});return{c(){j(a.$$.fragment)},l(e){_(a.$$.fragment,e)},m(e,s){S(a,e,s),t=!0},p(e,t){const s={};18&t&&(s.$$scope={dirty:t,ctx:e}),a.$set(s)},i(e){t||(b(a.$$.fragment,e),t=!0)},o(e){y(a.$$.fragment,e),t=!1},d(e){N(a,e)}}}function Z(e){let t;return{c(){t=r(ae)},l(e){t=u(e,ae)},m(e,a){f(e,t,a)},p:h,i:h,o:h,d(e){e&&i(t)}}}function ee(e){let t,a=e[1]("page.contact.thanks")+"";return{c(){t=r(a)},l(e){t=u(e,a)},m(e,a){f(e,t,a)},p(e,s){2&s&&a!==(a=e[1]("page.contact.thanks")+"")&&p(t,a)},d(e){e&&i(t)}}}function te(e){let t,a,s,n;const l=[X,G],r=[];function o(e,t){return e[0]?0:1}return t=o(e),a=r[t]=l[t](e),{c(){a.c(),s=$()},l(e){a.l(e),s=$()},m(e,a){r[t].m(e,a),f(e,s,a),n=!0},p(e,[n]){let c=t;t=o(e),t===c?r[t].p(e,n):(g(),y(r[c],1,1,()=>{r[c]=null}),w(),a=r[t],a||(a=r[t]=l[t](e),a.c()),b(a,1),a.m(s.parentNode,s))},i(e){n||(b(a),n=!0)},o(e){y(a),n=!1},d(e){r[t].d(e),e&&i(s)}}}let ae=null;function se(e,t,a){let s;x(e,E,e=>a(1,s=e));let n=!1;const l=function(){grecaptcha.render("captcha",{sitekey:"6LcEc-8UAAAAAPDwJCLNv1l2O1YhVXBQ2KNohgTV"})};return z(()=>{window.onloadCallback=l;const e=document.createElement("script");e.type="text/javascript",e.src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit",document.getElementsByTagName("head")[0].appendChild(e)}),H.init("user_OS61MOpfnoHgzpuu3qWSF"),[n,s,function(e){this.contact_number.value=1e5*Math.random()|0;const t=["first_name","last_name","address"].reduce((t,a)=>{const s=e.target[a];return t[s.id]=s.value,t},{});H.send("default_service","template_EH9Hr4oF",t).then(e=>{a(0,n=!0),console.log(e.text)},e=>{a(0,n=!0),e=e.text})}]}class ne extends e{constructor(e){var l;super(),U.getElementById("svelte-1ynh4jc-style")||((l=s("style")).id="svelte-1ynh4jc-style",l.textContent=".contactForm.svelte-1ynh4jc{margin-top:2.5rem}@media(min-width: 780px){.contactForm.svelte-1ynh4jc{width:50%}}.firstName.svelte-1ynh4jc{margin-bottom:1.875rem}@media(min-width: 780px){.firstName.svelte-1ynh4jc{margin-bottom:0}}.firstName.svelte-1ynh4jc,.lastName.svelte-1ynh4jc{width:100%}@media(min-width: 780px){.firstName.svelte-1ynh4jc,.lastName.svelte-1ynh4jc{width:47.5%}}.address.svelte-1ynh4jc{width:100%}@media(min-width: 780px){.language.svelte-1ynh4jc{width:45%}}@media(min-width: 780px){.age.svelte-1ynh4jc{width:25%}}.button.svelte-1ynh4jc{max-width:20.875rem}",n(U.head,l)),t(this,e,se,te,a,{})}}function le(e){let t,a=e[0]("page.contact.us")+"";return{c(){t=r(a)},l(e){t=u(e,a)},m(e,a){f(e,t,a)},p(e,s){1&s&&a!==(a=e[0]("page.contact.us")+"")&&p(t,a)},d(e){e&&i(t)}}}function re(e){let t,a=e[0]("contact")+"";return{c(){t=r(a)},l(e){t=u(e,a)},m(e,a){f(e,t,a)},p(e,s){1&s&&a!==(a=e[0]("contact")+"")&&p(t,a)},d(e){e&&i(t)}}}function oe(e){let t,a,h,v,$,g,w,x,E,z=e[0]("email")+"";const R=new L({props:{orangeLine:!0,semiBold:!0,thirtysix:!0,$$slots:{default:[le]},$$scope:{ctx:e}}}),O=new ne({}),I=new L({props:{bold:!0,twenty:!0,$$slots:{default:[re]},$$scope:{ctx:e}}});return{c(){j(R.$$.fragment),t=l(),a=s("div"),j(O.$$.fragment),h=l(),j(I.$$.fragment),v=l(),$=r(z),g=r(": "),w=s("a"),x=r("office@juedische-gemeinschaft.li"),this.h()},l(e){_(R.$$.fragment,e),t=m(e),a=o(e,"DIV",{class:!0});var s=c(a);_(O.$$.fragment,s),s.forEach(i),h=m(e),_(I.$$.fragment,e),v=m(e),$=u(e,z),g=u(e,": "),w=o(e,"A",{href:!0});var n=c(w);x=u(n,"office@juedische-gemeinschaft.li"),n.forEach(i),this.h()},h(){d(a,"class","contactForm svelte-1na0uaf"),d(w,"href","mailto:office@juedische-gemeinschaft.li")},m(e,s){S(R,e,s),f(e,t,s),f(e,a,s),S(O,a,null),f(e,h,s),S(I,e,s),f(e,v,s),f(e,$,s),f(e,g,s),f(e,w,s),n(w,x),E=!0},p(e,t){const a={};3&t&&(a.$$scope={dirty:t,ctx:e}),R.$set(a);const s={};3&t&&(s.$$scope={dirty:t,ctx:e}),I.$set(s),(!E||1&t)&&z!==(z=e[0]("email")+"")&&p($,z)},i(e){E||(b(R.$$.fragment,e),b(O.$$.fragment,e),b(I.$$.fragment,e),E=!0)},o(e){y(R.$$.fragment,e),y(O.$$.fragment,e),y(I.$$.fragment,e),E=!1},d(e){N(R,e),e&&i(t),e&&i(a),N(O),e&&i(h),N(I,e),e&&i(v),e&&i($),e&&i(g),e&&i(w)}}}function ce(e){let t,a,s;document.title=t=e[0]("page.contact.us");const n=new P({props:{padding:!0,$$slots:{default:[oe]},$$scope:{ctx:e}}});return{c(){a=l(),j(n.$$.fragment)},l(e){I('[data-svelte="svelte-1f0ntxy"]',document.head).forEach(i),a=m(e),_(n.$$.fragment,e)},m(e,t){f(e,a,t),S(n,e,t),s=!0},p(e,[a]){(!s||1&a)&&t!==(t=e[0]("page.contact.us"))&&(document.title=t);const l={};3&a&&(l.$$scope={dirty:a,ctx:e}),n.$set(l)},i(e){s||(b(n.$$.fragment,e),s=!0)},o(e){y(n.$$.fragment,e),s=!1},d(e){e&&i(a),N(n,e)}}}function ie(e,t,a){let s;return x(e,E,e=>a(0,s=e)),[s]}export default class extends e{constructor(e){var l;super(),document.getElementById("svelte-1na0uaf-style")||((l=s("style")).id="svelte-1na0uaf-style",l.textContent=".contactForm.svelte-1na0uaf{margin-bottom:4.375rem}",n(document.head,l)),t(this,e,ie,ce,a,{})}}
