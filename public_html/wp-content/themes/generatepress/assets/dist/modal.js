!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=73)}({11:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},14:function(e,t,n){var r=n(11);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t,n){var r=n(11);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t,n){var r=n(22),o=n(23),a=n(14),i=n(24);e.exports=function(e){return r(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},73:function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=function(e){var t=e.targetModal,n=(e.openTrigger,e.triggers),r=void 0===n?[]:n,a=document.getElementById(t);if(a){var i="data-gpmodal-close",u="gp-modal--open",s="";r.length>0&&function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.filter(Boolean).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),l()})),e.addEventListener("keydown",(function(e){" "!==e.key&&"Enter"!==e.key&&"Spacebar"!==e.key||(e.preventDefault(),l())}))}))}.apply(void 0,o()(r))}function l(){a.classList.add("gp-modal--transition"),s=document.activeElement,a.classList.add(u),d("disable"),a.addEventListener("touchstart",f),a.addEventListener("click",f),document.addEventListener("keydown",p),function(){var e=v();if(0!==e.length){var t=e.filter((function(e){return!e.hasAttribute(i)}));t.length>0&&t[0].focus(),0===t.length&&e[0].focus()}}(),setTimeout((function(){return a.classList.remove("gp-modal--transition")}),100)}function c(){a.classList.add("gp-modal--transition"),a.removeEventListener("touchstart",f),a.removeEventListener("click",f),document.removeEventListener("keydown",p),d("enable"),s&&s.focus&&s.focus(),a.classList.remove(u),setTimeout((function(){return a.classList.remove("gp-modal--transition")}),500)}function d(e){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}function f(e){(e.target.hasAttribute(i)||e.target.parentNode.hasAttribute(i))&&(e.preventDefault(),e.stopPropagation(),c())}function p(e){27===e.keyCode&&c(),9===e.keyCode&&function(e){var t=v();if(0!==t.length){var n=(t=t.filter((function(e){return null!==e.offsetParent}))).indexOf(document.activeElement);e.shiftKey&&0===n&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&n===t.length-1&&(t[0].focus(),e.preventDefault())}}(e)}function v(){var e=a.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']);return Array.apply(void 0,o()(e))}},i=Object.assign({},{openTrigger:"data-gpmodal-trigger"}),u=o()(document.querySelectorAll("[".concat(i.openTrigger,"]"))).reduce((function(e,t){var n=t.attributes[i.openTrigger].value;return e[n]=e[n]||[],e[n].push(t),e}),[]);for(var s in u){var l=u[s];i.targetModal=s,i.triggers=o()(l),new a(i)}}});