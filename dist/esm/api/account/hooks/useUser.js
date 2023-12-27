import n from"react";import{Account as o}from"../account.js";var e=function(){var e=n.useState(null),r=e[0],t=e[1];return n.useEffect((function(){var n=new o((function(){t((new o).info().user),console.log("update")}));t(n.info().user)}),[]),r};export{e as useUser};
//# sourceMappingURL=useUser.js.map
