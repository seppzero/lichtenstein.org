import{_ as t,a as n,i as e,s as r,b as a,S as o,m as c,j as i,t as u,d as f,e as s,q as l,f as h,g as m,h as v,z as d,H as p,o as $,p as g,u as y,n as b,W as x,A as w,X as D,k as I,l as E,C as R,D as T,E as j,y as k,w as O,F as V,J as z,a3 as S,v as _,x as P,M as C,P as M,Q as N,a4 as A,G as B,K as q,L as H,a5 as F,a6 as G,N as L,a7 as K,r as Y,I as J}from"./client.08798e32.js";import{v as Q}from"./index.8fb1e1c7.js";import"./index.f79b226c.js";import{S as U,H as W}from"./Section.99191413.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/slicedToArray";import{I as Z}from"./index.1228b25b.js";import{T as X,S as tt,B as nt}from"./Button.40c3bbb9.js";import{L as et}from"./List.4e053bc8.js";function rt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function at(t,n,e){var r=t.slice();return r[5]=n[e],r[7]=e,r}function ot(t){var n,e;return{c:function(){n=c("div"),e=u(t[2]),this.h()},l:function(r){n=f(r,"DIV",{class:!0});var a=s(n);e=l(a,t[2]),a.forEach(h),this.h()},h:function(){m(n,"class","hebrew svelte-15h6xbh")},m:function(t,r){v(t,n,r),i(n,e)},p:function(t,n){4&n&&d(e,t[2])},d:function(t){t&&h(n)}}}function ct(t){var n,e,r=t[4]("events")+"";return{c:function(){n=c("strong"),e=u(r)},l:function(t){n=f(t,"STRONG",{});var a=s(n);e=l(a,r),a.forEach(h)},m:function(t,r){v(t,n,r),i(n,e)},p:function(t,n){16&n&&r!==(r=t[4]("events")+"")&&d(e,r)},d:function(t){t&&h(n)}}}function it(t){var n,e,r=t[5]+"";return{c:function(){n=u(", "),e=u(r)},l:function(t){n=l(t,", "),e=l(t,r)},m:function(t,r){v(t,n,r),v(t,e,r)},p:function(t,n){8&n&&r!==(r=t[5]+"")&&d(e,r)},d:function(t){t&&h(n),t&&h(e)}}}function ut(t){var n,e=t[5]+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){8&r&&e!==(e=t[5]+"")&&d(n,e)},d:function(t){t&&h(n)}}}function ft(t){var n;var e=function(t,n){return 0===t[7]?ut:it}(t)(t);return{c:function(){e.c(),n=p()},l:function(t){e.l(t),n=p()},m:function(t,r){e.m(t,r),v(t,n,r)},p:function(t,n){e.p(t,n)},d:function(t){e.d(t),t&&h(n)}}}function st(t){for(var n,e,r,a,o,p,w,D,I,E,R=t[2]&&ot(t),T=t[3].length>0&&ct(t),j=t[3],k=[],O=0;O<j.length;O+=1)k[O]=ft(at(t,j,O));return{c:function(){n=c("div"),e=c("div"),r=u(t[0]),a=u(" =\n        "),o=c("strong"),p=u(t[1]),w=$(),R&&R.c(),D=$(),I=c("div"),T&&T.c(),E=$();for(var i=0;i<k.length;i+=1)k[i].c();this.h()},l:function(c){n=f(c,"DIV",{class:!0});var i=s(n);e=f(i,"DIV",{class:!0});var u=s(e);r=l(u,t[0]),a=l(u," =\n        "),o=f(u,"STRONG",{});var m=s(o);p=l(m,t[1]),m.forEach(h),u.forEach(h),w=g(i),R&&R.l(i),D=g(i),I=f(i,"DIV",{class:!0});var v=s(I);T&&T.l(v),E=g(v);for(var d=0;d<k.length;d+=1)k[d].l(v);v.forEach(h),i.forEach(h),this.h()},h:function(){m(e,"class","date svelte-15h6xbh"),m(I,"class","events svelte-15h6xbh"),m(n,"class","info svelte-15h6xbh")},m:function(t,c){v(t,n,c),i(n,e),i(e,r),i(e,a),i(e,o),i(o,p),i(n,w),R&&R.m(n,null),i(n,D),i(n,I),T&&T.m(I,null),i(I,E);for(var u=0;u<k.length;u+=1)k[u].m(I,null)},p:function(t,e){var a=y(e,1)[0];if(1&a&&d(r,t[0]),2&a&&d(p,t[1]),t[2]?R?R.p(t,a):((R=ot(t)).c(),R.m(n,D)):R&&(R.d(1),R=null),t[3].length>0?T?T.p(t,a):((T=ct(t)).c(),T.m(I,E)):T&&(T.d(1),T=null),8&a){var o;for(j=t[3],o=0;o<j.length;o+=1){var c=at(t,j,o);k[o]?k[o].p(c,a):(k[o]=ft(c),k[o].c(),k[o].m(I,null))}for(;o<k.length;o+=1)k[o].d(1);k.length=j.length}},i:b,o:b,d:function(t){t&&h(n),R&&R.d(),T&&T.d(),x(k,t)}}}function lt(t,n,e){var r;w(t,D,(function(t){return e(4,r=t)}));var a=n.initialDate,o=n.convertedDate,c=n.hebrew,i=void 0===c?null:c,u=n.events,f=void 0===u?null:u;return t.$set=function(t){"initialDate"in t&&e(0,a=t.initialDate),"convertedDate"in t&&e(1,o=t.convertedDate),"hebrew"in t&&e(2,i=t.hebrew),"events"in t&&e(3,f=t.events)},[a,o,i,f,r]}var ht=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(rt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-15h6xbh-style")||((u=c("style")).id="svelte-15h6xbh-style",u.textContent=".info.svelte-15h6xbh{padding:1.25rem;background:#eee}.date.svelte-15h6xbh{font-size:1.625rem}.hebrew.svelte-15h6xbh{font-size:1.25rem;margin-bottom:0.625rem;margin-top:0.625rem}.events.svelte-15h6xbh{margin:1.25rem 0}",i(document.head,u)),e(a(o),t,lt,st,r,{initialDate:0,convertedDate:1,hebrew:2,events:3}),o}return l}();function mt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function vt(t,n,e){var r=t.slice();return r[10]=n[e],r[12]=e,r}function dt(t){var n,e,r=new ht({props:{initialDate:"".concat(t[0].gd," ").concat(t[5][t[0].gm-1]," ").concat(t[0].gy),convertedDate:"".concat(t[0].hd,"th of ").concat(t[0].hm,", ").concat(t[0].hy),hebrew:t[0].hebrew,events:t[0].events}});return{c:function(){n=c("div"),R(r.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);T(r.$$.fragment,e),e.forEach(h),this.h()},h:function(){m(n,"class","info")},m:function(t,a){v(t,n,a),j(r,n,null),e=!0},p:function(t,n){var e={};1&n&&(e.initialDate="".concat(t[0].gd," ").concat(t[5][t[0].gm-1]," ").concat(t[0].gy)),1&n&&(e.convertedDate="".concat(t[0].hd,"th of ").concat(t[0].hm,", ").concat(t[0].hy)),1&n&&(e.hebrew=t[0].hebrew),1&n&&(e.events=t[0].events),r.$set(e)},i:function(t){e||(k(r.$$.fragment,t),e=!0)},o:function(t){O(r.$$.fragment,t),e=!1},d:function(t){t&&h(n),V(r)}}}function pt(t){var n,e,r=t[10]+"";return{c:function(){n=c("option"),e=u(r),this.h()},l:function(t){n=f(t,"OPTION",{value:!0});var a=s(n);e=l(a,r),a.forEach(h),this.h()},h:function(){n.__value=t[12]+1,n.value=n.__value},m:function(t,r){v(t,n,r),i(n,e)},p:b,d:function(t){t&&h(n)}}}function $t(t){var n,e,r,a=t[10]+"";return{c:function(){n=c("option"),e=u(a),r=$(),this.h()},l:function(t){n=f(t,"OPTION",{selected:!0,value:!0});var o=s(n);e=l(o,a),r=g(o),o.forEach(h),this.h()},h:function(){n.selected="selected",n.__value=t[12]+1,n.value=n.__value},m:function(t,a){v(t,n,a),i(n,e),i(n,r)},p:b,d:function(t){t&&h(n)}}}function gt(t){var n;var e=function(t,n){return t[12]+1===t[2]?$t:pt}(t)(t);return{c:function(){e.c(),n=p()},l:function(t){e.l(t),n=p()},m:function(t,r){e.m(t,r),v(t,n,r)},p:function(t,n){e.p(t,n)},d:function(t){e.d(t),t&&h(n)}}}function yt(t){for(var n,e=t[5],r=[],a=0;a<e.length;a+=1)r[a]=gt(vt(t,e,a));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=p()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=p()},m:function(t,e){for(var a=0;a<r.length;a+=1)r[a].m(t,e);v(t,n,e)},p:function(t,a){if(36&a){var o;for(e=t[5],o=0;o<e.length;o+=1){var c=vt(t,e,o);r[o]?r[o].p(c,a):(r[o]=gt(c),r[o].c(),r[o].m(n.parentNode,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d:function(t){x(r,t),t&&h(n)}}}function bt(t){var n,e=t[1]("toHebrew")+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){2&r&&e!==(e=t[1]("toHebrew")+"")&&d(n,e)},d:function(t){t&&h(n)}}}function xt(t){var n,e,r,a,o,u,l,d,p,b,x,w,D=Object.values(t[0]).length,I=D&&dt(t),E=new X({props:{name:"gd",label:t[1]("day"),size:"2",maxlength:"2",pattern:"\\d*",value:t[3]}}),C=new tt({props:{name:"gm",label:t[1]("month"),$$slots:{default:[yt]},$$scope:{ctx:t}}}),M=new X({props:{name:"gy",label:t[1]("year"),size:"4",maxlength:"4",pattern:"\\d*",value:t[4]}}),N=new nt({props:{class:"button",type:"submit",$$slots:{default:[bt]},$$scope:{ctx:t}}});return{c:function(){I&&I.c(),n=$(),e=c("form"),r=c("div"),a=c("div"),R(E.$$.fragment),o=$(),u=c("div"),R(C.$$.fragment),l=$(),d=c("div"),R(M.$$.fragment),p=$(),b=c("div"),R(N.$$.fragment),this.h()},l:function(t){I&&I.l(t),n=g(t),e=f(t,"FORM",{});var c=s(e);r=f(c,"DIV",{class:!0});var i=s(r);a=f(i,"DIV",{class:!0});var m=s(a);T(E.$$.fragment,m),m.forEach(h),o=g(i),u=f(i,"DIV",{class:!0});var v=s(u);T(C.$$.fragment,v),v.forEach(h),l=g(i),d=f(i,"DIV",{class:!0});var $=s(d);T(M.$$.fragment,$),$.forEach(h),i.forEach(h),p=g(c),b=f(c,"DIV",{class:!0});var y=s(b);T(N.$$.fragment,y),y.forEach(h),c.forEach(h),this.h()},h:function(){m(a,"class","field svelte-lymy35"),m(u,"class","field svelte-lymy35"),m(d,"class","field svelte-lymy35"),m(r,"class","fields svelte-lymy35"),m(b,"class","button svelte-lymy35")},m:function(c,f,s){I&&I.m(c,f),v(c,n,f),v(c,e,f),i(e,r),i(r,a),j(E,a,null),i(r,o),i(r,u),j(C,u,null),i(r,l),i(r,d),j(M,d,null),i(e,p),i(e,b),j(N,b,null),x=!0,s&&w(),w=z(e,"submit",S(t[6]))},p:function(t,e){var r=y(e,1)[0];1&r&&(D=Object.values(t[0]).length),D?I?(I.p(t,r),k(I,1)):((I=dt(t)).c(),k(I,1),I.m(n.parentNode,n)):I&&(_(),O(I,1,1,(function(){I=null})),P());var a={};2&r&&(a.label=t[1]("day")),E.$set(a);var o={};2&r&&(o.label=t[1]("month")),8192&r&&(o.$$scope={dirty:r,ctx:t}),C.$set(o);var c={};2&r&&(c.label=t[1]("year")),M.$set(c);var i={};8194&r&&(i.$$scope={dirty:r,ctx:t}),N.$set(i)},i:function(t){x||(k(I),k(E.$$.fragment,t),k(C.$$.fragment,t),k(M.$$.fragment,t),k(N.$$.fragment,t),x=!0)},o:function(t){O(I),O(E.$$.fragment,t),O(C.$$.fragment,t),O(M.$$.fragment,t),O(N.$$.fragment,t),x=!1},d:function(t){I&&I.d(t),t&&h(n),t&&h(e),V(E),V(C),V(M),V(N),w()}}}function wt(t,n,e){var r;w(t,D,(function(t){return e(1,r=t)}));var a=new Date,o=a.getMonth()+1,c=String(a.getDate()).padStart(2,"0"),i=String(a.getMonth()+1).padStart(2,"0"),u=a.getFullYear(),f={},s=[r("months.january"),r("months.february"),r("months.march"),r("months.april"),r("months.may"),r("months.june"),r("months.july"),r("months.august"),r("months.september"),r("months.october"),r("months.november"),r("months.december")];function l(t,n,e){return h.apply(this,arguments)}function h(){return(h=M(N.mark((function t(n,r,a){var o,c;return N.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="https://www.hebcal.com/converter/?cfg=json&gy=".concat(n,"&gm=").concat(r,"&gd=").concat(a),t.next=3,fetch(o);case 3:return c=t.sent,t.t0=e,t.next=7,c.json();case 7:t.t1=f=t.sent,(0,t.t0)(0,t.t1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return C((function(){l(u,i,c)})),[f,r,o,c,u,s,function(t){l(t.target.gy.value,t.target.gm.value,t.target.gd.value)}]}var Dt=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(mt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-lymy35-style")||((u=c("style")).id="svelte-lymy35-style",u.textContent=".fields.svelte-lymy35{overflow:hidden}.field.svelte-lymy35{margin-top:2.5rem;margin-bottom:2.5rem}@media(min-width: 650px){.field.svelte-lymy35{width:6.875rem;float:left}.field.svelte-lymy35:nth-child(2){width:11.25rem;margin-left:1.875rem;margin-right:1.875rem}}.button.svelte-lymy35{margin-bottom:1.25rem}@media(min-width: 650px){.button.svelte-lymy35{width:20rem}}",i(document.head,u)),e(a(o),t,wt,xt,r,{}),o}return l}();var It=new function(t,n,e,r,a,o,c,i,u,f,s,l,h,m){this[0]=t,this[1]=n,this[2]=e,this[3]=r,this[4]=a,this[5]=o,this[6]=c,this[7]=i,this[8]=u,this[9]=f,this[10]=s,this[11]=l,this[12]=h,this[13]=m}("Tishri","Heshvan","Kislev","Tevet","Shevat","AdarI","AdarII","Nisan","Iyyar","Sivan","Tammuz","Av","Elul"),Et=new function(t,n,e,r,a,o,c,i,u,f,s,l,h,m,v,d,p,$,g){this[0]=t,this[1]=n,this[2]=e,this[3]=r,this[4]=a,this[5]=o,this[6]=c,this[7]=i,this[8]=u,this[9]=f,this[10]=s,this[11]=l,this[12]=h,this[13]=m,this[14]=v,this[15]=d,this[16]=p,this[17]=$,this[18]=g}(12,12,13,12,12,13,12,13,12,12,13,12,12,13,12,12,13,12,13);function Rt(t,n,e){var r=0,a=0,o=0,c=0,i=0,u=0,f=0;function s(t){var n,e,r,a;for(c=Math.floor((t+310)/6940),n=31524,e=(n+=45971*c)>>16,e+=2744*c,a=Math.floor(e/25920),n=(e-=25920*a)<<16|65535&n,r=Math.floor(n/25920),u=a<<16|r,f=n-=25920*r;u<t-6940+310;)c++,f+=179876755,u+=Math.floor(f/25920),f%=25920;for(i=0;i<18&&!(u>t-74);i++)f+=765433*Et[i],u+=Math.floor(f/25920),f%=25920}function l(t,n,e){var r=n,a=r%7;return(e>=19440||!(2==t||5==t||7==t||10==t||13==t||16==t||18==t)&&2==a&&e>=9924||(3==t||6==t||8==t||11==t||14==t||17==t||0==t)&&1==a&&e>=16789)&&(r++,7==++a&&(a=0)),3!=a&&5!=a&&0!=a||r++,r}var h=t;return"object"===A(h)&&(n=t.getMonth()+1,e=t.getDate(),h=t.getFullYear()),function(t){var n,e=0,h=0,m=t-347997;if(s(m),m>=(e=l(i,u,f))){if(o=19*c+i+1,m<e+59)return void(m<e+30?(r=1,a=m-e+1):(r=2,a=m-e-29));f+=765433*Et[i],u+=Math.floor(f/25920),h=l((i+1)%19,u,f%=25920)}else{if(o=19*c+i,m>=e-177)return void(m>e-30?(r=13,a=m-e+30):m>e-60?(r=12,a=m-e+60):m>e-89?(r=11,a=m-e+89):m>e-119?(r=10,a=m-e+119):m>e-148?(r=9,a=m-e+148):(r=8,a=m-e+178));if(13==Et[(o-1)%19]){if(r=7,(a=m-e+207)>0)return;if(r--,(a+=30)>0)return;r--,a+=30}else{if(r=6,(a=m-e+207)>0)return;r--,a+=30}if(a>0)return;if(r--,(a+=29)>0)return;h=e,s(u-365),e=l(i,u,f)}if(u=m-e-29,355==(n=h-e)||385==n){if(u<=30)return r=2,void(a=u);u-=30}else{if(u<=29)return r=2,void(a=u);u-=29}r=3,a=u}(function(t,n,e){var r,a=0,o=0;return a=t<0?t+4801:t+4800,n>2?o=n-3:(o=n+9,a--),r=Math.floor(146097*Math.floor(a/100)/4),r+=Math.floor(a%100*1461/4),r+=Math.floor((153*o+2)/5),r+=e-32045}(h,n,e)),{year:o,month:r,date:a,month_name:It[r-1]}}function Tt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function jt(t,n,e){var r=t.slice();return r[14]=n[e],r[16]=e,r}function kt(t){var n,e,r=new ht({props:{initialDate:"".concat(t[0].hd," ").concat(t[0].hm," ").concat(t[0].hy),convertedDate:"".concat(t[0].gd," ").concat(t[2][t[0].gm-1]," ").concat(t[0].gy),events:t[0].events}});return{c:function(){n=c("div"),R(r.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);T(r.$$.fragment,e),e.forEach(h),this.h()},h:function(){m(n,"class","info")},m:function(t,a){v(t,n,a),j(r,n,null),e=!0},p:function(t,n){var e={};1&n&&(e.initialDate="".concat(t[0].hd," ").concat(t[0].hm," ").concat(t[0].hy)),1&n&&(e.convertedDate="".concat(t[0].gd," ").concat(t[2][t[0].gm-1]," ").concat(t[0].gy)),1&n&&(e.events=t[0].events),r.$set(e)},i:function(t){e||(k(r.$$.fragment,t),e=!0)},o:function(t){O(r.$$.fragment,t),e=!1},d:function(t){t&&h(n),V(r)}}}function Ot(t){var n,e,r=t[14]+"";return{c:function(){n=c("option"),e=u(r),this.h()},l:function(t){n=f(t,"OPTION",{value:!0});var a=s(n);e=l(a,r),a.forEach(h),this.h()},h:function(){n.__value=t[14],n.value=n.__value},m:function(t,r){v(t,n,r),i(n,e)},p:b,d:function(t){t&&h(n)}}}function Vt(t){var n,e,r=t[14]+"";return{c:function(){n=c("option"),e=u(r),this.h()},l:function(t){n=f(t,"OPTION",{selected:!0,value:!0});var a=s(n);e=l(a,r),a.forEach(h),this.h()},h:function(){n.selected="selected",n.__value=t[14],n.value=n.__value},m:function(t,r){v(t,n,r),i(n,e)},p:b,d:function(t){t&&h(n)}}}function zt(t){var n;function e(t,n){return t[14]===t[0].hm?Vt:Ot}var r=e(t),a=r(t);return{c:function(){a.c(),n=p()},l:function(t){a.l(t),n=p()},m:function(t,e){a.m(t,e),v(t,n,e)},p:function(t,o){r===(r=e(t))&&a?a.p(t,o):(a.d(1),(a=r(t))&&(a.c(),a.m(n.parentNode,n)))},d:function(t){a.d(t),t&&h(n)}}}function St(t){for(var n,e=t[3],r=[],a=0;a<e.length;a+=1)r[a]=zt(jt(t,e,a));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=p()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=p()},m:function(t,e){for(var a=0;a<r.length;a+=1)r[a].m(t,e);v(t,n,e)},p:function(t,a){if(9&a){var o;for(e=t[3],o=0;o<e.length;o+=1){var c=jt(t,e,o);r[o]?r[o].p(c,a):(r[o]=zt(c),r[o].c(),r[o].m(n.parentNode,n))}for(;o<r.length;o+=1)r[o].d(1);r.length=e.length}},d:function(t){x(r,t),t&&h(n)}}}function _t(t){var n,e=t[1]("toHebrew")+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){2&r&&e!==(e=t[1]("toHebrew")+"")&&d(n,e)},d:function(t){t&&h(n)}}}function Pt(t){var n,e,r,a,o,u,l,d,p,b,x,w=Object.values(t[0]).length,D=w&&kt(t),I=new X({props:{name:"hd",label:t[1]("day"),size:"2",maxlength:"2",pattern:"\\d*",value:t[0].hd}}),E=new tt({props:{name:"hm",label:t[1]("month"),$$slots:{default:[St]},$$scope:{ctx:t}}}),C=new X({props:{name:"hy",label:t[1]("year"),size:"4",maxlength:"4",pattern:"\\d*",value:t[0].hy}}),M=new nt({props:{type:"submit",$$slots:{default:[_t]},$$scope:{ctx:t}}});return{c:function(){D&&D.c(),n=$(),e=c("form"),r=c("div"),R(I.$$.fragment),a=$(),o=c("div"),R(E.$$.fragment),u=$(),l=c("div"),R(C.$$.fragment),d=$(),p=c("div"),R(M.$$.fragment),this.h()},l:function(t){D&&D.l(t),n=g(t),e=f(t,"FORM",{});var c=s(e);r=f(c,"DIV",{class:!0});var i=s(r);T(I.$$.fragment,i),i.forEach(h),a=g(c),o=f(c,"DIV",{class:!0});var m=s(o);T(E.$$.fragment,m),m.forEach(h),u=g(c),l=f(c,"DIV",{class:!0});var v=s(l);T(C.$$.fragment,v),v.forEach(h),d=g(c),p=f(c,"DIV",{class:!0});var $=s(p);T(M.$$.fragment,$),$.forEach(h),c.forEach(h),this.h()},h:function(){m(r,"class","field svelte-8b9eaa"),m(o,"class","field svelte-8b9eaa"),m(l,"class","field svelte-8b9eaa"),m(p,"class","button svelte-8b9eaa")},m:function(c,f,s){D&&D.m(c,f),v(c,n,f),v(c,e,f),i(e,r),j(I,r,null),i(e,a),i(e,o),j(E,o,null),i(e,u),i(e,l),j(C,l,null),i(e,d),i(e,p),j(M,p,null),b=!0,s&&x(),x=z(e,"submit",S(t[4]))},p:function(t,e){var r=y(e,1)[0];1&r&&(w=Object.values(t[0]).length),w?D?(D.p(t,r),k(D,1)):((D=kt(t)).c(),k(D,1),D.m(n.parentNode,n)):D&&(_(),O(D,1,1,(function(){D=null})),P());var a={};2&r&&(a.label=t[1]("day")),1&r&&(a.value=t[0].hd),I.$set(a);var o={};2&r&&(o.label=t[1]("month")),131073&r&&(o.$$scope={dirty:r,ctx:t}),E.$set(o);var c={};2&r&&(c.label=t[1]("year")),1&r&&(c.value=t[0].hy),C.$set(c);var i={};131074&r&&(i.$$scope={dirty:r,ctx:t}),M.$set(i)},i:function(t){b||(k(D),k(I.$$.fragment,t),k(E.$$.fragment,t),k(C.$$.fragment,t),k(M.$$.fragment,t),b=!0)},o:function(t){O(D),O(I.$$.fragment,t),O(E.$$.fragment,t),O(C.$$.fragment,t),O(M.$$.fragment,t),b=!1},d:function(t){D&&D.d(t),t&&h(n),t&&h(e),V(I),V(E),V(C),V(M),x()}}}function Ct(t,n,e){var r;w(t,D,(function(t){return e(1,r=t)}));var a=[r("months.january"),r("months.february"),r("months.march"),r("months.april"),r("months.may"),r("months.june"),r("months.july"),r("months.august"),r("months.september"),r("months.october"),r("months.november"),r("months.december")],o=new Date,c=(o.getMonth(),o.getDate()),i=o.getMonth()+1,u=o.getFullYear(),f={},s=Rt(u,i,c),l=s.year,h=s.month_name,m=s.date;function v(t,n,e){return d.apply(this,arguments)}function d(){return(d=M(N.mark((function t(n,r,a){var o,c;return N.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="https://www.hebcal.com/converter/?cfg=json&hy=".concat(n,"&hm=").concat(r,"&hd=").concat(a,"&h2g=1"),t.next=3,fetch(o);case 3:return c=t.sent,t.t0=e,t.next=7,c.json();case 7:t.t1=f=t.sent,(0,t.t0)(0,t.t1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return C((function(){v(l,h,m)})),[f,r,a,["Nisan","Iyyar","Sivan","Tamuz","Av","Elul","Tishrei","Cheshvan","Kislev","Tevet","Sh'vat","Adar","Adar I","Adar II"],function(t){v(t.target.hy.value,t.target.hm.value,t.target.hd.value)}]}var Mt=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(Tt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-8b9eaa-style")||((u=c("style")).id="svelte-8b9eaa-style",u.textContent=".field.svelte-8b9eaa{margin-top:1.875rem;margin-bottom:1.875rem}@media(min-width: 650px){.field.svelte-8b9eaa{width:6.875rem;float:left}.field.svelte-8b9eaa:nth-child(2){width:11.25rem;margin-left:1.875rem;margin-right:1.875rem}}.button.svelte-8b9eaa{margin-bottom:1.25rem}@media(min-width: 650px){.button.svelte-8b9eaa{width:20rem}}",i(document.head,u)),e(a(o),t,Ct,Pt,r,{}),o}return l}();function Nt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function At(t){var n,e,r=t[5].default,a=B(r,t,t[4],null);return{c:function(){n=c("div"),a&&a.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);a&&a.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","tabs svelte-22sao8")},m:function(t,r){v(t,n,r),a&&a.m(n,null),e=!0},p:function(t,n){var e=y(n,1)[0];a&&a.p&&16&e&&a.p(q(r,t,t[4],null),H(r,t[4],e,null))},i:function(t){e||(k(a,t),e=!0)},o:function(t){O(a,t),e=!1},d:function(t){t&&h(n),a&&a.d(t)}}}var Bt={};function qt(t,n,e){var r=[],a=[],o=L(null),c=L(null);F(Bt,{registerTab:function(t){r.push(t),o.update((function(n){return n||t})),G((function(){var n=r.indexOf(t);r.splice(n,1),o.update((function(e){return e===t?r[n]||r[r.length-1]:e}))}))},registerPanel:function(t){a.push(t),c.update((function(n){return n||t})),G((function(){var n=a.indexOf(t);a.splice(n,1),c.update((function(e){return e===t?a[n]||a[a.length-1]:e}))}))},selectTab:function(t){var n=r.indexOf(t);o.set(t),c.set(a[n])},selectedTab:o,selectedPanel:c});var i=n.$$slots,u=void 0===i?{}:i,f=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(4,f=t.$$scope)},[r,a,o,c,f,u]}var Ht=function(c){t(f,o);var i,u=(i=f,function(){var t,n=I(i);if(Nt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function f(t){var o;return n(this,f),o=u.call(this),e(a(o),t,qt,At,r,{}),o}return f}();function Ft(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Gt(t){var n,e,r=t[5].default,a=B(r,t,t[4],null);return{c:function(){n=c("div"),a&&a.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);a&&a.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","tabs svelte-1l1abvu")},m:function(t,r){v(t,n,r),a&&a.m(n,null),e=!0},p:function(t,n){var e=y(n,1)[0];a&&a.p&&16&e&&a.p(q(r,t,t[4],null),H(r,t[4],e,null))},i:function(t){e||(k(a,t),e=!0)},o:function(t){O(a,t),e=!1},d:function(t){t&&h(n),a&&a.d(t)}}}var Lt={};function Kt(t,n,e){var r=[],a=[],o=L(null),c=L(null);F(Lt,{registerTab:function(t){r.push(t),o.update((function(n){return n||t})),G((function(){var n=r.indexOf(t);r.splice(n,1),o.update((function(e){return e===t?r[n]||r[r.length-1]:e}))}))},registerPanel:function(t){a.push(t),c.update((function(n){return n||t})),G((function(){var n=a.indexOf(t);a.splice(n,1),c.update((function(e){return e===t?a[n]||a[a.length-1]:e}))}))},selectTab:function(t){var n=r.indexOf(t);o.set(t),c.set(a[n])},selectedTab:o,selectedPanel:c});var i=n.$$slots,u=void 0===i?{}:i,f=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(4,f=t.$$scope)},[r,a,o,c,f,u]}var Yt=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(Ft()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-1l1abvu-style")||((u=c("style")).id="svelte-1l1abvu-style",u.textContent=".tabs.svelte-1l1abvu{display:flex;justify-content:space-around}@media(min-width: 650px){.tabs.svelte-1l1abvu{display:block}}",i(document.head,u)),e(a(o),t,Kt,Gt,r,{}),o}return l}();function Jt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Qt(t){var n,e,r=t[5].default,a=B(r,t,t[4],null);return{c:function(){n=c("div"),a&&a.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);a&&a.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","panel svelte-1yzrkz3")},m:function(t,r){v(t,n,r),a&&a.m(n,null),e=!0},p:function(t,n){a&&a.p&&16&n&&a.p(q(r,t,t[4],null),H(r,t[4],n,null))},i:function(t){e||(k(a,t),e=!0)},o:function(t){O(a,t),e=!1},d:function(t){t&&h(n),a&&a.d(t)}}}function Ut(t){var n,e,r=t[0]===t[1]&&Qt(t);return{c:function(){r&&r.c(),n=p()},l:function(t){r&&r.l(t),n=p()},m:function(t,a){r&&r.m(t,a),v(t,n,a),e=!0},p:function(t,e){var a=y(e,1)[0];t[0]===t[1]?r?(r.p(t,a),k(r,1)):((r=Qt(t)).c(),k(r,1),r.m(n.parentNode,n)):r&&(_(),O(r,1,1,(function(){r=null})),P())},i:function(t){e||(k(r),e=!0)},o:function(t){O(r),e=!1},d:function(t){r&&r.d(t),t&&h(n)}}}function Wt(t,n,e){var r,a={},o=K(Bt),c=o.registerPanel,i=o.selectedPanel;w(t,i,(function(t){return e(0,r=t)})),c(a);var u=n.$$slots,f=void 0===u?{}:u,s=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(4,s=t.$$scope)},[r,a,i,c,s,f]}var Zt=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(Jt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-1yzrkz3-style")||((u=c("style")).id="svelte-1yzrkz3-style",u.textContent=".panel.svelte-1yzrkz3{position:relative;margin-top:-1px;background:#fff;padding:1.25rem;outline:0;box-shadow:0px 1px 3px 0 #ccc}",i(document.head,u)),e(a(o),t,Wt,Ut,r,{}),o}return l}();function Xt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function tn(t){var n,e,r,a=t[6].default,o=B(a,t,t[5],null);return{c:function(){n=c("button"),o&&o.c(),this.h()},l:function(t){n=f(t,"BUTTON",{class:!0});var e=s(n);o&&o.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","svelte-qwk4vl"),Y(n,"selected",t[0]===t[1])},m:function(a,c,i){v(a,n,c),o&&o.m(n,null),e=!0,i&&r(),r=z(n,"click",t[7])},p:function(t,e){var r=y(e,1)[0];o&&o.p&&32&r&&o.p(q(a,t,t[5],null),H(a,t[5],r,null)),3&r&&Y(n,"selected",t[0]===t[1])},i:function(t){e||(k(o,t),e=!0)},o:function(t){O(o,t),e=!1},d:function(t){t&&h(n),o&&o.d(t),r()}}}function nn(t,n,e){var r,a={},o=K(Bt),c=o.registerTab,i=o.selectTab,u=o.selectedTab;w(t,u,(function(t){return e(0,r=t)})),c(a);var f=n.$$slots,s=void 0===f?{}:f,l=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(5,l=t.$$scope)},[r,a,i,u,c,l,s,function(){return i(a)}]}var en=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(Xt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-qwk4vl-style")||((u=c("style")).id="svelte-qwk4vl-style",u.textContent="button.svelte-qwk4vl{background:none;border:none;border-radius:0;margin:0;line-height:1;color:#999;font-weight:bold;font-size:0.875rem;text-align:center;outline:0;cursor:pointer;background:#f2f2f2;padding-top:0.875rem;padding-bottom:0.75rem;width:100%;box-shadow:none;z-index:5;margin-left:-3px}@media(min-width: 650px){button.svelte-qwk4vl{width:12.5rem;padding-top:1.5625rem;padding-bottom:1.25rem}}.selected.svelte-qwk4vl{position:relative;color:#EA5A0B;background:#fff;box-shadow:0 0 20px 0 #eee;box-shadow:0px 1px 3px 0 #ccc;z-index:10;margin-left:0}.selected.svelte-qwk4vl:after{position:absolute;bottom:-15px;left:0;content:'';width:100%;height:18px;background:#fff}",i(document.head,u)),e(a(o),t,nn,tn,r,{}),o}return l}();function rn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function an(t){var n,e=t[0]("nav.jewishCalendar")+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){1&r&&e!==(e=t[0]("nav.jewishCalendar")+"")&&d(n,e)},d:function(t){t&&h(n)}}}function on(t){var n,e,r,a=t[0]("page.calendar.gregorian")+"",o=t[0]("page.calendar.hebrew")+"";return{c:function(){n=u(a),e=u(" / "),r=u(o)},l:function(t){n=l(t,a),e=l(t," / "),r=l(t,o)},m:function(t,a){v(t,n,a),v(t,e,a),v(t,r,a)},p:function(t,e){1&e&&a!==(a=t[0]("page.calendar.gregorian")+"")&&d(n,a),1&e&&o!==(o=t[0]("page.calendar.hebrew")+"")&&d(r,o)},d:function(t){t&&h(n),t&&h(e),t&&h(r)}}}function cn(t){var n,e,r,a=t[0]("page.calendar.hebrew")+"",o=t[0]("page.calendar.gregorian")+"";return{c:function(){n=u(a),e=u(" / "),r=u(o)},l:function(t){n=l(t,a),e=l(t," / "),r=l(t,o)},m:function(t,a){v(t,n,a),v(t,e,a),v(t,r,a)},p:function(t,e){1&e&&a!==(a=t[0]("page.calendar.hebrew")+"")&&d(n,a),1&e&&o!==(o=t[0]("page.calendar.gregorian")+"")&&d(r,o)},d:function(t){t&&h(n),t&&h(e),t&&h(r)}}}function un(t){var n,e,r=new en({props:{$$slots:{default:[on]},$$scope:{ctx:t}}}),a=new en({props:{$$slots:{default:[cn]},$$scope:{ctx:t}}});return{c:function(){R(r.$$.fragment),n=$(),R(a.$$.fragment)},l:function(t){T(r.$$.fragment,t),n=g(t),T(a.$$.fragment,t)},m:function(t,o){j(r,t,o),v(t,n,o),j(a,t,o),e=!0},p:function(t,n){var e={};5&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e);var o={};5&n&&(o.$$scope={dirty:n,ctx:t}),a.$set(o)},i:function(t){e||(k(r.$$.fragment,t),k(a.$$.fragment,t),e=!0)},o:function(t){O(r.$$.fragment,t),O(a.$$.fragment,t),e=!1},d:function(t){V(r,t),t&&h(n),V(a,t)}}}function fn(t){var n,e,r,a,o=t[0]("page.calendar.gregorianToHebrew")+"",p=new Dt({});return{c:function(){n=c("div"),e=u(o),r=$(),R(p.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=s(n);e=l(a,o),a.forEach(h),r=g(t),T(p.$$.fragment,t),this.h()},h:function(){m(n,"class","headline svelte-135g7bo")},m:function(t,o){v(t,n,o),i(n,e),v(t,r,o),j(p,t,o),a=!0},p:function(t,n){(!a||1&n)&&o!==(o=t[0]("page.calendar.gregorianToHebrew")+"")&&d(e,o)},i:function(t){a||(k(p.$$.fragment,t),a=!0)},o:function(t){O(p.$$.fragment,t),a=!1},d:function(t){t&&h(n),t&&h(r),V(p,t)}}}function sn(t){var n,e,r,a,o=t[0]("page.calendar.hebrewToGregorian")+"",p=new Mt({});return{c:function(){n=c("div"),e=u(o),r=$(),R(p.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=s(n);e=l(a,o),a.forEach(h),r=g(t),T(p.$$.fragment,t),this.h()},h:function(){m(n,"class","headline svelte-135g7bo")},m:function(t,o){v(t,n,o),i(n,e),v(t,r,o),j(p,t,o),a=!0},p:function(t,n){(!a||1&n)&&o!==(o=t[0]("page.calendar.hebrewToGregorian")+"")&&d(e,o)},i:function(t){a||(k(p.$$.fragment,t),a=!0)},o:function(t){O(p.$$.fragment,t),a=!1},d:function(t){t&&h(n),t&&h(r),V(p,t)}}}function ln(t){var n,e,r,a=new Yt({props:{$$slots:{default:[un]},$$scope:{ctx:t}}}),o=new Zt({props:{$$slots:{default:[fn]},$$scope:{ctx:t}}}),c=new Zt({props:{$$slots:{default:[sn]},$$scope:{ctx:t}}});return{c:function(){R(a.$$.fragment),n=$(),R(o.$$.fragment),e=$(),R(c.$$.fragment)},l:function(t){T(a.$$.fragment,t),n=g(t),T(o.$$.fragment,t),e=g(t),T(c.$$.fragment,t)},m:function(t,i){j(a,t,i),v(t,n,i),j(o,t,i),v(t,e,i),j(c,t,i),r=!0},p:function(t,n){var e={};5&n&&(e.$$scope={dirty:n,ctx:t}),a.$set(e);var r={};5&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r);var i={};5&n&&(i.$$scope={dirty:n,ctx:t}),c.$set(i)},i:function(t){r||(k(a.$$.fragment,t),k(o.$$.fragment,t),k(c.$$.fragment,t),r=!0)},o:function(t){O(a.$$.fragment,t),O(o.$$.fragment,t),O(c.$$.fragment,t),r=!1},d:function(t){V(a,t),t&&h(n),V(o,t),t&&h(e),V(c,t)}}}function hn(t){var n,e,r,a,o=new W({props:{orangeLine:!0,semiBold:!0,thirtysix:!0,$$slots:{default:[an]},$$scope:{ctx:t}}}),i=new Ht({props:{$$slots:{default:[ln]},$$scope:{ctx:t}}});return{c:function(){n=c("div"),R(o.$$.fragment),e=$(),r=c("div"),R(i.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=s(n);T(o.$$.fragment,a),a.forEach(h),e=g(t),r=f(t,"DIV",{class:!0});var c=s(r);T(i.$$.fragment,c),c.forEach(h),this.h()},h:function(){m(n,"class","h1 svelte-135g7bo"),m(r,"class","tabs svelte-135g7bo")},m:function(t,c){v(t,n,c),j(o,n,null),v(t,e,c),v(t,r,c),j(i,r,null),a=!0},p:function(t,n){var e={};5&n&&(e.$$scope={dirty:n,ctx:t}),o.$set(e);var r={};5&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i:function(t){a||(k(o.$$.fragment,t),k(i.$$.fragment,t),a=!0)},o:function(t){O(o.$$.fragment,t),O(i.$$.fragment,t),a=!1},d:function(t){t&&h(n),V(o),t&&h(e),t&&h(r),V(i)}}}function mn(t){var n,e,r,a,o,p,y,b=t[0]("page.calendar.year")+"",x=new Z({props:{src:"calendar_preview"}}),w=new et({props:{items:[{content:t[0]("page.calendar.showCalendar")}]}});return{c:function(){n=c("div"),e=u(b),r=$(),a=c("a"),o=c("div"),R(x.$$.fragment),p=$(),R(w.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var c=s(n);e=l(c,b),c.forEach(h),r=g(t),a=f(t,"A",{href:!0,target:!0});var i=s(a);o=f(i,"DIV",{class:!0});var u=s(o);T(x.$$.fragment,u),u.forEach(h),p=g(i),T(w.$$.fragment,i),i.forEach(h),this.h()},h:function(){m(n,"class","headline svelte-135g7bo"),m(o,"class","img svelte-135g7bo"),m(a,"href","./ICZ.pdf"),m(a,"target","_blank")},m:function(t,c){v(t,n,c),i(n,e),v(t,r,c),v(t,a,c),i(a,o),j(x,o,null),i(a,p),j(w,a,null),y=!0},p:function(t,n){(!y||1&n)&&b!==(b=t[0]("page.calendar.year")+"")&&d(e,b);var r={};1&n&&(r.items=[{content:t[0]("page.calendar.showCalendar")}]),w.$set(r)},i:function(t){y||(k(x.$$.fragment,t),k(w.$$.fragment,t),y=!0)},o:function(t){O(x.$$.fragment,t),O(w.$$.fragment,t),y=!1},d:function(t){t&&h(n),t&&h(r),t&&h(a),V(x),V(w)}}}function vn(t){var n,e,r,a;document.title=n=t[0]("nav.jewishCalendar");var o=new U({props:{padding:t[1]>640,$$slots:{default:[hn]},$$scope:{ctx:t}}}),c=new U({props:{$$slots:{default:[mn]},$$scope:{ctx:t}}});return{c:function(){e=$(),R(o.$$.fragment),r=$(),R(c.$$.fragment)},l:function(t){J('[data-svelte="svelte-1qpes24"]',document.head).forEach(h),e=g(t),T(o.$$.fragment,t),r=g(t),T(c.$$.fragment,t)},m:function(t,n){v(t,e,n),j(o,t,n),v(t,r,n),j(c,t,n),a=!0},p:function(t,e){var r=y(e,1)[0];(!a||1&r)&&n!==(n=t[0]("nav.jewishCalendar"))&&(document.title=n);var i={};2&r&&(i.padding=t[1]>640),5&r&&(i.$$scope={dirty:r,ctx:t}),o.$set(i);var u={};5&r&&(u.$$scope={dirty:r,ctx:t}),c.$set(u)},i:function(t){a||(k(o.$$.fragment,t),k(c.$$.fragment,t),a=!0)},o:function(t){O(o.$$.fragment,t),O(c.$$.fragment,t),a=!1},d:function(t){t&&h(e),V(o,t),t&&h(r),V(c,t)}}}function dn(t,n,e){var r,a;return w(t,D,(function(t){return e(0,r=t)})),w(t,Q,(function(t){return e(1,a=t)})),[r,a]}var pn=function(u){t(l,o);var f,s=(f=l,function(){var t,n=I(f);if(rn()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var o,u;return n(this,l),o=s.call(this),document.getElementById("svelte-135g7bo-style")||((u=c("style")).id="svelte-135g7bo-style",u.textContent=".h1.svelte-135g7bo{padding:0 1.25rem}@media(min-width: 650px){.h1.svelte-135g7bo{padding:0}}.tabs.svelte-135g7bo{max-width:52.5rem}.headline.svelte-135g7bo{font-size:1.25rem;font-weight:bold;padding:2.5rem 0}.img.svelte-135g7bo{max-width:28.125rem;cursor:pointer}",i(document.head,u)),e(a(o),t,dn,vn,r,{}),o}return l}();export default pn;
