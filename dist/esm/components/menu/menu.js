import e from"react";import{ExternalLink as t}from"../links/external-link.js";import n from"./.module.css.js";var l=function(l){var r=l.main_menu,a=r.filter((function(e){return e.children}));return e.createElement("nav",{className:n.menu__container},e.createElement("ul",{className:n.menu},r.map((function(l,r){var a;return e.createElement("li",{className:n.menu__item,key:r},e.createElement(t,{url:null!==(a=l.page_slug||l.url)&&void 0!==a?a:"#",target_blank:l.target_blank},l.title),l.children&&l.children.length>0&&e.createElement("ul",{className:n.menu__dropdown},l.children.map((function(l,r){return e.createElement("li",{className:n.menu__item,key:r},e.createElement(t,{url:l.page_slug||l.url,target_blank:l.target_blank},l.title))}))))}))),a.length>0&&e.createElement("ul",{className:n.menu},a.map((function(l){var r;return null===(r=l.children)||void 0===r?void 0:r.map((function(r,a){var m;return e.createElement("li",{className:n.menu__item,key:a},e.createElement(t,{url:null!==(m=r.page_slug||r.url)&&void 0!==m?m:"#",target_blank:l.target_blank},r.title))}))}))),e.createElement("div",{className:n.menu__dropdown_bg}))};export{l as HeaderMenu};
//# sourceMappingURL=menu.js.map
