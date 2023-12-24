'use client';
import e from"react";import{FormInput as t}from"../ui/form/input/formInput.js";import{FormSubmit as r}from"../ui/form/submit/formSubmit.js";import{Button as n}from"../ui/button/index.js";import o from"./.module.css.js";import l from"../../assets/close.svg.js";var a=function(a){var i=a.loading,m=a.error,c=a.user,s=a.login,d=a.logout,u=a.visible,p=a.closeModal;return e.createElement("div",{className:u?o.modal__outer:o.modal__outer_hidden,onClick:function(e){u&&(e.target===e.currentTarget&&(e.preventDefault(),p()))}},e.createElement("div",{className:o.modal__wrapper},e.createElement("div",{className:o.modal__close,onClick:p},e.createElement("img",{src:l,alt:"close"})),e.createElement("div",{className:o.modal__inner},!c&&e.createElement(e.Fragment,null,e.createElement("h1",null,"Sign in"),e.createElement("form",{onSubmit:function(e){var t,r,n=new FormData(e.currentTarget),o={email:(null===(t=n.get("email"))||void 0===t?void 0:t.toString())||"",password:(null===(r=n.get("password"))||void 0===r?void 0:r.toString())||""};s(o),e.preventDefault()},style:{width:"25rem",textAlign:"center"}},e.createElement(t,{type:"email",name:"email",placeholder:"email"}),e.createElement(t,{type:"password",name:"password",placeholder:"password"}),m&&e.createElement("p",null,"Error: ",m),e.createElement(r,{disabled:i},"Login"))),c&&e.createElement(e.Fragment,null,e.createElement("h1",null,"User info"),e.createElement("div",{className:o.user__info_container,style:{width:"25rem"}},Object.entries(c).map((function(t){var r=t[0],n=t[1];return e.createElement("p",{key:r},r,": ",n)}))),e.createElement(n,{onClick:d},"Log out"),e.createElement(n,{onClick:function(){document.cookie="access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT","undefined"!=typeof window&&window.location.reload()}},"Kill token")))))};export{a as ModalAccount};
//# sourceMappingURL=account.js.map
