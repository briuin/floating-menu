"use strict";(self.webpackChunkfloating_menu=self.webpackChunkfloating_menu||[]).push([["src_components_FloatingMenu_js"],{19:(t,e,n)=>{n.r(e),n.d(e,{bootstrap:()=>m,default:()=>p,mount:()=>h,unmount:()=>v});var i=n(271),o=n.n(i),a=n(650),l=n.n(a),s=n(120),r=n(884),c=n(788),u=n.n(c),d=(0,s.Z)((function(t){return{"@global":{ul:{padding:0,margin:0}},mainWrapper:{position:"fixed",width:"100%",height:"100vh",overflow:"hidden",pointerEvents:"none"},menuItem:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#f7f7f7",color:"black",listStyleType:"none",transform:"scale(0.95)",transition:".5s",borderRadius:"50%"},menuItemList:{position:"relative",width:"100%",height:"100%",top:0,left:0},fabButton:{position:"absolute",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"#6B26BB",color:"white",zIndex:1e3,boxShadow:"0px 2px 17px -1px rgba(0,0,0,0.3)"},floatingButtonWrapper:{pointerEvents:"auto",position:"absolute",transform:"translate(-50%, -50%)",top:"40%",left:"30px",width:"50px",height:"50px",borderRadius:"50%","&.fab-active li:hover":{backgroundColor:"#f8e487"},"&.fab-active.left li:nth-child(1)":{top:"0%",left:"300%",transitionDelay:"0s"},"&.fab-active.left li:nth-child(2)":{top:"0%",left:"200%",transitionDelay:"0.2s"},"&.fab-active.left li:nth-child(3)":{top:"0%",left:"100%",transitionDelay:"0.4s"},"&.fab-active.right li:nth-child(1)":{top:"0%",left:"-300%",transitionDelay:"0s"},"&.fab-active.right li:nth-child(2)":{top:"0%",left:"-200%",transitionDelay:"0.2s"},"&.fab-active.right li:nth-child(3)":{top:"0%",left:"-100%",transitionDelay:"0.4s"}}}}));function p(){var t=d();(0,i.useEffect)((function(){var t,e,n,i,o,a,l,s;t=document.getElementById("pk-floating-menu"),e=document.getElementById("pk-floating-menu-wrapper"),o=function(e){t.classList.contains("fab-active")||("touchmove"===e.type?(t.style.top=e.touches[0].clientY+"px",t.style.left=e.touches[0].clientX+"px"):(t.style.top=e.clientY+"px",t.style.left=e.clientX+"px"))},a=function(e){i=t.style.top,n=t.style.left,"mousedown"===e.type?window.addEventListener("mousemove",o):window.addEventListener("touchmove",o),t.style.transition="none"},l=function(e){"mouseup"===e.type?window.removeEventListener("mousemove",o):window.removeEventListener("touchmove",o),s(e),t.style.transition="0.3s ease-in-out left"},s=function(n){var i,o,a=window.innerWidth;"touchend"===n.type?(i=n.changedTouches[0].clientX,o=n.changedTouches[0].clientY):(i=n.clientX,o=n.clientY),o<50&&(t.style.top="50px"),o>e.clientHeight-50&&(t.style.top=e.clientHeight-50+"px"),i<a/2?(t.style.left="30px",t.classList.remove("right"),t.classList.add("left")):(t.style.left=a-50+"px",t.classList.remove("left"),t.classList.add("right"))},t.addEventListener("mousedown",a),t.addEventListener("mouseup",l),t.addEventListener("touchstart",a),t.addEventListener("touchend",l),t.addEventListener("click",(function(e){i===t.style.top&&n===t.style.left&&t.classList.toggle("fab-active")}))}));var e=[t.menuItem,t.menuItem,t.menuItem];return o().createElement(o().Fragment,null,o().createElement("div",{id:"pk-floating-menu-wrapper",className:t.mainWrapper},o().createElement("div",{id:"pk-floating-menu",className:t.floatingButtonWrapper},o().createElement("div",{className:t.fabButton},o().createElement(r.Z,null)),o().createElement("ul",{className:t.menuItemList},e.map((function(t){return o().createElement("li",{className:t},o().createElement(r.Z,null))}))))))}var f=u()({React:o(),ReactDOM:l(),rootComponent:p,errorBoundary:function(t,e,n){return o().createElement("div",null,"This renders when a catastrophic error occurs")}}),m=f.bootstrap,h=f.mount,v=f.unmount}}]);