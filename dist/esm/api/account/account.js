import{__awaiter as t,__generator as r,__assign as i}from"tslib";import{authWithToken as o}from"./actions/auth.js";import{authWithCredentials as e}from"./actions/login.js";var n=function(){function n(t){if(this._user=null,this._loading=!1,this._error="",t&&!n._updateCallback&&(n._updateCallback=t),n._instance)return n._instance;n._instance=this,this.auth=this.auth.bind(this),this.login=this.login.bind(this),this.info=this.info.bind(this),this.logout=this.logout.bind(this)}return Object.defineProperty(n.prototype,"user",{set:function(t){this._user=i({},t)},enumerable:!1,configurable:!0}),n.prototype.auth=function(e,u){return void 0===e&&(e=""),void 0===u&&(u=""),t(this,void 0,void 0,(function(){var t=this;return r(this,(function(r){return this._loading=!0,this._error="",this._user=null,n._updateCallback&&n._updateCallback(),[2,o(e,u).then((function(r){return r&&r.error?t._error=r.error:t._user=i({},r.user),t._loading=!1,n._updateCallback&&n._updateCallback(),r}))]}))}))},n.prototype.login=function(t){var r=this;this._loading=!0,this._error="",this._user=null,n._updateCallback&&n._updateCallback(),e(t).then((function(t){t&&t.error?r._error=t.error:r._user=i({},t.user),r._loading=!1,n._updateCallback&&n._updateCallback()}))},n.prototype.logout=function(){console.log("logout"),"undefined"!=typeof document&&(document.cookie="access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="refresh= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),this._error="",this._user=null,n._updateCallback&&n._updateCallback()},n.prototype.info=function(){return{loading:this._loading,error:this._error,user:this._user}},n._updateCallback=null,n}();export{n as Account};
//# sourceMappingURL=account.js.map
