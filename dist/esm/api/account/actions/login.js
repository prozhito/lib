'use client';
import{__awaiter as e,__generator as r}from"../../../node_modules/tslib/tslib.es6.js";import{apiGetData as s}from"./get.js";import{setCookie as t,getLifespan as i}from"../utils.js";var o=function(o){return e(void 0,void 0,void 0,(function(){var e,n,a;return r(this,(function(r){switch(r.label){case 0:return[4,s("login",o)];case 1:return(e=r.sent()).error||(n=e.access,a=e.refresh,n&&t({access:n,expires:i(1),samesite:"lax"}),a&&t({refresh:a,expires:i(60),samesite:"lax"})),[2,e]}}))}))};export{o as authWithCredentials};
//# sourceMappingURL=login.js.map
