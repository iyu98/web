(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1d3ba528":"ea7760e0","chunk-62798c4d":"07e05170","chunk-a5a11f1e":"2b27b09d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-62798c4d":1,"chunk-a5a11f1e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1d3ba528":"31d6cfe0","chunk-62798c4d":"efaadcda","chunk-a5a11f1e":"fc135465"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"18f7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var u=Object(r["O"])("Layout");return Object(r["F"])(),Object(r["k"])(u)}var a=Object(r["hb"])("data-v-3f65cc70");Object(r["I"])("data-v-3f65cc70");var c={class:"layout-wrapper"},u={class:"root"};Object(r["G"])();var i=a((function(e,t,n,o,a,i){var s=Object(r["O"])("router-view"),f=Object(r["O"])("MenuBar");return Object(r["F"])(),Object(r["k"])("div",c,[Object(r["o"])("div",u,[Object(r["o"])(s)]),Object(r["o"])(f)])})),s=Object(r["hb"])("data-v-992f71dc");Object(r["I"])("data-v-992f71dc");var f={class:"menu-bar"},l=Object(r["n"])(" 首页 "),d=Object(r["n"])(" 通知 ");Object(r["G"])();var p=s((function(e,t,n,o,a,c){var u=Object(r["O"])("router-link");return Object(r["F"])(),Object(r["k"])("ul",f,[Object(r["o"])(u,{tag:"li",to:"/",class:"menu-item"},{default:s((function(){return[l]})),_:1}),Object(r["o"])(u,{tag:"li",to:"/feedback",class:"menu-item"},{default:s((function(){return[d]})),_:1})])})),b={name:"MenuBar"};n("c87a");b.render=p,b.__scopeId="data-v-992f71dc";var h=b,m={components:{MenuBar:h},name:"Layout"};n("88e1");m.render=i,m.__scopeId="data-v-3f65cc70";var v=m,g={name:"App",components:{Layout:v}};n("9b83");g.render=o;var O=g,j=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),y=[{path:"/",name:"Formula",component:function(){return n.e("chunk-62798c4d").then(n.bind(null,"19c1"))}},{path:"/feedback",name:"Feedback",component:function(){return n.e("chunk-a5a11f1e").then(n.bind(null,"1627"))}},{path:"/addFormula",name:"AddFormula",component:function(){return n.e("chunk-1d3ba528").then(n.bind(null,"9797"))}}],k=Object(j["a"])({history:Object(j["b"])(),routes:y}),w=k,P=n("7864"),_=(n("7dd6"),n("7371"),n("d4ec")),x=n("bee2"),E=n("ade3"),T=(n("ac1f"),n("5319"),function(){function e(){Object(_["a"])(this,e),Object(E["a"])(this,"timer",null),Object(E["a"])(this,"tipEl",null)}return Object(x["a"])(e,[{key:"trim",value:function(e){return e.replace(/\s/g,"")}},{key:"isIos",value:function(){return/iPhone/g.test(navigator.userAgent)}},{key:"tip",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3;this.timer&&(clearTimeout(this.timer),this.tipEl.remove());var n=document.createElement("div");n.innerText=e,n.style="color: #fff;background: rgba(0, 0, 0, .5);padding: 5px 10px;position: fixed; top: 60px; left: 50%;transform: translateX(-50%);border-radius: 5px;",this.tipEl=n,document.body.append(n),this.timer=setTimeout((function(){n.remove()}),t)}}]),e}()),A=new T,S=n("bc3a"),F=n.n(S);F.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),F.a.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var L=F.a,C=Object(r["j"])(O),I=A.isIos;C.config.globalProperties.$utils=A,C.config.globalProperties.$axios=L,C.config.globalProperties.$is_ios=I,C.use(P["a"]).use(w),C.mount("#app")},"61ee":function(e,t,n){},"679c":function(e,t,n){},7371:function(e,t,n){},"88e1":function(e,t,n){"use strict";n("679c")},"9b83":function(e,t,n){"use strict";n("18f7")},c87a:function(e,t,n){"use strict";n("61ee")}});
//# sourceMappingURL=app.74f38366.js.map