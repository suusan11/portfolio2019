/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! exports provided: globalMenu, sendTop, smoothScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalMenu\", function() { return globalMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendTop\", function() { return sendTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smoothScroll\", function() { return smoothScroll; });\n//global menu for mobile device\nfunction globalMenu() {\n    const openButton = document.getElementById('js-open-menu');\n    const closeButton = document.getElementById('js-close-menu');\n    const linkButtons = document.getElementById('js-global-menu').getElementsByTagName('li');\n    const globalMenu = document.getElementById('js-global-menu');\n\n    openButton.addEventListener('click', function () {\n        globalMenu.classList.add('active');\n        globalMenu.classList.remove('remove');\n\n        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); //window.scrollで取得した値を呼び出す\n        document.body.style.position = 'fixed';\n        document.body.style.top = `-${scrollY}`; //スクロールポジションをスクロールしている位置にする（毎回windowのトップに動かないようにする）\n        for(let i = 0; i < linkButtons.length; i++) {\n            const linkButton = linkButtons[i];\n            linkButton.addEventListener('click', function() {\n                globalMenu.classList.remove('active');\n                globalMenu.classList.add('remove');\n\n                const scrollY = document.body.style.top;\n                document.body.style.position = '';\n                document.body.style.top = '';\n                window.scrollTo(0, parseInt(scrollY || '0') * -1);\n            });\n        }\n    });\n\n    closeButton.addEventListener('click', function () {\n        globalMenu.classList.remove('active');\n        globalMenu.classList.add('remove');\n        document.body.style.position = '';\n\n        const scrollY = document.body.style.top;\n        document.body.style.position = '';\n        document.body.style.top = '';\n        window.scrollTo(0, parseInt(scrollY || '0') * -1);\n    });\n\n    window.addEventListener('scroll', () => {\n        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);\n    });\n}\n\n//button operation to send page top\nfunction sendTop() {\n    window.addEventListener('scroll', function() {\n        const scrollValue = window.scrollY;\n\n        const breakPoint = document.getElementById('js-breakPoint').clientHeight;\n        const objectTop = document.getElementById('js-breakPoint').offsetTop;\n        const breakPointTotal = breakPoint + objectTop;\n\n        const buttonShow = document.getElementById('js-topButton');\n\n        if(scrollValue > breakPointTotal) {\n            buttonShow.classList.add('is__show');\n        }else {\n            buttonShow.classList.remove('is__show');\n        }\n    });\n}\n\n//smooth scroll\nfunction smoothScroll() {\n    const scroll = new SmoothScroll('a[href*=\"#\"]', {\n        speed: 500,\n        header: '[data-scroll-header]'\n    });\n}\n\n\n//# sourceURL=webpack:///./src/common.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\n\n// import * as animationFiles from './animation';\n\n//loading after read HTML\nwindow.onload = function() {\n    _common__WEBPACK_IMPORTED_MODULE_1__[\"globalMenu\"]();\n    _common__WEBPACK_IMPORTED_MODULE_1__[\"sendTop\"]();\n    _common__WEBPACK_IMPORTED_MODULE_1__[\"smoothScroll\"]();\n    // animationFiles.valuesAnimation();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });