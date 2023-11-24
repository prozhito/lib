"use strict";var e=require("react");function n(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var t="-module_link__FuHfG";n(".-module_link__FuHfG {\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n}\n");var o=function(n){var o=n.url,r=n.children,a=n.className,i=void 0===a?"":a,u=n.target_blank,l=void 0===u||u;return null===o?null:o.startsWith("http")?e.createElement("a",{href:o,className:"".concat(t," ").concat(i),target:l?"_blank":"_self",rel:"noopener noreferrer"},r):e.createElement("a",{href:"/page/".concat(o),className:"".concat(t," ").concat(i)},r)},r={menu__desktop:"-module_menu__desktop__ChNcS",menu__dropdown_bg:"-module_menu__dropdown_bg__EYfC8",menu__item:"-module_menu__item__Bi-9G",menu__dropdown:"-module_menu__dropdown__acppo",menu__mobileContainer:"-module_menu__mobileContainer__OMnWJ",menu__mobileContainer_open:"-module_menu__mobileContainer_open__ZbaK2",menu__mobile:"-module_menu__mobile__9PxqT",menu__mobile_secondLevel:"-module_menu__mobile_secondLevel__Tcj-S",menu__link:"-module_menu__link__3QtNb"};n(".-module_menu__desktop__ChNcS {\n  position: relative;\n  min-width: 345px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2em;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.-module_menu__desktop__ChNcS:hover ~ .-module_menu__dropdown_bg__EYfC8 {\n  display: block;\n}\n\n.-module_menu__item__Bi-9G {\n  position: relative;\n  height: 50px;\n  color: #000;\n  display: flex;\n  align-items: center;\n}\n.-module_menu__item__Bi-9G a {\n  color: inherit;\n  text-decoration: none;\n}\n.-module_menu__item__Bi-9G::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: #000;\n  bottom: 2px;\n  transform: scaleX(0);\n  transition: transform 0.25s ease-in-out;\n}\n.-module_menu__item__Bi-9G:hover::before {\n  transform: scaleX(1);\n}\n.-module_menu__item__Bi-9G:hover .-module_menu__dropdown__acppo {\n  display: grid;\n}\n\n.-module_menu__dropdown__acppo {\n  position: absolute;\n  list-style: none;\n  top: 50px;\n  right: 0;\n  display: none;\n  grid-auto-flow: column;\n  gap: 2em;\n  justify-items: center;\n  z-index: 1;\n  white-space: nowrap;\n}\n\n.-module_menu__dropdown__acppo:last-of-type {\n  padding-right: 0;\n}\n\n.-module_menu__dropdown_bg__EYfC8 {\n  display: none;\n  position: absolute;\n  top: 50px;\n  left: 0;\n  height: 50px;\n  width: 100%;\n  background-color: #f7f4f0;\n}\n\n.-module_menu__mobileContainer__OMnWJ {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  background: var(--bg-orange-light);\n  top: 50px;\n  left: 0;\n  width: 100%;\n  transition: height 0.5s ease-in-out;\n}\n\n.-module_menu__mobileContainer_open__ZbaK2 {\n  height: calc(100vh - 50px);\n}\n\n.-module_menu__mobile__9PxqT {\n  display: flex;\n  flex-direction: column;\n  margin: 24px 12px;\n  padding: 0;\n  width: calc(100% - 24px);\n}\n\n.-module_menu__mobile_secondLevel__Tcj-S {\n  margin: 24px 12px;\n  column-width: 48%;\n  column-count: 2;\n  column-gap: 4%;\n  border-bottom: 1px solid var(--logo-gray);\n}\n\n.-module_menu__mobile__9PxqT {\n  border-bottom: 1px solid var(--logo-gray);\n}\n\n@media screen and (max-width: 1023px) {\n  .-module_menu__desktop__ChNcS {\n    min-width: 284px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .-module_menu__desktop__ChNcS {\n    display: none;\n  }\n\n  .-module_menu__item__Bi-9G {\n    padding: 0;\n    height: fit-content;\n  }\n\n  .-module_menu__item__Bi-9G:not(:last-of-type) {\n    margin-bottom: 28px;\n    margin-right: 0;\n  }\n\n  .-module_menu__item__Bi-9G:last-of-type {\n    padding-bottom: 24px;\n  }\n\n  .-module_menu__link__3QtNb {\n    padding: 0;\n  }\n}\n");var a=function(n){var t=n.desktop,a=n.open,i=n.main_menu,u=n.onClose,l=a?r.menu__mobile:"".concat(r.menu__mobile," ").concat(r.menu__mobile_open),s=a?"".concat(r.menu__mobileContainer," ").concat(r.menu__mobileContainer_open):r.menu__mobileContainer,c=t?r.menu__desktop:l,_=i.filter((function(e){return e.children}));return e.createElement("nav",{className:t?void 0:s},e.createElement("ul",{className:c},i.map((function(n,a){var i;return e.createElement("li",{className:r.menu__item,key:a,onClick:u},e.createElement(o,{url:null!==(i=n.page_slug||n.url)&&void 0!==i?i:"#",target_blank:n.target_blank},n.title),t&&n.children&&n.children.length>0&&e.createElement("ul",{className:r.menu__dropdown},n.children.map((function(n,t){return e.createElement("li",{className:r.menu__item,key:t,onClick:u},e.createElement(o,{url:n.page_slug||n.url,target_blank:n.target_blank},n.title))}))))}))),e.createElement("div",{className:r.menu__dropdown_bg}),!t&&_.length>0&&e.createElement("ul",{className:"".concat(_.length<=3?c:r.menu__mobile_secondLevel)},_.map((function(n){var t;return null===(t=n.children)||void 0===t?void 0:t.map((function(t,a){var i;return e.createElement("li",{className:r.menu__item,key:a,onClick:u},e.createElement(o,{url:null!==(i=t.page_slug||t.url)&&void 0!==i?i:"#",target_blank:n.target_blank},t.title))}))}))))},i={header:"-module_header__ARLMb",header_theme_dark:"-module_header_theme_dark__-V06O",header_theme_white:"-module_header_theme_white__ZVFHq",header__container:"-module_header__container__MmNV2",menu__button:"-module_menu__button__6-8sF",header__links:"-module_header__links__1j1Nu",header__logo:"-module_header__logo__IhsBr",header__eusp:"-module_header__eusp__OG3Nq",header__buttons:"-module_header__buttons__Zjbxd"};n("@import url(../../styles/variables.css);\n\n.-module_header__ARLMb {\n  max-width: 100dvw;\n  position: relative;\n  background-color: #f7f4f0;\n  font-family: var(--font-family-pt-sans);\n  font-size: 18px;\n  z-index: 9;\n}\n\n.-module_header_theme_dark__-V06O {\n  background-color: #f7f4f0;\n}\n.-module_header_theme_white__ZVFHq {\n  background-color: var(--bg-white);\n}\n\n.-module_header_theme_white__ZVFHq nav {\n  background-color: var(--bg-white);\n}\n\n@media screen and (max-width: 1023px) {\n  .-module_header__ARLMb {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .-module_header__ARLMb {\n    position: sticky;\n    top: 0;\n    font-size: 14px;\n  }\n}\n\n.-module_header__container__MmNV2 {\n  max-width: calc(min(1400px, 100% - 2rem));\n  height: 50px;\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  border-bottom: 1px var(--bg-orange-light) solid;\n  margin: 0 auto;\n  color: #000;\n}\n\n.-module_menu__button__6-8sF {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.-module_menu__button__6-8sF:focus {\n  outline: none;\n}\n.-module_menu__button__6-8sF:hover {\n  opacity: 0.3;\n  transition: opacity 0.3s linear;\n}\n\n@media screen and (min-width: 768px) {\n  .-module_menu__button__6-8sF {\n    display: none;\n  }\n}\n\n.-module_header__links__1j1Nu {\n  display: flex;\n  gap: 20px;\n  height: 24px;\n  margin-right: auto;\n}\n\n.-module_header__logo__IhsBr {\n  max-width: 156px;\n  max-height: 30px;\n}\n\n.-module_header__eusp__OG3Nq {\n  max-width: 98px;\n  background: transparent;\n}\n\n.-module_header__logo__IhsBr:hover,\n.-module_header__eusp__OG3Nq:hover {\n  opacity: 0.3;\n  transition: opacity 0.3s linear;\n}\n\n.-module_header__buttons__Zjbxd {\n  display: flex;\n}\n");var u="https://archive.prozhito.org/",l=function(n){var t=n.logos,o=n.main_menu,r=e.useState(!1),l=r[0],s=r[1],c=function(n){var t=function(e){return"undefined"!=typeof window&&window.matchMedia(e).matches},o=e.useState(t(n)),r=o[0],a=o[1];function i(){a(t(n))}return e.useEffect((function(){var e=window.matchMedia(n);return i(),e.addEventListener("change",i),function(){return e.removeEventListener("change",i)}}),[n]),r}("(min-width: 768px)"),_=function(){var e;return"undefined"!=typeof window?{pathname:(null===(e=window.location)||void 0===e?void 0:e.pathname)||"/"}:{pathname:"/"}}(),d=l?{img:"data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M17.354%201.354L16.646%200.645996L9%208.293L1.354%200.645996L0.645996%201.354L8.293%209L0.645996%2016.646L1.354%2017.354L9%209.707L16.646%2017.354L17.354%2016.646L9.707%209L17.354%201.354Z%22%20fill%3D%22%23323232%22%2F%3E%3C%2Fsvg%3E",alt:"Закрыть"}:{img:"data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2214%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200V1H16V0H0ZM0%207.5H16V6.5H0V7.5ZM0%2014H16V13H0V14Z%22%20fill%3D%22%23323232%22%2F%3E%3C%2Fsvg%3E",alt:"Открыть"},m=function(){s((function(e){return!e}))};return e.createElement("header",{className:"".concat(!c&&l?"".concat(i.header," ").concat(i.header_theme_dark):i.header," ").concat("/"!==_.pathname?i.header_theme_white:"")},e.createElement("div",{className:i.header__container},e.createElement("div",{className:i.header__links},t.map((function(n,t){var o,r;return 0===t?e.createElement("a",{href:"/",className:i.link,key:t},e.createElement("img",{width:300,height:200,src:u+n.icon,alt:null!==(o=n.alt_text)&&void 0!==o?o:"Logo",className:i.header__logo})):e.createElement("a",{href:"https://eusp.org/",target:"_blank",rel:"noopener noreferrer",className:i.link,key:t},e.createElement("img",{src:u+n.icon,alt:null!==(r=n.alt_text)&&void 0!==r?r:"Logo",className:i.header__eusp}))}))),e.createElement(a,{desktop:c,open:l,main_menu:o,onClose:m}),e.createElement("div",{className:i.header__buttons},e.createElement("button",{className:i.menu__button,onClick:m},e.createElement("img",{alt:d.alt,src:d.img})))))};function s(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function u(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((o=o.apply(e,n||[])).next())}))}function c(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&u[0]?o.return:u[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,u[1])).done)return r;switch(o=0,r&&(u=[2&u[0],r.value]),u[0]){case 0:case 1:r=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,o=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!r||u[1]>r[0]&&u[1]<r[3])){i.label=u[1];break}if(6===u[0]&&i.label<r[1]){i.label=r[1],r=u;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(u);break}r[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],o=0}finally{t=r=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}"function"==typeof SuppressedError&&SuppressedError;var _,d={exports:{}},m={};var f,p={};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?d.exports=function(){if(f)return p;f=1;var n=e,t="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},o=n.useState,r=n.useEffect,a=n.useLayoutEffect,i=n.useDebugValue;function u(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!t(e,o)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),l=o({inst:{value:t,getSnapshot:n}}),s=l[0].inst,c=l[1];return a((function(){s.value=t,s.getSnapshot=n,u(s)&&c({inst:s})}),[e,t,n]),r((function(){return u(s)&&c({inst:s}),e((function(){u(s)&&c({inst:s})}))}),[e]),i(t),t};return p.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l,p}():d.exports=(_||(_=1,"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var n=e,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function o(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];!function(e,n,o){var r=t.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(n+="%s",o=o.concat([r]));var a=o.map((function(e){return String(e)}));a.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,a)}("error",e,o)}var r="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},a=n.useState,i=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue,s=!1,c=!1;function _(e){var n=e.getSnapshot,t=e.value;try{var o=n();return!r(t,o)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n,t){return n()}:function(e,t,d){s||void 0!==n.startTransition&&(s=!0,o("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var m=t();if(!c){var f=t();r(m,f)||(o("The result of getSnapshot should be cached to avoid an infinite loop"),c=!0)}var p=a({inst:{value:m,getSnapshot:t}}),h=p[0].inst,g=p[1];return u((function(){h.value=m,h.getSnapshot=t,_(h)&&g({inst:h})}),[e,m,t]),i((function(){return _(h)&&g({inst:h}),e((function(){_(h)&&g({inst:h})}))}),[e]),l(m),m},f=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d;m.useSyncExternalStore=f,"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),m);var h=d.exports;const g=()=>{},v=g(),b=Object,w=e=>e===v,y=e=>"function"==typeof e,E=(e,n)=>({...e,...n}),x=new WeakMap;let k=0;const S=e=>{const n=typeof e,t=e&&e.constructor,o=t==Date;let r,a;if(b(e)!==e||o||t==RegExp)r=o?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(r=x.get(e),r)return r;if(r=++k+"~",x.set(e,r),t==Array){for(r="@",a=0;a<e.length;a++)r+=S(e[a])+",";x.set(e,r)}if(t==b){r="#";const n=b.keys(e).sort();for(;!w(a=n.pop());)w(e[a])||(r+=a+":"+S(e[a])+",");x.set(e,r)}}return r},O=new WeakMap,L={},C={},N="undefined",T=typeof window!=N,D=typeof document!=N,R=(e,n)=>{const t=O.get(e);return[()=>!w(n)&&e.get(n)||L,o=>{if(!w(n)){const r=e.get(n);n in C||(C[n]=r),t[5](n,E(r,o),r||L)}},t[6],()=>!w(n)&&n in C?C[n]:!w(n)&&e.get(n)||L]};let V=!0;const[F,A]=T&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[g,g],M={isOnline:()=>V,isVisible:()=>{const e=D&&document.visibilityState;return w(e)||"hidden"!==e}},B={initFocus:e=>(D&&document.addEventListener("visibilitychange",e),F("focus",e),()=>{D&&document.removeEventListener("visibilitychange",e),A("focus",e)}),initReconnect:e=>{const n=()=>{V=!0,e()},t=()=>{V=!1};return F("online",n),F("offline",t),()=>{A("online",n),A("offline",t)}}},G=!e.useId,I=!T||"Deno"in window,H=e=>T&&typeof window.requestAnimationFrame!=N?window.requestAnimationFrame(e):setTimeout(e,1),j=I?e.useEffect:e.useLayoutEffect,q="undefined"!=typeof navigator&&navigator.connection,P=!I&&q&&(["slow-2g","2g"].includes(q.effectiveType)||q.saveData),W=e=>{if(y(e))try{e=e()}catch(n){e=""}const n=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?S(e):"",n]};let Z=0;const z=()=>++Z;var K=3,U=0,Y=2,J=1;async function $(...e){const[n,t,o,r]=e,a=E({populateCache:!0,throwOnError:!0},"boolean"==typeof r?{revalidate:r}:r||{});let i=a.populateCache;const u=a.rollbackOnError;let l=a.optimisticData;const s=!1!==a.revalidate,c=a.throwOnError;if(y(t)){const e=t,o=[],r=n.keys();for(const t of r)!/^\$(inf|sub)\$/.test(t)&&e(n.get(t)._k)&&o.push(t);return Promise.all(o.map(_))}return _(t);async function _(t){const[r]=W(t);if(!r)return;const[a,_]=R(n,r),[d,m,f,p]=O.get(n),h=()=>{const e=d[r];return s&&(delete f[r],delete p[r],e&&e[0])?e[0](2).then((()=>a().data)):a().data};if(e.length<3)return h();let g,b=o;const E=z();m[r]=[E,0];const x=!w(l),k=a(),S=k.data,L=k._c,C=w(L)?S:L;if(x&&(l=y(l)?l(C,S):l,_({data:l,_c:C})),y(b))try{b=b(C)}catch(e){g=e}if(b&&y(b.then)){if(b=await b.catch((e=>{g=e})),E!==m[r][0]){if(g)throw g;return b}g&&x&&(e=>"function"==typeof u?u(e):!1!==u)(g)&&(i=!0,_({data:C,_c:v}))}if(i&&!g)if(y(i)){const e=i(b,C);_({data:e,error:v,_c:v})}else _({data:b,error:v,_c:v});if(m[r][1]=z(),Promise.resolve(h()).then((()=>{_({_c:v})})),!g)return b;if(c)throw g}}const Q=(e,n)=>{for(const t in e)e[t][0]&&e[t][0](n)},[X,ee]=((e,n)=>{if(!O.has(e)){const t=E(B,n),o={},r=$.bind(v,e);let a=g;const i={},u=(e,n)=>{const t=i[e]||[];return i[e]=t,t.push(n),()=>t.splice(t.indexOf(n),1)},l=(n,t,o)=>{e.set(n,t);const r=i[n];if(r)for(const e of r)e(t,o)},s=()=>{if(!O.has(e)&&(O.set(e,[o,{},{},{},r,l,u]),!I)){const n=t.initFocus(setTimeout.bind(v,Q.bind(v,o,0))),r=t.initReconnect(setTimeout.bind(v,Q.bind(v,o,1)));a=()=>{n&&n(),r&&r(),O.delete(e)}}};return s(),[e,r,s,a]}return[e,O.get(e)[4]]})(new Map),ne=E({onLoadingSlow:g,onSuccess:g,onError:g,onErrorRetry:(e,n,t,o,r)=>{const a=t.errorRetryCount,i=r.retryCount,u=~~((Math.random()+.5)*(1<<(i<8?i:8)))*t.errorRetryInterval;!w(a)&&i>a||setTimeout(o,u,r)},onDiscarded:g,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:P?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:P?5e3:3e3,compare:(e,n)=>S(e)==S(n),isPaused:()=>!1,cache:X,mutate:ee,fallback:{}},M),te=e.createContext({}),oe=T&&window.__SWR_DEVTOOLS_USE__,re=oe?window.__SWR_DEVTOOLS_USE__:[],ae=re.concat((e=>(n,t,o)=>e(n,t&&((...e)=>{const[o]=W(n),[,,,r]=O.get(X);if(o.startsWith("$inf$"))return t(...e);const a=r[o];return w(a)?t(...e):(delete r[o],a)}),o)));oe&&(window.__SWR_DEVTOOLS_REACT__=e);const ie=e.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),ue={dedupe:!0},le=(se=(n,t,o)=>{const{cache:r,compare:a,suspense:i,fallbackData:u,revalidateOnMount:l,revalidateIfStale:s,refreshInterval:c,refreshWhenHidden:_,refreshWhenOffline:d,keepPreviousData:m}=o,[f,p,g,b]=O.get(r),[x,k]=W(n),S=e.useRef(!1),L=e.useRef(!1),C=e.useRef(x),N=e.useRef(t),T=e.useRef(o),D=()=>T.current,V=()=>D().isVisible()&&D().isOnline(),[F,A,M,B]=R(r,x),q=e.useRef({}).current,P=w(u)?o.fallback[x]:u,Z=(e,n)=>{for(const t in q){const o=t;if("data"===o){if(!a(e[o],n[o])){if(!w(e[o]))return!1;if(!a(le,n[o]))return!1}}else if(n[o]!==e[o])return!1}return!0},Q=e.useMemo((()=>{const e=!!x&&!!t&&(w(l)?!D().isPaused()&&!i&&(!!w(s)||s):l),n=n=>{const t=E(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},o=F(),r=B(),a=n(o),u=o===r?a:n(r);let c=a;return[()=>{const e=n(F());return Z(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>u]}),[r,x]),X=h.useSyncExternalStore(e.useCallback((e=>M(x,((n,t)=>{Z(t,n)||e()}))),[r,x]),Q[0],Q[1]),ee=!S.current,ne=f[x]&&f[x].length>0,te=X.data,oe=w(te)?P:te,re=X.error,ae=e.useRef(oe),le=m?w(te)?ae.current:te:oe,se=!(ne&&!w(re))&&(ee&&!w(l)?l:!D().isPaused()&&(i?!w(oe)&&s:w(oe)||s)),ce=!!(x&&t&&ee&&se),_e=w(X.isValidating)?ce:X.isValidating,de=w(X.isLoading)?ce:X.isLoading,me=e.useCallback((async e=>{const n=N.current;if(!x||!n||L.current||D().isPaused())return!1;let t,r,i=!0;const u=e||{},l=!g[x]||!u.dedupe,s=()=>G?!L.current&&x===C.current&&S.current:x===C.current,c={isValidating:!1,isLoading:!1},_=()=>{A(c)},d=()=>{const e=g[x];e&&e[1]===r&&delete g[x]},m={isValidating:!0};w(F().data)&&(m.isLoading=!0);try{if(l&&(A(m),o.loadingTimeout&&w(F().data)&&setTimeout((()=>{i&&s()&&D().onLoadingSlow(x,o)}),o.loadingTimeout),g[x]=[n(k),z()]),[t,r]=g[x],t=await t,l&&setTimeout(d,o.dedupingInterval),!g[x]||g[x][1]!==r)return l&&s()&&D().onDiscarded(x),!1;c.error=v;const e=p[x];if(!w(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return _(),l&&s()&&D().onDiscarded(x),!1;const u=F().data;c.data=a(u,t)?u:t,l&&s()&&D().onSuccess(t,x,o)}catch(e){d();const n=D(),{shouldRetryOnError:t}=n;n.isPaused()||(c.error=e,l&&s()&&(n.onError(e,x,n),(!0===t||y(t)&&t(e))&&V()&&n.onErrorRetry(e,x,n,(e=>{const n=f[x];n&&n[0]&&n[0](K,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return i=!1,_(),!0}),[x,r]),fe=e.useCallback(((...e)=>$(r,C.current,...e)),[]);if(j((()=>{N.current=t,T.current=o,w(te)||(ae.current=te)})),j((()=>{if(!x)return;const e=me.bind(v,ue);let n=0;const t=((e,n,t)=>{const o=n[e]||(n[e]=[]);return o.push(t),()=>{const e=o.indexOf(t);e>=0&&(o[e]=o[o.length-1],o.pop())}})(x,f,((t,o={})=>{if(t==U){const t=Date.now();D().revalidateOnFocus&&t>n&&V()&&(n=t+D().focusThrottleInterval,e())}else if(t==J)D().revalidateOnReconnect&&V()&&e();else{if(t==Y)return me();if(t==K)return me(o)}}));return L.current=!1,C.current=x,S.current=!0,A({_k:k}),se&&(w(oe)||I?e():H(e)),()=>{L.current=!0,t()}}),[x]),j((()=>{let e;function n(){const n=y(c)?c(F().data):c;n&&-1!==e&&(e=setTimeout(t,n))}function t(){F().error||!_&&!D().isVisible()||!d&&!D().isOnline()?n():me(ue).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[c,_,d,x]),e.useDebugValue(le),i&&w(oe)&&x){if(!G&&I)throw new Error("Fallback data is required when using suspense in SSR.");N.current=t,T.current=o,L.current=!1;const e=b[x];if(!w(e)){const n=fe(e);ie(n)}if(!w(re))throw re;{const e=me(ue);w(le)||(e.status="fulfilled",e.value=!0),ie(e)}}return{mutate:fe,get data(){return q.data=!0,le},get error(){return q.error=!0,re},get isValidating(){return q.isValidating=!0,_e},get isLoading(){return q.isLoading=!0,de}}},function(...n){const t=E(ne,e.useContext(te)),[o,r,a]=(e=>y(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}])(n),i=((e,n)=>{const t=E(e,n);if(n){const{use:o,fallback:r}=e,{use:a,fallback:i}=n;o&&a&&(t.use=o.concat(a)),r&&i&&(t.fallback=E(r,i))}return t})(t,a);let u=se;const{use:l}=i,s=(l||[]).concat(ae);for(let e=s.length;e--;)u=s[e](u);return u(o,r||i.fetcher||null,i)});var se;function ce(e,n){return s(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,fetch(e,n)];case 1:return[2,t.sent().json()]}}))}))}exports.ProzhitoHeader=function(){var n=le("https://archive.prozhito.org/api/landing/context/",ce),t=n.data,o=n.error,r=n.isLoading;return e.useEffect((function(){if(!r&&(o||!t))throw new Error("500")}),[r]),t?e.createElement(l,{logos:t.logos,main_menu:t.main_menu}):e.createElement("header",null)};
//# sourceMappingURL=index.js.map
