/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/ProxyServiceContainer.tsx":
/*!***********************************************!*\
  !*** ./src/classes/ProxyServiceContainer.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./src/classes/Service.tsx");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ProxyServicesContainer = /*#__PURE__*/function () {
  function ProxyServicesContainer() {
    _classCallCheck(this, ProxyServicesContainer);

    _defineProperty(this, "services", {});

    _defineProperty(this, "defaultService", null);
  }

  _createClass(ProxyServicesContainer, [{
    key: "addService",
    value: function addService(name, methodsObj) {
      var setDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Object.keys(this.services).length === 0) {
        setDefault = true;
      }

      this.services[name] = new _Service__WEBPACK_IMPORTED_MODULE_0__.default(methodsObj);

      if (setDefault) {
        this.defaultService = this.services[name];
      }

      return this;
    }
  }, {
    key: "call",
    value: function call(name) {
      var service = this.getDefaultService();

      if (service.hasMethod(name)) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return service.callMethod(name, args);
      }

      return ProxyServicesContainer.ERR_NO_METHOD;
    }
  }, {
    key: "callAll",
    value: function callAll(name) {
      var _this = this;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var result = {};
      Object.keys(this.services).forEach(function (serviceName) {
        var service = _this.getService(serviceName);

        if (service.hasMethod(name)) {
          result[serviceName] = service.callMethod(name, args);
        } else {
          result[serviceName] = ProxyServicesContainer.ERR_NO_METHOD;
        }
      });
      return result;
    }
  }, {
    key: "callOn",
    value: function callOn(arrServices, name) {
      var _this2 = this;

      for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        args[_key3 - 2] = arguments[_key3];
      }

      var result = {};
      arrServices.forEach(function (serviceName) {
        if (_this2.hasService(serviceName)) {
          var service = _this2.getService(serviceName);

          if (service.hasMethod(name)) {
            result[serviceName] = service.callMethod(name, args);
          } else {
            result[serviceName] = ProxyServicesContainer.ERR_NO_METHOD;
          }
        } else {
          result[serviceName] = ProxyServicesContainer.ERR_NO_SERVICE;
        }
      });
      return result;
    }
  }, {
    key: "setDefaultService",
    value: function setDefaultService(name) {
      if (typeof name == "string") {
        if (this.hasService(name)) {
          this.defaultService = this.getService(name);
          return this;
        }
      }

      return ProxyServicesContainer.ERR_NO_SERVICE;
    }
  }, {
    key: "getDefaultService",
    value: function getDefaultService() {
      return this.defaultService;
    }
  }, {
    key: "hasService",
    value: function hasService(name) {
      return !!this.services[name];
    }
  }, {
    key: "getService",
    value: function getService(name) {
      return this.services[name];
    }
  }]);

  return ProxyServicesContainer;
}();

_defineProperty(ProxyServicesContainer, "ERR_NO_METHOD", -1);

_defineProperty(ProxyServicesContainer, "ERR_NO_SERVICE", -2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProxyServicesContainer);

/***/ }),

/***/ "./src/classes/Service.tsx":
/*!*********************************!*\
  !*** ./src/classes/Service.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Service = /*#__PURE__*/function () {
  function Service(methods) {
    _classCallCheck(this, Service);

    _defineProperty(this, "methods", {});

    _defineProperty(this, "_this", {});

    this.methods = methods;
  }

  _createClass(Service, [{
    key: "hasMethod",
    value: function hasMethod(name) {
      return !!this.methods[name];
    }
  }, {
    key: "callMethod",
    value: function callMethod(name, args) {
      var method = this.methods[name];
      return method.apply(this._this, args);
    }
  }]);

  return Service;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_ProxyServiceContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/ProxyServiceContainer */ "./src/classes/ProxyServiceContainer.tsx");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_classes_ProxyServiceContainer__WEBPACK_IMPORTED_MODULE_0__.default);
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=proxy-service-container.dev.js.map