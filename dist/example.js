(()=>{var e={687:e=>{(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.r(r),t.d(r,{default:()=>s});const a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"methods",{}),o(this,"_this",{}),this.methods=t}var t;return(t=[{key:"hasMethod",value:function(e){return!!this.methods[e]}},{key:"callMethod",value:function(e,t){var r,o=this.methods[e],a=[],i=0,l=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw i}}}}((o.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]||"").split(","));try{for(l.s();!(r=l.n()).done;)r.value,a.push(t[i++])}catch(e){l.e(e)}finally{l.f()}return o.apply(this._this,a)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"services",{}),i(this,"defaultService",null)}var t;return(t=[{key:"addService",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return 0===Object.keys(this.services).length&&(r=!0),this.services[e]=new a(t),r&&(this.defaultService=this.services[e]),this}},{key:"call",value:function(t){var r=this.getDefaultService();if(r.hasMethod(t)){for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return r.callMethod(t,o)}return e.ERR_NO_METHOD}},{key:"callAll",value:function(t){for(var r=this,n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var i={};return Object.keys(this.services).forEach((function(n){var a=r.getService(n);a.hasMethod(t)?i[n]=a.callMethod(t,o):i[n]=e.ERR_NO_METHOD})),i}},{key:"callOn",value:function(t,r){for(var n=this,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];var l={};return t.forEach((function(t){if(n.hasService(t)){var o=n.getService(t);o.hasMethod(r)?l[t]=o.callMethod(r,a):l[t]=e.ERR_NO_METHOD}else l[t]=e.ERR_NO_SERVICE})),l}},{key:"setDefaultService",value:function(t){return"string"==typeof t&&this.hasService(t)?(this.defaultService=this.getService(t),this):e.ERR_NO_SERVICE}},{key:"getDefaultService",value:function(){return this.defaultService}},{key:"hasService",value:function(e){return!!this.services[e]}},{key:"getService",value:function(e){return this.services[e]}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}();i(l,"ERR_NO_METHOD",-1),i(l,"ERR_NO_SERVICE",-2);const s=l;e.exports=r})()}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);var e,t=r(687),o=new(r.n(t)());o.addService("storage1",{save:function(e,t,r){return console.log("storage1.save called",e,t,r),this.test?console.log(this):this.test=1,"storage 1 result"}}),o.addService("storage2",{save:function(e,t,r){return console.log("storage2.save called",e,t,r),"storage2 result"}},void 0,!0),e=o.call("save",1,2,3),console.log("result =",e),o.setDefaultService("storage1"),e=o.call("save",4,5,6),console.log("result =",e),e=o.callAll("save",7,8,9),console.log("result =",e),e=o.call("not_existing_function","error"),console.log("result =",e),e=o.callAll("not_existing_function",10,11,12),console.log("result =",e),e=o.setDefaultService("not_existing_service"),console.log("result =",e),e=o.callOn(["storage2"],"save",20,21,22),console.log("result =",e)})();var o=exports;for(var a in n)o[a]=n[a];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=example.js.map