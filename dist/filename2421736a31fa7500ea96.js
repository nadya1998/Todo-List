(()=>{var t={807:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var r=o(81),n=o.n(r),a=o(645),c=o.n(a)()(n());c.push([t.id,"*{padding:0;font-size:21px}body{background-color:#840b75}.todo-add__input{border-color:rgba(200,200,200,.9);color:#840b75}.todo-add__input:focus{outline:none;box-shadow:inset 1px 1px 10px rgba(221,82,196,.7)}.todo-add__button{background-color:#b617a8;border-color:#d11ce5;color:#f0f8ff;padding:1px 10px}.todo-add__ul{max-width:410px}.todo{margin-top:10px;display:flex;justify-content:space-between}.todo__span{color:#f0f8ff}.todo__delete{background-color:#b617a8;border-color:#d11ce5;color:#f0f8ff;padding:1px 10px}",""]);const s=c},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,r,n,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(c[d]=!0)}for(var i=0;i<t.length;i++){var l=[].concat(t[i]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},472:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>r});const r='<!DOCTYPE html>\r\n<html lang="en">\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n    <div class="todo-list">\r\n        <div class="todo-add">\r\n            <input type="text" class="todo-add__input">\r\n            <button class="todo-add__button">add</button>\r\n            <ul class="todo-add__ul"></ul>\r\n        </div>\r\n    </div>\r\n    <template id="todo-template">\r\n        <li class="todo">\r\n            <span class="todo__span"></span>\r\n            <button class="todo__delete">delete</button>\r\n        </li>\r\n    </template>\r\n</body>\r\n</html>'},379:t=>{"use strict";var e=[];function o(t){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===t){o=r;break}return o}function r(t,r){for(var a={},c=[],s=0;s<t.length;s++){var d=t[s],i=r.base?d[0]+r.base:d[0],l=a[i]||0,u="".concat(i," ").concat(l);a[i]=l+1;var p=o(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=n(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function n(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,n){var a=r(t=t||[],n=n||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var s=o(a[c]);e[s].references--}for(var d=r(t,n),i=0;i<a.length;i++){var l=o(a[i]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:t=>{"use strict";var e={};t.exports=function(t,o){var r=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{"use strict";t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},639:()=>{const t=document.querySelector("#todo-template").content,e=(t.querySelector(".todo"),t.querySelector(".todo__span")),o=t.querySelector(".todo__delete"),r=document.querySelector(".todo-add__input"),n=document.querySelector(".todo-add__button"),a=document.querySelector(".todo-add__ul");let c=[],s=0;function d(r){e.innerHTML=r,o.id=s;let n=t.cloneNode(!0);a.append(n)}!function(){const t=localStorage.getItem("todo");if(t){c=t.replace(/},/g,"}  ").split("  ");const e=[];for(let t=0;t<c.length;t++)e.push(JSON.parse(c[t])),d(e[t].text),e[t].id=s,s++;c=[];for(let t=0;t<e.length;t++)c.push(JSON.stringify(e[t]));localStorage.setItem("todo",c)}}(),n.addEventListener("click",(t=>{t.preventDefault(),r.value&&(!function(t){d(t);const e={id:s,text:t};s++,c.push(JSON.stringify(e)),localStorage.setItem("todo",c)}(r.value),r.value="")})),a.addEventListener("click",(t=>{if(t.target.classList.contains("todo__delete")){t.target.parentNode.remove();for(let e=0;e<c.length;e++)JSON.parse(c[e]).id==t.target.id&&(c.splice(e,1),localStorage.setItem("todo",c))}}))}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nc=void 0,(()=>{"use strict";var t=o(379),e=o.n(t),r=o(795),n=o.n(r),a=o(569),c=o.n(a),s=o(565),d=o.n(s),i=o(216),l=o.n(i),u=o(589),p=o.n(u),f=o(807),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=n(),v.insertStyleElement=l(),e()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,o(639),o(472)})()})();