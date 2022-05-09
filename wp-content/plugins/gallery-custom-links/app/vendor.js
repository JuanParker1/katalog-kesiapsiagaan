(window["wpJsonMgcl"] = window["wpJsonMgcl"] || []).push([["vendor"],{

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/construct.js":
/*!***********************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!***************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!******************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!**************************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js":
/*!****************************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteralLoose; });
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

/***/ }),

/***/ "../neko-ui/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!*****************************************************************************!*\
  !*** ../neko-ui/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/alert-circle.js":
/*!******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/alert-circle.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/arrow-up-bold-circle-outline.js":
/*!**********************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/arrow-up-bold-circle-outline.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 7l5 5h-3v4h-4v-4H7l5-5m0 15A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m0-2a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/cat.js":
/*!*********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/cat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 8l-1.33.09C9.81 7.07 7.4 4.5 5 4.5c0 0-1.97 2.96-.04 6.91c-.55.83-.89 1.26-.96 2.25l-1.93.29l.21.98l1.76-.26l.14.71l-1.57.94l.47.89l1.45-.89C5.68 18.76 8.59 20 12 20s6.32-1.24 7.47-3.68l1.45.89l.47-.89l-1.57-.94l.14-.71l1.76.26l.21-.98l-1.93-.29c-.07-.99-.41-1.42-.96-2.25C20.97 7.46 19 4.5 19 4.5c-2.4 0-4.81 2.57-5.67 3.59L12 8m-3 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 3h2l-.7 1.39c.2.64.76 1.11 1.45 1.11a1.5 1.5 0 0 0 1.5-1.5h.5a2 2 0 0 1-2 2c-.75 0-1.4-.41-1.75-1c-.35.59-1 1-1.75 1a2 2 0 0 1-2-2h.5a1.5 1.5 0 0 0 1.5 1.5c.69 0 1.25-.47 1.45-1.11L11 14z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/check.js":
/*!***********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/check.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-circle-outline.js":
/*!***********************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-circle-outline.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-outline.js":
/*!****************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-outline.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-marked.js":
/*!*********************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/checkbox-marked.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-multiple-marked.js":
/*!******************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/checkbox-multiple-marked.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M22 16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h12a2 2 0 0 1 2 2v12m-6 4v2H4a2 2 0 0 1-2-2V7h2v13h12m-3-6l7-7l-1.41-1.41L13 11.17L9.91 8.09L8.5 9.5L13 14z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-left.js":
/*!*************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-left.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M18.41 7.41L17 6l-6 6l6 6l1.41-1.41L13.83 12l4.58-4.59m-6 0L11 6l-6 6l6 6l1.41-1.41L7.83 12l4.58-4.59z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-right.js":
/*!**************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-right.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12L5.59 7.41m6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12l-4.58-4.59z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js":
/*!******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-left.js":
/*!******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/chevron-left.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-right.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/chevron-right.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-up.js":
/*!****************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/chevron-up.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/close.js":
/*!***********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/close.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/cog.js":
/*!*********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/cog.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/content-save.js":
/*!******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/content-save.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M15 9H5V5h10m-3 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3m5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/database-search.js":
/*!*********************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/database-search.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M18.68 12.32a4.49 4.49 0 0 0-6.36.01a4.49 4.49 0 0 0 0 6.36a4.508 4.508 0 0 0 5.57.63L21 22.39L22.39 21l-3.09-3.11c1.13-1.77.87-4.09-.62-5.57m-1.41 4.95c-.98.98-2.56.97-3.54 0c-.97-.98-.97-2.56.01-3.54c.97-.97 2.55-.97 3.53 0c.97.98.97 2.56 0 3.54M10.9 20.1a6.527 6.527 0 0 1-1.48-2.32C6.27 17.25 4 15.76 4 14v3c0 2.21 3.58 4 8 4c-.4-.26-.77-.56-1.1-.9M4 9v3c0 1.68 2.07 3.12 5 3.7v-.2c0-.93.2-1.85.58-2.69C6.34 12.3 4 10.79 4 9m8-6C7.58 3 4 4.79 4 7c0 2 3 3.68 6.85 4h.05c1.2-1.26 2.86-2 4.6-2c.91 0 1.81.19 2.64.56A3.215 3.215 0 0 0 20 7c0-2.21-3.58-4-8-4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/database.js":
/*!**************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/database.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/delete.js":
/*!************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/delete.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/facebook.js":
/*!**************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/facebook.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/file-undo.js":
/*!***************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/file-undo.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m6.16 12.31c-1.56 0-2.97.58-4.05 1.52L6 13.72V19h5.28l-2.13-2.12c.82-.68 1.85-1.1 3.01-1.1c2.07 0 3.84 1.35 4.45 3.22l1.39-.46c-.81-2.45-3.12-4.23-5.84-4.23z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/folder-open.js":
/*!*****************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/folder-open.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7a2 2 0 0 1 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/folder-plus.js":
/*!*****************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/folder-plus.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M10 4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6m5 5v3h-3v2h3v3h2v-3h3v-2h-3V9h-2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/folder.js":
/*!************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/folder.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/format-list-bulleted.js":
/*!**************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/format-list-bulleted.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M7 5h14v2H7V5m0 8v-2h14v2H7M4 4.5A1.5 1.5 0 0 1 5.5 6A1.5 1.5 0 0 1 4 7.5A1.5 1.5 0 0 1 2.5 6A1.5 1.5 0 0 1 4 4.5m0 6A1.5 1.5 0 0 1 5.5 12A1.5 1.5 0 0 1 4 13.5A1.5 1.5 0 0 1 2.5 12A1.5 1.5 0 0 1 4 10.5M7 19v-2h14v2H7m-3-2.5A1.5 1.5 0 0 1 5.5 18A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18A1.5 1.5 0 0 1 4 16.5z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/image-multiple-outline.js":
/*!****************************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/image-multiple-outline.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3m12.96-10.71l-2.75 3.54l-1.96-2.36L8.5 15h11l-3.54-4.71z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/image-plus.js":
/*!****************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/image-plus.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.09c-.06-.33-.09-.66-.09-1c0-.68.12-1.36.35-2H5l3.5-4.5l2.5 3l3.5-4.5l2.23 2.97c.97-.63 2.11-.97 3.27-.97c.34 0 .67.03 1 .09V5a2 2 0 0 0-2-2H5m14 13v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/instagram.js":
/*!***************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/instagram.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/lead-pencil.js":
/*!*****************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/lead-pencil.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/link-variant.js":
/*!******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/link-variant.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M10.59 13.41c.41.39.41 1.03 0 1.42c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0a5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24a2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24m2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0a5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.43l-.47.47a2.982 2.982 0 0 0 0 4.24a2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24a.973.973 0 0 1 0-1.42z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/linkedin.js":
/*!**************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/linkedin.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/lock-check.js":
/*!****************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/lock-check.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M18 8a2 2 0 0 1 2 2v10c0 1.1-.9 2-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6C7 3.24 9.24.998 12 .998S17 3.24 17 6v2h1m-6-5c-1.66 0-3 1.34-3 3v2h6V6c0-1.66-1.34-3-3-3m-1 16l6.25-6.24l-1.41-1.41L11 16.18L8.41 13.6L7 15l4 4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/lock-open-variant.js":
/*!***********************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/lock-open-variant.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M18 1c-2.76 0-5 2.24-5 5v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V10a2 2 0 0 0-2-2h-1V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2h2V6c0-2.76-2.24-5-5-5m-8 12a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/pause.js":
/*!***********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/pause.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M14 19h4V5h-4M6 19h4V5H6v14z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/pencil.js":
/*!************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/pencil.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/pinterest.js":
/*!***************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/pinterest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/play.js":
/*!**********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/play.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M8 5.14v14l11-7l-11-7z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/plus.js":
/*!**********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/plus.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/record-circle.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/record-circle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/replay.js":
/*!************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/replay.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 5V1L7 6l5 5V7a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6H4a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/star.js":
/*!**********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/star.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/stop.js":
/*!**********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/stop.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M18 18H6V6h12v12z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/tag.js":
/*!*********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/tag.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59c.55 0 1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/timer-outline.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/timer-outline.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12 20a7 7 0 0 1-7-7a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7m7.03-12.61l1.42-1.42c-.45-.51-.9-.97-1.41-1.41L17.62 6c-1.55-1.26-3.5-2-5.62-2a9 9 0 0 0-9 9a9 9 0 0 0 9 9c5 0 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61M11 14h2V8h-2m4-7H9v2h6V1z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/tools.js":
/*!***********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/tools.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/trash-can.js":
/*!***************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/trash-can.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/twitter.js":
/*!*************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/twitter.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/undo.js":
/*!**********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/undo.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/view-dashboard.js":
/*!********************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/view-dashboard.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10z\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/icons-mdi/view-grid.js":
/*!***************************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/icons-mdi/view-grid.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
  "body": "<path d=\"M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3\" fill=\"currentColor\"/>",
  "width": 24,
  "height": 24
};
exports.__esModule = true;
exports["default"] = data;

/***/ }),

/***/ "../neko-ui/node_modules/@iconify/react/dist/icon.js":
/*!***********************************************************!*\
  !*** ../neko-ui/node_modules/@iconify/react/dist/icon.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InlineIcon = exports.Icon = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * Unique id counter
 *
 * @type {number}
 */


var idCounter = 0;
/**
 * Regex used to split dimensions
 *
 * @type {RegExp}
 * @private
 */

var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
/**
 * Attributes used for icon
 *
 * @type {string[]}
 */

var iconAttributes = ['width', 'height', 'inline', 'hFlip', 'vFlip', 'flip', 'rotate', 'align', 'color', 'box'];
/**
 * Default attribute values
 *
 * @type {object}
 */

var defaultAttributes = {
  left: 0,
  top: 0,
  width: 16,
  height: 16,
  rotate: 0,
  hFlip: false,
  vFlip: false
};
/**
 * Add missing properties to icon
 *
 * Important: in PHP version of this library this function is part of Collection class: Collection::addMissingAttributes()
 *
 * JavaScript version uses separate file so this function could be used in React and other components without loading
 * entire Collection class.
 *
 * @param {object} data
 * @return {object}
 */

function normalize(data) {
  // Object.create, compatible with IE11
  var item = Object.create(null);
  var key;

  for (key in defaultAttributes) {
    item[key] = defaultAttributes[key];
  }

  for (key in data) {
    item[key] = data[key];
  } // Attributes derived from other attributes


  if (item.inlineTop === void 0) {
    item.inlineTop = item.top;
  }

  if (item.inlineHeight === void 0) {
    item.inlineHeight = item.height;
  }

  if (item.verticalAlign === void 0) {
    // -0.143 if icon is designed for 14px height,
    // otherwise assume icon is designed for 16px height
    item.verticalAlign = item.height % 7 === 0 && item.height % 8 !== 0 ? -0.143 : -0.125;
  }

  return item;
}
/**
 * Get preserveAspectRatio attribute value
 *
 * @param {object} align
 * @return {string}
 * @private
 */


function getAlignment(align) {
  var result;

  switch (align.horizontal) {
    case 'left':
      result = 'xMin';
      break;

    case 'right':
      result = 'xMax';
      break;

    default:
      result = 'xMid';
  }

  switch (align.vertical) {
    case 'top':
      result += 'YMin';
      break;

    case 'bottom':
      result += 'YMax';
      break;

    default:
      result += 'YMid';
  }

  result += align.slice ? ' slice' : ' meet';
  return result;
}
/**
 * SVG class
 *
 * @see @iconify/json-tools/src/svg.js
 */


var SVG = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * @param icon Icon data
   *  Use Collection.getIconData() to retrieve icon data
   */
  function SVG(icon) {
    _classCallCheck(this, SVG);

    this._item = icon;
  }
  /**
   * Get SVG attributes
   *
   * @param {object} props Custom properties (same as query string in Iconify API)
   * @returns {string}
   */


  _createClass(SVG, [{
    key: "getAttributes",
    value: function getAttributes(props) {
      var item = this._item;

      if (_typeof(props) !== 'object') {
        props = Object.create(null);
      } // Set data


      var align = {
        horizontal: 'center',
        vertical: 'middle',
        slice: false
      };
      var transform = {
        rotate: item.rotate,
        hFlip: item.hFlip,
        vFlip: item.vFlip
      };
      var style = Object.create(null);
      var attributes = Object.create(null); // Get width/height

      var inline = props.inline === true || props.inline === 'true' || props.inline === '1';
      var box = {
        left: item.left,
        top: inline ? item.inlineTop : item.top,
        width: item.width,
        height: inline ? item.inlineHeight : item.height
      }; // Transformations

      ['hFlip', 'vFlip'].forEach(function (key) {
        if (props[key] !== void 0 && (props[key] === true || props[key] === 'true' || props[key] === '1')) {
          transform[key] = !transform[key];
        }
      });

      if (props.flip !== void 0) {
        props.flip.toLowerCase().split(/[\s,]+/).forEach(function (value) {
          switch (value) {
            case 'horizontal':
              transform.hFlip = !transform.hFlip;
              break;

            case 'vertical':
              transform.vFlip = !transform.vFlip;
          }
        });
      }

      if (props.rotate !== void 0) {
        var value = props.rotate;

        if (typeof value === 'number') {
          transform.rotate += value;
        } else if (typeof value === 'string') {
          var units = value.replace(/^-?[0-9.]*/, '');

          if (units === '') {
            value = parseInt(value);

            if (!isNaN(value)) {
              transform.rotate += value;
            }
          } else if (units !== value) {
            var split = false;

            switch (units) {
              case '%':
                // 25% -> 1, 50% -> 2, ...
                split = 25;
                break;

              case 'deg':
                // 90deg -> 1, 180deg -> 2, ...
                split = 90;
            }

            if (split) {
              value = parseInt(value.slice(0, value.length - units.length));

              if (!isNaN(value)) {
                transform.rotate += Math.round(value / split);
              }
            }
          }
        }
      } // Apply transformations to box


      var transformations = [],
          tempValue;

      if (transform.hFlip) {
        if (transform.vFlip) {
          transform.rotate += 2;
        } else {
          // Horizontal flip
          transformations.push('translate(' + (box.width + box.left) + ' ' + (0 - box.top) + ')');
          transformations.push('scale(-1 1)');
          box.top = box.left = 0;
        }
      } else if (transform.vFlip) {
        // Vertical flip
        transformations.push('translate(' + (0 - box.left) + ' ' + (box.height + box.top) + ')');
        transformations.push('scale(1 -1)');
        box.top = box.left = 0;
      }

      switch (transform.rotate % 4) {
        case 1:
          // 90deg
          tempValue = box.height / 2 + box.top;
          transformations.unshift('rotate(90 ' + tempValue + ' ' + tempValue + ')'); // swap width/height and x/y

          if (box.left !== 0 || box.top !== 0) {
            tempValue = box.left;
            box.left = box.top;
            box.top = tempValue;
          }

          if (box.width !== box.height) {
            tempValue = box.width;
            box.width = box.height;
            box.height = tempValue;
          }

          break;

        case 2:
          // 180deg
          transformations.unshift('rotate(180 ' + (box.width / 2 + box.left) + ' ' + (box.height / 2 + box.top) + ')');
          break;

        case 3:
          // 270deg
          tempValue = box.width / 2 + box.left;
          transformations.unshift('rotate(-90 ' + tempValue + ' ' + tempValue + ')'); // swap width/height and x/y

          if (box.left !== 0 || box.top !== 0) {
            tempValue = box.left;
            box.left = box.top;
            box.top = tempValue;
          }

          if (box.width !== box.height) {
            tempValue = box.width;
            box.width = box.height;
            box.height = tempValue;
          }

          break;
      } // Calculate dimensions
      // Values for width/height: null = default, 'auto' = from svg, false = do not set
      // Default: if both values aren't set, height defaults to '1em', width is calculated from height


      var customWidth = props.width ? props.width : null;
      var customHeight = props.height ? props.height : null;
      var width, height;

      if (customWidth === null && customHeight === null) {
        customHeight = '1em';
      }

      if (customWidth !== null && customHeight !== null) {
        width = customWidth;
        height = customHeight;
      } else if (customWidth !== null) {
        width = customWidth;
        height = SVG.calculateDimension(width, box.height / box.width);
      } else {
        height = customHeight;
        width = SVG.calculateDimension(height, box.width / box.height);
      }

      if (width !== false) {
        attributes.width = width === 'auto' ? box.width : width;
      }

      if (height !== false) {
        attributes.height = height === 'auto' ? box.height : height;
      } // Add vertical-align for inline icon


      if (inline && item.verticalAlign !== 0) {
        style['vertical-align'] = item.verticalAlign + 'em';
      } // Check custom alignment


      if (props.align !== void 0) {
        props.align.toLowerCase().split(/[\s,]+/).forEach(function (value) {
          switch (value) {
            case 'left':
            case 'right':
            case 'center':
              align.horizontal = value;
              break;

            case 'top':
            case 'bottom':
            case 'middle':
              align.vertical = value;
              break;

            case 'crop':
              align.slice = true;
              break;

            case 'meet':
              align.slice = false;
          }
        });
      } // Generate viewBox and preserveAspectRatio attributes


      attributes.preserveAspectRatio = getAlignment(align);
      attributes.viewBox = box.left + ' ' + box.top + ' ' + box.width + ' ' + box.height; // Generate body

      var body = SVG.replaceIDs(item.body);

      if (props.color !== void 0) {
        body = body.replace(/currentColor/g, props.color);
      }

      if (transformations.length) {
        body = '<g transform="' + transformations.join(' ') + '">' + body + '</g>';
      }

      if (props.box === true || props.box === 'true' || props.box === '1') {
        // Add transparent bounding box
        body += '<rect x="' + box.left + '" y="' + box.top + '" width="' + box.width + '" height="' + box.height + '" fill="rgba(0, 0, 0, 0)" />';
      }

      return {
        attributes: attributes,
        body: body,
        style: style
      };
    }
    /**
     * Generate SVG
     *
     * @param {object} props Custom properties (same as query string in Iconify API)
     * @param {boolean} [addExtra] True if extra attributes should be added to SVG.
     *  Due to lack of functions in JavaScript for escaping attributes, it is your job to make sure key and value are both properly escaped. Default value is false.
     * @returns {string}
     */

  }, {
    key: "getSVG",
    value: function getSVG(props, addExtra) {
      var attributes = SVG.splitAttributes(props),
          data = this.getAttributes(attributes.icon);
      var svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'; // Add extra attributes - assume that their names and values are escaped

      if (addExtra) {
        Object.keys(attributes.node).forEach(function (attr) {
          svg += ' ' + attr + '="' + attributes.node[attr] + '"';
        });
      } // Add SVG attributes


      Object.keys(data.attributes).forEach(function (attr) {
        svg += ' ' + attr + '="' + data.attributes[attr] + '"';
      }); // Add style with 360deg transformation to style to prevent subpixel rendering bug

      svg += ' style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);';
      Object.keys(data.style).forEach(function (attr) {
        svg += ' ' + attr + ': ' + data.style[attr] + ';';
      });

      if (props && props.style !== void 0) {
        svg += props.style;
      }

      svg += '">';
      svg += data.body + '</svg>';
      return svg;
    }
    /**
     * Split attributes
     *
     * @param props
     * @return {{icon: {}, node: {}}}
     */

  }], [{
    key: "splitAttributes",
    value: function splitAttributes(props) {
      var result = {
        icon: Object.create(null),
        node: Object.create(null)
      };
      Object.keys(props).forEach(function (name) {
        result[iconAttributes.indexOf(name) === -1 ? 'node' : 'icon'][name] = props[name];
      });
      return result;
    }
    /**
     * Calculate second dimension when only 1 dimension is set
     *
     * @param {string|number} size One dimension (such as width)
     * @param {number} ratio Width/height ratio.
     *      If size == width, ratio = height/width
     *      If size == height, ratio = width/height
     * @param {number} [precision] Floating number precision in result to minimize output. Default = 100
     * @return {string|number|null} Another dimension, null on error
     */

  }, {
    key: "calculateDimension",
    value: function calculateDimension(size, ratio, precision) {
      if (ratio === 1) {
        return size;
      }

      precision = precision === void 0 ? 100 : precision;

      if (typeof size === 'number') {
        return Math.ceil(size * ratio * precision) / precision;
      } // split code into sets of strings and numbers


      var split = size.split(unitsSplit);

      if (split === null || !split.length) {
        return null;
      }

      var results = [],
          code = split.shift(),
          isNumber = unitsTest.test(code),
          num;

      while (true) {
        if (isNumber) {
          num = parseFloat(code);

          if (isNaN(num)) {
            results.push(code);
          } else {
            results.push(Math.ceil(num * ratio * precision) / precision);
          }
        } else {
          results.push(code);
        } // next


        code = split.shift();

        if (code === void 0) {
          return results.join('');
        }

        isNumber = !isNumber;
      }
    }
    /**
     * Replace IDs in SVG output with unique IDs
     * Fast replacement without parsing XML, assuming commonly used patterns.
     *
     * @param {string} body
     * @return {string}
     */

  }, {
    key: "replaceIDs",
    value: function replaceIDs(body) {
      var regex = /\sid="(\S+)"/g,
          ids = [],
          match,
          prefix;

      function strReplace(search, replace, subject) {
        var pos = 0;

        while ((pos = subject.indexOf(search, pos)) !== -1) {
          subject = subject.slice(0, pos) + replace + subject.slice(pos + search.length);
          pos += replace.length;
        }

        return subject;
      } // Find all IDs


      while (match = regex.exec(body)) {
        ids.push(match[1]);
      }

      if (!ids.length) {
        return body;
      }

      prefix = 'IconifyId-' + Date.now().toString(16) + '-' + (Math.random() * 0x1000000 | 0).toString(16) + '-'; // Replace with unique ids

      ids.forEach(function (id) {
        var newID = prefix + idCounter;
        idCounter++;
        body = strReplace('="' + id + '"', '="' + newID + '"', body);
        body = strReplace('="#' + id + '"', '="#' + newID + '"', body);
        body = strReplace('(#' + id + ')', '(#' + newID + ')', body);
      });
      return body;
    }
  }]);

  return SVG;
}();
/**
 * Create React component with SVG data
 *
 * @param {object} props
 * @param {boolean} inline
 * @return {null|React.Component}
 */


function component(props, inline) {
  if (_typeof(props.icon) !== 'object') {
    return null;
  } // Split properties into SVG properties and icon properties


  var split = SVG.splitAttributes(props),
      iconProps = split.icon,
      customAttributes = split.node;
  delete customAttributes.icon; // Set default inline value

  if (iconProps.inline === void 0) {
    iconProps.inline = inline;
  } // Get SVG data


  var svg = new SVG(normalize(props.icon));
  var iconData = svg.getAttributes(iconProps); // Set style

  var style = {
    transform: 'rotate(360deg)'
  };

  if (iconData.style['vertical-align'] !== void 0) {
    style.verticalAlign = iconData.style['vertical-align'];
  }

  if (props.style !== void 0) {
    for (var _key in props.style) {
      style[_key] = props.style[_key];
    }
  } // Generate element attributes


  var attributes = {
    xmlns: 'http://www.w3.org/2000/svg',
    focusable: false,
    style: style
  };
  var key;

  for (key in customAttributes) {
    attributes[key] = customAttributes[key];
  }

  for (key in iconData.attributes) {
    attributes[key] = iconData.attributes[key];
  }

  attributes.dangerouslySetInnerHTML = {
    __html: iconData.body
  }; // Generate SVG

  return _react["default"].createElement('svg', attributes, null);
}
/**
 * Icon without vertical alignment
 *
 * @param {object} props
 * @return {React.Component}
 * @constructor
 */


var Icon = function Icon(props) {
  return component(props, false);
};
/**
 * Icon with vertical alignment
 *
 * @param {object} props
 * @return {React.Component}
 * @constructor
 */


exports.Icon = Icon;

var InlineIcon = function InlineIcon(props) {
  return component(props, true);
};
/**
 * Default export
 */


exports.InlineIcon = InlineIcon;
var _default = Icon;
exports["default"] = _default;

/***/ }),

/***/ "../neko-ui/node_modules/eventemitter3/index.js":
/*!******************************************************!*\
  !*** ../neko-ui/node_modules/eventemitter3/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */

function Events() {} //
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//


if (Object.create) {
  Events.prototype = Object.create(null); //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //

  if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */


function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */


function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once),
      evt = prefix ? prefix + event : event;
  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
  return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */


function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */


function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */


EventEmitter.prototype.eventNames = function eventNames() {
  var names = [],
      events,
      name;
  if (this._eventsCount === 0) return names;

  for (name in events = this._events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */


EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event,
      handlers = this._events[evt];
  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */


EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event,
      listeners = this._events[evt];
  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */


EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return false;
  var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;

      case 2:
        return listeners.fn.call(listeners.context, a1), true;

      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;

      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;

      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
        j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);
          break;

        case 2:
          listeners[i].fn.call(listeners[i].context, a1);
          break;

        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);
          break;

        case 4:
          listeners[i].fn.call(listeners[i].context, a1, a2, a3);
          break;

        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
            args[j - 1] = arguments[j];
          }
          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;
  if (!this._events[evt]) return this;

  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
        events.push(listeners[i]);
      }
    } //
    // Reset the array, or remove it completely if we have no more listeners.
    //


    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
  }

  return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */


EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
}; //
// Alias methods names because people roll like that.
//


EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on; //
// Expose the prefix.
//

EventEmitter.prefixed = prefix; //
// Allow `EventEmitter` to be imported as module namespace.
//

EventEmitter.EventEmitter = EventEmitter; //
// Expose the module.
//

if (true) {
  module.exports = EventEmitter;
}

/***/ }),

/***/ "../neko-ui/node_modules/exenv/index.js":
/*!**********************************************!*\
  !*** ../neko-ui/node_modules/exenv/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/

/* global define */
(function () {
  'use strict';

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen
  };

  if ( true && _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) === 'object' && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return ExecutionEnvironment;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( true && module.exports) {
    module.exports = ExecutionEnvironment;
  } else {
    window.ExecutionEnvironment = ExecutionEnvironment;
  }
})();

/***/ }),

/***/ "../neko-ui/node_modules/fast-deep-equal/index.js":
/*!********************************************************!*\
  !*** ../neko-ui/node_modules/fast-deep-equal/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;
    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
};

/***/ }),

/***/ "../neko-ui/node_modules/object-assign/index.js":
/*!******************************************************!*\
  !*** ../neko-ui/node_modules/object-assign/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../neko-ui/node_modules/p-finally/index.js":
/*!**************************************************!*\
  !*** ../neko-ui/node_modules/p-finally/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (promise, onFinally) {
  onFinally = onFinally || function () {};

  return promise.then(function (val) {
    return new Promise(function (resolve) {
      resolve(onFinally());
    }).then(function () {
      return val;
    });
  }, function (err) {
    return new Promise(function (resolve) {
      resolve(onFinally());
    }).then(function () {
      throw err;
    });
  });
};

/***/ }),

/***/ "../neko-ui/node_modules/p-queue/dist/index.js":
/*!*****************************************************!*\
  !*** ../neko-ui/node_modules/p-queue/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EventEmitter = __webpack_require__(/*! eventemitter3 */ "../neko-ui/node_modules/eventemitter3/index.js");

var p_timeout_1 = __webpack_require__(/*! p-timeout */ "../neko-ui/node_modules/p-timeout/index.js");

var priority_queue_1 = __webpack_require__(/*! ./priority-queue */ "../neko-ui/node_modules/p-queue/dist/priority-queue.js"); // eslint-disable-next-line @typescript-eslint/no-empty-function


var empty = function empty() {};

var timeoutError = new p_timeout_1.TimeoutError();
/**
Promise queue with concurrency control.
*/

var PQueue = /*#__PURE__*/function (_EventEmitter) {
  _inherits(PQueue, _EventEmitter);

  var _super = _createSuper(PQueue);

  function PQueue(options) {
    var _this;

    _classCallCheck(this, PQueue);

    var _a, _b, _c, _d;

    _this = _super.call(this);
    Object.defineProperty(_assertThisInitialized(_this), "_carryoverConcurrencyCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_isIntervalIgnored", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_intervalCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_intervalCap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_interval", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_intervalEnd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_intervalId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_timeoutId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_queue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_queueClass", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_pendingCount", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    }); // The `!` is needed because of https://github.com/microsoft/TypeScript/issues/32194

    Object.defineProperty(_assertThisInitialized(_this), "_concurrency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_isPaused", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_resolveEmpty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: empty
    });
    Object.defineProperty(_assertThisInitialized(_this), "_resolveIdle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: empty
    });
    Object.defineProperty(_assertThisInitialized(_this), "_timeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "_throwOnTimeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    }); // eslint-disable-next-line @typescript-eslint/consistent-type-assertions

    options = Object.assign({
      carryoverConcurrencyCount: false,
      intervalCap: Infinity,
      interval: 0,
      concurrency: Infinity,
      autoStart: true,
      queueClass: priority_queue_1["default"]
    }, options);

    if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
      throw new TypeError("Expected `intervalCap` to be a number from 1 and up, got `".concat((_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '', "` (").concat(_typeof(options.intervalCap), ")"));
    }

    if (options.interval === undefined || !(Number.isFinite(options.interval) && options.interval >= 0)) {
      throw new TypeError("Expected `interval` to be a finite number >= 0, got `".concat((_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '', "` (").concat(_typeof(options.interval), ")"));
    }

    _this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
    _this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
    _this._intervalCap = options.intervalCap;
    _this._interval = options.interval;
    _this._queue = new options.queueClass();
    _this._queueClass = options.queueClass;
    _this.concurrency = options.concurrency;
    _this._timeout = options.timeout;
    _this._throwOnTimeout = options.throwOnTimeout === true;
    _this._isPaused = options.autoStart === false;
    return _this;
  }

  _createClass(PQueue, [{
    key: "_doesIntervalAllowAnother",
    get: function get() {
      return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
    }
  }, {
    key: "_doesConcurrentAllowAnother",
    get: function get() {
      return this._pendingCount < this._concurrency;
    }
  }, {
    key: "_next",
    value: function _next() {
      this._pendingCount--;

      this._tryToStartAnother();
    }
  }, {
    key: "_resolvePromises",
    value: function _resolvePromises() {
      this._resolveEmpty();

      this._resolveEmpty = empty;

      if (this._pendingCount === 0) {
        this._resolveIdle();

        this._resolveIdle = empty;
        this.emit('idle');
      }
    }
  }, {
    key: "_onResumeInterval",
    value: function _onResumeInterval() {
      this._onInterval();

      this._initializeIntervalIfNeeded();

      this._timeoutId = undefined;
    }
  }, {
    key: "_isIntervalPaused",
    value: function _isIntervalPaused() {
      var _this2 = this;

      var now = Date.now();

      if (this._intervalId === undefined) {
        var delay = this._intervalEnd - now;

        if (delay < 0) {
          // Act as the interval was done
          // We don't need to resume it here because it will be resumed on line 160
          this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        } else {
          // Act as the interval is pending
          if (this._timeoutId === undefined) {
            this._timeoutId = setTimeout(function () {
              _this2._onResumeInterval();
            }, delay);
          }

          return true;
        }
      }

      return false;
    }
  }, {
    key: "_tryToStartAnother",
    value: function _tryToStartAnother() {
      if (this._queue.size === 0) {
        // We can clear the interval ("pause")
        // Because we can redo it later ("resume")
        if (this._intervalId) {
          clearInterval(this._intervalId);
        }

        this._intervalId = undefined;

        this._resolvePromises();

        return false;
      }

      if (!this._isPaused) {
        var canInitializeInterval = !this._isIntervalPaused();

        if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
          this.emit('active');

          this._queue.dequeue()();

          if (canInitializeInterval) {
            this._initializeIntervalIfNeeded();
          }

          return true;
        }
      }

      return false;
    }
  }, {
    key: "_initializeIntervalIfNeeded",
    value: function _initializeIntervalIfNeeded() {
      var _this3 = this;

      if (this._isIntervalIgnored || this._intervalId !== undefined) {
        return;
      }

      this._intervalId = setInterval(function () {
        _this3._onInterval();
      }, this._interval);
      this._intervalEnd = Date.now() + this._interval;
    }
  }, {
    key: "_onInterval",
    value: function _onInterval() {
      if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
        clearInterval(this._intervalId);
        this._intervalId = undefined;
      }

      this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;

      this._processQueue();
    }
    /**
    Executes all queued functions until it reaches the limit.
    */

  }, {
    key: "_processQueue",
    value: function _processQueue() {
      // eslint-disable-next-line no-empty
      while (this._tryToStartAnother()) {}
    }
  }, {
    key: "concurrency",
    get: function get() {
      return this._concurrency;
    },
    set: function set(newConcurrency) {
      if (!(typeof newConcurrency === 'number' && newConcurrency >= 1)) {
        throw new TypeError("Expected `concurrency` to be a number from 1 and up, got `".concat(newConcurrency, "` (").concat(_typeof(newConcurrency), ")"));
      }

      this._concurrency = newConcurrency;

      this._processQueue();
    }
    /**
    Adds a sync or async task to the queue. Always returns a promise.
    */

  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fn) {
        var _this4 = this;

        var options,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var run = /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var operation;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _this4._pendingCount++;
                              _this4._intervalCount++;
                              _context.prev = 2;
                              operation = _this4._timeout === undefined && options.timeout === undefined ? fn() : p_timeout_1["default"](Promise.resolve(fn()), options.timeout === undefined ? _this4._timeout : options.timeout, function () {
                                if (options.throwOnTimeout === undefined ? _this4._throwOnTimeout : options.throwOnTimeout) {
                                  reject(timeoutError);
                                }

                                return undefined;
                              });
                              _context.t0 = resolve;
                              _context.next = 7;
                              return operation;

                            case 7:
                              _context.t1 = _context.sent;
                              (0, _context.t0)(_context.t1);
                              _context.next = 14;
                              break;

                            case 11:
                              _context.prev = 11;
                              _context.t2 = _context["catch"](2);
                              reject(_context.t2);

                            case 14:
                              _this4._next();

                            case 15:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, null, [[2, 11]]);
                    }));

                    return function run() {
                      return _ref.apply(this, arguments);
                    };
                  }();

                  _this4._queue.enqueue(run, options);

                  _this4._tryToStartAnother();
                }));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function add(_x) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
    /**
    Same as `.add()`, but accepts an array of sync or async functions.
     @returns A promise that resolves when all functions are resolved.
    */

  }, {
    key: "addAll",
    value: function () {
      var _addAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(functions, options) {
        var _this5 = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", Promise.all(functions.map( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(function_) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            return _context3.abrupt("return", _this5.add(function_, options));

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }())));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function addAll(_x2, _x3) {
        return _addAll.apply(this, arguments);
      }

      return addAll;
    }()
    /**
    Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
    */

  }, {
    key: "start",
    value: function start() {
      if (!this._isPaused) {
        return this;
      }

      this._isPaused = false;

      this._processQueue();

      return this;
    }
    /**
    Put queue execution on hold.
    */

  }, {
    key: "pause",
    value: function pause() {
      this._isPaused = true;
    }
    /**
    Clear the queue.
    */

  }, {
    key: "clear",
    value: function clear() {
      this._queue = new this._queueClass();
    }
    /**
    Can be called multiple times. Useful if you for example add additional items at a later time.
     @returns A promise that settles when the queue becomes empty.
    */

  }, {
    key: "onEmpty",
    value: function () {
      var _onEmpty = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this6 = this;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this._queue.size === 0)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                return _context5.abrupt("return", new Promise(function (resolve) {
                  var existingResolve = _this6._resolveEmpty;

                  _this6._resolveEmpty = function () {
                    existingResolve();
                    resolve();
                  };
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function onEmpty() {
        return _onEmpty.apply(this, arguments);
      }

      return onEmpty;
    }()
    /**
    The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
     @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
    */

  }, {
    key: "onIdle",
    value: function () {
      var _onIdle = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _this7 = this;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(this._pendingCount === 0 && this._queue.size === 0)) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                return _context6.abrupt("return", new Promise(function (resolve) {
                  var existingResolve = _this7._resolveIdle;

                  _this7._resolveIdle = function () {
                    existingResolve();
                    resolve();
                  };
                }));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onIdle() {
        return _onIdle.apply(this, arguments);
      }

      return onIdle;
    }()
    /**
    Size of the queue.
    */

  }, {
    key: "size",
    get: function get() {
      return this._queue.size;
    }
    /**
    Size of the queue, filtered by the given options.
     For example, this can be used to find the number of items remaining in the queue with a specific priority level.
    */

  }, {
    key: "sizeBy",
    value: function sizeBy(options) {
      return this._queue.filter(options).length;
    }
    /**
    Number of pending promises.
    */

  }, {
    key: "pending",
    get: function get() {
      return this._pendingCount;
    }
    /**
    Whether the queue is currently paused.
    */

  }, {
    key: "isPaused",
    get: function get() {
      return this._isPaused;
    }
  }, {
    key: "timeout",
    get: function get() {
      return this._timeout;
    }
    /**
    Set the timeout for future operations.
    */
    ,
    set: function set(milliseconds) {
      this._timeout = milliseconds;
    }
  }]);

  return PQueue;
}(EventEmitter);

exports["default"] = PQueue;

/***/ }),

/***/ "../neko-ui/node_modules/p-queue/dist/lower-bound.js":
/*!***********************************************************!*\
  !*** ../neko-ui/node_modules/p-queue/dist/lower-bound.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Port of lower_bound from https://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion

function lowerBound(array, value, comparator) {
  var first = 0;
  var count = array.length;

  while (count > 0) {
    var step = count / 2 | 0;
    var it = first + step;

    if (comparator(array[it], value) <= 0) {
      first = ++it;
      count -= step + 1;
    } else {
      count = step;
    }
  }

  return first;
}

exports["default"] = lowerBound;

/***/ }),

/***/ "../neko-ui/node_modules/p-queue/dist/priority-queue.js":
/*!**************************************************************!*\
  !*** ../neko-ui/node_modules/p-queue/dist/priority-queue.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var lower_bound_1 = __webpack_require__(/*! ./lower-bound */ "../neko-ui/node_modules/p-queue/dist/lower-bound.js");

var PriorityQueue = /*#__PURE__*/function () {
  function PriorityQueue() {
    _classCallCheck(this, PriorityQueue);

    Object.defineProperty(this, "_queue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }

  _createClass(PriorityQueue, [{
    key: "enqueue",
    value: function enqueue(run, options) {
      options = Object.assign({
        priority: 0
      }, options);
      var element = {
        priority: options.priority,
        run: run
      };

      if (this.size && this._queue[this.size - 1].priority >= options.priority) {
        this._queue.push(element);

        return;
      }

      var index = lower_bound_1["default"](this._queue, element, function (a, b) {
        return b.priority - a.priority;
      });

      this._queue.splice(index, 0, element);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var item = this._queue.shift();

      return item === null || item === void 0 ? void 0 : item.run;
    }
  }, {
    key: "filter",
    value: function filter(options) {
      return this._queue.filter(function (element) {
        return element.priority === options.priority;
      }).map(function (element) {
        return element.run;
      });
    }
  }, {
    key: "size",
    get: function get() {
      return this._queue.length;
    }
  }]);

  return PriorityQueue;
}();

exports["default"] = PriorityQueue;

/***/ }),

/***/ "../neko-ui/node_modules/p-timeout/index.js":
/*!**************************************************!*\
  !*** ../neko-ui/node_modules/p-timeout/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var pFinally = __webpack_require__(/*! p-finally */ "../neko-ui/node_modules/p-finally/index.js");

var TimeoutError = /*#__PURE__*/function (_Error) {
  _inherits(TimeoutError, _Error);

  var _super = _createSuper(TimeoutError);

  function TimeoutError(message) {
    var _this;

    _classCallCheck(this, TimeoutError);

    _this = _super.call(this, message);
    _this.name = 'TimeoutError';
    return _this;
  }

  return TimeoutError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var pTimeout = function pTimeout(promise, milliseconds, fallback) {
  return new Promise(function (resolve, reject) {
    if (typeof milliseconds !== 'number' || milliseconds < 0) {
      throw new TypeError('Expected `milliseconds` to be a positive number');
    }

    if (milliseconds === Infinity) {
      resolve(promise);
      return;
    }

    var timer = setTimeout(function () {
      if (typeof fallback === 'function') {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }

        return;
      }

      var message = typeof fallback === 'string' ? fallback : "Promise timed out after ".concat(milliseconds, " milliseconds");
      var timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);

      if (typeof promise.cancel === 'function') {
        promise.cancel();
      }

      reject(timeoutError);
    }, milliseconds); // TODO: Use native `finally` keyword when targeting Node.js 10

    pFinally( // eslint-disable-next-line promise/prefer-await-to-then
    promise.then(resolve, reject), function () {
      clearTimeout(timer);
    });
  });
};

module.exports = pTimeout; // TODO: Remove this for the next major release

module.exports["default"] = pTimeout;
module.exports.TimeoutError = TimeoutError;

/***/ }),

/***/ "../neko-ui/node_modules/polished/dist/polished.esm.js":
/*!*************************************************************!*\
  !*** ../neko-ui/node_modules/polished/dist/polished.esm.js ***!
  \*************************************************************/
/*! exports provided: adjustHue, animation, backgroundImages, backgrounds, between, border, borderColor, borderRadius, borderStyle, borderWidth, buttons, clearFix, complement, cover, cssVar, darken, desaturate, directionalProperty, ellipsis, em, fluidRange, fontFace, getContrast, getLuminance, getValueAndUnit, grayscale, hiDPI, hideText, hideVisually, hsl, hslToColorString, hsla, invert, lighten, linearGradient, margin, math, meetsContrastGuidelines, mix, modularScale, normalize, opacify, padding, parseToHsl, parseToRgb, position, radialGradient, readableColor, rem, retinaImage, rgb, rgbToColorString, rgba, saturate, setHue, setLightness, setSaturation, shade, size, stripUnit, textInputs, timingFunctions, tint, toColorString, transitions, transparentize, triangle, wordWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustHue", function() { return curriedAdjustHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImages", function() { return backgroundImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgrounds", function() { return backgrounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFix", function() { return clearFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return complement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cover", function() { return cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssVar", function() { return cssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return curriedDarken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desaturate", function() { return curriedDesaturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionalProperty", function() { return directionalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsis", function() { return ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "em", function() { return em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fluidRange", function() { return fluidRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueAndUnit", function() { return getValueAndUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return grayscale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiDPI", function() { return hiDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideText", function() { return hideText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideVisually", function() { return hideVisually; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToColorString", function() { return hslToColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return curriedLighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearGradient", function() { return linearGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "math", function() { return math; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetsContrastGuidelines", function() { return meetsContrastGuidelines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return curriedMix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modularScale", function() { return modularScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacify", function() { return curriedOpacify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToHsl", function() { return parseToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToRgb", function() { return parseToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radialGradient", function() { return radialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readableColor", function() { return readableColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retinaImage", function() { return retinaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToColorString", function() { return rgbToColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return curriedSaturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHue", function() { return curriedSetHue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLightness", function() { return curriedSetLightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaturation", function() { return curriedSetSaturation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shade", function() { return curriedShade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUnit", function() { return stripUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputs", function() { return textInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingFunctions", function() { return timingFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tint", function() { return curriedTint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toColorString", function() { return toColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transparentize", function() { return curriedTransparentize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangle", function() { return triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordWrap", function() { return wordWrap; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "../neko-ui/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function last() {
  var _ref;

  return _ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref];
}

function negation(a) {
  return -a;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function factorial(a) {
  if (a % 1 || !(+a >= 0)) return NaN;
  if (a > 170) return Infinity;else if (a === 0) return 1;else {
    return a * factorial(a - 1);
  }
}

function power(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  return Math.sqrt(a);
}

function max() {
  return Math.max.apply(Math, arguments);
}

function min() {
  return Math.min.apply(Math, arguments);
}

function comma() {
  return Array.of.apply(Array, arguments);
}

var defaultMathSymbols = {
  symbols: {
    '!': {
      postfix: {
        symbol: '!',
        f: factorial,
        notation: 'postfix',
        precedence: 6,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '!',
      regSymbol: '!'
    },
    '^': {
      infix: {
        symbol: '^',
        f: power,
        notation: 'infix',
        precedence: 5,
        rightToLeft: 1,
        argCount: 2
      },
      symbol: '^',
      regSymbol: '\\^'
    },
    '*': {
      infix: {
        symbol: '*',
        f: multiplication,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: '*',
      regSymbol: '\\*'
    },
    '/': {
      infix: {
        symbol: '/',
        f: division,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: '/',
      regSymbol: '/'
    },
    '+': {
      infix: {
        symbol: '+',
        f: addition,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: '+',
        f: last,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '+',
      regSymbol: '\\+'
    },
    '-': {
      infix: {
        symbol: '-',
        f: subtraction,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: '-',
        f: negation,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '-',
      regSymbol: '-'
    },
    ',': {
      infix: {
        symbol: ',',
        f: comma,
        notation: 'infix',
        precedence: 1,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: ',',
      regSymbol: ','
    },
    '(': {
      prefix: {
        symbol: '(',
        f: last,
        notation: 'prefix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '(',
      regSymbol: '\\('
    },
    ')': {
      postfix: {
        symbol: ')',
        f: undefined,
        notation: 'postfix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: ')',
      regSymbol: '\\)'
    },
    min: {
      func: {
        symbol: 'min',
        f: min,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'min',
      regSymbol: 'min\\b'
    },
    max: {
      func: {
        symbol: 'max',
        f: max,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'max',
      regSymbol: 'max\\b'
    },
    sqrt: {
      func: {
        symbol: 'sqrt',
        f: sqrt,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'sqrt',
      regSymbol: 'sqrt\\b'
    }
  }
}; // based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */

var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found.\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (false) {} else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this);
  }

  return PolishedError;
}( /*#__PURE__*/Object(_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Error));

var unitRegExp = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g; // Merges additional math functionality into the defaults.

function mergeSymbolMaps(additionalSymbols) {
  var symbolMap = {};
  symbolMap.symbols = additionalSymbols ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultMathSymbols.symbols, {}, additionalSymbols.symbols) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultMathSymbols.symbols);
  return symbolMap;
}

function exec(operators, values) {
  var _ref;

  var op = operators.pop();
  values.push(op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))));
  return op.precedence;
}

function calculate(expression, additionalSymbols) {
  var symbolMap = mergeSymbolMaps(additionalSymbols);
  var match;
  var operators = [symbolMap.symbols['('].prefix];
  var values = [];
  var pattern = new RegExp( // Pattern for numbers
  "\\d+(?:\\.\\d+)?|" + // ...and patterns for individual operators/function names
  Object.keys(symbolMap.symbols).map(function (key) {
    return symbolMap.symbols[key];
  }) // longer symbols should be listed first
  // $FlowFixMe
  .sort(function (a, b) {
    return b.symbol.length - a.symbol.length;
  }) // $FlowFixMe
  .map(function (val) {
    return val.regSymbol;
  }).join('|') + "|(\\S)", 'g');
  pattern.lastIndex = 0; // Reset regular expression object

  var afterValue = false;

  do {
    match = pattern.exec(expression);

    var _ref2 = match || [')', undefined],
        token = _ref2[0],
        bad = _ref2[1];

    var notNumber = symbolMap.symbols[token];
    var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
    var notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix; // Check for syntax errors:

    if (bad || (afterValue ? notAfterValue : notNewValue)) {
      throw new PolishedError(37, match ? match.index : expression.length, expression);
    }

    if (afterValue) {
      // We either have an infix or postfix operator (they should be mutually exclusive)
      var curr = notNumber.postfix || notNumber.infix;

      do {
        var prev = operators[operators.length - 1];
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break; // Apply previous operator, since it has precedence over current one
      } while (exec(operators, values)); // Exit loop after executing an opening parenthesis or function


      afterValue = curr.notation === 'postfix';

      if (curr.symbol !== ')') {
        operators.push(curr); // Postfix always has precedence over any operator that follows after it

        if (afterValue) exec(operators, values);
      }
    } else if (notNumber) {
      // prefix operator or function
      operators.push(notNumber.prefix || notNumber.func);

      if (notNumber.func) {
        // Require an opening parenthesis
        match = pattern.exec(expression);

        if (!match || match[0] !== '(') {
          throw new PolishedError(38, match ? match.index : expression.length, expression);
        }
      }
    } else {
      // number
      values.push(+token);
      afterValue = true;
    }
  } while (match && operators.length);

  if (operators.length) {
    throw new PolishedError(39, match ? match.index : expression.length, expression);
  } else if (match) {
    throw new PolishedError(40, match ? match.index : expression.length, expression);
  } else {
    return values.pop();
  }
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
/**
 * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
 *
 *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 *
 * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: math('12rem + 8rem'),
 *   fontSize: math('(12px + 2px) * 3'),
 *   fontSize: math('3px^2 + sqrt(4)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${math('12rem + 8rem')};
 *   fontSize: ${math('(12px + 2px) * 3')};
 *   fontSize: ${math('3px^2 + sqrt(4)')};
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   fontSize: '20rem',
 *   fontSize: '42px',
 *   fontSize: '11px',
 * }
 */


function math(formula, additionalSymbols) {
  var reversedFormula = reverseString(formula);
  var formulaMatch = reversedFormula.match(unitRegExp); // Check that all units are the same

  if (formulaMatch && !formulaMatch.every(function (unit) {
    return unit === formulaMatch[0];
  })) {
    throw new PolishedError(41);
  }

  var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ''));
  return "" + calculate(cleanFormula, additionalSymbols) + (formulaMatch ? reverseString(formulaMatch[0]) : '');
}

var cssVariableRegex = /--[\S]*/g;
/**
 * Fetches the value of a passed CSS Variable.
 *
 * Passthrough can be enabled (off by default) for when you are unsure of the input and want non-variable values to be returned instead of an error.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background': cssVar('--background-color'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${cssVar('--background-color')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'background': 'red'
 * }
 */

function cssVar(cssVariable, passThrough) {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    if (passThrough) return cssVariable;
    throw new PolishedError(73);
  }

  var variableValue;
  /* eslint-disable */

  /* istanbul ignore next */

  if (document.documentElement !== null) {
    variableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
  }
  /* eslint-enable */


  if (variableValue) {
    return variableValue.trim();
  } else {
    throw new PolishedError(74);
  }
} // @private


function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');

  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }

  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
  return property === joinedProperty ? "" + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};

  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
    }
  }

  return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */


function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  } //  prettier-ignore


  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}
/**
 * Check if a string ends with something
 * @private
 */


function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value minus its unit of measure.
 *
 * @deprecated - stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value, unitReturn) {
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value;
  var matchedValue = value.match(cssRegex);

  if (unitReturn) {
    // eslint-disable-next-line no-console
    console.warn("stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit.");
    if (matchedValue) return [parseFloat(value), matchedValue[2]];
    return [value, undefined];
  }

  if (matchedValue) return parseFloat(value);
  return value;
}
/**
 * Factory function that creates pixel-to-x converters
 * @private
 */


var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new PolishedError(69, to, pxval);
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new PolishedError(70, to, base);
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new PolishedError(71, pxval, to);
    }

    if (typeof newBase === 'string') {
      throw new PolishedError(72, base, to);
    }

    return "" + newPxval / newBase + to;
  };
};
/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */


var em = /*#__PURE__*/pxtoFactory('em');
var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0],
 *   '--unit': getValueAndUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]};
 *   --unit: ${getValueAndUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex$1);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

function getRatio(ratioName) {
  return ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing an em or rem value up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */


function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = '1em';
  }

  if (ratio === void 0) {
    ratio = 1.333;
  }

  if (typeof steps !== 'number') {
    throw new PolishedError(42);
  }

  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new PolishedError(43);
  }

  var _ref = typeof base === 'string' ? getValueAndUnit(base) : [base, ''],
      realBase = _ref[0],
      unit = _ref[1];

  var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

  if (typeof realBase === 'string') {
    throw new PolishedError(44, base);
  }

  return "" + realBase * Math.pow(realRatio, steps) + (unit || '');
}
/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */


var rem = /*#__PURE__*/pxtoFactory('rem');
/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */

function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  var _getValueAndUnit = getValueAndUnit(fromSize),
      unitlessFromSize = _getValueAndUnit[0],
      fromSizeUnit = _getValueAndUnit[1];

  var _getValueAndUnit2 = getValueAndUnit(toSize),
      unitlessToSize = _getValueAndUnit2[0],
      toSizeUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(minScreen),
      unitlessMinScreen = _getValueAndUnit3[0],
      minScreenUnit = _getValueAndUnit3[1];

  var _getValueAndUnit4 = getValueAndUnit(maxScreen),
      unitlessMaxScreen = _getValueAndUnit4[0],
      maxScreenUnit = _getValueAndUnit4[1];

  if (typeof unitlessMinScreen !== 'number' || typeof unitlessMaxScreen !== 'number' || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new PolishedError(47);
  }

  if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || fromSizeUnit !== toSizeUnit) {
    throw new PolishedError(48);
  }

  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base.toFixed(2) + (fromSizeUnit || '') + " + " + (100 * slope).toFixed(2) + "vw)";
}
/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */


function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}
/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */


function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}
/**
 * CSS to represent truncated text with an ellipsis.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */


function ellipsis(width) {
  if (width === void 0) {
    width = '100%';
  }

  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */


function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  if (!Array.isArray(cssProp) && _typeof(cssProp) !== 'object' || cssProp === null) {
    throw new PolishedError(49);
  }

  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};

    for (var _iterator = _createForOfIteratorHelperLoose(cssProp), _step; !(_step = _iterator()).done;) {
      var _extends2, _extends3;

      var obj = _step.value;

      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new PolishedError(50);
      }

      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends2 = {}, _extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends2));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends3 = {}, _extends3[obj.prop] = obj.toSize, _extends3));
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fallbacks, {}, mediaQueries);
  } else {
    var _ref, _ref2, _ref3;

    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new PolishedError(51);
    }

    return _ref3 = {}, _ref3[cssProp.prop] = cssProp.fromSize, _ref3["@media (min-width: " + minScreen + ")"] = (_ref = {}, _ref[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref), _ref3["@media (min-width: " + maxScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = cssProp.toSize, _ref2), _ref3;
  }
}

var dataURIRegex = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;
var formatHintMap = {
  woff: 'woff',
  woff2: 'woff2',
  ttf: 'truetype',
  otf: 'opentype',
  eot: 'embedded-opentype',
  svg: 'svg',
  svgz: 'svg'
};

function generateFormatHint(format, formatHint) {
  if (!formatHint) return '';
  return " format(\"" + formatHintMap[format] + "\")";
}

function isDataURI(fontFilePath) {
  return !!fontFilePath.match(dataURIRegex);
}

function generateFileReferences(fontFilePath, fileFormats, formatHint) {
  if (isDataURI(fontFilePath)) {
    return "url(\"" + fontFilePath + "\")" + generateFormatHint(fileFormats[0], formatHint);
  }

  var fileFontReferences = fileFormats.map(function (format) {
    return "url(\"" + fontFilePath + "." + format + "\")" + generateFormatHint(format, formatHint);
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return "local(\"" + font + "\")";
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats, formatHint) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats, formatHint));
  }

  return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */


function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      _ref$formatHint = _ref.formatHint,
      formatHint = _ref$formatHint === void 0 ? false : _ref$formatHint,
      localFonts = _ref.localFonts,
      unicodeRange = _ref.unicodeRange,
      fontDisplay = _ref.fontDisplay,
      fontVariationSettings = _ref.fontVariationSettings,
      fontFeatureSettings = _ref.fontFeatureSettings; // Error Handling

  if (!fontFamily) throw new PolishedError(55);

  if (!fontFilePath && !localFonts) {
    throw new PolishedError(52);
  }

  if (localFonts && !Array.isArray(localFonts)) {
    throw new PolishedError(53);
  }

  if (!Array.isArray(fileFormats)) {
    throw new PolishedError(54);
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats, formatHint),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight,
      fontDisplay: fontDisplay,
      fontVariationSettings: fontVariationSettings,
      fontFeatureSettings: fontFeatureSettings
    }
  }; // Removes undefined fields for cleaner css object.

  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}
/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */


function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}
/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */


function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}
/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */


function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

function constructGradientValue(literals) {
  var template = '';

  for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i];

    if (i === substitutions.length - 1 && substitutions[i]) {
      var definedValues = substitutions.filter(function (substitute) {
        return !!substitute;
      }); // Adds leading coma if properties preceed color-stops

      if (definedValues.length > 1) {
        template = template.slice(0, -1);
        template += ", " + substitutions[i]; // No trailing space if color-stops is the only param provided
      } else if (definedValues.length === 1) {
        template += "" + substitutions[i];
      }
    } else if (substitutions[i]) {
      template += substitutions[i] + " ";
    }
  }

  return template.trim();
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(["linear-gradient(", "", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */


function linearGradient(_ref) {
  var colorStops = _ref.colorStops,
      fallback = _ref.fallback,
      _ref$toDirection = _ref.toDirection,
      toDirection = _ref$toDirection === void 0 ? '' : _ref$toDirection;

  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(56);
  }

  return {
    backgroundColor: fallback || colorStops[0].split(' ')[0],
    backgroundImage: constructGradientValue(_templateObject(), toDirection, colorStops.join(', '))
  };
}
/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */


function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    main: {
      display: 'block'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      backgroundColor: 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

function _templateObject$1() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(["radial-gradient(", "", "", "", ")"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */


function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      _ref$extent = _ref.extent,
      extent = _ref$extent === void 0 ? '' : _ref$extent,
      fallback = _ref.fallback,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? '' : _ref$shape;

  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(57);
  }

  return {
    backgroundColor: fallback || colorStops[0].split(' ')[0],
    backgroundImage: constructGradientValue(_templateObject$1(), position, shape, extent, colorStops.join(', '))
  };
}
/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */


function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;

  if (extension === void 0) {
    extension = 'png';
  }

  if (retinaSuffix === void 0) {
    retinaSuffix = '_2x';
  }

  if (!filename) {
    throw new PolishedError(58);
  } // Replace the dot at the beginning of the passed extension if one exists


  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize: backgroundSize
  } : {}), _ref;
}
/* eslint-disable key-spacing */


var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
};
/* eslint-enable key-spacing */

function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */


function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  var fullWidth = "" + width[0] + (width[1] || '');
  var halfWidth = "" + width[0] / 2 + (width[1] || '');
  var fullHeight = "" + height[0] + (height[1] || '');
  var halfHeight = "" + height[0] / 2 + (height[1] || '');

  switch (pointingDirection) {
    case 'top':
      return "0 " + halfWidth + " " + fullHeight + " " + halfWidth;

    case 'topLeft':
      return fullWidth + " " + fullHeight + " 0 0";

    case 'left':
      return halfHeight + " " + fullWidth + " " + halfHeight + " 0";

    case 'bottomLeft':
      return fullWidth + " 0 0 " + fullHeight;

    case 'bottom':
      return fullHeight + " " + halfWidth + " 0 " + halfWidth;

    case 'bottomRight':
      return "0 0 " + fullWidth + " " + fullHeight;

    case 'right':
      return halfHeight + " 0 " + halfHeight + " " + fullWidth;

    case 'topRight':
    default:
      return "0 " + fullWidth + " " + fullHeight + " 0";
  }
};

var getBorderColor = function getBorderColor(pointingDirection, foregroundColor, backgroundColor) {
  switch (pointingDirection) {
    case 'top':
    case 'bottomRight':
      return backgroundColor + " " + backgroundColor + " " + foregroundColor + " " + backgroundColor;

    case 'right':
    case 'bottomLeft':
      return backgroundColor + " " + backgroundColor + " " + backgroundColor + " " + foregroundColor;

    case 'bottom':
    case 'topLeft':
      return foregroundColor + " " + backgroundColor + " " + backgroundColor + " " + backgroundColor;

    case 'left':
    case 'topRight':
      return backgroundColor + " " + foregroundColor + " " + backgroundColor + " " + backgroundColor;

    default:
      throw new PolishedError(59);
  }
};
/**
 * CSS to represent triangle with any pointing direction with an optional background color.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent transparent transparent red',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */


function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var widthAndUnit = getValueAndUnit(width);
  var heightAndUnit = getValueAndUnit(height);

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new PolishedError(60);
  }

  return {
    width: '0',
    height: '0',
    borderColor: getBorderColor(pointingDirection, foregroundColor, backgroundColor),
    borderStyle: 'solid',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit)
  };
}
/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */


function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = 'break-word';
  }

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}
/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */


function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}
/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */


var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */


function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (_typeof(value) === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */


function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (_typeof(value) === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */


function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (_typeof(value) === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}
/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */


function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (_typeof(firstValue) === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (_typeof(color) !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
} // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare


function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}
/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated around
 * the color wheel, always producing a positive hue value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */


function adjustHue(degree, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
} // prettier-ignore


var curriedAdjustHue = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(adjustHue);
/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function complement(color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */


function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken);
/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDesaturate = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(desaturate);
/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  if (color === 'transparent') return 0;
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}
/**
 * Returns the contrast ratio between two colors based on
 * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 *
 * @example
 * const contrastRatio = getContrast('#444', '#fff');
 */


function getContrast(color1, color2) {
  var luminance1 = getLuminance(color1);
  var luminance2 = getLuminance(color2);
  return parseFloat((luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05)).toFixed(2));
}
/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */


function grayscale(color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: 0
  }));
}
/**
 * Converts a HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function hslToColorString(color) {
  if (_typeof(color) === 'object' && typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number') {
    if (color.alpha && typeof color.alpha === 'number') {
      return hsla({
        hue: color.hue,
        saturation: color.saturation,
        lightness: color.lightness,
        alpha: color.alpha
      });
    }

    return hsl({
      hue: color.hue,
      saturation: color.saturation,
      lightness: color.lightness
    });
  }

  throw new PolishedError(45);
}
/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */


function invert(color) {
  if (color === 'transparent') return color; // parse color string to rgb

  var value = parseToRgb(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}
/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */


function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
/**
 * Determines which contrast guidelines have been met for two colors.
 * Based on the [contrast calculations recommended by W3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html).
 *
 * @example
 * const scores = meetsContrastGuidelines('#444', '#fff');
 */

function meetsContrastGuidelines(color1, color2) {
  var contrastRatio = getContrast(color1, color2);
  return {
    AA: contrastRatio >= 4.5,
    AALarge: contrastRatio >= 3,
    AAA: contrastRatio >= 7,
    AAALarge: contrastRatio >= 4.5
  };
}
/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */


function mix(weight, color, otherColor) {
  if (color === 'transparent') return otherColor;
  if (otherColor === 'transparent') return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color);

  var color1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  }); // The formula is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method


  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * (parseFloat(weight) / 1.0) + color2.alpha * (1 - parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
} // prettier-ignore


var curriedMix = /*#__PURE__*/curry
/* ::<number | string, string, string, string> */
(mix);
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedOpacify = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(opacify);
var defaultLightReturnColor = '#000';
var defaultDarkReturnColor = '#fff';
/**
 * Returns black or white (or optional light and dark return colors) for best
 * contrast depending on the luminosity of the given color.
 * When passing custom return colors, set `strict` to `true` to ensure that the
 * return color always meets or exceeds WCAG level AA or greater. If this test
 * fails, the default return color (black or white) is returned in place of the
 * custom return color.
 *
 * Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('black', '#001', '#ff8'),
 *   color: readableColor('white', '#001', '#ff8'),
 *   color: readableColor('red', '#333', '#ddd', true)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('black', '#001', '#ff8')};
 *   color: ${readableColor('white', '#001', '#ff8')};
 *   color: ${readableColor('red', '#333', '#ddd', true)};
 * `
 *
 * // CSS in JS Output
 * element {
 *   color: "#fff";
 *   color: "#ff8";
 *   color: "#001";
 *   color: "#000";
 * }
 */

function readableColor(color, lightReturnColor, darkReturnColor, strict) {
  if (lightReturnColor === void 0) {
    lightReturnColor = defaultLightReturnColor;
  }

  if (darkReturnColor === void 0) {
    darkReturnColor = defaultDarkReturnColor;
  }

  if (strict === void 0) {
    strict = false;
  }

  var isLightColor = getLuminance(color) > 0.179;
  var preferredReturnColor = isLightColor ? lightReturnColor : darkReturnColor; // TODO: Make `strict` the default behaviour in the next major release.
  // Without `strict`, this may return a color that does not meet WCAG AA.

  if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
    return preferredReturnColor;
  }

  return isLightColor ? defaultLightReturnColor : defaultDarkReturnColor;
}
/**
 * Converts a RgbColor or RgbaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb` or `rgba`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 * }
 */


function rgbToColorString(color) {
  if (_typeof(color) === 'object' && typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number') {
    if (typeof color.alpha === 'number') {
      return rgba({
        red: color.red,
        green: color.green,
        blue: color.blue,
        alpha: color.alpha
      });
    }

    return rgb({
      red: color.red,
      green: color.green,
      blue: color.blue
    });
  }

  throw new PolishedError(46);
}
/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */


function saturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore


var curriedSaturate = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(saturate);
/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore


var curriedSetHue = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(setHue);
/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore


var curriedSetLightness = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(setLightness);
/**
 * Sets the saturation of a color to the provided value. The saturation range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore


var curriedSetSaturation = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(setSaturation);
/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  if (color === 'transparent') return color;
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore


var curriedShade = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(shade);
/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (color === 'transparent') return color;
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore


var curriedTint = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(tint);
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(transparentize);
/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */

function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  } // Allow single or multiple animations passed


  var multiMode = Array.isArray(args[0]);

  if (!multiMode && args.length > 8) {
    throw new PolishedError(64);
  }

  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new PolishedError(65);
    }

    if (Array.isArray(arg) && arg.length > 8) {
      throw new PolishedError(66);
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');
  return {
    animation: code
  };
}
/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */


function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}
/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */


function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */

function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;

    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */


function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderColor'].concat(values));
}
/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */


function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);

  if (!radius && radius !== 0) {
    throw new PolishedError(62);
  }

  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }

  throw new PolishedError(63);
}
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */


function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
}
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */


function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
}

function generateSelectors(template, state) {
  var stateSuffix = state ? ":" + state : '';
  return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */


function statefulSelectors(states, template, stateMap) {
  if (!template) throw new PolishedError(67);
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];

  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new PolishedError(68);
    }

    selectors.push(generateSelectors(template, states[i]));
  }

  selectors = selectors.join(',');
  return selectors;
}

var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return "button" + state + ",\n  input[type=\"button\"]" + state + ",\n  input[type=\"reset\"]" + state + ",\n  input[type=\"submit\"]" + state;
}
/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */


function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */


function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['margin'].concat(values));
}
/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */


function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['padding'].concat(values));
}

var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(firstValue) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap$1.indexOf(firstValue) >= 0 && firstValue) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, directionalProperty.apply(void 0, [''].concat(values)), {
      position: firstValue
    });
  } else {
    return directionalProperty.apply(void 0, ['', firstValue].concat(values));
  }
}
/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */


function size(height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: height,
    width: width
  };
}

var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return "input[type=\"color\"]" + state + ",\n    input[type=\"date\"]" + state + ",\n    input[type=\"datetime\"]" + state + ",\n    input[type=\"datetime-local\"]" + state + ",\n    input[type=\"email\"]" + state + ",\n    input[type=\"month\"]" + state + ",\n    input[type=\"number\"]" + state + ",\n    input[type=\"password\"]" + state + ",\n    input[type=\"search\"]" + state + ",\n    input[type=\"tel\"]" + state + ",\n    input[type=\"text\"]" + state + ",\n    input[type=\"time\"]" + state + ",\n    input[type=\"url\"]" + state + ",\n    input[type=\"week\"]" + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */


function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}
/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same transition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */


function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];

    if (typeof value !== 'string') {
      throw new PolishedError(61);
    }

    var transitionsString = properties[0].map(function (property) {
      return property + " " + value;
    }).join(', ');
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(', ')
    };
  }
}



/***/ }),

/***/ "../neko-ui/node_modules/prop-types/checkPropTypes.js":
/*!************************************************************!*\
  !*** ../neko-ui/node_modules/prop-types/checkPropTypes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../neko-ui/node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "../neko-ui/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*********************************************************************!*\
  !*** ../neko-ui/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "../neko-ui/node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "../neko-ui/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../neko-ui/node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../neko-ui/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "../neko-ui/node_modules/prop-types/index.js":
/*!***************************************************!*\
  !*** ../neko-ui/node_modules/prop-types/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../neko-ui/node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../neko-ui/node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "../neko-ui/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**********************************************************************!*\
  !*** ../neko-ui/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "../neko-ui/node_modules/react-is/cjs/react-is.development.js":
/*!********************************************************************!*\
  !*** ../neko-ui/node_modules/react-is/cjs/react-is.development.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "../neko-ui/node_modules/react-is/index.js":
/*!*************************************************!*\
  !*** ../neko-ui/node_modules/react-is/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../neko-ui/node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "../neko-ui/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!*************************************************************************************!*\
  !*** ../neko-ui/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \*************************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}



/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/components/Modal.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/components/Modal.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(/*! ./ModalPortal */ "../neko-ui/node_modules/react-modal/lib/components/ModalPortal.js");

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "../neko-ui/node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "../neko-ui/node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "../neko-ui/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
var isReact16 = _reactDom2["default"].createPortal !== undefined;

var getCreatePortal = function getCreatePortal() {
  return isReact16 ? _reactDom2["default"].createPortal : _reactDom2["default"].unstable_renderSubtreeIntoContainer;
};

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2["default"].unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);

      if (parent) {
        parent.removeChild(_this.node);
      } else {
        // eslint-disable-next-line no-console
        console.warn('React-Modal: "parentSelector" prop did not returned any DOM ' + "element. Make sure that the parent element is unmounted to " + "avoid any memory leaks.");
      }
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var createPortal = getCreatePortal();
      var portal = createPortal(_this, _react2["default"].createElement(_ModalPortal2["default"], _extends({
        defaultStyles: Modal.defaultStyles
      }, props)), _this.node);

      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }

      this.node.className = this.props.portalClassName;
      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      var prevParent = getParentElement(prevProps.parentSelector);
      var nextParent = getParentElement(this.props.parentSelector);
      return {
        prevParent: prevParent,
        nextParent: nextParent
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _, snapshot) {
      if (!_safeHTMLElement.canUseDOM) return;
      var _props = this.props,
          isOpen = _props.isOpen,
          portalClassName = _props.portalClassName;

      if (prevProps.portalClassName !== portalClassName) {
        this.node.className = portalClassName;
      }

      var prevParent = snapshot.prevParent,
          nextParent = snapshot.nextParent;

      if (nextParent !== prevParent) {
        prevParent.removeChild(this.node);
        nextParent.appendChild(this.node);
      } // Stop unnecessary renders if modal is remaining closed


      if (!prevProps.isOpen && !isOpen) return;
      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      var createPortal = getCreatePortal();
      return createPortal(_react2["default"].createElement(_ModalPortal2["default"], _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }
    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2["default"].bool.isRequired,
  style: _propTypes2["default"].shape({
    content: _propTypes2["default"].object,
    overlay: _propTypes2["default"].object
  }),
  portalClassName: _propTypes2["default"].string,
  bodyOpenClassName: _propTypes2["default"].string,
  htmlOpenClassName: _propTypes2["default"].string,
  className: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].shape({
    base: _propTypes2["default"].string.isRequired,
    afterOpen: _propTypes2["default"].string.isRequired,
    beforeClose: _propTypes2["default"].string.isRequired
  })]),
  overlayClassName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].shape({
    base: _propTypes2["default"].string.isRequired,
    afterOpen: _propTypes2["default"].string.isRequired,
    beforeClose: _propTypes2["default"].string.isRequired
  })]),
  appElement: _propTypes2["default"].instanceOf(_safeHTMLElement2["default"]),
  onAfterOpen: _propTypes2["default"].func,
  onRequestClose: _propTypes2["default"].func,
  closeTimeoutMS: _propTypes2["default"].number,
  ariaHideApp: _propTypes2["default"].bool,
  shouldFocusAfterRender: _propTypes2["default"].bool,
  shouldCloseOnOverlayClick: _propTypes2["default"].bool,
  shouldReturnFocusAfterClose: _propTypes2["default"].bool,
  parentSelector: _propTypes2["default"].func,
  aria: _propTypes2["default"].object,
  data: _propTypes2["default"].object,
  role: _propTypes2["default"].string,
  contentLabel: _propTypes2["default"].string,
  shouldCloseOnEsc: _propTypes2["default"].bool,
  overlayRef: _propTypes2["default"].func,
  contentRef: _propTypes2["default"].func
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  role: "dialog",
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, _reactLifecyclesCompat.polyfill)(Modal);
exports["default"] = Modal;

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/components/ModalPortal.js":
/*!*************************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/components/ModalPortal.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(/*! ../helpers/focusManager */ "../neko-ui/node_modules/react-modal/lib/helpers/focusManager.js");

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(/*! ../helpers/scopeTab */ "../neko-ui/node_modules/react-modal/lib/helpers/scopeTab.js");

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(/*! ../helpers/ariaAppHider */ "../neko-ui/node_modules/react-modal/lib/helpers/ariaAppHider.js");

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _classList = __webpack_require__(/*! ../helpers/classList */ "../neko-ui/node_modules/react-modal/lib/helpers/classList.js");

var classList = _interopRequireWildcard(_classList);

var _safeHTMLElement = __webpack_require__(/*! ../helpers/safeHTMLElement */ "../neko-ui/node_modules/react-modal/lib/helpers/safeHTMLElement.js");

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

var _portalOpenInstances = __webpack_require__(/*! ../helpers/portalOpenInstances */ "../neko-ui/node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

__webpack_require__(/*! ../helpers/bodyTrap */ "../neko-ui/node_modules/react-modal/lib/helpers/bodyTrap.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // so that our CSS is statically analyzable


var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};
var TAB_KEY = 9;
var ESC_KEY = 27;
var ariaHiddenInstances = 0;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
      _this.props.overlayRef && _this.props.overlayRef(overlay);
    };

    _this.setContentRef = function (content) {
      _this.content = content;
      _this.props.contentRef && _this.props.contentRef(content);
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp,
          htmlOpenClassName = _this$props.htmlOpenClassName,
          bodyOpenClassName = _this$props.bodyOpenClassName; // Remove classes.

      bodyOpenClassName && classList.remove(document.body, bodyOpenClassName);
      htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName); // Reset aria-hidden attribute if all modals have been removed

      if (ariaHideApp && ariaHiddenInstances > 0) {
        ariaHiddenInstances -= 1;

        if (ariaHiddenInstances === 0) {
          ariaAppHider.show(appElement);
        }
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }

      if (_this.props.onAfterClose) {
        _this.props.onAfterClose();
      }

      _portalOpenInstances2["default"].deregister(_this);
    };

    _this.open = function () {
      _this.beforeOpen();

      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);

        _this.setState({
          beforeClose: false
        });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({
          isOpen: true
        }, function () {
          _this.setState({
            afterOpen: true
          });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen({
              overlayEl: _this.overlay,
              contentEl: _this.content
            });
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;

      _this.setState({
        beforeClose: true,
        closesAt: closesAt
      }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2["default"])(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();

        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }

      _this.shouldClose = null;
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;

      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }

      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }

      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.attributesFromObject = function (prefix, items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc[prefix + "-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };
    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.open();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (true) {
        if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }

        if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }

      if (this.props.isOpen && !prevProps.isOpen) {
        this.open();
      } else if (!this.props.isOpen && prevProps.isOpen) {
        this.close();
      } // Focus only needs to be set once when the modal is being opened


      if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
        this.focusContent();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.isOpen) {
        this.afterClose();
      }

      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          htmlOpenClassName = _props.htmlOpenClassName,
          bodyOpenClassName = _props.bodyOpenClassName; // Add classes.

      bodyOpenClassName && classList.add(document.body, bodyOpenClassName);
      htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);

      if (ariaHideApp) {
        ariaHiddenInstances += 1;
        ariaAppHider.hide(appElement);
      }

      _portalOpenInstances2["default"].register(this);
    } // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;
      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
      return this.shouldBeClosed() ? null : _react2["default"].createElement("div", {
        ref: this.setOverlayRef,
        className: this.buildClassName("overlay", overlayClassName),
        style: _extends({}, overlayStyles, this.props.style.overlay),
        onClick: this.handleOverlayOnClick,
        onMouseDown: this.handleOverlayOnMouseDown
      }, _react2["default"].createElement("div", _extends({
        id: id,
        ref: this.setContentRef,
        style: _extends({}, contentStyles, this.props.style.content),
        className: this.buildClassName("content", className),
        tabIndex: "-1",
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleContentOnMouseDown,
        onMouseUp: this.handleContentOnMouseUp,
        onClick: this.handleContentOnClick,
        role: this.props.role,
        "aria-label": this.props.contentLabel
      }, this.attributesFromObject("aria", this.props.aria || {}), this.attributesFromObject("data", this.props.data || {}), {
        "data-testid": this.props.testId
      }), this.props.children));
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  },
  defaultStyles: {}
};
ModalPortal.propTypes = {
  isOpen: _propTypes2["default"].bool.isRequired,
  defaultStyles: _propTypes2["default"].shape({
    content: _propTypes2["default"].object,
    overlay: _propTypes2["default"].object
  }),
  style: _propTypes2["default"].shape({
    content: _propTypes2["default"].object,
    overlay: _propTypes2["default"].object
  }),
  className: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
  overlayClassName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
  bodyOpenClassName: _propTypes2["default"].string,
  htmlOpenClassName: _propTypes2["default"].string,
  ariaHideApp: _propTypes2["default"].bool,
  appElement: _propTypes2["default"].instanceOf(_safeHTMLElement2["default"]),
  onAfterOpen: _propTypes2["default"].func,
  onAfterClose: _propTypes2["default"].func,
  onRequestClose: _propTypes2["default"].func,
  closeTimeoutMS: _propTypes2["default"].number,
  shouldFocusAfterRender: _propTypes2["default"].bool,
  shouldCloseOnOverlayClick: _propTypes2["default"].bool,
  shouldReturnFocusAfterClose: _propTypes2["default"].bool,
  role: _propTypes2["default"].string,
  contentLabel: _propTypes2["default"].string,
  aria: _propTypes2["default"].object,
  data: _propTypes2["default"].object,
  children: _propTypes2["default"].node,
  shouldCloseOnEsc: _propTypes2["default"].bool,
  overlayRef: _propTypes2["default"].func,
  contentRef: _propTypes2["default"].func,
  id: _propTypes2["default"].string,
  testId: _propTypes2["default"].string
};
exports["default"] = ModalPortal;
module.exports = exports["default"];

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/ariaAppHider.js":
/*!***********************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/ariaAppHider.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(/*! warning */ "../neko-ui/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _safeHTMLElement = __webpack_require__(/*! ./safeHTMLElement */ "../neko-ui/node_modules/react-modal/lib/helpers/safeHTMLElement.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;

  if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }

  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2["default"])(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/bodyTrap.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/bodyTrap.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _portalOpenInstances = __webpack_require__(/*! ./portalOpenInstances */ "../neko-ui/node_modules/react-modal/lib/helpers/portalOpenInstances.js");

var _portalOpenInstances2 = _interopRequireDefault(_portalOpenInstances);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // Body focus trap see Issue #742


var before = void 0,
    after = void 0,
    instances = [];

function focusContent() {
  if (instances.length === 0) {
    if (true) {
      // eslint-disable-next-line no-console
      console.warn("React-Modal: Open instances > 0 expected");
    }

    return;
  }

  instances[instances.length - 1].focusContent();
}

function bodyTrap(eventType, openInstances) {
  if (!before || !after) {
    before = document.createElement("div");
    before.setAttribute("data-react-modal-body-trap", "");
    before.style.position = "absolute";
    before.style.opacity = "0";
    before.setAttribute("tabindex", "0");
    before.addEventListener("focus", focusContent);
    after = before.cloneNode();
    after.addEventListener("focus", focusContent);
  }

  instances = openInstances;

  if (instances.length > 0) {
    // Add focus trap
    if (document.body.firstChild !== before) {
      document.body.insertBefore(before, document.body.firstChild);
    }

    if (document.body.lastChild !== after) {
      document.body.appendChild(after);
    }
  } else {
    // Remove focus trap
    if (before.parentElement) {
      before.parentElement.removeChild(before);
    }

    if (after.parentElement) {
      after.parentElement.removeChild(after);
    }
  }
}

_portalOpenInstances2["default"].subscribe(bodyTrap);

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/classList.js":
/*!********************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/classList.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dumpClassLists = dumpClassLists;
var htmlClassList = {};
var docBodyClassList = {};

function dumpClassLists() {
  if (true) {
    var classes = document.getElementsByTagName("html")[0].className;
    var buffer = "Show tracked classes:\n\n";
    buffer += "<html /> (" + classes + "):\n";

    for (var x in htmlClassList) {
      buffer += "  " + x + " " + htmlClassList[x] + "\n";
    }

    classes = document.body.className; // eslint-disable-next-line max-len

    buffer += "\n\ndoc.body (" + classes + "):\n";

    for (var _x in docBodyClassList) {
      buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
    }

    buffer += "\n"; // eslint-disable-next-line no-console

    console.log(buffer);
  }
}
/**
 * Track the number of reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */


var incrementReference = function incrementReference(poll, className) {
  if (!poll[className]) {
    poll[className] = 0;
  }

  poll[className] += 1;
  return className;
};
/**
 * Drop the reference of a class.
 * @param {object} poll The poll to receive the reference.
 * @param {string} className The class name.
 * @return {string}
 */


var decrementReference = function decrementReference(poll, className) {
  if (poll[className]) {
    poll[className] -= 1;
  }

  return className;
};
/**
 * Track a class and add to the given class list.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be tracked.
 */


var trackClass = function trackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    incrementReference(poll, className);
    classListRef.add(className);
  });
};
/**
 * Untrack a class and remove from the given class list if the reference
 * reaches 0.
 * @param {Object} classListRef A class list of an element.
 * @param {Object} poll         The poll to be used.
 * @param {Array}  classes      The list of classes to be untracked.
 */


var untrackClass = function untrackClass(classListRef, poll, classes) {
  classes.forEach(function (className) {
    decrementReference(poll, className);
    poll[className] === 0 && classListRef.remove(className);
  });
};
/**
 * Public inferface to add classes to the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */


var add = exports.add = function add(element, classString) {
  return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};
/**
 * Public inferface to remove classes from the document.body.
 * @param {string} bodyClass The class string to be added.
 *                           It may contain more then one class
 *                           with ' ' as separator.
 */


var remove = exports.remove = function remove(element, classString) {
  return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
};

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/focusManager.js":
/*!***********************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/focusManager.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(/*! ../helpers/tabbable */ "../neko-ui/node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;

    if (!modalElement) {
      return;
    } // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.


    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }

      var el = (0, _tabbable2["default"])(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}
/* eslint-disable no-console */


function returnFocus() {
  var toFocus = null;

  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }

    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */


function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/portalOpenInstances.js":
/*!******************************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/portalOpenInstances.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
} // Tracks portals that are open and emits events to subscribers


var PortalOpenInstances = function PortalOpenInstances() {
  var _this = this;

  _classCallCheck(this, PortalOpenInstances);

  this.register = function (openInstance) {
    if (_this.openInstances.indexOf(openInstance) !== -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Cannot register modal instance that's already open");
      }

      return;
    }

    _this.openInstances.push(openInstance);

    _this.emit("register");
  };

  this.deregister = function (openInstance) {
    var index = _this.openInstances.indexOf(openInstance);

    if (index === -1) {
      if (true) {
        // eslint-disable-next-line no-console
        console.warn("React-Modal: Unable to deregister " + openInstance + " as " + "it was never registered");
      }

      return;
    }

    _this.openInstances.splice(index, 1);

    _this.emit("deregister");
  };

  this.subscribe = function (callback) {
    _this.subscribers.push(callback);
  };

  this.emit = function (eventType) {
    _this.subscribers.forEach(function (subscriber) {
      return subscriber(eventType, // shallow copy to avoid accidental mutation
      _this.openInstances.slice());
    });
  };

  this.openInstances = [];
  this.subscribers = [];
};

var portalOpenInstances = new PortalOpenInstances();
exports["default"] = portalOpenInstances;
module.exports = exports["default"];

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/safeHTMLElement.js":
/*!**************************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/safeHTMLElement.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(/*! exenv */ "../neko-ui/node_modules/exenv/index.js");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var EE = _exenv2["default"];
var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
var canUseDOM = exports.canUseDOM = EE.canUseDOM;
exports["default"] = SafeHTMLElement;

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/scopeTab.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/scopeTab.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = scopeTab;

var _tabbable = __webpack_require__(/*! ./tabbable */ "../neko-ui/node_modules/react-modal/lib/helpers/tabbable.js");

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2["default"])(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var target = void 0;
  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1]; // proceed with default browser behavior on tab.
  // Focus on last element on shift + tab.

  if (node === document.activeElement) {
    if (!shiftKey) return;
    target = tail;
  }

  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  } // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prone, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.


  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null; // If we are not in safari desktop, let the browser control
  // the focus

  if (!isSafariDesktop) return;
  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  target = tabbable[x]; // If the tabbable element does not exist,
  // focus head/tail based on shiftKey

  if (typeof target === "undefined") {
    event.preventDefault();
    target = shiftKey ? tail : head;
    target.focus();
    return;
  }

  event.preventDefault();
  target.focus();
}

module.exports = exports["default"];

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/helpers/tabbable.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/helpers/tabbable.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0; // If the node is empty, this is good enough

  if (zeroSize && !element.innerHTML) return true; // Otherwise we need to check some styles

  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
  element.scrollWidth <= 0 && element.scrollHeight <= 0 : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;

  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }

  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}

module.exports = exports["default"];

/***/ }),

/***/ "../neko-ui/node_modules/react-modal/lib/index.js":
/*!********************************************************!*\
  !*** ../neko-ui/node_modules/react-modal/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./components/Modal */ "../neko-ui/node_modules/react-modal/lib/components/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports["default"] = _Modal2["default"];
module.exports = exports["default"];

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/cache.js":
/*!************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/cache.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "../neko-ui/node_modules/swr/esm/use-swr.js");
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/hash */ "../neko-ui/node_modules/swr/esm/libs/hash.js");



var Cache =
/** @class */
function () {
  function Cache(initialData) {
    if (initialData === void 0) {
      initialData = {};
    }

    this.__cache = new Map(Object.entries(initialData));
    this.__listeners = [];
  }

  Cache.prototype.get = function (key) {
    var _key = this.serializeKey(key)[0];
    return this.__cache.get(_key);
  };

  Cache.prototype.set = function (key, value, shouldNotify) {
    if (shouldNotify === void 0) {
      shouldNotify = true;
    }

    var _key = this.serializeKey(key)[0];

    this.__cache.set(_key, value);

    if (shouldNotify) Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, value, false);
    this.notify();
  };

  Cache.prototype.keys = function () {
    return Array.from(this.__cache.keys());
  };

  Cache.prototype.has = function (key) {
    var _key = this.serializeKey(key)[0];
    return this.__cache.has(_key);
  };

  Cache.prototype.clear = function (shouldNotify) {
    if (shouldNotify === void 0) {
      shouldNotify = true;
    }

    if (shouldNotify) this.__cache.forEach(function (key) {
      return Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);
    });

    this.__cache.clear();

    this.notify();
  };

  Cache.prototype["delete"] = function (key, shouldNotify) {
    if (shouldNotify === void 0) {
      shouldNotify = true;
    }

    var _key = this.serializeKey(key)[0];
    if (shouldNotify) Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);

    this.__cache["delete"](_key);

    this.notify();
  }; // TODO: introduce namespace for the cache


  Cache.prototype.serializeKey = function (key) {
    var args = null;

    if (typeof key === 'function') {
      try {
        key = key();
      } catch (err) {
        // dependencies not ready
        key = '';
      }
    }

    if (Array.isArray(key)) {
      // args array
      args = key;
      key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
    } else {
      // convert null to ''
      key = String(key || '');
    }

    var errorKey = key ? 'err@' + key : '';
    return [key, args, errorKey];
  };

  Cache.prototype.subscribe = function (listener) {
    var _this = this;

    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    var isSubscribed = true;

    this.__listeners.push(listener);

    return function () {
      if (!isSubscribed) return;
      isSubscribed = false;

      var index = _this.__listeners.indexOf(listener);

      if (index > -1) {
        _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
        _this.__listeners.length--;
      }
    };
  }; // Notify Cache subscribers about a change in the cache


  Cache.prototype.notify = function () {
    for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
      var listener = _a[_i];
      listener();
    }
  };

  return Cache;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cache);

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/config.js":
/*!*************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/config.js ***!
  \*************************************************/
/*! exports provided: CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS, FOCUS_REVALIDATORS, CACHE_REVALIDATORS, MUTATION_TS, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES", function() { return CONCURRENT_PROMISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES_TS", function() { return CONCURRENT_PROMISES_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_REVALIDATORS", function() { return FOCUS_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_REVALIDATORS", function() { return CACHE_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION_TS", function() { return MUTATION_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "../neko-ui/node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "../neko-ui/node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-online */ "../neko-ui/node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "../neko-ui/node_modules/swr/esm/cache.js");



 // cache

var cache = new _cache__WEBPACK_IMPORTED_MODULE_3__["default"](); // state managers

var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {}; // error retry

function onErrorRetry(_, __, config, revalidate, opts) {
  if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    // if it's hidden, stop
    // it will auto revalidate when focus
    return;
  }

  if (config.errorRetryCount && opts.retryCount > config.errorRetryCount) {
    return;
  } // exponential backoff


  var count = Math.min(opts.retryCount || 0, 8);
  var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
  setTimeout(revalidate, timeout, opts);
} // client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)


var slowConnection = typeof window !== 'undefined' && navigator['connection'] && ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1; // config

var defaultConfig = {
  // events
  onLoadingSlow: function onLoadingSlow() {},
  onSuccess: function onSuccess() {},
  onError: function onError() {},
  onErrorRetry: onErrorRetry,
  errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
  focusThrottleInterval: 5 * 1000,
  dedupingInterval: 2 * 1000,
  loadingTimeout: (slowConnection ? 5 : 3) * 1000,
  refreshInterval: 0,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  refreshWhenHidden: false,
  refreshWhenOffline: false,
  shouldRetryOnError: true,
  suspense: false,
  compare: fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a
}; // Focus revalidate

var eventsBinded = false;

if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
  var revalidate = function revalidate() {
    if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_2__["default"])()) return;

    for (var key in FOCUS_REVALIDATORS) {
      if (FOCUS_REVALIDATORS[key][0]) FOCUS_REVALIDATORS[key][0]();
    }
  };

  window.addEventListener('visibilitychange', revalidate, false);
  window.addEventListener('focus', revalidate, false); // only bind the events once

  eventsBinded = true;
}


/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/index.js":
/*!************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/index.js ***!
  \************************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRPages, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "../neko-ui/node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-pages */ "../neko-ui/node_modules/swr/esm/use-swr-pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__["useSWRPages"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "../neko-ui/node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/libs/hash.js":
/*!****************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/libs/hash.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap(); // counter of the key

var counter = 0; // hashes an array of objects and returns a string

function hash(args) {
  if (!args.length) return '';
  var key = 'arg';

  for (var i = 0; i < args.length; ++i) {
    var _hash = void 0;

    if (args[i] === null || _typeof(args[i]) !== 'object') {
      // need to consider the case that args[i] is a string:
      // args[i]        _hash
      // "undefined" -> '"undefined"'
      // undefined   -> 'undefined'
      // 123         -> '123'
      // null        -> 'null'
      // "null"      -> '"null"'
      if (typeof args[i] === 'string') {
        _hash = '"' + args[i] + '"';
      } else {
        _hash = String(args[i]);
      }
    } else {
      if (!table.has(args[i])) {
        _hash = counter;
        table.set(args[i], counter++);
      } else {
        _hash = table.get(args[i]);
      }
    }

    key += '@' + _hash;
  }

  return key;
}

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/libs/is-document-visible.js":
/*!*******************************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/libs/is-document-visible.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocumentVisible; });
function isDocumentVisible() {
  if (typeof document !== 'undefined' && typeof document.visibilityState !== 'undefined') {
    return document.visibilityState !== 'hidden';
  } // always assume it's visible


  return true;
}

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/libs/is-online.js":
/*!*********************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/libs/is-online.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOnline; });
function isOnline() {
  if (typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  } // always assume it's online


  return true;
}

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/libs/throttle.js":
/*!********************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/libs/throttle.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, interval) {
  var pending = false;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (pending) return;
    pending = true;
    fn.apply(void 0, args);
    setTimeout(function () {
      return pending = false;
    }, interval);
  };
}

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/swr-config-context.js":
/*!*************************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/swr-config-context.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/use-swr-pages.js":
/*!********************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/use-swr-pages.js ***!
  \********************************************************/
/*! exports provided: useSWRPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return useSWRPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../neko-ui/node_modules/swr/esm/config.js");
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};



/*
The idea

A "Page" component renders the content of 1 API request, it accepts an offset (in this example it's from),
uses a SWR hook (useSWR(API + '?limit=' + limit + '&from=' + from)) and returns items (Projects).

The UI:
      +------------------------------------------+
      |   Projects                               |
+------------------------------------------------------+
|     |   +----------------+                     |     |
|     |                                          |     |
|     |   +------------+                         |     |
|     |                                          |     +--> 1 Page
|     |   +-----------------+                    |     |
|     |                                          |     |  /projects/list?limit=4
|     |   +---------+                            |     |
+------------------------------------------------------+
      |                                          |
      |   +------------+                         |     +  /projects/list?limit=4&from=123
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |   +---------+                            |     |
      |                                          |     |
      |   +--------------+                       |     +
      |                                          |
      |   +-------------------+                  |     +  /projects/list?limit=4&from=456
      |                                          |     |
      |   +------------+                         |     |
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |                                          |     +

The API
// (inside `render`)

function App () {
  const {
    pages,    // an array of each page component
    pageSWRs, // an array of SWRs of each page
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore
  } = useSWRPages(
    'project-page', // key of this page

    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(API + '?limit=10&from=' + offset) // request projects with offset
      )
      if (!data) return <Placeholder>
      return data.projects.map(project => <Card project={project} team={team}>)
    },
    // ========

    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    data => data && data.length >= 10 ? data[data.length - 1].createdAt : null,

    // (optional) outside deps of your Page component. in this case it's empty
    []
  )

  // ...

  if (isEmpty) return <EmptyProjectsPage/>

  return <div>
    {pages}
    {isReachingEnd
      ? null
      : <button loading={isLoadingMore} onClick={loadMore}>Load More</button>}
  </div>
}
*/

var pageCacheMap = new Map();
function useSWRPages(pageKey, pageFn, SWRToOffset, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var pageCountKey = "_swr_page_count_" + pageKey;
  var pageOffsetKey = "_swr_page_offset_" + pageKey;

  var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountKey) || 1),
      pageCount = _a[0],
      setPageCount = _a[1];

  var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageOffsetKey) || [null]),
      pageOffsets = _b[0],
      setPageOffsets = _b[1];

  var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      pageSWRs = _c[0],
      setPageSWRs = _c[1];

  var pageFnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(pageFn);
  var emptyPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); // Page component (wraps `pageFn`)
  // for performance reason we need to memorize it

  var Page = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (props) {
    // render the page component
    var dataList = pageFnRef.current(props); // if dataList is [], we can assume this page is empty
    // TODO: this API is not stable

    if (dataList && !dataList.length) {
      emptyPageRef.current = true;
    } else {
      emptyPageRef.current = false;
    }

    return dataList;
  }, []); // Doesn't have a next page

  var isReachingEnd = pageOffsets[pageCount] === null;
  var isLoadingMore = pageCount === pageOffsets.length;
  var isEmpty = isReachingEnd && pageCount === 1 && emptyPageRef.current;
  var loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isLoadingMore || isReachingEnd) return;
    setPageCount(function (c) {
      _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountKey, c + 1);
      return c + 1;
    });
  }, [isLoadingMore || isReachingEnd]);

  var _pageFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageFn, deps);

  pageFnRef.current = _pageFn;
  var pages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var getWithSWR = function getWithSWR(id) {
      return function (swr) {
        if (!pageSWRs[id] || pageSWRs[id].data !== swr.data || pageSWRs[id].error !== swr.error || pageSWRs[id].revalidate !== swr.revalidate) {
          // hoist side effects: setPageSWRs and setPageOffsets -- https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
          setTimeout(function () {
            setPageSWRs(function (swrs) {
              var _swrs = __spreadArrays(swrs);

              _swrs[id] = {
                data: swr.data,
                error: swr.error,
                revalidate: swr.revalidate,
                isValidating: swr.isValidating,
                mutate: swr.mutate
              };
              return _swrs;
            });

            if (typeof swr.data !== 'undefined') {
              // set next page's offset
              var newPageOffset_1 = SWRToOffset(swr, id);

              if (pageOffsets[id + 1] !== newPageOffset_1) {
                setPageOffsets(function (arr) {
                  var _arr = __spreadArrays(arr);

                  _arr[id + 1] = newPageOffset_1;
                  _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageOffsetKey, _arr);
                  return _arr;
                });
              }
            }
          });
        }

        return swr;
      };
    }; // render each page


    var p = [];

    if (!pageCacheMap.has(pageKey)) {
      pageCacheMap.set(pageKey, []);
    }

    var pageCache = pageCacheMap.get(pageKey);

    for (var i = 0; i < pageCount; ++i) {
      if (!pageCache[i] || pageCache[i].offset !== pageOffsets[i] || pageCache[i].pageFn !== _pageFn) {
        // when props change or at init
        // render the page and cache it
        pageCache[i] = {
          component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
            key: "page-" + pageOffsets[i] + "-" + i,
            offset: pageOffsets[i],
            withSWR: getWithSWR(i)
          }),
          pageFn: _pageFn,
          offset: pageOffsets[i]
        };
      }

      p.push(pageCache[i].component);
    }

    return p;
  }, [_pageFn, pageCount, pageSWRs, pageOffsets, pageKey]);
  return {
    pages: pages,
    pageCount: pageCount,
    pageSWRs: pageSWRs,
    isLoadingMore: isLoadingMore,
    isReachingEnd: isReachingEnd,
    isEmpty: isEmpty,
    loadMore: loadMore
  };
}

/***/ }),

/***/ "../neko-ui/node_modules/swr/esm/use-swr.js":
/*!**************************************************!*\
  !*** ../neko-ui/node_modules/swr/esm/use-swr.js ***!
  \**************************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "../neko-ui/node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "../neko-ui/node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "../neko-ui/node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "../neko-ui/node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "../neko-ui/node_modules/swr/esm/swr-config-context.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};







var IS_SERVER = typeof window === 'undefined'; // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.

var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];

var trigger = function trigger(_key, shouldRevalidate) {
  if (shouldRevalidate === void 0) {
    shouldRevalidate = true;
  } // we are ignoring the second argument which correspond to the arguments
  // the fetcher will receive when key is an array


  var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key),
      key = _a[0],
      keyErr = _a[2];

  if (!key) return Promise.resolve();
  var updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];

  if (key && updaters) {
    var currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
    var currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    var promises = [];

    for (var i = 0; i < updaters.length; ++i) {
      promises.push(updaters[i](shouldRevalidate, currentData, currentError, i > 0));
    } // return new updated value


    return Promise.all(promises).then(function () {
      return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
    });
  }

  return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
};

var broadcastState = function broadcastState(key, data, error) {
  var updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];

  if (key && updaters) {
    for (var i = 0; i < updaters.length; ++i) {
      updaters[i](false, data, error);
    }
  }
};

var mutate = function mutate(_key, _data, shouldRevalidate) {
  if (shouldRevalidate === void 0) {
    shouldRevalidate = true;
  }

  return __awaiter(void 0, void 0, void 0, function () {
    var key, data, error, beforeMutationTs, beforeConcurrentPromisesTs, err_1, err_2, updaters, promises, i;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          key = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key)[0];
          if (!key) return [2
          /*return*/
          ]; // if there is no new data, call revalidate against the key

          if (typeof _data === 'undefined') return [2
          /*return*/
          , trigger(_key, shouldRevalidate) // update timestamp
          ]; // update timestamp

          _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
          beforeMutationTs = _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key];
          beforeConcurrentPromisesTs = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
          if (!(_data && typeof _data === 'function')) return [3
          /*break*/
          , 5];
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key))];

        case 2:
          data = _a.sent();
          return [3
          /*break*/
          , 4];

        case 3:
          err_1 = _a.sent();
          error = err_1;
          return [3
          /*break*/
          , 4];

        case 4:
          return [3
          /*break*/
          , 11];

        case 5:
          if (!(_data && typeof _data.then === 'function')) return [3
          /*break*/
          , 10];
          _a.label = 6;

        case 6:
          _a.trys.push([6, 8,, 9]);

          return [4
          /*yield*/
          , _data];

        case 7:
          data = _a.sent();
          return [3
          /*break*/
          , 9];

        case 8:
          err_2 = _a.sent();
          error = err_2;
          return [3
          /*break*/
          , 9];

        case 9:
          return [3
          /*break*/
          , 11];

        case 10:
          data = _data;
          _a.label = 11;

        case 11:
          // Check if other mutations have occurred since we've started awaiting, if so then do not persist this change
          if (beforeMutationTs !== _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] || beforeConcurrentPromisesTs !== _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key]) {
            if (error) throw error;
            return [2
            /*return*/
            , data];
          }

          if (typeof data !== 'undefined') {
            // update cached data, avoid notifying from the cache
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data, false);
          }

          updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];

          if (updaters) {
            promises = [];

            for (i = 0; i < updaters.length; ++i) {
              promises.push(updaters[i](!!shouldRevalidate, data, error, i > 0));
            } // return new updated value


            return [2
            /*return*/
            , Promise.all(promises).then(function () {
              return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
            })];
          } // throw error or return data to be used by caller of mutate


          if (error) throw error;
          return [2
          /*return*/
          , data];
      }
    });
  });
};

function useSWR() {
  var _this = this;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var _key,
      fn,
      config = {};

  if (args.length >= 1) {
    _key = args[0];
  }

  if (args.length > 2) {
    fn = args[1];
    config = args[2];
  } else {
    if (typeof args[1] === 'function') {
      fn = args[1];
    } else if (_typeof(args[1]) === 'object') {
      config = args[1];
    }
  } // we assume `key` as the identifier of the request
  // `key` can change but `fn` shouldn't
  // (because `revalidate` only depends on `key`)
  // `keyErr` is the cache key for error objects


  var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key),
      key = _a[0],
      fnArgs = _a[1],
      keyErr = _a[2];

  config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"]), config);

  if (typeof fn === 'undefined') {
    // use a global fetcher
    fn = config.fetcher;
  }

  var initialData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
  var initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr); // if a state is accessed (data, error or isValidating),
  // we add the state to dependencies so if the state is
  // updated in the future, we can trigger a rerender

  var stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    data: false,
    error: false,
    isValidating: false
  });
  var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    data: initialData,
    error: initialError,
    isValidating: false
  });
  var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
  var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
    var shouldUpdateState = false;

    for (var k in payload) {
      stateRef.current[k] = payload[k];

      if (stateDependencies.current[k]) {
        shouldUpdateState = true;
      }
    }

    if (shouldUpdateState || config.suspense) {
      rerender({});
    }
  }, []); // error ref inside revalidate (is last request errored?)

  var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key); // do unmount check for callbacks

  var eventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    emit: function emit(event) {
      var params = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        params[_i - 1] = arguments[_i];
      }

      if (unmountedRef.current) return;
      config[event].apply(config, params);
    }
  });
  var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
    return mutate(key, data, shouldRevalidate);
  }, [key]); // start a revalidation

  var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) {
    if (revalidateOpts === void 0) {
      revalidateOpts = {};
    }

    return __awaiter(_this, void 0, void 0, function () {
      var loading, shouldDeduping, newData, startAt, newState, err_3, retryCount;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!key || !fn) return [2
            /*return*/
            , false];
            if (unmountedRef.current) return [2
            /*return*/
            , false];
            revalidateOpts = Object.assign({
              dedupe: false
            }, revalidateOpts);
            loading = true;
            shouldDeduping = typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] !== 'undefined' && revalidateOpts.dedupe;
            _a.label = 1;

          case 1:
            _a.trys.push([1, 6,, 7]);

            dispatch({
              isValidating: true
            });
            newData = void 0;
            startAt = void 0;
            if (!shouldDeduping) return [3
            /*break*/
            , 3]; // there's already an ongoing request,
            // this one needs to be deduplicated.

            startAt = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
            return [4
            /*yield*/
            , _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]];

          case 2:
            newData = _a.sent();
            return [3
            /*break*/
            , 5];

          case 3:
            // if not deduping the request (hard revalidate) but
            // there're other ongoing request(s) at the same time,
            // we need to ignore the other result(s) to avoid
            // possible race conditions:
            // req1------------------>res1
            //      req2-------->res2
            // in that case, the second response should not be overridden
            // by the first one.
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
              // we can mark it as a mutation to ignore
              // all requests which are fired before this one
              _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
            } // if no cache being rendered currently (it shows a blank page),
            // we trigger the loading slow event.


            if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
              setTimeout(function () {
                if (loading) eventsRef.current.emit('onLoadingSlow', key, config);
              }, config.loadingTimeout);
            }

            if (fnArgs !== null) {
              _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn.apply(void 0, fnArgs);
            } else {
              _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(key);
            }

            _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key] = startAt = Date.now();
            return [4
            /*yield*/
            , _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]];

          case 4:
            newData = _a.sent();
            setTimeout(function () {
              delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
              delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
            }, config.dedupingInterval); // trigger the success event,
            // only do this for the original request.

            eventsRef.current.emit('onSuccess', newData, key, config);
            _a.label = 5;

          case 5:
            // if the revalidation happened earlier than the local mutation,
            // we have to ignore the result because it could override.
            // meanwhile, a new revalidation should be triggered by the mutation.
            if (_config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] && startAt <= _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key]) {
              dispatch({
                isValidating: false
              });
              return [2
              /*return*/
              , false];
            }

            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData, false);
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined, false);
            newState = {
              isValidating: false
            };

            if (typeof stateRef.current.error !== 'undefined') {
              // we don't have an error
              newState.error = undefined;
            }

            if (!config.compare(stateRef.current.data, newData)) {
              // deep compare to avoid extra re-render
              // data changed
              newState.data = newData;
            } // merge the new state


            dispatch(newState);

            if (!shouldDeduping) {
              // also update other hooks
              broadcastState(key, newData, undefined);
            }

            return [3
            /*break*/
            , 7];

          case 6:
            err_3 = _a.sent();
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err_3, false); // get a new error
            // don't use deep equal for errors

            if (stateRef.current.error !== err_3) {
              // we keep the stale data
              dispatch({
                isValidating: false,
                error: err_3
              });

              if (!shouldDeduping) {
                // also broadcast to update other hooks
                broadcastState(key, undefined, err_3);
              }
            } // events and retry


            eventsRef.current.emit('onError', err_3, key, config);

            if (config.shouldRetryOnError) {
              retryCount = (revalidateOpts.retryCount || 0) + 1;
              eventsRef.current.emit('onErrorRetry', err_3, key, config, revalidate, Object.assign({
                dedupe: true
              }, revalidateOpts, {
                retryCount: retryCount
              }));
            }

            return [3
            /*break*/
            , 7];

          case 7:
            loading = false;
            return [2
            /*return*/
            , true];
        }
      });
    });
  }, [key]); // mounted (client side rendering)

  useIsomorphicLayoutEffect(function () {
    if (!key) return undefined; // after `key` updates, we need to mark it as mounted

    unmountedRef.current = false; // after the component is mounted (hydrated),
    // we need to update the data from the cache
    // and trigger a revalidation

    var currentHookData = stateRef.current.data;
    var latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData; // update the state if the key changed (not the inital render) or cache updated

    if (keyRef.current !== key || !config.compare(currentHookData, latestKeyedData)) {
      dispatch({
        data: latestKeyedData
      });
      keyRef.current = key;
    } // revalidate with deduping


    var softRevalidate = function softRevalidate() {
      return revalidate({
        dedupe: true
      });
    }; // trigger a revalidation


    if (config.revalidateOnMount || !config.initialData && config.revalidateOnMount === undefined) {
      if (typeof latestKeyedData !== 'undefined' && !IS_SERVER && window['requestIdleCallback']) {
        // delay revalidate if there's cache
        // to not block the rendering
        window['requestIdleCallback'](softRevalidate);
      } else {
        softRevalidate();
      }
    } // whenever the window gets focused, revalidate


    var onFocus;

    if (config.revalidateOnFocus) {
      // throttle: avoid being called twice from both listeners
      // and tabs being switched quickly
      onFocus = Object(_libs_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(softRevalidate, config.focusThrottleInterval);

      if (!_config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
        _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key] = [onFocus];
      } else {
        _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key].push(onFocus);
      }
    } // register global cache update listener


    var onUpdate = function onUpdate(shouldRevalidate, updatedData, updatedError, dedupe) {
      if (shouldRevalidate === void 0) {
        shouldRevalidate = true;
      }

      if (dedupe === void 0) {
        dedupe = true;
      } // update hook state


      var newState = {};
      var needUpdate = false;

      if (typeof updatedData !== 'undefined' && !config.compare(stateRef.current.data, updatedData)) {
        newState.data = updatedData;
        needUpdate = true;
      } // always update error
      // because it can be `undefined`


      if (stateRef.current.error !== updatedError) {
        newState.error = updatedError;
        needUpdate = true;
      }

      if (needUpdate) {
        dispatch(newState);
      }

      if (shouldRevalidate) {
        if (dedupe) {
          return softRevalidate();
        } else {
          return revalidate();
        }
      }

      return false;
    }; // add updater to listeners


    if (!_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
      _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key] = [onUpdate];
    } else {
      _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key].push(onUpdate);
    } // set up reconnecting when the browser regains network connection


    var reconnect = null;

    if (!IS_SERVER && window.addEventListener && config.revalidateOnReconnect) {
      window.addEventListener('online', reconnect = softRevalidate);
    }

    return function () {
      // cleanup
      dispatch = function dispatch() {
        return null;
      }; // mark it as unmounted


      unmountedRef.current = true;

      if (onFocus && _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
        var revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key];
        var index = revalidators.indexOf(onFocus);

        if (index >= 0) {
          // 10x faster than splice
          // https://jsperf.com/array-remove-by-index
          revalidators[index] = revalidators[revalidators.length - 1];
          revalidators.pop();
        }
      }

      if (_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
        var revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
        var index = revalidators.indexOf(onUpdate);

        if (index >= 0) {
          revalidators[index] = revalidators[revalidators.length - 1];
          revalidators.pop();
        }
      }

      if (!IS_SERVER && window.removeEventListener && reconnect !== null) {
        window.removeEventListener('online', reconnect);
      }
    };
  }, [key, revalidate]); // set up polling

  useIsomorphicLayoutEffect(function () {
    var timer = null;

    var tick = function tick() {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!(!stateRef.current.error && (config.refreshWhenHidden || Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__["default"])()) && (config.refreshWhenOffline || Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_3__["default"])()))) return [3
              /*break*/
              , 2]; // only revalidate when the page is visible
              // if API request errored, we stop polling in this round
              // and let the error retry function handle it

              return [4
              /*yield*/
              , revalidate({
                dedupe: true
              })];

            case 1:
              // only revalidate when the page is visible
              // if API request errored, we stop polling in this round
              // and let the error retry function handle it
              _a.sent();

              _a.label = 2;

            case 2:
              if (config.refreshInterval) {
                timer = setTimeout(tick, config.refreshInterval);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    if (config.refreshInterval) {
      timer = setTimeout(tick, config.refreshInterval);
    }

    return function () {
      if (timer) clearTimeout(timer);
    };
  }, [config.refreshInterval, config.refreshWhenHidden, config.refreshWhenOffline, revalidate]); // suspense

  if (config.suspense) {
    // in suspense mode, we can't return empty state
    // (it should be suspended)
    // try to get data and error from cache
    var latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || initialData;
    var latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr) || initialError;

    if (typeof latestData === 'undefined' && typeof latestError === 'undefined') {
      // need to start the request if it hasn't
      if (!_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
        // trigger revalidate immediately
        // to get the promise
        revalidate();
      }

      if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] && typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key].then === 'function') {
        // if it is a promise
        throw _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
      } // it's a value, return it directly (override)


      latestData = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
    }

    if (typeof latestData === 'undefined' && latestError) {
      // in suspense mode, throw error if there's no content
      throw latestError;
    } // return the latest data / error from cache
    // in case `key` has changed


    return {
      error: latestError,
      data: latestData,
      revalidate: revalidate,
      mutate: boundMutate,
      isValidating: stateRef.current.isValidating
    };
  } // define returned state
  // can be memorized since the state is a ref


  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var state = {
      revalidate: revalidate,
      mutate: boundMutate
    };
    Object.defineProperties(state, {
      error: {
        // `key` might be changed in the upcoming hook re-render,
        // but the previous state will stay
        // so we need to match the latest key and data (fallback to `initialData`)
        get: function get() {
          stateDependencies.current.error = true;
          return keyRef.current === key ? stateRef.current.error : initialError;
        },
        enumerable: true
      },
      data: {
        get: function get() {
          stateDependencies.current.data = true;
          return keyRef.current === key ? stateRef.current.data : initialData;
        },
        enumerable: true
      },
      isValidating: {
        get: function get() {
          stateDependencies.current.isValidating = true;
          return stateRef.current.isValidating;
        },
        enumerable: true
      }
    });
    return state;
  }, [revalidate]);
}

var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);

/***/ }),

/***/ "../neko-ui/node_modules/warning/warning.js":
/*!**************************************************!*\
  !*** ../neko-ui/node_modules/warning/warning.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);

    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return Je; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return ye; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return Ge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return Le; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return Fe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return Ke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return We; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return Ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return Ue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return Ze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return Xe; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.3.1",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:undefined;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?undefined:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){t>=V&&(V=t+1),k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.3.1"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=(t.innerHTML||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return"undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.1");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.3.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&false,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ue)||he}function me(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(de)||pe}function ye(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(e.children):undefined))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"]?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else{for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s))}},Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n))}catch(e){Ie.test(e.message)&&Pe.delete(n)}finally{console.error=r}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var ke=function(e){return ee(ne(e)>>>0)};function xe(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Me(e,t,n){var r=e[n];Ve(t)&&Ve(r)?ze(r,t):e[n]=t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&Me(e,i[a],a)}return e}var Le=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),Ge=Le.Consumer;function Fe(e){var t=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Le),n=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Le.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!xe(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+ke("5.3.1"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Re(t,Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Le),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:undefined),w=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"],_):!N||Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?ze({},e.defaultProps,t):t}}), true&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e)}));var $e=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ce.apply(void 0,[e].concat(n)),a="sc-global-"+ke(JSON.stringify(i)),u=new $e(i,a);function l(e){var t=fe(),n=me(),o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Le),l=Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.server&&h(l,e,t,o,n),Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])((function(){if(!t.server)return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Re(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Oe(a),react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(l)}function Ue(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ce.apply(void 0,[e].concat(n)).join(""),s=ke(o);return new ve(s,o)}var Je=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.3.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.3.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Xe=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((function(t,n){var o=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Le),i=e.defaultProps,a=Re(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Ze=function(){return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Le)},Ke={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ __webpack_exports__["default"] = (He);
//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");


var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.get(_key);
    };
    Cache.prototype.set = function (key, value, shouldNotify) {
        if (shouldNotify === void 0) { shouldNotify = true; }
        var _key = this.serializeKey(key)[0];
        this.__cache.set(_key, value);
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, value, false);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.__cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.has(_key);
    };
    Cache.prototype.clear = function (shouldNotify) {
        if (shouldNotify === void 0) { shouldNotify = true; }
        if (shouldNotify)
            this.__cache.forEach(function (key) { return Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false); });
        this.__cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key, shouldNotify) {
        if (shouldNotify === void 0) { shouldNotify = true; }
        var _key = this.serializeKey(key)[0];
        if (shouldNotify)
            Object(_use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, false);
        this.__cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = Object(_libs_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        return [key, args, errorKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.__listeners.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.__listeners.indexOf(listener);
            if (index > -1) {
                _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
                _this.__listeners.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/*! exports provided: CONCURRENT_PROMISES, CONCURRENT_PROMISES_TS, FOCUS_REVALIDATORS, CACHE_REVALIDATORS, MUTATION_TS, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES", function() { return CONCURRENT_PROMISES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONCURRENT_PROMISES_TS", function() { return CONCURRENT_PROMISES_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_REVALIDATORS", function() { return FOCUS_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_REVALIDATORS", function() { return CACHE_REVALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTATION_TS", function() { return MUTATION_TS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");




// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_3__["default"]();
// state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (config.errorRetryCount && opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount || 0, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = {
    // events
    onLoadingSlow: function () { },
    onSuccess: function () { },
    onError: function () { },
    onErrorRetry: onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default.a
};
// Focus revalidate
var eventsBinded = false;
if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
    var revalidate = function () {
        if (!Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_2__["default"])())
            return;
        for (var key in FOCUS_REVALIDATORS) {
            if (FOCUS_REVALIDATORS[key][0])
                FOCUS_REVALIDATORS[key][0]();
        }
    };
    window.addEventListener('visibilitychange', revalidate, false);
    window.addEventListener('focus', revalidate, false);
    // only bind the events once
    eventsBinded = true;
}

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/*! exports provided: trigger, mutate, SWRConfig, useSWRPages, cache, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["mutate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return _use_swr__WEBPACK_IMPORTED_MODULE_0__["SWRConfig"]; });

/* harmony import */ var _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-pages */ "./node_modules/swr/esm/use-swr-pages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return _use_swr_pages__WEBPACK_IMPORTED_MODULE_1__["useSWRPages"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["cache"]; });





/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hash; });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        var _hash = void 0;
        if (args[i] === null || typeof args[i] !== 'object') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-document-visible.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDocumentVisible; });
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-online.js":
/*!************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-online.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isOnline; });
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/throttle.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/libs/throttle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, interval) {
    var pending = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (pending)
            return;
        pending = true;
        fn.apply(void 0, args);
        setTimeout(function () { return (pending = false); }, interval);
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-pages.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/use-swr-pages.js ***!
  \***********************************************/
/*! exports provided: useSWRPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSWRPages", function() { return useSWRPages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


/*
The idea

A "Page" component renders the content of 1 API request, it accepts an offset (in this example it's from),
uses a SWR hook (useSWR(API + '?limit=' + limit + '&from=' + from)) and returns items (Projects).

The UI:
      +------------------------------------------+
      |   Projects                               |
+------------------------------------------------------+
|     |   +----------------+                     |     |
|     |                                          |     |
|     |   +------------+                         |     |
|     |                                          |     +--> 1 Page
|     |   +-----------------+                    |     |
|     |                                          |     |  /projects/list?limit=4
|     |   +---------+                            |     |
+------------------------------------------------------+
      |                                          |
      |   +------------+                         |     +  /projects/list?limit=4&from=123
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |   +---------+                            |     |
      |                                          |     |
      |   +--------------+                       |     +
      |                                          |
      |   +-------------------+                  |     +  /projects/list?limit=4&from=456
      |                                          |     |
      |   +------------+                         |     |
      |                                          |     |
      |   +----------------+                     |     |
      |                                          |     |
      |                                          |     +

The API
// (inside `render`)

function App () {
  const {
    pages,    // an array of each page component
    pageSWRs, // an array of SWRs of each page
    isLoadingMore,
    isReachingEnd,
    isEmpty,
    loadMore
  } = useSWRPages(
    'project-page', // key of this page

    // ======== the actual Page component!
    ({ offset, withSWR }) => {
      // required: use `withSWR` to wrap your main SWR (source of your pagination API)
      const { data } = withSWR(
        useSWR(API + '?limit=10&from=' + offset) // request projects with offset
      )
      if (!data) return <Placeholder>
      return data.projects.map(project => <Card project={project} team={team}>)
    },
    // ========

    // a function accepts a SWR's `data`, and returns the offset of the next page (or null)
    data => data && data.length >= 10 ? data[data.length - 1].createdAt : null,

    // (optional) outside deps of your Page component. in this case it's empty
    []
  )

  // ...

  if (isEmpty) return <EmptyProjectsPage/>

  return <div>
    {pages}
    {isReachingEnd
      ? null
      : <button loading={isLoadingMore} onClick={loadMore}>Load More</button>}
  </div>
}
*/
var pageCacheMap = new Map();
function useSWRPages(pageKey, pageFn, SWRToOffset, deps) {
    if (deps === void 0) { deps = []; }
    var pageCountKey = "_swr_page_count_" + pageKey;
    var pageOffsetKey = "_swr_page_offset_" + pageKey;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageCountKey) || 1), pageCount = _a[0], setPageCount = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(pageOffsetKey) || [null]), pageOffsets = _b[0], setPageOffsets = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), pageSWRs = _c[0], setPageSWRs = _c[1];
    var pageFnRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(pageFn);
    var emptyPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    // Page component (wraps `pageFn`)
    // for performance reason we need to memorize it
    var Page = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (props) {
        // render the page component
        var dataList = pageFnRef.current(props);
        // if dataList is [], we can assume this page is empty
        // TODO: this API is not stable
        if (dataList && !dataList.length) {
            emptyPageRef.current = true;
        }
        else {
            emptyPageRef.current = false;
        }
        return dataList;
    }, []);
    // Doesn't have a next page
    var isReachingEnd = pageOffsets[pageCount] === null;
    var isLoadingMore = pageCount === pageOffsets.length;
    var isEmpty = isReachingEnd && pageCount === 1 && emptyPageRef.current;
    var loadMore = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (isLoadingMore || isReachingEnd)
            return;
        setPageCount(function (c) {
            _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageCountKey, c + 1);
            return c + 1;
        });
    }, [isLoadingMore || isReachingEnd]);
    var _pageFn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(pageFn, deps);
    pageFnRef.current = _pageFn;
    var pages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var getWithSWR = function (id) { return function (swr) {
            if (!pageSWRs[id] ||
                pageSWRs[id].data !== swr.data ||
                pageSWRs[id].error !== swr.error ||
                pageSWRs[id].revalidate !== swr.revalidate) {
                // hoist side effects: setPageSWRs and setPageOffsets -- https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
                setTimeout(function () {
                    setPageSWRs(function (swrs) {
                        var _swrs = __spreadArrays(swrs);
                        _swrs[id] = {
                            data: swr.data,
                            error: swr.error,
                            revalidate: swr.revalidate,
                            isValidating: swr.isValidating,
                            mutate: swr.mutate
                        };
                        return _swrs;
                    });
                    if (typeof swr.data !== 'undefined') {
                        // set next page's offset
                        var newPageOffset_1 = SWRToOffset(swr, id);
                        if (pageOffsets[id + 1] !== newPageOffset_1) {
                            setPageOffsets(function (arr) {
                                var _arr = __spreadArrays(arr);
                                _arr[id + 1] = newPageOffset_1;
                                _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(pageOffsetKey, _arr);
                                return _arr;
                            });
                        }
                    }
                });
            }
            return swr;
        }; };
        // render each page
        var p = [];
        if (!pageCacheMap.has(pageKey)) {
            pageCacheMap.set(pageKey, []);
        }
        var pageCache = pageCacheMap.get(pageKey);
        for (var i = 0; i < pageCount; ++i) {
            if (!pageCache[i] ||
                pageCache[i].offset !== pageOffsets[i] ||
                pageCache[i].pageFn !== _pageFn) {
                // when props change or at init
                // render the page and cache it
                pageCache[i] = {
                    component: (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, { key: "page-" + pageOffsets[i] + "-" + i, offset: pageOffsets[i], withSWR: getWithSWR(i) })),
                    pageFn: _pageFn,
                    offset: pageOffsets[i]
                };
            }
            p.push(pageCache[i].component);
        }
        return p;
    }, [_pageFn, pageCount, pageSWRs, pageOffsets, pageKey]);
    return {
        pages: pages,
        pageCount: pageCount,
        pageSWRs: pageSWRs,
        isLoadingMore: isLoadingMore,
        isReachingEnd: isReachingEnd,
        isEmpty: isEmpty,
        loadMore: loadMore
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/*! exports provided: trigger, mutate, SWRConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutate", function() { return mutate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWRConfig", function() { return SWRConfig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "./node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var IS_SERVER = typeof window === 'undefined';
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], keyErr = _a[2];
    if (!key)
        return Promise.resolve();
    var updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key));
};
var broadcastState = function (key, data, error) {
    var updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var key, data, error, beforeMutationTs, beforeConcurrentPromisesTs, err_1, err_2, updaters, promises, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key)[0];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data, call revalidate against the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update timestamp
                        ];
                    // update timestamp
                    _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                    beforeMutationTs = _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key];
                    beforeConcurrentPromisesTs = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                    if (!(_data && typeof _data === 'function')) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data(_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key))];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 11];
                case 5:
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 10];
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, _data];
                case 7:
                    data = _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_2 = _a.sent();
                    error = err_2;
                    return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 11];
                case 10:
                    data = _data;
                    _a.label = 11;
                case 11:
                    // Check if other mutations have occurred since we've started awaiting, if so then do not persist this change
                    if (beforeMutationTs !== _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] ||
                        beforeConcurrentPromisesTs !== _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    if (typeof data !== 'undefined') {
                        // update cached data, avoid notifying from the cache
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, data, false);
                    }
                    updaters = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key); })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2];
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["default"], Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"]), config);
    if (typeof fn === 'undefined') {
        // use a global fetcher
        fn = config.fetcher;
    }
    var initialData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        data: initialData,
        error: initialError,
        isValidating: false
    });
    var rerender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null)[1];
    var dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    var keyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(key);
    // do unmount check for callbacks
    var eventsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        emit: function (event) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (unmountedRef.current)
                return;
            config[event].apply(config, params);
        }
    });
    var boundMutate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, shouldRevalidate) {
        return mutate(key, data, shouldRevalidate);
    }, [key]);
    // start a revalidation
    var revalidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var loading, shouldDeduping, newData, startAt, newState, err_3, retryCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
                        loading = true;
                        shouldDeduping = typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] !== 'undefined' && revalidateOpts.dedupe;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                        return [4 /*yield*/, _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]];
                    case 2:
                        newData = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if not deduping the request (hard revalidate) but
                        // there're other ongoing request(s) at the same time,
                        // we need to ignore the other result(s) to avoid
                        // possible race conditions:
                        // req1------------------>res1
                        //      req2-------->res2
                        // in that case, the second response should not be overridden
                        // by the first one.
                        if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                            // we can mark it as a mutation to ignore
                            // all requests which are fired before this one
                            _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] = Date.now() - 1;
                        }
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsRef.current.emit('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] = fn(key);
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key] = startAt = Date.now();
                        return [4 /*yield*/, _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]];
                    case 4:
                        newData = _a.sent();
                        setTimeout(function () {
                            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                            delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsRef.current.emit('onSuccess', newData, key, config);
                        _a.label = 5;
                    case 5:
                        // if the revalidation happened earlier than the local mutation,
                        // we have to ignore the result because it could override.
                        // meanwhile, a new revalidation should be triggered by the mutation.
                        if (_config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key] && startAt <= _config__WEBPACK_IMPORTED_MODULE_1__["MUTATION_TS"][key]) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(key, newData, false);
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, undefined, false);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, undefined);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
                        delete _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES_TS"][key];
                        _config__WEBPACK_IMPORTED_MODULE_1__["cache"].set(keyErr, err_3, false);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_3) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_3
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_3);
                            }
                        }
                        // events and retry
                        eventsRef.current.emit('onError', err_3, key, config);
                        if (config.shouldRetryOnError) {
                            retryCount = (revalidateOpts.retryCount || 0) + 1;
                            eventsRef.current.emit('onErrorRetry', err_3, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount: retryCount }));
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || config.initialData;
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key ||
            !config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
            keyRef.current = key;
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined' &&
                !IS_SERVER &&
                window['requestIdleCallback']) {
                // delay revalidate if there's cache
                // to not block the rendering
                window['requestIdleCallback'](softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        // whenever the window gets focused, revalidate
        var onFocus;
        if (config.revalidateOnFocus) {
            // throttle: avoid being called twice from both listeners
            // and tabs being switched quickly
            onFocus = Object(_libs_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(softRevalidate, config.focusThrottleInterval);
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key] = [onFocus];
            }
            else {
                _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key].push(onFocus);
            }
        }
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        // add updater to listeners
        if (!_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key] = [onUpdate];
        }
        else {
            _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key].push(onUpdate);
        }
        // set up reconnecting when the browser regains network connection
        var reconnect = null;
        if (!IS_SERVER && window.addEventListener && config.revalidateOnReconnect) {
            window.addEventListener('online', (reconnect = softRevalidate));
        }
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            if (onFocus && _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key]) {
                var revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["FOCUS_REVALIDATORS"][key];
                var index = revalidators.indexOf(onFocus);
                if (index >= 0) {
                    // 10x faster than splice
                    // https://jsperf.com/array-remove-by-index
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key]) {
                var revalidators = _config__WEBPACK_IMPORTED_MODULE_1__["CACHE_REVALIDATORS"][key];
                var index = revalidators.indexOf(onUpdate);
                if (index >= 0) {
                    revalidators[index] = revalidators[revalidators.length - 1];
                    revalidators.pop();
                }
            }
            if (!IS_SERVER && window.removeEventListener && reconnect !== null) {
                window.removeEventListener('online', reconnect);
            }
        };
    }, [key, revalidate]);
    // set up polling
    useIsomorphicLayoutEffect(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (config.refreshWhenHidden || Object(_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__["default"])()) &&
                            (config.refreshWhenOffline || Object(_libs_is_online__WEBPACK_IMPORTED_MODULE_3__["default"])()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (config.refreshInterval) {
                            timer = setTimeout(tick, config.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (config.refreshInterval) {
            timer = setTimeout(tick, config.refreshInterval);
        }
        return function () {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        var latestData = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(key) || initialData;
        var latestError = _config__WEBPACK_IMPORTED_MODULE_1__["cache"].get(keyErr) || initialError;
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key]) {
                // trigger revalidate immediately
                // to get the promise
                revalidate();
            }
            if (_config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key] &&
                typeof _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key].then === 'function') {
                // if it is a promise
                throw _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
            }
            // it's a value, return it directly (override)
            latestData = _config__WEBPACK_IMPORTED_MODULE_1__["CONCURRENT_PROMISES"][key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate: revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    // define returned state
    // can be memorized since the state is a ref
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                },
                enumerable: true
            }
        });
        return state;
    }, [revalidate]);
}
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ })

}]);
//# sourceMappingURL=vendor.js.map