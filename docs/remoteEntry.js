var floatingMenu;(()=>{var e,r,t,a,n,o,s,i,l,u,d,_={352:(e,r,t)=>{Promise.all([t.e("vendors-node_modules_material-ui_core_esm_styles_makeStyles_js-node_modules_material-ui_icons-3bb0a9"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_single-sp-05c9c9"),t.e("src_bootstrap_js")]).then(t.bind(t,128))},850:(e,r,t)=>{"use strict";var a={"./FloatingMenu":()=>Promise.all([t.e("vendors-node_modules_material-ui_core_esm_styles_makeStyles_js-node_modules_material-ui_icons-3bb0a9"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_single-sp-05c9c9"),t.e("src_components_FloatingMenu_js")]).then((()=>()=>t(19)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a="default",n=t.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>n,init:()=>o})}},c={};function f(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return _[e](t,t.exports,f),t.exports}f.m=_,f.c=c,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"lib_"+e+".js",f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="floating-menu:",f.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var s,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){s=d;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,f.nc&&s.setAttribute("nonce",f.nc),s.setAttribute("data-webpack",r+n),s.src=t),e[t]=[a];var _=(r,a)=>{s.onerror=s.onload=null,clearTimeout(c);var n=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(a))),r)return r(a)},c=setTimeout(_.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=_.bind(null,s.onerror),s.onload=_.bind(null,s.onload),i&&document.head.appendChild(s)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{f.S={};var e={},r={};f.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];f.o(f.S,t)||(f.S[t]={});var o=f.S[t],s="floating-menu",i=(e,r,t,a)=>{var n=o[e]=o[e]||{},i=n[r];(!i||!i.loaded&&(!a!=!i.eager?a:s>i.from))&&(n[r]={get:t,from:s,eager:!!a})},l=[];return"default"===t&&(i("react-dom","17.0.2",(()=>Promise.all([f.e("vendors-node_modules_react-dom_index_js"),f.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>f(935))))),i("react","17.0.2",(()=>f.e("node_modules_react_index_js").then((()=>()=>f(294))))),i("single-spa-react","4.6.1",(()=>f.e("node_modules_single-spa-react_lib_esm_single-spa-react_js").then((()=>()=>f(582)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),f.p="https://briuin.github.io/floating-menu/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var s=r[a],i=(typeof s)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&n!=s)return n<s;a++}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var s=0,i=1,l=!0;;i++,s++){var u,d,_=i<e.length?(typeof e[i])[0]:"";if(s>=r.length||"o"==(d=(typeof(u=r[s]))[0]))return!l||("u"==_?i>a&&!o:""==_!=o);if("u"==d){if(!l||"u"!=_)return!1}else if(l)if(_==d)if(i<=a){if(u!=e[i])return!1}else{if(o?u>e[i]:u<e[i])return!1;u!=e[i]&&(l=!1)}else if("s"!=_&&"n"!=_){if(o||i<=a)return!1;l=!1,i--}else{if(i<=a||d<_!=o)return!1;l=!1}else"s"!=_&&"n"!=_&&(l=!1,i--)}}var c=[],f=c.pop.bind(c);for(s=1;s<e.length;s++){var m=e[s];c.push(1==m?f()|f():2==m?f()&f():m?n(m,r):!f())}return!!f()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!n(t,r)||e&&!a(e,r)?e:r),0))&&o[r]},s=e=>(e.loaded=1,e.get()),i=(e=>function(r,t,a,n){var o=f.I(r);return o&&o.then?o.then(e.bind(e,r,f.S[r],t,a,n)):e(0,f.S[r],t,a,n)})(((e,r,t,a,n)=>{var i=r&&f.o(r,t)&&o(r,t,a);return i?s(i):n()})),l={},u={271:()=>i("default","react",[1,17,0,1],(()=>f.e("node_modules_react_index_js").then((()=>()=>f(294))))),650:()=>i("default","react-dom",[1,17,0,1],(()=>f.e("vendors-node_modules_react-dom_index_js").then((()=>()=>f(935))))),788:()=>i("default","single-spa-react",[1,4,6,1],(()=>f.e("node_modules_single-spa-react_lib_esm_single-spa-react_js").then((()=>()=>f(582)))))},d={webpack_sharing_consume_default_react_react:[271],"webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_single-sp-05c9c9":[650,788]},f.f.consumes=(e,r)=>{f.o(d,e)&&d[e].forEach((e=>{if(f.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,f.m[e]=t=>{delete f.c[e],t.exports=r()}},a=r=>{delete l[e],f.m[e]=t=>{throw delete f.c[e],r}};try{var n=u[e]();n.then?r.push(l[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={floatingMenu:0};f.f.j=(r,t)=>{var a=f.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^webpack_sharing_consume_default_react(\-dom_react\-dom\-webpack_sharing_consume_default_single\-sp\-05c9c9|_react)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=f.p+f.u(r),s=new Error;f.l(o,(t=>{if(f.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,a[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,s,i]=t,l=0;if(o.some((r=>0!==e[r]))){for(a in s)f.o(s,a)&&(f.m[a]=s[a]);i&&i(f)}for(r&&r(t);l<o.length;l++)n=o[l],f.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkfloating_menu=self.webpackChunkfloating_menu||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),f(352);var m=f(850);floatingMenu=m})();