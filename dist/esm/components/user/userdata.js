'use client';
import t from"react";import"../../api/account/account.js";import"tslib";import{useUser as e}from"../../api/account/hooks/useUser.js";var r=function(){var r=e();return r?Object.keys(r).map((function(e){return t.createElement("p",{key:e},e,": ",r[e])})):t.createElement("p",null,"No data")};export{r as UserData};
//# sourceMappingURL=userdata.js.map
