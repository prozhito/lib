"use strict";var e=require("react");function n(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var t="external-link-module_link__hWGYR";n(".external-link-module_link__hWGYR {\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n}\n");var r=function(n){var r=n.url,a=n.children,o=n.className,i=void 0===o?"":o,u=n.target_blank,l=void 0===u||u;return null===r?null:r.startsWith("http")?e.createElement("a",{href:r,className:"".concat(t," ").concat(i),target:l?"_blank":"_self",rel:"noopener noreferrer"},a):e.createElement("a",{href:"/page/".concat(r),className:"".concat(t," ").concat(i)},a)},a={menu__desktop:"headerNav-module_menu__desktop__W7aPN",menu__item:"headerNav-module_menu__item__yoFkY",menu__link:"headerNav-module_menu__link__1xRgq",menu__dropdown:"headerNav-module_menu__dropdown__c-GAL",menu__mobileContainer:"headerNav-module_menu__mobileContainer__pgbsW",menu__mobileContainer_open:"headerNav-module_menu__mobileContainer_open__TWARe",menu__mobile:"headerNav-module_menu__mobile__y1bwQ",menu__mobile_secondLevel:"headerNav-module_menu__mobile_secondLevel__olaJq"};n('.headerNav-module_menu__desktop__W7aPN {\n  position: relative;\n  min-width: 345px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 40px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.headerNav-module_menu__item__yoFkY {\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  color: var(--black-100);\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.headerNav-module_menu__link__1xRgq {\n  text-decoration: none;\n  color: var(--black-100);\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n}\n\n.headerNav-module_menu__link__1xRgq:hover {\n  border-bottom: 1px solid var(--black-100);\n  margin-bottom: -1px;\n}\n\n.headerNav-module_menu__dropdown__c-GAL {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  height: 38px;\n  display: none;\n  opacity: 0;\n  padding: 8px 10px 0;\n  grid-auto-flow: column;\n  /*grid-auto-columns: minmax(120px, 1fr);*/\n  /*grid-auto-columns: 280px;*/\n  gap: 30px;\n  justify-items: center;\n  transition: all 0.3s linear;\n  z-index: 1;\n}\n\n/* хак для "студенческой практики */\n.headerNav-module_menu__item__yoFkY:nth-last-child(1) .headerNav-module_menu__dropdown__c-GAL li:nth-last-child(1) {\n  width: 222px;\n}\n\n.headerNav-module_menu__dropdown__c-GAL:last-of-type {\n  padding-right: 0;\n}\n\n.headerNav-module_menu__item__yoFkY:hover .headerNav-module_menu__dropdown__c-GAL {\n  display: grid;\n  opacity: 1;\n}\n\n.headerNav-module_menu__mobileContainer__pgbsW {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  background: var(--bg-orange-light);\n  top: 50px;\n  left: 0;\n  width: 100%;\n  transition: height 0.5s ease-in-out;\n}\n\n.headerNav-module_menu__mobileContainer_open__TWARe {\n  height: calc(100vh - 50px);\n}\n\n.headerNav-module_menu__mobile__y1bwQ {\n  display: flex;\n  flex-direction: column;\n  margin: 24px 12px;\n  padding: 0;\n  width: calc(100% - 24px);\n}\n\n.headerNav-module_menu__mobile_secondLevel__olaJq {\n  margin: 24px 12px;\n  column-width: 48%;\n  column-count: 2;\n  column-gap: 4%;\n  border-bottom: 1px solid var(--logo-gray);\n}\n\n.headerNav-module_menu__mobile__y1bwQ {\n  border-bottom: 1px solid var(--logo-gray);\n}\n\n@media screen and (max-width: 1023px) {\n  .headerNav-module_menu__desktop__W7aPN {\n    min-width: 284px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .headerNav-module_menu__desktop__W7aPN {\n    display: none;\n  }\n\n  .headerNav-module_menu__item__yoFkY {\n    padding: 0;\n    height: fit-content;\n  }\n\n  .headerNav-module_menu__item__yoFkY:not(:last-of-type) {\n    margin-bottom: 28px;\n    margin-right: 0;\n  }\n\n  .headerNav-module_menu__item__yoFkY:last-of-type {\n    padding-bottom: 24px;\n  }\n\n  .headerNav-module_menu__link__1xRgq {\n    padding: 0;\n  }\n}\n');var o=function(n){var t=n.desktop,o=n.open,i=n.main_menu,u=n.onClose,l=o?a.menu__mobile:"".concat(a.menu__mobile," ").concat(a.menu__mobile_open),d=o?"".concat(a.menu__mobileContainer," ").concat(a.menu__mobileContainer_open):a.menu__mobileContainer,c=t?a.menu__desktop:l,s=i.filter((function(e){return e.children}));return e.createElement("nav",{className:"".concat(t?"":d," header__nav")},e.createElement("ul",{className:c},i.map((function(n,o){var i;return e.createElement("li",{className:a.menu__item,key:o,onClick:u},e.createElement(r,{url:null!==(i=n.page_slug||n.url)&&void 0!==i?i:"#",className:a.menu__link,target_blank:n.target_blank},n.title),t&&n.children&&n.children.length>0&&e.createElement("ul",{className:a.menu__dropdown},n.children.map((function(n,t){return e.createElement("li",{className:a.menu__dropdownItem,key:t,onClick:u},e.createElement(r,{url:n.page_slug||n.url,className:a.menu__link,target_blank:n.target_blank},n.title))}))))}))),!t&&s.length>0&&e.createElement("ul",{className:"".concat(s.length<=3?c:a.menu__mobile_secondLevel)},s.map((function(n){var t;return null===(t=n.children)||void 0===t?void 0:t.map((function(t,o){var i;return e.createElement("li",{className:a.menu__item,key:o,onClick:u},e.createElement(r,{url:null!==(i=t.page_slug||t.url)&&void 0!==i?i:"#",className:a.menu__link,target_blank:n.target_blank},t.title))}))}))))},i="header-module_header__Tv17b",u="header-module_header_theme_dark__Ayzki",l="header-module_header_theme_white__PrzvC",d="header-module_header__container__Zrvaf",c="header-module_menu__jrOdJ",s="header-module_menu__button__us8Mw",_="header-module_header__links__CPECR",m="header-module_link__LCb6T",h="header-module_header__logo__Gr7PH",f="header-module_header__eusp__vEB48";n(".header-module_header__Tv17b {\n  min-width: 320px;\n  position: relative;\n  background-color: var(--bg-orange-lightest);\n  z-index: 9;\n  min-height: 50px;\n}\n\n.header-module_header_theme_dark__Ayzki {\n  background-color: var(--bg-orange-light);\n}\n.header-module_header_theme_white__PrzvC {\n  background-color: var(--bg-white);\n}\n\n.header-module_header_theme_white__PrzvC nav {\n  background-color: var(--bg-white);\n}\n\n@media screen and (max-width: 767px) {\n  .header-module_header__Tv17b {\n    position: sticky;\n    top: 0;\n    font-size: 14px;\n  }\n}\n\n.header-module_header__container__Zrvaf {\n  max-width: calc(min(1400px, 100% - 40px));\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px var(--bg-orange-light) solid;\n  margin: 0 auto;\n  font: 20px/1.3 var(--font-family-pt-sans);\n}\n\n@media screen and (max-width: 1023px) {\n  .header-module_header__container__Zrvaf {\n    max-width: calc(100% - 32px);\n    font: 14px/18px var(--font-family-pt-sans);\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .header-module_header__container__Zrvaf {\n    max-width: calc(100% - 24px);\n    width: 100vw;\n    height: 48px;\n  }\n}\n\n.header-module_menu__jrOdJ {\n  color: var(--black-100);\n}\n\n.header-module_menu__button__us8Mw {\n  margin-left: auto;\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n.header-module_menu__button__us8Mw:focus {\n  outline: none;\n}\n.header-module_menu__button__us8Mw:hover {\n  opacity: 0.3;\n  transition: opacity 0.3s linear 0s;\n}\n\n@media screen and (min-width: 768px) {\n  .header-module_menu__button__us8Mw {\n    display: none;\n  }\n}\n\n.header-module_header__links__CPECR {\n  display: flex;\n  gap: 20px;\n  height: 24px;\n}\n\n.header-module_link__LCb6T:hover {\n  /*opacity: .3;*/\n  transition: opacity 0.3s linear 0s;\n}\n\n.header-module_header__logo__Gr7PH {\n  max-width: 156px;\n  max-height: 30px;\n}\n\n.header-module_header__eusp__vEB48 {\n  max-width: 98px;\n  background: transparent;\n}\n");var p="https://archive.prozhito.org/",g=function(n){var t=n.logos,r=n.main_menu,a=e.useState(!1),g=a[0],v=a[1],w=function(n){var t=function(e){return"undefined"!=typeof window&&window.matchMedia(e).matches},r=e.useState(t(n)),a=r[0],o=r[1];function i(){o(t(n))}return e.useEffect((function(){var e=window.matchMedia(n);return i(),e.addEventListener("change",i),function(){return e.removeEventListener("change",i)}}),[n]),a}("(min-width: 768px)"),b=function(){var e;return"undefined"!=typeof window?{pathname:(null===(e=window.location)||void 0===e?void 0:e.pathname)||"/"}:{pathname:"/"}}(),y=g?{img:"data:image/svg+xml,%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M17.354%201.354L16.646%200.645996L9%208.293L1.354%200.645996L0.645996%201.354L8.293%209L0.645996%2016.646L1.354%2017.354L9%209.707L16.646%2017.354L17.354%2016.646L9.707%209L17.354%201.354Z%22%20fill%3D%22%23323232%22%2F%3E%3C%2Fsvg%3E",alt:"Закрыть"}:{img:"data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2214%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200V1H16V0H0ZM0%207.5H16V6.5H0V7.5ZM0%2014H16V13H0V14Z%22%20fill%3D%22%23323232%22%2F%3E%3C%2Fsvg%3E",alt:"Открыть"},x=function(){v((function(e){return!e}))};return e.createElement("header",{className:"".concat(!w&&g?"".concat(i," ").concat(u):i," ").concat("/"!==b.pathname?l:null)},e.createElement("div",{className:"".concat(d," ").concat(c)},e.createElement("div",{className:_},t.map((function(n,t){var r,a;return 0===t?e.createElement("a",{href:"/",className:m,key:t},e.createElement("img",{width:300,height:200,src:p+n.icon,alt:null!==(r=n.alt_text)&&void 0!==r?r:"Logo",className:h})):e.createElement("a",{href:"https://eusp.org/",target:"_blank",rel:"noopener noreferrer",className:m,key:t},e.createElement("img",{src:p+n.icon,alt:null!==(a=n.alt_text)&&void 0!==a?a:"Logo",className:f}))}))),e.createElement(o,{desktop:w,open:g,main_menu:r,onClose:x}),!w&&e.createElement("button",{type:"button",className:s,onClick:x},e.createElement("img",{alt:y.alt,src:y.img}))))};function v(e,n,t,r){return new(t||(t=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function u(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,u)}l((r=r.apply(e,n||[])).next())}))}function w(e,n){var t,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(l){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(i=0)),i;)try{if(t=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==u[0]&&2!==u[0])){i=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){i.label=u[1];break}if(6===u[0]&&i.label<a[1]){i.label=a[1],a=u;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(u);break}a[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(e){u=[6,e],r=0}finally{t=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}"function"==typeof SuppressedError&&SuppressedError;var b,y={exports:{}},x={};var E,k={};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?y.exports=function(){if(E)return k;E=1;var n=e,t="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},r=n.useState,a=n.useEffect,o=n.useLayoutEffect,i=n.useDebugValue;function u(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!t(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),l=r({inst:{value:t,getSnapshot:n}}),d=l[0].inst,c=l[1];return o((function(){d.value=t,d.getSnapshot=n,u(d)&&c({inst:d})}),[e,t,n]),a((function(){return u(d)&&c({inst:d}),e((function(){u(d)&&c({inst:d})}))}),[e]),i(t),t};return k.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l,k}():y.exports=(b||(b=1,"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var n=e,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function r(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];!function(e,n,r){var a=t.ReactDebugCurrentFrame.getStackAddendum();""!==a&&(n+="%s",r=r.concat([a]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,o)}("error",e,r)}var a="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},o=n.useState,i=n.useEffect,u=n.useLayoutEffect,l=n.useDebugValue,d=!1,c=!1;function s(e){var n=e.getSnapshot,t=e.value;try{var r=n();return!a(t,r)}catch(e){return!0}}var _="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n,t){return n()}:function(e,t,_){d||void 0!==n.startTransition&&(d=!0,r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var m=t();if(!c){var h=t();a(m,h)||(r("The result of getSnapshot should be cached to avoid an infinite loop"),c=!0)}var f=o({inst:{value:m,getSnapshot:t}}),p=f[0].inst,g=f[1];return u((function(){p.value=m,p.getSnapshot=t,s(p)&&g({inst:p})}),[e,m,t]),i((function(){return s(p)&&g({inst:p}),e((function(){s(p)&&g({inst:p})}))}),[e]),l(m),m},m=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:_;x.useSyncExternalStore=m,"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),x);var L=y.exports;const S=()=>{},O=S(),N=Object,C=e=>e===O,T=e=>"function"==typeof e,R=(e,n)=>({...e,...n}),D=new WeakMap;let A=0;const V=e=>{const n=typeof e,t=e&&e.constructor,r=t==Date;let a,o;if(N(e)!==e||r||t==RegExp)a=r?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(a=D.get(e),a)return a;if(a=++A+"~",D.set(e,a),t==Array){for(a="@",o=0;o<e.length;o++)a+=V(e[o])+",";D.set(e,a)}if(t==N){a="#";const n=N.keys(e).sort();for(;!C(o=n.pop());)C(e[o])||(a+=o+":"+V(e[o])+",");D.set(e,a)}}return a},F=new WeakMap,M={},P={},W="undefined",I=typeof window!=W,G=typeof document!=W,H=(e,n)=>{const t=F.get(e);return[()=>!C(n)&&e.get(n)||M,r=>{if(!C(n)){const a=e.get(n);n in P||(P[n]=a),t[5](n,R(a,r),a||M)}},t[6],()=>!C(n)&&n in P?P[n]:!C(n)&&e.get(n)||M]};let j=!0;const[B,z]=I&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[S,S],Y={isOnline:()=>j,isVisible:()=>{const e=G&&document.visibilityState;return C(e)||"hidden"!==e}},q={initFocus:e=>(G&&document.addEventListener("visibilitychange",e),B("focus",e),()=>{G&&document.removeEventListener("visibilitychange",e),z("focus",e)}),initReconnect:e=>{const n=()=>{j=!0,e()},t=()=>{j=!1};return B("online",n),B("offline",t),()=>{z("online",n),z("offline",t)}}},Z=!e.useId,J=!I||"Deno"in window,K=e=>I&&typeof window.requestAnimationFrame!=W?window.requestAnimationFrame(e):setTimeout(e,1),U=J?e.useEffect:e.useLayoutEffect,$="undefined"!=typeof navigator&&navigator.connection,Q=!J&&$&&(["slow-2g","2g"].includes($.effectiveType)||$.saveData),X=e=>{if(T(e))try{e=e()}catch(n){e=""}const n=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?V(e):"",n]};let ee=0;const ne=()=>++ee;var te=3,re=0,ae=2,oe=1;async function ie(...e){const[n,t,r,a]=e,o=R({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{});let i=o.populateCache;const u=o.rollbackOnError;let l=o.optimisticData;const d=!1!==o.revalidate,c=o.throwOnError;if(T(t)){const e=t,r=[],a=n.keys();for(const t of a)!/^\$(inf|sub)\$/.test(t)&&e(n.get(t)._k)&&r.push(t);return Promise.all(r.map(s))}return s(t);async function s(t){const[a]=X(t);if(!a)return;const[o,s]=H(n,a),[_,m,h,f]=F.get(n),p=()=>{const e=_[a];return d&&(delete h[a],delete f[a],e&&e[0])?e[0](2).then((()=>o().data)):o().data};if(e.length<3)return p();let g,v=r;const w=ne();m[a]=[w,0];const b=!C(l),y=o(),x=y.data,E=y._c,k=C(E)?x:E;if(b&&(l=T(l)?l(k,x):l,s({data:l,_c:k})),T(v))try{v=v(k)}catch(e){g=e}if(v&&T(v.then)){if(v=await v.catch((e=>{g=e})),w!==m[a][0]){if(g)throw g;return v}g&&b&&(e=>"function"==typeof u?u(e):!1!==u)(g)&&(i=!0,s({data:k,_c:O}))}if(i&&!g)if(T(i)){const e=i(v,k);s({data:e,error:O,_c:O})}else s({data:v,error:O,_c:O});if(m[a][1]=ne(),Promise.resolve(p()).then((()=>{s({_c:O})})),!g)return v;if(c)throw g}}const ue=(e,n)=>{for(const t in e)e[t][0]&&e[t][0](n)},[le,de]=((e,n)=>{if(!F.has(e)){const t=R(q,n),r={},a=ie.bind(O,e);let o=S;const i={},u=(e,n)=>{const t=i[e]||[];return i[e]=t,t.push(n),()=>t.splice(t.indexOf(n),1)},l=(n,t,r)=>{e.set(n,t);const a=i[n];if(a)for(const e of a)e(t,r)},d=()=>{if(!F.has(e)&&(F.set(e,[r,{},{},{},a,l,u]),!J)){const n=t.initFocus(setTimeout.bind(O,ue.bind(O,r,0))),a=t.initReconnect(setTimeout.bind(O,ue.bind(O,r,1)));o=()=>{n&&n(),a&&a(),F.delete(e)}}};return d(),[e,a,d,o]}return[e,F.get(e)[4]]})(new Map),ce=R({onLoadingSlow:S,onSuccess:S,onError:S,onErrorRetry:(e,n,t,r,a)=>{const o=t.errorRetryCount,i=a.retryCount,u=~~((Math.random()+.5)*(1<<(i<8?i:8)))*t.errorRetryInterval;!C(o)&&i>o||setTimeout(r,u,a)},onDiscarded:S,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Q?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:Q?5e3:3e3,compare:(e,n)=>V(e)==V(n),isPaused:()=>!1,cache:le,mutate:de,fallback:{}},Y),se=e.createContext({}),_e=I&&window.__SWR_DEVTOOLS_USE__,me=_e?window.__SWR_DEVTOOLS_USE__:[],he=me.concat((e=>(n,t,r)=>e(n,t&&((...e)=>{const[r]=X(n),[,,,a]=F.get(le);if(r.startsWith("$inf$"))return t(...e);const o=a[r];return C(o)?t(...e):(delete a[r],o)}),r)));_e&&(window.__SWR_DEVTOOLS_REACT__=e);const fe=e.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((n=>{e.status="fulfilled",e.value=n}),(n=>{e.status="rejected",e.reason=n})),e)}),pe={dedupe:!0},ge=(ve=(n,t,r)=>{const{cache:a,compare:o,suspense:i,fallbackData:u,revalidateOnMount:l,revalidateIfStale:d,refreshInterval:c,refreshWhenHidden:s,refreshWhenOffline:_,keepPreviousData:m}=r,[h,f,p,g]=F.get(a),[v,w]=X(n),b=e.useRef(!1),y=e.useRef(!1),x=e.useRef(v),E=e.useRef(t),k=e.useRef(r),S=()=>k.current,N=()=>S().isVisible()&&S().isOnline(),[D,A,V,M]=H(a,v),P=e.useRef({}).current,W=C(u)?r.fallback[v]:u,I=(e,n)=>{for(const t in P){const r=t;if("data"===r){if(!o(e[r],n[r])){if(!C(e[r]))return!1;if(!o(ee,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},G=e.useMemo((()=>{const e=!!v&&!!t&&(C(l)?!S().isPaused()&&!i&&(!!C(d)||d):l),n=n=>{const t=R(n);return delete t._k,e?{isValidating:!0,isLoading:!0,...t}:t},r=D(),a=M(),o=n(r),u=r===a?o:n(a);let c=o;return[()=>{const e=n(D());return I(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},()=>u]}),[a,v]),j=L.useSyncExternalStore(e.useCallback((e=>V(v,((n,t)=>{I(t,n)||e()}))),[a,v]),G[0],G[1]),B=!b.current,z=h[v]&&h[v].length>0,Y=j.data,q=C(Y)?W:Y,$=j.error,Q=e.useRef(q),ee=m?C(Y)?Q.current:Y:q,ue=!(z&&!C($))&&(B&&!C(l)?l:!S().isPaused()&&(i?!C(q)&&d:C(q)||d)),le=!!(v&&t&&B&&ue),de=C(j.isValidating)?le:j.isValidating,ce=C(j.isLoading)?le:j.isLoading,se=e.useCallback((async e=>{const n=E.current;if(!v||!n||y.current||S().isPaused())return!1;let t,a,i=!0;const u=e||{},l=!p[v]||!u.dedupe,d=()=>Z?!y.current&&v===x.current&&b.current:v===x.current,c={isValidating:!1,isLoading:!1},s=()=>{A(c)},_=()=>{const e=p[v];e&&e[1]===a&&delete p[v]},m={isValidating:!0};C(D().data)&&(m.isLoading=!0);try{if(l&&(A(m),r.loadingTimeout&&C(D().data)&&setTimeout((()=>{i&&d()&&S().onLoadingSlow(v,r)}),r.loadingTimeout),p[v]=[n(w),ne()]),[t,a]=p[v],t=await t,l&&setTimeout(_,r.dedupingInterval),!p[v]||p[v][1]!==a)return l&&d()&&S().onDiscarded(v),!1;c.error=O;const e=f[v];if(!C(e)&&(a<=e[0]||a<=e[1]||0===e[1]))return s(),l&&d()&&S().onDiscarded(v),!1;const u=D().data;c.data=o(u,t)?u:t,l&&d()&&S().onSuccess(t,v,r)}catch(e){_();const n=S(),{shouldRetryOnError:t}=n;n.isPaused()||(c.error=e,l&&d()&&(n.onError(e,v,n),(!0===t||T(t)&&t(e))&&N()&&n.onErrorRetry(e,v,n,(e=>{const n=h[v];n&&n[0]&&n[0](te,e)}),{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return i=!1,s(),!0}),[v,a]),_e=e.useCallback(((...e)=>ie(a,x.current,...e)),[]);if(U((()=>{E.current=t,k.current=r,C(Y)||(Q.current=Y)})),U((()=>{if(!v)return;const e=se.bind(O,pe);let n=0;const t=((e,n,t)=>{const r=n[e]||(n[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}})(v,h,((t,r={})=>{if(t==re){const t=Date.now();S().revalidateOnFocus&&t>n&&N()&&(n=t+S().focusThrottleInterval,e())}else if(t==oe)S().revalidateOnReconnect&&N()&&e();else{if(t==ae)return se();if(t==te)return se(r)}}));return y.current=!1,x.current=v,b.current=!0,A({_k:w}),ue&&(C(q)||J?e():K(e)),()=>{y.current=!0,t()}}),[v]),U((()=>{let e;function n(){const n=T(c)?c(D().data):c;n&&-1!==e&&(e=setTimeout(t,n))}function t(){D().error||!s&&!S().isVisible()||!_&&!S().isOnline()?n():se(pe).then(n)}return n(),()=>{e&&(clearTimeout(e),e=-1)}}),[c,s,_,v]),e.useDebugValue(ee),i&&C(q)&&v){if(!Z&&J)throw new Error("Fallback data is required when using suspense in SSR.");E.current=t,k.current=r,y.current=!1;const e=g[v];if(!C(e)){const n=_e(e);fe(n)}if(!C($))throw $;{const e=se(pe);C(ee)||(e.status="fulfilled",e.value=!0),fe(e)}}return{mutate:_e,get data(){return P.data=!0,ee},get error(){return P.error=!0,$},get isValidating(){return P.isValidating=!0,de},get isLoading(){return P.isLoading=!0,ce}}},function(...n){const t=R(ce,e.useContext(se)),[r,a,o]=(e=>T(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}])(n),i=((e,n)=>{const t=R(e,n);if(n){const{use:r,fallback:a}=e,{use:o,fallback:i}=n;r&&o&&(t.use=r.concat(o)),a&&i&&(t.fallback=R(a,i))}return t})(t,o);let u=ve;const{use:l}=i,d=(l||[]).concat(he);for(let e=d.length;e--;)u=d[e](u);return u(r,a||i.fetcher||null,i)});var ve;function we(e,n){return v(this,void 0,void 0,(function(){return w(this,(function(t){switch(t.label){case 0:return[4,fetch(e,n)];case 1:return[2,t.sent().json()]}}))}))}exports.ProzhitoHeader=function(){var n=ge("https://archive.prozhito.org/api/landing/context/",we),t=n.data,r=n.error,a=n.isLoading;return e.useEffect((function(){if(!a&&(r||!t))throw new Error("500")}),[a]),t?e.createElement(g,{logos:t.logos,main_menu:t.main_menu}):e.createElement("header",null)};
//# sourceMappingURL=index.js.map
