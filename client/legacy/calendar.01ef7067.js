import{_ as t,a as n,i as e,s as r,b as a,S as c,e as o,c as i,t as u,f,g as s,h as l,j as h,l as m,n as v,p as d,E as p,d as $,k as g,o as y,q as b,W as x,r as w,X as D,v as I,w as E,x as R,y as T,z as j,A as k,B as O,C as V,G as z,a2 as S,U as _,T as C,J as P,M,N,a3 as B,D as A,H as q,I as H,a4 as F,a5 as G,L,a6 as Y,m as K,F as U}from"./client.fccec485.js";import"./index.0555c71d.js";import{v as J}from"./index.8a3c8eaa.js";import{S as W,H as Z}from"./Section.fb6e42ae.js";import"@babel/runtime/helpers/esm/classCallCheck";import"@babel/runtime/helpers/esm/assertThisInitialized";import"@babel/runtime/helpers/esm/possibleConstructorReturn";import"@babel/runtime/helpers/esm/getPrototypeOf";import"@babel/runtime/helpers/esm/inherits";import"@babel/runtime/helpers/esm/slicedToArray";import{I as Q}from"./index.a56fdac4.js";import{T as X,S as tt,B as nt}from"./Button.69adeca4.js";import{L as et}from"./List.522f3447.js";function rt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function at(t,n,e){var r=t.slice();return r[5]=n[e],r[7]=e,r}function ct(t){var n,e;return{c:function(){n=o("div"),e=u(t[2]),this.h()},l:function(r){n=f(r,"DIV",{class:!0});var a=s(n);e=l(a,t[2]),a.forEach(h),this.h()},h:function(){m(n,"class","hebrew svelte-15h6xbh")},m:function(t,r){v(t,n,r),i(n,e)},p:function(t,n){4&n&&d(e,t[2])},d:function(t){t&&h(n)}}}function ot(t){var n,e,r=t[4]("events")+"";return{c:function(){n=o("strong"),e=u(r)},l:function(t){n=f(t,"STRONG",{});var a=s(n);e=l(a,r),a.forEach(h)},m:function(t,r){v(t,n,r),i(n,e)},p:function(t,n){16&n&&r!==(r=t[4]("events")+"")&&d(e,r)},d:function(t){t&&h(n)}}}function it(t){var n,e,r=t[5]+"";return{c:function(){n=u(", "),e=u(r)},l:function(t){n=l(t,", "),e=l(t,r)},m:function(t,r){v(t,n,r),v(t,e,r)},p:function(t,n){8&n&&r!==(r=t[5]+"")&&d(e,r)},d:function(t){t&&h(n),t&&h(e)}}}function ut(t){var n,e=t[5]+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){8&r&&e!==(e=t[5]+"")&&d(n,e)},d:function(t){t&&h(n)}}}function ft(t){var n;var e=function(t,n){return 0===t[7]?ut:it}(t)(t);return{c:function(){e.c(),n=p()},l:function(t){e.l(t),n=p()},m:function(t,r){e.m(t,r),v(t,n,r)},p:function(t,n){e.p(t,n)},d:function(t){e.d(t),t&&h(n)}}}function st(t){for(var n,e,r,a,c,p,w,D,I,E,R=t[2]&&ct(t),T=t[3].length>0&&ot(t),j=t[3],k=[],O=0;O<j.length;O+=1)k[O]=ft(at(t,j,O));return{c:function(){n=o("div"),e=o("div"),r=u(t[0]),a=u(" =\n        "),c=o("strong"),p=u(t[1]),w=$(),R&&R.c(),D=$(),I=o("div"),T&&T.c(),E=$();for(var i=0;i<k.length;i+=1)k[i].c();this.h()},l:function(o){n=f(o,"DIV",{class:!0});var i=s(n);e=f(i,"DIV",{class:!0});var u=s(e);r=l(u,t[0]),a=l(u," =\n        "),c=f(u,"STRONG",{});var m=s(c);p=l(m,t[1]),m.forEach(h),u.forEach(h),w=g(i),R&&R.l(i),D=g(i),I=f(i,"DIV",{class:!0});var v=s(I);T&&T.l(v),E=g(v);for(var d=0;d<k.length;d+=1)k[d].l(v);v.forEach(h),i.forEach(h),this.h()},h:function(){m(e,"class","date svelte-15h6xbh"),m(I,"class","events svelte-15h6xbh"),m(n,"class","info svelte-15h6xbh")},m:function(t,o){v(t,n,o),i(n,e),i(e,r),i(e,a),i(e,c),i(c,p),i(n,w),R&&R.m(n,null),i(n,D),i(n,I),T&&T.m(I,null),i(I,E);for(var u=0;u<k.length;u+=1)k[u].m(I,null)},p:function(t,e){var a=y(e,1)[0];if(1&a&&d(r,t[0]),2&a&&d(p,t[1]),t[2]?R?R.p(t,a):((R=ct(t)).c(),R.m(n,D)):R&&(R.d(1),R=null),t[3].length>0?T?T.p(t,a):((T=ot(t)).c(),T.m(I,E)):T&&(T.d(1),T=null),8&a){var c;for(j=t[3],c=0;c<j.length;c+=1){var o=at(t,j,c);k[c]?k[c].p(o,a):(k[c]=ft(o),k[c].c(),k[c].m(I,null))}for(;c<k.length;c+=1)k[c].d(1);k.length=j.length}},i:b,o:b,d:function(t){t&&h(n),R&&R.d(),T&&T.d(),x(k,t)}}}function lt(t,n,e){var r;w(t,D,(function(t){return e(4,r=t)}));var a=n.initialDate,c=n.convertedDate,o=n.hebrew,i=void 0===o?null:o,u=n.events,f=void 0===u?null:u;return t.$set=function(t){"initialDate"in t&&e(0,a=t.initialDate),"convertedDate"in t&&e(1,c=t.convertedDate),"hebrew"in t&&e(2,i=t.hebrew),"events"in t&&e(3,f=t.events)},[a,c,i,f,r]}var ht=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(rt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-15h6xbh-style")||((u=o("style")).id="svelte-15h6xbh-style",u.textContent=".info.svelte-15h6xbh{padding:1.25rem;background:#eee}.date.svelte-15h6xbh{font-size:1.625rem}.hebrew.svelte-15h6xbh{font-size:1.25rem;margin-bottom:0.625rem;margin-top:0.625rem}.events.svelte-15h6xbh{margin:1.25rem 0}",i(document.head,u)),e(a(c),t,lt,st,r,{initialDate:0,convertedDate:1,hebrew:2,events:3}),c}return l}();function mt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function vt(t,n,e){var r=t.slice();return r[10]=n[e],r[12]=e,r}function dt(t){var n,e,r=new ht({props:{initialDate:"".concat(t[0].gd," ").concat(t[5][t[0].gm-1]," ").concat(t[0].gy),convertedDate:"".concat(t[0].hd,"th of ").concat(t[0].hm,", ").concat(t[0].hy),hebrew:t[0].hebrew,events:t[0].events}});return{c:function(){n=o("div"),R(r.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);T(r.$$.fragment,e),e.forEach(h),this.h()},h:function(){m(n,"class","info")},m:function(t,a){v(t,n,a),j(r,n,null),e=!0},p:function(t,n){var e={};1&n&&(e.initialDate="".concat(t[0].gd," ").concat(t[5][t[0].gm-1]," ").concat(t[0].gy)),1&n&&(e.convertedDate="".concat(t[0].hd,"th of ").concat(t[0].hm,", ").concat(t[0].hy)),1&n&&(e.hebrew=t[0].hebrew),1&n&&(e.events=t[0].events),r.$set(e)},i:function(t){e||(k(r.$$.fragment,t),e=!0)},o:function(t){O(r.$$.fragment,t),e=!1},d:function(t){t&&h(n),V(r)}}}function pt(t){var n,e,r=t[10]+"";return{c:function(){n=o("option"),e=u(r),this.h()},l:function(t){n=f(t,"OPTION",{value:!0});var a=s(n);e=l(a,r),a.forEach(h),this.h()},h:function(){n.__value=t[12]+1,n.value=n.__value},m:function(t,r){v(t,n,r),i(n,e)},p:b,d:function(t){t&&h(n)}}}function $t(t){var n,e,r,a=t[10]+"";return{c:function(){n=o("option"),e=u(a),r=$(),this.h()},l:function(t){n=f(t,"OPTION",{selected:!0,value:!0});var c=s(n);e=l(c,a),r=g(c),c.forEach(h),this.h()},h:function(){n.selected="selected",n.__value=t[12]+1,n.value=n.__value},m:function(t,a){v(t,n,a),i(n,e),i(n,r)},p:b,d:function(t){t&&h(n)}}}function gt(t){var n;var e=function(t,n){return t[12]+1===t[2]?$t:pt}(t)(t);return{c:function(){e.c(),n=p()},l:function(t){e.l(t),n=p()},m:function(t,r){e.m(t,r),v(t,n,r)},p:function(t,n){e.p(t,n)},d:function(t){e.d(t),t&&h(n)}}}function yt(t){for(var n,e=t[5],r=[],a=0;a<e.length;a+=1)r[a]=gt(vt(t,e,a));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=p()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=p()},m:function(t,e){for(var a=0;a<r.length;a+=1)r[a].m(t,e);v(t,n,e)},p:function(t,a){if(36&a){var c;for(e=t[5],c=0;c<e.length;c+=1){var o=vt(t,e,c);r[c]?r[c].p(o,a):(r[c]=gt(o),r[c].c(),r[c].m(n.parentNode,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=e.length}},d:function(t){x(r,t),t&&h(n)}}}function bt(t){var n,e=t[1]("toHebrew")+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){2&r&&e!==(e=t[1]("toHebrew")+"")&&d(n,e)},d:function(t){t&&h(n)}}}function xt(t){var n,e,r,a,c,u,l,d,p,b,x,w,D=Object.values(t[0]).length,I=D&&dt(t),E=new X({props:{name:"gd",label:t[1]("day"),size:"2",maxlength:"2",pattern:"\\d*",value:t[3]}}),P=new tt({props:{name:"gm",label:t[1]("month"),$$slots:{default:[yt]},$$scope:{ctx:t}}}),M=new X({props:{name:"gy",label:t[1]("year"),size:"4",maxlength:"4",pattern:"\\d*",value:t[4]}}),N=new nt({props:{class:"button",type:"submit",$$slots:{default:[bt]},$$scope:{ctx:t}}});return{c:function(){I&&I.c(),n=$(),e=o("form"),r=o("div"),a=o("div"),R(E.$$.fragment),c=$(),u=o("div"),R(P.$$.fragment),l=$(),d=o("div"),R(M.$$.fragment),p=$(),b=o("div"),R(N.$$.fragment),this.h()},l:function(t){I&&I.l(t),n=g(t),e=f(t,"FORM",{});var o=s(e);r=f(o,"DIV",{class:!0});var i=s(r);a=f(i,"DIV",{class:!0});var m=s(a);T(E.$$.fragment,m),m.forEach(h),c=g(i),u=f(i,"DIV",{class:!0});var v=s(u);T(P.$$.fragment,v),v.forEach(h),l=g(i),d=f(i,"DIV",{class:!0});var $=s(d);T(M.$$.fragment,$),$.forEach(h),i.forEach(h),p=g(o),b=f(o,"DIV",{class:!0});var y=s(b);T(N.$$.fragment,y),y.forEach(h),o.forEach(h),this.h()},h:function(){m(a,"class","field svelte-lymy35"),m(u,"class","field svelte-lymy35"),m(d,"class","field svelte-lymy35"),m(r,"class","fields svelte-lymy35"),m(b,"class","button svelte-lymy35")},m:function(o,f,s){I&&I.m(o,f),v(o,n,f),v(o,e,f),i(e,r),i(r,a),j(E,a,null),i(r,c),i(r,u),j(P,u,null),i(r,l),i(r,d),j(M,d,null),i(e,p),i(e,b),j(N,b,null),x=!0,s&&w(),w=z(e,"submit",S(t[6]))},p:function(t,e){var r=y(e,1)[0];1&r&&(D=Object.values(t[0]).length),D?I?(I.p(t,r),k(I,1)):((I=dt(t)).c(),k(I,1),I.m(n.parentNode,n)):I&&(_(),O(I,1,1,(function(){I=null})),C());var a={};2&r&&(a.label=t[1]("day")),E.$set(a);var c={};2&r&&(c.label=t[1]("month")),8192&r&&(c.$$scope={dirty:r,ctx:t}),P.$set(c);var o={};2&r&&(o.label=t[1]("year")),M.$set(o);var i={};8194&r&&(i.$$scope={dirty:r,ctx:t}),N.$set(i)},i:function(t){x||(k(I),k(E.$$.fragment,t),k(P.$$.fragment,t),k(M.$$.fragment,t),k(N.$$.fragment,t),x=!0)},o:function(t){O(I),O(E.$$.fragment,t),O(P.$$.fragment,t),O(M.$$.fragment,t),O(N.$$.fragment,t),x=!1},d:function(t){I&&I.d(t),t&&h(n),t&&h(e),V(E),V(P),V(M),V(N),w()}}}function wt(t,n,e){var r;w(t,D,(function(t){return e(1,r=t)}));var a=new Date,c=a.getMonth()+1,o=String(a.getDate()).padStart(2,"0"),i=String(a.getMonth()+1).padStart(2,"0"),u=a.getFullYear(),f={},s=[r("months.january"),r("months.february"),r("months.march"),r("months.april"),r("months.may"),r("months.june"),r("months.july"),r("months.august"),r("months.september"),r("months.october"),r("months.november"),r("months.december")];function l(t,n,e){return h.apply(this,arguments)}function h(){return(h=M(N.mark((function t(n,r,a){var c,o;return N.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://www.hebcal.com/converter/?cfg=json&gy=".concat(n,"&gm=").concat(r,"&gd=").concat(a),t.next=3,fetch(c);case 3:return o=t.sent,t.t0=e,t.next=7,o.json();case 7:t.t1=f=t.sent,(0,t.t0)(0,t.t1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return P((function(){l(u,i,o)})),[f,r,c,o,u,s,function(t){l(t.target.gy.value,t.target.gm.value,t.target.gd.value)}]}var Dt=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(mt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-lymy35-style")||((u=o("style")).id="svelte-lymy35-style",u.textContent=".fields.svelte-lymy35{overflow:hidden}.field.svelte-lymy35{margin-top:2.5rem;margin-bottom:2.5rem}@media(min-width: 650px){.field.svelte-lymy35{width:6.875rem;float:left}.field.svelte-lymy35:nth-child(2){width:11.25rem;margin-left:1.875rem;margin-right:1.875rem}}.button.svelte-lymy35{margin-bottom:1.25rem}@media(min-width: 650px){.button.svelte-lymy35{width:20rem}}",i(document.head,u)),e(a(c),t,wt,xt,r,{}),c}return l}();var It=new function(t,n,e,r,a,c,o,i,u,f,s,l,h,m){this[0]=t,this[1]=n,this[2]=e,this[3]=r,this[4]=a,this[5]=c,this[6]=o,this[7]=i,this[8]=u,this[9]=f,this[10]=s,this[11]=l,this[12]=h,this[13]=m}("Tishri","Heshvan","Kislev","Tevet","Shevat","AdarI","AdarII","Nisan","Iyyar","Sivan","Tammuz","Av","Elul"),Et=new function(t,n,e,r,a,c,o,i,u,f,s,l,h,m,v,d,p,$,g){this[0]=t,this[1]=n,this[2]=e,this[3]=r,this[4]=a,this[5]=c,this[6]=o,this[7]=i,this[8]=u,this[9]=f,this[10]=s,this[11]=l,this[12]=h,this[13]=m,this[14]=v,this[15]=d,this[16]=p,this[17]=$,this[18]=g}(12,12,13,12,12,13,12,13,12,12,13,12,12,13,12,12,13,12,13);function Rt(t,n,e){var r=0,a=0,c=0,o=0,i=0,u=0,f=0;function s(t){var n,e,r,a;for(o=Math.floor((t+310)/6940),n=31524,e=(n+=45971*o)>>16,e+=2744*o,a=Math.floor(e/25920),n=(e-=25920*a)<<16|65535&n,r=Math.floor(n/25920),u=a<<16|r,f=n-=25920*r;u<t-6940+310;)o++,f+=179876755,u+=Math.floor(f/25920),f%=25920;for(i=0;i<18&&!(u>t-74);i++)f+=765433*Et[i],u+=Math.floor(f/25920),f%=25920}function l(t,n,e){var r=n,a=r%7;return(e>=19440||!(2==t||5==t||7==t||10==t||13==t||16==t||18==t)&&2==a&&e>=9924||(3==t||6==t||8==t||11==t||14==t||17==t||0==t)&&1==a&&e>=16789)&&(r++,7==++a&&(a=0)),3!=a&&5!=a&&0!=a||r++,r}var h=t;return"object"===B(h)&&(n=t.getMonth()+1,e=t.getDate(),h=t.getFullYear()),function(t){var n,e=0,h=0,m=t-347997;if(s(m),m>=(e=l(i,u,f))){if(c=19*o+i+1,m<e+59)return void(m<e+30?(r=1,a=m-e+1):(r=2,a=m-e-29));f+=765433*Et[i],u+=Math.floor(f/25920),h=l((i+1)%19,u,f%=25920)}else{if(c=19*o+i,m>=e-177)return void(m>e-30?(r=13,a=m-e+30):m>e-60?(r=12,a=m-e+60):m>e-89?(r=11,a=m-e+89):m>e-119?(r=10,a=m-e+119):m>e-148?(r=9,a=m-e+148):(r=8,a=m-e+178));if(13==Et[(c-1)%19]){if(r=7,(a=m-e+207)>0)return;if(r--,(a+=30)>0)return;r--,a+=30}else{if(r=6,(a=m-e+207)>0)return;r--,a+=30}if(a>0)return;if(r--,(a+=29)>0)return;h=e,s(u-365),e=l(i,u,f)}if(u=m-e-29,355==(n=h-e)||385==n){if(u<=30)return r=2,void(a=u);u-=30}else{if(u<=29)return r=2,void(a=u);u-=29}r=3,a=u}(function(t,n,e){var r,a=0,c=0;return a=t<0?t+4801:t+4800,n>2?c=n-3:(c=n+9,a--),r=Math.floor(146097*Math.floor(a/100)/4),r+=Math.floor(a%100*1461/4),r+=Math.floor((153*c+2)/5),r+=e-32045}(h,n,e)),{year:c,month:r,date:a,month_name:It[r-1]}}function Tt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function jt(t,n,e){var r=t.slice();return r[14]=n[e],r[16]=e,r}function kt(t){var n,e,r=new ht({props:{initialDate:"".concat(t[0].hd," ").concat(t[0].hm," ").concat(t[0].hy),convertedDate:"".concat(t[0].gd," ").concat(t[2][t[0].gm-1]," ").concat(t[0].gy),events:t[0].events}});return{c:function(){n=o("div"),R(r.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);T(r.$$.fragment,e),e.forEach(h),this.h()},h:function(){m(n,"class","info")},m:function(t,a){v(t,n,a),j(r,n,null),e=!0},p:function(t,n){var e={};1&n&&(e.initialDate="".concat(t[0].hd," ").concat(t[0].hm," ").concat(t[0].hy)),1&n&&(e.convertedDate="".concat(t[0].gd," ").concat(t[2][t[0].gm-1]," ").concat(t[0].gy)),1&n&&(e.events=t[0].events),r.$set(e)},i:function(t){e||(k(r.$$.fragment,t),e=!0)},o:function(t){O(r.$$.fragment,t),e=!1},d:function(t){t&&h(n),V(r)}}}function Ot(t){var n,e,r=t[14]+"";return{c:function(){n=o("option"),e=u(r),this.h()},l:function(t){n=f(t,"OPTION",{value:!0});var a=s(n);e=l(a,r),a.forEach(h),this.h()},h:function(){n.__value=t[14],n.value=n.__value},m:function(t,r){v(t,n,r),i(n,e)},p:b,d:function(t){t&&h(n)}}}function Vt(t){var n,e,r=t[14]+"";return{c:function(){n=o("option"),e=u(r),this.h()},l:function(t){n=f(t,"OPTION",{selected:!0,value:!0});var a=s(n);e=l(a,r),a.forEach(h),this.h()},h:function(){n.selected="selected",n.__value=t[14],n.value=n.__value},m:function(t,r){v(t,n,r),i(n,e)},p:b,d:function(t){t&&h(n)}}}function zt(t){var n;function e(t,n){return t[14]===t[0].hm?Vt:Ot}var r=e(t),a=r(t);return{c:function(){a.c(),n=p()},l:function(t){a.l(t),n=p()},m:function(t,e){a.m(t,e),v(t,n,e)},p:function(t,c){r===(r=e(t))&&a?a.p(t,c):(a.d(1),(a=r(t))&&(a.c(),a.m(n.parentNode,n)))},d:function(t){a.d(t),t&&h(n)}}}function St(t){for(var n,e=t[3],r=[],a=0;a<e.length;a+=1)r[a]=zt(jt(t,e,a));return{c:function(){for(var t=0;t<r.length;t+=1)r[t].c();n=p()},l:function(t){for(var e=0;e<r.length;e+=1)r[e].l(t);n=p()},m:function(t,e){for(var a=0;a<r.length;a+=1)r[a].m(t,e);v(t,n,e)},p:function(t,a){if(9&a){var c;for(e=t[3],c=0;c<e.length;c+=1){var o=jt(t,e,c);r[c]?r[c].p(o,a):(r[c]=zt(o),r[c].c(),r[c].m(n.parentNode,n))}for(;c<r.length;c+=1)r[c].d(1);r.length=e.length}},d:function(t){x(r,t),t&&h(n)}}}function _t(t){var n,e=t[1]("toHebrew")+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){2&r&&e!==(e=t[1]("toHebrew")+"")&&d(n,e)},d:function(t){t&&h(n)}}}function Ct(t){var n,e,r,a,c,u,l,d,p,b,x,w=Object.values(t[0]).length,D=w&&kt(t),I=new X({props:{name:"hd",label:t[1]("day"),size:"2",maxlength:"2",pattern:"\\d*",value:t[0].hd}}),E=new tt({props:{name:"hm",label:t[1]("month"),$$slots:{default:[St]},$$scope:{ctx:t}}}),P=new X({props:{name:"hy",label:t[1]("year"),size:"4",maxlength:"4",pattern:"\\d*",value:t[0].hy}}),M=new nt({props:{type:"submit",$$slots:{default:[_t]},$$scope:{ctx:t}}});return{c:function(){D&&D.c(),n=$(),e=o("form"),r=o("div"),R(I.$$.fragment),a=$(),c=o("div"),R(E.$$.fragment),u=$(),l=o("div"),R(P.$$.fragment),d=$(),p=o("div"),R(M.$$.fragment),this.h()},l:function(t){D&&D.l(t),n=g(t),e=f(t,"FORM",{});var o=s(e);r=f(o,"DIV",{class:!0});var i=s(r);T(I.$$.fragment,i),i.forEach(h),a=g(o),c=f(o,"DIV",{class:!0});var m=s(c);T(E.$$.fragment,m),m.forEach(h),u=g(o),l=f(o,"DIV",{class:!0});var v=s(l);T(P.$$.fragment,v),v.forEach(h),d=g(o),p=f(o,"DIV",{class:!0});var $=s(p);T(M.$$.fragment,$),$.forEach(h),o.forEach(h),this.h()},h:function(){m(r,"class","field svelte-8b9eaa"),m(c,"class","field svelte-8b9eaa"),m(l,"class","field svelte-8b9eaa"),m(p,"class","button svelte-8b9eaa")},m:function(o,f,s){D&&D.m(o,f),v(o,n,f),v(o,e,f),i(e,r),j(I,r,null),i(e,a),i(e,c),j(E,c,null),i(e,u),i(e,l),j(P,l,null),i(e,d),i(e,p),j(M,p,null),b=!0,s&&x(),x=z(e,"submit",S(t[4]))},p:function(t,e){var r=y(e,1)[0];1&r&&(w=Object.values(t[0]).length),w?D?(D.p(t,r),k(D,1)):((D=kt(t)).c(),k(D,1),D.m(n.parentNode,n)):D&&(_(),O(D,1,1,(function(){D=null})),C());var a={};2&r&&(a.label=t[1]("day")),1&r&&(a.value=t[0].hd),I.$set(a);var c={};2&r&&(c.label=t[1]("month")),131073&r&&(c.$$scope={dirty:r,ctx:t}),E.$set(c);var o={};2&r&&(o.label=t[1]("year")),1&r&&(o.value=t[0].hy),P.$set(o);var i={};131074&r&&(i.$$scope={dirty:r,ctx:t}),M.$set(i)},i:function(t){b||(k(D),k(I.$$.fragment,t),k(E.$$.fragment,t),k(P.$$.fragment,t),k(M.$$.fragment,t),b=!0)},o:function(t){O(D),O(I.$$.fragment,t),O(E.$$.fragment,t),O(P.$$.fragment,t),O(M.$$.fragment,t),b=!1},d:function(t){D&&D.d(t),t&&h(n),t&&h(e),V(I),V(E),V(P),V(M),x()}}}function Pt(t,n,e){var r;w(t,D,(function(t){return e(1,r=t)}));var a=[r("months.january"),r("months.february"),r("months.march"),r("months.april"),r("months.may"),r("months.june"),r("months.july"),r("months.august"),r("months.september"),r("months.october"),r("months.november"),r("months.december")],c=new Date,o=(c.getMonth(),c.getDate()),i=c.getMonth()+1,u=c.getFullYear(),f={},s=Rt(u,i,o),l=s.year,h=s.month_name,m=s.date;function v(t,n,e){return d.apply(this,arguments)}function d(){return(d=M(N.mark((function t(n,r,a){var c,o;return N.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://www.hebcal.com/converter/?cfg=json&hy=".concat(n,"&hm=").concat(r,"&hd=").concat(a,"&h2g=1"),t.next=3,fetch(c);case 3:return o=t.sent,t.t0=e,t.next=7,o.json();case 7:t.t1=f=t.sent,(0,t.t0)(0,t.t1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return P((function(){v(l,h,m)})),[f,r,a,["Nisan","Iyyar","Sivan","Tamuz","Av","Elul","Tishrei","Cheshvan","Kislev","Tevet","Sh'vat","Adar","Adar I","Adar II"],function(t){v(t.target.hy.value,t.target.hm.value,t.target.hd.value)}]}var Mt=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(Tt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-8b9eaa-style")||((u=o("style")).id="svelte-8b9eaa-style",u.textContent=".field.svelte-8b9eaa{margin-top:1.875rem;margin-bottom:1.875rem}@media(min-width: 650px){.field.svelte-8b9eaa{width:6.875rem;float:left}.field.svelte-8b9eaa:nth-child(2){width:11.25rem;margin-left:1.875rem;margin-right:1.875rem}}.button.svelte-8b9eaa{margin-bottom:1.25rem}@media(min-width: 650px){.button.svelte-8b9eaa{width:20rem}}",i(document.head,u)),e(a(c),t,Pt,Ct,r,{}),c}return l}();function Nt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Bt(t){var n,e,r=t[5].default,a=A(r,t,t[4],null);return{c:function(){n=o("div"),a&&a.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);a&&a.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","tabs svelte-22sao8")},m:function(t,r){v(t,n,r),a&&a.m(n,null),e=!0},p:function(t,n){var e=y(n,1)[0];a&&a.p&&16&e&&a.p(q(r,t,t[4],null),H(r,t[4],e,null))},i:function(t){e||(k(a,t),e=!0)},o:function(t){O(a,t),e=!1},d:function(t){t&&h(n),a&&a.d(t)}}}var At={};function qt(t,n,e){var r=[],a=[],c=L(null),o=L(null);F(At,{registerTab:function(t){r.push(t),c.update((function(n){return n||t})),G((function(){var n=r.indexOf(t);r.splice(n,1),c.update((function(e){return e===t?r[n]||r[r.length-1]:e}))}))},registerPanel:function(t){a.push(t),o.update((function(n){return n||t})),G((function(){var n=a.indexOf(t);a.splice(n,1),o.update((function(e){return e===t?a[n]||a[a.length-1]:e}))}))},selectTab:function(t){var n=r.indexOf(t);c.set(t),o.set(a[n])},selectedTab:c,selectedPanel:o});var i=n.$$slots,u=void 0===i?{}:i,f=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(4,f=t.$$scope)},[r,a,c,o,f,u]}var Ht=function(o){t(f,c);var i,u=(i=f,function(){var t,n=I(i);if(Nt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function f(t){var c;return n(this,f),c=u.call(this),e(a(c),t,qt,Bt,r,{}),c}return f}();function Ft(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Gt(t){var n,e,r=t[5].default,a=A(r,t,t[4],null);return{c:function(){n=o("div"),a&&a.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);a&&a.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","tabs svelte-1l1abvu")},m:function(t,r){v(t,n,r),a&&a.m(n,null),e=!0},p:function(t,n){var e=y(n,1)[0];a&&a.p&&16&e&&a.p(q(r,t,t[4],null),H(r,t[4],e,null))},i:function(t){e||(k(a,t),e=!0)},o:function(t){O(a,t),e=!1},d:function(t){t&&h(n),a&&a.d(t)}}}var Lt={};function Yt(t,n,e){var r=[],a=[],c=L(null),o=L(null);F(Lt,{registerTab:function(t){r.push(t),c.update((function(n){return n||t})),G((function(){var n=r.indexOf(t);r.splice(n,1),c.update((function(e){return e===t?r[n]||r[r.length-1]:e}))}))},registerPanel:function(t){a.push(t),o.update((function(n){return n||t})),G((function(){var n=a.indexOf(t);a.splice(n,1),o.update((function(e){return e===t?a[n]||a[a.length-1]:e}))}))},selectTab:function(t){var n=r.indexOf(t);c.set(t),o.set(a[n])},selectedTab:c,selectedPanel:o});var i=n.$$slots,u=void 0===i?{}:i,f=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(4,f=t.$$scope)},[r,a,c,o,f,u]}var Kt=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(Ft()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-1l1abvu-style")||((u=o("style")).id="svelte-1l1abvu-style",u.textContent=".tabs.svelte-1l1abvu{display:flex;justify-content:space-around}@media(min-width: 650px){.tabs.svelte-1l1abvu{display:block}}",i(document.head,u)),e(a(c),t,Yt,Gt,r,{}),c}return l}();function Ut(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Jt(t){var n,e,r=t[5].default,a=A(r,t,t[4],null);return{c:function(){n=o("div"),a&&a.c(),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var e=s(n);a&&a.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","panel svelte-1yzrkz3")},m:function(t,r){v(t,n,r),a&&a.m(n,null),e=!0},p:function(t,n){a&&a.p&&16&n&&a.p(q(r,t,t[4],null),H(r,t[4],n,null))},i:function(t){e||(k(a,t),e=!0)},o:function(t){O(a,t),e=!1},d:function(t){t&&h(n),a&&a.d(t)}}}function Wt(t){var n,e,r=t[0]===t[1]&&Jt(t);return{c:function(){r&&r.c(),n=p()},l:function(t){r&&r.l(t),n=p()},m:function(t,a){r&&r.m(t,a),v(t,n,a),e=!0},p:function(t,e){var a=y(e,1)[0];t[0]===t[1]?r?(r.p(t,a),k(r,1)):((r=Jt(t)).c(),k(r,1),r.m(n.parentNode,n)):r&&(_(),O(r,1,1,(function(){r=null})),C())},i:function(t){e||(k(r),e=!0)},o:function(t){O(r),e=!1},d:function(t){r&&r.d(t),t&&h(n)}}}function Zt(t,n,e){var r,a={},c=Y(At),o=c.registerPanel,i=c.selectedPanel;w(t,i,(function(t){return e(0,r=t)})),o(a);var u=n.$$slots,f=void 0===u?{}:u,s=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(4,s=t.$$scope)},[r,a,i,o,s,f]}var Qt=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(Ut()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-1yzrkz3-style")||((u=o("style")).id="svelte-1yzrkz3-style",u.textContent=".panel.svelte-1yzrkz3{position:relative;margin-top:-1px;background:#fff;padding:1.25rem;outline:0;box-shadow:0px 1px 3px 0 #ccc}",i(document.head,u)),e(a(c),t,Zt,Wt,r,{}),c}return l}();function Xt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function tn(t){var n,e,r,a=t[6].default,c=A(a,t,t[5],null);return{c:function(){n=o("button"),c&&c.c(),this.h()},l:function(t){n=f(t,"BUTTON",{class:!0});var e=s(n);c&&c.l(e),e.forEach(h),this.h()},h:function(){m(n,"class","svelte-qwk4vl"),K(n,"selected",t[0]===t[1])},m:function(a,o,i){v(a,n,o),c&&c.m(n,null),e=!0,i&&r(),r=z(n,"click",t[7])},p:function(t,e){var r=y(e,1)[0];c&&c.p&&32&r&&c.p(q(a,t,t[5],null),H(a,t[5],r,null)),3&r&&K(n,"selected",t[0]===t[1])},i:function(t){e||(k(c,t),e=!0)},o:function(t){O(c,t),e=!1},d:function(t){t&&h(n),c&&c.d(t),r()}}}function nn(t,n,e){var r,a={},c=Y(At),o=c.registerTab,i=c.selectTab,u=c.selectedTab;w(t,u,(function(t){return e(0,r=t)})),o(a);var f=n.$$slots,s=void 0===f?{}:f,l=n.$$scope;return t.$set=function(t){"$$scope"in t&&e(5,l=t.$$scope)},[r,a,i,u,o,l,s,function(){return i(a)}]}var en=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(Xt()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-qwk4vl-style")||((u=o("style")).id="svelte-qwk4vl-style",u.textContent="button.svelte-qwk4vl{background:none;border:none;border-radius:0;margin:0;line-height:1;color:#999;font-weight:bold;font-size:0.875rem;text-align:center;outline:0;cursor:pointer;background:#f2f2f2;padding-top:0.875rem;padding-bottom:0.75rem;width:100%;box-shadow:none;z-index:5;margin-left:-3px}@media(min-width: 650px){button.svelte-qwk4vl{width:12.5rem;padding-top:1.5625rem;padding-bottom:1.25rem}}.selected.svelte-qwk4vl{position:relative;color:#EA5A0B;background:#fff;box-shadow:0 0 20px 0 #eee;box-shadow:0px 1px 3px 0 #ccc;z-index:10;margin-left:0}.selected.svelte-qwk4vl:after{position:absolute;bottom:-15px;left:0;content:'';width:100%;height:18px;background:#fff}",i(document.head,u)),e(a(c),t,nn,tn,r,{}),c}return l}();function rn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function an(t){var n,e=t[0]("nav.jewishCalendar")+"";return{c:function(){n=u(e)},l:function(t){n=l(t,e)},m:function(t,e){v(t,n,e)},p:function(t,r){1&r&&e!==(e=t[0]("nav.jewishCalendar")+"")&&d(n,e)},d:function(t){t&&h(n)}}}function cn(t){var n,e,r,a=t[0]("page.calendar.gregorian")+"",c=t[0]("page.calendar.hebrew")+"";return{c:function(){n=u(a),e=u(" / "),r=u(c)},l:function(t){n=l(t,a),e=l(t," / "),r=l(t,c)},m:function(t,a){v(t,n,a),v(t,e,a),v(t,r,a)},p:function(t,e){1&e&&a!==(a=t[0]("page.calendar.gregorian")+"")&&d(n,a),1&e&&c!==(c=t[0]("page.calendar.hebrew")+"")&&d(r,c)},d:function(t){t&&h(n),t&&h(e),t&&h(r)}}}function on(t){var n,e,r,a=t[0]("page.calendar.hebrew")+"",c=t[0]("page.calendar.gregorian")+"";return{c:function(){n=u(a),e=u(" / "),r=u(c)},l:function(t){n=l(t,a),e=l(t," / "),r=l(t,c)},m:function(t,a){v(t,n,a),v(t,e,a),v(t,r,a)},p:function(t,e){1&e&&a!==(a=t[0]("page.calendar.hebrew")+"")&&d(n,a),1&e&&c!==(c=t[0]("page.calendar.gregorian")+"")&&d(r,c)},d:function(t){t&&h(n),t&&h(e),t&&h(r)}}}function un(t){var n,e,r=new en({props:{$$slots:{default:[cn]},$$scope:{ctx:t}}}),a=new en({props:{$$slots:{default:[on]},$$scope:{ctx:t}}});return{c:function(){R(r.$$.fragment),n=$(),R(a.$$.fragment)},l:function(t){T(r.$$.fragment,t),n=g(t),T(a.$$.fragment,t)},m:function(t,c){j(r,t,c),v(t,n,c),j(a,t,c),e=!0},p:function(t,n){var e={};5&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e);var c={};5&n&&(c.$$scope={dirty:n,ctx:t}),a.$set(c)},i:function(t){e||(k(r.$$.fragment,t),k(a.$$.fragment,t),e=!0)},o:function(t){O(r.$$.fragment,t),O(a.$$.fragment,t),e=!1},d:function(t){V(r,t),t&&h(n),V(a,t)}}}function fn(t){var n,e,r,a,c=t[0]("page.calendar.gregorianToHebrew")+"",p=new Dt({});return{c:function(){n=o("div"),e=u(c),r=$(),R(p.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=s(n);e=l(a,c),a.forEach(h),r=g(t),T(p.$$.fragment,t),this.h()},h:function(){m(n,"class","headline svelte-135g7bo")},m:function(t,c){v(t,n,c),i(n,e),v(t,r,c),j(p,t,c),a=!0},p:function(t,n){(!a||1&n)&&c!==(c=t[0]("page.calendar.gregorianToHebrew")+"")&&d(e,c)},i:function(t){a||(k(p.$$.fragment,t),a=!0)},o:function(t){O(p.$$.fragment,t),a=!1},d:function(t){t&&h(n),t&&h(r),V(p,t)}}}function sn(t){var n,e,r,a,c=t[0]("page.calendar.hebrewToGregorian")+"",p=new Mt({});return{c:function(){n=o("div"),e=u(c),r=$(),R(p.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=s(n);e=l(a,c),a.forEach(h),r=g(t),T(p.$$.fragment,t),this.h()},h:function(){m(n,"class","headline svelte-135g7bo")},m:function(t,c){v(t,n,c),i(n,e),v(t,r,c),j(p,t,c),a=!0},p:function(t,n){(!a||1&n)&&c!==(c=t[0]("page.calendar.hebrewToGregorian")+"")&&d(e,c)},i:function(t){a||(k(p.$$.fragment,t),a=!0)},o:function(t){O(p.$$.fragment,t),a=!1},d:function(t){t&&h(n),t&&h(r),V(p,t)}}}function ln(t){var n,e,r,a=new Kt({props:{$$slots:{default:[un]},$$scope:{ctx:t}}}),c=new Qt({props:{$$slots:{default:[fn]},$$scope:{ctx:t}}}),o=new Qt({props:{$$slots:{default:[sn]},$$scope:{ctx:t}}});return{c:function(){R(a.$$.fragment),n=$(),R(c.$$.fragment),e=$(),R(o.$$.fragment)},l:function(t){T(a.$$.fragment,t),n=g(t),T(c.$$.fragment,t),e=g(t),T(o.$$.fragment,t)},m:function(t,i){j(a,t,i),v(t,n,i),j(c,t,i),v(t,e,i),j(o,t,i),r=!0},p:function(t,n){var e={};5&n&&(e.$$scope={dirty:n,ctx:t}),a.$set(e);var r={};5&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r);var i={};5&n&&(i.$$scope={dirty:n,ctx:t}),o.$set(i)},i:function(t){r||(k(a.$$.fragment,t),k(c.$$.fragment,t),k(o.$$.fragment,t),r=!0)},o:function(t){O(a.$$.fragment,t),O(c.$$.fragment,t),O(o.$$.fragment,t),r=!1},d:function(t){V(a,t),t&&h(n),V(c,t),t&&h(e),V(o,t)}}}function hn(t){var n,e,r,a,c=new Z({props:{orangeLine:!0,semiBold:!0,thirtysix:!0,$$slots:{default:[an]},$$scope:{ctx:t}}}),i=new Ht({props:{$$slots:{default:[ln]},$$scope:{ctx:t}}});return{c:function(){n=o("div"),R(c.$$.fragment),e=$(),r=o("div"),R(i.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var a=s(n);T(c.$$.fragment,a),a.forEach(h),e=g(t),r=f(t,"DIV",{class:!0});var o=s(r);T(i.$$.fragment,o),o.forEach(h),this.h()},h:function(){m(n,"class","h1 svelte-135g7bo"),m(r,"class","tabs svelte-135g7bo")},m:function(t,o){v(t,n,o),j(c,n,null),v(t,e,o),v(t,r,o),j(i,r,null),a=!0},p:function(t,n){var e={};5&n&&(e.$$scope={dirty:n,ctx:t}),c.$set(e);var r={};5&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i:function(t){a||(k(c.$$.fragment,t),k(i.$$.fragment,t),a=!0)},o:function(t){O(c.$$.fragment,t),O(i.$$.fragment,t),a=!1},d:function(t){t&&h(n),V(c),t&&h(e),t&&h(r),V(i)}}}function mn(t){var n,e,r,a,c,p,y,b=t[0]("page.calendar.year")+"",x=new Q({props:{src:"calendar_preview"}}),w=new et({props:{items:[{content:t[0]("page.calendar.showCalendar")}]}});return{c:function(){n=o("div"),e=u(b),r=$(),a=o("a"),c=o("div"),R(x.$$.fragment),p=$(),R(w.$$.fragment),this.h()},l:function(t){n=f(t,"DIV",{class:!0});var o=s(n);e=l(o,b),o.forEach(h),r=g(t),a=f(t,"A",{href:!0,target:!0});var i=s(a);c=f(i,"DIV",{class:!0});var u=s(c);T(x.$$.fragment,u),u.forEach(h),p=g(i),T(w.$$.fragment,i),i.forEach(h),this.h()},h:function(){m(n,"class","headline svelte-135g7bo"),m(c,"class","img svelte-135g7bo"),m(a,"href","./ICZ.pdf"),m(a,"target","_blank")},m:function(t,o){v(t,n,o),i(n,e),v(t,r,o),v(t,a,o),i(a,c),j(x,c,null),i(a,p),j(w,a,null),y=!0},p:function(t,n){(!y||1&n)&&b!==(b=t[0]("page.calendar.year")+"")&&d(e,b);var r={};1&n&&(r.items=[{content:t[0]("page.calendar.showCalendar")}]),w.$set(r)},i:function(t){y||(k(x.$$.fragment,t),k(w.$$.fragment,t),y=!0)},o:function(t){O(x.$$.fragment,t),O(w.$$.fragment,t),y=!1},d:function(t){t&&h(n),t&&h(r),t&&h(a),V(x),V(w)}}}function vn(t){var n,e,r,a;document.title=n=t[0]("nav.jewishCalendar");var c=new W({props:{padding:t[1]>640,$$slots:{default:[hn]},$$scope:{ctx:t}}}),o=new W({props:{$$slots:{default:[mn]},$$scope:{ctx:t}}});return{c:function(){e=$(),R(c.$$.fragment),r=$(),R(o.$$.fragment)},l:function(t){U('[data-svelte="svelte-1qpes24"]',document.head).forEach(h),e=g(t),T(c.$$.fragment,t),r=g(t),T(o.$$.fragment,t)},m:function(t,n){v(t,e,n),j(c,t,n),v(t,r,n),j(o,t,n),a=!0},p:function(t,e){var r=y(e,1)[0];(!a||1&r)&&n!==(n=t[0]("nav.jewishCalendar"))&&(document.title=n);var i={};2&r&&(i.padding=t[1]>640),5&r&&(i.$$scope={dirty:r,ctx:t}),c.$set(i);var u={};5&r&&(u.$$scope={dirty:r,ctx:t}),o.$set(u)},i:function(t){a||(k(c.$$.fragment,t),k(o.$$.fragment,t),a=!0)},o:function(t){O(c.$$.fragment,t),O(o.$$.fragment,t),a=!1},d:function(t){t&&h(e),V(c,t),t&&h(r),V(o,t)}}}function dn(t,n,e){var r,a;return w(t,D,(function(t){return e(0,r=t)})),w(t,J,(function(t){return e(1,a=t)})),[r,a]}var pn=function(u){t(l,c);var f,s=(f=l,function(){var t,n=I(f);if(rn()){var e=I(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return E(this,t)});function l(t){var c,u;return n(this,l),c=s.call(this),document.getElementById("svelte-135g7bo-style")||((u=o("style")).id="svelte-135g7bo-style",u.textContent=".h1.svelte-135g7bo{padding:0 1.25rem}@media(min-width: 650px){.h1.svelte-135g7bo{padding:0}}.tabs.svelte-135g7bo{max-width:52.5rem}.headline.svelte-135g7bo{font-size:1.25rem;font-weight:bold;padding:2.5rem 0}.img.svelte-135g7bo{max-width:28.125rem;cursor:pointer}",i(document.head,u)),e(a(c),t,dn,vn,r,{}),c}return l}();export default pn;
