'use client';
import e from"react";import{useAccount as t}from"../../api/account/hooks/useAccount.js";import"../../node_modules/tslib/tslib.es6.js";import"../modal/.module.css.js";import{ModalAccount as o}from"../modal/account.js";import{createPortal as r}from"react-dom";import s from"./.module.css.js";import n from"../../assets/user.svg.js";var u=function(u){var a=u.user_data,c=e.useState(!1),m=c[0],i=c[1],l=e.useState(!1),d=l[0],f=l[1],p=t(),g=p.loading,j=p.error,_=p.user,v=p.setUser,E=p.login,b=p.logout;return e.useEffect((function(){a&&a.user&&v(a.user),i(!0)}),[]),e.createElement(e.Fragment,null,e.createElement("div",{className:s.user__menu,onClick:function(){return f(!0)}},_?function(e){return"".concat(e.first_name.charAt(0)).concat(e.last_name.charAt(0))}(_):e.createElement("img",{src:n})),"undefined"!=typeof window&&m&&r(e.createElement(o,{loading:g,error:j,user:_,login:E,logout:b,visible:d,closeModal:function(){return f(!1)}}),document.body))};export{u as UserMenu};
//# sourceMappingURL=user.js.map
