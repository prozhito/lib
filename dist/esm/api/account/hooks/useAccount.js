'use client';
import{__assign as o}from"../../../node_modules/tslib/tslib.es6.js";import n from"react";import{Account as t}from"../account.js";var e=function(){var e=n.useMemo((function(){return new t}),[]),r=n.useState(o(o({},e.info()),{setUser:function(o){o&&(e.user=o,f())},login:e.login,logout:e.logout})),u=r[0],i=r[1],f=n.useCallback((function(){i((function(n){return o(o({},n),e.info())}))}),[]);return n.useEffect((function(){new t(f)}),[]),u};export{e as useAccount};
//# sourceMappingURL=useAccount.js.map
