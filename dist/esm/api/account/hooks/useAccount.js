'use client';
import{__assign as o}from"tslib";import n from"react";import{Account as t}from"../account.js";var r=function(){var r=n.useMemo((function(){return new t}),[]),e=n.useState(o(o({},r.info()),{setUser:function(o){o&&(r.user=o,f())},login:r.login,logout:r.logout})),u=e[0],i=e[1],f=n.useCallback((function(){i((function(n){return o(o({},n),r.info())}))}),[]);return n.useEffect((function(){new t(f)}),[]),u};export{r as useAccount};
//# sourceMappingURL=useAccount.js.map
