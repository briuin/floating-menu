System.register([],(function(e,r){return{execute:function(){e((()=>{"use strict";var e,r,t,n,a,o,i,u,s,l,d,f={969:(e,r,t)=>{var n={"./FloatingMenu":()=>t.e("src_index_js").then((()=>()=>t(352)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},c={};function p(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={exports:{}};return f[e](t,t.exports,p),t.exports}return p.m=f,p.c=c,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>"lib_"+e+".js",p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="floating-menu:",p.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},r={};p.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var o=p.S[t],i="floating-menu",u=(e,r,t,n)=>{var a=o[e]=o[e]||{},u=a[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(a[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(u("react-dom","17.0.2",(()=>Promise.all([p.e("vendors-node_modules_react-dom_index_js"),p.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>p(935))))),u("react","17.0.2",(()=>p.e("node_modules_react_index_js").then((()=>()=>p(294))))),u("single-spa-react","4.6.1",(()=>p.e("node_modules_single-spa-react_lib_esm_single-spa-react_js").then((()=>()=>p(582)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),p.p="https://briuin.github.io/floating-menu/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var i=0,u=1,s=!0;;u++,i++){var l,d,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(d=(typeof(l=r[i]))[0]))return!s||("u"==f?u>n&&!o:""==f!=o);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(u<=n){if(l!=e[u])return!1}else{if(o?l>e[u]:l<e[u])return!1;l!=e[u]&&(s=!1)}else if("s"!=f&&"n"!=f){if(o||u<=n)return!1;s=!1,u--}else{if(u<=n||d<f!=o)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?a(h,r):!p())}return!!p()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},i=e=>(e.loaded=1,e.get()),u=(e=>function(r,t,n,a){var o=p.I(r);return o&&o.then?o.then(e.bind(e,r,p.S[r],t,n,a)):e(0,p.S[r],t,n,a)})(((e,r,t,n,a)=>{var u=r&&p.o(r,t)&&o(r,t,n);return u?i(u):a()})),s={},l={271:()=>u("default","react",[1,17,0,1],(()=>p.e("node_modules_react_index_js").then((()=>()=>p(294))))),650:()=>u("default","react-dom",[1,17,0,1],(()=>p.e("vendors-node_modules_react-dom_index_js").then((()=>()=>p(935))))),788:()=>u("default","single-spa-react",[1,4,6,1],(()=>p.e("node_modules_single-spa-react_lib_esm_single-spa-react_js").then((()=>()=>p(582)))))},d={webpack_sharing_consume_default_react_react:[271],src_bootstrap_js:[650,788]},p.f.consumes=(e,r)=>{p.o(d,e)&&d[e].forEach((e=>{if(p.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}},n=r=>{delete s[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var a=l[e]();a.then?r.push(s[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={floatingMenu:0};p.f.j=(r,t)=>{var n=p.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if("webpack_sharing_consume_default_react_react"!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=p.p+p.u(r),i=new Error;p.l(o,(t=>{if(p.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,i,u]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);u&&u(p)}for(r&&r(t);s<o.length;s++)a=o[s],p.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkfloating_menu=self.webpackChunkfloating_menu||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p(969)})())}}}));