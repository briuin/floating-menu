(()=>{var e,r,t,n,a,o,u,i,l,f,d,s={352:(e,r,t)=>{Promise.all([t.e(600),t.e(271),t.e(90)]).then(t.bind(t,90))}},p={};function c(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return s[e](t,t.exports,c),t.exports}c.m=s,c.c=p,c.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return c.d(r,{a:r}),r},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+"."+{90:"360d76e0b4e36e5ee6c3",271:"64630a9c65228dd6b153",294:"7f416833c4773e3eafd7",600:"5747736b74964513fa6f",935:"89323b45e340218e48ef"}[e]+".js",c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="floating-menu:",c.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var u,i;if(void 0!==a)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){u=d;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var s=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{c.S={};var e={},r={};c.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];c.o(c.S,t)||(c.S[t]={});var o=c.S[t],u="floating-menu",i=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(a[r]={get:t,from:u,eager:!!n})},l=[];return"default"===t&&(i("react-dom","17.0.2",(()=>Promise.all([c.e(935),c.e(271)]).then((()=>()=>c(935))))),i("react","17.0.2",(()=>c.e(294).then((()=>()=>c(294)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),c.p="/docs",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var u=r[n],i=(typeof u)[0];if(o!=i)return"o"==o&&"n"==i||"s"==i||"u"==o;if("o"!=o&&"u"!=o&&a!=u)return a<u;n++}},a=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var u=0,i=1,l=!0;;i++,u++){var f,d,s=i<e.length?(typeof e[i])[0]:"";if(u>=r.length||"o"==(d=(typeof(f=r[u]))[0]))return!l||("u"==s?i>n&&!o:""==s!=o);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(i<=n){if(f!=e[i])return!1}else{if(o?f>e[i]:f<e[i])return!1;f!=e[i]&&(l=!1)}else if("s"!=s&&"n"!=s){if(o||i<=n)return!1;l=!1,i--}else{if(i<=n||d<s!=o)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,i--)}}var p=[],c=p.pop.bind(p);for(u=1;u<e.length;u++){var h=e[u];p.push(1==h?c()|c():2==h?c()&c():h?a(h,r):!c())}return!!c()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!a(t,r)||e&&!n(e,r)?e:r),0))&&o[r]},u=e=>(e.loaded=1,e.get()),i=(e=>function(r,t,n,a){var o=c.I(r);return o&&o.then?o.then(e.bind(e,r,c.S[r],t,n,a)):e(0,c.S[r],t,n,a)})(((e,r,t,n,a)=>{var i=r&&c.o(r,t)&&o(r,t,n);return i?u(i):a()})),l={},f={271:()=>i("default","react",[1,17,0,1],(()=>c.e(294).then((()=>()=>c(294))))),650:()=>i("default","react-dom",[1,17,0,1],(()=>c.e(935).then((()=>()=>c(935)))))},d={90:[650],271:[271]},c.f.consumes=(e,r)=>{c.o(d,e)&&d[e].forEach((e=>{if(c.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,c.m[e]=t=>{delete c.c[e],t.exports=r()}},n=r=>{delete l[e],c.m[e]=t=>{throw delete c.c[e],r}};try{var a=f[e]();a.then?r.push(l[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={179:0};c.f.j=(r,t)=>{var n=c.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(271!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=c.p+c.u(r),u=new Error;c.l(o,(t=>{if(c.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,u,i]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in u)c.o(u,n)&&(c.m[n]=u[n]);i&&i(c)}for(r&&r(t);l<o.length;l++)a=o[l],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkfloating_menu=self.webpackChunkfloating_menu||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),c(352)})();