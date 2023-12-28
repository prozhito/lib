"use strict";var e=require("tslib"),n=require("react"),t=require("react-dom"),r=require("next/headers");function o(e,n,{insertAt:t}={}){if(!e)return;if("undefined"==typeof document){globalThis.__ssr_css=globalThis.__ssr_css||[];return void(globalThis.__ssr_css.reduce(((e,n)=>({...e,[n.id]:{...n}})),{})[n]||globalThis.__ssr_css.push({css:e,id:n}))}if(document.getElementById(n))return;const r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.id=n,o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}var a="-module_menu__pNyRa",i="-module_menu__item__Bi-9G",l="-module_menu__dropdown__acppo",s="-module_menu__dropdown_bg__EYfC8",c="-module_menu__container__qxeOv",u="-module_menu_open__JnnO7",d="-module_menu__button__FGsc3";function _(e){return e?e.startsWith("http")?e:"https://prozhito.org/page/".concat(e):"#"}o(".-module_menu__pNyRa {\n  position: relative;\n  display: flex;\n  align-items: center;\n  column-gap: 3em;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.-module_menu__item__Bi-9G {\n  position: relative;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n.-module_menu__item__Bi-9G a {\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n  height: 100%;\n}\n.-module_menu__item__Bi-9G::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: var(--color90, #323232);\n  bottom: -1px;\n  transform: scaleX(0);\n  transition: transform 0.25s ease-in-out;\n}\n.-module_menu__item__Bi-9G:hover::before {\n  transform: scaleX(1);\n}\n\n.-module_menu__dropdown__acppo {\n  position: absolute;\n  list-style: none;\n  top: 50px;\n  right: 0;\n  display: none;\n  grid-auto-flow: column;\n  gap: 3em;\n  justify-items: center;\n  z-index: 1;\n  white-space: nowrap;\n}\n.-module_menu__dropdown__acppo:last-of-type {\n  padding-right: 0;\n}\n@media screen and (min-width: 801px) {\n  .-module_menu__item__Bi-9G:hover .-module_menu__dropdown__acppo {\n    display: grid;\n  }\n}\n\n.-module_menu__dropdown_bg__EYfC8 {\n  display: none;\n  position: absolute;\n  top: 51px;\n  left: 1rem;\n  height: 49px;\n  width: 100%;\n  max-width: calc(min(1400px, 100% - 2rem));\n  background-color: inherit;\n  border-bottom: 1px var(--color30, #e7e4de) solid;\n}\n@media screen and (min-width: 801px) {\n  .-module_menu__pNyRa:hover ~ .-module_menu__dropdown_bg__EYfC8 {\n    display: block;\n  }\n}\n\n.-module_menu__container__qxeOv {\n  background-color: inherit;\n  margin-left: 1rem;\n}\n\n.-module_menu_open__JnnO7 {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  top: 51px;\n  left: 0;\n  width: 100%;\n  height: calc(100dvh - 51px);\n}\n.-module_menu__container__qxeOv.-module_open__F5j3O > .-module_menu__pNyRa {\n  display: flex;\n}\n\n@media screen and (min-width: 801px) {\n  .-module_menu__container__qxeOv ul:nth-child(2) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .-module_menu__pNyRa {\n    display: none;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 0 1rem;\n    border-bottom: 1px solid var(--color30, #9e9e9e);\n  }\n  .-module_menu__container__qxeOv {\n    margin-left: unset;\n  }\n  .-module_menu__item__Bi-9G::before {\n    bottom: 16px;\n  }\n}\n\n.-module_menu__button__FGsc3 {\n  display: none;\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  padding: 4px;\n  margin-left: 1rem;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n}\n.-module_menu__button__FGsc3:hover {\n  opacity: 0.65;\n}\n@media screen and (max-width: 800px) {\n  .-module_menu__button__FGsc3 {\n    display: block;\n  }\n}\n","style-5578047b-978b-4216-84f7-11fcf8798d80");var m=function(e){var t=e.main_menu,r=t.filter((function(e){return e.children}));return n.createElement("nav",{className:c},n.createElement("ul",{className:a},t.map((function(e,t){return n.createElement("li",{className:i,key:t},n.createElement("a",{href:_(e.page_slug||e.url),target:e.target_blank?"_blank":"_self",rel:e.target_blank?"noopener noreferrer":void 0},e.title),e.children&&e.children.length>0&&n.createElement("ul",{className:l},e.children.map((function(e,t){return n.createElement("li",{className:i,key:t},n.createElement("a",{href:_(e.page_slug||e.url),target:e.target_blank?"_blank":"_self",rel:e.target_blank?"noopener noreferrer":void 0},e.title))}))))}))),r.length>0&&n.createElement("ul",{className:a},r.map((function(e){var t;return null===(t=e.children)||void 0===t?void 0:t.map((function(t,r){return n.createElement("li",{className:i,key:r},n.createElement("a",{href:_(t.page_slug||t.url),target:e.target_blank?"_blank":"_self",rel:e.target_blank?"noopener noreferrer":void 0},t.title))}))}))),n.createElement("div",{className:s}))},C=function(e){var n=86400*e;return new Date(Date.now()+1e3*n).toUTCString()},p=function(e){var n=Object.keys(e).reduce((function(n,t){return n+"".concat(t,"=").concat(e[t],";")}),"");"undefined"!=typeof document&&(document.cookie=n)},h=function(e){return"undefined"!=typeof document?document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat(e,"\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1"):""},f=function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var t,r,o;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),t={status:0,error:""},[4,fetch("https://dev.archive.prozhito.org/api/auth/current/",{method:"GET",headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){if(200!==e.status){t.status=e.status,t.error=e.statusText;var n=e.headers.get("content-type");if(n&&n.includes("application/json"))return e.json()}return e.json()})).catch((function(e){t.error=e.message}))];case 1:return r=e.sent(),t.error?[2,{error:r.detail||t.error}]:[2,{user:r}];case 2:return[2,{error:(o=e.sent())instanceof Error?o.message:"unknown"}];case 3:return[2]}}))}))},g=function(n,t){return e.__awaiter(void 0,void 0,void 0,(function(){var r,o,a;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),r={status:0,error:""},[4,fetch("".concat("https://dev.archive.prozhito.org/api/auth/").concat(n,"/"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status){r.status=e.status,r.error=e.statusText;var n=e.headers.get("content-type");if(n&&n.includes("application/json"))return e.json()}return e.json()})).catch((function(e){r.error=e.message}))];case 1:return o=e.sent(),r.error?[2,{error:o.detail||r.error}]:[2,o];case 2:return[2,{error:(a=e.sent())instanceof Error?a.message:"unknown"}];case 3:return[2]}}))}))},v=function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var t,r;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,g("refresh",{refresh:n})];case 1:return(t=e.sent()).error?[2,t]:(r=t.access)?(p({access:r,expires:C(1),samesite:"lax"}),[2,{access:r}]):[2,{error:"No token"}]}}))}))},x=function(n,t){return void 0===n&&(n=""),void 0===t&&(t=""),e.__awaiter(void 0,void 0,void 0,(function(){var r,o;return e.__generator(this,(function(e){switch(e.label){case 0:return n||"undefined"==typeof window||(n=h("access")),console.log("have Token:",!!n),n?[4,f(n)]:[3,2];case 1:if(!(o=e.sent()).error)return[2,o];e.label=2;case 2:return t||"undefined"==typeof window||(t=h("refresh")),console.log("have Refresh:",!!t),t?[4,v(t)]:[3,5];case 3:return r=e.sent().access,console.log("new Token:",!!r),r?[4,f(r)]:[3,5];case 4:if(!(o=e.sent()).error)return[2,o];e.label=5;case 5:return[2,{error:"No token"}]}}))}))},D=function(){function n(e){if(this._user=null,this._loading=!1,this._error="",e&&n._updateCallback.push(e),n._instance)return n._instance;n._instance=this,this.auth=this.auth.bind(this),this.login=this.login.bind(this),this.info=this.info.bind(this),this.logout=this.logout.bind(this)}return Object.defineProperty(n.prototype,"user",{set:function(n){this._user=e.__assign({},n)},enumerable:!1,configurable:!0}),n.prototype.emitUpdate=function(){n._updateCallback.forEach((function(e){e&&e()}))},n.prototype.auth=function(n,t){return void 0===n&&(n=""),void 0===t&&(t=""),e.__awaiter(this,void 0,void 0,(function(){var r=this;return e.__generator(this,(function(o){return this._loading=!0,this._error="",this._user=null,this.emitUpdate(),[2,x(n,t).then((function(n){return n&&n.error?r._error=n.error:r._user=e.__assign({},n.user),r._loading=!1,r.emitUpdate(),n}))]}))}))},n.prototype.login=function(n){var t=this;this._loading=!0,this._error="",this._user=null,this.emitUpdate(),function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var t,r,o;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,g("login",n)];case 1:return(t=e.sent()).error||(r=t.access,o=t.refresh,r&&p({access:r,expires:C(1),samesite:"lax"}),o&&p({refresh:o,expires:C(60),samesite:"lax"})),[2,t]}}))}))}(n).then((function(n){n&&n.error?t._error=n.error:t._user=e.__assign({},n.user),t._loading=!1,t.emitUpdate()}))},n.prototype.logout=function(){console.log("logout"),"undefined"!=typeof document&&(document.cookie="access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="refresh= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),this._error="",this._user=null,this.emitUpdate()},n.prototype.info=function(){return{loading:this._loading,error:this._error,user:this._user}},n._updateCallback=[],n}(),b="-module_modal__outer__fSgYf",y="-module_modal__outer_hidden__lPz5Y",E="-module_modal__wrapper__ipKUU",w="-module_modal__inner__bpH-p",F="-module_modal__close__YJO6L",k="-module_form__login__hjJ6e",A="-module_user__info_container__erDJP";o(".-module_modal__outer__fSgYf {\n  z-index: 900;\n  position: fixed;\n  width: 100dvw;\n  height: 100dvh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.-module_modal__outer_hidden__lPz5Y {\n  display: none;\n}\n\n.-module_modal__wrapper__ipKUU {\n  position: relative;\n  background-color: var(--color15, #fff);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.75rem;\n  width: 100%;\n  max-width: 25rem;\n  padding: 1rem;\n  margin: 1rem;\n}\n\n.-module_modal__inner__bpH-p {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 1rem;\n  font-size: 1rem;\n  width: 100%;\n}\n\n.-module_modal__close__YJO6L {\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0.75rem;\n  top: 0.75rem;\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n}\n.-module_modal__close__YJO6L:hover {\n  opacity: 0.6;\n}\n.-module_modal__close__YJO6L svg {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n\n.-module_form__login__hjJ6e {\n  max-width: 25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.-module_form__login__hjJ6e p {\n  margin-left: 1rem;\n}\n\n.-module_user__info_container__erDJP {\n  width: 100%;\n}\n","style-1db14302-4896-483c-a562-d8f4b7eb2522");var N="-module_form__input_container__yNp2C",B="-module_form__input__Q-hWK",L="-module_form__valid__ADHZ7",j="-module_form__input_label__wJEkg";o(".-module_form__input_container__yNp2C {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.75rem;\n  padding: 0 1.75rem 0 1rem;\n  height: 3rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 0.5rem;\n  border: 1px solid var(--color30);\n  background-color: var(--color15);\n  color: var(--color100);\n}\n\n.-module_form__input__Q-hWK {\n  outline: none;\n  border: none;\n  width: 100%;\n  margin-top: 1rem;\n  padding: 0;\n  color: inherit;\n  -webkit-text-fill-color: var(--color100);\n  background-color: inherit;\n}\n\n.-module_form__input__Q-hWK:valid ~ .-module_form__valid__ADHZ7 {\n  display: block;\n}\n\n.-module_form__valid__ADHZ7 {\n  display: none;\n  position: absolute;\n  color: green;\n  top: 0.75rem;\n  right: 0.75rem;\n}\n\n.-module_form__input_label__wJEkg {\n  position: absolute;\n  pointer-events: none;\n  left: 1rem;\n  top: 0.75rem;\n  transition: 0.3s ease all;\n  color: inherit;\n  opacity: 0.7;\n}\n\n.-module_form__input__Q-hWK:focus ~ .-module_form__input_label__wJEkg {\n  font-size: 0.8rem;\n  top: 0;\n}\n.-module_form__input__Q-hWK:not(:placeholder-shown) ~ .-module_form__input_label__wJEkg {\n  font-size: 0.8rem;\n  top: 0;\n}\n","style-43037110-864d-4bc4-a2a1-6b9b28916205");var T=function(e){var t=e.name,r=e.type,o=e.placeholder,a=void 0===o?"":o;return n.createElement("div",{className:N},n.createElement("input",{className:B,type:r,name:t,id:"form_".concat(t),placeholder:"",minLength:8,maxLength:28,required:!0}),n.createElement("label",{className:j,htmlFor:"form_".concat(t)},a),n.createElement("span",{className:L},"✔"))},M="-module_spinner26__sZPHQ";o(".-module_spinner26__sZPHQ {\n  fill: none;\n  border-radius: 50%;\n  animation: -module_rotate-keyframes__DN9kg 1s linear infinite;\n}\n.-module_spinner26__sZPHQ path {\n  stroke: var(--color80);\n  stroke-width: 4px;\n}\n.-module_spinner26__sZPHQ circle {\n  stroke: var(--color80);\n  stroke-width: 4px;\n  opacity: 0.5;\n}\n@keyframes -module_rotate-keyframes__DN9kg {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n","style-d69fb896-c19a-48fa-841b-402cdecd53a4");var z=function(e){var t=e.size,r=void 0===t?16:t;return n.createElement("svg",{width:r,height:r,viewBox:"0 0 26 26",className:M,xmlns:"http://www.w3.org/2000/svg"},n.createElement("circle",{cx:"13",cy:"13",r:"11"}),n.createElement("path",{d:"m24,13c0-6.08-4.92-11-11-11"}),n.createElement("path",{d:"m10.53,2.29C6.44,3.23,3.23,6.44,2.29,10.53"}),n.createElement("path",{d:"m2,13c0,2.11.61,4.08,1.64,5.76"}))},S="-module_form__submit__bHR5L";o(".-module_form__submit__bHR5L {\n  align-self: center;\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  height: 2.5rem;\n  padding: 0 1.5rem;\n  column-gap: 0.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid var(--color30);\n  background-color: var(--color15);\n  color: var(--color100);\n  outline: none;\n  transition: border, background-color 0.25s linear;\n  cursor: pointer;\n}\n.-module_form__submit__bHR5L:focus {\n  outline: none;\n}\n.-module_form__submit__bHR5L:hover {\n  border: 1px solid var(--color20);\n  background-color: var(--color20);\n}\n","style-3d4a2465-e4b5-4873-bb33-c05ac0bc1072");var U=function(e){var t=e.children,r=e.disabled;return n.createElement("button",{className:S,type:"submit",disabled:r},r?n.createElement(n.Fragment,null,n.createElement(z,null),n.createElement("span",null,"Loading...")):t)},H="-module_button__base__CjXIc";o(".-module_button__base__CjXIc {\n  align-self: center;\n  margin-top: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid var(--color30);\n  background-color: var(--color15);\n  color: var(--color100);\n  outline: none;\n  transition: border, background-color 0.25s linear;\n  cursor: pointer;\n}\n.-module_button__base__CjXIc:focus {\n  outline: none;\n}\n.-module_button__base__CjXIc:hover {\n  border: 1px solid var(--color20);\n  background-color: var(--color20);\n}\n","style-656e5745-2603-4464-bbf2-39d7a8fa16c2");var J=function(e){var t=e.children,r=e.onClick;return n.createElement("button",{className:H,onClick:r},t)},O=function(e){var t=e.loading,r=e.error,o=e.user,a=e.login,i=e.logout,l=e.visible,s=e.closeModal;return n.createElement("div",{className:l?b:y,onClick:function(e){l&&(e.target===e.currentTarget&&(e.preventDefault(),s()))}},n.createElement("div",{className:E},n.createElement("div",{className:F,onClick:s},n.createElement("svg",{viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},n.createElement("line",{stroke:"currentColor",x1:"3",y1:"3",x2:"15",y2:"15"}),n.createElement("line",{stroke:"currentColor",x1:"3",y1:"15",x2:"15",y2:"3"}))),n.createElement("div",{className:w},!o&&n.createElement(n.Fragment,null,n.createElement("h1",null,"Sign in"),n.createElement("form",{onSubmit:function(e){var n,t,r=new FormData(e.currentTarget),o={email:(null===(n=r.get("email"))||void 0===n?void 0:n.toString())||"",password:(null===(t=r.get("password"))||void 0===t?void 0:t.toString())||""};a(o),e.preventDefault()},className:k},n.createElement(T,{type:"email",name:"email",placeholder:"email"}),n.createElement(T,{type:"password",name:"password",placeholder:"password"}),r&&n.createElement("p",null,"Error: ",r),n.createElement(U,{disabled:t},"Login"))),o&&n.createElement(n.Fragment,null,n.createElement("h1",null,"User info"),n.createElement("div",{className:A},Object.keys(o).map((function(e){return n.createElement("p",{key:e},e,": ",o[e])}))),n.createElement(J,{onClick:i},"Log out"),n.createElement(J,{onClick:function(){document.cookie="access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT","undefined"!=typeof window&&window.location.reload()}},"Kill token")))))},R="-module_user__menu__CFrMU";o(".-module_user__menu__CFrMU {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  margin-left: 1rem;\n  border-radius: 50%;\n  background-color: var(--color30, gray);\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n}\n.-module_user__menu__CFrMU:hover {\n  opacity: 0.65;\n}\n","style-783318f7-aa4d-4d36-91b5-9c494c815cc6");var G=function(r){var o=r.user_data,a=n.useState(!1),i=a[0],l=a[1],s=n.useState(!1),c=s[0],u=s[1],d=function(){var t=n.useMemo((function(){return new D}),[]),r=n.useState(e.__assign(e.__assign({},t.info()),{setUser:function(e){e&&(t.user=e,i())},login:t.login,logout:t.logout})),o=r[0],a=r[1],i=n.useCallback((function(){a((function(n){return e.__assign(e.__assign({},n),t.info())}))}),[]);return n.useEffect((function(){new D(i)}),[]),o}(),_=d.loading,m=d.error,C=d.user,p=d.setUser,h=d.login,f=d.logout;return n.useEffect((function(){o&&o.user&&p(o.user),l(!0)}),[]),n.createElement(n.Fragment,null,n.createElement("div",{className:R,onClick:function(){return u(!0)}},C?function(e){return"".concat(e.first_name.charAt(0)).concat(e.last_name.charAt(0))}(C):n.createElement("img",{src:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%2226%22%20viewBox%3D%220%200%2026%2026%22%3E%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%2213%22%20cy%3D%227.75%22%20r%3D%225.25%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22m4.38%2C19.98c.86-3.67%2C4.45-5.67%2C8.16-5.67h.93c3.72%2C0%2C7.31%2C2%2C8.16%2C5.67.16.71.3%2C1.45.37%2C2.21.07.72-.51%2C1.31-1.23%2C1.31H5.23c-.71%2C0-1.3-.59-1.23-1.31.07-.76.21-1.5.37-2.21Z%22%2F%3E%3C%2Fsvg%3E"})),"undefined"!=typeof window&&i&&t.createPortal(n.createElement(O,{loading:_,error:m,user:C,login:h,logout:f,visible:c,closeModal:function(){return u(!1)}}),document.body))},P=function(){var e=function(){var e=n.useState(null),t=e[0],r=e[1];return n.useEffect((function(){var e=new D((function(){r((new D).info().user),console.log("update")}));r(e.info().user)}),[]),t}();return e?Object.keys(e).map((function(t){return n.createElement("p",{key:t},t,": ",e[t])})):n.createElement("p",null,"No data")},q="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cline%20stroke%3D%22%23000%22%20y1%3D%224%22%20x2%3D%2218%22%20y2%3D%224%22%2F%3E%3Cline%20stroke%3D%22%23000%22%20y1%3D%229%22%20x2%3D%2218%22%20y2%3D%229%22%2F%3E%3Cline%20stroke%3D%22%23000%22%20y1%3D%2214%22%20x2%3D%2218%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E",Y=function(e){var n=document.querySelector("nav");n&&(n.classList.toggle(u,e),[n.children[0],n.children[1]].forEach((function(n){e?n.style.display="flex":n.removeAttribute("style")})),e?n.addEventListener("click",Q):n.removeEventListener("click",Q),e&&window.matchMedia("(max-width: 800px)").addEventListener("change",Z));var t=document.getElementById("menu_button");if(t){var r=t.firstElementChild;r&&(r.src=e?"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cline%20stroke%3D%22%23000%22%20x1%3D%223%22%20y1%3D%223%22%20x2%3D%2215%22%20y2%3D%2215%22%2F%3E%3Cline%20stroke%3D%22%23000%22%20x1%3D%223%22%20y1%3D%2215%22%20x2%3D%2215%22%20y2%3D%223%22%2F%3E%3C%2Fsvg%3E":q)}},Z=function(e){if(!e.matches){var n=e.currentTarget;n&&n instanceof MediaQueryList&&n.removeEventListener("change",Z),Y(!1)}},Q=function(){Y(!1)},I=function(){var e=document.querySelector("nav"),n=null==e?void 0:e.classList.contains(u);Y(!n)},K=function(){return n.createElement("div",{id:"menu_button",className:d,onClick:I},n.createElement("img",{src:q,alt:"menu"}))},W="-module_header__ARLMb",X="-module_header__container__MmNV2",$="-module_header__buttons__Zjbxd",V="-module_header__links__1j1Nu";o(".-module_header__ARLMb {\n  max-width: 100dvw;\n  position: relative;\n  background-color: var(--color00, #fff);\n  font-family: var(--font-family-pt-sans, 'PT Sans', Arial, sans-serif);\n  font-size: 20px;\n  z-index: 9;\n}\n\n@media screen and (max-width: 1160px) {\n  .-module_header__ARLMb {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .-module_header__ARLMb {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .-module_header__ARLMb {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-module_header__ARLMb {\n    position: sticky;\n    top: 0;\n  }\n}\n\n.-module_header__container__MmNV2 {\n  max-width: calc(min(1400px, 100% - 2rem));\n  height: 50px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px var(--color30, #e7e4de) solid;\n  margin: 0 auto;\n  color: var(--color100, #323232);\n  background-color: inherit;\n}\n\n.-module_header__buttons__Zjbxd {\n  display: flex;\n}\n\n.-module_header__links__1j1Nu {\n  display: flex;\n  max-height: 30px;\n  max-width: 277.6px;\n  justify-content: space-between;\n  margin-right: auto;\n}\n.-module_header__links__1j1Nu img {\n  height: 100%;\n  width: 100%;\n}\n.-module_header__links__1j1Nu a:nth-child(1) {\n  flex-basis: 156px;\n}\n.-module_header__links__1j1Nu a:nth-child(2) {\n  flex-basis: 101.6px;\n}\n","style-bcc21d89-61a1-4ade-9e5a-ce564eaeeabe");var ee=function(e){var t=e.user_data,r=e.main_menu,o=void 0===r?[]:r,a=e.account,i=void 0!==a&&a;return n.createElement("header",{className:W},n.createElement("div",{className:X},n.createElement("div",{className:V},n.createElement("a",{href:"/"},n.createElement("img",{src:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20315.6%2060.9%22%20style%3D%22enable-background%3Anew%200%200%20315.6%2060.9%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23666665%3B%7D%20.st1%7Bfill%3A%23E4653F%3B%7D%20.st2%7Bfill%3Anone%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M62.5%2C10.9L66.2%2C0h-36C8.3%2C0.1%2C0%2C5.6%2C0%2C16.8c0%2C2.8%2C0.6%2C5.9%2C1.8%2C9.1l10.8-2.6c-0.5-1.7-0.7-3.2-0.7-4.6%20%20c0-5%2C2.3-7%2C6.8-7.5l-6.5%2C36.7h13.4L32.1%2C11h8.4l-6.4%2C36.9h13.4l6.4-37H62.5z%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M84.5%2C37.6c0-0.4%2C0.1-1.1%2C0.3-2.5l1.2-7.4c0.1-0.8%2C0.2-1.5%2C0.2-2.5c0-4.5-3.3-7.6-8.4-7.6%20%20c-4.5%2C0-7.6%2C2.2-9%2C6.8l-0.6-6H57.8l-7.5%2C42.6h12.8L68%2C33.5c0.8-4.4%2C1.6-5.9%2C3.3-5.9c1.2%2C0%2C1.6%2C0.7%2C1.6%2C1.8c0%2C0.4-0.1%2C0.9-0.1%2C1.4%20%20l-1.2%2C7.3c-0.1%2C0.8-0.3%2C1.9-0.3%2C2.8c0%2C4.5%2C2.3%2C7.5%2C7.7%2C7.5c2.8%2C0%2C5.6-0.6%2C7-1.4l1.8-8.8c-0.7%2C0.3-1.4%2C0.6-2.1%2C0.6%20%20C84.8%2C38.8%2C84.5%2C38.3%2C84.5%2C37.6%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M104.9%2C39.4c-1.9%2C0-2.8-1.4-2.8-3.6c0-4.3%2C1.5-8.6%2C4.2-8.6c1.9%2C0%2C2.8%2C1.4%2C2.8%2C3.6%20%20C109%2C35%2C107.5%2C39.4%2C104.9%2C39.4%20M107.2%2C17.7c-11.8%2C0-17.8%2C7.5-17.8%2C17.9c0%2C8.4%2C6.3%2C13.2%2C14.5%2C13.2c11.8%2C0%2C17.8-7.5%2C17.8-18%20%20C121.7%2C22.4%2C115.4%2C17.7%2C107.2%2C17.7%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M171.6%2C39.3c-1.3%2C0-1.9-1.4-1.9-3.3c0-3.6%2C2-8.9%2C4.4-8.9c1%2C0%2C1.9%2C0.4%2C2.6%2C1.4l5.8-7.8c-2.8-2.3-5.8-3-8.6-3%20%20c-6%2C0-11.6%2C4.5-14%2C11h-2.1l1.9-10.2H147l-1.9%2C10.2h-2.2c-0.1-6-3.3-11-9.9-11c-2%2C0-6.7%2C0.3-10.2%2C4.2l3.8%2C7.4c0.6-0.9%2C1.9-2%2C3.2-2%20%20c1.3%2C0%2C2%2C1.4%2C2%2C3.3c0%2C3.6-2.1%2C8.9-4.4%2C8.9c-1%2C0-1.9-0.4-2.6-1.4l-5.8%2C7.8c2.8%2C2.3%2C5.8%2C3%2C8.6%2C3c6%2C0%2C11.3-4.4%2C13.9-11.3h2.1L141.7%2C48%20%20h12.5l1.9-10.6h2c0.4%2C6%2C3.5%2C11.3%2C10.2%2C11.3c2%2C0%2C6.7-0.3%2C10.2-4.2l-3.8-7.4C174.2%2C38.1%2C172.8%2C39.3%2C171.6%2C39.3%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M214.7%2C18.5h-12.8l-2.5%2C14.5c-0.8%2C4.4-1.9%2C5.9-3.6%2C5.9c-1.2%2C0-1.6-0.7-1.6-1.7c0-0.4%2C0.1-1.2%2C0.3-2.2l2.8-16.4%20%20h-12.7l-3.3%2C18.8c-0.3%2C1.7-0.3%2C2.4-0.3%2C3.8c0%2C4.8%2C3.2%2C7.7%2C8%2C7.7c4.9%2C0%2C8.4-1.8%2C9.9-6.4c0.4%2C3.7%2C2.3%2C6.1%2C7.1%2C6.1%20%20c2.8%2C0%2C5.6-0.6%2C7-1.4l1.8-8.8c-0.7%2C0.3-1.4%2C0.6-2.1%2C0.6c-0.8%2C0-1.1-0.4-1.1-1.2c0-0.4%2C0.1-1.1%2C0.3-2.5L214.7%2C18.5z%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M264.2%2C37.7c0-0.4%2C0.1-1.1%2C0.3-2.5l1.2-7.4c0.1-0.8%2C0.2-1.5%2C0.2-2.5c0-4.5-3.3-7.6-8.1-7.6%20%20c-3.9%2C0-7.8%2C2.1-9%2C6.5c-0.5-3.9-3.3-6.5-7.7-6.5c-4%2C0-7.7%2C2-8.8%2C6.5l-0.6-5.8h-10.4L216%2C48h12.8l2.7-15.5c0.6-3.8%2C1.5-4.9%2C2.9-4.9%20%20c1.1%2C0%2C1.3%2C0.8%2C1.3%2C1.7c0%2C0.3-0.1%2C0.8-0.1%2C1.3L232.9%2C48h12.9l2.4-15.5c0.6-3.8%2C1.5-4.9%2C2.9-4.9c1.1%2C0%2C1.3%2C0.8%2C1.3%2C1.7%20%20c0%2C0.3-0.1%2C0.8-0.1%2C1.3l-1.2%2C7.5c-0.1%2C0.8-0.3%2C1.9-0.3%2C2.8c0%2C4.5%2C2.3%2C7.5%2C7.7%2C7.5c2.8%2C0%2C5.6-0.6%2C7-1.4l1.8-8.8%20%20c-0.7%2C0.3-1.4%2C0.6-2.1%2C0.6C264.5%2C38.9%2C264.2%2C38.4%2C264.2%2C37.7%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M285%2C39.4c-1.9%2C0-2.8-1.4-2.8-3.6c0-3.8%2C1-8.3%2C4-8.3c1%2C0%2C1.9%2C0.4%2C2.6%2C0.8c0.2%2C1.1%2C0.4%2C2.9%2C0.4%2C3.9%20%20C289.3%2C35.7%2C287.7%2C39.4%2C285%2C39.4%20M313.1%2C19.3l-21.3%2C7.2c2-2.5%2C4.6-5.9%2C4.6-5.9c-1.9-1.5-5.1-2.9-9.1-2.9%20%20c-11.8%2C0-17.8%2C7.5-17.8%2C17.9c0%2C8.4%2C6.3%2C13.2%2C14.5%2C13.2c12%2C0%2C17-9.1%2C17.4-16l14.1-3.3L313.1%2C19.3z%22%2F%3E%3C%2Fg%3E%3Cpolygon%20class%3D%22st1%22%20points%3D%2270.1%2C51.4%2068.4%2C60.9%20301.6%2C60.9%20303.3%2C51.4%20%22%2F%3E%3Cpolygon%20class%3D%22st1%22%20points%3D%2211%2C51.4%209.3%2C60.9%2045.1%2C60.9%2046.7%2C51.4%20%22%2F%3E%3Crect%20x%3D%2233.3%22%20y%3D%2247.9%22%20class%3D%22st2%22%20width%3D%2219%22%20height%3D%223.5%22%2F%3E%3C%2Fsvg%3E",alt:"Logo"})),n.createElement("a",{href:"https://eusp.org/",target:"_blank"},n.createElement("img",{src:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20253.5%2074.86%22%3E%3Cdefs%3E%3Cstyle%3E.b%7Bfill%3A%23fbcd18%3B%7D.b%2C.c%7Bstroke-width%3A0px%3B%7D.c%2C.d%7Bfill%3Agray%3B%7D.e%7Bfill%3A%236b6b6b%3Bstroke%3Agray%3Bstroke-miterlimit%3A10%3B%7D.d%7Bfont-family%3AConsolas%2C%20Consolas%3Bfont-size%3A20px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cline%20class%3D%22e%22%20x1%3D%22.5%22%20y1%3D%222.01%22%20x2%3D%22.5%22%20y2%3D%2268.51%22%2F%3E%3Cline%20class%3D%22e%22%20x1%3D%2220.94%22%20y1%3D%2268.51%22%20x2%3D%2220.94%22%20y2%3D%222.01%22%2F%3E%3Cline%20class%3D%22e%22%20x1%3D%2243.5%22%20y1%3D%222.01%22%20x2%3D%2243.5%22%20y2%3D%2268.51%22%2F%3E%3Cline%20class%3D%22e%22%20x1%3D%2263.17%22%20y1%3D%222.01%22%20x2%3D%2263.17%22%20y2%3D%2268.51%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22m49.47%2C17.7c4.48-.38%2C7.2%2C1.27%2C6.65%2C5.93-.79%2C6.6-.81%2C13.63-3.29%2C19.61-4.78%2C11.51-20.55%2C15.81-32.54%2C9.97-10.57-5.15-14.86-19.11-9.3-30.25%2C3.6-7.21%2C12.43-10.12%2C21.11-6.97%2C6.68%2C2.43%2C9.62%2C8.56%2C7.7%2C16.06-1.69%2C6.59-10.77%2C9.57-15.47%2C4.66-1.54-1.6-2.83-4.71-1.48-7.56.23-.47%2C2.98-1.93%2C3.43-1.56%2C1.27%2C1.04.22%2C4.41%2C3.5%2C5.37%2C1.72.04%2C3.14-1.05%2C3.52-2.25.95-2.96%2C1.36-6.69-2.53-7.97-4.46-1.46-9.23-2.2-12.81%2C2.3l-1.3%2C2.44c-2.15%2C6.53-1.62%2C12.63%2C3.84%2C17.49%2C5.1%2C4.54%2C14.11%2C5.08%2C20.46%2C1.52.74-.42%2C4.31-3.38%2C5.55-6.49%2C2-5%2C1.75-9.09%2C2-11l.97-11.31Z%22%2F%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2880.72%2016.64%29%20scale%281.06%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%95%D0%92%D0%A0%D0%9E%D0%9F%D0%95%D0%98%D0%A1%D0%9A%D0%98%D0%98%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2880.81%2068.81%29%20scale%281.01%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%92%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2894.57%2068.81%29%20scale%281.01%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%A1%D0%90%D0%9D%D0%9A%D0%A2%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%28155.57%2068.81%29%20scale%28.89%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%9F%D0%95%D0%A2%D0%95%D0%A0%D0%91%D0%A3%D0%A0%D0%93%D0%95%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2881.81%2042.81%29%20scale%28.97%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%A3%D0%9D%D0%98%D0%92%D0%95%D0%A0%D0%A1%D0%98%D0%A2%D0%95%D0%A2%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpolygon%20class%3D%22c%22%20points%3D%22205.34%20.01%20202.94%203.38%20204.67%203.38%20207.19%20.01%20205.34%20.01%22%2F%3E%3Cpolygon%20class%3D%22c%22%20points%3D%22158.33%200%20155.93%203.36%20157.66%203.36%20160.18%200%20158.33%200%22%2F%3E%3Cpolygon%20class%3D%22c%22%20points%3D%22152.33%2061%20149.93%2064.36%20151.66%2064.36%20154.18%2061%20152.33%2061%22%2F%3E%3C%2Fsvg%3E",alt:"Logo"}))),n.createElement(m,{main_menu:o}),n.createElement("div",{className:$},i&&n.createElement(G,{user_data:t}),n.createElement(K,null))))};function ne(){var n,t;return e.__awaiter(this,void 0,void 0,(function(){var o,a,i,l;return e.__generator(this,(function(e){switch(e.label){case 0:return o=r.cookies(),a=[null===(n=o.get("access"))||void 0===n?void 0:n.value,null===(t=o.get("refresh"))||void 0===t?void 0:t.value],l=a[1],(i=a[0])||l?[4,x(i,l)]:[3,2];case 1:return[2,e.sent()];case 2:return[2]}}))}))}function te(){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(n){switch(n.label){case 0:return[4,e.__awaiter(void 0,void 0,void 0,(function(){var n,t,r;return e.__generator(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),n={status:0,error:""},[4,fetch("https://archive.prozhito.org/api/landing/context/",{method:"GET"}).then((function(e){if(200!==e.status){n.status=e.status,n.error=e.statusText;var t=e.headers.get("content-type");if(t&&t.includes("application/json"))return e.json()}return e.json()})).catch((function(e){n.error=e.message}))];case 1:return t=e.sent(),n.error?[2,{error:t.detail||n.error}]:[2,{data:t}];case 2:return[2,{error:(r=e.sent())instanceof Error?r.message:"unknown"}];case 3:return[2]}}))})).then((function(e){var n=e.data;return!e.error&&n&&n.main_menu?n.main_menu:[]}))];case 1:return[2,n.sent()]}}))}))}exports.LittleSpinner=z,exports.ProzhitoHeader=function(t){var r=t.main_menu,o=t.account,a=void 0!==o&&o;return e.__awaiter(void 0,void 0,void 0,(function(){var t,o,i;return e.__generator(this,(function(e){switch(e.label){case 0:return console.log("ProzhitoHeader Server:","undefined"==typeof window),a?[4,ne()]:[3,2];case 1:return o=e.sent(),[3,3];case 2:o={user:void 0,error:""},e.label=3;case 3:return t=o,(i=r)?[3,5]:[4,te()];case 4:i=e.sent(),e.label=5;case 5:return r=i,[2,n.createElement(ee,{main_menu:r,account:a,user_data:t})]}}))}))},exports.StylesInject=function(){var e=globalThis.__ssr_css;return e?(console.log("Styles injected length:",e.length),n.createElement(n.Fragment,null,e.map((function(e){return n.createElement("style",{dangerouslySetInnerHTML:{__html:e.css},id:e.id,key:e.id})})))):null},exports.User=function(){return n.createElement(P,null)};
//# sourceMappingURL=index.js.map
