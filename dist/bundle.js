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

/***/ "./src/AboutModule.js":
/*!****************************!*\
  !*** ./src/AboutModule.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutModule: () => (/* binding */ AboutModule)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\nvar AboutModule = function () {\n  // GLOBAL VARIABLES\n  var contentDiv = document.getElementById('home-page');\n\n  // RENDER ELEMENTS\n  function setAboutContent() {\n    var mainDiv = document.createElement('div');\n    var h1 = document.createElement('h1');\n    mainDiv.id = 'about';\n    mainDiv.className = 'flex flex-col md:p-2 text-white opacity-85 rounded lg:w-1/2 lg:justify-around hide';\n    mainDiv.style.backgroundColor = '#212934';\n    mainDiv.appendChild(h1);\n    h1.className = 'mb-6 font-alata text-center text-white text-xl md:text-5xl md:mt-0';\n    h1.textContent = \"About Us!\";\n    contentDiv.firstChild.nextElementSibling.appendChild(mainDiv);\n    mainDiv.appendChild(document.createElement('div')).innerHTML = \"<p class='text-sm'>Welcome to the mystical origins of Ireine's Emporium of Wonders, a sanctuary for the magical, the mysterious, and the outright extraordinary. Born from a spark of magic under the gleaming Moon of Eldoria, our emporium is not just a shop but a gateway to realms untold and adventures unimagined.<br><br>Long ago, in the forgotten valleys of Mirath, Ireine, a wanderer with a heart full of curiosity and eyes alight with wonder, stumbled upon an ancient artifact.This was no ordinary relic; it was the Compass of Destiny, said to point not to the north, but to one's fate. As the compass needle twirled and danced under the starlit sky, it guided Ireine to a hidden glen, where the air buzzed with enchantment, and the ground shimmered with latent magic.<br><br>It was there, amidst the whispering trees and the ethereal glow of faerie lights, that Ireine decided to establish a shop like no other.A place where magic wasn't just contained in dusty tomes or locked away in ancient chests but lived, breathed, and was shared freely.<br><br>Ireine's Emporium of Wonders quickly became a crossroads for adventurers, mystics, and dreamers. Each item on its shelves and in its corners was collected with care, infused with stories of courage, friendship, and the endless pursuit of knowledge.<br><br>From the Time - Twisting Teapot, found in the ruins of a clock tower frozen in time, to the Invisibility Cloak, woven from the silk of moonlight by the Night Weavers of Loria, every piece in the emporium invites you to embark on a journey beyond the bounds of imagination.< br > <br>But Ireine's vision went beyond merely selling relics and artifacts. The emporium serves as a beacon for those seeking not just the wonders of the world but also the wonders within themselves. It's a place where magic is real, dreams are tangible, and every visit leaves you a little changed, forever enchanted.<br><br>So, step into Ireine's Emporium of Wonders, where the past, present, and future intertwine, and discover the magic that awaits in every corner. Here, every item tells a story, and every story opens a door to new worlds, waiting just for you.<br><br>Welcome, traveler, to your next great adventure.</p><hr><p class='text-sm'>At Ireine's Emporium of Wonders, we believe that every visit should be an experience, a moment captured in the web of time, forever memorable. Join us, and let's explore the endless possibilities that await within the walls of our magical haven.</p>\";\n  }\n  return {\n    setAboutContent: setAboutContent\n  };\n}();\n\n\n//# sourceURL=webpack://webpack-starter/./src/AboutModule.js?");

/***/ }),

/***/ "./src/HomeModule.js":
/*!***************************!*\
  !*** ./src/HomeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeModule: () => (/* binding */ HomeModule)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\nvar HomeModule = function () {\n  // GLOBAL VARIABLES\n  var contentDiv = document.getElementById('home-page');\n\n  // RENDER ELEMENTS\n  function setHomeContent() {\n    var mainDiv = document.createElement('div');\n    var h1 = document.createElement('h1');\n    mainDiv.id = 'home';\n    mainDiv.className = 'flex flex-col md:p-2 text-white opacity-85 rounded lg:w-1/2 lg:justify-around';\n    mainDiv.style.backgroundColor = '#212934';\n    mainDiv.appendChild(h1);\n    h1.className = 'mb-6 font-alata text-center text-white text-xl md:text-5xl md:mt-0';\n    h1.textContent = \"Ireine's shop!\";\n    contentDiv.firstChild.nextElementSibling.appendChild(mainDiv);\n    mainDiv.appendChild(document.createElement('div')).innerHTML = \"<p class='text-sm'>Welcome to Ireine's Emporium of Wonders! Nestled in the heart of the digital realm, our quaint little shop is a treasure trove of the rarest artifacts and most whimsical items you could ever imagine. From the dusty corners of ancient dungeons to the farthest reaches of the mystical skies, we've scoured all corners of the world (and a few others!) to bring you a collection like no other.<br> <br> Here, you'll find everything from the ordinary to the extraordinary. Looking for a potion to boost your mana? We've got shelves lined with them! Or perhaps you're in the market for something a bit more... unconventional? How about a Time-Twisting Teapot that lets you enjoy your tea break in slow motion, or the ever-popular Invisibility Cloak for those days when you just don't feel like dealing with dragons—or tax collectors. <br> <br> And for the adventurers who've seen it all, we dare you to take a ride on our latest acquisition: the Chrono Chariot, a time machine disguised as an ordinary merchant's cart.Perfect for those who want to do a little shopping in the past or future.Just remember to return it within your own timeline to avoid late fees! <br> <br> At Ireine's Emporium of Wonders, we believe that shopping should be an adventure, not a chore. Whether you're a brave knight, a cunning sorcerer, or just a curious wanderer, we've got something to add a bit of magic to your inventory. So step right in and discover the impossible, the unimaginable, and the inexplicably fun!</p>\";\n  }\n  return {\n    setHomeContent: setHomeContent\n  };\n}();\n\n\n//# sourceURL=webpack://webpack-starter/./src/HomeModule.js?");

/***/ }),

/***/ "./src/MenuModule.js":
/*!***************************!*\
  !*** ./src/MenuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuModule: () => (/* binding */ MenuModule)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\nvar MenuModule = function () {\n  // GLOBAL VARIABLES\n  var contentDiv = document.getElementById('home-page');\n\n  // RENDER ELEMENTS\n  function setMenuContent() {\n    var mainDiv = document.createElement('div');\n    var h1 = document.createElement('h1');\n    mainDiv.id = 'menu';\n    mainDiv.className = 'flex flex-col md:p-2 text-white opacity-85 rounded lg:w-1/2 lg:justify-around hide';\n    mainDiv.style.backgroundColor = '#212934';\n    mainDiv.appendChild(h1);\n    h1.className = 'mb-6 font-alata text-center text-white text-xl md:text-5xl md:mt-0';\n    h1.textContent = \"Our Menu!\";\n    contentDiv.firstChild.nextElementSibling.appendChild(mainDiv);\n    mainDiv.appendChild(document.createElement('div')).innerHTML = \"<p class='text-sm'>Welcome to Ireine's Emporium of Wonders! Nestled in the heart of the digital realm, our quaint little shop is a treasure trove of the rarest artifacts and most whimsical items you could ever imagine. From the dusty corners of ancient dungeons to the farthest reaches of the mystical skies, we've scoured all corners of the world (and a few others!) to bring you a collection like no other.<br> <br> Here, you'll find everything from the ordinary to the extraordinary. Looking for a potion to boost your mana? We've got shelves lined with them! Or perhaps you're in the market for something a bit more... unconventional? How about a Time-Twisting Teapot that lets you enjoy your tea break in slow motion, or the ever-popular Invisibility Cloak for those days when you just don't feel like dealing with dragons—or tax collectors. <br> <br> And for the adventurers who've seen it all, we dare you to take a ride on our latest acquisition: the Chrono Chariot, a time machine disguised as an ordinary merchant's cart.Perfect for those who want to do a little shopping in the past or future.Just remember to return it within your own timeline to avoid late fees! <br> <br> At Ireine's Emporium of Wonders, we believe that shopping should be an adventure, not a chore. Whether you're a brave knight, a cunning sorcerer, or just a curious wanderer, we've got something to add a bit of magic to your inventory. So step right in and discover the impossible, the unimaginable, and the inexplicably fun!</p><hr><h2>Today's Featured Wares</h2><p class='text-sm'>Dive into our selection of enchanting goods, each with its own tale to tell and magic to unleash:</p><ul><li><strong>Time-Twisting Teapot</strong> - Slow down time with every sip. Perfect for extended tea breaks. <em>Just don't spill it!</em></li><br><li><strong>Invisibility Cloak</strong> - Vanish in plain sight. Ideal for avoiding unwelcome encounters.</li><br><li><strong>Chrono Chariot</strong> - Shop through the ages in this time-traveling cart. <em>Late fees apply for time paradoxes.</em></li><br><li><strong>Elixir of Endless Energy</strong> - Say goodbye to sleep; this potion keeps you going through night and day.</li><br><li><strong>Wand of Wonder</strong> - It doesn't just cast spells; it creates surprises. <em>Use with caution.</em></li><br><li><strong>Gauntlets of Giant Strength</strong> - Feel the power of giants at your fingertips. <em>Door frames not included.</em></li><br><li><strong>Mystic Map</strong> - Reveals the unseen. Discover hidden treasures or the nearest tavern.</li><br></ul><hr><p class='text-sm'>Each item in Ireine's inventory comes with a story of its own, promising not just a purchase, but an adventure. Ready to add some magic to your life? Visit Ireine's Emporium of Wonders, where the wonders of the world (and beyond) await!</p>\";\n  }\n  return {\n    setMenuContent: setMenuContent\n  };\n}();\n\n\n//# sourceURL=webpack://webpack-starter/./src/MenuModule.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _assets_home_pg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/home-pg.png */ \"./src/assets/home-pg.png\");\n/* harmony import */ var _assets_ireine1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ireine1.png */ \"./src/assets/ireine1.png\");\n/* harmony import */ var _assets_ireine2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/ireine2.png */ \"./src/assets/ireine2.png\");\n/* harmony import */ var _assets_ireine3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ireine3.png */ \"./src/assets/ireine3.png\");\n/* harmony import */ var _HomeModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeModule */ \"./src/HomeModule.js\");\n/* harmony import */ var _MenuModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuModule */ \"./src/MenuModule.js\");\n/* harmony import */ var _AboutModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AboutModule */ \"./src/AboutModule.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\n\n\n\n\n(function () {\n  var contentDiv = document.getElementById('home-page');\n  function setHomeBackground() {\n    if (contentDiv) {\n      contentDiv.style.backgroundImage = \"url('\".concat(_assets_home_pg_png__WEBPACK_IMPORTED_MODULE_1__, \"')\");\n      contentDiv.style.backgroundSize = 'cover';\n      contentDiv.style.backgroundPosition = 'center';\n      contentDiv.style.backgroundRepeat = 'no-repeat';\n    }\n  }\n\n  // CREATE NAVBAR\n  function createNavButtons(num) {\n    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'btn';\n    var buttons = []; // Array to hold created buttons\n\n    for (var i = 0; i < num; i++) {\n      var button = document.createElement('button');\n      button.className = 'btn-primary md:p-3 md:px-10';\n      button.innerText = text + ' ' + (i + 1); // Optional: add a number to each button text\n      button.setAttribute(\"data-set\", i);\n      buttons.push(button); // Add button to the array\n    }\n    return buttons; // Return the array of buttons\n  }\n\n  // RENDER NAVBAR\n\n  function setNavBar() {\n    var header = document.getElementById('header');\n    var navBar = document.createElement('nav');\n    if (header) {\n      navBar.id = 'navbar';\n      navBar.className = 'flex justify-around md:justify-center space-x-4';\n      header.appendChild(navBar);\n      var buttons = createNavButtons(3);\n      var _iterator = _createForOfIteratorHelper(buttons.entries()),\n        _step;\n      try {\n        var _loop = function _loop() {\n          var _step$value = _slicedToArray(_step.value, 2),\n            index = _step$value[0],\n            btn = _step$value[1];\n          var div = document.createElement('div');\n          var img = document.createElement('img');\n          div.className = \"button-with-image\".concat(index + 1, \" flex flex-col-reverse justify-start items-center\");\n          img.className = 'image-above opacity-85';\n          img.src = \"/src/assets/ireine\".concat(index + 1, \".png\");\n          img.onload = function () {\n            console.log('Image loaded successfully');\n            // Do something with the image\n            div.appendChild(img);\n          };\n          div.appendChild(btn);\n          navBar.appendChild(div);\n          if (index === 0) {\n            btn.textContent = 'Home';\n          } else if (index === 1) {\n            btn.textContent = 'Menu';\n          } else if (index === 2) {\n            btn.textContent = 'About';\n          } else btn.textContent;\n        };\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          _loop();\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }\n\n  // HANDLE INTERACTIONS\n  function handleNavBtnClick(e) {\n    var btnAtt = e.target.getAttribute('data-set');\n    var sections = {\n      '0': 'home',\n      '1': 'menu',\n      '2': 'about'\n    };\n\n    // Helper function to toggle visibility\n    function toggleVisibility(showId) {\n      Object.values(sections).forEach(function (sectionId) {\n        var section = document.getElementById(sectionId);\n        if (sectionId === showId) {\n          section.classList.remove('hide');\n        } else {\n          section.classList.add('hide');\n        }\n      });\n    }\n    switch (btnAtt) {\n      case '0':\n        toggleVisibility('home');\n        break;\n      case '1':\n        toggleVisibility('menu');\n        break;\n      case '2':\n        toggleVisibility('about');\n        break;\n      // No default needed if all cases are covered\n    }\n  }\n\n  // EVENT LISTENERS HERE\n  function setEventListeners() {\n    var navbar = document.getElementById('navbar');\n    navbar.addEventListener('click', handleNavBtnClick);\n  }\n  function init() {\n    setHomeBackground();\n    setNavBar();\n    _HomeModule__WEBPACK_IMPORTED_MODULE_5__.HomeModule.setHomeContent();\n    _MenuModule__WEBPACK_IMPORTED_MODULE_6__.MenuModule.setMenuContent();\n    _AboutModule__WEBPACK_IMPORTED_MODULE_7__.AboutModule.setAboutContent();\n    setEventListeners();\n  }\n  document.addEventListener('DOMContentLoaded', init);\n})();\n\n//# sourceURL=webpack://webpack-starter/./src/app.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./src/css/style.css?");

/***/ }),

/***/ "./src/assets/home-pg.png":
/*!********************************!*\
  !*** ./src/assets/home-pg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e47e63c7877a5625058.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/home-pg.png?");

/***/ }),

/***/ "./src/assets/ireine1.png":
/*!********************************!*\
  !*** ./src/assets/ireine1.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e15324013b68ab7d7853.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/ireine1.png?");

/***/ }),

/***/ "./src/assets/ireine2.png":
/*!********************************!*\
  !*** ./src/assets/ireine2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5358b38c3341b568386b.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/ireine2.png?");

/***/ }),

/***/ "./src/assets/ireine3.png":
/*!********************************!*\
  !*** ./src/assets/ireine3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"15768d223d125a35bfc0.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/assets/ireine3.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;