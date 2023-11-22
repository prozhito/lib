"use strict";var e=require("react");function n(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var t="-module_link__FuHfG";n(".-module_link__FuHfG {\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n}\n");var r=function(n){var r=n.url,o=n.children,a=n.className,i=void 0===a?"":a,u=n.target_blank,l=void 0===u||u;return null===r?null:r.startsWith("http")?e.createElement("a",{href:r,className:"".concat(t," ").concat(i),target:l?"_blank":"_self",rel:"noopener noreferrer"},o):e.createElement("a",{href:"/page/".concat(r),className:"".concat(t," ").concat(i)},o)},o={menu__desktop:"-module_menu__desktop__ChNcS",menu__item:"-module_menu__item__Bi-9G",menu__link:"-module_menu__link__3QtNb",menu__dropdown:"-module_menu__dropdown__acppo",menu__mobileContainer:"-module_menu__mobileContainer__OMnWJ",menu__mobileContainer_open:"-module_menu__mobileContainer_open__ZbaK2",menu__mobile:"-module_menu__mobile__9PxqT",menu__mobile_secondLevel:"-module_menu__mobile_secondLevel__Tcj-S"};n('.-module_menu__desktop__ChNcS {\n  position: relative;\n  min-width: 345px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 40px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.-module_menu__item__Bi-9G {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  color: var(--black-100);\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.-module_menu__link__3QtNb {\n  text-decoration: none;\n  color: var(--black-100);\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.-module_menu__link__3QtNb:hover {\n  border-bottom: 1px solid var(--black-100);\n  margin-bottom: -1px;\n}\n\n.-module_menu__dropdown__acppo {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  height: 38px;\n  display: none;\n  opacity: 0;\n  padding: 8px 10px 0;\n  grid-auto-flow: column;\n  /*grid-auto-columns: minmax(120px, 1fr);*/\n  /*grid-auto-columns: 280px;*/\n  gap: 30px;\n  justify-items: center;\n  transition: all 0.3s linear;\n  z-index: 1;\n}\n\n/* хак для "студенческой практики */\n.-module_menu__item__Bi-9G:nth-last-child(1) .-module_menu__dropdown__acppo li:nth-last-child(1) {\n  width: 222px;\n}\n\n.-module_menu__dropdown__acppo:last-of-type {\n  padding-right: 0;\n}\n\n.-module_menu__item__Bi-9G:hover .-module_menu__dropdown__acppo {\n  display: grid;\n  opacity: 1;\n}\n\n.-module_menu__mobileContainer__OMnWJ {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  background: var(--bg-orange-light);\n  top: 50px;\n  left: 0;\n  width: 100%;\n  transition: height 0.5s ease-in-out;\n}\n\n.-module_menu__mobileContainer_open__ZbaK2 {\n  height: calc(100vh - 50px);\n}\n\n.-module_menu__mobile__9PxqT {\n  display: flex;\n  flex-direction: column;\n  margin: 24px 12px;\n  padding: 0;\n  width: calc(100% - 24px);\n}\n\n.-module_menu__mobile_secondLevel__Tcj-S {\n  margin: 24px 12px;\n  column-width: 48%;\n  column-count: 2;\n  column-gap: 4%;\n  border-bottom: 1px solid var(--logo-gray);\n}\n\n.-module_menu__mobile__9PxqT {\n  border-bottom: 1px solid var(--logo-gray);\n}\n\n@media screen and (max-width: 1023px) {\n  .-module_menu__desktop__ChNcS {\n    min-width: 284px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .-module_menu__desktop__ChNcS {\n    display: none;\n  }\n\n  .-module_menu__item__Bi-9G {\n    padding: 0;\n    height: fit-content;\n  }\n\n  .-module_menu__item__Bi-9G:not(:last-of-type) {\n    margin-bottom: 28px;\n    margin-right: 0;\n  }\n\n  .-module_menu__item__Bi-9G:last-of-type {\n    padding-bottom: 24px;\n  }\n\n  .-module_menu__link__3QtNb {\n    padding: 0;\n  }\n}\n');var a=function(n){var t=n.desktop,a=n.open,i=n.main_menu,u=n.onClose,l=a?o.menu__mobile:"".concat(o.menu__mobile," ").concat(o.menu__mobile_open),s=a?"".concat(o.menu__mobileContainer," ").concat(o.menu__mobileContainer_open):o.menu__mobileContainer,c=t?o.menu__desktop:l,d=i.filter((function(e){return e.children}));return e.createElement("nav",{className:t?"":s},e.createElement("ul",{className:c},i.map((function(n,a){var i;return e.createElement("li",{className:o.menu__item,key:a,onClick:u},e.createElement(r,{url:null!==(i=n.page_slug||n.url)&&void 0!==i?i:"#",className:o.menu__link,target_blank:n.target_blank},n.title),t&&n.children&&n.children.length>0&&e.createElement("ul",{className:o.menu__dropdown},n.children.map((function(n,t){return e.createElement("li",{className:o.menu__dropdownItem,key:t,onClick:u},e.createElement(r,{url:n.page_slug||n.url,className:o.menu__link,target_blank:n.target_blank},n.title))}))))}))),!t&&d.length>0&&e.createElement("ul",{className:"".concat(d.length<=3?c:o.menu__mobile_secondLevel)},d.map((function(n){var t;return null===(t=n.children)||void 0===t?void 0:t.map((function(t,a){var i;return e.createElement("li",{className:o.menu__item,key:a,onClick:u},e.createElement(r,{url:null!==(i=t.page_slug||t.url)&&void 0!==i?i:"#",className:o.menu__link,target_blank:n.target_blank},t.title))}))}))))},i={header:"-module_header__ARLMb",header_theme_dark:"-module_header_theme_dark__-V06O",header_theme_white:"-module_header_theme_white__ZVFHq",header__container:"-module_header__container__MmNV2",menu__button:"-module_menu__button__6-8sF",header__links:"-module_header__links__1j1Nu",header__logo:"-module_header__logo__IhsBr",header__eusp:"-module_header__eusp__OG3Nq",header__buttons:"-module_header__buttons__Zjbxd"};n("@import url(../../styles/variables.css);\n\n.-module_header__ARLMb {\n  position: relative;\n  background-color: var(--bg-orange-lightest);\n  z-index: 9;\n  margin-bottom: 50px;\n}\n\n.-module_header_theme_dark__-V06O {\n  background-color: var(--bg-orange-light);\n}\n.-module_header_theme_white__ZVFHq {\n  background-color: var(--bg-white);\n}\n\n.-module_header_theme_white__ZVFHq nav {\n  background-color: var(--bg-white);\n}\n\n@media screen and (max-width: 767px) {\n  .-module_header__ARLMb {\n    position: sticky;\n    top: 0;\n    font-size: 14px;\n  }\n}\n\n.-module_header__container__MmNV2 {\n  max-width: calc(min(1400px, 100% - 2rem));\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 1rem;\n  border-bottom: 1px #e7e4de solid;\n  margin: 0 auto;\n  font: 20px/1.3 var(--font-family-pt-sans);\n  color: var(--black-100);\n}\n\n@media screen and (max-width: 1023px) {\n  .-module_header__container__MmNV2 {\n    font-size: 16px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .-module_header__container__MmNV2 {\n    font-size: 14px;\n  }\n}\n\n.-module_menu__button__6-8sF {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.-module_menu__button__6-8sF:focus {\n  outline: none;\n}\n.-module_menu__button__6-8sF:hover {\n  opacity: 0.3;\n  transition: opacity 0.3s linear 0s;\n}\n\n@media screen and (min-width: 768px) {\n  .-module_menu__button__6-8sF {\n    display: none;\n  }\n}\n\n.-module_header__links__1j1Nu {\n  display: flex;\n  gap: 20px;\n  height: 24px;\n}\n\n.-module_header__logo__IhsBr {\n  max-width: 156px;\n  max-height: 30px;\n}\n\n.-module_header__eusp__OG3Nq {\n  max-width: 98px;\n  background: transparent;\n}\n\n.-module_header__buttons__Zjbxd {\n  display: flex;\n}\n");var u="https://archive.prozhito.org/",l=function(n){var t=n.logos,r=n.main_menu,o=e.useState(!1),l=o[0],s=o[1],c=function(n){var t=function(e){return"undefined"!=typeof window&&window.matchMedia(e).matches},r=e.useState(t(n)),o=r[0],a=r[1];function i(){a(t(n))}return e.useEffect((function(){var e=window.matchMedia(n);return i(),e.addEventListener("change",i),function(){return e.removeEventListener("change",i)}}),[n]),o}("(min-width: 768px)"),d=function(){var e;return"undefined"!=typeof window?{pathname:(null===(e=window.location)||void 0===e?void 0:e.pathname)||"/"}:{pathname:"/"}}(),_=l?{img:"data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M17.354%201.354L16.646%200.645996L9%208.293L1.354%200.645996L0.645996%201.354L8.293%209L0.645996%2016.646L1.354%2017.354L9%209.707L16.646%2017.354L17.354%2016.646L9.707%209L17.354%201.354Z%22%20fill%3D%22%23323232%22%2F%3E%3C%2Fsvg%3E",alt:"Закрыть"}:{img:"data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2214%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200V1H16V0H0ZM0%207.5H16V6.5H0V7.5ZM0%2014H16V13H0V14Z%22%20fill%3D%22%23323232%22%2F%3E%3C%2Fsvg%3E",alt:"Открыть"},m=function(){s((function(e){return!e}))};return e.createElement("header",{className:"".concat(!c&&l?"".concat(i.header," ").concat(i.header_theme_dark):i.header," ").concat("/"!==d.pathname?i.header_theme_white:"")},e.createElement("div",{className:i.header__container},e.createElement("div",{className:i.header__links},t.map((function(n,t){var r,o;return 0===t?e.createElement("a",{href:"/",className:i.link,key:t},e.createElement("img",{width:300,height:200,src:u+n.icon,alt:null!==(r=n.alt_text)&&void 0!==r?r:"Logo",className:i.header__logo})):e.createElement("a",{href:"https://eusp.org/",target:"_blank",rel:"noopener noreferrer",className:i.link,key:t},e.createElement("img",{src:u+n.icon,alt:null!==(o=n.alt_text)&&void 0!==o?o:"Logo",className:i.header__eusp}))}))),e.createElement(a,{desktop:c,open:l,main_menu:r,onClose:m}),e.createElement("div",{className:i.header__buttons},e.createElement("button",{className:i.menu__button,onClick:m},e.createElement("img",{alt:_.alt,src:_.img})))))};function s(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function u(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}"function"==typeof SuppressedError&&SuppressedError;var d,_={exports:{}},m={};var f,p={};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?_.exports=function(){if(f)return p;f=1;var n=e,t="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},r=n.useState,o=n.useEffect,a=n.useLayoutEffect,i=n.useDebugValue;function u(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!t(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),l=r({inst:{value:t,getSnapshot:n}}),s=l[0].inst,c=l[1];return a((function(){s.value=t,s.getSnapshot=n,u(s)&&c({inst:s})}),[e,t,n]),o((function(){return u(s)&&c({inst:s}),e((function(){u(s)&&c({inst:s})}))}),[e]),i(t),t};return p.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l,p}():_.exports=(d||(d=1,"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var n=e,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function r(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];!function(e,n,r){var o=t.ReactDebugCurrentFrame.getStackAddendum();""!==o&&(n+="%s",r=r.concat([o]));var a=r.map((function(e){return String(e)}));a.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,a)}("error",e,r)}var o="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},a=n.useState,i=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue,s=!1,c=!1;function d(e){var n=e.getSnapshot,t=e.value;try{var r=n();return!o(t,r)}catch(e){return!0}}var _="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n,t){return n()}:function(e,t,_){s||void 0!==n.startTransition&&(s=!0,r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var m=t();if(!c){var f=t();o(m,f)||(r("The result of getSnapshot should be cached to avoid an infinite loop"),c=!0)}var p=a({inst:{value:m,getSnapshot:t}}),h=p[0].inst,g=p[1];return u((function(){h.value=m,h.getSnapshot=t,d(h)&&g({inst:h})}),[e,m,t]),i((function(){return d(h)&&g({inst:h}),e((function(){d(h)&&g({inst:h})}))}),[e]),l(m),m},f=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:_;m.useSyncExternalStore=f,"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),m);var h=_.exports;const g=()=>{},v=g(),b=Object,w=e=>e===v,y=e=>"function"==typeof e,x=(e,n)=>({...e,...n}),E=new WeakMap;let k=0;const S=e=>{const n=typeof e,t=e&&e.constructor,r=t==Date;let o,a;if(b(e)!==e||r||t==RegExp)o=r?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(o=E.get(e),o)return o;if(o=++k+"~",E.set(e,o),t==Array){for(o="@",a=0;a<e.length;a++)o+=S(e[a])+",";E.set(e,o)}if(t==b){o="#";const n=b.keys(e).sort();for(;!w(a=n.pop());)w(e[a])||(o+=a+":"+S(e[a])+",");E.set(e,o)}}return o},O=new WeakMap,L={},C={},N="undefined",T=typeof window!=N,D=typeof document!=N,V=(e,n)=>{const t=O.get(e);return[()=>!w(n)&&e.get(n)||L,r=>{if(!w(n)){const o=e.get(n);n in C||(C[n]=o),t[5](n,x(o,r),o||L)}},t[6],()=>!w(n)&&n in C?C[n]:!w(n)&&e.get(n)||L]};let R=!0;const[F,A]=T&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[g,g],M={isOnline:()=>R,isVisible:()=>{const e=D&&document.visibilityState;return w(e)||"hidden"!==e}},B={initFocus:e=>(D&&document.addEventListener("visibilitychange",e),F("focus",e),()=>{D&&document.removeEventListener("visibilitychange",e),A("focus",e)}),initReconnect:e=>{const n=()=>{R=!0,e()},t=()=>{R=!1};return F("online",n),F("offline",t),()=>{A("online",n),A("offline",t)}}},I=!e.useId,H=!T||"Deno"in window,G=e=>T&&typeof window.requestAnimationFrame!=N?window.requestAnimationFrame(e):setTimeout(e,1),j=H?e.useEffect:e.useLayoutEffect,P="undefined"!=typeof navigator&&navigator.connection,W=!H&&P&&(["slow-2g","2g"].includes(P.effectiveType)||P.saveData),q=e=>{if(y(e))try{e=e()}catch(n){e=""}const n=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?S(e):"",n]};let Z=0;const z=()=>++Z;var K=3,U=0,J=2,Q=1;async function $(...e){const[n,t,r,o]=e,a=x({populateCache:!0,throwOnError:!0},"boolean"==typeof o?{revalidate:o}:o||{});let i=a.populateCache;const u=a.rollbackOnError;let l=a.optimisticData;const s=!1!==a.revalidate,c=a.throwOnError;if(y(t)){const e=t,r=[],o=n.keys();for(const t of o)!/^\$(inf|sub)\$/.test(t)&&e(n.get(t)._k)&&r.push(t);return Promise.all(r.map(d))}return d(t);async function d(t){const[o]=q(t);if(!o)return;const[a,d]=V(n,o),[_,m,f,p]=O.get(n),h=()=>{const e=_[o];return s&&(delete f[o],delete p[o],e&&e[0])?e[0](2).then((()=>a().data)):a().data};if(e.length<3)return h();let g,b=r;const x=z();m[o]=[x,0];const E=!w(l),k=a(),S=k.data,L=k._c,C=w(L)?S:L;if(E&&(l=y(l)?l(C,S):l,d({data:l,_c:C})),y(b))try{b=b(C)}catch(e){g=e}if(b&&y(b.then)){if(b=await b.catch((e=>{g=e})),x!==m[o][0]){if(g)throw g;return b}g&&E&&(e=>"function"==typeof u?u(e):!1!==u)(g)&&(i=!0,d({data:C,_c:v}))}if(i&&!g)if(y(i)){const e=i(b,C);d({data:e,error:v,_c:v})}else d({data:b,error:v,_c:v});if(m[o][1]=z(),Promise.resolve(h()).then((()=>{d({_c:v})})),!g)return b;if(c)throw g}}const Y=(e,n)=>{for(const t in e)e[t][0]&&e[t][0](n)},[X,ee]=((e,n)=>{if(!O.has(e)){const t=x(B,n),r={},o=$.bind(v,e);let a=g;const i={},u=(e,n)=>{const t=i[e]||[];return i[e]=t,t.push(n),()=>t.splice(t.indexOf(n),1)},l=(n,t,r)=>{e.set(n,t);const o=i[n];if(o)for(const e of o)e(t,r)},s=()=>{if(!O.has(e)&&(O.set(e,[r,{},{},{},o,l,u]),!H)){const n=t.initFocus(setTimeout.bind(v,Y.bind(v,r,0))),o=t.initReconnect(setTimeout.bind(v,Y.bind(v,r,1)));a=()=>{n&&n(),o&&o(),O.delete(e)}}};return s(),[e,o,s,a]}return[e,O.get(e)[4]]})(new Map),ne=x({onLoadingSlow:g,onSuccess:g,onError:g,onErrorRetry:(e,n,t,r,o)=>{const a=t.errorRetryCount,i=o.retryCount,u=~~((Math.random()+.5)*(1<<(i<8?i:8)))*t.errorRetryInterval;!w(a)&&i>a||setTimeout(r,u,o)},onDiscarded:g,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:W?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:W?5e3:3e3,compare:(e,n)=>S(e)==S(n),isPaused:()=>!1,cache:X,mutate:ee,fallback:{}},M),te=e.createContext({}),re=T&&window.__SWR_DEVTOOLS_USE__,oe=re?window.__SWR_DEVTOOLS_USE__:[],ae=oe.concat((e=>(n,t,r)=>e(n,t&&((...e)=>{const[r]=q(n),[,,,o]=O.get(X);if(r.startsWith("$inf$"))return t(...e);const a=o[r];return w(a)?t(...e):(delete o[r],a)}),r)));re&&(window.__SWR_DEVTOOLS_REACT__=e);const ie=e.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),ue={dedupe:!0},le=(se=(n,t,r)=>{const{cache:o,compare:a,suspense:i,fallbackData:u,revalidateOnMount:l,revalidateIfStale:s,refreshInterval:c,refreshWhenHidden:d,refreshWhenOffline:_,keepPreviousData:m}=r,[f,p,g,b]=O.get(o),[E,k]=q(n),S=e.useRef(!1),L=e.useRef(!1),C=e.useRef(E),N=e.useRef(t),T=e.useRef(r),D=()=>T.current,R=()=>D().isVisible()&&D().isOnline(),[F,A,M,B]=V(o,E),P=e.useRef({}).current,W=w(u)?r.fallback[E]:u,Z=(e,n)=>{for(const t in P){const r=t;if("data"===r){if(!a(e[r],n[r])){if(!w(e[r]))return!1;if(!a(le,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},Y=e.useMemo((()=>{const e=!!E&&!!t&&(w(l)?!D().isPaused()&&!i&&(!!w(s)||s):l),n=n=>{const t=x(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=F(),o=B(),a=n(r),u=r===o?a:n(o);let c=a;return[()=>{const e=n(F());return Z(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>u]}),[o,E]),X=h.useSyncExternalStore(e.useCallback((e=>M(E,((n,t)=>{Z(t,n)||e()}))),[o,E]),Y[0],Y[1]),ee=!S.current,ne=f[E]&&f[E].length>0,te=X.data,re=w(te)?W:te,oe=X.error,ae=e.useRef(re),le=m?w(te)?ae.current:te:re,se=!(ne&&!w(oe))&&(ee&&!w(l)?l:!D().isPaused()&&(i?!w(re)&&s:w(re)||s)),ce=!!(E&&t&&ee&&se),de=w(X.isValidating)?ce:X.isValidating,_e=w(X.isLoading)?ce:X.isLoading,me=e.useCallback((async e=>{const n=N.current;if(!E||!n||L.current||D().isPaused())return!1;let t,o,i=!0;const u=e||{},l=!g[E]||!u.dedupe,s=()=>I?!L.current&&E===C.current&&S.current:E===C.current,c={isValidating:!1,isLoading:!1},d=()=>{A(c)},_=()=>{const e=g[E];e&&e[1]===o&&delete g[E]},m={isValidating:!0};w(F().data)&&(m.isLoading=!0);try{if(l&&(A(m),r.loadingTimeout&&w(F().data)&&setTimeout((()=>{i&&s()&&D().onLoadingSlow(E,r)}),r.loadingTimeout),g[E]=[n(k),z()]),[t,o]=g[E],t=await t,l&&setTimeout(_,r.dedupingInterval),!g[E]||g[E][1]!==o)return l&&s()&&D().onDiscarded(E),!1;c.error=v;const e=p[E];if(!w(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return d(),l&&s()&&D().onDiscarded(E),!1;const u=F().data;c.data=a(u,t)?u:t,l&&s()&&D().onSuccess(t,E,r)}catch(e){_();const n=D(),{shouldRetryOnError:t}=n;n.isPaused()||(c.error=e,l&&s()&&(n.onError(e,E,n),(!0===t||y(t)&&t(e))&&R()&&n.onErrorRetry(e,E,n,(e=>{const n=f[E];n&&n[0]&&n[0](K,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return i=!1,d(),!0}),[E,o]),fe=e.useCallback(((...e)=>$(o,C.current,...e)),[]);if(j((()=>{N.current=t,T.current=r,w(te)||(ae.current=te)})),j((()=>{if(!E)return;const e=me.bind(v,ue);let n=0;const t=((e,n,t)=>{const r=n[e]||(n[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}})(E,f,((t,r={})=>{if(t==U){const t=Date.now();D().revalidateOnFocus&&t>n&&R()&&(n=t+D().focusThrottleInterval,e())}else if(t==Q)D().revalidateOnReconnect&&R()&&e();else{if(t==J)return me();if(t==K)return me(r)}}));return L.current=!1,C.current=E,S.current=!0,A({_k:k}),se&&(w(re)||H?e():G(e)),()=>{L.current=!0,t()}}),[E]),j((()=>{let e;function n(){const n=y(c)?c(F().data):c;n&&-1!==e&&(e=setTimeout(t,n))}function t(){F().error||!d&&!D().isVisible()||!_&&!D().isOnline()?n():me(ue).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[c,d,_,E]),e.useDebugValue(le),i&&w(re)&&E){if(!I&&H)throw new Error("Fallback data is required when using suspense in SSR.");N.current=t,T.current=r,L.current=!1;const e=b[E];if(!w(e)){const n=fe(e);ie(n)}if(!w(oe))throw oe;{const e=me(ue);w(le)||(e.status="fulfilled",e.value=!0),ie(e)}}return{mutate:fe,get data(){return P.data=!0,le},get error(){return P.error=!0,oe},get isValidating(){return P.isValidating=!0,de},get isLoading(){return P.isLoading=!0,_e}}},function(...n){const t=x(ne,e.useContext(te)),[r,o,a]=(e=>y(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}])(n),i=((e,n)=>{const t=x(e,n);if(n){const{use:r,fallback:o}=e,{use:a,fallback:i}=n;r&&a&&(t.use=r.concat(a)),o&&i&&(t.fallback=x(o,i))}return t})(t,a);let u=se;const{use:l}=i,s=(l||[]).concat(ae);for(let e=s.length;e--;)u=s[e](u);return u(r,o||i.fetcher||null,i)});var se;function ce(e,n){return s(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return[4,fetch(e,n)];case 1:return[2,t.sent().json()]}}))}))}exports.ProzhitoHeader=function(){var n=le("https://archive.prozhito.org/api/landing/context/",ce),t=n.data,r=n.error,o=n.isLoading;return e.useEffect((function(){if(!o&&(r||!t))throw new Error("500")}),[o]),t?e.createElement(l,{logos:t.logos,main_menu:t.main_menu}):e.createElement("header",null)};
//# sourceMappingURL=index.js.map
