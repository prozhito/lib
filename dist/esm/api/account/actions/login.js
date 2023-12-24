'use client';
import{__awaiter as r,__generator as e}from"tslib";import{apiGetData as s}from"./get.js";import{setCookie as t,getLifespan as i}from"../utils.js";var o=function(o){return r(void 0,void 0,void 0,(function(){var r,n,a;return e(this,(function(e){switch(e.label){case 0:return[4,s("login",o)];case 1:return(r=e.sent()).error||(n=r.access,a=r.refresh,n&&t({access:n,expires:i(1),samesite:"lax"}),a&&t({refresh:a,expires:i(60),samesite:"lax"})),[2,r]}}))}))};export{o as authWithCredentials};
//# sourceMappingURL=login.js.map
