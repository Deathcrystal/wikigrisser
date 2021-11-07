(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{9790:function(e,s,t){"use strict";t.d(s,{A:function(){return a}});var n=t(5893),l=t(7294),r=t(1664);function i(){return(0,l.useEffect)((function(){var e=document.getElementById("site-menu"),s=document.getElementById("top");window.addEventListener("scroll",(function(){window.scrollY>=400?(null===e||void 0===e||e.classList.add("nav-sticky"),null===s||void 0===s||s.classList.add("pt-scroll")):(null===e||void 0===e||e.classList.remove("nav-sticky"),null===s||void 0===s||s.classList.remove("pt-scroll"))}))}),[]),(0,n.jsx)("header",{id:"top",className:"w-full flex flex-col fixed sm:relative bg-black pin-t pin-r pin-l z-10 text-white",children:(0,n.jsxs)("nav",{id:"site-menu",className:"flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-black shadow sm:shadow-none border-t-4 border-red-900",children:[(0,n.jsxs)("div",{className:"w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center",children:[(0,n.jsx)(r.default,{href:"/",children:(0,n.jsxs)("span",{className:"flex flex-row cursor-pointer items-center text-center",children:[(0,n.jsx)("img",{src:"/logo-big.jpg",width:50,height:50}),(0,n.jsx)("div",{className:"ml-2",children:"Wikigrisser Next"})]})}),(0,n.jsxs)("button",{id:"menuBtn",className:"hamburger block sm:hidden focus:outline-none",type:"button",onClick:function(){var e=document.getElementById("menuBtn"),s=document.getElementById("menu");null===e||void 0===e||e.classList.toggle("open"),null===s||void 0===s||s.classList.toggle("flex"),null===s||void 0===s||s.classList.toggle("hidden")},children:[(0,n.jsx)("span",{className:"hamburger__top-bun"}),(0,n.jsx)("span",{className:"hamburger__bottom-bun"})]})]}),(0,n.jsx)("div",{id:"menu",className:"w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden",children:c.map((function(e){return(0,n.jsx)(r.default,{href:e.url,children:(0,n.jsx)("div",{className:"text-gray-300 font-bold hover:text-white text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2 cursor-pointer",children:e.text})},e.text)}))})]})})}var c=[{text:"News",url:"/news"},{text:"Heroes",url:"/heroes/gallery"},{text:"Equipment",url:"/equipment"},{text:"Soldiers",url:"/soldiers"}];function a(e){var s=e.children;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{id:"page-container",className:"flex flex-col justify-between",children:[(0,n.jsxs)("div",{id:"content-wrap",children:[(0,n.jsx)(i,{}),(0,n.jsx)("main",{className:"flex pt-14 sm:pt-0",children:s})]}),(0,n.jsx)("footer",{id:"footer",children:"\xa9 ".concat((new Date).getFullYear()," Wikigrisser")})]})})}},3092:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return x},default:function(){return p}});var n=t(5893),l=t(7294),r=t(9790);function i(e){var s=e.patch;return(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"font-bold",children:s.formattedDate}),(0,n.jsx)("img",{src:"/banners/"+s.id+".png",className:"inline col-span-2 md:col-span-1 justify-self-center md:justify-self-end pb-2 md:pb-0",width:400,height:200}),(0,n.jsx)("div",{className:"whitespace-pre-line text-sm font- pl-4 col-span-2 md:col-span-1",children:s.info})]})}var c=t(6562),a=t(6546),o=t(3272),d=t(6037),u=t(4537);function m(e){var s=e.patches,t=(0,l.useState)(!1),r=t[0],m=t[1],x=(new Date).valueOf()-24192e5,p=Object.values(s).filter((function(e){return r||"major"===e.type&&new Date(e.releaseDate).valueOf()>x||"minor"===e.type})).reduce(f,{});return(0,n.jsxs)("div",{children:[(0,n.jsx)(c.Z,{className:"flex content-center pt-2 pb-1",children:(0,n.jsx)(a.Z,{control:(0,n.jsx)(o.Z,{checked:r,onChange:function(){return m(!r)},name:"show-past"}),label:"View past updates"})}),(0,n.jsx)(u.Z,{children:Object.values(p).map((function(e){return(0,n.jsx)(d.Z,{timeout:750,children:(0,n.jsxs)("div",{className:"flex flex-col mb-5",children:[(0,n.jsx)("div",{className:"flex flex-row bg-gray-200 justify-center",children:(0,n.jsxs)("div",{className:"flex flex-col text-center mt-2 mb-2 ",children:[(0,n.jsx)("img",{src:"/patchBanners/"+e[0].id+".png",className:"inline md:col-span-1 justify-self-center pb-2",width:400,height:200}),(0,n.jsx)("div",{className:"ml-2 text-2xl",children:e[0].name})]})}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 pr-5 pl-5",children:Object.values(e).map((function(e){return(0,n.jsx)(i,{patch:e},e.id)}))})]},e[0].id)},e[0].id)}))})]})}function f(e,s){if("major"===s.type)e[s.id]=[s];else{var t=Object.keys(e).pop();e[t]&&e[t].push(s)}return e}var x=!0,p=function(e){var s=e.patches;return(0,n.jsx)(r.A,{children:(0,n.jsx)(m,{patches:s})})}},1245:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(3092)}])}},function(e){e.O(0,[774,351,893,655],(function(){return s=1245,e(e.s=s);var s}));var s=e.O();_N_E=s}]);