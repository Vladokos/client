(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var c=r.length-1;c>-1&&!e;)e=r[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();t.p;const e=function(t,e,n){document.addEventListener("click",(function r(c){c.target===t||t.contains(c.target)||c.target===n||null!=n&&n.contains(c.target)||(e(),document.removeEventListener("click",r))}))};var n=document.getElementById("burger"),r=document.getElementById("menu");n.addEventListener("click",(function t(){n.classList.contains("open")?(r.classList.remove("open"),n.classList.remove("open")):(r.classList.add("open"),n.classList.add("open"),setTimeout((function(){e(r,t,n)}),1e3))}))})();