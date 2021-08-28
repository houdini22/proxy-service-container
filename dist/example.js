(()=>{var e={983:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{ProxyServiceContainer:()=>u});const a=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"methods",{}),i(this,"dependencies",{}),this.methods=t,this.dependencies=r}var t,r;return t=e,(r=[{key:"hasMethod",value:function(e){return!!this.methods[e]}},{key:"callMethod",value:function(e,t){var r,o=this.methods[e],i=[],a=0,l=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw a}}}}((o.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]||"").split(","));try{for(l.s();!(r=l.n()).done;){var s=r.value,c=this.dependencies[s.trim()];c?i.push(c):i.push(t[a++])}}catch(e){l.e(e)}finally{l.f()}return o.apply(this._this,i)}}])&&o(t.prototype,r),e}();function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"services",{}),s(this,"defaultService",null)}var t,r;return t=e,(r=[{key:"addService",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return 0===Object.keys(this.services).length&&(n=!0),this.services[e]=new a(t,r),n&&(this.defaultService=this.services[e]),this}},{key:"call",value:function(t){var r=this.getDefaultService();if(r.hasMethod(t)){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return r.callMethod(t,o)}return e.ERR_NO_METHOD}},{key:"callAll",value:function(t){for(var r=this,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a={};return Object.keys(this.services).forEach((function(n){var i=r.getService(n);i.hasMethod(t)?a[n]=i.callMethod(t,o):a[n]=e.ERR_NO_METHOD})),a}},{key:"callOn",value:function(t,r){for(var n=this,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var l={};return t.forEach((function(t){if(n.hasService(t)){var o=n.getService(t);o.hasMethod(r)?l[t]=o.callMethod(r,i):l[t]=e.ERR_NO_METHOD}else l[t]=e.ERR_NO_SERVICE})),l}},{key:"setDefaultService",value:function(t){return"string"==typeof t&&this.hasService(t)?(this.defaultService=this.getService(t),this):e.ERR_NO_SERVICE}},{key:"getDefaultService",value:function(){return this.defaultService}},{key:"hasService",value:function(e){return!!this.services[e]}},{key:"getService",value:function(e){return this.services[e]}}])&&l(t.prototype,r),e}();s(c,"ERR_NO_METHOD",-1),s(c,"ERR_NO_SERVICE",-2);const u=c}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n,o,i={};(o=new(0,r(983).ProxyServiceContainer)).addService("storage1",{save:function(e,t,r,n,o){return console.log("storage1.save called",e,t,r,n,o),this.test?console.log(this):this.test=1,"storage 1 result"}},{dependency1:"dependency1 value",dependency2:"dependency2 value"}),o.addService("storage2",{save:function(e,t,r){return console.log("storage2.save called",e,t,r),"storage2 result"}},void 0,!0),n=o.call("save",1,2,3),console.log("result =",n),o.setDefaultService("storage1"),n=o.call("save",4,5,6),console.log("result =",n),n=o.callAll("save",7,8,9),console.log("result =",n),n=o.call("not_existing_function","error"),console.log("result =",n),n=o.callAll("not_existing_function",10,11,12),console.log("result =",n),n=o.setDefaultService("not_existing_service"),console.log("result =",n),n=o.callOn(["storage2"],"save",20,21,22),console.log("result =",n);var a=exports;for(var l in i)a[l]=i[l];i.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();
//# sourceMappingURL=example.js.map