function e(e,s,{insertAt:t}={}){if(!e)return;if("undefined"==typeof document){globalThis.__ssr_css=globalThis.__ssr_css||[];return void(globalThis.__ssr_css.reduce(((e,s)=>({...e,[s.id]:{...s}})),{})[s]||globalThis.__ssr_css.push({css:e,id:s}))}if(document.getElementById(s))return;const d=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.id=s,i.type="text/css","top"===t&&d.firstChild?d.insertBefore(i,d.firstChild):d.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}export{e as default};
//# sourceMappingURL=styleInject.js.map
