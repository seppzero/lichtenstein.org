function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return k()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=S(i,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(t,e,n);if("normal"===c.type){if(r=n.done?v:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=v,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function m(){}function g(){}function y(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,$=w&&w(w(O([])));$&&$!==r&&o.call($,i)&&(b=$);var x=y.prototype=m.prototype=Object.create(b);function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(e){var n;this._invoke=function(r,a){function i(){return new Promise(function(n,i){!function n(r,a,i,u){var c=f(e[r],e,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===t(l)&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):Promise.resolve(l).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,u)})}u(c.arg)}(r,a,n,i)})}return n=n?n.then(i,i):i()}}function S(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:n,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[u]=function(){return this},e.AsyncIterator=_,e.async=function(t,n,r,o){var a=new _(s(t,n,r,o));return e.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={exports:{}},n.exports),n.exports);function a(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)})}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?c(e):n}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function p(t,e,n){return(p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&f(o,n.prototype),o}).apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return(h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return p(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function v(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function y(){}function b(t,e){for(var n in e)t[n]=e[n];return t}function w(t){return t()}function $(){return Object.create(null)}function x(t){t.forEach(w)}function E(t){return"function"==typeof t}function _(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function S(t,e,n,r){return t[1]&&r?b(n.ctx.slice(),t[1](r(e))):n.ctx}function j(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function O(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function R(){return A(" ")}function N(){return A("")}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function q(t){return Array.from(t.childNodes)}function I(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var u=a.attributes[i];n[u.name]?i++:a.removeAttribute(u.name)}return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):k(e)}function T(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return A(e)}function U(t){return T(t," ")}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function F(t,e,n){t.classList[n?"add":"remove"](e)}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function H(t){r=t}function M(t,e){(function(){if(!r)throw new Error("Function called outside component initialization");return r})().$$.context.set(t,e)}var B=[],J=[],V=[],z=[],K=Promise.resolve(),Y=!1;function W(t){V.push(t)}var X=new Set;function Q(){do{for(;B.length;){var t=B.shift();H(t),Z(t.$$)}for(;J.length;)J.pop()();for(var e=0;e<V.length;e+=1){var n=V[e];X.has(n)||(X.add(n),n())}V.length=0}while(B.length);for(;z.length;)z.pop()();Y=!1,X.clear()}function Z(t){if(null!==t.fragment){t.update(),x(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}var tt,et=new Set;function nt(){tt={r:0,c:[],p:tt}}function rt(){tt.r||x(tt.c),tt=tt.p}function ot(t,e){t&&t.i&&(et.delete(t),t.i(e))}function at(t,e,n,r){if(t&&t.o){if(et.has(t))return;et.add(t),tt.c.push(function(){et.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function it(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],u=e[a];if(u){for(var c in i)c in u||(r[c]=1);for(var s in u)o[s]||(n[s]=u[s],o[s]=1);t[a]=u}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function ut(e){return"object"===t(e)&&null!==e?e:{}}function ct(t){t&&t.c()}function st(t,e){t&&t.l(e)}function ft(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,u=r.after_update;o&&o.m(e,n),W(function(){var e=a.map(w).filter(E);i?i.push.apply(i,v(e)):x(e),t.$$.on_mount=[]}),u.forEach(W)}function lt(t,e){var n=t.$$;null!==n.fragment&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(B.push(t),Y||(Y=!0,K.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(t,e,n,o,a,i){var u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=r;H(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:y,not_equal:a,bound:$(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:$(),dirty:u},l=!1;f.ctx=n?n(t,s,function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(f.bound[e]&&f.bound[e](r),l&&pt(t,e)),n}):[],f.update(),l=!0,x(f.before_update),f.fragment=!!o&&o(f.ctx),e.target&&(e.hydrate?f.fragment&&f.fragment.l(q(e.target)):f.fragment&&f.fragment.c(),e.intro&&ot(t.$$.fragment),ft(t,e.target,e.anchor),Q()),H(c)}var vt=function(){function t(){d(this,t)}return g(t,[{key:"$destroy",value:function(){lt(this,1),this.$destroy=y}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),dt=[];function mt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=[];function o(n){if(_(t,n)&&(t=n,e)){for(var o=!dt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),dt.push(i,t)}if(o){for(var u=0;u<dt.length;u+=2)dt[u][0](dt[u+1]);dt.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a){var i=[a,arguments.length>1&&void 0!==arguments[1]?arguments[1]:y];return r.push(i),1===r.length&&(e=n(o)||y),a(t),function(){var t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}}}var gt={},yt=function(){return{}};function bt(t){var n,r,o,a,i,u,c,s,f,l,p,h,v,d,m,g,b;return{c:function(){n=k("nav"),r=k("ul"),o=k("li"),a=k("a"),i=A("home"),u=R(),c=k("li"),s=k("a"),f=A("about"),l=R(),p=k("li"),h=k("a"),v=A("mail"),d=R(),m=k("li"),g=k("a"),b=A("blog"),this.h()},l:function(t){var e=q(n=I(t,"NAV",{class:!0})),y=q(r=I(e,"UL",{class:!0})),w=q(o=I(y,"LI",{class:!0})),$=q(a=I(w,"A",{href:!0,class:!0}));i=T($,"home"),$.forEach(P),w.forEach(P),u=U(y);var x=q(c=I(y,"LI",{class:!0})),E=q(s=I(x,"A",{href:!0,class:!0}));f=T(E,"about"),E.forEach(P),x.forEach(P),l=U(y);var _=q(p=I(y,"LI",{class:!0})),S=q(h=I(_,"A",{href:!0,class:!0}));v=T(S,"mail"),S.forEach(P),_.forEach(P),d=U(y);var j=q(m=I(y,"LI",{class:!0})),L=q(g=I(j,"A",{rel:!0,href:!0,class:!0}));b=T(L,"blog"),L.forEach(P),j.forEach(P),y.forEach(P),e.forEach(P),this.h()},h:function(){C(a,"href","."),C(a,"class","svelte-12ljb1u"),F(a,"selected",void 0===t[0]),C(o,"class","svelte-12ljb1u"),C(s,"href","about"),C(s,"class","svelte-12ljb1u"),F(s,"selected","about"===t[0]),C(c,"class","svelte-12ljb1u"),C(h,"href","mail"),C(h,"class","svelte-12ljb1u"),F(h,"selected","mail"===t[0]),C(p,"class","svelte-12ljb1u"),C(g,"rel","prefetch"),C(g,"href","blog"),C(g,"class","svelte-12ljb1u"),F(g,"selected","blog"===t[0]),C(m,"class","svelte-12ljb1u"),C(r,"class","svelte-12ljb1u"),C(n,"class","svelte-12ljb1u")},m:function(t,e){L(t,n,e),j(n,r),j(r,o),j(o,a),j(a,i),j(r,u),j(r,c),j(c,s),j(s,f),j(r,l),j(r,p),j(p,h),j(h,v),j(r,d),j(r,m),j(m,g),j(g,b)},p:function(t,n){var r=e(n,1)[0];1&r&&F(a,"selected",void 0===t[0]),1&r&&F(s,"selected","about"===t[0]),1&r&&F(h,"selected","mail"===t[0]),1&r&&F(g,"selected","blog"===t[0])},i:y,o:y,d:function(t){t&&P(n)}}}function wt(t,e,n){var r=e.segment;return t.$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var $t=function(t){function e(t){var n;return d(this,e),ht(c(n=s(this,u(e).call(this))),t,wt,bt,_,{segment:0}),n}return l(e,vt),e}();function xt(n){var r,o,a,i=new $t({props:{segment:n[0]}}),u=n[2].default,c=function(t,e,n,r){if(t){var o=S(t,e,n,r);return t[0](o)}}(u,n,n[1],null);return{c:function(){ct(i.$$.fragment),r=R(),o=k("main"),c&&c.c()},l:function(t){st(i.$$.fragment,t),r=U(t);var e=q(o=I(t,"MAIN",{}));c&&c.l(e),e.forEach(P)},m:function(t,e){ft(i,t,e),L(t,r,e),L(t,o,e),c&&c.m(o,null),a=!0},p:function(n,r){var o=e(r,1)[0],a={};1&o&&(a.segment=n[0]),i.$set(a),c&&c.p&&2&o&&c.p(S(u,n,n[1],null),function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if("object"===t(n.dirty)){for(var i=[],u=Math.max(n.dirty.length,a.length),c=0;c<u;c+=1)i[c]=n.dirty[c]|a[c];return i}return n.dirty|a}return n.dirty}(u,n[1],o,null))},i:function(t){a||(ot(i.$$.fragment,t),ot(c,t),a=!0)},o:function(t){at(i.$$.fragment,t),at(c,t),a=!1},d:function(t){lt(i,t),t&&P(r),t&&P(o),c&&c.d(t)}}}function Et(t,e,n){var r=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,i=t.$$scope)},[r,i,a]}var _t=function(t){function e(t){var n;return d(this,e),ht(c(n=s(this,u(e).call(this))),t,Et,xt,_,{segment:0}),n}return l(e,vt),e}();function St(t){var e,n,r=t[1].stack+"";return{c:function(){e=k("pre"),n=A(r)},l:function(t){var o=q(e=I(t,"PRE",{}));n=T(o,r),o.forEach(P)},m:function(t,r){L(t,e,r),j(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d:function(t){t&&P(e)}}}function jt(t){var n,r,o,a,i,u,c,s,f,l=t[1].message+"";document.title=n=t[0];var p=t[2]&&t[1].stack&&St(t);return{c:function(){r=R(),o=k("h1"),a=A(t[0]),i=R(),u=k("p"),c=A(l),s=R(),p&&p.c(),f=N(),this.h()},l:function(e){G('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(P),r=U(e);var n=q(o=I(e,"H1",{class:!0}));a=T(n,t[0]),n.forEach(P),i=U(e);var h=q(u=I(e,"P",{class:!0}));c=T(h,l),h.forEach(P),s=U(e),p&&p.l(e),f=N(),this.h()},h:function(){C(o,"class","svelte-1hjjbzs"),C(u,"class","svelte-1hjjbzs")},m:function(t,e){L(t,r,e),L(t,o,e),j(o,a),L(t,i,e),L(t,u,e),j(u,c),L(t,s,e),p&&p.m(t,e),L(t,f,e)},p:function(t,r){var o=e(r,1)[0];1&o&&n!==(n=t[0])&&(document.title=n),1&o&&D(a,t[0]),2&o&&l!==(l=t[1].message+"")&&D(c,l),t[2]&&t[1].stack?p?p.p(t,o):((p=St(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:y,o:y,d:function(t){t&&P(r),t&&P(o),t&&P(i),t&&P(u),t&&P(s),p&&p.d(t),t&&P(f)}}}function Lt(t,e,n){var r=e.status,o=e.error;return t.$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}var Pt=function(t){function e(t){var n;return d(this,e),ht(c(n=s(this,u(e).call(this))),t,Lt,jt,_,{status:0,error:1}),n}return l(e,vt),e}();function Ot(t){var e,n,r=[t[4].props],o=t[4].component;function a(t){for(var e={},n=0;n<r.length;n+=1)e=b(e,r[n]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&ct(i.$$.fragment),e=N()},l:function(t){i&&st(i.$$.fragment,t),e=N()},m:function(t,r){i&&ft(i,t,r),L(t,e,r),n=!0},p:function(t,n){var u=16&n?it(r,[ut(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){nt();var c=i;at(c.$$.fragment,1,0,function(){lt(c,1)}),rt()}o?(ct((i=new o(a())).$$.fragment),ot(i.$$.fragment,1),ft(i,e.parentNode,e)):i=null}else o&&i.$set(u)},i:function(t){n||(i&&ot(i.$$.fragment,t),n=!0)},o:function(t){i&&at(i.$$.fragment,t),n=!1},d:function(t){t&&P(e),i&&lt(i,t)}}}function kt(t){var e,n=new Pt({props:{error:t[0],status:t[1]}});return{c:function(){ct(n.$$.fragment)},l:function(t){st(n.$$.fragment,t)},m:function(t,r){ft(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i:function(t){e||(ot(n.$$.fragment,t),e=!0)},o:function(t){at(n.$$.fragment,t),e=!1},d:function(t){lt(n,t)}}}function At(t){var e,n,r,o,a=[kt,Ot],i=[];function u(t,e){return t[0]?0:1}return e=u(t),n=i[e]=a[e](t),{c:function(){n.c(),r=N()},l:function(t){n.l(t),r=N()},m:function(t,n){i[e].m(t,n),L(t,r,n),o=!0},p:function(t,o){var c=e;(e=u(t))===c?i[e].p(t,o):(nt(),at(i[c],1,1,function(){i[c]=null}),rt(),(n=i[e])||(n=i[e]=a[e](t)).c(),ot(n,1),n.m(r.parentNode,r))},i:function(t){o||(ot(n),o=!0)},o:function(t){at(n),o=!1},d:function(t){i[e].d(t),t&&P(r)}}}function Rt(t){for(var n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[At]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=b(o,r[a]);var i=new _t({props:o});return{c:function(){ct(i.$$.fragment)},l:function(t){st(i.$$.fragment,t)},m:function(t,e){ft(i,t,e),n=!0},p:function(t,n){var o=e(n,1)[0],a=12&o?it(r,[4&o&&{segment:t[2][0]},8&o&&ut(t[3].props)]):{};83&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){n||(ot(i.$$.fragment,t),n=!0)},o:function(t){at(i.$$.fragment,t),n=!1},d:function(t){lt(i,t)}}}function Nt(t,e,n){var r=e.stores,o=e.error,a=e.status,i=e.segments,u=e.level0,c=e.level1,s=void 0===c?null:c;return M(gt,r),t.$set=function(t){"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,a=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,u=t.level0),"level1"in t&&n(4,s=t.level1)},[o,a,i,u,s,r]}var Ct,qt=function(t){function e(t){var n;return d(this,e),ht(c(n=s(this,u(e).call(this))),t,Nt,Rt,_,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),n}return l(e,vt),e}(),It=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Tt=[{js:function(){return import("./index.2d3e2d3b.js")},css:["legacy/index.2d3e2d3b.css","legacy/client.b04ab242.css"]},{js:function(){return import("./about.e111abe9.js")},css:["legacy/client.b04ab242.css"]},{js:function(){return import("./index.e487f33b.js")},css:["legacy/index.e487f33b.css","legacy/client.b04ab242.css"]},{js:function(){return import("./[slug].57a67729.js")},css:["legacy/[slug].57a67729.css","legacy/client.b04ab242.css"]},{js:function(){return import("./mail.d3869391.js")},css:["legacy/client.b04ab242.css"]}],Ut=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:Ct(t[1])}}}]},{pattern:/^\/mail\/?$/,parts:[{i:4}]}]);function Dt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},n=oe(new URL(t,document.baseURI));return n?(ee[e.replaceState?"replaceState":"pushState"]({id:Qt},"",t),ie(n,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var Ft,Gt,Ht,Mt,Bt,Jt="undefined"!=typeof __SAPPER__&&__SAPPER__,Vt=!1,zt=[],Kt="{}",Yt={page:mt({}),preloading:mt(null),session:mt(Jt&&Jt.session)};Yt.session.subscribe(function(){var t=i(o.mark(function t(e){var n,r,a,i,u,c;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Mt=e,Vt){t.next=3;break}return t.abrupt("return");case 3:return Bt=!0,n=oe(new URL(location.href)),r=Gt={},t.next=8,le(n);case 8:if(a=t.sent,i=a.redirect,u=a.props,c=a.branch,r===Gt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ce(i,c,u,n.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var Wt,Xt=null;var Qt,Zt=1;var te,ee="undefined"!=typeof history?history:{pushState:function(t,e,n){},replaceState:function(t,e,n){},scrollRestoration:""},ne={};function re(n){var r=Object.create(null);return n.length>0&&n.slice(1).split("&").forEach(function(n){var o=e(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(n.replace(/\+/g," "))),3),a=o[1],i=o[2],u=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(u):r[a]=u}),r}function oe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Jt.baseUrl))return null;var e=t.pathname.slice(Jt.baseUrl.length);if(""===e&&(e="/"),!It.some(function(t){return t.test(e)}))for(var n=0;n<Ut.length;n+=1){var r=Ut[n],o=r.pattern.exec(e);if(o){var a=re(t.search),i=r.parts[r.parts.length-1],u=i.params?i.params(o):{},c={host:location.host,path:e,query:a,params:u};return{href:t.href,route:r,match:o,page:c}}}}function ae(){return{x:pageXOffset,y:pageYOffset}}function ie(t,e,n,r){return ue.apply(this,arguments)}function ue(){return(ue=i(o.mark(function t(e,n,r,a){var i,u,c,s,f,l,p,h,v;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n?Qt=n:(i=ae(),ne[Qt]=i,n=Qt=++Zt,ne[Qt]=r?i:{x:0,y:0}),Qt=n,Ft&&Yt.preloading.set(!0),u=Xt&&Xt.href===e.href?Xt.promise:le(e),Xt=null,c=Gt={},t.next=8,u;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,c===Gt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,ce(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),r||(h=ne[n],a&&(v=document.getElementById(a.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top}),ne[Qt]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function ce(t,e,n,r){return se.apply(this,arguments)}function se(){return(se=i(o.mark(function t(e,n,r,a){var i,u;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Dt(e.location,{replaceState:!0}));case 2:if(Yt.page.set(a),Yt.preloading.set(!1),!Ft){t.next=8;break}Ft.$set(r),t.next=17;break;case 8:return r.stores={page:{subscribe:Yt.page.subscribe},preloading:{subscribe:Yt.preloading.subscribe},session:Yt.session},t.next=11,Ht;case 11:if(t.t0=t.sent,r.level0={props:t.t0},i=document.querySelector("#sapper-head-start"),u=document.querySelector("#sapper-head-end"),i&&u){for(;i.nextSibling!==u;)de(i.nextSibling);de(i),de(u)}Ft=new qt({target:Wt,props:r,hydrate:!0});case 17:zt=n,Kt=JSON.stringify(a.query),Vt=!0,Bt=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function fe(t,e,n,r){if(r!==Kt)return!0;var o=zt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function le(t){return pe.apply(this,arguments)}function pe(){return(pe=i(o.mark(function t(e){var n,r,a,u,c,s,f,l,p,h,v;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.route,r=e.page,a=r.path.split("/").filter(Boolean),u=null,c={error:null,status:200,segments:[a[0]]},s={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(u&&(u.statusCode!==t||u.location!==e))throw new Error("Conflicting redirects");u={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Ht||(Ht=Jt.preloaded[0]||yt.call(s,{host:r.host,path:r.path,query:r.query,params:{}},Mt)),l=1,t.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,t.next=13,Promise.all(n.parts.map(function(){var t=i(o.mark(function t(n,i){var u,f,d,m,g,y;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=a[i],fe(i,u,h,p)&&(v=!0),c.segments[l]=a[i+1],n){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(f=l++,Bt||v||!zt[i]||zt[i].part!==n.i){t.next=8;break}return t.abrupt("return",zt[i]);case 8:return v=!1,t.next=11,ve(Tt[n.i]);case 11:if(d=t.sent,m=d.default,g=d.preload,!Vt&&Jt.preloaded[i+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(s,{host:r.host,path:r.path,query:r.query,params:n.params?n.params(e.match):{}},Mt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:y=t.t0,t.next=26;break;case 25:y=Jt.preloaded[i+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:m,props:y,segment:u,match:h,part:n.i});case 27:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,f=[];case 21:return t.abrupt("return",{redirect:u,props:c,branch:f});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function he(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,n){var r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=function(){return t()},r.onerror=n,document.head.appendChild(r)})}function ve(t){var e="string"==typeof t.css?[]:t.css.map(he);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function de(t){t.parentNode.removeChild(t)}function me(t){var e=oe(new URL(t,document.baseURI));if(e)return Xt&&t===Xt.href||function(t,e){Xt={href:t,promise:e}}(t,le(e)),Xt.promise}function ge(t){clearTimeout(te),te=setTimeout(function(){ye(t)},20)}function ye(t){var e=we(t.target);e&&"prefetch"===e.rel&&me(e.href)}function be(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var n=we(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&(r?!n.target.baseVal:!n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=oe(a);if(i)ie(i,null,n.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ee.pushState({id:Qt},"",a.href)}}}else location.hash||e.preventDefault()}}}function we(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function $e(t){if(ne[Qt]=ae(),t.state){var e=oe(new URL(location.href));e?ie(e,t.state.id):location.href=location.href}else(function(t){Qt=t})(Zt=Zt+1),ee.replaceState({id:Qt},"",location.href)}!function(t){var e;"scrollRestoration"in ee&&(ee.scrollRestoration="manual"),e=t.target,Wt=e,addEventListener("click",be),addEventListener("popstate",$e),addEventListener("touchstart",ye),addEventListener("mousemove",ge),Promise.resolve().then(function(){var t=location,e=t.hash,n=t.href;ee.replaceState({id:Zt},"",n);var r,o,a,i,u,c,s,f,l=new URL(location.href);if(Jt.error)return r=location,o=r.host,a=r.pathname,i=r.search,u=Jt.session,c=Jt.preloaded,s=Jt.status,f=Jt.error,Ht||(Ht=c&&c[0]),void ce(null,[],{error:f,status:s,session:u,level0:{props:Ht},level1:{props:{status:s,error:f},component:Pt},segments:c},{host:o,path:a,query:re(i),params:{}});var p=oe(l);return p?ie(p,Zt,!0,e):void 0})}({target:document.querySelector("#sapper")});export{vt as S,l as _,d as a,s as b,u as c,c as d,R as e,k as f,P as g,U as h,ht as i,I as j,q as k,T as l,C as m,L as n,j as o,y as p,G as q,D as r,_ as s,A as t,e as u,O as v,i as w,o as x};
