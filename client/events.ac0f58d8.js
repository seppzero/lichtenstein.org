import{S as t,i as e,s as n,b as s,q as a,A as $,g as o,h as r,r as c,l as m,u as f,v as p,w as l,x as d,o as i,X as u,t as g,f as x,m as v}from"./client.ecd1002e.js";import{S as h,H as w}from"./Section.e0e1eed5.js";import{T as y}from"./Text.11dd83e4.js";function j(t){let e,n=t[0]("events")+"";return{c(){e=g(n)},l(t){e=x(t,n)},m(t,n){m(t,e,n)},p(t,s){1&s&&n!==(n=t[0]("events")+"")&&v(e,n)},d(t){t&&o(e)}}}function S(t){let e,n,s=t[0]("page.events.channuka")+"";return{c(){e=g("1. "),n=g(s)},l(t){e=x(t,"1. "),n=x(t,s)},m(t,s){m(t,e,s),m(t,n,s)},p(t,e){1&e&&s!==(s=t[0]("page.events.channuka")+"")&&v(n,s)},d(t){t&&o(e),t&&o(n)}}}function b(t){let e,n,$;const i=new w({props:{orangeLine:!0,semiBold:!0,thirtysix:!0,$$slots:{default:[j]},$$scope:{ctx:t}}}),u=new w({props:{bold:!0,twentysix:!0,$$slots:{default:[S]},$$scope:{ctx:t}}}),g=new y({props:{content:t[0]("content")}});return{c(){a(i.$$.fragment),e=s(),a(u.$$.fragment),n=s(),a(g.$$.fragment)},l(t){c(i.$$.fragment,t),e=r(t),c(u.$$.fragment,t),n=r(t),c(g.$$.fragment,t)},m(t,s){f(i,t,s),m(t,e,s),f(u,t,s),m(t,n,s),f(g,t,s),$=!0},p(t,e){const n={};3&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n);const s={};3&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s);const a={};1&e&&(a.content=t[0]("content")),g.$set(a)},i(t){$||(p(i.$$.fragment,t),p(u.$$.fragment,t),p(g.$$.fragment,t),$=!0)},o(t){l(i.$$.fragment,t),l(u.$$.fragment,t),l(g.$$.fragment,t),$=!1},d(t){d(i,t),t&&o(e),d(u,t),t&&o(n),d(g,t)}}}function k(t){let e,n,i;document.title=e=t[0]("events");const u=new h({props:{padding:!0,$$slots:{default:[b]},$$scope:{ctx:t}}});return{c(){n=s(),a(u.$$.fragment)},l(t){$('[data-svelte="svelte-pyelj3"]',document.head).forEach(o),n=r(t),c(u.$$.fragment,t)},m(t,e){m(t,n,e),f(u,t,e),i=!0},p(t,[n]){(!i||1&n)&&e!==(e=t[0]("events"))&&(document.title=e);const s={};3&n&&(s.$$scope={dirty:n,ctx:t}),u.$set(s)},i(t){i||(p(u.$$.fragment,t),i=!0)},o(t){l(u.$$.fragment,t),i=!1},d(t){t&&o(n),d(u,t)}}}function T(t,e,n){let s;return i(t,u,t=>n(0,s=t)),[s]}export default class extends t{constructor(t){super(),e(this,t,T,k,n,{})}}
