(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{6037:function(e,t,n){"use strict";var r=n(2122),i=n(4699),s=n(2949),l=n(7294),c=n(6010),o=(n(5697),n(2666)),a=n(5565),u=n(3366),d=n(5653),m=n(8920),f=n(3834),x=l.forwardRef((function(e,t){var n=e.children,a=e.classes,x=e.className,h=e.collapsedHeight,p=void 0===h?"0px":h,v=e.component,g=void 0===v?"div":v,y=e.disableStrictModeCompat,j=void 0!==y&&y,w=e.in,E=e.onEnter,b=e.onEntered,N=e.onEntering,Z=e.onExit,_=e.onExited,C=e.onExiting,L=e.style,H=e.timeout,A=void 0===H?u.x9.standard:H,S=e.TransitionComponent,k=void 0===S?o.ZP:S,D=(0,s.Z)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),q=(0,m.Z)(),B=l.useRef(),I=l.useRef(null),M=l.useRef(),T="number"===typeof p?"".concat(p,"px"):p;l.useEffect((function(){return function(){clearTimeout(B.current)}}),[]);var R=q.unstable_strictMode&&!j,W=l.useRef(null),F=(0,f.Z)(t,R?W:void 0),O=function(e){return function(t,n){if(e){var r=R?[W.current,t]:[t,n],s=(0,i.Z)(r,2),l=s[0],c=s[1];void 0===c?e(l):e(l,c)}}},P=O((function(e,t){e.style.height=T,E&&E(e,t)})),z=O((function(e,t){var n=I.current?I.current.clientHeight:0,r=(0,d.C)({style:L,timeout:A},{mode:"enter"}).duration;if("auto"===A){var i=q.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),M.current=i}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style.height="".concat(n,"px"),N&&N(e,t)})),G=O((function(e,t){e.style.height="auto",b&&b(e,t)})),X=O((function(e){var t=I.current?I.current.clientHeight:0;e.style.height="".concat(t,"px"),Z&&Z(e)})),Y=O(_),J=O((function(e){var t=I.current?I.current.clientHeight:0,n=(0,d.C)({style:L,timeout:A},{mode:"exit"}).duration;if("auto"===A){var r=q.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),M.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=T,C&&C(e)}));return l.createElement(k,(0,r.Z)({in:w,onEnter:P,onEntered:G,onEntering:z,onExit:X,onExited:Y,onExiting:J,addEndListener:function(e,t){var n=R?e:t;"auto"===A&&(B.current=setTimeout(n,M.current||0))},nodeRef:R?W:void 0,timeout:"auto"===A?null:A},D),(function(e,t){return l.createElement(g,(0,r.Z)({className:(0,c.Z)(a.container,x,{entered:a.entered,exited:!w&&"0px"===T&&a.hidden}[e]),style:(0,r.Z)({minHeight:T},L),ref:F},t),l.createElement("div",{className:a.wrapper,ref:I},l.createElement("div",{className:a.wrapperInner},n)))}))}));x.muiSupportAuto=!0,t.Z=(0,a.Z)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(x)},9790:function(e,t,n){"use strict";n.d(t,{A:function(){return o}});var r=n(5893),i=n(7294),s=n(1664);function l(){return(0,i.useEffect)((function(){var e=document.getElementById("site-menu"),t=document.getElementById("top");window.addEventListener("scroll",(function(){window.scrollY>=400?(null===e||void 0===e||e.classList.add("nav-sticky"),null===t||void 0===t||t.classList.add("pt-scroll")):(null===e||void 0===e||e.classList.remove("nav-sticky"),null===t||void 0===t||t.classList.remove("pt-scroll"))}))}),[]),(0,r.jsx)("header",{id:"top",className:"w-full flex flex-col fixed sm:relative bg-black pin-t pin-r pin-l z-10 text-white",children:(0,r.jsxs)("nav",{id:"site-menu",className:"flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-black shadow sm:shadow-none border-t-4 border-red-900",children:[(0,r.jsxs)("div",{className:"w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsxs)("span",{className:"flex flex-row cursor-pointer items-center text-center",children:[(0,r.jsx)("img",{src:"/logo-big.jpg",width:50,height:50}),(0,r.jsx)("div",{className:"ml-2",children:"Wikigrisser Next"})]})}),(0,r.jsxs)("button",{id:"menuBtn",className:"hamburger block sm:hidden focus:outline-none",type:"button",onClick:function(){var e=document.getElementById("menuBtn"),t=document.getElementById("menu");null===e||void 0===e||e.classList.toggle("open"),null===t||void 0===t||t.classList.toggle("flex"),null===t||void 0===t||t.classList.toggle("hidden")},children:[(0,r.jsx)("span",{className:"hamburger__top-bun"}),(0,r.jsx)("span",{className:"hamburger__bottom-bun"})]})]}),(0,r.jsx)("div",{id:"menu",className:"w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden",children:c.map((function(e){return(0,r.jsx)(s.default,{href:e.url,children:(0,r.jsx)("div",{className:"text-gray-300 font-bold hover:text-white text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 cursor-pointer",children:e.text})},e.text)}))})]})})}var c=[{text:"News",url:"/news"},{text:"Heroes",url:"/heroes/gallery"},{text:"Equipment",url:"/equipment"},{text:"Soldiers",url:"/soldiers"}];function o(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{id:"page-container",className:"flex flex-col justify-between",children:[(0,r.jsxs)("div",{id:"content-wrap",children:[(0,r.jsx)(l,{}),(0,r.jsx)("main",{className:"flex pt-14 sm:pt-0",children:t})]}),(0,r.jsx)("footer",{id:"footer",children:"\xa9 ".concat((new Date).getFullYear()," Wikigrisser")})]})})}},6902:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.equipment,n=e.isExclusive;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"grid grid-cols-12 items-center mt-2 mb-2",children:[(0,r.jsx)("div",{className:"col-span-12 text-center sm:col-span-1",children:(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("img",{src:"/equipment/"+t.name+".png",className:"inline",width:70,height:70})})}),(0,r.jsxs)("div",{className:"col-span-12 text-center sm:col-span-11 sm:text-left",children:[(0,r.jsxs)("p",{className:"text-2xl",children:[n&&"Exclusive Equipment: ",t.name]}),(0,r.jsx)("p",{className:"whitespace-pre-line",children:t.effect})]})]})})}},399:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(5893);n(7294);function i(e){var t=e.children;return(0,r.jsx)("div",{className:"flex flex-col w-full ml-3 mr-3",style:{maxWidth:"1280px"},children:t})}},817:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return y}});var r=n(5893),i=n(7294),s=n(4699),l=n(6445),c=n(3700),o=n(8799),a=n(9963),u=n(6479),d=n(6037),m=n(9233),f=n(6902),x=n(399),h=n(4537);function p(e){var t=e.equipment,n=(0,i.useState)({}),p=n[0],v=n[1],g=(0,i.useState)(m.tb.Weapon),y=g[0],j=g[1],w=(0,i.useState)(""),E=w[0],b=w[1];function N(e){var n=t.filter((function(t){return t.slot===e})).reduce((function(e,t){var n;return e[null!==(n=t.type)&&void 0!==n?n:""].push(t),e}),{Axe:[],Bow:[],Cloth:[],Dagger:[],Hammer:[],Heavy:[],Lance:[],Leather:[],Staff:[],Sword:[],"":[]});v(n)}(0,i.useEffect)((function(){N(y),b("")}),[y]),(0,i.useEffect)((function(){E.length>0?function(e){var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLocaleLowerCase())})).reduce((function(e,t){var n;return e[null!==(n=t.type)&&void 0!==n?n:""].push(t),e}),{Axe:[],Bow:[],Cloth:[],Dagger:[],Hammer:[],Heavy:[],Lance:[],Leather:[],Staff:[],Sword:[],"":[]});v(n)}(E):N(y)}),[E]);return(0,r.jsxs)("div",{className:"bg-white flex flex-grow justify-center flex-col cursor-auto",children:[(0,r.jsx)("h1",{className:"text-6xl text-center mb-10 font-thin text-gray-600",children:"Equipment"}),(0,r.jsxs)("div",{className:"flex flex-wrap justify-center text-center mb-5",children:[(0,r.jsx)("div",{className:"mr-4",children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Search"}),(0,r.jsx)(o.Z,{value:E,onChange:function(e){b(e.target.value)}})]})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{children:"Slot"}),(0,r.jsx)(a.Z,{value:y,onChange:function(e){j(e.target.value)},children:Object.values(m.tb).map((function(e){return(0,r.jsx)(u.Z,{value:e,children:e},e)}))})]})]}),(0,r.jsx)(h.Z,{children:Object.entries(p).filter((function(e){var t=(0,s.Z)(e,2);t[0];return t[1].length>0})).map((function(e){var t=(0,s.Z)(e,2),n=t[0],i=t[1];return(0,r.jsxs)(d.Z,{timeout:750,children:[(0,r.jsx)("div",{className:"flex flex-row bg-gray-200 justify-center",children:(0,r.jsx)(x.m,{children:(0,r.jsx)("div",{className:"flex mt-2 mb-2 items-center justify-center sm:justify-start",children:(0,r.jsx)("div",{className:"ml-2 text-2xl",children:n||"Accessories"})})})}),(0,r.jsx)("div",{className:"flex flex-row bg-white justify-center",children:(0,r.jsx)(x.m,{children:i.map((function(e){return(0,r.jsx)(f.l,{equipment:e,isExclusive:!1})}))})})]},n)}))})]})}var v=n(9790),g=!0,y=function(e){var t=e.equipment;return(0,r.jsx)(v.A,{children:(0,r.jsx)(p,{equipment:t})})}},9233:function(e,t,n){"use strict";var r,i,s;n.d(t,{iz:function(){return r},Cm:function(){return i},tb:function(){return s}}),function(e){e.Protagonist="protagonist",e.Glory="glory",e.Origin="origin",e.Princess="princess",e.Empire="empire",e.Strategic="strategic",e.Dark="dark",e.Meteor="meteor",e.Legends="legends",e.Mythic="mythic",e.Tensei="tensei",e.Time="time"}(r||(r={})),function(e){e.Infantry="Infantry",e.Lancer="Lancer",e.Cavalry="Cavalry",e.Flier="Flier",e.Aquatic="Aquatic",e.Archer="Archer",e.Assassin="Assassin",e.Mage="Mage",e.Holy="Holy",e.Demon="Demon",e.Dragon="Dragon"}(i||(i={})),function(e){e.Head="Head",e.Body="Body",e.Weapon="Weapon",e.Accessory="Accessory"}(s||(s={}))},6113:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/equipment",function(){return n(817)}])}},function(e){e.O(0,[774,351,893,481,3],(function(){return t=6113,e(e.s=t);var t}));var t=e.O();_N_E=t}]);