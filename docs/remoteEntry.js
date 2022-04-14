/*! For license information please see remoteEntry.js.LICENSE.txt */
System.register([],(function(e,r){return{execute:function(){e((()=>{"use strict";var e,r,t,n,o,a,u,i,s,c,l,f={418:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var u,i,s=o(e),c=1;c<arguments.length;c++){for(var l in u=Object(arguments[c]))t.call(u,l)&&(s[l]=u[l]);if(r){i=r(u);for(var f=0;f<i.length;f++)n.call(u,i[f])&&(s[i[f]]=u[i[f]])}}return s}},408:(e,r,t)=>{var n=t(418),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var u=60109,i=60110,s=60112;r.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),u=f("react.provider"),i=f("react.context"),s=f("react.forward_ref"),r.Suspense=f("react.suspense"),c=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||_}function m(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||_}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=v.prototype=new m;g.constructor=v,n(g,h.prototype),g.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,t){var n,a={},u=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)w.call(r,n)&&!k.hasOwnProperty(n)&&(a[n]=r[n]);var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];a.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:u,ref:i,props:a,_owner:b.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function E(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function P(e,r,t,n,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return u=u(s=e),e=""===n?"."+E(s,0):n,Array.isArray(u)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),P(u,r,t,"",(function(e){return e}))):null!=u&&(S(u)&&(u=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,t+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),r.push(u)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=n+E(i=e[c],c);s+=P(i,r,t,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(i=e.next()).done;)s+=P(i=i.value,r,t,l=n+E(i,c++),u);else if("object"===i)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function C(e,r,t){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var a=n({},e.props),u=e.key,i=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,s=b.current),void 0!==r.key&&(u=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in r)w.call(r,l)&&!k.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==c?c[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){c=Array(l);for(var f=0;f<l;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:u,ref:i,props:a,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:c,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},294:(e,r,t)=>{e.exports=t(408)},850:(e,r,t)=>{var n={"./FloatingMenu":()=>Promise.all([t.e("vendors-node_modules_material-ui_core_esm_styles_makeStyles_js-node_modules_material-ui_icons-0613a1"),t.e("webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-b0f53f"),t.e("node_modules_material-ui_styles_esm_StylesProvider_StylesProvider_js-src_components_FloatingMenu_js")]).then((()=>()=>t(851)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},p={};function d(e){var r=p[e];if(void 0!==r)return r.exports;var t=p[e]={exports:{}};return f[e](t,t.exports,d),t.exports}return d.m=f,d.c=p,d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"lib_"+e+".js",d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="floating-menu:",d.l=(t,n,o,a)=>{if(e[t])e[t].push(n);else{var u,i;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var l=s[c];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==r+o){u=l;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.setAttribute("data-webpack",r+o),u.src=t),e[t]=[n];var f=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),i&&document.head.appendChild(u)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{d.S={};var e={},r={};d.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];d.o(d.S,t)||(d.S[t]={});var a=d.S[t],u="floating-menu",i=(e,r,t,n)=>{var o=a[e]=a[e]||{},i=o[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(o[r]={get:t,from:u,eager:!!n})},s=[];return"default"===t&&(i("react-dom","17.0.2",(()=>Promise.all([d.e("vendors-node_modules_react-dom_index_js"),d.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>d(935))))),i("react","17.0.2",(()=>()=>d(294)),1),i("single-spa-react","4.6.1",(()=>d.e("node_modules_single-spa-react_lib_esm_single-spa-react_js").then((()=>()=>d(582)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),d.p="",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],a=(typeof o)[0];if(n>=r.length)return"u"==a;var u=r[n],i=(typeof u)[0];if(a!=i)return"o"==a&&"n"==i||"s"==i||"u"==a;if("o"!=a&&"u"!=a&&o!=u)return o<u;n++}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var u=0,i=1,s=!0;;i++,u++){var c,l,f=i<e.length?(typeof e[i])[0]:"";if(u>=r.length||"o"==(l=(typeof(c=r[u]))[0]))return!s||("u"==f?i>n&&!a:""==f!=a);if("u"==l){if(!s||"u"!=f)return!1}else if(s)if(f==l)if(i<=n){if(c!=e[i])return!1}else{if(a?c>e[i]:c<e[i])return!1;c!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(a||i<=n)return!1;s=!1,i--}else{if(i<=n||l<f!=a)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var p=[],d=p.pop.bind(p);for(u=1;u<e.length;u++){var _=e[u];p.push(1==_?d()|d():2==_?d()&d():_?o(_,r):!d())}return!!d()},a=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},u=e=>(e.loaded=1,e.get()),i=(e=>function(r,t,n,o){var a=d.I(r);return a&&a.then?a.then(e.bind(e,r,d.S[r],t,n,o)):e(0,d.S[r],t,n,o)})(((e,r,t,n,o)=>{var i=r&&d.o(r,t)&&a(r,t,n);return i?u(i):o()})),s={},c={439:()=>i("default","react",[4,17,0,2],(()=>()=>d(294))),689:()=>i("default","react",[1,17,0,1],(()=>()=>d(294))),650:()=>i("default","react-dom",[1,17,0,1],(()=>Promise.all([d.e("vendors-node_modules_react-dom_index_js"),d.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>d(935))))),788:()=>i("default","single-spa-react",[1,4,6,1],(()=>d.e("node_modules_single-spa-react_lib_esm_single-spa-react_js").then((()=>()=>d(582))))),719:()=>i("default","react",[,[1,17,0,0],[1,16,8,0],1],(()=>()=>d(294)))},l={webpack_sharing_consume_default_react_react:[439],"webpack_sharing_consume_default_react-dom_react-dom-webpack_sharing_consume_default_react_rea-b0f53f":[689,650,788,719]},d.f.consumes=(e,r)=>{d.o(l,e)&&l[e].forEach((e=>{if(d.o(s,e))return r.push(s[e]);var t=r=>{s[e]=0,d.m[e]=t=>{delete d.c[e],t.exports=r()}},n=r=>{delete s[e],d.m[e]=t=>{throw delete d.c[e],r}};try{var o=c[e]();o.then?r.push(s[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{var e={floatingMenu:0};d.f.j=(r,t)=>{var n=d.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^webpack_sharing_consume_default_react(\-dom_react\-dom\-webpack_sharing_consume_default_react_rea\-b0f53f|_react)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=d.p+d.u(r),u=new Error;d.l(a,(t=>{if(d.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,u,i]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in u)d.o(u,n)&&(d.m[n]=u[n]);i&&i(d)}for(r&&r(t);s<a.length;s++)o=a[s],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkfloating_menu=self.webpackChunkfloating_menu||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),d(850)})())}}}));