/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["wpJsonMgcl"] = window["wpJsonMgcl"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../neko-ui/index.js":
/*!***************************!*\
  !*** ../neko-ui/index.js ***!
  \***************************/
/*! exports provided: NekoBusyOverlay, NekoButton, NekoMenuButton, NekoMenuItem, NekoPage, NekoBlock, NekoContainer, NekoSettings, NekoWindow, NekoWrapper, NekoColumn, NekoCheckbox, NekoCheckboxGroup, NekoInput, NekoTextArea, NekoSelect, NekoOption, NekoForm, NekoSwitch, ProOnly, NekoFinder, NekoFinderItem, NekoLogo, NekoProgress, NekoHeader, NekoPaging, NekoIcon, NekoTypo, NekoQuickLinks, NekoLink, NekoGauge, NekoMessageDanger, NekoMessageSuccess, NekoUpload, NekoUploadDropArea, NekoTooltip, NekoModal, NekoMediaLibraryModal, NekoTable, NekoTabs, NekoTab, NekoSideTabs, NekoSideTab, NekoToolbar, NekoTheme, useOutsideClick, useNekoTasks, useHandleSWR, useComponentSize, useNekoGlobalQueue, getFetch, postFetch, jsonFetcher, swrInvalidateMany, chunkArrayInGroups, buildUrlWithParams, NekoError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common/NekoBusyOverlay */ "../neko-ui/src/common/NekoBusyOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoBusyOverlay", function() { return _src_common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/button/Button */ "../neko-ui/src/button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoButton", function() { return _src_button_Button__WEBPACK_IMPORTED_MODULE_1__["NekoButton"]; });

/* harmony import */ var _src_button_MenuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/button/MenuButton */ "../neko-ui/src/button/MenuButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoMenuButton", function() { return _src_button_MenuButton__WEBPACK_IMPORTED_MODULE_2__["NekoMenuButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoMenuItem", function() { return _src_button_MenuButton__WEBPACK_IMPORTED_MODULE_2__["NekoMenuItem"]; });

/* harmony import */ var _src_container_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/container/Page */ "../neko-ui/src/container/Page.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoPage", function() { return _src_container_Page__WEBPACK_IMPORTED_MODULE_3__["NekoPage"]; });

/* harmony import */ var _src_container_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/container/Block */ "../neko-ui/src/container/Block.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoBlock", function() { return _src_container_Block__WEBPACK_IMPORTED_MODULE_4__["NekoBlock"]; });

/* harmony import */ var _src_container_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/container/Container */ "../neko-ui/src/container/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoContainer", function() { return _src_container_Container__WEBPACK_IMPORTED_MODULE_5__["NekoContainer"]; });

/* harmony import */ var _src_container_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/container/Settings */ "../neko-ui/src/container/Settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoSettings", function() { return _src_container_Settings__WEBPACK_IMPORTED_MODULE_6__["NekoSettings"]; });

/* harmony import */ var _src_container_Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/container/Window */ "../neko-ui/src/container/Window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoWindow", function() { return _src_container_Window__WEBPACK_IMPORTED_MODULE_7__["NekoWindow"]; });

/* harmony import */ var _src_container_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/container/Wrapper */ "../neko-ui/src/container/Wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoWrapper", function() { return _src_container_Wrapper__WEBPACK_IMPORTED_MODULE_8__["NekoWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoColumn", function() { return _src_container_Wrapper__WEBPACK_IMPORTED_MODULE_8__["NekoColumn"]; });

/* harmony import */ var _src_form_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/form/Checkbox */ "../neko-ui/src/form/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoCheckbox", function() { return _src_form_Checkbox__WEBPACK_IMPORTED_MODULE_9__["NekoCheckbox"]; });

/* harmony import */ var _src_form_CheckboxGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/form/CheckboxGroup */ "../neko-ui/src/form/CheckboxGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoCheckboxGroup", function() { return _src_form_CheckboxGroup__WEBPACK_IMPORTED_MODULE_10__["NekoCheckboxGroup"]; });

/* harmony import */ var _src_form_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/form/Input */ "../neko-ui/src/form/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoInput", function() { return _src_form_Input__WEBPACK_IMPORTED_MODULE_11__["NekoInput"]; });

/* harmony import */ var _src_form_TextArea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/form/TextArea */ "../neko-ui/src/form/TextArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTextArea", function() { return _src_form_TextArea__WEBPACK_IMPORTED_MODULE_12__["NekoTextArea"]; });

/* harmony import */ var _src_form_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/form/Select */ "../neko-ui/src/form/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoSelect", function() { return _src_form_Select__WEBPACK_IMPORTED_MODULE_13__["NekoSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoOption", function() { return _src_form_Select__WEBPACK_IMPORTED_MODULE_13__["NekoOption"]; });

/* harmony import */ var _src_form_Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/form/Form */ "../neko-ui/src/form/Form.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoForm", function() { return _src_form_Form__WEBPACK_IMPORTED_MODULE_14__["NekoForm"]; });

/* harmony import */ var _src_form_Switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/form/Switch */ "../neko-ui/src/form/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoSwitch", function() { return _src_form_Switch__WEBPACK_IMPORTED_MODULE_15__["NekoSwitch"]; });

/* harmony import */ var _src_label_ProOnly__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/label/ProOnly */ "../neko-ui/src/label/ProOnly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProOnly", function() { return _src_label_ProOnly__WEBPACK_IMPORTED_MODULE_16__["ProOnly"]; });

/* harmony import */ var _src_misc_Finder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/misc/Finder */ "../neko-ui/src/misc/Finder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoFinder", function() { return _src_misc_Finder__WEBPACK_IMPORTED_MODULE_17__["NekoFinder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoFinderItem", function() { return _src_misc_Finder__WEBPACK_IMPORTED_MODULE_17__["NekoFinderItem"]; });

/* harmony import */ var _src_misc_Logo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/misc/Logo */ "../neko-ui/src/misc/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoLogo", function() { return _src_misc_Logo__WEBPACK_IMPORTED_MODULE_18__["NekoLogo"]; });

/* harmony import */ var _src_misc_Progress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/misc/Progress */ "../neko-ui/src/misc/Progress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoProgress", function() { return _src_misc_Progress__WEBPACK_IMPORTED_MODULE_19__["NekoProgress"]; });

/* harmony import */ var _src_misc_Header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/misc/Header */ "../neko-ui/src/misc/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoHeader", function() { return _src_misc_Header__WEBPACK_IMPORTED_MODULE_20__["NekoHeader"]; });

/* harmony import */ var _src_misc_Paging__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/misc/Paging */ "../neko-ui/src/misc/Paging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoPaging", function() { return _src_misc_Paging__WEBPACK_IMPORTED_MODULE_21__["NekoPaging"]; });

/* harmony import */ var _src_misc_Icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/misc/Icon */ "../neko-ui/src/misc/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoIcon", function() { return _src_misc_Icon__WEBPACK_IMPORTED_MODULE_22__["NekoIcon"]; });

/* harmony import */ var _src_misc_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/misc/Typography */ "../neko-ui/src/misc/Typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTypo", function() { return _src_misc_Typography__WEBPACK_IMPORTED_MODULE_23__["NekoTypo"]; });

/* harmony import */ var _src_misc_Links__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/misc/Links */ "../neko-ui/src/misc/Links.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoQuickLinks", function() { return _src_misc_Links__WEBPACK_IMPORTED_MODULE_24__["NekoQuickLinks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoLink", function() { return _src_misc_Links__WEBPACK_IMPORTED_MODULE_24__["NekoLink"]; });

/* harmony import */ var _src_misc_Gauge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/misc/Gauge */ "../neko-ui/src/misc/Gauge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoGauge", function() { return _src_misc_Gauge__WEBPACK_IMPORTED_MODULE_25__["NekoGauge"]; });

/* harmony import */ var _src_misc_Message__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/misc/Message */ "../neko-ui/src/misc/Message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoMessageDanger", function() { return _src_misc_Message__WEBPACK_IMPORTED_MODULE_26__["NekoMessageDanger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoMessageSuccess", function() { return _src_misc_Message__WEBPACK_IMPORTED_MODULE_26__["NekoMessageSuccess"]; });

/* harmony import */ var _src_misc_Upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/misc/Upload */ "../neko-ui/src/misc/Upload.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoUpload", function() { return _src_misc_Upload__WEBPACK_IMPORTED_MODULE_27__["NekoUpload"]; });

/* harmony import */ var _src_misc_UploadDropArea__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/misc/UploadDropArea */ "../neko-ui/src/misc/UploadDropArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoUploadDropArea", function() { return _src_misc_UploadDropArea__WEBPACK_IMPORTED_MODULE_28__["NekoUploadDropArea"]; });

/* harmony import */ var _src_misc_Tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/misc/Tooltip */ "../neko-ui/src/misc/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTooltip", function() { return _src_misc_Tooltip__WEBPACK_IMPORTED_MODULE_29__["NekoTooltip"]; });

/* harmony import */ var _src_modal_Modal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/modal/Modal */ "../neko-ui/src/modal/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoModal", function() { return _src_modal_Modal__WEBPACK_IMPORTED_MODULE_30__["NekoModal"]; });

/* harmony import */ var _src_modal_MediaLibraryModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/modal/MediaLibraryModal */ "../neko-ui/src/modal/MediaLibraryModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoMediaLibraryModal", function() { return _src_modal_MediaLibraryModal__WEBPACK_IMPORTED_MODULE_31__["NekoMediaLibraryModal"]; });

/* harmony import */ var _src_table_Table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/table/Table */ "../neko-ui/src/table/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTable", function() { return _src_table_Table__WEBPACK_IMPORTED_MODULE_32__["NekoTable"]; });

/* harmony import */ var _src_tabs_Tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/tabs/Tabs */ "../neko-ui/src/tabs/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTabs", function() { return _src_tabs_Tabs__WEBPACK_IMPORTED_MODULE_33__["NekoTabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTab", function() { return _src_tabs_Tabs__WEBPACK_IMPORTED_MODULE_33__["NekoTab"]; });

/* harmony import */ var _src_tabs_SideTabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/tabs/SideTabs */ "../neko-ui/src/tabs/SideTabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoSideTabs", function() { return _src_tabs_SideTabs__WEBPACK_IMPORTED_MODULE_34__["NekoSideTabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoSideTab", function() { return _src_tabs_SideTabs__WEBPACK_IMPORTED_MODULE_34__["NekoSideTab"]; });

/* harmony import */ var _src_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/toolbar/Toolbar */ "../neko-ui/src/toolbar/Toolbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoToolbar", function() { return _src_toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_35__["NekoToolbar"]; });

/* harmony import */ var _src_common_NekoTheme__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./src/common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoTheme", function() { return _src_common_NekoTheme__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _src_hooks__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./src/hooks */ "../neko-ui/src/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useOutsideClick", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_37__["useOutsideClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNekoTasks", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_37__["useNekoTasks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHandleSWR", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_37__["useHandleSWR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useComponentSize", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_37__["useComponentSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useNekoGlobalQueue", function() { return _src_hooks__WEBPACK_IMPORTED_MODULE_37__["useNekoGlobalQueue"]; });

/* harmony import */ var _src_helpers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./src/helpers */ "../neko-ui/src/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFetch", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_38__["getFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postFetch", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_38__["postFetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonFetcher", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_38__["jsonFetcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swrInvalidateMany", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_38__["swrInvalidateMany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunkArrayInGroups", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_38__["chunkArrayInGroups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrlWithParams", function() { return _src_helpers__WEBPACK_IMPORTED_MODULE_38__["buildUrlWithParams"]; });

/* harmony import */ var _src_errors__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./src/errors */ "../neko-ui/src/errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NekoError", function() { return _src_errors__WEBPACK_IMPORTED_MODULE_39__["NekoError"]; });

// BusyOverlay

 // Button


 // Container






 // Form







 // Label

 // Misc













 // Modal


 // Table

 // Tabs


 // Toolbar

 // == THEME


 // == HOOKS

 // == HELPERS

 // == ERRORS



/***/ }),

/***/ "../neko-ui/src/button/Button.js":
/*!***************************************!*\
  !*** ../neko-ui/src/button/Button.js ***!
  \***************************************/
/*! exports provided: NekoButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoButton", function() { return NekoButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "../neko-ui/node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_PresetIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/PresetIcons */ "../neko-ui/src/common/PresetIcons.js");
var _excluded = ["className", "icon", "onClick", "disabled", "color", "small", "children"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var className = props.className,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? null : _props$icon,
      onClick = props.onClick,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$color = props.color,
      color = _props$color === void 0 ? null : _props$color,
      small = props.small,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var hasIcon = !!icon;

  var getIcon = function getIcon() {
    if (typeof icon === 'string') {
      return _common_PresetIcons__WEBPACK_IMPORTED_MODULE_6__["default"][icon] || null;
    }

    return icon;
  };

  var classNames = "nui-button ".concat(className || '').concat(hasIcon ? ' has-icon' : '').concat(color ? ' custom-color' : '').concat(small ? ' small' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    type: "button",
    className: classNames,
    onClick: onClick,
    disabled: disabled
  }, rest), hasIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    icon: getIcon(),
    width: "24",
    height: "24",
    style: {
      marginRight: '4px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, children));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  box-sizing: border-box;\n  height: 30px;\n  min-width: 6em;\n  border: none;\n  border-radius: 4px;\n  text-align: center;\n  font-family: ", ";\n  font-size: ", ";\n  padding: 0 15px;\n\n  background-color: ", ";\n  color: white;\n  transition: background-color .10s, opacity .25s;\n\n  :not([disabled]):hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  :disabled {\n    opacity: 0.35;\n  }\n\n  :focus {\n    outline: none;\n  }\n\n  &.has-icon {\n    align-items: center;\n    display: inline-flex;\n    padding: 2.5px 6px 2.5px 4px;\n  }\n\n  &.secondary {\n    background-color: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n  }\n\n  &.danger {\n    background-color: ", ";\n    border-color: ", ";\n\n\t  &:hover {\n\t\t  background-color: ", ";\n\t  }\n  }\n\n  &.success {\n    background-color: ", ";\n    border-color: ", ";\n\n\t  &:hover {\n\t\t  background-color: ", ";\n\t  }\n  }\n\n  & + button {\n    margin-left: .25rem;\n  }\n\n  &.small {\n    font-size: ", ";\n    height: 24px;\n  }\n\n  &.header {\n    background-color: ", ";\n    border-color: ", ";\n    height: 40px;\n    padding: 0 20px;\n\n\t  &:hover {\n\t\t  background-color: ", ";\n\t  }\n  }\n\n  ", "\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].lightBlue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].lightBlue), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].red, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].red, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].red), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].green, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].green, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].green), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizeSmallButton, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].deepBlue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].deepBlue, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].deepBlue), function (props) {
  return additionalColor(props.color);
});

var additionalColor = function additionalColor(color) {
  if (color) {
    return "\n      &.custom-color {\n        background-color: ".concat(color, ";\n        border: 1px solid ").concat(color, ";\n\n        &:hover {\n          background-color: ").concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, color), ";\n        }\n      }\n    ");
  }
};
/**
 * The NekoButton works out of the box without specific attributes.
 */


var NekoButton = function NekoButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, props);
};

NekoButton.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['primary', 'secondary', 'danger', 'success', 'header']),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_iconify_react__WEBPACK_IMPORTED_MODULE_5__["IconifyIcon"]), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['setting', 'edit', 'trash'])]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
NekoButton.defaultProps = {
  className: 'primary',
  disabled: false,
  icon: null,
  color: null,
  onClick: function onClick() {}
};


/***/ }),

/***/ "../neko-ui/src/button/MenuButton.js":
/*!*******************************************!*\
  !*** ../neko-ui/src/button/MenuButton.js ***!
  \*******************************************/
/*! exports provided: NekoMenuButton, NekoMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoMenuButton", function() { return NekoMenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoMenuItem", function() { return NekoMenuItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "../neko-ui/node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _label_ProOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../label/ProOnly */ "../neko-ui/src/label/ProOnly.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-down */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js");
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ "../neko-ui/src/hooks.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var MenuButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n"])));
var MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: none;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: white;\n  display: inline-flex;\n  justify-content: space-between;\n  font-family: ", ";\n  font-size: ", ";\n  height: 30px;\n  min-width: 6em;\n  padding: 0px 10px;\n  text-align: center;\n  transition: background-color .10s, opacity .25s;\n\n  :not([disabled]):hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  :disabled {\n    opacity: 0.35;\n  }\n\n  :focus {\n    outline: none;\n  }\n\n  & + button {\n    margin-left: .25rem;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizeText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue));
var MenuItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  margin-top: 18px;\n  background-color: ", ";\n  position: absolute;\n  z-index: 10;\n  box-shadow: ", ";\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    top: -18px;\n    left: 50%;\n    margin-left: -8px;\n    border: 8px solid transparent;\n    border-bottom: 10px solid ", ";\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].lightShadow, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue);

var StyledMenuButton = function StyledMenuButton(props) {
  var title = props.title,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$isPro = props.isPro,
      isPro = _props$isPro === void 0 ? false : _props$isPro,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var wrapperRef = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useOutsideClick"])(function () {
    setIsOpen(false);
  });

  var _useComponentSize = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useComponentSize"])(),
      buttonRef = _useComponentSize.ref,
      buttonWidth = _useComponentSize.width;

  var _onClick = function onClick() {
    setIsOpen(!isOpen);
  };

  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      isPro: isPro,
      disabled: child.props.disabled || disabled,
      onClick: function onClick() {
        if (child.props.onClick) {
          child.props.onClick();
        }

        _onClick();
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuButtonWrapper, {
    ref: wrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuButton, {
    ref: buttonRef,
    type: "button",
    disabled: disabled,
    onClick: _onClick,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7___default.a,
    width: "24",
    height: "24",
    style: {
      marginLeft: '4px'
    }
  })), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItemContainer, {
    style: {
      transform: "translateX(calc(-50% + ".concat(buttonWidth / 2, "px))")
    }
  }, children));
};

var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: none;\n  box-sizing: border-box;\n  color: white;\n  display: flex;\n  font-family: ", ";\n  font-size: ", ";\n  width: 100%;\n  padding: 8px 15px 8px 15px;\n  text-align: center;\n  transition: background-color .10s, opacity .25s;\n\n  :not([disabled]):hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  :disabled:not(.is-pro) {\n    opacity: 0.35;\n  }\n\n  :focus {\n    outline: none;\n  }\n\n  &.is-pro {\n    background-color: ", ";\n    justify-content: space-between;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizeText, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blue), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].proGray);

var StyledNekoMenuItem = function StyledNekoMenuItem(props) {
  var onClick = props.onClick,
      children = props.children,
      isPro = props.isPro,
      _props$requirePro = props.requirePro,
      requirePro = _props$requirePro === void 0 ? false : _props$requirePro,
      disabled = props.disabled;
  var needsProUser = requirePro && !isPro;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    type: "button",
    className: needsProUser ? 'is-pro' : '',
    onClick: onClick,
    disabled: disabled || needsProUser
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, children), needsProUser && !isPro && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_5__["ProOnly"], null));
};
/**
 * The NekoMenuButton works out of the box without specific attributes.
 */


var NekoMenuButton = function NekoMenuButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuButton, props);
};

var NekoMenuItem = function NekoMenuItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoMenuItem, props);
};

NekoMenuButton.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoMenuButton.defaultProps = {
  title: undefined,
  disabled: false,
  isPro: false
};
NekoMenuItem.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  requirePro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoMenuItem.defaultProps = {
  onClick: function onClick() {},
  requirePro: false
};


/***/ }),

/***/ "../neko-ui/src/common/NekoBusyOverlay.js":
/*!************************************************!*\
  !*** ../neko-ui/src/common/NekoBusyOverlay.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var NekoBusyOverlay = function NekoBusyOverlay(props) {
  var _props$spinner = props.spinner,
      spinner = _props$spinner === void 0 ? true : _props$spinner,
      _props$busy = props.busy,
      busy = _props$busy === void 0 ? false : _props$busy,
      overlayStyle = props.overlayStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      showLoader = _useState2[0],
      setShowLoader = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timeout; // Show the loader

    if (!busy) {
      timeout = setTimeout(function () {
        setShowLoader(false);
        timeout = null;
      }, 250);
    } else {
      setShowLoader(true);
    } // Cleanup


    return function () {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [busy]);
  var loader = !showLoader ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'overlay' + ' ' + (!busy ? 'overlayHidden' : ''),
    style: overlayStyle
  }, Boolean(spinner) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'lds-ellipsis ' + (!busy ? 'spinnerHidden' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    jsx: true
  }, "\n        .overlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          width: 100%;\n          height: 100%;\n          background: rgb(30 124 186 / 85%);\n          transition: opacity 1s ease-out;\n          z-index: 10;\n          display: flex;\n          align-items: center;\n          flex-direction: column;\n          justify-content: center;\n          overflow: hidden;\n        }\n\n        .overlayHidden {\n          opacity: 0;\n          transition: opacity 0.25s ease-out;\n        }\n        .spinnerHidden {\n          opacity: 0;\n          transition: opacity 0.25s ease-out;\n        }\n        .lds-ellipsis {\n          position: relative;\n          width: 80px;\n          height: 80px;\n          display: flex;\n          justify-items: center;\n          align-items: center;\n        }\n        .lds-ellipsis div {\n          position: absolute;\n          width: 13px;\n          height: 13px;\n          border-radius: 50%;\n          background: white;\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n        }\n        .lds-ellipsis div:nth-child(1) {\n          left: 8px;\n          animation: lds-ellipsis1 0.6s infinite;\n        }\n        .lds-ellipsis div:nth-child(2) {\n          left: 8px;\n          animation: lds-ellipsis2 0.6s infinite;\n        }\n        .lds-ellipsis div:nth-child(3) {\n          left: 32px;\n          animation: lds-ellipsis2 0.6s infinite;\n        }\n        .lds-ellipsis div:nth-child(4) {\n          left: 56px;\n          animation: lds-ellipsis3 0.6s infinite;\n        }\n        @keyframes lds-ellipsis1 {\n          0% {\n            transform: scale(0);\n          }\n          100% {\n            transform: scale(1);\n          }\n        }\n        @keyframes lds-ellipsis3 {\n          0% {\n            transform: scale(1);\n          }\n          100% {\n            transform: scale(0);\n          }\n        }\n        @keyframes lds-ellipsis2 {\n          0% {\n            transform: translate(0, 0);\n          }\n          100% {\n            transform: translate(24px, 0);\n          }\n        }        \n      ")); // I am removing the busy because I like it as a boolean...
  // ... but React doesn't like pure boolean value here.

  var propsForElement = _objectSpread(_objectSpread({}, props), {}, {
    busy: undefined,
    spinner: undefined
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    style: {
      position: 'relative'
    }
  }, propsForElement), loader, props.children);
};

NekoBusyOverlay.propTypes = {
  busy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  spinner: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NekoBusyOverlay);

/***/ }),

/***/ "../neko-ui/src/common/NekoTheme.js":
/*!******************************************!*\
  !*** ../neko-ui/src/common/NekoTheme.js ***!
  \******************************************/
/*! exports provided: NekoColors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoColors", function() { return NekoColors; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NekoColors = {
  black: '#000000',
  blackRGB: '0, 0, 0',
  blue: '#007cba',
  blueRGB: '0, 124, 186',
  deepBlue: '#134575',
  finderBorder: '#DEDEDE',
  lightBlue: '#EBF3FF',
  lightGray: '#cacaca',
  lightGray2: '#F5F5F5',
  lightPurple: '#D8B1FF',
  gray: '#E8E8E8',
  green: '#0EA480',
  darkGray: '#A0A0A0',
  disabledForm: '#828282',
  orange: '#daa827',
  overlay: 'rgba(16, 16, 16, 0.92)',
  red: '#ba4300',
  redHighlight: '#de5307',
  header: '#007cba',
  proGray: '#7F8EA0',
  progress: '#8414a8',
  purple: '#956DBE',
  tableGray: '#FAFAFA',
  yellow: '#e4b42b',
  yellowRGB: '224, 156, 54',
  white: '#ffffff',
  whiteRGB: '255, 255, 255'
};

var NekoTheme = _objectSpread(_objectSpread({}, NekoColors), {}, {
  // FONT
  fontFamily: 'Lato',
  fontSizeH1: '24px',
  fontSizeH2: '18px',
  fontSizeText: '13px',
  fontSizeSmall: '12px',
  fontSizeSmallButton: '10px',
  // SHADOW
  lightShadow: '0px 0px 10px rgba(0,0,0,0.1)'
});

/* harmony default export */ __webpack_exports__["default"] = (NekoTheme);

/***/ }),

/***/ "../neko-ui/src/common/PresetIcons.js":
/*!********************************************!*\
  !*** ../neko-ui/src/common/PresetIcons.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iconify_icons_mdi_lock_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-mdi/lock-check */ "../neko-ui/node_modules/@iconify/icons-mdi/lock-check.js");
/* harmony import */ var _iconify_icons_mdi_lock_check__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_lock_check__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_icons_mdi_lock_open_variant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-mdi/lock-open-variant */ "../neko-ui/node_modules/@iconify/icons-mdi/lock-open-variant.js");
/* harmony import */ var _iconify_icons_mdi_lock_open_variant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_lock_open_variant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iconify_icons_mdi_file_undo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-mdi/file-undo */ "../neko-ui/node_modules/@iconify/icons-mdi/file-undo.js");
/* harmony import */ var _iconify_icons_mdi_file_undo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_file_undo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-double-left */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-left.js");
/* harmony import */ var _iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-double-right */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-right.js");
/* harmony import */ var _iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-left */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-left.js");
/* harmony import */ var _iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-right */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-right.js");
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-down */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js");
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-up */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-up.js");
/* harmony import */ var _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-mdi/pause */ "../neko-ui/node_modules/@iconify/icons-mdi/pause.js");
/* harmony import */ var _iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-mdi/play */ "../neko-ui/node_modules/@iconify/icons-mdi/play.js");
/* harmony import */ var _iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_mdi_replay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-mdi/replay */ "../neko-ui/node_modules/@iconify/icons-mdi/replay.js");
/* harmony import */ var _iconify_icons_mdi_replay__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_replay__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_mdi_check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-mdi/check */ "../neko-ui/node_modules/@iconify/icons-mdi/check.js");
/* harmony import */ var _iconify_icons_mdi_check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_check__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-mdi/stop */ "../neko-ui/node_modules/@iconify/icons-mdi/stop.js");
/* harmony import */ var _iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_mdi_delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-mdi/delete */ "../neko-ui/node_modules/@iconify/icons-mdi/delete.js");
/* harmony import */ var _iconify_icons_mdi_delete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_delete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_mdi_undo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-mdi/undo */ "../neko-ui/node_modules/@iconify/icons-mdi/undo.js");
/* harmony import */ var _iconify_icons_mdi_undo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_undo__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_mdi_alert_circle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-mdi/alert-circle */ "../neko-ui/node_modules/@iconify/icons-mdi/alert-circle.js");
/* harmony import */ var _iconify_icons_mdi_alert_circle__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_alert_circle__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_mdi_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-mdi/database */ "../neko-ui/node_modules/@iconify/icons-mdi/database.js");
/* harmony import */ var _iconify_icons_mdi_database__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_database__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_mdi_pencil__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-mdi/pencil */ "../neko-ui/node_modules/@iconify/icons-mdi/pencil.js");
/* harmony import */ var _iconify_icons_mdi_pencil__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_pencil__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_mdi_tools__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-mdi/tools */ "../neko-ui/node_modules/@iconify/icons-mdi/tools.js");
/* harmony import */ var _iconify_icons_mdi_tools__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_tools__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_mdi_cog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-mdi/cog */ "../neko-ui/node_modules/@iconify/icons-mdi/cog.js");
/* harmony import */ var _iconify_icons_mdi_cog__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_cog__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_mdi_close__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-mdi/close */ "../neko-ui/node_modules/@iconify/icons-mdi/close.js");
/* harmony import */ var _iconify_icons_mdi_close__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_close__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_mdi_cat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-mdi/cat */ "../neko-ui/node_modules/@iconify/icons-mdi/cat.js");
/* harmony import */ var _iconify_icons_mdi_cat__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_cat__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_mdi_trash_can__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-mdi/trash-can */ "../neko-ui/node_modules/@iconify/icons-mdi/trash-can.js");
/* harmony import */ var _iconify_icons_mdi_trash_can__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_trash_can__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_mdi_lead_pencil__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-mdi/lead-pencil */ "../neko-ui/node_modules/@iconify/icons-mdi/lead-pencil.js");
/* harmony import */ var _iconify_icons_mdi_lead_pencil__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_lead_pencil__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _iconify_icons_mdi_view_dashboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-mdi/view-dashboard */ "../neko-ui/node_modules/@iconify/icons-mdi/view-dashboard.js");
/* harmony import */ var _iconify_icons_mdi_view_dashboard__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_view_dashboard__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _iconify_icons_mdi_database_search__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @iconify/icons-mdi/database-search */ "../neko-ui/node_modules/@iconify/icons-mdi/database-search.js");
/* harmony import */ var _iconify_icons_mdi_database_search__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_database_search__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @iconify/icons-mdi/folder */ "../neko-ui/node_modules/@iconify/icons-mdi/folder.js");
/* harmony import */ var _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @iconify/icons-mdi/folder-open */ "../neko-ui/node_modules/@iconify/icons-mdi/folder-open.js");
/* harmony import */ var _iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @iconify/icons-mdi/image-multiple-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/image-multiple-outline.js");
/* harmony import */ var _iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _iconify_icons_mdi_plus__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @iconify/icons-mdi/plus */ "../neko-ui/node_modules/@iconify/icons-mdi/plus.js");
/* harmony import */ var _iconify_icons_mdi_plus__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_plus__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _iconify_icons_mdi_folder_plus__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @iconify/icons-mdi/folder-plus */ "../neko-ui/node_modules/@iconify/icons-mdi/folder-plus.js");
/* harmony import */ var _iconify_icons_mdi_folder_plus__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_folder_plus__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _iconify_icons_mdi_image_plus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @iconify/icons-mdi/image-plus */ "../neko-ui/node_modules/@iconify/icons-mdi/image-plus.js");
/* harmony import */ var _iconify_icons_mdi_image_plus__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_image_plus__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _iconify_icons_mdi_view_grid__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @iconify/icons-mdi/view-grid */ "../neko-ui/node_modules/@iconify/icons-mdi/view-grid.js");
/* harmony import */ var _iconify_icons_mdi_view_grid__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_view_grid__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _iconify_icons_mdi_format_list_bulleted__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @iconify/icons-mdi/format-list-bulleted */ "../neko-ui/node_modules/@iconify/icons-mdi/format-list-bulleted.js");
/* harmony import */ var _iconify_icons_mdi_format_list_bulleted__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_format_list_bulleted__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _iconify_icons_mdi_twitter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @iconify/icons-mdi/twitter */ "../neko-ui/node_modules/@iconify/icons-mdi/twitter.js");
/* harmony import */ var _iconify_icons_mdi_twitter__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_twitter__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _iconify_icons_mdi_instagram__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @iconify/icons-mdi/instagram */ "../neko-ui/node_modules/@iconify/icons-mdi/instagram.js");
/* harmony import */ var _iconify_icons_mdi_instagram__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_instagram__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _iconify_icons_mdi_facebook__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @iconify/icons-mdi/facebook */ "../neko-ui/node_modules/@iconify/icons-mdi/facebook.js");
/* harmony import */ var _iconify_icons_mdi_facebook__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_facebook__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _iconify_icons_mdi_star__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @iconify/icons-mdi/star */ "../neko-ui/node_modules/@iconify/icons-mdi/star.js");
/* harmony import */ var _iconify_icons_mdi_star__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_star__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _iconify_icons_mdi_timer_outline__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @iconify/icons-mdi/timer-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/timer-outline.js");
/* harmony import */ var _iconify_icons_mdi_timer_outline__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_timer_outline__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _iconify_icons_mdi_arrow_up_bold_circle_outline__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @iconify/icons-mdi/arrow-up-bold-circle-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/arrow-up-bold-circle-outline.js");
/* harmony import */ var _iconify_icons_mdi_arrow_up_bold_circle_outline__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_arrow_up_bold_circle_outline__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _iconify_icons_mdi_link_variant__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @iconify/icons-mdi/link-variant */ "../neko-ui/node_modules/@iconify/icons-mdi/link-variant.js");
/* harmony import */ var _iconify_icons_mdi_link_variant__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_link_variant__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _iconify_icons_mdi_linkedin__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @iconify/icons-mdi/linkedin */ "../neko-ui/node_modules/@iconify/icons-mdi/linkedin.js");
/* harmony import */ var _iconify_icons_mdi_linkedin__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_linkedin__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _iconify_icons_mdi_pinterest__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @iconify/icons-mdi/pinterest */ "../neko-ui/node_modules/@iconify/icons-mdi/pinterest.js");
/* harmony import */ var _iconify_icons_mdi_pinterest__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_pinterest__WEBPACK_IMPORTED_MODULE_43__);















 //import alertIcon from '@iconify/icons-mdi/alert';





























var presetIcons = {
  'lock': _iconify_icons_mdi_lock_check__WEBPACK_IMPORTED_MODULE_0___default.a,
  'lock-open': _iconify_icons_mdi_lock_open_variant__WEBPACK_IMPORTED_MODULE_1___default.a,
  'file-undo': _iconify_icons_mdi_file_undo__WEBPACK_IMPORTED_MODULE_2___default.a,
  'chevron-double-left': _iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_3___default.a,
  'chevron-double-right': _iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_4___default.a,
  'chevron-left': _iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a,
  'chevron-right': _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_6___default.a,
  'chevron-down': _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_7___default.a,
  'chevron-up': _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_8___default.a,
  'pause': _iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_9___default.a,
  'play': _iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_10___default.a,
  'replay': _iconify_icons_mdi_replay__WEBPACK_IMPORTED_MODULE_11___default.a,
  'check': _iconify_icons_mdi_check__WEBPACK_IMPORTED_MODULE_12___default.a,
  'stop': _iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_13___default.a,
  'delete': _iconify_icons_mdi_delete__WEBPACK_IMPORTED_MODULE_14___default.a,
  'undo': _iconify_icons_mdi_undo__WEBPACK_IMPORTED_MODULE_15___default.a,
  'alert': _iconify_icons_mdi_alert_circle__WEBPACK_IMPORTED_MODULE_16___default.a,
  'database': _iconify_icons_mdi_database__WEBPACK_IMPORTED_MODULE_17___default.a,
  'tools': _iconify_icons_mdi_tools__WEBPACK_IMPORTED_MODULE_19___default.a,
  'cog': _iconify_icons_mdi_cog__WEBPACK_IMPORTED_MODULE_20___default.a,
  'close': _iconify_icons_mdi_close__WEBPACK_IMPORTED_MODULE_21___default.a,
  'cat': _iconify_icons_mdi_cat__WEBPACK_IMPORTED_MODULE_22___default.a,
  'upload': _iconify_icons_mdi_arrow_up_bold_circle_outline__WEBPACK_IMPORTED_MODULE_40___default.a,
  'trash': _iconify_icons_mdi_trash_can__WEBPACK_IMPORTED_MODULE_23___default.a,
  'pencil': _iconify_icons_mdi_lead_pencil__WEBPACK_IMPORTED_MODULE_24___default.a,
  'dashboard': _iconify_icons_mdi_view_dashboard__WEBPACK_IMPORTED_MODULE_25___default.a,
  'search': _iconify_icons_mdi_database_search__WEBPACK_IMPORTED_MODULE_26___default.a,
  'folder': _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_27___default.a,
  'folder-open': _iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_28___default.a,
  'image-multiple-outline': _iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_29___default.a,
  'plus': _iconify_icons_mdi_plus__WEBPACK_IMPORTED_MODULE_30___default.a,
  'folder-plus': _iconify_icons_mdi_folder_plus__WEBPACK_IMPORTED_MODULE_31___default.a,
  'image-plus': _iconify_icons_mdi_image_plus__WEBPACK_IMPORTED_MODULE_32___default.a,
  'view-grid': _iconify_icons_mdi_view_grid__WEBPACK_IMPORTED_MODULE_33___default.a,
  'format-list-bulleted': _iconify_icons_mdi_format_list_bulleted__WEBPACK_IMPORTED_MODULE_34___default.a,
  'twitter': _iconify_icons_mdi_twitter__WEBPACK_IMPORTED_MODULE_35___default.a,
  'instagram': _iconify_icons_mdi_instagram__WEBPACK_IMPORTED_MODULE_36___default.a,
  'facebook': _iconify_icons_mdi_facebook__WEBPACK_IMPORTED_MODULE_37___default.a,
  'star': _iconify_icons_mdi_star__WEBPACK_IMPORTED_MODULE_38___default.a,
  'timer-outline': _iconify_icons_mdi_timer_outline__WEBPACK_IMPORTED_MODULE_39___default.a,
  'link': _iconify_icons_mdi_link_variant__WEBPACK_IMPORTED_MODULE_41___default.a,
  'linkedin': _iconify_icons_mdi_linkedin__WEBPACK_IMPORTED_MODULE_42___default.a,
  'pinterest': _iconify_icons_mdi_pinterest__WEBPACK_IMPORTED_MODULE_43___default.a
};
/* harmony default export */ __webpack_exports__["default"] = (presetIcons);

/***/ }),

/***/ "../neko-ui/src/container/Block.js":
/*!*****************************************!*\
  !*** ../neko-ui/src/container/Block.js ***!
  \*****************************************/
/*! exports provided: NekoBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoBlock", function() { return NekoBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _misc_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../misc/Typography */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/NekoBusyOverlay */ "../neko-ui/src/common/NekoBusyOverlay.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Block = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  margin-bottom: 15px;\n  \n  .nui-block-title {\n    color: ", ";\n    padding: 5px 10px;\n    margin-bottom: 5px;\n  }\n\n  .nui-block-content {\n    background-color: #f1f1f1;\n    padding: 26px;\n    box-shadow: 0px 2px 5px 0px #0000004a;\n    border-radius: 10px;\n\n    p:first-child {\n      margin-top: 0;\n    }\n\n    p:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  &.primary {\n    padding: 8px;\n    background-color: ", ";\n\n    .nui-block-title {\n      color: ", ";\n    }\n\n    .nui-block-content {\n      background-color: ", ";\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white);
/**
 * @oaram {string} className
 */

var StyledNekoBlock = function StyledNekoBlock(props) {
  var title = props.title,
      children = props.children,
      className = props.className,
      _props$busy = props.busy,
      busy = _props$busy === void 0 ? false : _props$busy,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Block, {
    className: 'nui-block ' + (className || ''),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    busy: busy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Typography__WEBPACK_IMPORTED_MODULE_4__["NekoTypo"], {
    h2: true,
    className: "nui-block-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-block-content"
  }, children)));
};

var NekoBlock = function NekoBlock(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoBlock, props);
};

NekoBlock.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['', 'primary']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
NekoBlock.defaultProps = {
  title: undefined,
  className: '',
  style: {}
};


/***/ }),

/***/ "../neko-ui/src/container/Container.js":
/*!*********************************************!*\
  !*** ../neko-ui/src/container/Container.js ***!
  \*********************************************/
/*! exports provided: NekoContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoContainer", function() { return NekoContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  font-family: ", ";\n  background-color: ", ";\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 25px;\n\n  &.primary {\n    background-color: ", ";\n  }\n\n  p:first-child {\n    margin-top: 0px;\n  }\n\n  p:last-child {\n    margin-bottom: 0px;\n  }\n\n  .content {\n    padding: 20px 20px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
var Bar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  justify-content: flex-start;\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  padding: 8px 10px;\n\n  &.align-right {\n    justify-content: flex-end;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].lightGray2);
/**
 * @oaram {string} className
 */

var StyledNekoContainer = function StyledNekoContainer(props) {
  var children = props.children,
      header = props.header,
      _props$headerAlign = props.headerAlign,
      headerAlign = _props$headerAlign === void 0 ? 'left' : _props$headerAlign,
      footer = props.footer,
      _props$footerAlign = props.footerAlign,
      footerAlign = _props$footerAlign === void 0 ? 'right' : _props$footerAlign,
      className = props.className,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    className: className || '',
    style: style
  }, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
    className: "align-".concat(headerAlign)
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, children), footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
    className: "align-".concat(footerAlign)
  }, footer));
};

var NekoContainer = function NekoContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoContainer, props);
};

NekoContainer.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  headerAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right']),
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  footerAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
NekoContainer.defaultProps = {
  header: undefined,
  headerAlign: 'left',
  footer: undefined,
  footerAlign: 'right',
  className: undefined,
  style: {}
};


/***/ }),

/***/ "../neko-ui/src/container/Page.js":
/*!****************************************!*\
  !*** ../neko-ui/src/container/Page.js ***!
  \****************************************/
/*! exports provided: NekoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoPage", function() { return NekoPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/Button */ "../neko-ui/src/button/Button.js");
var _templateObject;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Page = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  background: #f1f1f1;\n  margin-left: -20px;\n  background-color: rgb(30 124 186 / 10%);\n  padding-bottom: 50px;\n  margin-bottom: -26px;\n\n  .neko-rest-error {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: #1e232deb;\n    z-index: 100;\n\n    .container {\n      color: white;\n      padding: 5px 20px 15px 20px;\n      min-width: 480px;\n      max-width: 600px;\n      border-radius: 20px;\n      background: #883131;\n      margin-left: 50%;\n      transform: translateX(-50%);\n      margin-top: 100px;\n\n      h3 {\n        color: white;\n      }\n\n      .neko-debug {\n        padding: 5px 10px;\n        background: #692426;\n        border-radius: 10px;\n\n        * {\n          margin: 0px;\n          padding: 0px;\n        }        \n      }\n    }\n  }\n"])));
/**
 * @oaram {string} className
 */

var StyledNekoPage = function StyledNekoPage(props) {
  var className = props.className,
      children = props.children,
      _props$nekoErrors = props.nekoErrors,
      nekoErrors = _props$nekoErrors === void 0 ? [] : _props$nekoErrors,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      fatalError = _useState2[0],
      setFatalError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showBody = _useState4[0],
      setShowBody = _useState4[1];

  if (nekoErrors && !fatalError) {
    var _iterator = _createForOfIteratorHelper(nekoErrors),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var error = _step.value;

        if (error) {
          setFatalError(error);
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, {
    className: className || '',
    style: style
  }, fatalError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-rest-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, !showBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "The Rest API is disabled or broken \uD83D\uDE22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Rest API is required for this plugin to work. It is enabled in WordPress by default since December 2016 and used by the Gutenberg Editor since 2019. In short, it allows more robustness and a much cleaner infrastructure. Soon, Wordpress will entirely depends on it, so it is important to keep it enabled."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Last but not least: check your PHP Error Logs and your Debugging Console.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "neko-debug"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "URL: ", fatalError.url, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "CODE: ", fatalError.code, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "MESSAGE: ", fatalError.message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))), fatalError.body && showBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "neko-debug"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: fatalError.body
    }
  })), fatalError.body && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_3__["NekoButton"], {
    color: "#a94242",
    onClick: function onClick() {
      return setShowBody(!showBody);
    }
  }, showBody ? 'Hide' : 'Display', " response from server"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_3__["NekoButton"], {
    color: "#a94242",
    onClick: function onClick() {
      window.open('https://meowapps.com/fix-wordpress-rest-api/', '_blank');
    }
  }, "Learn about WordPress Debugging"))), children);
};

var NekoPage = function NekoPage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoPage, props);
};

NekoPage.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  nekoErrors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoPage.defaultProps = {
  className: undefined,
  style: {},
  nekoErrors: false
};


/***/ }),

/***/ "../neko-ui/src/container/Settings.js":
/*!********************************************!*\
  !*** ../neko-ui/src/container/Settings.js ***!
  \********************************************/
/*! exports provided: NekoSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoSettings", function() { return NekoSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/**
 * @param {string} title=''
 */

var StyledNekoSettings = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$contentAlign = props.contentAlign,
      contentAlign = _props$contentAlign === void 0 ? 'left' : _props$contentAlign;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.className || ''
  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-settings-head"
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-settings-content nui-settings-content-align-".concat(contentAlign)
  }, props.children));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  font-family: ", ";\n\n  > .nui-settings-head {\n    font-family: ", ";\n    font-size: 14px;\n    line-height: 17px;\n    width: 120px;\n    margin-right: 16px;\n  }\n\n  /* Select, Checkbox, Input need to be a bit higher to be in front of the settings title */\n\n  .nui-settings-content > .nui-select:first-child {\n    position: relative;\n    margin-top: -5px;\n  }\n  \n  .nui-settings-content > .nui-checkbox:first-child {\n    position: relative;\n    margin-top: -5px;\n  }\n\n  .nui-settings-content > .nui-checkbox:first-child {\n    position: relative;\n    margin-top: -5px;\n  }\n\n  .nui-settings-content > .nui-button:first-child {\n    position: relative;\n    margin-top: -5px;\n  }\n\n  .nui-settings-content > div:first-child > .neko-input {\n    position: relative;\n    margin-top: -5px;\n  }\n\n  > .nui-settings-content {\n    flex: 1;\n\n    &.nui-settings-content-align-right {\n      flex: none;\n      margin-left: auto;\n    }\n\n    input[type=text] {\n      width: 100%;\n    }\n\n\n  }\n\n  & + div {\n    margin-top: 15px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily);

var NekoSettings = function NekoSettings(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoSettings, props);
};

NekoSettings.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  contentAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoSettings.defaultProps = {
  title: '',
  className: undefined,
  contentAlign: 'left'
};


/***/ }),

/***/ "../neko-ui/src/container/Window.js":
/*!******************************************!*\
  !*** ../neko-ui/src/container/Window.js ***!
  \******************************************/
/*! exports provided: NekoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoWindow", function() { return NekoWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var WindowBase = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin: 20px;\n  padding: 14px;\n  background-color: white;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  > * + * {\n    /* Base margin between child elements */\n    margin-top: 14px;\n  }\n"])));
var TitleBar = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return props.children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.className
  }, props.children) : null;
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: white;\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue);

var StyledNekoWindow = function StyledNekoWindow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WindowBase, {
    className: "window"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TitleBar, null, props.title), props.children);
};

var NekoWindow = function NekoWindow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoWindow, props);
};

NekoWindow.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoWindow.defaultProps = {
  title: undefined
};


/***/ }),

/***/ "../neko-ui/src/container/Wrapper.js":
/*!*******************************************!*\
  !*** ../neko-ui/src/container/Wrapper.js ***!
  \*******************************************/
/*! exports provided: NekoWrapper, NekoColumn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoWrapper", function() { return NekoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoColumn", function() { return NekoColumn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _excluded = ["full", "minimal"];

var _templateObject, _templateObject2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var Column = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 32px 30px;\n\n  .nui-block:not(:first-child) {\n    margin-top: -20px;\n  }\n\n  .nui-block:last-child {\n    margin-bottom: 0px;\n  }\n\n  &.minimal {\n    padding: 0;\n  }\n\n  &.full {\n    flex-basis: 100%;\n    padding-bottom: 0;\n  }\n\n  & + .full {\n    padding-bottom: 32px;\n    padding-top: 0;\n  }\n\n  &:not(.full) + div:not(.full) {\n    padding-left: 0;\n  }\n"])));
/**
 * @oaram {string} className
 */

var StyledNekoWrapper = function StyledNekoWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, props.children);
};

var StyledNekoColumn = function StyledNekoColumn(props) {
  var full = props.full,
      minimal = props.minimal,
      rest = _objectWithoutProperties(props, _excluded);

  var className = full ? 'full' : '';
  className += minimal ? ' minimal' : '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Column, _extends({
    className: className
  }, rest), props.children);
};

var NekoWrapper = function NekoWrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoWrapper, props);
};

var NekoColumn = function NekoColumn(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoColumn, props);
};

NekoWrapper.propTypes = {};
NekoWrapper.defaultProps = {};
NekoColumn.propTypes = {
  full: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
NekoColumn.defaultProps = {
  full: undefined
};


/***/ }),

/***/ "../neko-ui/src/errors.js":
/*!********************************!*\
  !*** ../neko-ui/src/errors.js ***!
  \********************************/
/*! exports provided: NekoError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoError", function() { return NekoError; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NekoError = function NekoError(message) {
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var debug = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  _classCallCheck(this, NekoError);

  this.url = url;
  this.message = message;
  this.code = code;
  this.body = body;
  this.debug = debug;
};



/***/ }),

/***/ "../neko-ui/src/form/Checkbox.js":
/*!***************************************!*\
  !*** ../neko-ui/src/form/Checkbox.js ***!
  \***************************************/
/*! exports provided: NekoCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoCheckbox", function() { return NekoCheckbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _label_ProOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label/ProOnly */ "../neko-ui/src/label/ProOnly.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/checkbox-blank-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-outline.js");
/* harmony import */ var _iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/checkbox-marked */ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-marked.js");
/* harmony import */ var _iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









/**
 * @param {string} id
 * @param {string} name
 * @param   {bool} checked
 * @param {string} label
 * @param {string} description
 */

var StyledNekoCheckbox = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var id = props.id,
      name = props.name,
      _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      onChange = props.onChange,
      label = props.label,
      description = props.description,
      isPro = props.isPro,
      disabled = props.disabled,
      _props$requirePro = props.requirePro,
      requirePro = _props$requirePro === void 0 ? false : _props$requirePro;
  var showUpProOnly = requirePro && !isPro;
  var isDisabled = disabled || showUpProOnly;
  var disabledClass = isDisabled ? 'disabled' : '';

  var onClick = function onClick() {
    if (!onChange) {
      console.log("The onChange handler it not set for this checkbox.", props);
      return;
    }

    onChange(!checked, id);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ['nui-checkbox', props.className, disabledClass].join(' ')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: id,
    name: name,
    type: "checkbox",
    defaultChecked: false,
    onClick: onClick,
    disabled: isDisabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-checkbox-check-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
    icon: checked ? _iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7___default.a : _iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: "30px",
    height: "30px",
    color: isDisabled ? _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].disabledForm : _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-checkbox-inner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_4__["ProOnly"], {
    className: "inline",
    show: showUpProOnly
  })), description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "description"
  }, description) : null)));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n\n  &.disabled {\n    color: ", ";\n\n    label {\n      cursor: default;\n    }\n  }\n\n  input {\n    display: none;\n  }\n\n  label {\n    cursor: pointer;\n    display: flex;\n  }\n  .nui-checkbox-check-container {\n    flex-basis: 30px;\n  }\n  .nui-checkbox-inner-container {\n    margin-top: 1.5px;\n    margin-left: 4px;\n\n    .label {\n      display: block;\n      font-size: 14px;\n      line-height: 17px;\n      padding-top: 4.5px;\n      padding-bottom: 4px;\n    }\n    \n    .description {\n      display: block;\n      font-size: 13px;\n      line-height: 14px;\n      color: #8a8a8a;\n\n      * {\n        font-size: 13px;\n        line-height: inherit;\n        margin: 0;\n      }\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].disabledForm);

var NekoCheckbox = function NekoCheckbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoCheckbox, props);
};

NekoCheckbox.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  requirePro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoCheckbox.defaultProps = {
  id: undefined,
  name: undefined,
  checked: false,
  label: undefined,
  description: undefined,
  isPro: false,
  requirePro: false
};


/***/ }),

/***/ "../neko-ui/src/form/CheckboxGroup.js":
/*!********************************************!*\
  !*** ../neko-ui/src/form/CheckboxGroup.js ***!
  \********************************************/
/*! exports provided: NekoCheckboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoCheckboxGroup", function() { return NekoCheckboxGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/**
 * @param {string} name
 * @param {int} max=-1 Max number of checkboxes to be checked. Negative number means unlimited
 */

var StyledNekoCheckboxGroup = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var name = props.name,
      _props$max = props.max,
      max = _props$max === void 0 ? -1 : _props$max,
      _props$isPro = props.isPro,
      isPro = _props$isPro === void 0 ? false : _props$isPro; // React.Children.toArray(props.children)
  // Modify child components (Checkboxes)

  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    if (child.props.name) return child; // Do not modify if the child has its own name

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      name: name,
      // Apply the group's name
      isPro: isPro
    });
  });
  return children;
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

var NekoCheckboxGroup = function NekoCheckboxGroup(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoCheckboxGroup, props);
};

NekoCheckboxGroup.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mas: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoCheckboxGroup.defaultProps = {
  name: undefined,
  mas: -1,
  isPro: false
};


/***/ }),

/***/ "../neko-ui/src/form/Form.js":
/*!***********************************!*\
  !*** ../neko-ui/src/form/Form.js ***!
  \***********************************/
/*! exports provided: NekoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoForm", function() { return NekoForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  label {\n    display: block;\n    margin-bottom: 3px;\n  }\n\n  .neko-input, .neko-textarea {\n    margin-bottom: 5px;\n  }\n"])));
/**
 * @param {string} id
 * @param {string} name
 * @param {string} value
 * @param {string} description
 * @param {string} placeholder
 */

var StyledNekoForm = function StyledNekoForm(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, null, props.children || null);
};

var NekoForm = function NekoForm(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoForm, props);
};

NekoForm.propTypes = {};
NekoForm.defaultProps = {};


/***/ }),

/***/ "../neko-ui/src/form/Input.js":
/*!************************************!*\
  !*** ../neko-ui/src/form/Input.js ***!
  \************************************/
/*! exports provided: NekoInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoInput", function() { return NekoInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _excluded = ["id", "name", "value", "description", "placeholder", "onEnter", "readOnly", "type", "step", "min", "max", "maxLength", "className", "style", "natural", "inputStyle"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/**
 * @param {string} id
 * @param {string} name
 * @param {string} value
 * @param {string} description
 * @param {string} placeholder
 */

var StyledNekoInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var id = props.id,
      name = props.name,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      description = props.description,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$onEnter = props.onEnter,
      onEnter = _props$onEnter === void 0 ? null : _props$onEnter,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$min = props.min,
      min = _props$min === void 0 ? 1 : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? 999 : _props$max,
      _props$maxLength = props.maxLength,
      defaultMaxLength = _props$maxLength === void 0 ? undefined : _props$maxLength,
      className = props.className,
      style = props.style,
      _props$natural = props.natural,
      natural = _props$natural === void 0 ? false : _props$natural,
      inputStyle = props.inputStyle,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState2 = _slicedToArray(_useState, 2),
      newValue = _useState2[0],
      setNewValue = _useState2[1];

  var isControlled = !!props.onChange;
  var maxLength = defaultMaxLength ? defaultMaxLength : type === 'number' ? 3 : undefined;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isControlled) {
      setNewValue(value);
    }
  }, [value]);

  var onChange = function onChange(e) {
    if (isControlled) {
      props.onChange(e.target.value, id);
    } else {
      setNewValue(e.target.value, id);
    }
  };

  var onKeyPress = function onKeyPress(e) {
    if (onEnter && event.key === 'Enter') {
      e.preventDefault();
      props.onEnter(e.target.value, id);
    }
  };

  var onBlur = function onBlur(e) {
    if (props.onBlur && value !== e.target.value) {
      props.onBlur(e.target.value, id);
    }
  };

  var classNames = "neko-input ".concat(natural ? ' natural' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className].join(' '),
    style: style
  }, type === 'number' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: [classNames].join(' '),
    id: id,
    name: name,
    value: isControlled ? value : newValue,
    type: type,
    step: step,
    min: min,
    max: max,
    maxLength: maxLength,
    autoComplete: "off",
    placeholder: placeholder,
    style: inputStyle,
    onChange: onChange,
    onKeyPress: onKeyPress,
    onBlur: onBlur,
    readOnly: readOnly
  }, rest)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: [classNames].join(' ')
  }, rest, {
    id: id,
    name: name,
    value: isControlled ? value : newValue,
    type: type,
    spellCheck: "false",
    autoComplete: "off",
    placeholder: placeholder,
    style: inputStyle,
    maxLength: maxLength,
    onChange: onChange,
    onKeyPress: onKeyPress,
    onBlur: onBlur,
    readOnly: readOnly
  }, rest)), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "neko-input-description"
  }, description));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .neko-input {\n    font-family: ", ";\n    font-size: ", ";\n    border: 2px solid ", ";\n    box-sizing: border-box;\n    height: 30px;\n    background: rgb(0 124 186 / 10%);\n    padding: 0 10px;\n    width: 100%;\n\n    &.natural {\n      border-color: gray;\n      border-width: 1px;\n    }\n\n    &::placeholder {\n      color: rgba(0, 0, 0, 0.25);\n    }\n\n    :focus {\n      background-color: white;\n    }\n\n    :read-only {\n      background-color: ", ";\n    }\n  }\n\n  .neko-input-description {\n    font-family: ", ";\n    font-size: ", ";\n    line-height: 14px;\n    margin-top: 8px;\n    margin-bottom: 0;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].gray, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeSmall);

var NekoInput = function NekoInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoInput, props);
};

NekoInput.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['number', 'text']),
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  natural: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoInput.defaultProps = {
  id: undefined,
  type: 'text',
  name: undefined,
  value: '',
  description: undefined,
  placeholder: '',
  onChange: undefined,
  onEnter: undefined,
  onBlur: undefined,
  readOnly: false,
  step: 1,
  min: 1,
  max: 999,
  maxLength: undefined,
  natural: false
};


/***/ }),

/***/ "../neko-ui/src/form/Select.js":
/*!*************************************!*\
  !*** ../neko-ui/src/form/Select.js ***!
  \*************************************/
/*! exports provided: NekoSelect, NekoOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoSelect", function() { return NekoSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoOption", function() { return NekoOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _label_ProOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label/ProOnly */ "../neko-ui/src/label/ProOnly.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks */ "../neko-ui/src/hooks.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_checkbox_blank_circle_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/checkbox-blank-circle-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-circle-outline.js");
/* harmony import */ var _iconify_icons_mdi_checkbox_blank_circle_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_checkbox_blank_circle_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_mdi_record_circle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-mdi/record-circle */ "../neko-ui/node_modules/@iconify/icons-mdi/record-circle.js");
/* harmony import */ var _iconify_icons_mdi_record_circle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_record_circle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-down */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js");
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-up */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-up.js");
/* harmony import */ var _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _misc_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../misc/Icon */ "../neko-ui/src/misc/Icon.js");
var _excluded = ["id", "name", "value", "scrolldown", "isPro", "onChange", "className"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var Select = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  position: relative;\n  user-select: none;\n  cursor: pointer;\n\n  &.show-options {\n    background-color: ", ";\n    border-radius: 8px 8px 0 0;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
var SelectedOption = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 8px;\n  display: flex;\n  font-family: ", ";\n  font-size: 14px;\n  padding: 0 5px 0 10px;\n  box-sizing: border-box;\n  height: 30px;\n\n  .rightContent {\n    align-items: center;\n    display: flex;\n    margin-left: auto;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: block;\n  margin-top: 5px;\n  font-size: 13px;\n  line-height: 14px;\n  color: #8a8a8a;\n\n  * {\n    font-size: 13px;\n    line-height: inherit;\n    margin: 0;\n  }\n"])));
var Options = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  overflow: hidden;\n  padding-top: 28px;\n  position: absolute;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  transition: all 0.2s ease-in;\n\n  &.hidden {\n    opacity: 0;\n  }\n"])));
var OptionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: ", ";\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white);
/**
 * @param {string} name
 */

var StyledNekoSelect = function StyledNekoSelect(props) {
  var _React$Children$toArr;

  var id = props.id,
      name = props.name,
      value = props.value,
      _props$scrolldown = props.scrolldown,
      scrolldown = _props$scrolldown === void 0 ? false : _props$scrolldown,
      _props$isPro = props.isPro,
      isPro = _props$isPro === void 0 ? false : _props$isPro,
      onChange = props.onChange,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  var currentOption = (_React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(props.children).find(function (child) {
    return child.props.value === value || child.props.checked;
  })) === null || _React$Children$toArr === void 0 ? void 0 : _React$Children$toArr.props;
  var label = (currentOption === null || currentOption === void 0 ? void 0 : currentOption.label) || 'Select';
  var description = (currentOption === null || currentOption === void 0 ? void 0 : currentOption.description) || props.description;
  var requirePro = (currentOption === null || currentOption === void 0 ? void 0 : currentOption.requirePro) || false;
  var icon = currentOption === null || currentOption === void 0 ? void 0 : currentOption.icon; //const id = scrolldown ? props.id : currentOption?.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOptions = _useState2[0],
      toggleOptions = _useState2[1];

  var componentRef = scrolldown ? Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useOutsideClick"])(function () {
    toggleOptions(false);
  }) : null;
  var showUpProOnly = requirePro && !isPro;

  var onOptionClick = function onOptionClick(newValue) {
    if (newValue !== value) {
      if (!onChange) {
        console.log("The onChange handler it not set for this checkbox.", props);
        return;
      }

      onChange(newValue, id);
    }

    if (scrolldown) {
      toggleOptions(false);
    }
  };

  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      name: child.props.name || name,
      checked: child.props.value === value || child.props.checked,
      onClick: onOptionClick,
      scrolldown: scrolldown,
      isPro: isPro
    });
  });
  return scrolldown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, _extends({
    id: id,
    ref: componentRef
  }, rest, {
    onClick: function onClick() {
      return toggleOptions(!showOptions);
    },
    className: ['nui-select', className, showOptions ? 'show-options' : ''],
    childrenLength: children.length
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectedOption, null, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Icon__WEBPACK_IMPORTED_MODULE_11__["NekoIcon"], {
    icon: icon,
    width: 20,
    height: 20,
    style: {
      marginRight: '9px'
    }
  }), label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rightContent"
  }, showUpProOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_4__["ProOnly"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: showOptions ? _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_10___default.a : _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9___default.a,
    width: "24"
  }))), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, null, description), showOptions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, {
    className: "nui-option ".concat(showOptions ? '' : 'hidden')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionsContainer, null, [children]))) : children;
};

var RadioOption = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  margin-bottom: 6px;\n\n  input {\n    display: none;\n  }\n\n  label {\n    cursor: pointer;\n    display: flex;\n  }\n\n  .inner-container {\n    margin-left: 4px;\n\n    .label {\n      display: block;\n      font-size: 14px;\n      line-height: 17px;\n      padding-top: 4.5px;\n      padding-bottom: 4px;\n    }\n    .description {\n      display: block;\n      font-size: 12px;\n    }\n  }\n\n  &.disabled {\n    color: ", ";\n\n    label {\n      cursor: default;\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].disabledForm);
var SelectOption = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  cursor: pointer;\n  font-family: ", ";\n\n  &:hover {\n    filter: brightness(80%);\n  }\n\n  input {\n    display: none;\n  }\n\n  .option {\n    align-items: center;\n    color: ", ";\n    display: flex;\n    justify-content: space-between;\n    font-family: ", ";\n    font-size: 14px;\n    line-height: 17px;\n    padding: 8px 12px;\n\n    .option-group {\n      align-items: center;\n      display: flex;\n    }\n  }\n\n  &.disabled {\n    background-color: rgb(224 156 54);\n    pointer-events: none;\n\n    .option {\n      color: rgb(255 255 255 / 35%);\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily);
/**
 * @param {string} id
 * @param {string} name
 * @param {string} value
 * @param {bool} checked
 * @param {string} label
 * @param {string} description
 * @param {function} onClick
 */

var StyledNekoOption = function StyledNekoOption(props) {
  var id = props.id,
      name = props.name,
      value = props.value,
      checked = props.checked,
      icon = props.icon,
      label = props.label,
      description = props.description,
      _onClick = props.onClick,
      scrolldown = props.scrolldown,
      _props$isPro2 = props.isPro,
      isPro = _props$isPro2 === void 0 ? false : _props$isPro2,
      _props$requirePro = props.requirePro,
      requirePro = _props$requirePro === void 0 ? false : _props$requirePro;
  var showUpProOnly = requirePro && !isPro;
  var disabledClass = showUpProOnly ? 'disabled' : '';
  var radioOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioOption, {
    className: "nui-select ".concat(props.className || '', " ").concat(disabledClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: id,
    name: name,
    type: "radio",
    value: value,
    defaultChecked: checked,
    onClick: function onClick(e) {
      return _onClick(e.target.value);
    },
    disabled: showUpProOnly
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: checked ? _iconify_icons_mdi_record_circle__WEBPACK_IMPORTED_MODULE_8___default.a : _iconify_icons_mdi_checkbox_blank_circle_outline__WEBPACK_IMPORTED_MODULE_7___default.a,
    width: "24px",
    color: showUpProOnly ? _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].disabledForm : _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label"
  }, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_4__["ProOnly"], {
    className: "inline",
    style: {
      top: -1
    },
    show: showUpProOnly
  })), description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "description"
  }, description) : null)));
  var selectOption = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectOption, {
    className: "nui-select ".concat(props.className || '', " ").concat(disabledClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: id,
    name: name,
    type: "radio",
    value: value,
    defaultChecked: checked,
    disabled: showUpProOnly
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "option",
    onClick: function onClick() {
      return _onClick(value);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "option-group"
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Icon__WEBPACK_IMPORTED_MODULE_11__["NekoIcon"], {
    icon: icon,
    width: 20,
    height: 20,
    style: {
      marginRight: '9px'
    }
  }), label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_4__["ProOnly"], {
    show: showUpProOnly
  })));
  return scrolldown ? selectOption : radioOption;
};
/**
 * The NekoSelect has 2 types, radio (default) or select.
 */


var NekoSelect = function NekoSelect(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoSelect, props);
};

NekoSelect.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  scrolldown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
NekoSelect.propTypes = {
  id: undefined,
  name: undefined,
  description: undefined,
  scrolldown: false,
  isPro: false,
  onChange: undefined
};

var NekoOption = function NekoOption(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoOption, props);
};

NekoOption.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  scrolldown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  requirePro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoOption.defaultProps = {
  id: undefined,
  name: undefined,
  value: undefined,
  checked: false,
  label: undefined,
  description: undefined,
  onClick: undefined,
  scrolldown: false,
  isPro: false,
  requirePro: false,
  icon: undefined
};


/***/ }),

/***/ "../neko-ui/src/form/Switch.js":
/*!*************************************!*\
  !*** ../neko-ui/src/form/Switch.js ***!
  \*************************************/
/*! exports provided: NekoSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoSwitch", function() { return NekoSwitch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _excluded = ["width", "height", "fontSize", "onValue", "offValue", "checked", "onBackgroundColor", "offBackgroundColor", "onLabel", "offLabel", "onChange", "disabled"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/**
 * @param {string} id
 * @param {string} name
 * @param   {bool} checked
 * @param {string} label
 * @param {string} description
 */

var StyledNekoSwitch = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? '20px' : _props$height,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? '12px' : _props$fontSize,
      onValue = props.onValue,
      offValue = props.offValue,
      _props$checked = props.checked,
      checked = _props$checked === void 0 ? false : _props$checked,
      onBackgroundColor = props.onBackgroundColor,
      offBackgroundColor = props.offBackgroundColor,
      onLabel = props.onLabel,
      offLabel = props.offLabel,
      onChange = props.onChange,
      disabled = props.disabled,
      rest = _objectWithoutProperties(props, _excluded);

  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (v) {
    onChange(v.target.checked ? onValue : offValue);
  }, [onChange, onValue, offValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", _extends({}, rest, {
    "data-is-disabled": disabled ? 'disabled' : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    onChange: onToggle,
    checked: checked,
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nui-switch-slider"
  }));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  position: relative;\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n\n  &[data-is-disabled=disabled] {\n    opacity: 0.4;\n\n    .nui-switch-slider {\n      cursor: auto;\n    }\n  }\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    border: 0;\n  }\n\n  .nui-switch-slider {\n    background-color: ", ";\n    border-radius: ", ";\n    align-items: center;\n    cursor: pointer;\n    display: inline-flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transition: .4s;\n  }\n\n  .nui-switch-slider:before {\n    border-radius: 50%;\n    position: absolute;\n    content: \"\";\n    height: ", ";\n    width: ", ";\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .3s;\n  }\n\n  .nui-switch-slider:after {\n    content: \"", "\";\n    margin-left: auto;\n    margin-right: ", ";\n  }\n\n  input:checked + .nui-switch-slider {\n    background-color: ", ";\n  }\n\n  input:checked + .nui-switch-slider:before {\n    transform: translateX(", ");\n  }\n\n  input:checked + .nui-switch-slider:after {\n    content: \"", "\";\n    margin-left: ", ";\n    margin-right: auto;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, function (props) {
  return props.fontSize;
}, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.offBackgroundColor;
}, function (props) {
  return props.height;
}, function (props) {
  return "calc(".concat(props.height, " - 8px)");
}, function (props) {
  return "calc(".concat(props.height, " - 8px)");
}, function (props) {
  return props.offLabel;
}, function (props) {
  return "calc(".concat(props.height, " / 2)");
}, function (props) {
  return props.onBackgroundColor;
}, function (props) {
  return "calc(".concat(props.width, " - ").concat(props.height, ")");
}, function (props) {
  return props.onLabel;
}, function (props) {
  return "calc(".concat(props.height, " / 2)");
});

var NekoSwitch = function NekoSwitch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoSwitch, props);
};

NekoSwitch.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onBackgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offBackgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoSwitch.defaultProps = {
  width: '100%',
  height: '20px',
  fontSize: '12px',
  checked: false
};


/***/ }),

/***/ "../neko-ui/src/form/TextArea.js":
/*!***************************************!*\
  !*** ../neko-ui/src/form/TextArea.js ***!
  \***************************************/
/*! exports provided: NekoTextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoTextArea", function() { return NekoTextArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _excluded = ["id", "name", "value", "description", "placeholder", "onEnter", "readOnly", "maxLength", "className", "style", "textAreaStyle", "countable"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/**
 * @param {string} id
 * @param {string} name
 * @param {string} value
 * @param {string} description
 * @param {string} placeholder
 */

var StyledNekoTextArea = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var id = props.id,
      name = props.name,
      _props$value = props.value,
      value = _props$value === void 0 ? '' : _props$value,
      description = props.description,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$onEnter = props.onEnter,
      onEnter = _props$onEnter === void 0 ? null : _props$onEnter,
      _props$readOnly = props.readOnly,
      readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
      _props$maxLength = props.maxLength,
      maxLength = _props$maxLength === void 0 ? null : _props$maxLength,
      className = props.className,
      style = props.style,
      _props$textAreaStyle = props.textAreaStyle,
      textAreaStyle = _props$textAreaStyle === void 0 ? {} : _props$textAreaStyle,
      _props$countable = props.countable,
      countable = _props$countable === void 0 ? false : _props$countable,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value),
      _useState2 = _slicedToArray(_useState, 2),
      newValue = _useState2[0],
      setNewValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      count = _useState4[0],
      setCount = _useState4[1];

  var isControlled = !!props.onChange;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!isControlled) {
      setNewValue(value);
    }

    if (countable) {
      setCount(value.length);
    }
  }, [value, countable]);
  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var newValue = maxLength ? e.target.value.substr(0, maxLength) : e.target.value;

    if (isControlled) {
      props.onChange(newValue, id);
    } else {
      setNewValue(newValue, id);
    }
  }, [maxLength]);

  var onKeyPress = function onKeyPress(e) {
    if (onEnter && !e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      props.onEnter(e.target.value, id);
    }
  };

  var onBlur = function onBlur(e) {
    if (props.onBlur && value !== e.target.value) {
      props.onBlur(e.target.value, id);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className].join(' '),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-textarea-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    className: "neko-textarea",
    rows: 6
  }, rest, {
    id: id,
    name: name,
    spellCheck: "false",
    placeholder: placeholder,
    onChange: onChange,
    onKeyPress: onKeyPress,
    onBlur: onBlur,
    readOnly: readOnly,
    style: textAreaStyle,
    value: isControlled ? value : newValue
  })), countable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "neko-textarea-count"
  }, count, " / ", maxLength, " characters")), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "neko-input-description"
  }, description));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .neko-textarea-container {\n    position: relative;\n  }\n  .neko-textarea {\n    font-family: ", ";\n    font-size: ", ";\n    border: 2px solid ", ";\n    box-sizing: border-box;\n    background: rgb(0 124 186 / 10%);\n    padding: 5px 10px;\n    width: 100%;\n\n    &::placeholder {\n      color: rgba(0, 0, 0, 0.25);\n    }\n\n    :focus {\n      background-color: white;\n    }\n\n    :read-only {\n      background-color: ", ";\n    }\n  }\n  .neko-textarea-count {\n    color: rgba(", ", 0.4);\n    font-size: 11px;\n    margin: 0;\n    position: absolute;\n    right: 13px;\n    bottom: 10px;\n  }\n\n  .neko-input-description {\n    font-family: ", ";\n    font-size: ", ";\n    line-height: 14px;\n    margin-top: 8px;\n    margin-bottom: 0;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].gray, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeSmall);

var NekoTextArea = function NekoTextArea(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoTextArea, props);
};

NekoTextArea.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoTextArea.defaultProps = {
  id: undefined,
  name: undefined,
  value: '',
  description: undefined,
  placeholder: '',
  onChange: undefined,
  onEnter: undefined,
  onBlur: undefined,
  readOnly: false
};


/***/ }),

/***/ "../neko-ui/src/helpers.js":
/*!*********************************!*\
  !*** ../neko-ui/src/helpers.js ***!
  \*********************************/
/*! exports provided: getFetch, postFetch, jsonFetcher, swrInvalidateMany, chunkArrayInGroups, buildUrlWithParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetch", function() { return getFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFetch", function() { return postFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonFetcher", function() { return jsonFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swrInvalidateMany", function() { return swrInvalidateMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkArrayInGroups", function() { return chunkArrayInGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrlWithParams", function() { return buildUrlWithParams; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "../neko-ui/node_modules/swr/esm/index.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "../neko-ui/src/errors.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // This function allows to invalidate a SWR key which might
// have been use for paging, for example: swrInvalidateMany('/api/items')
// will reset everything which happens around this key.

function swrInvalidateMany(select) {
  var keys = swr__WEBPACK_IMPORTED_MODULE_0__["cache"].keys();
  var mutations = [];
  var regexp = new RegExp("(.*)".concat(select, "(.*)"));

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;

      if (regexp.test(key)) {
        mutations.push(Object(swr__WEBPACK_IMPORTED_MODULE_0__["mutate"])(key, null, true));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Promise.all(mutations);
}

function chunkArrayInGroups(arr, size) {
  var result = [];

  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

var consolidateJsonResult = function consolidateJsonResult(json) {
  if (!json.data) {
    return json;
  }

  if (json.data.length > 0 && json.data[0].meta) {
    var _iterator2 = _createForOfIteratorHelper(json.data),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _x = _step2.value;

        try {
          _x.meta = JSON.parse(_x.meta);
        } catch (err) {
          console.error('[JsonFetcher]', 'Could not decode meta.', _x.meta);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else if (json.data.meta) {
    try {
      json.data.meta = JSON.parse(json.data.meta);
    } catch (err) {
      console.error('[JsonFetcher]', 'Could not decode meta.', x.meta);
    }
  }

  return json;
};

var jsonFetcher = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var options,
        body,
        json,
        nekoError,
        rawBody,
        code,
        message,
        _code,
        _message,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            body = null;
            json = {};
            nekoError = null;
            rawBody = null;
            _context.prev = 5;
            options = options ? options : {};
            options.headers = options.headers ? options.headers : {};
            options.headers['Pragma'] = 'no-cache';
            options.headers['Cache-Control'] = 'no-cache';
            _context.next = 12;
            return fetch("".concat(url), options);

          case 12:
            rawBody = _context.sent;
            _context.next = 15;
            return rawBody.text();

          case 15:
            body = _context.sent;
            json = JSON.parse(body);

            if (!json.success) {
              code = json.success === false ? 'NOT-SUCCESS' : 'N/A';
              message = json.message ? json.message : 'Unknown error. Check your Console Logs.';

              if (json.code === 'rest_no_route') {
                message = "The API can't be accessed. Is Rest API enabled?";
                code = 'NO-ROUTE';
              } else if (json.code === 'internal_server_error') {
                message = "Server error. Please check your PHP Error Logs.";
                code = 'SERVER-ERROR';
              }

              nekoError = new _errors__WEBPACK_IMPORTED_MODULE_1__["NekoError"](message, code, url, body ? body : rawBody);
            }

            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](5);
            _code = 'BROKEN-REPLY';
            _message = "The reply sent by the server is broken.";

            if (rawBody && rawBody.status) {
              if (rawBody.status === 408) {
                _code = "REQUEST-TIMEOUT";
                _message = "The request generated a timeout.";
              }
            }

            nekoError = new _errors__WEBPACK_IMPORTED_MODULE_1__["NekoError"](_message, _code, url, body ? body : rawBody, _context.t0);

          case 26:
            // Rewrite the Json if there is an error
            if (nekoError) {
              console.error('[NekoError] JsonFetcher', nekoError.url, {
                code: nekoError.code,
                error: nekoError.error,
                body: nekoError.body
              });
              json.success = false;
              json.error = nekoError;
            }

            return _context.abrupt("return", consolidateJsonResult(json));

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 20]]);
  }));

  return function jsonFetcher(_x2) {
    return _ref.apply(this, arguments);
  };
}();

var getFetch = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, json, signal, nonce) {
    var nonceHeader;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nonceHeader = nonce ? {
              'X-WP-Nonce': nonce
            } : {};
            return _context2.abrupt("return", jsonFetcher(url, {
              method: 'GET',
              headers: _objectSpread({
                'Content-Type': 'application/json'
              }, nonceHeader),
              signal: signal
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFetch(_x3, _x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var postFetch = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(url) {
    var config,
        _config$json,
        json,
        signal,
        file,
        nonce,
        formData,
        _i,
        _Object$entries,
        _Object$entries$_i,
        key,
        value,
        headers,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            config = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _config$json = config.json, json = _config$json === void 0 ? {} : _config$json, signal = config.signal, file = config.file, nonce = config.nonce;
            formData = file ? new FormData() : null;

            if (file) {
              formData.append('file', file);

              for (_i = 0, _Object$entries = Object.entries(json); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                formData.append(key, value);
              }
            }

            headers = nonce ? {
              'X-WP-Nonce': nonce
            } : {};

            if (!formData) {
              headers['Content-Type'] = 'application/json';
            }

            return _context3.abrupt("return", jsonFetcher(url, {
              method: 'POST',
              headers: headers,
              body: formData ? formData : JSON.stringify(json),
              signal: signal
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function postFetch(_x7) {
    return _ref3.apply(this, arguments);
  };
}();

var buildUrlWithParams = function buildUrlWithParams(apiUrl, params) {
  var isPlainPermalink = apiUrl.includes('index.php?rest_route');
  var urlParams = new URLSearchParams(params);
  var finalUrl = apiUrl + (isPlainPermalink ? '&' : '?') + urlParams.toString();
  return finalUrl;
};



/***/ }),

/***/ "../neko-ui/src/hooks.js":
/*!*******************************!*\
  !*** ../neko-ui/src/hooks.js ***!
  \*******************************/
/*! exports provided: useHandleSWR, useOutsideClick, useNekoGlobalQueue, useNekoTasks, useComponentSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHandleSWR", function() { return useHandleSWR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOutsideClick", function() { return useOutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNekoGlobalQueue", function() { return useNekoGlobalQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNekoTasks", function() { return useNekoTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentSize", function() { return useComponentSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-queue */ "../neko-ui/node_modules/p-queue/dist/index.js");
/* harmony import */ var p_queue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_queue__WEBPACK_IMPORTED_MODULE_1__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var useHandleSWR = function useHandleSWR() {
  var swrData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var defaultData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var defaultBusy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultData),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultBusy),
      _useState6 = _slicedToArray(_useState5, 2),
      busy = _useState6[0],
      setBusy = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      total = _useState8[0],
      setTotal = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (swrData !== undefined) {
      if (swrData.success) {
        setError(null);
        setData(swrData.data);
        setTotal(swrData.total ? swrData.total : 0);
      } else {
        setError(swrData.error);
      }
    }

    setBusy(swrData === undefined);
  }, [swrData]);
  return {
    busy: busy,
    data: data,
    total: total,
    error: error
  };
}; // Sometimes, we need to align or place elements depending on other dynamic elements.
// This hook returns a ref (which should be assign to a component), and the size of
// this element every time it changes.


var useComponentSize = function useComponentSize() {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState10 = _slicedToArray(_useState9, 2),
      size = _useState10[0],
      setSize = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (ref && ref.current) {
      var observer = new ResizeObserver(function (entries) {
        var element = entries[0];

        if (element.contentRect) {
          setSize({
            width: element.contentRect.left + element.contentRect.right,
            height: element.contentRect.top + element.contentRect.bottom
          });
        }
      });
      observer.observe(ref.current);
      return function () {
        observer.unobserve(ref.current);
      };
    }
  }, []);
  return {
    ref: ref,
    width: size.width ? size.width : 0,
    height: size.height ? size.height : 0
  };
}; // If a click is made outside the component, then the function onOutsideClick is called.
// This function returns a ref which needs to be assigned to the component.


var useOutsideClick = function useOutsideClick(onOutsideClick) {
  var componentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var handleOutsideClick = function handleOutsideClick(e) {
    if (!onOutsideClick || componentRef.current.contains(e.target)) {
      return;
    }

    onOutsideClick();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("mousedown", handleOutsideClick);
    return function () {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
  return componentRef;
}; // This hook allows calling many requests without having too many of them
// running concurrently.


var GlobalQueue = null;

var useNekoGlobalQueue = function useNekoGlobalQueue() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!GlobalQueue) {
    var _params$concurrency = params.concurrency,
        concurrency = _params$concurrency === void 0 ? 2 : _params$concurrency;
    GlobalQueue = new p_queue__WEBPACK_IMPORTED_MODULE_1___default.a({
      concurrency: concurrency,
      autoStart: true
    });
  }

  var runTask = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(func) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return GlobalQueue.add(func);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function runTask(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    runTask: runTask
  };
}; // This hook handles batch of asynchronous requests, and provide everything
// the NekoProgress might need.


var isDebug = false;
var UploadQueue = new p_queue__WEBPACK_IMPORTED_MODULE_1___default.a({
  concurrency: 1,
  autoStart: false
});

var useNekoTasks = function useNekoTasks() {
  // We should be able to kill fetch requests using this
  // Interesting article: https://davidwalsh.name/cancel-fetch
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new AbortController()),
      _useState12 = _slicedToArray(_useState11, 2),
      controller = _useState12[0],
      setController = _useState12[1];

  var refSkip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var refErrors = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      busy = _useState14[0],
      setBusy = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState16 = _slicedToArray(_useState15, 2),
      paused = _useState16[0],
      setPaused = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState18 = _slicedToArray(_useState17, 2),
      max = _useState18[0],
      setMax = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState20 = _slicedToArray(_useState19, 2),
      error = _useState20[0],
      setError = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState22 = _slicedToArray(_useState21, 2),
      success = _useState22[0],
      setSuccess = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState24 = _slicedToArray(_useState23, 2),
      value = _useState24[0],
      setValue = _useState24[1];

  var reset = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var newController;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              newController = new AbortController();
              setController(newController);
              setError(false);
              refErrors.current = 0;
              refSkip.current = false;
              setPaused(false);
              setSuccess(false);
              setValue(0);
              setMax(0);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function reset() {
      return _ref2.apply(this, arguments);
    };
  }();

  var start = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(tasks) {
      var runnerPromise;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              runnerPromise = new Promise(function (resolve, reject) {
                setError(false);
                refErrors.current = 0;
                refSkip.current = false;
                setPaused(false);
                setSuccess(false);
                setTasks(tasks);
                setBusy(true);

                if (isDebug) {
                  console.log('Started process.');
                }

                UploadQueue.start();
                UploadQueue.onIdle().then(function () {
                  onIdle();
                  resolve();
                });
              });
              return _context3.abrupt("return", runnerPromise);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function start(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var pause = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (isDebug) {
                console.log('Paused process.');
              }

              UploadQueue.pause();
              setPaused(true);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function pause() {
      return _ref4.apply(this, arguments);
    };
  }();

  var resume = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (isDebug) {
                console.log('Resume process.');
              }

              setError(false);
              setPaused(false);
              UploadQueue.start();

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function resume() {
      return _ref5.apply(this, arguments);
    };
  }();

  var stop = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (isDebug) {
                console.log('Cancelled process.');
              }

              UploadQueue.pause();
              controller.abort();
              setBusy(false);
              setError(false);
              setSuccess(false);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function stop() {
      return _ref6.apply(this, arguments);
    };
  }();

  var onIdle = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (isDebug) {
                console.log('onIdle.');
              }

              setSuccess(true);
              setBusy(false);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function onIdle() {
      return _ref7.apply(this, arguments);
    };
  }();

  var addTask = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(task) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              UploadQueue.add( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var res;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.prev = 0;
                        _context8.next = 3;
                        return task(controller.signal);

                      case 3:
                        res = _context8.sent;

                        if (!res || !res.success) {
                          console.error('[useNekoTasks] Task returned nothing.', res);
                        }

                        if (!res.success) {
                          refErrors.current++;

                          if (!refSkip.current) {
                            setError(res.error);
                            pause();
                          }
                        }

                        _context8.next = 17;
                        break;

                      case 8:
                        _context8.prev = 8;
                        _context8.t0 = _context8["catch"](0);

                        if (!(_context8.t0.name === 'AbortError')) {
                          _context8.next = 15;
                          break;
                        }

                        console.log('Aborted');
                        return _context8.abrupt("return");

                      case 15:
                        refErrors.current++;

                        if (!refSkip.current) {
                          setError("An error was caught (more information in the console).");
                          pause();
                        }

                      case 17:
                        _context8.prev = 17;
                        setValue(function (value) {
                          return value + 1;
                        });
                        return _context8.finish(17);

                      case 20:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, null, [[0, 8, 17, 20]]);
              })));
              setMax(function (max) {
                return max + 1;
              });

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    return function addTask(_x3) {
      return _ref8.apply(this, arguments);
    };
  }();

  var setTasks = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(tasks) {
      var _iterator, _step, task;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              UploadQueue.clear();
              _iterator = _createForOfIteratorHelper(tasks);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  task = _step.value;
                  addTask(task);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              setValue(0);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function setTasks(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();

  var setAlwaysSkip = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    refSkip.current = true;
  }, []);
  var getErrorCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return refErrors.current;
  }, []);
  return {
    start: start,
    stop: stop,
    pause: pause,
    resume: resume,
    reset: reset,
    addTask: addTask,
    setAlwaysSkip: setAlwaysSkip,
    getErrorCount: getErrorCount,
    error: error,
    success: success,
    busy: busy,
    paused: paused,
    value: value,
    max: max
  };
};



/***/ }),

/***/ "../neko-ui/src/label/ProOnly.js":
/*!***************************************!*\
  !*** ../neko-ui/src/label/ProOnly.js ***!
  \***************************************/
/*! exports provided: ProOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProOnly", function() { return ProOnly; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _excluded = ["show", "className"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Tag = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  color: ", ";\n  font-family: ", ";\n  font-size: 9px;\n  line-height: 10px;\n  padding: 5px 8px;\n  text-transform: uppercase;\n  text-decoration: none;\n\n  &:hover {\n    color: ", ";\n    background-color: #f78c1f;\n  }\n\n  &.inline {\n    display: inline;\n    margin-left: 5px;\n    vertical-align: middle;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].yellow, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white);
/**
 * @param {string} className
 * @param {string|object} icon
 * @param {bool} disabled
 * @param {function} onClick
 */

var StyledProOnly = function StyledProOnly(props) {
  var _props$show = props.show,
      show = _props$show === void 0 ? true : _props$show,
      className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  if (!show) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, _extends({
    href: "https://store.meowapps.com",
    target: "_blank",
    className: "".concat(className || '')
  }, rest), "Pro Only");
};

var ProOnly = function ProOnly(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledProOnly, props);
};

ProOnly.propTypes = {
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ProOnly.defaultProps = {
  show: true,
  className: undefined
};


/***/ }),

/***/ "../neko-ui/src/misc/Finder.js":
/*!*************************************!*\
  !*** ../neko-ui/src/misc/Finder.js ***!
  \*************************************/
/*! exports provided: NekoFinder, NekoFinderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoFinder", function() { return NekoFinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoFinderItem", function() { return NekoFinderItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-mdi/folder */ "../neko-ui/node_modules/@iconify/icons-mdi/folder.js");
/* harmony import */ var _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/folder-open */ "../neko-ui/node_modules/@iconify/icons-mdi/folder-open.js");
/* harmony import */ var _iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/image-multiple-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/image-multiple-outline.js");
/* harmony import */ var _iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-right */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-right.js");
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-down */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js");
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_mdi_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-mdi/tag */ "../neko-ui/node_modules/@iconify/icons-mdi/tag.js");
/* harmony import */ var _iconify_icons_mdi_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_tag__WEBPACK_IMPORTED_MODULE_10__);
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var StyledNekoFinder = function StyledNekoFinder(props) {
  var _props$chevron = props.chevron,
      chevron = _props$chevron === void 0 ? true : _props$chevron;
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      chevron: chevron
    });
  });
  return children;
};

var FinderTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  font-family: Lato;\n"])));
var FinderTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n\n  &.can-expand {\n    cursor: pointer;\n  }\n\n  &.selected {\n    color: #956DBE;\n  }\n\n  span {\n    font-weight: normal;\n    font-size: 13px;\n    margin: 0 0 0 8px;\n  }\n"])));
var ChevronSpace = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 24px;\n  width: 24px;\n"])));
var FinderTitleIconDropZone = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 24px;\n  height: 24px;\n"])));
var FinderTitleIconDroppableArea = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n"])));
var ItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-left: 1px solid ", ";\n  margin-left: 12px;\n  padding-left: 6px;\n\n  &.no-line {\n    border-left: 0;\n    padding-left: 12px;\n  }\n\n  &.no-chevron {\n    border-left: 0;\n    margin-left: 0;\n    padding-left: 0;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].finderBorder);

var StyledNekoFinderItem = function StyledNekoFinderItem(props) {
  var defaultIcons = {
    gallery: _iconify_icons_mdi_image_multiple_outline__WEBPACK_IMPORTED_MODULE_7___default.a,
    tag: _iconify_icons_mdi_tag__WEBPACK_IMPORTED_MODULE_10___default.a
  };
  var title = props.title,
      chevron = props.chevron,
      _props$rightElement = props.rightElement,
      rightElement = _props$rightElement === void 0 ? null : _props$rightElement,
      _props$rightElementSt = props.rightElementStyle,
      rightElementStyle = _props$rightElementSt === void 0 ? {
    marginLeft: '5px'
  } : _props$rightElementSt,
      _props$showRightEleme = props.showRightElement,
      showRightElement = _props$showRightEleme === void 0 ? false : _props$showRightEleme,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      _props$draggable = props.draggable,
      draggable = _props$draggable === void 0 ? false : _props$draggable,
      onDragStart = props.onDragStart,
      onDragOver = props.onDragOver,
      onDragEnd = props.onDragEnd,
      onDrop = props.onDrop,
      _props$isExpanded = props.isExpanded,
      isExpanded = _props$isExpanded === void 0 ? false : _props$isExpanded,
      _props$dragging = props.dragging,
      dragging = _props$dragging === void 0 ? false : _props$dragging,
      _props$rightAction = props.rightAction,
      rightAction = _props$rightAction === void 0 ? null : _props$rightAction,
      _props$rightActionOnH = props.rightActionOnHover,
      rightActionOnHover = _props$rightActionOnH === void 0 ? null : _props$rightActionOnH,
      onDragLeave = props.onDragLeave,
      _props$preventClose = props.preventClose,
      preventClose = _props$preventClose === void 0 ? false : _props$preventClose;
  var isCustomizedIcon = !!props.icon;
  var hasChild = !!props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    if (typeof props.icon === 'string' && Object.keys(defaultIcons).includes(props.icon)) {
      return defaultIcons[props.icon];
    } else if (props.icon) {
      return props.icon;
    }

    return _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_5___default.a;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      icon = _useState4[0],
      setIcon = _useState4[1];

  var isFolder = Boolean(icon);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showRightAction = _useState6[0],
      setShowRightAction = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setExpanded(isExpanded);

    if (!isCustomizedIcon) {
      setIcon(isExpanded ? _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_5___default.a : _iconify_icons_mdi_folder_open__WEBPACK_IMPORTED_MODULE_6___default.a);
    }
  }, [isExpanded]);

  var onClick = function onClick() {
    if (props.onClick) {
      props.onClick();
    }
  };

  var onChevronClick = function onChevronClick(e) {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      chevron: chevron
    });
  });
  var iconColor = dragging || selected ? _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].purple : selected ? _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].black : _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FinderTitleContainer, {
    onMouseEnter: function onMouseEnter() {
      return setShowRightAction(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowRightAction(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FinderTitle, {
    onClick: onClick,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    draggable: draggable,
    onDragStart: onDragStart,
    onDragOver: onDragOver,
    onDrop: onDrop,
    className: "".concat(isFolder || children || props.onClick ? 'can-expand' : '', " ").concat(selected ? 'selected' : ''),
    onDragLeave: onDragLeave,
    onDragEnd: onDragEnd
  }, chevron ? isFolder && hasChild ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: expanded ? _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_9___default.a : _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_8___default.a,
    width: "24",
    height: "24",
    onClick: onChevronClick
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChevronSpace, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FinderTitleIconDropZone, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FinderTitleIconDroppableArea, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: icon,
    color: iconColor,
    width: "24",
    height: "24"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, title), showRightElement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: rightElementStyle
  }, rightElement)), showRightAction ? rightActionOnHover || rightAction : rightAction), expanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemContainer, {
    className: "".concat(isFolder ? '' : 'no-line', " ").concat(chevron ? '' : 'no-chevron')
  }, children));
};

var NekoFinder = function NekoFinder(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoFinder, props);
};

NekoFinder.propTypes = {
  chevron: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoFinder.defaultProps = {
  chevron: true
};

var NekoFinderItem = function NekoFinderItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoFinderItem, props);
};

NekoFinderItem.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["IconifyIcon"]), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['gallery'])]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoFinderItem.defaultProps = {
  icon: _iconify_icons_mdi_folder__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: undefined,
  isExpanded: false
};


/***/ }),

/***/ "../neko-ui/src/misc/Gauge.js":
/*!************************************!*\
  !*** ../neko-ui/src/misc/Gauge.js ***!
  \************************************/
/*! exports provided: NekoGauge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoGauge", function() { return NekoGauge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .mask {\n    position: absolute;\n    overflow: hidden;\n    display: block;\n    width: ", "px;\n    height: ", "px;\n  }\n\n  .semi-circle {\n    position: relative;\n    display: block;\n    width: ", "px;\n    height: ", "px;\n    background: linear-gradient(to right, #27b775 0%, #f3f32c 50%, #f71b1b 100%);\n    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      z-index: 2;\n      display: block;\n      width: 140px;\n      height: 70px;\n      margin-left: -70px;\n      background: ", ";\n      border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;\n    }      \n  }\n\n  .semi-circle--mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ", "px;\n    height: ", "px;\n    background: transparent;\n    transform-origin: center center;\n    backface-visibility: hidden;\n    transition: all .3s ease-in-out;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0%;\n      z-index: 2;\n      display: block;\n      width: ", "px;\n      height: ", "px;\n      margin-top: -1px;\n      margin-left: -1px;\n      background: #5396c1d6;\n      border-radius: 50% 50% 50% 50% / 100% 100% 0% 0% ;\n    }      \n  }\n\n  .gauge { \n    width: ", "px;\n    height: ", "px;\n    \n    .semi-circle--mask {\n      transform: rotate(", "deg) translate3d(0,0,0);\n    }\n  }\n\n  .child-container {\n    position: absolute;\n    font-size: 16px;\n    display: flex;\n    width: ", "px;\n    height: ", "px;\n    z-index: 10;\n\n    .spacing {\n      flex: auto;\n    }\n\n    .child {\n      color: white;\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.width / 2;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width / 2;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width + 2;
}, function (props) {
  return props.width / 2 + 2;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width / 2;
}, function (props) {
  return props.degrees;
}, function (props) {
  return props.width + 2;
}, function (props) {
  return props.width / 2;
});

var NekoGauge = function NekoGauge(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? 1000 : _ref$value,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 2500 : _ref$max,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 200 : _ref$width,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? '#007cba' : _ref$background,
      children = _ref.children;
  var degrees = 180 * (value <= max ? value : max) / max;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSection, {
    backgroundColor: background,
    degrees: degrees,
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "gauge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "mask"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "semi-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "semi-circle--mask"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "child-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "child"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "spacing"
  }), children))));
};

NekoGauge.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  background: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoGauge.defaultProps = {
  value: 1000,
  min: 0,
  max: 2500,
  width: 200,
  background: '#007cba'
};


/***/ }),

/***/ "../neko-ui/src/misc/Header.js":
/*!*************************************!*\
  !*** ../neko-ui/src/misc/Header.js ***!
  \*************************************/
/*! exports provided: NekoHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoHeader", function() { return NekoHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ "../neko-ui/src/misc/Logo.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "../neko-ui/src/misc/Icon.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _iconify_icons_mdi_content_save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/content-save */ "../neko-ui/node_modules/@iconify/icons-mdi/content-save.js");
/* harmony import */ var _iconify_icons_mdi_content_save__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_content_save__WEBPACK_IMPORTED_MODULE_6__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var HeaderBase = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  color: white;\n  font-family: ", ";\n  font-size: ", ";\n  display: flex;\n  height: 61px;\n  overflow: hidden;\n  align-items: center;\n  padding: 15px 20px;\n  background-color: ", ";\n  display: flex;\n\n  .nui-header-logo-container {\n    width: 102px;\n    height: 102px;\n    padding: 20px;\n    margin-right: 25px;\n    background: rgba(", ", 0.1);\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-29.83deg);\n  }\n\n  .nui-header-title-container {\n    flex-direction: column;\n    display: flex;\n\n    .nui-header-title {\n      color: white;\n      font-family: ", ";\n      font-size: 23px;\n      line-height: normal;\n      margin: 0;\n    }\n\n    .nui-header-subtitle {\n      color: white;\n      font-family: ", ";\n      line-height: normal;\n      font-size: ", ";\n    }\n  }\n\n  .nui-header-extra-content {\n    flex: 1;\n    margin: 0 20px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].header, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSizeText);

var StyledNekoHeader = function StyledNekoHeader(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? 'NekoUI' : _props$title,
      _props$subtitle = props.subtitle,
      subtitle = _props$subtitle === void 0 ? 'By Jordy Meow' : _props$subtitle,
      children = props.children,
      _props$saving = props.saving,
      saving = _props$saving === void 0 ? false : _props$saving;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderBase, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-header-logo-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_3__["NekoLogo"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-header-title-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "nui-header-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "nui-header-subtitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://meowapps.com",
    style: {
      color: 'white',
      textDecoration: 'none'
    }
  }, subtitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-header-extra-content"
  }, children), saving && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["NekoIcon"], {
    icon: _iconify_icons_mdi_content_save__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: "36",
    height: "36"
  }));
};

var NekoHeader = function NekoHeader(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoHeader, props);
};

NekoHeader.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  saving: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoHeader.defaultProps = {
  title: 'NekoUI',
  subtitle: 'By Jordy Meow',
  saving: false
};


/***/ }),

/***/ "../neko-ui/src/misc/Icon.js":
/*!***********************************!*\
  !*** ../neko-ui/src/misc/Icon.js ***!
  \***********************************/
/*! exports provided: NekoIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoIcon", function() { return NekoIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "../neko-ui/node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_PresetIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/PresetIcons */ "../neko-ui/src/common/PresetIcons.js");
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tooltip */ "../neko-ui/src/misc/Tooltip.js");
var _excluded = ["icon", "spinning", "className", "title", "tooltip", "containerStyle", "color", "hoverColor", "disabled"];

var _templateObject, _templateObject2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var StyledIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

var hoverColor = function hoverColor(color, _hoverColor) {
  if (_hoverColor) {
    return "\n    &:hover {\n      path {\n        fill: ".concat(_hoverColor, ";\n      }\n    }\n    ");
  }

  if (color) {
    return "\n    &:hover {\n      path {\n        fill: ".concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, color), ";\n      }\n    }\n    ");
  }
};

var StyledIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["Icon"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n  path {\n    fill: ", ";\n  }\n\n  ", "\n\n  &.nui-clickable {\n    cursor: pointer;\n  }\n\n  &.spin {\n    animation-name: spin;\n    animation-duration: 700ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n\n    @keyframes spin {\n      0% {\n        transform: rotate(360deg);\n      }\n      100% {\n        transform: rotate(0deg);\n      }\n    }\n  }\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.35;\n    cursor: default;\n  }\n"])), function (props) {
  return props.color;
}, function (props) {
  return hoverColor(props.color, props.hoverColor);
});

var StyledNekoIcon = function StyledNekoIcon(props) {
  var icon = props.icon,
      _props$spinning = props.spinning,
      spinning = _props$spinning === void 0 ? false : _props$spinning,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      title = props.title,
      tooltip = props.tooltip,
      containerStyle = props.containerStyle,
      color = props.color,
      hoverColor = props.hoverColor,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      rest = _objectWithoutProperties(props, _excluded);

  if (!rest.width && !rest.height) {
    rest.width = rest.height = 30;
  }

  var getIcon = function getIcon() {
    if (typeof icon === 'string') {
      return _common_PresetIcons__WEBPACK_IMPORTED_MODULE_5__["default"][icon] || null;
    }

    return icon;
  };

  var iconClassName = "nui-icon ".concat(className).concat(rest.onClick ? ' nui-clickable' : '').concat(spinning ? ' spin' : '').concat(disabled ? ' disabled' : '');

  if (tooltip) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_6__["NekoTooltip"], {
      text: tooltip.text,
      position: tooltip.position || 'top'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIconContainer, {
      style: containerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, _extends({
      icon: getIcon(),
      className: iconClassName,
      color: color,
      hoverColor: hoverColor
    }, rest))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIconContainer, {
    style: containerStyle,
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, _extends({
    icon: getIcon(),
    className: iconClassName,
    color: color,
    hoverColor: hoverColor
  }, rest)), !tooltip ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_6__["NekoTooltip"], null, tooltip));
};

var NekoIcon = function NekoIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoIcon, props);
};

NekoIcon.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["IconifyIcon"]), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['lock', 'lock-open', 'file-undo', 'chevron-double-left', 'chevron-double-right', 'chevron-left', 'chevron-right', 'chevron-down', 'chevron-up', 'pause', 'play', 'replay', 'check', 'stop', 'delete', 'undo', 'alert', 'database', 'pencil', 'tools', 'cog', 'close', 'cat', 'upload'])]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  spinning: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoIcon.defaultProps = {
  icon: undefined,
  color: undefined,
  spinning: false,
  className: '',
  tooltip: undefined
};


/***/ }),

/***/ "../neko-ui/src/misc/Links.js":
/*!************************************!*\
  !*** ../neko-ui/src/misc/Links.js ***!
  \************************************/
/*! exports provided: NekoQuickLinks, NekoLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoQuickLinks", function() { return NekoQuickLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoLink", function() { return NekoLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _misc_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../misc/Icon */ "../neko-ui/src/misc/Icon.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var Link = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  font-family: ", ";\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n\n  &.is-active {\n    cursor: default;\n    color: ", ";\n    font-weight: bold;\n  }\n\n  &::after {\n    content: \"|\";\n    color: ", ";\n    padding: 0 4px;\n  }\n\n  &:last-child::after {\n    content: none;\n  }\n\n  span {\n    color: ", ";\n    font-weight: normal;\n    margin-left: 4px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].black, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].darkGray, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].darkGray);

var StyledNekoQuickLinks = function StyledNekoQuickLinks(props) {
  var id = props.id,
      value = props.value,
      onChange = props.onChange,
      _props$busy = props.busy,
      busy = _props$busy === void 0 ? false : _props$busy,
      className = props.className;
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      busy: busy,
      isActive: child.props.value === value,
      onClick: function onClick(newValue) {
        if (newValue !== value) {
          onChange(newValue, id);
        }
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LinkContainer, {
    className: className
  }, children);
};

var StyledNekoLink = function StyledNekoLink(props) {
  var title = props.title,
      _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      count = props.count,
      _onClick = props.onClick,
      busy = props.busy,
      isActive = props.isActive,
      className = props.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    onClick: function onClick() {
      return _onClick(value);
    },
    className: "".concat(isActive ? 'is-active' : '', " ").concat(className)
  }, title, count === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "(", busy ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Icon__WEBPACK_IMPORTED_MODULE_4__["NekoIcon"], {
    icon: "replay",
    spinning: true,
    width: 12,
    containerStyle: {
      display: 'inline'
    }
  }) : count, ")"));
};

var NekoQuickLinks = function NekoQuickLinks(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoQuickLinks, props);
};

NekoQuickLinks.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
NekoQuickLinks.defaultProps = {
  id: undefined,
  value: undefined,
  onChange: undefined
};

var NekoLink = function NekoLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoLink, props);
};

NekoLink.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoLink.defaultProps = {
  title: undefined,
  value: 'default',
  count: 0,
  onClick: undefined,
  isActive: false
};


/***/ }),

/***/ "../neko-ui/src/misc/Logo.js":
/*!***********************************!*\
  !*** ../neko-ui/src/misc/Logo.js ***!
  \***********************************/
/*! exports provided: NekoLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoLogo", function() { return NekoLogo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  max-width: 128px;\n  max-height: 128px;\n\n  & > * {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n  }\n"])));

var StyledNekoLogo = function StyledNekoLogo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "54",
    height: "38",
    viewBox: "0 0 54 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.3663 9.40518C9.2981 -3.25522 -0.310763 2.76769 2.5163 9.40518C2.5163 9.40518 8.29338 29.9322 22.3059 26.3677C36.3184 22.8031 23.9038 19.1156 23.9038 19.1156C23.9038 19.1156 13.4345 22.0656 11.3663 9.40518Z",
    fill: "#724024",
    stroke: "black",
    strokeWidth: "2.1869"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.7517 8.0531C10.0142 10.7573 6.32673 12.1093 3.99131 11.2489C1.65589 10.3885 2.63923 13.8302 5.09756 14.9364C7.55589 16.0427 11.2434 14.1989 12.1038 12.4781C12.9642 10.7573 11.4892 5.34893 10.7517 8.0531Z",
    fill: "#B7782E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.0705 17.2718C13.8246 19.2385 9.64547 19.976 7.55589 19.8531C5.46631 19.7302 9.76839 23.5406 11.3663 23.5406C12.9642 23.5406 17.3892 21.2052 17.1434 19.2385C16.8976 17.2718 14.3163 15.3052 14.0705 17.2718Z",
    fill: "#B7782E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.5121 26.2448C18.6184 25.3843 20.9538 21.8198 19.8476 19.8531C18.7413 17.8864 22.4288 20.9593 22.4288 20.9593L21.6913 26.2448C21.6913 26.2448 16.4059 27.1052 17.5121 26.2448Z",
    fill: "#B7782E"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.7517 8.0531C10.0142 10.7573 6.32673 12.1093 3.99131 11.2489C1.65589 10.3885 2.63923 13.8302 5.09756 14.9364C7.55589 16.0427 11.2434 14.1989 12.1038 12.4781C12.9642 10.7573 11.4892 5.34893 10.7517 8.0531Z",
    stroke: "black"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.0705 17.2718C13.8246 19.2385 9.64547 19.976 7.55589 19.8531C5.46631 19.7302 9.76839 23.5406 11.3663 23.5406C12.9642 23.5406 17.3892 21.2052 17.1434 19.2385C16.8976 17.2718 14.3163 15.3052 14.0705 17.2718Z",
    stroke: "black"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17.5121 26.2448C18.6184 25.3843 20.9538 21.8198 19.8476 19.8531C18.7413 17.8864 22.4288 20.9593 22.4288 20.9593L21.6913 26.2448C21.6913 26.2448 16.4059 27.1052 17.5121 26.2448Z",
    stroke: "black"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.3663 9.40518C9.2981 -3.25522 -0.310763 2.76769 2.5163 9.40518C2.5163 9.40518 8.29338 29.9322 22.3059 26.3677C36.3184 22.8031 23.658 19.4843 23.658 19.4843C23.658 19.4843 13.4345 22.0656 11.3663 9.40518Z",
    stroke: "black",
    strokeWidth: "2.1869"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M25.3788 9.89685C25.3788 9.89685 21.3225 35.0947 21.9371 35.7093C22.5517 36.3239 27.4684 36.3239 28.083 35.7093C28.6975 35.0947 29.6523 22.5858 30.2955 21.9427C30.9386 21.2995 35.7226 33.1281 36.81 33.1281C37.8975 33.1281 43.2303 21.3567 43.8163 21.9427C44.4023 22.5287 45.2913 35.0947 45.9059 35.7093C46.5204 36.3239 51.3142 36.3239 51.9288 35.7093C52.5434 35.0947 48.9788 9.89685 48.9788 9.89685H42.9559C42.9559 9.89685 37.7934 21.9427 36.81 21.9427C35.8267 21.9427 31.4017 9.89685 31.4017 9.89685H25.3788Z",
    fill: "white",
    stroke: "black",
    strokeWidth: "2.1869"
  })));
};

var NekoLogo = function NekoLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoLogo, props);
};

NekoLogo.propTypes = {};
NekoLogo.defaultProps = {};


/***/ }),

/***/ "../neko-ui/src/misc/Message.js":
/*!**************************************!*\
  !*** ../neko-ui/src/misc/Message.js ***!
  \**************************************/
/*! exports provided: NekoMessageDanger, NekoMessageSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoMessageDanger", function() { return NekoMessageDanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoMessageSuccess", function() { return NekoMessageSuccess; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var NekoMessageDanger = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #ba341e;\n  padding: 20px;\n  color: white;\n  border-radius: 10px;\n  font-size: 15px;\n\n  a {\n    color: white;\n    font-weight: bold;\n  }\n"])));
var NekoMessageSuccess = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: #1eba96;\n  padding: 20px;\n  color: white;\n  border-radius: 10px;\n  font-size: 15px;\n  text-align: center;\n\n  a {\n    color: white;\n    font-weight: bold;\n  }\n"])));


/***/ }),

/***/ "../neko-ui/src/misc/Paging.js":
/*!*************************************!*\
  !*** ../neko-ui/src/misc/Paging.js ***!
  \*************************************/
/*! exports provided: NekoPaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoPaging", function() { return NekoPaging; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-double-left */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-left.js");
/* harmony import */ var _iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-left */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-left.js");
/* harmony import */ var _iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-double-right */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-double-right.js");
/* harmony import */ var _iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-right */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-right.js");
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var PagingContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n\n  .neko-paging-text {\n    font-family: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 15px;\n    line-height: 14px;\n  }\n\n  .neko-paging-controller {\n    box-sizing: border-box;\n    height: 30px;\n    align-items: center;\n    background-color: rgba(", ", 0.8);\n    border-radius: 15px;\n    display: flex;\n    margin-left: 15px;\n    padding: 3px 5px;\n\n    .nako-paging-controller-icon {\n      background-color: ", ";\n      border-radius: 100%;\n      cursor: pointer;\n      margin-right: 2px;\n      height: 22px;\n      width: 22px;\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\n      transition: transform 0.1s ease-in;\n      box-sizing: border-box;\n\n      :last-child {\n        margin-right: 0;\n      }\n\n      &.disabled {\n        color: ", ";\n        cursor: default;\n        pointer-events: none;\n      }\n\n      &:hover {\n        transform: scale(1.2) !important;\n        z-index: 10;\n        position: relative;\n      }\n    }\n\n    .nako-paging-controller-text {\n      color: ", ";\n      font-family: ", ";\n      font-style: normal;\n      font-weight: normal;\n      font-size: 13px;\n      margin: 0 40px;\n      user-select: none;\n    }\n\n    span.neko-paging-current-page {\n      cursor: pointer;\n      text-decoration: underline;\n    }\n    input.neko-paging-current-page {\n      width: 1.5rem;\n    }\n  }\n\n  &.neko-paging-full {\n    flex-grow: 1;\n\n    .neko-paging-controller {\n      flex-grow: 1;\n    }\n    .nako-paging-controller-text {\n      margin: 0 auto;\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].blueRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].darkGray, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].fontFamily);
/**
 * @param {number} currentPage Current page
 * @param {number} limit Items per page
 */

var StyledNekoPaging = function StyledNekoPaging(props) {
  var currentPage = props.currentPage,
      limit = props.limit,
      onClick = props.onClick,
      total = props.total,
      onCurrentPageChanged = props.onCurrentPageChanged,
      full = props.full;
  var isEditable = !!onCurrentPageChanged;
  var maxPage = Math.ceil(total === 0 ? 1 : limit > 0 ? total / limit : 1);
  var prevIconClassName = "nako-paging-controller-icon ".concat(currentPage === 1 ? 'disabled' : '');
  var nextIconClassName = "nako-paging-controller-icon ".concat(currentPage === maxPage ? 'disabled' : '');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showCurrentPageInput = _useState2[0],
      setShowCurrentPageInput = _useState2[1];

  var fullClassName = full ? 'neko-paging-full' : '';

  var onClickHandle = function onClickHandle(page) {
    setShowCurrentPageInput(false);
    onClick(page);
  };

  var getValidPage = function getValidPage(page) {
    var numberPage = Number(page);
    return numberPage > maxPage ? maxPage : numberPage < 1 ? 1 : numberPage;
  };

  var onBlur = function onBlur(e) {
    var page = e.target.value;

    if (!isNaN(page)) {
      onCurrentPageChanged(getValidPage(page));
    }

    setShowCurrentPageInput(false);
  };

  var onKeyPress = function onKeyPress(e) {
    if (event.key === 'Enter') {
      e.preventDefault();
      var page = e.target.value;

      if (!isNaN(page)) {
        onCurrentPageChanged(getValidPage(page));
      }

      setShowCurrentPageInput(false);
    }
  };

  var currentPageJsx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!showCurrentPageInput) {
      var _onClick = function _onClick() {
        if (!isEditable) {
          return;
        }

        setShowCurrentPageInput(true);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: isEditable ? 'neko-paging-current-page' : '',
        onClick: _onClick
      }, currentPage);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      autoFocus: true,
      type: "text",
      className: isEditable ? 'neko-paging-current-page' : '',
      defaultValue: currentPage,
      onBlur: onBlur,
      onKeyPress: onKeyPress
    });
  }, [currentPage, showCurrentPageInput, onCurrentPageChanged]);

  var onControllerClick = function onControllerClick(e) {
    if (!showCurrentPageInput || e.target !== e.currentTarget) return;
    setShowCurrentPageInput(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PagingContainer, {
    className: fullClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "neko-paging-text"
  }, total, " result", total > 0 ? 's' : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-paging-controller",
    onClick: onControllerClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: _iconify_icons_mdi_chevron_double_left__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: prevIconClassName,
    onClick: function onClick() {
      return onClickHandle(1);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: _iconify_icons_mdi_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a,
    className: prevIconClassName,
    onClick: function onClick() {
      return onClickHandle(currentPage - 1);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "nako-paging-controller-text",
    onClick: onControllerClick
  }, "Page ", currentPageJsx, " of ", maxPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7___default.a,
    className: nextIconClassName,
    onClick: function onClick() {
      return onClickHandle(currentPage + 1);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: _iconify_icons_mdi_chevron_double_right__WEBPACK_IMPORTED_MODULE_6___default.a,
    className: nextIconClassName,
    onClick: function onClick() {
      return onClickHandle(maxPage);
    }
  })));
};

var NekoPaging = function NekoPaging(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoPaging, props);
};

NekoPaging.propTypes = {
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
NekoPaging.defaultProps = {
  currentPage: undefined,
  limit: undefined,
  total: undefined,
  onClick: undefined
};


/***/ }),

/***/ "../neko-ui/src/misc/Progress.js":
/*!***************************************!*\
  !*** ../neko-ui/src/misc/Progress.js ***!
  \***************************************/
/*! exports provided: NekoProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoProgress", function() { return NekoProgress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "../neko-ui/node_modules/polished/dist/polished.esm.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-mdi/pause */ "../neko-ui/node_modules/@iconify/icons-mdi/pause.js");
/* harmony import */ var _iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/stop */ "../neko-ui/node_modules/@iconify/icons-mdi/stop.js");
/* harmony import */ var _iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/play */ "../neko-ui/node_modules/@iconify/icons-mdi/play.js");
/* harmony import */ var _iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject, _templateObject2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










/**
 * @param {number} value Current progress
 * @param {number} max   Max progress
 */

var StyledNekoProgress = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var _props$value = props.value,
      value = _props$value === void 0 ? 0 : _props$value,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$busy = props.busy,
      busy = _props$busy === void 0 ? false : _props$busy,
      status = props.status;
  value = Math.min(value, max);
  var ratio = parseFloat(value) / parseFloat(max);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressCurrent, {
    ratio: ratio,
    busy: props.busy,
    status: status
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-progress-buttons"
  }, busy && props.onPauseClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-progress-button pause",
    onClick: props.onPauseClick
  }, props.paused ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["InlineIcon"], {
    icon: _iconify_icons_mdi_play__WEBPACK_IMPORTED_MODULE_7___default.a
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["InlineIcon"], {
    icon: _iconify_icons_mdi_pause__WEBPACK_IMPORTED_MODULE_5___default.a
  })), busy && props.onStopClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nui-progress-button stop",
    onClick: props.onStopClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_4__["InlineIcon"], {
    icon: _iconify_icons_mdi_stop__WEBPACK_IMPORTED_MODULE_6___default.a
  }))));
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  box-sizing: border-box;\n  height: 30px;\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0.06) 0%,\n    rgba(0, 0, 0, 0.02) 50%,\n    rgba(0, 0, 0, 0.10) 100%\n  );\n  border-radius: 12px;\n\n  .nui-progress-buttons {\n    position: absolute;\n    height: 100%;\n    right: 0px;\n    display: flex;\n    align-items: center;\n    padding-right: 5px;\n\n    .nui-progress-button {\n      border: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-left: 2px;\n      border-radius: 100%;\n      color: white;\n      padding: 2px;\n      width: 18px;\n      height: 18px;\n      background-color: ", ";\n\n      &:hover {\n        background-color: ", ";\n      }\n\n      &.stop {\n        background: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n      }\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].blue, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].blue), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].red, Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])(0.1, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].red));
/**
 * @param {float} ratio Progress ratio (0.0 to 1.0)
 */

var ProgressCurrent = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  var percent = !isNaN(props.ratio) ? parseInt(Math.round(props.ratio * 100)) : 0;

  var typeOfStatus = _typeof(props.status);

  var status = typeOfStatus !== 'undefined' ? typeOfStatus === 'string' ? props.status : props.status(percent) : "".concat(percent, "%");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: props.className,
    style: _defineProperty({
      minWidth: 28
    }, "minWidth", percent + '%')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, status));
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  overflow: hidden;\n  top: 0; left: 0;\n  height: 100%;\n  background-color: ", ";\n  border-radius: 12px;\n  text-align: center;\n  padding: 0 10px;\n  vertical-align: middle;\n  color: white;\n  font-family: ", ";\n  font-size: 13px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: min-width .2s ease-out;\n\n  background-size: 30px 30px;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 25%,\n                    transparent 25%,\n                    transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,\n                    transparent 75%, transparent);\n  animation: ", ";\n\n  @keyframes animate-stripes {\n    0% { background-position: 0 0; }\n    100% { background-position: 60px 0; }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].progress, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_8__["default"].fontFamily, function (props) {
  return props.busy ? 'animate-stripes 1.6s linear infinite' : 'none';
});

var NekoProgress = function NekoProgress(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoProgress, props);
};

NekoProgress.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  busy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  paused: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onPauseClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onStopClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
NekoProgress.defaultProps = {
  value: 0,
  max: 100,
  busy: false,
  paused: false,
  onPauseClick: undefined,
  onStopClick: undefined,
  status: undefined
};


/***/ }),

/***/ "../neko-ui/src/misc/Tooltip.js":
/*!**************************************!*\
  !*** ../neko-ui/src/misc/Tooltip.js ***!
  \**************************************/
/*! exports provided: NekoTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoTooltip", function() { return NekoTooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "../neko-ui/src/hooks.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject, _templateObject2;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var TooltipContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n"])));
var Tooltip = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tbackground-color: rgba(", ", 0.8);\n\tborder-radius: 4px;\n\tcolor: ", ";\n\tfont-family: ", ";\n\tfont-weight: normal;\n\tmin-width: 180px;\n\tmax-width: 280px;\n\tfont-size: ", ";\n\tpadding: 8px 12px;\n\tposition: absolute;\n \tmax-width: 280px;\n\tdisplay: ", ";\n\tz-index: 100;\n\n\t&:before {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tborder: 4px solid transparent;\n\t}\n\n\t&.top {\n\t\t&:before {\n\t\t\tmargin-left: -4px;\n\t\t\ttop: 100%;\n\t\t\tleft: 50%;\n\t\t\tborder-top: 4px solid rgba(", ", 0.8);\n\t\t}\n\t}\n\n\t&.left {\n\t\t&:before {\n\t\t\tmargin-top: -4px;\n\t\t\ttop: 50%;\n\t\t\tright: -8px;\n\t\t\tborder-left: 4px solid rgba(", ", 0.8);\n\t\t}\n\t}\n\n\t&.right {\n\t\t&:before {\n\t\t\tmargin-top: -4px;\n\t\t\ttop: 50%;\n\t\t\tleft: -8px;\n\t\t\tborder-right: 4px solid rgba(", ", 0.8);\n\t\t}\n\t}\n\n\t&.bottom {\n\t\t&:before {\n\t\t\tmargin-left: -4px;\n\t\t\ttop: -8px;\n\t\t\tleft: 50%;\n\t\t\tborder-bottom: 4px solid rgba(", ", 0.8);\n\t\t}\n\t}\n\n\t", "\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSizeText, function (prop) {
  return prop.visible ? 'inline-block' : 'none';
}, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].blackRGB, function (prop) {
  return prop.style;
});
/**
 * @param {string} (variant) Tag Name
 */

var StyledNekoTooltip = function StyledNekoTooltip(props) {
  var _props$text = props.text,
      text = _props$text === void 0 ? 'Hello world!' : _props$text,
      _props$position = props.position,
      position = _props$position === void 0 ? 'top' : _props$position;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useComponentSize = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useComponentSize"])(),
      tooltipRef = _useComponentSize.ref,
      tooltipWidth = _useComponentSize.width,
      tooltipHeight = _useComponentSize.height;

  var _useComponentSize2 = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useComponentSize"])(),
      childRef = _useComponentSize2.ref,
      childWidth = _useComponentSize2.width,
      childHeight = _useComponentSize2.height;

  var transformStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var pointerSize = 5;
    var transY = 0;
    var transX = 0;

    if (position === 'top') {
      transY = -1 * tooltipHeight - pointerSize;
      transX = -1 * (tooltipWidth / 2) + childWidth / 2;
    } else if (position === 'bottom') {
      transY = childHeight + pointerSize;
      transX = -1 * (tooltipWidth / 2) + childWidth / 2;
    } else if (position === 'left') {
      var diff = tooltipHeight - childHeight;
      transY = -1 * (diff / 2);
      transX = -1 * tooltipWidth - pointerSize;
    } else if (position === 'right') {
      var _diff = tooltipHeight - childHeight;

      transY = -1 * (_diff / 2);
      transX = childWidth + pointerSize;
    }

    return {
      transform: "translateX(".concat(transX, "px) translateY(").concat(transY, "px)")
    };
  }, [position, tooltipWidth, tooltipHeight, childWidth, childHeight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TooltipContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tooltip, {
    ref: tooltipRef,
    visible: show,
    className: position,
    style: transformStyle
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: childRef,
    onMouseEnter: function onMouseEnter() {
      return setShow(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShow(false);
    }
  }, props.children));
};

var NekoTooltip = function NekoTooltip(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoTooltip, props);
};

NekoTooltip.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'right', 'bottom', 'left'])
};
NekoTooltip.defaultProps = {
  text: 'Hello world!',
  position: 'top'
};


/***/ }),

/***/ "../neko-ui/src/misc/Typography.js":
/*!*****************************************!*\
  !*** ../neko-ui/src/misc/Typography.js ***!
  \*****************************************/
/*! exports provided: NekoTypo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoTypo", function() { return NekoTypo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _excluded = ["children"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var NekoH1 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: normal;\n  font-size: ", ";\n  line-height: normal;\n  margin-top: 0;\n  margin-bottom: 16px;\n  padding: 0;\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeH1);
var NekoH2 = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: normal;\n  line-height: normal;\n  margin-top: 0;\n  margin-bottom: 16px;\n  padding: 0;\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeH2);
var NekoP = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: normal;\n  margin: 16px 0 24px;\n  padding: 0;\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText);
var NekoSpan = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: normal;\n  margin: 0;\n  padding: 0;\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText);
var NekoLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  line-height: normal;\n  margin: 0;\n  padding: 0;\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText);
/**
 * @param {string} (variant) Tag Name
 */

var StyledNekoTypo = function StyledNekoTypo(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  return props.h1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoH1, rest, children) : props.h2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoH2, rest, children) : props.p ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoP, rest, children) : props.label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoLabel, rest, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoSpan, rest, children);
};

var NekoTypo = function NekoTypo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoTypo, props);
};

NekoTypo.propTypes = {
  h1: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  h2: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  p: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
NekoTypo.defaultProps = {
  h1: undefined,
  h2: undefined,
  p: undefined
};


/***/ }),

/***/ "../neko-ui/src/misc/Upload.js":
/*!*************************************!*\
  !*** ../neko-ui/src/misc/Upload.js ***!
  \*************************************/
/*! exports provided: NekoUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoUpload", function() { return NekoUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index */ "../neko-ui/index.js");
var _excluded = ["width", "height", "iconSize", "iconColor", "onSuccess", "onFailure", "style", "apiUrl", "apiConfig", "onClick"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledUpload = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  background: #C4C4C4;\n  color: rgb(0 0 0 / 60%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  transition: all 0.25s ease;\n\n  div {\n    transition: all 0.5s ease;\n    transform: scale(1.5);\n    pointer-events: none;\n    max-width: 100%;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &.dropping {\n    background: #a4d5ff;\n\n    div {\n      transform: scale(2);\n    }\n  }\n"])));

var NekoUpload = function NekoUpload(props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? '100%' : _props$height,
      _props$iconSize = props.iconSize,
      iconSize = _props$iconSize === void 0 ? 48 : _props$iconSize,
      _props$iconColor = props.iconColor,
      iconColor = _props$iconColor === void 0 ? '#A9A9A9' : _props$iconColor,
      _props$onSuccess = props.onSuccess,
      onSuccess = _props$onSuccess === void 0 ? function () {} : _props$onSuccess,
      _props$onFailure = props.onFailure,
      onFailure = _props$onFailure === void 0 ? function () {} : _props$onFailure,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      apiUrl = props.apiUrl,
      apiConfig = props.apiConfig,
      onClick = props.onClick,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      inDropZone = _useState2[0],
      setInDropZone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Math.floor(Math.random() * 100000000)),
      _useState4 = _slicedToArray(_useState3, 2),
      inputId = _useState4[0],
      setInputId = _useState4[1];

  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var divEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      busy = _useState6[0],
      setBusy = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!divEl) return;
    divEl.current.style.pointerEvents = busy ? 'none' : 'auto';
  }, [divEl, busy]);

  var uploadFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setBusy(true);
              apiConfig.file = files[0];
              _context.next = 4;
              return Object(_index__WEBPACK_IMPORTED_MODULE_3__["postFetch"])(apiUrl, apiConfig);

            case 4:
              res = _context.sent;

              if (res.success) {
                onSuccess(res);
              } else {
                onFailure(res);
              }

              setBusy(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onDragOver = function onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  };

  var onDragEnter = function onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setInDropZone(true);
  };

  var onDragLeave = function onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setInDropZone(false);
  };

  var onDrop = function onDrop(e) {
    var files = _toConsumableArray(e.dataTransfer.files);

    uploadFiles(files, e);
  };

  var onUploaderClick = function onUploaderClick() {
    if (onClick) {
      onClick();
      return;
    }

    inputEl.current.click();
  };

  var onInputUpload = function onInputUpload(e) {
    var files = [e.target.files[0]];
    uploadFiles(files, e);
  };

  var uploadFiles = function uploadFiles(files, e) {
    e.preventDefault();
    e.stopPropagation();
    setInDropZone(false);
    console.log(files);
    uploadFile(files);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: divEl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    id: inputId,
    accept: "image/*",
    ref: inputEl,
    onChange: onInputUpload,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUpload, _extends({
    onClick: onUploaderClick,
    style: _objectSpread(_objectSpread({}, style), {}, {
      width: width,
      height: height
    }),
    className: inDropZone ? 'dropping' : '',
    onDragOver: onDragOver,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDrop: onDrop
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__["NekoIcon"], {
    width: iconSize,
    height: iconSize,
    icon: "upload",
    spinning: busy,
    color: iconColor,
    onDragOver: onDragOver,
    onDragEnter: onDragEnter
  })));
};

NekoUpload.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFailure: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  apiUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  apiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
NekoUpload.defaultProps = {
  width: '100%',
  height: '100%',
  onSuccess: function onSuccess() {},
  onFailure: function onFailure() {},
  style: {}
};


/***/ }),

/***/ "../neko-ui/src/misc/UploadDropArea.js":
/*!*********************************************!*\
  !*** ../neko-ui/src/misc/UploadDropArea.js ***!
  \*********************************************/
/*! exports provided: NekoUploadDropArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoUploadDropArea", function() { return NekoUploadDropArea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../index */ "../neko-ui/index.js");
var _excluded = ["onSuccess", "onFailure", "apiUrl", "apiConfig", "className", "disabled", "children"];

var _templateObject;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledUploadDropArea = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &.dropping {\n    background: #a4d5ff;\n  }\n"])));
var NekoUploadDropArea = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var _props$onSuccess = props.onSuccess,
      onSuccess = _props$onSuccess === void 0 ? function () {} : _props$onSuccess,
      _props$onFailure = props.onFailure,
      onFailure = _props$onFailure === void 0 ? function () {} : _props$onFailure,
      apiUrl = props.apiUrl,
      apiConfig = props.apiConfig,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      children = props.children,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      inDropZone = _useState2[0],
      setInDropZone = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      busy = _useState4[0],
      setBusy = _useState4[1];

  var uploadFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(files) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setBusy(true);
              apiConfig.file = files[0];
              _context.next = 4;
              return Object(_index__WEBPACK_IMPORTED_MODULE_3__["postFetch"])(apiUrl, apiConfig);

            case 4:
              res = _context.sent;

              if (res.success) {
                onSuccess(res);
              } else {
                onFailure(res);
              }

              setBusy(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function uploadFile(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var onDragOver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    e.stopPropagation();
  }, [disabled]);
  var onDragEnter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setInDropZone(true);
  }, [disabled]);
  var onDragLeave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;
    setInDropZone(false);
  }, [disabled]);
  var onDrop = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (disabled) return;

    var files = _toConsumableArray(e.dataTransfer.files);

    uploadFiles(files, e);
  }, [disabled]);

  var onInputUpload = function onInputUpload(e) {
    var files = [e.target.files[0]];
    uploadFiles(files, e);
  };

  var uploadFiles = function uploadFiles(files, e) {
    e.preventDefault();
    e.stopPropagation();
    setInDropZone(false);
    console.log(files);
    uploadFile(files);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_3__["NekoBusyOverlay"], {
    busy: busy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    accept: "image/*",
    ref: ref,
    onChange: onInputUpload,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledUploadDropArea, _extends({
    className: "".concat(className ? className : '', " ").concat(inDropZone ? 'dropping' : ''),
    onDragOver: onDragOver,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDrop: onDrop
  }, rest), children));
});
NekoUploadDropArea.propTypes = {
  ref: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.ref,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFailure: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  apiUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  apiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
NekoUploadDropArea.defaultProps = {
  onSuccess: function onSuccess() {},
  onFailure: function onFailure() {},
  disabled: false
};


/***/ }),

/***/ "../neko-ui/src/modal/MediaLibraryModal.js":
/*!*************************************************!*\
  !*** ../neko-ui/src/modal/MediaLibraryModal.js ***!
  \*************************************************/
/*! exports provided: NekoMediaLibraryModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoMediaLibraryModal", function() { return NekoMediaLibraryModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "../neko-ui/src/modal/Modal.js");
/* harmony import */ var _misc_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../misc/Typography */ "../neko-ui/src/misc/Typography.js");
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../form/Input */ "../neko-ui/src/form/Input.js");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/Button */ "../neko-ui/src/button/Button.js");
/* harmony import */ var _misc_Paging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../misc/Paging */ "../neko-ui/src/misc/Paging.js");
/* harmony import */ var _common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/NekoBusyOverlay */ "../neko-ui/src/common/NekoBusyOverlay.js");
/* harmony import */ var _misc_Icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../misc/Icon */ "../neko-ui/src/misc/Icon.js");
var _excluded = ["images", "onNextPage", "onPreviousPage", "onRefresh", "onClick", "onSearch", "searchValue", "busy", "currentPage", "limit", "total", "onPageChange", "selected", "multiSelect", "showUploader", "uploader"];

var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var StyledNekoModal = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_Modal__WEBPACK_IMPORTED_MODULE_4__["NekoModal"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 633px;\n\n  .neko-media-library-modal-content-header {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n\n    h1 {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 0;\n    }\n\n    input {\n      background-color: ", ";\n      border: 1px solid ", ";\n      border-radius: 3px;\n    }\n  }\n  .neko-media-library-modal-content-body {\n    margin-top: 33px;\n    margin-bottom: 36px;\n\n    .neko-media-library-modal-content-body-gallery {\n      display: grid;\n      gap: 10px;\n      grid-template-columns: repeat(6, 1fr);\n      margin-bottom: 10px;\n\n      .neko-media-library-modal-content-media-container {\n        cursor: pointer;\n        img {\n          box-sizing: border-box;\n        }\n\n        &.selected {\n          img {\n            border: 5px solid ", ";\n          }\n        }\n      }\n    }\n\n    .neko-media-library-modal-content-body-selected-gallery {\n      display: grid;\n      gap: 5px;\n      grid-template-columns: repeat(auto-fit, 50px);\n\n      .neko-media-library-modal-content-selected-media-container {\n        overflow: hidden;\n        position: relative;\n        height: 50px;\n        width: 50px;\n\n        img {\n          box-sizing: border-box;\n          width: 100%;\n        }\n\n        &:hover {\n          .remove-button {\n              display: block;\n          }\n          img {\n              transform: scale(1.2);\n          }\n        }\n\n        .remove-button {\n          background-color: rgba(", ", 0.4);\n          border: 0;\n          cursor: pointer;\n          display: none;\n          position: absolute;\n          top: 0;\n          right: 0;\n          width: 50%;\n          height: 50%;\n        }\n      }\n    }\n  }\n  .neko-media-library-modal-content-footer {\n    display: flex;\n    justify-content: space-between;\n  }\n  .neko-media-library-modal-search {\n    position: relative;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].black, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blackRGB);

var StyledNekoMediaLibraryModal = function StyledNekoMediaLibraryModal(props) {
  var images = props.images,
      onNextPage = props.onNextPage,
      onPreviousPage = props.onPreviousPage,
      onRefresh = props.onRefresh,
      _onClick = props.onClick,
      onSearch = props.onSearch,
      searchValue = props.searchValue,
      busy = props.busy,
      currentPage = props.currentPage,
      limit = props.limit,
      total = props.total,
      onPageChange = props.onPageChange,
      selected = props.selected,
      _props$multiSelect = props.multiSelect,
      multiSelect = _props$multiSelect === void 0 ? false : _props$multiSelect,
      _props$showUploader = props.showUploader,
      showUploader = _props$showUploader === void 0 ? false : _props$showUploader,
      uploader = props.uploader,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(searchValue),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSerch = _useState2[1];

  var selectedMediaJsx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!multiSelect) return [];
    return selected.map(function (image) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: image.id,
        className: "neko-media-library-modal-content-selected-media-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image.src,
        className: "neko-media-library-modal-content-media"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "remove-button",
        onClick: function onClick() {
          return _onClick({
            id: image.id,
            src: image.src
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Icon__WEBPACK_IMPORTED_MODULE_10__["NekoIcon"], {
        icon: "close",
        color: _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white,
        width: 25,
        height: 25
      })));
    });
  }, [selected]);
  var mediaJsx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return images.map(function (image) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: image.id,
        className: "neko-media-library-modal-content-media-container ".concat(selected.some(function (v) {
          return v.id === image.id;
        }) ? 'selected' : ''),
        onClick: function onClick() {
          _onClick({
            id: image.id,
            src: image.src
          });

          if (!multiSelect) props.onRequestClose();
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image.src,
        className: "neko-media-library-modal-content-media",
        width: "90",
        height: "90"
      }));
    });
  }, [images, selected]);

  var onReset = function onReset() {
    setSerch("");
    onRefresh();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoModal, rest, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-content-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Typography__WEBPACK_IMPORTED_MODULE_5__["NekoTypo"], {
    h1: true
  }, "Media Library"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_form_Input__WEBPACK_IMPORTED_MODULE_6__["NekoInput"], {
    value: search,
    disabled: busy,
    onEnter: onSearch,
    onChange: function onChange(v) {
      return setSerch(v);
    },
    placeholder: "Search..."
  }), search !== "" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Icon__WEBPACK_IMPORTED_MODULE_10__["NekoIcon"], {
    icon: "close",
    containerStyle: {
      width: '20px',
      position: 'absolute',
      right: '5px',
      top: '5px',
      cursor: 'pointer'
    },
    width: 20,
    height: 20,
    color: _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].darkGray,
    onClick: onReset
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_7__["NekoButton"], {
    onClick: function onClick() {
      return onSearch(search);
    },
    style: {
      marginLeft: '4px'
    }
  }, "Search"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-content-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    busy: busy
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-content-body-gallery"
  }, showUploader && uploader, mediaJsx)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-content-body-selected-gallery"
  }, selectedMediaJsx))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "neko-media-library-modal-content-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_misc_Paging__WEBPACK_IMPORTED_MODULE_8__["NekoPaging"], {
    limit: limit,
    currentPage: currentPage,
    total: total,
    onClick: onPageChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_7__["NekoButton"], {
    onClick: props.onRequestClose
  }, "Close"))));
};

var NekoMediaLibraryModal = function NekoMediaLibraryModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoMediaLibraryModal, props);
};

NekoMediaLibraryModal.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  onNextPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPreviousPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRefresh: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  busy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onPageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  multiSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
NekoMediaLibraryModal.defaultProps = {
  multiSelect: false
};


/***/ }),

/***/ "../neko-ui/src/modal/Modal.js":
/*!*************************************!*\
  !*** ../neko-ui/src/modal/Modal.js ***!
  \*************************************/
/*! exports provided: NekoModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoModal", function() { return NekoModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "../neko-ui/node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/Button */ "../neko-ui/src/button/Button.js");
var _excluded = ["id", "isOpen", "children", "className", "style", "ok", "cancel", "customButtons", "customButtonsPosition", "title", "content", "onOkClick", "onCancelClick", "okOnEnter", "thumbnail"];

var _templateObject, _templateObject2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var NekoModalParent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n  .ReactModal__Overlay {\n    z-index: 100;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    background: ", " !important;\n  }\n  .ReactModal__Overlay {\n    opacity: 0;\n    transition: opacity 200ms ease-in-out;\n  }\n  .ReactModal__Overlay--after-open  {\n    opacity: 1;\n  }\n  .ReactModal__Overlay--before-close {\n    opacity: 0;\n  }\n  .ReactModal__Overlay .neko-modal {\n    opacity: 0;\n    transform: scale(0.85);\n    transition: all 200ms ease-in-out;\n  }\n  .ReactModal__Overlay--after-open .neko-modal {\n    transform: scale(1);\n      opacity: 1;\n  }\n  .ReactModal__Overlay--before-close .neko-modal {\n      transform: scale(0.85);\n      opacity: 0;\n  }\n  .neko-modal {\n    background: ", ";\n    position: relative;\n    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.8);\n    outline: none;\n    padding: 15px;\n    max-width: 820px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].overlay, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].white);
var NekoModalContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 518px;\n\n  p {\n    margin: 0;\n  }\n  .title {\n    font-family: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 22px;\n  }\n  .content-container {\n    display: flex;\n    margin-top: 15px;\n\n    .thumbnail {\n      margin-right: 15px;\n      width: 240px;\n      overflow: hidden;\n\n      img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n      }\n    }\n    .content {\n      flex: auto;\n      font-family: ", ";\n      font-style: normal;\n      font-weight: normal;\n      font-size: 13px;\n      line-height: 14px;\n      width: 100%;\n    }\n  }\n  .button-group {\n    align-items: center;\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 15px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_4__["default"].fontFamily);

var StyledNekoModal = function StyledNekoModal(props) {
  var _props$id = props.id,
      id = _props$id === void 0 ? 'neko-modal-parent' : _props$id,
      isOpen = props.isOpen,
      children = props.children,
      className = props.className,
      style = props.style,
      _props$ok = props.ok,
      ok = _props$ok === void 0 ? 'OK' : _props$ok,
      _props$cancel = props.cancel,
      cancel = _props$cancel === void 0 ? 'Cancel' : _props$cancel,
      _props$customButtons = props.customButtons,
      customButtons = _props$customButtons === void 0 ? null : _props$customButtons,
      _props$customButtonsP = props.customButtonsPosition,
      customButtonsPosition = _props$customButtonsP === void 0 ? 'right' : _props$customButtonsP,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      _props$content = props.content,
      content = _props$content === void 0 ? '' : _props$content,
      onOkClick = props.onOkClick,
      onCancelClick = props.onCancelClick,
      _props$okOnEnter = props.okOnEnter,
      okOnEnter = _props$okOnEnter === void 0 ? false : _props$okOnEnter,
      thumbnail = props.thumbnail,
      rest = _objectWithoutProperties(props, _excluded);

  var customClassName = style ? 'custom-modal' : '';
  var showCustomButtons = customButtons !== null;
  var keyUpHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var key = _ref.key;

    if (key === 'Enter') {
      onOkClick();
    }
  }, [onOkClick]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!okOnEnter || !isOpen) return;
    window.addEventListener("keyup", keyUpHandler);
    return function () {
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [isOpen, keyUpHandler]);
  var modalContent = children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoModalContent, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-container"
  }, thumbnail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "thumbnail"
  }, thumbnail), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content"
  }, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "button-group"
  }, showCustomButtons && customButtonsPosition === 'left' && customButtons, onCancelClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_5__["NekoButton"], {
    className: "danger",
    onClick: onCancelClick
  }, cancel), onOkClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_5__["NekoButton"], {
    onClick: onOkClick
  }, ok), showCustomButtons && customButtonsPosition === 'right' && customButtons));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NekoModalParent, {
    id: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    ariaHideApp: false,
    parentSelector: function parentSelector() {
      return document.getElementById(id);
    },
    closeTimeoutMS: 200,
    className: "neko-modal ".concat(className || '', " ").concat(customClassName),
    isOpen: isOpen
  }, rest), modalContent));
};

var NekoModal = function NekoModal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoModal, props);
};

NekoModal.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  ok: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onOkClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCancelClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  customButtons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  okOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
NekoModal.defaultProps = {
  className: undefined,
  style: undefined,
  ok: 'OK',
  cancel: 'Cancel',
  title: '',
  content: '',
  onOkClick: undefined,
  onCancelClick: undefined,
  customButtons: null,
  okOnEnter: false,
  thumbnail: undefined
};


/***/ }),

/***/ "../neko-ui/src/table/Table.js":
/*!*************************************!*\
  !*** ../neko-ui/src/table/Table.js ***!
  \*************************************/
/*! exports provided: NekoTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoTable", function() { return NekoTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-down */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js");
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-up */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-up.js");
/* harmony import */ var _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/checkbox-blank-outline */ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-blank-outline.js");
/* harmony import */ var _iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/checkbox-marked */ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-marked.js");
/* harmony import */ var _iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_mdi_checkbox_multiple_marked__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-mdi/checkbox-multiple-marked */ "../neko-ui/node_modules/@iconify/icons-mdi/checkbox-multiple-marked.js");
/* harmony import */ var _iconify_icons_mdi_checkbox_multiple_marked__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_checkbox_multiple_marked__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/NekoBusyOverlay */ "../neko-ui/src/common/NekoBusyOverlay.js");
var _excluded = ["checked", "intermediate", "onSelect", "onUnselect"];

var _templateObject;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Table = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].table(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  font-family: ", ";\n  border-spacing: 0;\n  width: 100%;\n\n  th, td {\n    margin: 0;\n    padding: 5px;\n    border-bottom: 1px solid rgba(", ", 0.1);\n    border-right: 1px solid rgba(", ", 0.1);\n\n    a {\n      text-decoration: none;\n    }\n\n    :last-child {\n      border-right: 0;\n    }\n  }\n\n  th, tfoot td {\n    height: 30px;\n    background-color: ", ";\n    color: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 16px;\n    text-align: left;\n\n    div {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      &.sortable {\n        cursor: pointer;\n      }\n    }\n  }\n\n  tbody {\n    tr {\n      :nth-child(even) {\n        background-color: ", ";\n      }\n      &.selected {\n        background-color: rgba(", ", 0.8);\n        color: ", ";\n\n        a {\n          color: #81e8ff;\n        }\n      }\n    }\n    img {\n      vertical-align: bottom;\n    }\n  }\n\n  tfoot tr:last-child {\n    td {\n      border-bottom: 0;\n    }\n  }\n\n  .table-checkbox-cell {\n    width: 35px;\n    text-align: center;\n\n    svg {\n      padding: 5px;\n      cursor: pointer;\n    }\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].blackRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].tableGray, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].blueRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].white);

var TableCheckBox = function TableCheckBox(props) {
  var checked = props.checked,
      _props$intermediate = props.intermediate,
      intermediate = _props$intermediate === void 0 ? false : _props$intermediate,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? function () {} : _props$onSelect,
      _props$onUnselect = props.onUnselect,
      onUnselect = _props$onUnselect === void 0 ? function () {} : _props$onUnselect,
      rest = _objectWithoutProperties(props, _excluded);

  var onClick = function onClick(e) {
    checked ? onUnselect(e) : onSelect(e);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    icon: intermediate ? _iconify_icons_mdi_checkbox_multiple_marked__WEBPACK_IMPORTED_MODULE_8___default.a : checked ? _iconify_icons_mdi_checkbox_marked__WEBPACK_IMPORTED_MODULE_7___default.a : _iconify_icons_mdi_checkbox_blank_outline__WEBPACK_IMPORTED_MODULE_6___default.a,
    width: "24px",
    height: "24px",
    onClick: onClick
  });
};
/**
 * @param {string} className
 * @param {string|object} icon
 * @param {bool} disabled
 * @param {function} onClick
 */


var StyledNekoTable = function StyledNekoTable(props) {
  var columns = props.columns,
      data = props.data,
      _props$busy = props.busy,
      busy = _props$busy === void 0 ? false : _props$busy,
      _onSelect = props.onSelect,
      _onUnselect = props.onUnselect,
      selectedItems = props.selectedItems,
      sort = props.sort,
      onSortChange = props.onSortChange;
  var columnsCount = columns.length + (_onSelect ? 1 : 0);
  var rows = data.map(function (v) {
    var cells = columns.map(function (c) {
      return {
        value: v[c.accessor],
        style: c.style || {}
      };
    });
    return {
      id: v.id,
      cells: cells
    };
  });
  var currentRowsIds = rows.map(function (x) {
    return x.id;
  });
  var currentSelectedRows = currentRowsIds.filter(function (x) {
    return selectedItems.includes(x);
  });
  var areAllRowsSelected = currentSelectedRows.length === currentRowsIds.length;
  var isIntermediate = !areAllRowsSelected && selectedItems.length > 0;
  var hiddenColumnIndexes = columns.reduce(function (a, e, i) {
    if (e.visible === false) a.push(i);
    return a;
  }, []);
  var headersFooters = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, _onSelect && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "table-checkbox-cell"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableCheckBox, {
    checked: areAllRowsSelected,
    intermediate: isIntermediate,
    onSelect: function onSelect(e) {
      return _onSelect(currentRowsIds, e);
    },
    onUnselect: function onUnselect(e) {
      // The unselect on selectedItems never happens, but I keep it here in case
      // we find an elegant UI solution to unselect all the invisible selected rows as well.
      isIntermediate ? _onUnselect(selectedItems, e) : _onUnselect(currentRowsIds, e);
    }
  })), columns.filter(function (x, i) {
    return !hiddenColumnIndexes.includes(i);
  }).map(function (column) {
    var beingSorted = sort && sort.accessor === column.accessor;
    var beingSortedAsc = sort && sort.by === 'asc';
    var thStyle = column.style || {};
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      style: thStyle,
      key: column.accessor
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: column.sortable ? 'sortable' : '',
      onClick: column.sortable ? function (e) {
        onSortChange(column.accessor, beingSorted && beingSortedAsc ? 'desc' : 'asc', e);
      } : undefined
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, column.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, column.sortable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      icon: !beingSorted ? _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_4___default.a : beingSortedAsc ? _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_4___default.a : _iconify_icons_mdi_chevron_up__WEBPACK_IMPORTED_MODULE_5___default.a,
      color: beingSorted ? _common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].white : "rgba(".concat(_common_NekoTheme__WEBPACK_IMPORTED_MODULE_9__["default"].blackRGB, ", 0.1)"),
      width: "26px",
      height: "26px"
    }))));
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_NekoBusyOverlay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    busy: busy,
    overlayStyle: {
      top: '36px',
      height: 'calc(100% - 76px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, headersFooters), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, !rows.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colspan: columnsCount,
    style: {
      textAlign: 'center',
      height: 40,
      color: 'gray'
    }
  }, "Empty.")), rows.map(function (row) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: selectedItems.includes(row.id) ? 'selected' : ''
    }, _onSelect && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "table-checkbox-cell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableCheckBox, {
      checked: selectedItems.includes(row.id),
      onSelect: function onSelect(e) {
        return _onSelect([row.id], e);
      },
      onUnselect: function onUnselect(e) {
        return _onUnselect([row.id], e);
      }
    })), row.cells.filter(function (x, i) {
      return !hiddenColumnIndexes.includes(i);
    }).map(function (cell) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: cell.style
      }, cell.value);
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tfoot", null, headersFooters)));
};

var NekoTable = function NekoTable(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoTable, props);
};

NekoTable.propTypes = {
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any),
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any),
  busy: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool),
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUnselect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  selectedItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  onSortChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
NekoTable.defaultProps = {
  columns: undefined,
  data: undefined,
  busy: false,
  onSelect: undefined,
  onUnselect: undefined,
  selectedItems: undefined,
  onSortChange: undefined
};


/***/ }),

/***/ "../neko-ui/src/tabs/SideTabs.js":
/*!***************************************!*\
  !*** ../neko-ui/src/tabs/SideTabs.js ***!
  \***************************************/
/*! exports provided: NekoSideTab, NekoSideTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoSideTab", function() { return NekoSideTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoSideTabs", function() { return NekoSideTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _label_ProOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label/ProOnly */ "../neko-ui/src/label/ProOnly.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/react */ "../neko-ui/node_modules/@iconify/react/dist/icon.js");
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-down */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-down.js");
/* harmony import */ var _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-mdi/chevron-right */ "../neko-ui/node_modules/@iconify/icons-mdi/chevron-right.js");
/* harmony import */ var _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7__);
var _templateObject, _templateObject2, _templateObject3;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var TabContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var Tab = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  padding: 2px 3px 2px 19px;\n\n  &.disabled {\n    background-color: rgba(", ", 0.25);\n    cursor: default;\n  }\n\n  p {\n    color: ", ";\n    font-family: ", ";\n    font-size: 14px;\n    line-height: 17px;\n    margin: 0;\n  }\n\n  .neko-side-tab-icon {\n    color: ", ";\n    margin-left: auto;\n    height: 36px;\n    width: 36px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].yellowRGB, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white);
var TabContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: none;\n\n  &.active {\n    display: block;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white);
/**
 * Need to use with NecoTab
 */

var StyledNekoSideTabs = function StyledNekoSideTabs(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.activeTabIndex),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      activeTabIndex = _React$useState2[0],
      setIsActiveTabIndex = _React$useState2[1];

  var tabAttributes = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child, i) {
    var title = child.props.title || "Untitled Tab " + (i + 1);
    var key = child.props.key || 'neko-tab-' + title.toLowerCase();
    var onClick = child.props.onClick ? child.props.onClick : null;
    var requirePro = !props.isPro && (child.props.requirePro || false);
    var onDragOver = child.props.onDragOver;
    var onDrop = child.props.onDrop;
    var rightActions = child.props.rightActions || null;
    return {
      key: key,
      title: title,
      onClick: onClick,
      requirePro: requirePro,
      onDragOver: onDragOver,
      onDrop: onDrop,
      rightActions: rightActions
    };
  });
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(props.children, function (child, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      isActive: i === activeTabIndex
    });
  });

  var onTabClick = function onTabClick(tabIndex, tabAttr, ev) {
    if (tabAttr.requirePro) return;
    var newTabIndex = tabIndex === activeTabIndex ? null : tabIndex;
    setIsActiveTabIndex(newTabIndex);

    if (props.onChange) {
      props.onChange(newTabIndex, tabAttr, ev);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, null, tabAttributes.map(function (attr, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      key: attr.key,
      className: "".concat(i === activeTabIndex ? 'active' : '', " ").concat(attr.requirePro ? 'disabled' : ''),
      onClick: function onClick(ev) {
        onTabClick(i, attr, ev);
      },
      onDragOver: attr.onDragOver,
      onDrop: attr.onDrop
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        fontSize: 15
      }
    }, attr.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_4__["ProOnly"], {
      className: "inline",
      show: attr.requirePro
    })), attr.rightActions === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: i === activeTabIndex ? _iconify_icons_mdi_chevron_down__WEBPACK_IMPORTED_MODULE_6___default.a : _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7___default.a,
      className: "neko-side-tab-icon"
    }) : i === activeTabIndex ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginLeft: 'auto'
      }
    }, attr.rightActions) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_iconify_react__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      icon: _iconify_icons_mdi_chevron_right__WEBPACK_IMPORTED_MODULE_7___default.a,
      className: "neko-side-tab-icon"
    })), children[i]);
  }));
};
/**
 * @oaram {string} title
 * @param {bool} isActive
 */


var StyledNekoSideTab = function StyledNekoSideTab(props) {
  var children = props.children,
      isActive = props.isActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContent, {
    className: "".concat(isActive ? 'active' : '')
  }, children);
};

var NekoSideTabs = function NekoSideTabs(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoSideTabs, props);
};

NekoSideTabs.propTypes = {
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  activeTabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
NekoSideTabs.defaultProps = {
  isPro: false,
  onChange: undefined,
  activeTabIndex: null
};

var NekoSideTab = function NekoSideTab(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoSideTab, props);
};

NekoSideTab.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  requirePro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  rightActions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
NekoSideTab.defaultProps = {
  isActive: false,
  requirePro: false,
  title: undefined,
  onDragOver: undefined,
  onDrop: undefined,
  rightActions: undefined
};


/***/ }),

/***/ "../neko-ui/src/tabs/Tabs.js":
/*!***********************************!*\
  !*** ../neko-ui/src/tabs/Tabs.js ***!
  \***********************************/
/*! exports provided: NekoTab, NekoTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoTab", function() { return NekoTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoTabs", function() { return NekoTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
/* harmony import */ var _label_ProOnly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../label/ProOnly */ "../neko-ui/src/label/ProOnly.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var TabContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var TabGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n"])));
var Tab = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", ";\n  border-radius: 8px 8px 0px 0px;\n  border: 0;\n  background-color: #459ad2;\n  color: rgb(255 255 255 / 65%);\n\n  cursor: pointer;\n  line-height: 17px;\n  margin-right: 5px;\n  text-align: left;\n  padding: 10px 15px 10px 15px;\n\n  &:focus {\n    outline: none;\n  }\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &.disabled {\n    background-color: rgb(224 156 54);\n    cursor: default;\n    display: inline-flex;\n    padding-bottom: 7px;\n  }\n\n  &.hidden {\n    display: none;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontFamily, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSizeText, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white);
var TabContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: none;\n  padding: 10px;\n\n  &.active {\n    display: block;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blue);
/**
 * Need to use with NecoTab
 */

var StyledNekoTabs = function StyledNekoTabs(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isActiveTabIndex = _React$useState2[0],
      setIsActiveTabIndex = _React$useState2[1];

  var childrenProp = props.children ? props.children.length ? props.children.filter(function (x) {
    return !!x;
  }) : [props.children] : [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (props.keepTabOnReload) {
      var url = new URL(window.location.href);
      var title = url.searchParams.get('nekoTab');

      if (!title) {
        setIsActiveTabIndex(0);
        return;
      }

      var searchTitle = decodeURIComponent(title);
      var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(childrenProp).map(function (c) {
        return c.props.title.replace(' ', '');
      }).indexOf(searchTitle);

      if (index === -1) {
        setIsActiveTabIndex(0);
        return;
      }

      setIsActiveTabIndex(index);
      return;
    }

    setIsActiveTabIndex(0);
  }, []);
  var tabAttributes = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(childrenProp, function (child, i) {
    var title = child.props.title || "Untitled Tab " + (i + 1);
    var key = child.props.key || 'neko-tab-' + title.toLowerCase();
    var onClick = child.props.onClick ? child.props.onClick : null;
    var requirePro = !props.isPro && (child.props.requirePro || false);
    var hidden = child.props.hidden || false;
    return {
      key: key,
      title: title,
      onClick: onClick,
      requirePro: requirePro,
      hidden: hidden
    };
  });
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(childrenProp, function (child, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
      isActive: i === isActiveTabIndex
    });
  });

  var keepTab = function keepTab(title) {
    if (history.pushState && title) {
      var searchParams = new URLSearchParams(window.location.search);
      var value = encodeURIComponent(title.replace(' ', ''));
      searchParams.set('nekoTab', value);
      var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + searchParams.toString();
      window.history.replaceState({
        path: newUrl
      }, '', newUrl);
    }
  };

  var onTabClick = function onTabClick(tabIndex, tabAttr, ev) {
    if (tabAttr.requirePro) return;
    setIsActiveTabIndex(tabIndex);

    if (props.onChange) {
      props.onChange(tabIndex, tabAttr, ev);
    }

    if (props.keepTabOnReload) {
      keepTab(tabAttr.title);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabGroup, null, tabAttributes.map(function (attr, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      key: attr.key,
      className: "neko-tab-title ".concat(i === isActiveTabIndex ? 'active' : '', " ").concat(attr.requirePro ? 'disabled' : '', " ").concat(attr.hidden ? "hidden" : ''),
      onClick: function onClick(ev) {
        onTabClick(i, attr, ev);
      }
    }, attr.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_label_ProOnly__WEBPACK_IMPORTED_MODULE_4__["ProOnly"], {
      className: "inline",
      style: {
        marginLeft: 10,
        marginRight: -5,
        top: -1
      },
      show: attr.requirePro
    }));
  })), children);
};
/**
 * @oaram {string} title
 * @param {bool} isActive
 */


var StyledNekoTab = function StyledNekoTab(props) {
  var children = props.children,
      isActive = props.isActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabContent, {
    className: "".concat(isActive ? 'active' : '')
  }, !!isActive && children);
};

var NekoTabs = function NekoTabs(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoTabs, props);
};

NekoTabs.propTypes = {
  isPro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
NekoTabs.defaultProps = {
  isPro: false,
  onChange: undefined
};

var NekoTab = function NekoTab(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoTab, props);
};

NekoTab.propTypes = {
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  requirePro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
NekoTab.defaultProps = {
  isActive: false,
  requirePro: false,
  title: undefined
};


/***/ }),

/***/ "../neko-ui/src/toolbar/Toolbar.js":
/*!*****************************************!*\
  !*** ../neko-ui/src/toolbar/Toolbar.js ***!
  \*****************************************/
/*! exports provided: NekoToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NekoToolbar", function() { return NekoToolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../neko-ui/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/NekoTheme */ "../neko-ui/src/common/NekoTheme.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ToolbarBase = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  padding: 10px 10px;\n  background: ", ";\n  border-radius: 10px;\n  box-shadow: 0px 0px 10px rgba(", ", 0.1);\n\n  &.neko-align-left {\n    justify-content: flex-start;\n  }\n\n  &.neko-align-right {\n    justify-content: flex-end;\n  }\n\n  > *:not(:last-child) {\n    margin-right: 5px;\n  }\n"])), _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].white, _common_NekoTheme__WEBPACK_IMPORTED_MODULE_3__["default"].blackRGB);

var StyledNekoToolbar = function StyledNekoToolbar(props) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'left' : _props$align;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToolbarBase, {
    className: "neko-align-".concat(align)
  }, props.children);
};

var NekoToolbar = function NekoToolbar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNekoToolbar, props);
};

NekoToolbar.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right'])
};
NekoToolbar.defaultProps = {
  align: 'left'
};


/***/ }),

/***/ "./app/js/components/EditLinkField.js":
/*!********************************************!*\
  !*** ./app/js/components/EditLinkField.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/i18n */ "./app/js/i18n.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/index.js");
var _templateObject;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// React & Vendor Libs
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useCallback = _wp$element.useCallback;
 // Libs


 // NekoUI



var targets = [{
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].SAME_PAGE,
  value: '_self'
}, {
  label: _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].NEW_PAGE,
  value: '_blank'
}];
var GroupContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\talign-items: center;\n\tdisplay: flex;\n\tmargin-bottom: 10px;\n\n\tp {\n\t\tmargin: 0 !important;\n\t\twidth: 20%;\n\t}\n\n\t> div {\n\t\tflex-grow: 1;\n\t}\n"])));

var EditLinkField = function EditLinkField(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      busyAction = _useState2[0],
      setBusyAction = _useState2[1];

  var busy = busyAction;
  var postId = props.postId;

  var _useState3 = useState(props.url),
      _useState4 = _slicedToArray(_useState3, 2),
      url = _useState4[0],
      setUrl = _useState4[1];

  var _useState5 = useState(props.target ? props.target : '_self'),
      _useState6 = _slicedToArray(_useState5, 2),
      target = _useState6[0],
      setTarget = _useState6[1];

  var _useState7 = useState(props.rel),
      _useState8 = _slicedToArray(_useState7, 2),
      rel = _useState8[0],
      setRel = _useState8[1];

  var _useState9 = useState(props.aria),
      _useState10 = _slicedToArray(_useState9, 2),
      aria = _useState10[0],
      setAria = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      openModal = _useState12[0],
      setOpenModal = _useState12[1];

  var updateOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(postId, url, target, rel, aria) {
      var result, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setBusyAction(true);
              result = true;
              _context.prev = 2;
              _context.next = 5;
              return Object(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["postFetch"])("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/update_meta"), {
                json: {
                  post_id: postId,
                  _gallery_link_url: url,
                  _gallery_link_target: target,
                  _gallery_link_rel: rel,
                  _gallery_link_aria: aria
                },
                nonce: _app_settings__WEBPACK_IMPORTED_MODULE_2__["restNonce"]
              });

            case 5:
              res = _context.sent;

              if (!res.success) {
                result = false;
                alert(res.message);
              }

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              result = false;
              alert(_context.t0.message);

            case 13:
              _context.prev = 13;
              if (result) onCloseModal();
              setBusyAction(false);
              return _context.finish(13);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9, 13, 17]]);
    }));

    return function updateOption(_x, _x2, _x3, _x4, _x5) {
      return _ref.apply(this, arguments);
    };
  }();

  var onCloseModal = function onCloseModal() {
    return setOpenModal(false);
  };

  var onOkClick = useCallback(function () {
    updateOption(postId, url, target, rel, aria);
  }, [postId, url, target, rel, aria, updateOption, onCloseModal]);
  var onKeyDown = useCallback(function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      onOkClick();
    }
  }, [onOkClick]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return setOpenModal(true);
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoIcon"], {
    icon: "link",
    disabled: !url
  })), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoModal"], {
    isOpen: openModal,
    onRequestClose: onCloseModal,
    title: "Edit the custom link",
    content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GroupContainer, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoTypo"], {
      p: true
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].LINK_URL), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoInput"], {
      disabled: busy,
      onInput: function onInput(e) {
        return setUrl(e.target.value);
      },
      onKeyDown: onKeyDown,
      value: url,
      autoFocus: true
    })), /*#__PURE__*/React.createElement(GroupContainer, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoTypo"], {
      p: true
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].LINK_TARGET), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoSelect"], {
      scrolldown: true,
      value: target,
      onChange: function onChange(v) {
        return setTarget(v);
      },
      disabled: busy
    }, targets.map(function (target) {
      return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoOption"], {
        value: target.value,
        label: target.label
      });
    }))), /*#__PURE__*/React.createElement(GroupContainer, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoTypo"], {
      p: true
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].LINK_REL), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoInput"], {
      disabled: busy,
      onInput: function onInput(e) {
        return setRel(e.target.value);
      },
      value: rel
    })), /*#__PURE__*/React.createElement(GroupContainer, null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoTypo"], {
      p: true
    }, _app_i18n__WEBPACK_IMPORTED_MODULE_1__["default"].ARIAL_LABEL), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_3__["NekoInput"], {
      disabled: busy,
      onInput: function onInput(e) {
        return setAria(e.target.value);
      },
      value: aria
    }))),
    onOkClick: onOkClick,
    onCancelClick: onCloseModal
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditLinkField);

/***/ }),

/***/ "./app/js/components/Settings.js":
/*!***************************************!*\
  !*** ./app/js/components/Settings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _neko_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @neko-ui */ "../neko-ui/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/settings */ "./app/js/settings.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// React & Vendor Libs
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useMemo = _wp$element.useMemo;
 // NekoUI





var Settings = function Settings() {
  var swrAllSettingsKey = useMemo(function () {
    return ["".concat(_app_settings__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/all_settings/"), {
      headers: {
        'X-WP-Nonce': _app_settings__WEBPACK_IMPORTED_MODULE_2__["restNonce"]
      }
    }];
  }, [_app_settings__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], _app_settings__WEBPACK_IMPORTED_MODULE_2__["restNonce"]]);

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_0__["default"])(swrAllSettingsKey, _neko_ui__WEBPACK_IMPORTED_MODULE_1__["jsonFetcher"]),
      swrSettings = _useSWR.data,
      mutateSwrSettings = _useSWR.mutate;

  var _useHandleSWR = Object(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["useHandleSWR"])(swrSettings, {}, true),
      busySettings = _useHandleSWR.busy,
      settings = _useHandleSWR.data,
      swrError = _useHandleSWR.error;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      busyAction = _useState2[0],
      setBusyAction = _useState2[1];

  var busy = busySettings || busyAction;
  var obmode = settings === null || settings === void 0 ? void 0 : settings.mgcl_obmode;
  var parsingEngine = settings === null || settings === void 0 ? void 0 : settings.mgcl_parsing_engine;
  var log = settings === null || settings === void 0 ? void 0 : settings.mgcl_log;
  var buttonEnabled = settings === null || settings === void 0 ? void 0 : settings.mgcl_button_enabled;
  var buttonLabel = settings === null || settings === void 0 ? void 0 : settings.mgcl_button_label;
  var parsingEngineOptions = [{
    id: "none",
    value: "None",
    label: "None (Not Supported Yet)"
  }, {
    id: "htmldomparser",
    value: "HtmlDomParser",
    label: "HtmlDomParser"
  }, {
    id: "didom",
    value: "DiDom",
    label: "DiDom"
  }];

  var updateOption = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value, id) {
      var newSettingsData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newSettingsData = _objectSpread({}, swrSettings.data);
              newSettingsData[id] = value;
              mutateSwrSettings(_objectSpread(_objectSpread({}, swrSettings), {}, {
                data: newSettingsData
              }), false);
              setBusyAction(true);
              _context.prev = 4;
              _context.next = 7;
              return Object(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["postFetch"])("".concat(_app_settings__WEBPACK_IMPORTED_MODULE_2__["apiUrl"], "/update_option"), {
                json: {
                  name: id,
                  value: value
                },
                nonce: _app_settings__WEBPACK_IMPORTED_MODULE_2__["restNonce"]
              });

            case 7:
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](4);
              alert(_context.t0.message);

            case 12:
              _context.prev = 12;
              setBusyAction(false);
              mutateSwrSettings();
              return _context.finish(12);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 9, 12, 16]]);
    }));

    return function updateOption(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Settings
   */


  var jsxOBMode = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoSettings"], {
    title: "OB Mode"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoCheckboxGroup"], {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoCheckbox"], {
    id: "mgcl_obmode",
    label: "Enabled",
    value: "1",
    checked: obmode,
    onChange: updateOption,
    description: "If the linked images are outside of the main content (header, sidebar, etc), OB Mode is needed. This slows down the processing (cache recommended)."
  })));
  var jsxParsingEngine = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoSettings"], {
    title: "Parsing Engine",
    description: "Hello"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoSelect"], {
    id: "mgcl_parsing_engine",
    onChange: updateOption
  }, parsingEngineOptions.map(function (option) {
    return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoOption"], {
      id: "mgcl_parsing_engine_".concat(option.id),
      value: option.value,
      label: option.label,
      checked: parsingEngine === option.value
    });
  })));
  var jsxLog = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoSettings"], {
    title: "Logs"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoCheckboxGroup"], {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoCheckbox"], {
    id: "mgcl_log",
    label: "Logs",
    value: "1",
    checked: log,
    onChange: updateOption,
    description: "Simple logging, written directly in the PHP Error Logs."
  })));
  /**
   * CTA Buttons
   */

  var jsxUseButtons = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoSettings"], {
    title: "Use Buttons"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoCheckboxGroup"], {
    max: "1"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoCheckbox"], {
    id: "mgcl_button_enabled",
    label: "Enabled",
    value: "1",
    description: "A call-to-action button will be used of a clickable image.",
    checked: buttonEnabled,
    onChange: updateOption
  })));
  var jsxButtonLabel = /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoSettings"], {
    title: "Label"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoInput"], {
    id: "mgcl_button_label",
    name: "mgcl_button_label",
    value: buttonLabel,
    description: "A call-to-action button will be used of a clickable image.",
    onBlur: updateOption
  }));
  return /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoPage"], {
    nekoErrors: [swrError]
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoHeader"], {
    title: "Gallery Custom Links | Settings",
    subtitle: "By Jordy Meow"
  }), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoWrapper"], null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoColumn"], {
    full: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoContainer"], null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoTypo"], {
    p: true
  }, "This plugin works out of the box, the default settings are the best for most installs. Don't hesitate to take a look at the ", /*#__PURE__*/React.createElement("a", {
    href: "https://meowapps.com/plugin/gallery-custom-links/"
  }, "official page"), ".")), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoTabs"], null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoTab"], {
    title: "Settings"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoWrapper"], null, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoColumn"], {
    minimal: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoBlock"], {
    busy: busy,
    title: "Settings",
    className: "primary"
  }, jsxParsingEngine, jsxOBMode, jsxLog)), /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoColumn"], {
    minimal: true
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoBlock"], {
    busy: busy,
    title: "CTA Buttons",
    className: "primary"
  }, /*#__PURE__*/React.createElement(_neko_ui__WEBPACK_IMPORTED_MODULE_1__["NekoTypo"], {
    p: true
  }, /*#__PURE__*/React.createElement("b", null, "Currently works with the ", /*#__PURE__*/React.createElement("a", {
    href: "https://wordpress.org/plugins/meow-gallery/"
  }, "Meow Gallery"), " and Gutenberg Galleries."), " In a future Pro version, support for additional galleries might be added (please contact ", /*#__PURE__*/React.createElement("a", {
    href: "https://meowapps.com/contact/"
  }, "Meow Apps"), " for this)."), jsxUseButtons, !buttonEnabled ? null : jsxButtonLabel))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./app/js/i18n.js":
/*!************************!*\
  !*** ./app/js/i18n.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __ = wp.i18n.__;
var i18n = {};
i18n.PENDING = __('Pending', 'gallery-custom-links');
i18n.RENAME = __('Rename', 'gallery-custom-links');
i18n.TITLE = __('Title', 'gallery-custom-links');
i18n.SAME_PAGE = __('Same page', 'gallery-custom-links');
i18n.NEW_PAGE = __('New page', 'gallery-custom-links');
i18n.LINK_URL = __('Link URL', 'gallery-custom-links');
i18n.LINK_TARGET = __('Link Target', 'gallery-custom-links');
i18n.LINK_REL = __('Link Rel', 'gallery-custom-links');
i18n.ARIAL_LABEL = __('Arial Label', 'gallery-custom-links');
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ "./app/js/index.js":
/*!*************************!*\
  !*** ./app/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/Settings */ "./app/js/components/Settings.js");
/* harmony import */ var _app_components_EditLinkField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/EditLinkField */ "./app/js/components/EditLinkField.js");
// React & Vendor Libs

 // Gallery Custom Links



var isMediaLibrary = null;

function init() {
  isMediaLibrary = document.getElementsByClassName('upload-php')[0];
} // Gallery Custom Links Settings


function addSettings() {
  var container = document.getElementById('mgcl-admin-settings');

  if (container) {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_Settings__WEBPACK_IMPORTED_MODULE_2__["default"], null), container);
    return true;
  }

  return false;
}

document.addEventListener('DOMContentLoaded', function (event) {
  init();

  if (addSettings() || !isMediaLibrary) {
    return;
  } // Edit Link Fields need to be added in the Media Library


  var fields = Array.from(document.getElementsByClassName('mgcl-edit-link-field'));
  fields.forEach(function (field) {
    var postId = field.getAttribute('data-post-id');
    var url = field.getAttribute('data-url');
    var target = field.getAttribute('data-target');
    var rel = field.getAttribute('data-rel');
    var aria = field.getAttribute('data-aria');
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_components_EditLinkField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postId: postId,
      url: url,
      target: target,
      rel: rel,
      aria: aria
    }), field);
  });
});

/***/ }),

/***/ "./app/js/settings.js":
/*!****************************!*\
  !*** ./app/js/settings.js ***!
  \****************************/
/*! exports provided: prefix, domain, apiUrl, restUrl, pluginUrl, isPro, isRegistered, restNonce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restUrl", function() { return restUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginUrl", function() { return pluginUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPro", function() { return isPro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegistered", function() { return isRegistered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restNonce", function() { return restNonce; });
var prefix = mgcl_gallery_custom_links.prefix;
var domain = mgcl_gallery_custom_links.domain;
var restUrl = mgcl_gallery_custom_links.rest_url.replace(/\/+$/, "");
var apiUrl = mgcl_gallery_custom_links.api_url.replace(/\/+$/, "");
var pluginUrl = mgcl_gallery_custom_links.plugin_url.replace(/\/+$/, "");
var isPro = mgcl_gallery_custom_links.is_pro === '1';
var isRegistered = isPro && mgcl_gallery_custom_links.is_registered === '1';
var restNonce = mgcl_gallery_custom_links.rest_nonce;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map