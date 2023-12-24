"use strict";var e=require("react"),n=require("react-dom"),t=require("next/headers"),r=function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};function o(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(6===l[0]&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],r=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}}function i(e,n,{insertAt:t}={}){if(!e)return;if("undefined"==typeof document){globalThis.__ssr_css=globalThis.__ssr_css||[];return void(globalThis.__ssr_css.reduce(((e,n)=>({...e,[n.id]:{...n}})),{})[n]||globalThis.__ssr_css.push({css:e,id:n}))}if(document.getElementById(n))return;const r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.id=n,o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}"function"==typeof SuppressedError&&SuppressedError;var l="-module_link__FuHfG";i(".-module_link__FuHfG {\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n}\n","style-57c13b7d-291a-4bd5-94f0-d5999df411e4");var s=function(n){var t=n.url,r=n.children,o=n.className,a=void 0===o?"":o,i=n.target_blank,s=void 0===i||i;return null===t?null:t.startsWith("http")?e.createElement("a",{href:t,className:"".concat(l," ").concat(a),target:s?"_blank":"_self",rel:"noopener noreferrer"},r):e.createElement("a",{href:"/page/".concat(t),className:"".concat(l," ").concat(a)},r)},c="-module_menu__pNyRa",u="-module_menu__item__Bi-9G",d="-module_menu__dropdown__acppo",_="-module_menu__dropdown_bg__EYfC8",m="-module_menu__container__qxeOv",C="-module_menu_open__JnnO7",p="-module_menu__button__FGsc3";i(".-module_menu__pNyRa {\n  position: relative;\n  display: flex;\n  align-items: center;\n  column-gap: 3em;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.-module_menu__item__Bi-9G {\n  position: relative;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n.-module_menu__item__Bi-9G a {\n  color: inherit;\n  text-decoration: none;\n}\n.-module_menu__item__Bi-9G::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: var(--color90, #323232);\n  bottom: 0.25em;\n  transform: scaleX(0);\n  transition: transform 0.25s ease-in-out;\n}\n.-module_menu__item__Bi-9G:hover::before {\n  transform: scaleX(1);\n}\n\n.-module_menu__dropdown__acppo {\n  position: absolute;\n  list-style: none;\n  top: 50px;\n  right: 0;\n  display: none;\n  grid-auto-flow: column;\n  gap: 3em;\n  justify-items: center;\n  z-index: 1;\n  white-space: nowrap;\n}\n.-module_menu__dropdown__acppo:last-of-type {\n  padding-right: 0;\n}\n@media screen and (min-width: 801px) {\n  .-module_menu__item__Bi-9G:hover .-module_menu__dropdown__acppo {\n    display: grid;\n  }\n}\n\n.-module_menu__dropdown_bg__EYfC8 {\n  display: none;\n  position: absolute;\n  top: 51px;\n  left: 0;\n  height: 50px;\n  width: 100%;\n  background-color: inherit;\n}\n@media screen and (min-width: 801px) {\n  .-module_menu__pNyRa:hover ~ .-module_menu__dropdown_bg__EYfC8 {\n    display: block;\n  }\n}\n\n.-module_menu__container__qxeOv {\n  background-color: inherit;\n}\n\n.-module_menu_open__JnnO7 {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  top: 51px;\n  left: 0;\n  width: 100%;\n  height: calc(100dvh - 51px);\n}\n.-module_menu__container__qxeOv.-module_open__F5j3O > .-module_menu__pNyRa {\n  display: flex;\n}\n\n@media screen and (min-width: 801px) {\n  .-module_menu__container__qxeOv ul:nth-child(2) {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 800px) {\n  .-module_menu__pNyRa {\n    display: none;\n    flex-direction: column;\n    row-gap: 1rem;\n    margin: 1.5rem 1rem;\n    border-bottom: 1px solid var(--color30, #9e9e9e);\n  }\n  .-module_menu__item__Bi-9G {\n    padding: 0;\n    width: fit-content;\n  }\n}\n\n.-module_menu__button__FGsc3 {\n  display: none;\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  padding: 4px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background-color: var(--color30, gray);\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n}\n.-module_menu__button__FGsc3:hover {\n  opacity: 0.65;\n}\n@media screen and (max-width: 800px) {\n  .-module_menu__button__FGsc3 {\n    display: block;\n  }\n}\n","style-c128e630-0204-4c56-a89d-6ed6bd30b391");var f=function(n){var t=n.main_menu,r=t.filter((function(e){return e.children}));return e.createElement("nav",{className:m},e.createElement("ul",{className:c},t.map((function(n,t){var r;return e.createElement("li",{className:u,key:t},e.createElement(s,{url:null!==(r=n.page_slug||n.url)&&void 0!==r?r:"#",target_blank:n.target_blank},n.title),n.children&&n.children.length>0&&e.createElement("ul",{className:d},n.children.map((function(n,t){return e.createElement("li",{className:u,key:t},e.createElement(s,{url:n.page_slug||n.url,target_blank:n.target_blank},n.title))}))))}))),r.length>0&&e.createElement("ul",{className:c},r.map((function(n){var t;return null===(t=n.children)||void 0===t?void 0:t.map((function(t,r){var o;return e.createElement("li",{className:u,key:r},e.createElement(s,{url:null!==(o=t.page_slug||t.url)&&void 0!==o?o:"#",target_blank:n.target_blank},t.title))}))}))),e.createElement("div",{className:_}))},h=function(e,n){return o(void 0,void 0,void 0,(function(){var t,r,o;return a(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),t={status:0,error:""},[4,fetch("".concat("https://dev.archive.prozhito.org/api/auth/").concat(e,"/"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status){t.status=e.status,t.error=e.statusText;var n=e.headers.get("content-type");if(n&&n.includes("application/json"))return e.json()}return e.json()})).catch((function(e){t.error=e.message}))];case 1:return r=a.sent(),t.error?[2,{error:r.detail||t.error}]:[2,r];case 2:return[2,{error:(o=a.sent())instanceof Error?o.message:"unknown"}];case 3:return[2]}}))}))},g=function(e){var n=86400*e;return new Date(Date.now()+1e3*n).toUTCString()},v=function(e){var n=Object.entries(e).reduce((function(e,n){var t=n[0],r=n[1];return e+"".concat(t,"=").concat(r,";")}),"");"undefined"!=typeof document&&(document.cookie=n)},b=function(e){return"undefined"!=typeof document?document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat(e,"\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1"):""},D=function(){function e(n){if(this._user=null,this._loading=!1,this._error="",n&&!e._updateCallback&&(e._updateCallback=n),e._instance)return e._instance;e._instance=this,this.login=this.login.bind(this),this.info=this.info.bind(this),this.logout=this.logout.bind(this)}return Object.defineProperty(e.prototype,"user",{set:function(e){this._user=r({},e)},enumerable:!1,configurable:!0}),e.prototype.login=function(n){var t=this;this._loading=!0,this._error="",this._user=null,e._updateCallback&&e._updateCallback(),function(e){return o(void 0,void 0,void 0,(function(){var n,t,r;return a(this,(function(o){switch(o.label){case 0:return[4,h("login",e)];case 1:return(n=o.sent()).error||(t=n.access,r=n.refresh,t&&v({access:t,expires:g(1),samesite:"lax"}),r&&v({refresh:r,expires:g(60),samesite:"lax"})),[2,n]}}))}))}(n).then((function(n){n&&n.error?t._error=n.error:t._user=r({},n.user),t._loading=!1,e._updateCallback&&e._updateCallback()}))},e.prototype.logout=function(){console.log("logout"),"undefined"!=typeof document&&(document.cookie="access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="refresh= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),this._error="",this._user=null,e._updateCallback&&e._updateCallback()},e.prototype.info=function(){return{loading:this._loading,error:this._error,user:this._user}},e._updateCallback=null,e}(),x={modal__outer:"-module_modal__outer__fSgYf",modal__outer_hidden:"-module_modal__outer_hidden__lPz5Y",modal__wrapper:"-module_modal__wrapper__ipKUU",modal__inner:"-module_modal__inner__bpH-p",modal__close:"-module_modal__close__YJO6L"};i(".-module_modal__outer__fSgYf {\n  z-index: 900;\n  position: fixed;\n  width: 100dvw;\n  height: 100dvh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.-module_modal__outer_hidden__lPz5Y {\n  display: none;\n}\n\n.-module_modal__wrapper__ipKUU {\n  position: relative;\n  background-color: var(--color15, #fff);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.75rem;\n}\n\n.-module_modal__inner__bpH-p {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  row-gap: 1rem;\n  padding: 1rem;\n  font-size: 1rem;\n}\n\n.-module_modal__close__YJO6L {\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0.75rem;\n  top: 0.75rem;\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n}\n.-module_modal__close__YJO6L:hover {\n  opacity: 0.6;\n}\n.-module_modal__close__YJO6L img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n","style-50353213-3003-4eed-b057-e51c67a9cfdd");var y="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cline%20stroke%3D%22%23fff%22%20x1%3D%223%22%20y1%3D%223%22%20x2%3D%2215%22%20y2%3D%2215%22%2F%3E%3Cline%20stroke%3D%22%23fff%22%20x1%3D%223%22%20y1%3D%2215%22%20x2%3D%2215%22%20y2%3D%223%22%2F%3E%3C%2Fsvg%3E",E="-module_form__input_container__yNp2C",w="-module_form__input__Q-hWK",F="-module_form__valid__ADHZ7",k="-module_form__input_label__wJEkg";i(".-module_form__input_container__yNp2C {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border-radius: 0.75rem;\n  padding: 0 1.75rem 0 1rem;\n  height: 3rem;\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 0.5rem;\n  border: 1px solid var(--color30);\n  background-color: var(--color15);\n  color: var(--color100);\n}\n\n.-module_form__input__Q-hWK {\n  outline: none;\n  border: none;\n  width: 100%;\n  margin-top: 1rem;\n  padding: 0;\n  color: inherit;\n  background-color: inherit;\n  -webkit-text-fill-color: var(--color100);\n}\n.-module_form__input__Q-hWK:autofill {\n  transition: background-color 5000s ease-in-out 0s;\n}\n.-module_form__input__Q-hWK:valid ~ .-module_form__valid__ADHZ7 {\n  display: block;\n}\n\n.-module_form__valid__ADHZ7 {\n  display: none;\n  position: absolute;\n  color: green;\n  top: 0.75rem;\n  right: 0.75rem;\n}\n\n.-module_form__input_label__wJEkg {\n  position: absolute;\n  pointer-events: none;\n  left: 1rem;\n  top: 0.75rem;\n  transition: 0.3s ease all;\n  color: inherit;\n  opacity: 0.7;\n}\n\n.-module_form__input__Q-hWK:focus ~ .-module_form__input_label__wJEkg {\n  font-size: 0.8rem;\n  top: 0;\n}\n.-module_form__input__Q-hWK:not(:placeholder-shown) ~ .-module_form__input_label__wJEkg {\n  font-size: 0.8rem;\n  top: 0;\n}\n","style-ec8f8e34-d497-4e6f-8714-c0023b56b324");var A=function(n){var t=n.name,r=n.type,o=n.placeholder,a=void 0===o?"":o;return e.createElement("div",{className:E},e.createElement("input",{className:w,type:r,name:t,id:"form_".concat(t),placeholder:"",minLength:8,maxLength:28,required:!0}),e.createElement("label",{className:k,htmlFor:"form_".concat(t)},a),e.createElement("span",{className:F},"✔"))},N="-module_form__submit__bHR5L";i(".-module_form__submit__bHR5L {\n  align-self: center;\n  margin-top: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid var(--color30);\n  background-color: var(--color15);\n  color: var(--color100);\n  outline: none;\n  transition: border, background-color 0.25s linear;\n  cursor: pointer;\n}\n.-module_form__submit__bHR5L:focus {\n  outline: none;\n}\n.-module_form__submit__bHR5L:hover {\n  border: 1px solid var(--color20);\n  background-color: var(--color20);\n}\n","style-4e3c3820-ae02-40d2-b354-72ed8adf9e1d");var L=function(n){var t=n.children,r=n.disabled;return e.createElement("button",{className:N,type:"submit",disabled:r},r?"Loading...":t)},B="-module_button__base__CjXIc";i(".-module_button__base__CjXIc {\n  align-self: center;\n  margin-top: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid var(--color30);\n  background-color: var(--color15);\n  color: var(--color100);\n  outline: none;\n  transition: border, background-color 0.25s linear;\n  cursor: pointer;\n}\n.-module_button__base__CjXIc:focus {\n  outline: none;\n}\n.-module_button__base__CjXIc:hover {\n  border: 1px solid var(--color20);\n  background-color: var(--color20);\n}\n","style-a6d117cd-d703-4e05-b2d0-418ddc6cdb62");var T=function(n){var t=n.children,r=n.onClick;return e.createElement("button",{className:B,onClick:r},t)},j=function(n){var t=n.loading,r=n.error,o=n.user,a=n.login,i=n.logout,l=n.visible,s=n.closeModal;return e.createElement("div",{className:l?x.modal__outer:x.modal__outer_hidden,onClick:function(e){l&&(e.target===e.currentTarget&&(e.preventDefault(),s()))}},e.createElement("div",{className:x.modal__wrapper},e.createElement("div",{className:x.modal__close,onClick:s},e.createElement("img",{src:y,alt:"close"})),e.createElement("div",{className:x.modal__inner},!o&&e.createElement(e.Fragment,null,e.createElement("h1",null,"Sign in"),e.createElement("form",{onSubmit:function(e){var n,t,r=new FormData(e.currentTarget),o={email:(null===(n=r.get("email"))||void 0===n?void 0:n.toString())||"",password:(null===(t=r.get("password"))||void 0===t?void 0:t.toString())||""};console.log("Sending:",o),a(o),e.preventDefault()},style:{width:"25rem",textAlign:"center"}},e.createElement(A,{type:"email",name:"email",placeholder:"email"}),e.createElement(A,{type:"password",name:"password",placeholder:"password"}),r&&e.createElement("p",null,"Error: ",r),e.createElement(L,{disabled:t},"Login"))),o&&e.createElement(e.Fragment,null,e.createElement("h1",null,"User info"),e.createElement("div",{className:x.user__info_container,style:{width:"25rem"}},Object.entries(o).map((function(n){var t=n[0],r=n[1];return e.createElement("p",{key:t},t,": ",r)}))),e.createElement(T,{onClick:i},"Log out"),e.createElement(T,{onClick:function(){document.cookie="access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT","undefined"!=typeof window&&window.location.reload()}},"Kill token")))))},M="-module_user__menu__CFrMU";i(".-module_user__menu__CFrMU {\n  width: 26px;\n  min-width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background-color: var(--color30, gray);\n  cursor: pointer;\n  transition: opacity 0.25s linear;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.-module_user__menu__CFrMU:hover {\n  opacity: 0.65;\n}\n.-module_user__menu__CFrMU img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n","style-7272a862-645f-4e57-ab56-f553f6a06a1c");var S=function(t){var o=t.user_data,a=e.useState(!1),i=a[0],l=a[1],s=e.useState(!1),c=s[0],u=s[1],d=function(){var n=e.useMemo((function(){return new D}),[]),t=e.useState(r(r({},n.info()),{setUser:function(e){e&&(n.user=e,i())},login:n.login,logout:n.logout})),o=t[0],a=t[1],i=e.useCallback((function(){a((function(e){return r(r({},e),n.info())}))}),[]);return e.useEffect((function(){new D(i)}),[]),o}(),_=d.loading,m=d.error,C=d.user,p=d.setUser,f=d.login,h=d.logout;return e.useEffect((function(){o&&o.user&&p(o.user),l(!0)}),[]),e.createElement(e.Fragment,null,e.createElement("div",{className:M,onClick:function(){return u(!0)}},C?function(e){return"".concat(e.first_name.charAt(0)).concat(e.last_name.charAt(0))}(C):e.createElement("img",{src:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%228%22%20r%3D%224%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M5.33788%2017.3206C5.99897%2014.5269%208.77173%2013%2011.6426%2013H12.3574C15.2283%2013%2018.001%2014.5269%2018.6621%2017.3206C18.79%2017.8611%2018.8917%2018.4268%2018.9489%2019.0016C19.0036%2019.5512%2018.5523%2020%2018%2020H6C5.44772%2020%204.99642%2019.5512%205.0511%2019.0016C5.1083%2018.4268%205.20997%2017.8611%205.33788%2017.3206Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E"})),"undefined"!=typeof window&&i&&n.createPortal(e.createElement(j,{loading:_,error:m,user:C,login:f,logout:h,visible:c,closeModal:function(){return u(!1)}}),document.body))},z="data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cline%20stroke%3D%22%23fff%22%20y1%3D%224%22%20x2%3D%2218%22%20y2%3D%224%22%2F%3E%3Cline%20stroke%3D%22%23fff%22%20y1%3D%229%22%20x2%3D%2218%22%20y2%3D%229%22%2F%3E%3Cline%20stroke%3D%22%23fff%22%20y1%3D%2214%22%20x2%3D%2218%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E",G=function(e){var n=document.querySelector("nav");n&&(n.classList.toggle(C,e),[n.children[0],n.children[1]].forEach((function(n){e?n.style.display="flex":n.removeAttribute("style")})),e?n.addEventListener("click",O):n.removeEventListener("click",O),e&&window.matchMedia("(max-width: 800px)").addEventListener("change",H));var t=document.getElementById("menu_button");if(t){var r=t.firstElementChild;r&&(r.src=e?y:z)}},H=function(e){if(!e.matches){var n=e.currentTarget;n&&n instanceof MediaQueryList&&n.removeEventListener("change",H),G(!1)}},O=function(){G(!1)},R=function(){var e=document.querySelector("nav"),n=null==e?void 0:e.classList.contains(C);G(!n)},U=function(){return e.createElement("div",{id:"menu_button",className:p,onClick:R},e.createElement("img",{src:z,alt:"menu"}))},J="-module_header__ARLMb",Y="-module_header__container__MmNV2",q="-module_header__buttons__Zjbxd",P="-module_header__links__1j1Nu";i(".-module_header__ARLMb {\n  max-width: 100dvw;\n  position: relative;\n  background-color: var(--color15, #f7f4f0);\n  font-family: var(--font-family-pt-sans, 'PT Sans', Arial, sans-serif);\n  font-size: 20px;\n  z-index: 9;\n}\n\n@media screen and (max-width: 1160px) {\n  .-module_header__ARLMb {\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .-module_header__ARLMb {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .-module_header__ARLMb {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 800px) {\n  .-module_header__ARLMb {\n    position: sticky;\n    top: 0;\n  }\n}\n\n.-module_header__container__MmNV2 {\n  max-width: calc(min(1400px, 100% - 2rem));\n  height: 50px;\n  display: flex;\n  align-items: center;\n  column-gap: 3rem;\n  border-bottom: 1px var(--color30, #e7e4de) solid;\n  margin: 0 auto;\n  color: var(--color100, #323232);\n  background-color: inherit;\n}\n\n.-module_header__buttons__Zjbxd {\n  display: flex;\n  gap: 20px;\n}\n\n.-module_header__links__1j1Nu {\n  display: flex;\n  gap: 20px;\n  margin-right: auto;\n}\n","style-37b24d79-1452-43eb-82fb-3f9ab0374307");var K=function(n){var t=n.user_data,r=n.main_menu,o=void 0===r?[]:r,a=n.account,i=void 0!==a&&a;return e.createElement("header",{className:J},e.createElement("div",{className:Y},e.createElement("div",{className:P},e.createElement("a",{href:"https://prozhito.org/"},e.createElement("img",{width:156,height:30,src:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20315.6%2060.9%22%20style%3D%22enable-background%3Anew%200%200%20315.6%2060.9%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23666665%3B%7D%20.st1%7Bfill%3A%23E4653F%3B%7D%20.st2%7Bfill%3Anone%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M62.5%2C10.9L66.2%2C0h-36C8.3%2C0.1%2C0%2C5.6%2C0%2C16.8c0%2C2.8%2C0.6%2C5.9%2C1.8%2C9.1l10.8-2.6c-0.5-1.7-0.7-3.2-0.7-4.6%20%20c0-5%2C2.3-7%2C6.8-7.5l-6.5%2C36.7h13.4L32.1%2C11h8.4l-6.4%2C36.9h13.4l6.4-37H62.5z%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M84.5%2C37.6c0-0.4%2C0.1-1.1%2C0.3-2.5l1.2-7.4c0.1-0.8%2C0.2-1.5%2C0.2-2.5c0-4.5-3.3-7.6-8.4-7.6%20%20c-4.5%2C0-7.6%2C2.2-9%2C6.8l-0.6-6H57.8l-7.5%2C42.6h12.8L68%2C33.5c0.8-4.4%2C1.6-5.9%2C3.3-5.9c1.2%2C0%2C1.6%2C0.7%2C1.6%2C1.8c0%2C0.4-0.1%2C0.9-0.1%2C1.4%20%20l-1.2%2C7.3c-0.1%2C0.8-0.3%2C1.9-0.3%2C2.8c0%2C4.5%2C2.3%2C7.5%2C7.7%2C7.5c2.8%2C0%2C5.6-0.6%2C7-1.4l1.8-8.8c-0.7%2C0.3-1.4%2C0.6-2.1%2C0.6%20%20C84.8%2C38.8%2C84.5%2C38.3%2C84.5%2C37.6%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M104.9%2C39.4c-1.9%2C0-2.8-1.4-2.8-3.6c0-4.3%2C1.5-8.6%2C4.2-8.6c1.9%2C0%2C2.8%2C1.4%2C2.8%2C3.6%20%20C109%2C35%2C107.5%2C39.4%2C104.9%2C39.4%20M107.2%2C17.7c-11.8%2C0-17.8%2C7.5-17.8%2C17.9c0%2C8.4%2C6.3%2C13.2%2C14.5%2C13.2c11.8%2C0%2C17.8-7.5%2C17.8-18%20%20C121.7%2C22.4%2C115.4%2C17.7%2C107.2%2C17.7%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M171.6%2C39.3c-1.3%2C0-1.9-1.4-1.9-3.3c0-3.6%2C2-8.9%2C4.4-8.9c1%2C0%2C1.9%2C0.4%2C2.6%2C1.4l5.8-7.8c-2.8-2.3-5.8-3-8.6-3%20%20c-6%2C0-11.6%2C4.5-14%2C11h-2.1l1.9-10.2H147l-1.9%2C10.2h-2.2c-0.1-6-3.3-11-9.9-11c-2%2C0-6.7%2C0.3-10.2%2C4.2l3.8%2C7.4c0.6-0.9%2C1.9-2%2C3.2-2%20%20c1.3%2C0%2C2%2C1.4%2C2%2C3.3c0%2C3.6-2.1%2C8.9-4.4%2C8.9c-1%2C0-1.9-0.4-2.6-1.4l-5.8%2C7.8c2.8%2C2.3%2C5.8%2C3%2C8.6%2C3c6%2C0%2C11.3-4.4%2C13.9-11.3h2.1L141.7%2C48%20%20h12.5l1.9-10.6h2c0.4%2C6%2C3.5%2C11.3%2C10.2%2C11.3c2%2C0%2C6.7-0.3%2C10.2-4.2l-3.8-7.4C174.2%2C38.1%2C172.8%2C39.3%2C171.6%2C39.3%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M214.7%2C18.5h-12.8l-2.5%2C14.5c-0.8%2C4.4-1.9%2C5.9-3.6%2C5.9c-1.2%2C0-1.6-0.7-1.6-1.7c0-0.4%2C0.1-1.2%2C0.3-2.2l2.8-16.4%20%20h-12.7l-3.3%2C18.8c-0.3%2C1.7-0.3%2C2.4-0.3%2C3.8c0%2C4.8%2C3.2%2C7.7%2C8%2C7.7c4.9%2C0%2C8.4-1.8%2C9.9-6.4c0.4%2C3.7%2C2.3%2C6.1%2C7.1%2C6.1%20%20c2.8%2C0%2C5.6-0.6%2C7-1.4l1.8-8.8c-0.7%2C0.3-1.4%2C0.6-2.1%2C0.6c-0.8%2C0-1.1-0.4-1.1-1.2c0-0.4%2C0.1-1.1%2C0.3-2.5L214.7%2C18.5z%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M264.2%2C37.7c0-0.4%2C0.1-1.1%2C0.3-2.5l1.2-7.4c0.1-0.8%2C0.2-1.5%2C0.2-2.5c0-4.5-3.3-7.6-8.1-7.6%20%20c-3.9%2C0-7.8%2C2.1-9%2C6.5c-0.5-3.9-3.3-6.5-7.7-6.5c-4%2C0-7.7%2C2-8.8%2C6.5l-0.6-5.8h-10.4L216%2C48h12.8l2.7-15.5c0.6-3.8%2C1.5-4.9%2C2.9-4.9%20%20c1.1%2C0%2C1.3%2C0.8%2C1.3%2C1.7c0%2C0.3-0.1%2C0.8-0.1%2C1.3L232.9%2C48h12.9l2.4-15.5c0.6-3.8%2C1.5-4.9%2C2.9-4.9c1.1%2C0%2C1.3%2C0.8%2C1.3%2C1.7%20%20c0%2C0.3-0.1%2C0.8-0.1%2C1.3l-1.2%2C7.5c-0.1%2C0.8-0.3%2C1.9-0.3%2C2.8c0%2C4.5%2C2.3%2C7.5%2C7.7%2C7.5c2.8%2C0%2C5.6-0.6%2C7-1.4l1.8-8.8%20%20c-0.7%2C0.3-1.4%2C0.6-2.1%2C0.6C264.5%2C38.9%2C264.2%2C38.4%2C264.2%2C37.7%22%2F%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M285%2C39.4c-1.9%2C0-2.8-1.4-2.8-3.6c0-3.8%2C1-8.3%2C4-8.3c1%2C0%2C1.9%2C0.4%2C2.6%2C0.8c0.2%2C1.1%2C0.4%2C2.9%2C0.4%2C3.9%20%20C289.3%2C35.7%2C287.7%2C39.4%2C285%2C39.4%20M313.1%2C19.3l-21.3%2C7.2c2-2.5%2C4.6-5.9%2C4.6-5.9c-1.9-1.5-5.1-2.9-9.1-2.9%20%20c-11.8%2C0-17.8%2C7.5-17.8%2C17.9c0%2C8.4%2C6.3%2C13.2%2C14.5%2C13.2c12%2C0%2C17-9.1%2C17.4-16l14.1-3.3L313.1%2C19.3z%22%2F%3E%3C%2Fg%3E%3Cpolygon%20class%3D%22st1%22%20points%3D%2270.1%2C51.4%2068.4%2C60.9%20301.6%2C60.9%20303.3%2C51.4%20%22%2F%3E%3Cpolygon%20class%3D%22st1%22%20points%3D%2211%2C51.4%209.3%2C60.9%2045.1%2C60.9%2046.7%2C51.4%20%22%2F%3E%3Crect%20x%3D%2233.3%22%20y%3D%2247.9%22%20class%3D%22st2%22%20width%3D%2219%22%20height%3D%223.5%22%2F%3E%3C%2Fsvg%3E",alt:"Logo"})),e.createElement("a",{href:"https://eusp.org/",target:"_blank"},e.createElement("img",{width:101.6,height:30,src:"data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20id%3D%22a%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20253.5%2074.86%22%3E%3Cdefs%3E%3Cstyle%3E.b%7Bfill%3A%23fbcd18%3B%7D.b%2C.c%7Bstroke-width%3A0px%3B%7D.c%2C.d%7Bfill%3Agray%3B%7D.e%7Bfill%3A%236b6b6b%3Bstroke%3Agray%3Bstroke-miterlimit%3A10%3B%7D.d%7Bfont-family%3AConsolas%2C%20Consolas%3Bfont-size%3A20px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cline%20class%3D%22e%22%20x1%3D%22.5%22%20y1%3D%222.01%22%20x2%3D%22.5%22%20y2%3D%2268.51%22%2F%3E%3Cline%20class%3D%22e%22%20x1%3D%2220.94%22%20y1%3D%2268.51%22%20x2%3D%2220.94%22%20y2%3D%222.01%22%2F%3E%3Cline%20class%3D%22e%22%20x1%3D%2243.5%22%20y1%3D%222.01%22%20x2%3D%2243.5%22%20y2%3D%2268.51%22%2F%3E%3Cline%20class%3D%22e%22%20x1%3D%2263.17%22%20y1%3D%222.01%22%20x2%3D%2263.17%22%20y2%3D%2268.51%22%2F%3E%3Cpath%20class%3D%22b%22%20d%3D%22m49.47%2C17.7c4.48-.38%2C7.2%2C1.27%2C6.65%2C5.93-.79%2C6.6-.81%2C13.63-3.29%2C19.61-4.78%2C11.51-20.55%2C15.81-32.54%2C9.97-10.57-5.15-14.86-19.11-9.3-30.25%2C3.6-7.21%2C12.43-10.12%2C21.11-6.97%2C6.68%2C2.43%2C9.62%2C8.56%2C7.7%2C16.06-1.69%2C6.59-10.77%2C9.57-15.47%2C4.66-1.54-1.6-2.83-4.71-1.48-7.56.23-.47%2C2.98-1.93%2C3.43-1.56%2C1.27%2C1.04.22%2C4.41%2C3.5%2C5.37%2C1.72.04%2C3.14-1.05%2C3.52-2.25.95-2.96%2C1.36-6.69-2.53-7.97-4.46-1.46-9.23-2.2-12.81%2C2.3l-1.3%2C2.44c-2.15%2C6.53-1.62%2C12.63%2C3.84%2C17.49%2C5.1%2C4.54%2C14.11%2C5.08%2C20.46%2C1.52.74-.42%2C4.31-3.38%2C5.55-6.49%2C2-5%2C1.75-9.09%2C2-11l.97-11.31Z%22%2F%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2880.72%2016.64%29%20scale%281.06%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%95%D0%92%D0%A0%D0%9E%D0%9F%D0%95%D0%98%D0%A1%D0%9A%D0%98%D0%98%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2880.81%2068.81%29%20scale%281.01%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%92%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2894.57%2068.81%29%20scale%281.01%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%A1%D0%90%D0%9D%D0%9A%D0%A2%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%28155.57%2068.81%29%20scale%28.89%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%9F%D0%95%D0%A2%D0%95%D0%A0%D0%91%D0%A3%D0%A0%D0%93%D0%95%3C%2Ftspan%3E%3C%2Ftext%3E%3Ctext%20class%3D%22d%22%20transform%3D%22translate%2881.81%2042.81%29%20scale%28.97%201%29%22%3E%3Ctspan%20x%3D%220%22%20y%3D%220%22%3E%D0%A3%D0%9D%D0%98%D0%92%D0%95%D0%A0%D0%A1%D0%98%D0%A2%D0%95%D0%A2%3C%2Ftspan%3E%3C%2Ftext%3E%3Cpolygon%20class%3D%22c%22%20points%3D%22205.34%20.01%20202.94%203.38%20204.67%203.38%20207.19%20.01%20205.34%20.01%22%2F%3E%3Cpolygon%20class%3D%22c%22%20points%3D%22158.33%200%20155.93%203.36%20157.66%203.36%20160.18%200%20158.33%200%22%2F%3E%3Cpolygon%20class%3D%22c%22%20points%3D%22152.33%2061%20149.93%2064.36%20151.66%2064.36%20154.18%2061%20152.33%2061%22%2F%3E%3C%2Fsvg%3E",alt:"Logo"}))),e.createElement(f,{main_menu:o}),e.createElement("div",{className:q},i&&e.createElement(S,{user_data:t}),e.createElement(U,null))))},I=function(e){return o(void 0,void 0,void 0,(function(){var n,t,r;return a(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n={status:0,error:""},[4,fetch("https://dev.archive.prozhito.org/api/auth/current/",{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){if(200!==e.status){n.status=e.status,n.error=e.statusText;var t=e.headers.get("content-type");if(t&&t.includes("application/json"))return e.json()}return e.json()})).catch((function(e){n.error=e.message}))];case 1:return t=o.sent(),n.error?[2,{error:t.detail||n.error}]:[2,{user:t}];case 2:return[2,{error:(r=o.sent())instanceof Error?r.message:"unknown"}];case 3:return[2]}}))}))},Q=function(e){return o(void 0,void 0,void 0,(function(){var n,t;return a(this,(function(r){switch(r.label){case 0:return[4,h("refresh",{refresh:e})];case 1:return(n=r.sent()).error?[2,n]:(t=n.access)?(v({access:t,expires:g(1),samesite:"lax"}),[2,{access:t}]):[2,{error:"No token"}]}}))}))},W=function(e,n){return void 0===e&&(e=""),void 0===n&&(n=""),o(void 0,void 0,void 0,(function(){var t,r;return a(this,(function(o){switch(o.label){case 0:return e||"undefined"==typeof window||(e=b("access")),console.log("have Token:",!!e),e?[4,I(e)]:[3,2];case 1:if(!(r=o.sent()).error)return[2,r];o.label=2;case 2:return n||"undefined"==typeof window||(n=b("refresh")),console.log("have Refresh:",!!n),n?[4,Q(n)]:[3,5];case 3:return t=o.sent().access,console.log("new Token:",!!t),t?[4,I(t)]:[3,5];case 4:if(!(r=o.sent()).error)return[2,r];o.label=5;case 5:return[2,{error:"No token"}]}}))}))};function Z(){var e,n;return o(this,void 0,void 0,(function(){var r,o,i,l;return a(this,(function(a){switch(a.label){case 0:return r=t.cookies(),o=[null===(e=r.get("access"))||void 0===e?void 0:e.value,null===(n=r.get("refresh"))||void 0===n?void 0:n.value],l=o[1],(i=o[0])||l?[4,W(i,l)]:[3,2];case 1:return[2,a.sent()];case 2:return[2]}}))}))}function X(){return o(this,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,o(void 0,void 0,void 0,(function(){var e,n,t;return a(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e={status:0,error:""},[4,fetch("https://archive.prozhito.org/api/landing/context/",{method:"GET"}).then((function(n){if(200!==n.status){e.status=n.status,e.error=n.statusText;var t=n.headers.get("content-type");if(t&&t.includes("application/json"))return n.json()}return n.json()})).catch((function(n){e.error=n.message}))];case 1:return n=r.sent(),e.error?[2,{error:n.detail||e.error}]:[2,{data:n}];case 2:return[2,{error:(t=r.sent())instanceof Error?t.message:"unknown"}];case 3:return[2]}}))})).then((function(e){var n=e.data;return!e.error&&n&&n.main_menu?n.main_menu:[]}))];case 1:return[2,e.sent()]}}))}))}exports.Account=D,exports.ProzhitoHeader=function(n){var t=n.main_menu,r=n.account,i=void 0!==r&&r;return o(void 0,void 0,void 0,(function(){var n,r,o;return a(this,(function(a){switch(a.label){case 0:return console.log("ProzhitoHeader Server:","undefined"==typeof window),i?[4,Z()]:[3,2];case 1:return r=a.sent(),[3,3];case 2:r={user:void 0,error:""},a.label=3;case 3:return n=r,(o=t)?[3,5]:[4,X()];case 4:o=a.sent(),a.label=5;case 5:return t=o,[2,e.createElement(K,{main_menu:t,account:i,user_data:n})]}}))}))},exports.StylesInject=function(){var n=globalThis.__ssr_css;return n?(console.log("Styles injected length:",n.length),e.createElement(e.Fragment,null,n.map((function(n){return e.createElement("style",{dangerouslySetInnerHTML:{__html:n.css},id:n.id,key:n.id})})))):null};
//# sourceMappingURL=index.js.map
