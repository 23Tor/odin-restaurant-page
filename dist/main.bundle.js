/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/contact.js":
/*!***********************!*\
  !*** ./js/contact.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./js/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./js/menu.js\");\n\r\n\r\n\r\nfunction loadContact() {\r\n    const content = document.getElementById('content');\r\n    const contact = document.createElement('div');\r\n    contact.textContent = 'Contact us!';\r\n\r\n    const name = document.createElement('p');\r\n    name.textContent = 'John Doe';\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.textContent = '123-456-7890';\r\n\r\n    const location = document.createElement('p');\r\n    location.textContent = '123 Main Street, City, State';\r\n\r\n    contact.appendChild(name);\r\n    contact.appendChild(phoneNumber);\r\n    contact.appendChild(location);\r\n\r\n    content.appendChild(contact);\r\n\r\n    // Create home button\r\n    const homeButton = document.createElement('button');\r\n    homeButton.textContent = 'Home';\r\n    homeButton.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n    content.appendChild(homeButton);\r\n\r\n    //Create menu button\r\n    const menuButton = document.createElement('button');\r\n    menuButton.textContent = 'Menu';\r\n    menuButton.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n    content.appendChild(menuButton);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin-restaurant-page/./js/contact.js?");

/***/ }),

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./js/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./js/contact.js\");\n// home.js\r\n\r\n\r\n\r\nfunction loadHome(loadMenuPage, loadContactPage) {\r\n    const content = document.getElementById('content');\r\n\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Welcome to Our Restaurant!';\r\n    content.appendChild(title);\r\n\r\n    const description = document.createElement('p');\r\n    description.textContent = 'We serve the best food in town. Come and taste the difference.';\r\n    content.appendChild(description);\r\n\r\n    const image = document.createElement('img');\r\n    image.src = 'dist/img/main.jpg';\r\n    image.alt = 'Restaurant Image';\r\n    content.appendChild(image);\r\n\r\n    const menuButton = document.createElement('button');\r\n    menuButton.textContent = 'Menu';\r\n    menuButton.addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        // Hide other pages\r\n        const contactPage = document.getElementById('contact-page');\r\n        if (contactPage) {\r\n            contactPage.style.display = 'none';\r\n        }\r\n    });\r\n    content.appendChild(menuButton);\r\n\r\n    const contactButton = document.createElement('button');\r\n    contactButton.textContent = 'Contact';\r\n    contactButton.addEventListener('click', () => {\r\n        content.innerHTML = '';\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        // Hide other pages\r\n        const menuPage = document.getElementById('menu-page');\r\n        if (menuPage) {\r\n            menuPage.style.display = 'none';\r\n        }\r\n    });\r\n    content.appendChild(contactButton);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-restaurant-page/./js/home.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n// main.js\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin-restaurant-page/./js/main.js?");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./js/home.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./js/contact.js\");\n// menu.js\r\n\r\n\r\n\r\nfunction loadMenu() {\r\n    const content = document.getElementById('content');\r\n    const menu = document.createElement('div');\r\n    menu.textContent = 'Here is our menu!';\r\n\r\n    // Create menu items\r\n    const menuItem1 = document.createElement('div');\r\n    menuItem1.textContent = 'Burger';\r\n    menu.appendChild(menuItem1);\r\n\r\n    const menuItem2 = document.createElement('div');\r\n    menuItem2.textContent = 'Pizza';\r\n    menu.appendChild(menuItem2);\r\n\r\n    const menuItem3 = document.createElement('div');\r\n    menuItem3.textContent = 'Salad';\r\n    menu.appendChild(menuItem3);\r\n\r\n    content.appendChild(menu);\r\n\r\n    // Create home button\r\n    const homeButton = document.createElement('button');\r\n    homeButton.textContent = 'Home';\r\n    homeButton.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n    content.appendChild(homeButton);\r\n\r\n    // Create contact button\r\n    const contactButton = document.createElement('button');\r\n    contactButton.textContent = 'Contact';\r\n    contactButton.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n    content.appendChild(contactButton);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin-restaurant-page/./js/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;