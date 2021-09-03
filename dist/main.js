/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Proza+Libre&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --raisin: #242124;\n  --skyblue: rgba(58, 134, 255, 0.4);\n  --ocean: #3a86ff;\n  --offwhite: #f9f9f9;\n  --lightred: rgb(230, 13, 13, 0.4);\n  --lightpink: rgb(231, 111, 111);\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n  height: 100%;\n  background: white;\n}\n* {\n  box-sizing: border-box;\n}\nheader {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  font-family: 'Proza Libre', sans-serif;\n  font-size: 25px;\n  font-weight: 700;\n  padding: 5px;\n  background-color: var(--raisin);\n  color: var(--offwhite);\n}\n.main-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.randomize {\n  margin-right: 0.5em;\n}\n.start {\n  margin-left: 0.5em;\n}\n.randomize,\n.start,\n.restart {\n  cursor: pointer;\n  font-family: lato, sans-serif;\n  font-weight: bold;\n  font-size: 1em;\n  letter-spacing: 0.1em;\n  text-decoration: none;\n  background: white;\n  color: black;\n  padding: 5px 7px 5px 7px;\n  border: 3px solid black;\n  border-radius: 20px;\n}\n.randomize:hover,\n.start:hover,\n.restart:hover {\n  background: black;\n  color: white;\n}\n.randomize:disabled,\n.start:disabled {\n  color: gray;\n  border: 1px solid;\n  pointer-events: none;\n}\n.game-proper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.message-log {\n  text-align: center;\n  margin-top: 0.5em;\n  border: 2px solid gray;\n  width: 30em;\n  padding: 1em 0 1em 0;\n}\n.mainboard {\n  display: flex;\n}\n.player-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1em;\n  margin-top: 1em;\n}\n.enemy-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1em;\n  margin-top: 1em;\n}\n.row {\n  display: flex;\n  height: 35px;\n}\n.column {\n  width: 35px;\n  margin: 0.5px;\n  border: 2px solid gray;\n  background: var(--offwhite);\n}\n.column:hover {\n  border: 2px solid gold;\n  cursor: pointer;\n}\n.playerboard .carrier,\n.playerboard .battleship,\n.playerboard .frigate,\n.playerboard .submarine,\n.playerboard .destroyer,\n.playerboard .tanker {\n  background-color: var(--skyblue);\n  border: 2px solid var(--ocean);\n}\n.hit {\n  background-color: var(--lightred);\n  border: 2px solid var(--lightpink);\n}\n.miss {\n  background: rgb(131, 131, 131, 0.5);\n  border: 1px solid white;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  text-align: center;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n.restart {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  * {\n    font-size: 12px;\n  }\n  .mainboard {\n    display: flex;\n    flex-direction: column;\n  }\n  .message-log {\n    width: 15em;\n  }\n  .row {\n    height: 30px;\n  }\n  .column {\n    width: 30px;\n  }\n  .randomize,\n  .start {\n    padding: 2px 4px 2px 4px;\n  }\n  .player-wrapper {\n    margin-left: 0;\n    margin-bottom: 10px;\n  }\n  .enemy-wrapper {\n    margin-right: 0;\n  }\n  .modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAGA;EACE,iBAAiB;EACjB,kCAAkC;EAClC,gBAAgB;EAChB,mBAAmB;EACnB,iCAAiC;EACjC,+BAA+B;AACjC;AACA;;EAEE,SAAS;EACT,UAAU;EACV,kCAAkC;EAClC,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,sCAAsC;EACtC,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,+BAA+B;EAC/B,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;;;EAGE,eAAe;EACf,6BAA6B;EAC7B,iBAAiB;EACjB,cAAc;EACd,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;;EAGE,iBAAiB;EACjB,YAAY;AACd;AACA;;EAEE,WAAW;EACX,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,WAAW;EACX,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,2BAA2B;AAC7B;AACA;EACE,sBAAsB;EACtB,eAAe;AACjB;AACA;;;;;;EAME,gCAAgC;EAChC,8BAA8B;AAChC;AACA;EACE,iCAAiC;EACjC,kCAAkC;AACpC;AACA;EACE,mCAAmC;EACnC,uBAAuB;AACzB;;AAEA;EACE,aAAa,EAAE,sBAAsB;EACrC,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,UAAU,EAAE,oDAAoD;AAClE;AACA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;EACA;;IAEE,wBAAwB;EAC1B;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa,EAAE,sBAAsB;IACrC,eAAe,EAAE,kBAAkB;IACnC,UAAU,EAAE,eAAe;IAC3B,OAAO;IACP,MAAM;IACN,WAAW,EAAE,eAAe;IAC5B,YAAY,EAAE,gBAAgB;IAC9B,cAAc,EAAE,4BAA4B;IAC5C,8BAA8B,EAAE,mBAAmB;IACnD,oCAAoC,EAAE,qBAAqB;EAC7D;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Proza+Libre&display=swap');\n\n:root {\n  --raisin: #242124;\n  --skyblue: rgba(58, 134, 255, 0.4);\n  --ocean: #3a86ff;\n  --offwhite: #f9f9f9;\n  --lightred: rgb(230, 13, 13, 0.4);\n  --lightpink: rgb(231, 111, 111);\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Poppins', sans-serif;\n  height: 100%;\n  background: white;\n}\n* {\n  box-sizing: border-box;\n}\nheader {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n  font-family: 'Proza Libre', sans-serif;\n  font-size: 25px;\n  font-weight: 700;\n  padding: 5px;\n  background-color: var(--raisin);\n  color: var(--offwhite);\n}\n.main-menu {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.randomize {\n  margin-right: 0.5em;\n}\n.start {\n  margin-left: 0.5em;\n}\n.randomize,\n.start,\n.restart {\n  cursor: pointer;\n  font-family: lato, sans-serif;\n  font-weight: bold;\n  font-size: 1em;\n  letter-spacing: 0.1em;\n  text-decoration: none;\n  background: white;\n  color: black;\n  padding: 5px 7px 5px 7px;\n  border: 3px solid black;\n  border-radius: 20px;\n}\n.randomize:hover,\n.start:hover,\n.restart:hover {\n  background: black;\n  color: white;\n}\n.randomize:disabled,\n.start:disabled {\n  color: gray;\n  border: 1px solid;\n  pointer-events: none;\n}\n.game-proper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.message-log {\n  text-align: center;\n  margin-top: 0.5em;\n  border: 2px solid gray;\n  width: 30em;\n  padding: 1em 0 1em 0;\n}\n.mainboard {\n  display: flex;\n}\n.player-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1em;\n  margin-top: 1em;\n}\n.enemy-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1em;\n  margin-top: 1em;\n}\n.row {\n  display: flex;\n  height: 35px;\n}\n.column {\n  width: 35px;\n  margin: 0.5px;\n  border: 2px solid gray;\n  background: var(--offwhite);\n}\n.column:hover {\n  border: 2px solid gold;\n  cursor: pointer;\n}\n.playerboard .carrier,\n.playerboard .battleship,\n.playerboard .frigate,\n.playerboard .submarine,\n.playerboard .destroyer,\n.playerboard .tanker {\n  background-color: var(--skyblue);\n  border: 2px solid var(--ocean);\n}\n.hit {\n  background-color: var(--lightred);\n  border: 2px solid var(--lightpink);\n}\n.miss {\n  background: rgb(131, 131, 131, 0.5);\n  border: 1px solid white;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n/* Modal Content/Box */\n.modal-content {\n  text-align: center;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; /* Could be more or less, depending on screen size */\n}\n.restart {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  * {\n    font-size: 12px;\n  }\n  .mainboard {\n    display: flex;\n    flex-direction: column;\n  }\n  .message-log {\n    width: 15em;\n  }\n  .row {\n    height: 30px;\n  }\n  .column {\n    width: 30px;\n  }\n  .randomize,\n  .start {\n    padding: 2px 4px 2px 4px;\n  }\n  .player-wrapper {\n    margin-left: 0;\n    margin-bottom: 10px;\n  }\n  .enemy-wrapper {\n    margin-right: 0;\n  }\n  .modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/factories/gameboardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/gameboardFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable consistent-return */
const gameboardFactory = () => {
  const shipNames = [
    'carrier',
    'battleship',
    'frigate',
    'submarine',
    'destroyer',
    'tanker',
  ];
  const shipArray = [];

  const board = Array(10) // make 10x10
    .fill(0)
    .map(() => Array(10).fill(0));

  const getBoard = () => board;

  const checkOverlaps = (x, y, ship) => {
    const xBoard = board[x].filter((square, index) =>
      index >= y && index <= y + ship.length ? square : ''
    );
    let yBoard = [];
    for (let i = 0; i < 10; i++) {
      yBoard.push(board[i][y]);
    }
    yBoard = yBoard.filter((square, index) =>
      index >= x && index <= x + ship.length ? square : ''
    );
    if (ship.axis === false) return !xBoard.every((square) => square === 0);
    if (ship.axis === true) return !yBoard.every((square) => square === 0);
  };

  const checkOutofBounds = (x, y, length) => x + length > 10 || y + length > 10;

  const placeShip = (ship, x, y) => {
    if (shipArray.length <= 5) {
      // check if all 5 ships are placed
      if (checkOutofBounds(x, y, ship.length)) return 'Out of Bounds';
      if (checkOverlaps(x, y, ship)) return 'Overlaps another ship';
      for (let i = 0; i < ship.length; i++) {
        if (ship.axis === false) board[x][y + i] = ship.name;
        else if (ship.axis === true) board[x + i][y] = ship.name;
      }
      shipArray.push(ship);
    }
    return board;
  };

  const getLengthFromArray = (mark) => {
    if (mark === 'carrier') return 6;
    if (mark === 'battleship') return 5;
    if (mark === 'frigate') return 4;
    if (mark === 'submarine') return 3;
    if (mark === 'destroyer') return 2;
    if (mark === 'tanker') return 1;
  };

  // const checkWinner = (damagedShip) => {
  //   if (damagedShip.isSunk()) {
  //     const index = shipArray.findIndex((ship) => ship === damagedShip);
  //     shipArray.splice(index, 1);
  //   }
  //   return shipArray.length === 0;
  // };

  const getTargetShip = (x, y, mark) => {
    // const mark = shipNames.find((name) => name === target);
    // target = mark;
    const damagedShip = shipArray.find(
      (ship) => ship.length === getLengthFromArray(mark)
    );
    damagedShip.hit();
  };
  const fireMissile = (x, y) => {
    if (board[x][y] === 'hit' || board[x][y] === 'miss') return 'invalid';
    if (board[x][y] === 0) {
      board[x][y] = 'miss';
      return 'miss';
    }
    if (shipNames.includes(board[x][y])) {
      const mark = shipNames.find((name) => name === board[x][y]);
      getTargetShip(x, y, mark);
      board[x][y] = 'hit';
      return 'hit';
    }
  };

  return { getBoard, placeShip, fireMissile, shipArray };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);


/***/ }),

/***/ "./src/factories/playerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/playerFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playerFactory = (name, board) => {
  const playerTurn = true;

  const getName = () => name;

  const startGameboard = () => board;

  return { playerTurn, getName, startGameboard };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerFactory);


/***/ }),

/***/ "./src/factories/shipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/shipFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shipFactory = (length) => {
  // carrier [5], battleship[4], cruiser[3], submarine[2], destroyer[1]
  let name = '';

  switch (length) {
    case 6:
      name = 'carrier';
      break;
    case 5:
      name = 'battleship';
      break;
    case 4:
      name = 'frigate';
      break;
    case 3:
      name = 'submarine';
      break;
    case 2:
      name = 'destroyer';
      break;
    case 1:
      name = 'tanker';
      break;
    default:
      name = '';
  }

  if (length === undefined || length === 0) return 'Length cannot be 0';
  const axis = false; // false is horizontal axis

  const shipHP = new Array(length).fill('o'); // Ship life depending on length

  const isRotated = (rotation) => {
    if (rotation) return !axis;
    return axis;
  }; // change rotation

  const hit = () => {
    shipHP.pop();
  };

  const isSunk = () => shipHP.length === 0;

  return { length, isRotated, hit, isSunk, shipHP, axis, name };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);


/***/ }),

/***/ "./src/modules/checkWinner.js":
/*!************************************!*\
  !*** ./src/modules/checkWinner.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkWinner = (user) => user.shipArray.every((ship) => ship.isSunk());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWinner);


/***/ }),

/***/ "./src/modules/getAndSetShips.js":
/*!***************************************!*\
  !*** ./src/modules/getAndSetShips.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/shipFactory */ "./src/factories/shipFactory.js");


const getAndSetShips = (user) => {
  const placedShips = [];
  const rotation = [true, false];
  let i = 1;
  while (placedShips.length < 6) {
    const currentShip = (0,_factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__.default)(i);
    currentShip.axis = rotation[Math.round(Math.random())];
    const testShip = user.placeShip(
      currentShip,
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    );
    if (testShip !== 'Out of Bounds' && testShip !== 'Overlaps another ship') {
      placedShips.push(currentShip);
      i++;
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAndSetShips);


/***/ }),

/***/ "./src/modules/getRandomNumber.js":
/*!****************************************!*\
  !*** ./src/modules/getRandomNumber.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRandomNumber = () => Math.floor(Math.random() * 10);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomNumber);


/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const render = (player, enemy) => {
  const playerBoardEl = document.querySelector('.playerboard');
  const enemyBoardEl = document.querySelector('.enemyboard');

  const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };

  clearElement(playerBoardEl);
  clearElement(enemyBoardEl);

  player.getBoard().forEach((row, xIndex) => {
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('row', `${xIndex}`);
    row.forEach((column, yIndex) => {
      const columnBlock = document.createElement('div');
      columnBlock.classList.add('column', `${yIndex}`);
      if (column !== '0') columnBlock.classList.add(column);
      rowBlock.appendChild(columnBlock);
    });
    playerBoardEl.appendChild(rowBlock);
  });

  enemy.getBoard().forEach((row, xIndex) => {
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('enemy', 'row', `${xIndex}`);
    row.forEach((column, yIndex) => {
      const columnBlock = document.createElement('div');
      columnBlock.classList.add('enemy', 'column', `${yIndex}`);
      if (column !== '0') columnBlock.classList.add(column);
      rowBlock.appendChild(columnBlock);
    });
    enemyBoardEl.appendChild(rowBlock);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/playerFactory */ "./src/factories/playerFactory.js");
/* harmony import */ var _factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/gameboardFactory */ "./src/factories/gameboardFactory.js");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");
/* harmony import */ var _modules_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getAndSetShips */ "./src/modules/getAndSetShips.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_getRandomNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getRandomNumber */ "./src/modules/getRandomNumber.js");
/* harmony import */ var _modules_checkWinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkWinner */ "./src/modules/checkWinner.js");








let player;
let enemy;
const messageEl = document.querySelector('.message-log');
const randomizeButton = document.querySelector('.randomize');
const startButton = document.querySelector('.start');
const modal = document.getElementById('game-over');
const modalText = document.querySelector('.last-message');
const restartButton = document.querySelector('.restart');

const randomizePlacement = () => {
  player = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.default)('you', (0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.default)()).startGameboard();
  enemy = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.default)('enemy', (0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.default)()).startGameboard();
  (0,_modules_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__.default)(player);
  (0,_modules_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__.default)(enemy);
  (0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.default)(player, enemy);
  messageEl.textContent =
    'Click: Randomize to re-place ships. Start Game to begin!';
};

// # initial render #
randomizePlacement();

const updateMessage = (state) => {
  if (state === 'miss') {
    messageEl.textContent = 'You missed! Try again.';
  }
  if (state === 'hit') messageEl.textContent = 'You hit a Ship, nice!';
};

// # recursion if random (x,y) is not valid #
const enemyTurn = () => {
  const x = (0,_modules_getRandomNumber__WEBPACK_IMPORTED_MODULE_5__.default)();
  const y = (0,_modules_getRandomNumber__WEBPACK_IMPORTED_MODULE_5__.default)();
  if (player.getBoard()[x][y] === 'miss' || player.getBoard()[x][y] === 'hit') {
    enemyTurn();
  }
  return player.fireMissile(x, y);
};

// eslint-disable-next-line consistent-return
const playerTurn = (e) => {
  const a = Number(e.target.parentNode.classList[2]);
  const b = Number(e.target.classList[2]);
  if (enemy.getBoard()[a][b] !== 'miss' && enemy.getBoard()[a][b] !== 'hit') {
    enemy.fireMissile(a, b);
    updateMessage(enemy.getBoard()[a][b]);
  } else return 'invalid';
};

// play 1 round. fire missile to enemy, enemy fires to player
const playRound = (e) => {
  if (playerTurn(e) === 'invalid') {
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  } else {
    enemyTurn();
    (0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.default)(player, enemy);
    if ((0,_modules_checkWinner__WEBPACK_IMPORTED_MODULE_6__.default)(enemy)) {
      messageEl.textContent = 'You win!';
      modalText.textContent =
        'Game Over! You destroyed all enemy ships. You Win!';
      modal.style.display = 'block';
    }
    if ((0,_modules_checkWinner__WEBPACK_IMPORTED_MODULE_6__.default)(player)) {
      messageEl.textContent = 'Enemy Wins!';
      modalText.textContent =
        'Game Over! Enemy destroyed all your ships! Enemy Wins!';
      modal.style.display = 'block';
    }
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  }
};

const startGame = () => {
  randomizeButton.disabled = true;
  startButton.disabled = true;
  messageEl.textContent = 'Game Start! Click a Square in the Enemy Board!';
  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

randomizeButton.addEventListener('click', randomizePlacement);
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', () => {
  modal.style.display = 'none';
  randomizeButton.disabled = false;
  startButton.disabled = false;
  randomizePlacement();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9tb2R1bGVzL2NoZWNrV2lubmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9tb2R1bGVzL2dldEFuZFNldFNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9tb2R1bGVzL2dldFJhbmRvbU51bWJlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHFIQUFxSDtBQUNySCx5SEFBeUg7QUFDekg7QUFDQSxpREFBaUQsc0JBQXNCLHVDQUF1QyxxQkFBcUIsd0JBQXdCLHNDQUFzQyxvQ0FBb0MsR0FBRyxlQUFlLGNBQWMsZUFBZSx1Q0FBdUMsaUJBQWlCLHNCQUFzQixHQUFHLEtBQUssMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0Isd0JBQXdCLGdCQUFnQiw0QkFBNEIsMkNBQTJDLG9CQUFvQixxQkFBcUIsaUJBQWlCLG9DQUFvQywy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QU07QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksaUVBQWU7QUFDM0IsWUFBWSxpRUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxJQUFJLHdEQUFNO0FBQ1YsUUFBUSw2REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb3phK0xpYnJlJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcmFpc2luOiAjMjQyMTI0O1xcbiAgLS1za3libHVlOiByZ2JhKDU4LCAxMzQsIDI1NSwgMC40KTtcXG4gIC0tb2NlYW46ICMzYTg2ZmY7XFxuICAtLW9mZndoaXRlOiAjZjlmOWY5O1xcbiAgLS1saWdodHJlZDogcmdiKDIzMCwgMTMsIDEzLCAwLjQpO1xcbiAgLS1saWdodHBpbms6IHJnYigyMzEsIDExMSwgMTExKTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUHJvemEgTGlicmUnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhaXNpbik7XFxuICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbn1cXG4ubWFpbi1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yYW5kb21pemUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuLnN0YXJ0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuLnJhbmRvbWl6ZSxcXG4uc3RhcnQsXFxuLnJlc3RhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1cHggN3B4IDVweCA3cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5yYW5kb21pemU6aG92ZXIsXFxuLnN0YXJ0OmhvdmVyLFxcbi5yZXN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucmFuZG9taXplOmRpc2FibGVkLFxcbi5zdGFydDpkaXNhYmxlZCB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5nYW1lLXByb3BlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1lc3NhZ2UtbG9nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgcGFkZGluZzogMWVtIDAgMWVtIDA7XFxufVxcbi5tYWluYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnBsYXllci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmVuZW15LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY29sdW1uIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgbWFyZ2luOiAwLjVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vZmZ3aGl0ZSk7XFxufVxcbi5jb2x1bW46aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBsYXllcmJvYXJkIC5jYXJyaWVyLFxcbi5wbGF5ZXJib2FyZCAuYmF0dGxlc2hpcCxcXG4ucGxheWVyYm9hcmQgLmZyaWdhdGUsXFxuLnBsYXllcmJvYXJkIC5zdWJtYXJpbmUsXFxuLnBsYXllcmJvYXJkIC5kZXN0cm95ZXIsXFxuLnBsYXllcmJvYXJkIC50YW5rZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Ymx1ZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vY2Vhbik7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRyZWQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRwaW5rKTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMSwgMTMxLCAxMzEsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuLnJlc3RhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICoge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAubWFpbmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tZXNzYWdlLWxvZyB7XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgfVxcbiAgLnJvdyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5jb2x1bW4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gIH1cXG4gIC5yYW5kb21pemUsXFxuICAuc3RhcnQge1xcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XFxuICB9XFxuICAucGxheWVyLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC5lbmVteS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMsK0JBQStCO0FBQ2pDO0FBQ0E7O0VBRUUsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOzs7RUFHRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7OztFQUdFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7Ozs7OztFQU1FLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGNBQWMsRUFBRSw0QkFBNEI7RUFDNUMsOEJBQThCLEVBQUUsbUJBQW1CO0VBQ25ELG9DQUFvQyxFQUFFLHFCQUFxQjtBQUM3RDs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztFQUNwRCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVUsRUFBRSxvREFBb0Q7QUFDbEU7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTs7SUFFRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7SUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0VBQzdEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qcm96YStMaWJyZSZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAtLXJhaXNpbjogIzI0MjEyNDtcXG4gIC0tc2t5Ymx1ZTogcmdiYSg1OCwgMTM0LCAyNTUsIDAuNCk7XFxuICAtLW9jZWFuOiAjM2E4NmZmO1xcbiAgLS1vZmZ3aGl0ZTogI2Y5ZjlmOTtcXG4gIC0tbGlnaHRyZWQ6IHJnYigyMzAsIDEzLCAxMywgMC40KTtcXG4gIC0tbGlnaHRwaW5rOiByZ2IoMjMxLCAxMTEsIDExMSk7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1Byb3phIExpYnJlJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yYWlzaW4pO1xcbiAgY29sb3I6IHZhcigtLW9mZndoaXRlKTtcXG59XFxuLm1haW4tbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucmFuZG9taXplIHtcXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcbi5zdGFydCB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcbi5yYW5kb21pemUsXFxuLnN0YXJ0LFxcbi5yZXN0YXJ0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBsYXRvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogNXB4IDdweCA1cHggN3B4O1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ucmFuZG9taXplOmhvdmVyLFxcbi5zdGFydDpob3ZlcixcXG4ucmVzdGFydDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnJhbmRvbWl6ZTpkaXNhYmxlZCxcXG4uc3RhcnQ6ZGlzYWJsZWQge1xcbiAgY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZ2FtZS1wcm9wZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tZXNzYWdlLWxvZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICB3aWR0aDogMzBlbTtcXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xcbn1cXG4ubWFpbmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wbGF5ZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5lbmVteS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICBtYXJnaW4tdG9wOiAxZW07XFxufVxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmNvbHVtbiB7XFxuICB3aWR0aDogMzVweDtcXG4gIG1hcmdpbjogMC41cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tb2Zmd2hpdGUpO1xcbn1cXG4uY29sdW1uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5wbGF5ZXJib2FyZCAuY2FycmllcixcXG4ucGxheWVyYm9hcmQgLmJhdHRsZXNoaXAsXFxuLnBsYXllcmJvYXJkIC5mcmlnYXRlLFxcbi5wbGF5ZXJib2FyZCAuc3VibWFyaW5lLFxcbi5wbGF5ZXJib2FyZCAuZGVzdHJveWVyLFxcbi5wbGF5ZXJib2FyZCAudGFua2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreWJsdWUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tb2NlYW4pO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0cmVkKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0cGluayk7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzEsIDEzMSwgMTMxLCAwLjUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxufVxcbi5yZXN0YXJ0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAqIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcbiAgLm1haW5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAubWVzc2FnZS1sb2cge1xcbiAgICB3aWR0aDogMTVlbTtcXG4gIH1cXG4gIC5yb3cge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICB9XFxuICAuY29sdW1uIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICB9XFxuICAucmFuZG9taXplLFxcbiAgLnN0YXJ0IHtcXG4gICAgcGFkZGluZzogMnB4IDRweCAycHggNHB4O1xcbiAgfVxcbiAgLnBsYXllci13cmFwcGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxuICAuZW5lbXktd3JhcHBlciB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gIH1cXG4gIC5tb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgICAnY2FycmllcicsXG4gICAgJ2JhdHRsZXNoaXAnLFxuICAgICdmcmlnYXRlJyxcbiAgICAnc3VibWFyaW5lJyxcbiAgICAnZGVzdHJveWVyJyxcbiAgICAndGFua2VyJyxcbiAgXTtcbiAgY29uc3Qgc2hpcEFycmF5ID0gW107XG5cbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMCkgLy8gbWFrZSAxMHgxMFxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgwKSk7XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCBjaGVja092ZXJsYXBzID0gKHgsIHksIHNoaXApID0+IHtcbiAgICBjb25zdCB4Qm9hcmQgPSBib2FyZFt4XS5maWx0ZXIoKHNxdWFyZSwgaW5kZXgpID0+XG4gICAgICBpbmRleCA+PSB5ICYmIGluZGV4IDw9IHkgKyBzaGlwLmxlbmd0aCA/IHNxdWFyZSA6ICcnXG4gICAgKTtcbiAgICBsZXQgeUJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICB5Qm9hcmQucHVzaChib2FyZFtpXVt5XSk7XG4gICAgfVxuICAgIHlCb2FyZCA9IHlCb2FyZC5maWx0ZXIoKHNxdWFyZSwgaW5kZXgpID0+XG4gICAgICBpbmRleCA+PSB4ICYmIGluZGV4IDw9IHggKyBzaGlwLmxlbmd0aCA/IHNxdWFyZSA6ICcnXG4gICAgKTtcbiAgICBpZiAoc2hpcC5heGlzID09PSBmYWxzZSkgcmV0dXJuICF4Qm9hcmQuZXZlcnkoKHNxdWFyZSkgPT4gc3F1YXJlID09PSAwKTtcbiAgICBpZiAoc2hpcC5heGlzID09PSB0cnVlKSByZXR1cm4gIXlCb2FyZC5ldmVyeSgoc3F1YXJlKSA9PiBzcXVhcmUgPT09IDApO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrT3V0b2ZCb3VuZHMgPSAoeCwgeSwgbGVuZ3RoKSA9PiB4ICsgbGVuZ3RoID4gMTAgfHwgeSArIGxlbmd0aCA+IDEwO1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCB4LCB5KSA9PiB7XG4gICAgaWYgKHNoaXBBcnJheS5sZW5ndGggPD0gNSkge1xuICAgICAgLy8gY2hlY2sgaWYgYWxsIDUgc2hpcHMgYXJlIHBsYWNlZFxuICAgICAgaWYgKGNoZWNrT3V0b2ZCb3VuZHMoeCwgeSwgc2hpcC5sZW5ndGgpKSByZXR1cm4gJ091dCBvZiBCb3VuZHMnO1xuICAgICAgaWYgKGNoZWNrT3ZlcmxhcHMoeCwgeSwgc2hpcCkpIHJldHVybiAnT3ZlcmxhcHMgYW5vdGhlciBzaGlwJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2hpcC5heGlzID09PSBmYWxzZSkgYm9hcmRbeF1beSArIGldID0gc2hpcC5uYW1lO1xuICAgICAgICBlbHNlIGlmIChzaGlwLmF4aXMgPT09IHRydWUpIGJvYXJkW3ggKyBpXVt5XSA9IHNoaXAubmFtZTtcbiAgICAgIH1cbiAgICAgIHNoaXBBcnJheS5wdXNoKHNoaXApO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuZ3RoRnJvbUFycmF5ID0gKG1hcmspID0+IHtcbiAgICBpZiAobWFyayA9PT0gJ2NhcnJpZXInKSByZXR1cm4gNjtcbiAgICBpZiAobWFyayA9PT0gJ2JhdHRsZXNoaXAnKSByZXR1cm4gNTtcbiAgICBpZiAobWFyayA9PT0gJ2ZyaWdhdGUnKSByZXR1cm4gNDtcbiAgICBpZiAobWFyayA9PT0gJ3N1Ym1hcmluZScpIHJldHVybiAzO1xuICAgIGlmIChtYXJrID09PSAnZGVzdHJveWVyJykgcmV0dXJuIDI7XG4gICAgaWYgKG1hcmsgPT09ICd0YW5rZXInKSByZXR1cm4gMTtcbiAgfTtcblxuICAvLyBjb25zdCBjaGVja1dpbm5lciA9IChkYW1hZ2VkU2hpcCkgPT4ge1xuICAvLyAgIGlmIChkYW1hZ2VkU2hpcC5pc1N1bmsoKSkge1xuICAvLyAgICAgY29uc3QgaW5kZXggPSBzaGlwQXJyYXkuZmluZEluZGV4KChzaGlwKSA9PiBzaGlwID09PSBkYW1hZ2VkU2hpcCk7XG4gIC8vICAgICBzaGlwQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIHNoaXBBcnJheS5sZW5ndGggPT09IDA7XG4gIC8vIH07XG5cbiAgY29uc3QgZ2V0VGFyZ2V0U2hpcCA9ICh4LCB5LCBtYXJrKSA9PiB7XG4gICAgLy8gY29uc3QgbWFyayA9IHNoaXBOYW1lcy5maW5kKChuYW1lKSA9PiBuYW1lID09PSB0YXJnZXQpO1xuICAgIC8vIHRhcmdldCA9IG1hcms7XG4gICAgY29uc3QgZGFtYWdlZFNoaXAgPSBzaGlwQXJyYXkuZmluZChcbiAgICAgIChzaGlwKSA9PiBzaGlwLmxlbmd0aCA9PT0gZ2V0TGVuZ3RoRnJvbUFycmF5KG1hcmspXG4gICAgKTtcbiAgICBkYW1hZ2VkU2hpcC5oaXQoKTtcbiAgfTtcbiAgY29uc3QgZmlyZU1pc3NpbGUgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gJ2hpdCcgfHwgYm9hcmRbeF1beV0gPT09ICdtaXNzJykgcmV0dXJuICdpbnZhbGlkJztcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09IDApIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ21pc3MnO1xuICAgICAgcmV0dXJuICdtaXNzJztcbiAgICB9XG4gICAgaWYgKHNoaXBOYW1lcy5pbmNsdWRlcyhib2FyZFt4XVt5XSkpIHtcbiAgICAgIGNvbnN0IG1hcmsgPSBzaGlwTmFtZXMuZmluZCgobmFtZSkgPT4gbmFtZSA9PT0gYm9hcmRbeF1beV0pO1xuICAgICAgZ2V0VGFyZ2V0U2hpcCh4LCB5LCBtYXJrKTtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ2hpdCc7XG4gICAgICByZXR1cm4gJ2hpdCc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldEJvYXJkLCBwbGFjZVNoaXAsIGZpcmVNaXNzaWxlLCBzaGlwQXJyYXkgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZEZhY3Rvcnk7XG4iLCJjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKG5hbWUsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IHBsYXllclR1cm4gPSB0cnVlO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IHN0YXJ0R2FtZWJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgcmV0dXJuIHsgcGxheWVyVHVybiwgZ2V0TmFtZSwgc3RhcnRHYW1lYm9hcmQgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllckZhY3Rvcnk7XG4iLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgLy8gY2FycmllciBbNV0sIGJhdHRsZXNoaXBbNF0sIGNydWlzZXJbM10sIHN1Ym1hcmluZVsyXSwgZGVzdHJveWVyWzFdXG4gIGxldCBuYW1lID0gJyc7XG5cbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDY6XG4gICAgICBuYW1lID0gJ2NhcnJpZXInO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgbmFtZSA9ICdiYXR0bGVzaGlwJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIG5hbWUgPSAnZnJpZ2F0ZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBuYW1lID0gJ3N1Ym1hcmluZSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBuYW1lID0gJ2Rlc3Ryb3llcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDE6XG4gICAgICBuYW1lID0gJ3Rhbmtlcic7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbmFtZSA9ICcnO1xuICB9XG5cbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA9PT0gMCkgcmV0dXJuICdMZW5ndGggY2Fubm90IGJlIDAnO1xuICBjb25zdCBheGlzID0gZmFsc2U7IC8vIGZhbHNlIGlzIGhvcml6b250YWwgYXhpc1xuXG4gIGNvbnN0IHNoaXBIUCA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoJ28nKTsgLy8gU2hpcCBsaWZlIGRlcGVuZGluZyBvbiBsZW5ndGhcblxuICBjb25zdCBpc1JvdGF0ZWQgPSAocm90YXRpb24pID0+IHtcbiAgICBpZiAocm90YXRpb24pIHJldHVybiAhYXhpcztcbiAgICByZXR1cm4gYXhpcztcbiAgfTsgLy8gY2hhbmdlIHJvdGF0aW9uXG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIHNoaXBIUC5wb3AoKTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwSFAubGVuZ3RoID09PSAwO1xuXG4gIHJldHVybiB7IGxlbmd0aCwgaXNSb3RhdGVkLCBoaXQsIGlzU3Vuaywgc2hpcEhQLCBheGlzLCBuYW1lIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3Rvcnk7XG4iLCJjb25zdCBjaGVja1dpbm5lciA9ICh1c2VyKSA9PiB1c2VyLnNoaXBBcnJheS5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrV2lubmVyO1xuIiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4uL2ZhY3Rvcmllcy9zaGlwRmFjdG9yeSc7XG5cbmNvbnN0IGdldEFuZFNldFNoaXBzID0gKHVzZXIpID0+IHtcbiAgY29uc3QgcGxhY2VkU2hpcHMgPSBbXTtcbiAgY29uc3Qgcm90YXRpb24gPSBbdHJ1ZSwgZmFsc2VdO1xuICBsZXQgaSA9IDE7XG4gIHdoaWxlIChwbGFjZWRTaGlwcy5sZW5ndGggPCA2KSB7XG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwRmFjdG9yeShpKTtcbiAgICBjdXJyZW50U2hpcC5heGlzID0gcm90YXRpb25bTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV07XG4gICAgY29uc3QgdGVzdFNoaXAgPSB1c2VyLnBsYWNlU2hpcChcbiAgICAgIGN1cnJlbnRTaGlwLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMClcbiAgICApO1xuICAgIGlmICh0ZXN0U2hpcCAhPT0gJ091dCBvZiBCb3VuZHMnICYmIHRlc3RTaGlwICE9PSAnT3ZlcmxhcHMgYW5vdGhlciBzaGlwJykge1xuICAgICAgcGxhY2VkU2hpcHMucHVzaChjdXJyZW50U2hpcCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0QW5kU2V0U2hpcHM7XG4iLCJjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhbmRvbU51bWJlcjtcbiIsImNvbnN0IHJlbmRlciA9IChwbGF5ZXIsIGVuZW15KSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyYm9hcmQnKTtcbiAgY29uc3QgZW5lbXlCb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15Ym9hcmQnKTtcblxuICBjb25zdCBjbGVhckVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJFbGVtZW50KHBsYXllckJvYXJkRWwpO1xuICBjbGVhckVsZW1lbnQoZW5lbXlCb2FyZEVsKTtcblxuICBwbGF5ZXIuZ2V0Qm9hcmQoKS5mb3JFYWNoKChyb3csIHhJbmRleCkgPT4ge1xuICAgIGNvbnN0IHJvd0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93QmxvY2suY2xhc3NMaXN0LmFkZCgncm93JywgYCR7eEluZGV4fWApO1xuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIHlJbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sdW1uQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbHVtbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicsIGAke3lJbmRleH1gKTtcbiAgICAgIGlmIChjb2x1bW4gIT09ICcwJykgY29sdW1uQmxvY2suY2xhc3NMaXN0LmFkZChjb2x1bW4pO1xuICAgICAgcm93QmxvY2suYXBwZW5kQ2hpbGQoY29sdW1uQmxvY2spO1xuICAgIH0pO1xuICAgIHBsYXllckJvYXJkRWwuYXBwZW5kQ2hpbGQocm93QmxvY2spO1xuICB9KTtcblxuICBlbmVteS5nZXRCb2FyZCgpLmZvckVhY2goKHJvdywgeEluZGV4KSA9PiB7XG4gICAgY29uc3Qgcm93QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dCbG9jay5jbGFzc0xpc3QuYWRkKCdlbmVteScsICdyb3cnLCBgJHt4SW5kZXh9YCk7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgeUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29sdW1uQmxvY2suY2xhc3NMaXN0LmFkZCgnZW5lbXknLCAnY29sdW1uJywgYCR7eUluZGV4fWApO1xuICAgICAgaWYgKGNvbHVtbiAhPT0gJzAnKSBjb2x1bW5CbG9jay5jbGFzc0xpc3QuYWRkKGNvbHVtbik7XG4gICAgICByb3dCbG9jay5hcHBlbmRDaGlsZChjb2x1bW5CbG9jayk7XG4gICAgfSk7XG4gICAgZW5lbXlCb2FyZEVsLmFwcGVuZENoaWxkKHJvd0Jsb2NrKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL3BsYXllckZhY3RvcnknO1xuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvZ2FtZWJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbW9kdWxlcy9yZW5kZXInO1xuaW1wb3J0IGdldEFuZFNldFNoaXBzIGZyb20gJy4vbW9kdWxlcy9nZXRBbmRTZXRTaGlwcyc7XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0UmFuZG9tTnVtYmVyIGZyb20gJy4vbW9kdWxlcy9nZXRSYW5kb21OdW1iZXInO1xuaW1wb3J0IGNoZWNrV2lubmVyIGZyb20gJy4vbW9kdWxlcy9jaGVja1dpbm5lcic7XG5cbmxldCBwbGF5ZXI7XG5sZXQgZW5lbXk7XG5jb25zdCBtZXNzYWdlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS1sb2cnKTtcbmNvbnN0IHJhbmRvbWl6ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb21pemUnKTtcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKTtcbmNvbnN0IG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKTtcbmNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuXG5jb25zdCByYW5kb21pemVQbGFjZW1lbnQgPSAoKSA9PiB7XG4gIHBsYXllciA9IHBsYXllckZhY3RvcnkoJ3lvdScsIGdhbWVib2FyZEZhY3RvcnkoKSkuc3RhcnRHYW1lYm9hcmQoKTtcbiAgZW5lbXkgPSBwbGF5ZXJGYWN0b3J5KCdlbmVteScsIGdhbWVib2FyZEZhY3RvcnkoKSkuc3RhcnRHYW1lYm9hcmQoKTtcbiAgZ2V0QW5kU2V0U2hpcHMocGxheWVyKTtcbiAgZ2V0QW5kU2V0U2hpcHMoZW5lbXkpO1xuICByZW5kZXIocGxheWVyLCBlbmVteSk7XG4gIG1lc3NhZ2VFbC50ZXh0Q29udGVudCA9XG4gICAgJ0NsaWNrOiBSYW5kb21pemUgdG8gcmUtcGxhY2Ugc2hpcHMuIFN0YXJ0IEdhbWUgdG8gYmVnaW4hJztcbn07XG5cbi8vICMgaW5pdGlhbCByZW5kZXIgI1xucmFuZG9taXplUGxhY2VtZW50KCk7XG5cbmNvbnN0IHVwZGF0ZU1lc3NhZ2UgPSAoc3RhdGUpID0+IHtcbiAgaWYgKHN0YXRlID09PSAnbWlzcycpIHtcbiAgICBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSAnWW91IG1pc3NlZCEgVHJ5IGFnYWluLic7XG4gIH1cbiAgaWYgKHN0YXRlID09PSAnaGl0JykgbWVzc2FnZUVsLnRleHRDb250ZW50ID0gJ1lvdSBoaXQgYSBTaGlwLCBuaWNlISc7XG59O1xuXG4vLyAjIHJlY3Vyc2lvbiBpZiByYW5kb20gKHgseSkgaXMgbm90IHZhbGlkICNcbmNvbnN0IGVuZW15VHVybiA9ICgpID0+IHtcbiAgY29uc3QgeCA9IGdldFJhbmRvbU51bWJlcigpO1xuICBjb25zdCB5ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKVt4XVt5XSA9PT0gJ21pc3MnIHx8IHBsYXllci5nZXRCb2FyZCgpW3hdW3ldID09PSAnaGl0Jykge1xuICAgIGVuZW15VHVybigpO1xuICB9XG4gIHJldHVybiBwbGF5ZXIuZmlyZU1pc3NpbGUoeCwgeSk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmNvbnN0IHBsYXllclR1cm4gPSAoZSkgPT4ge1xuICBjb25zdCBhID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0WzJdKTtcbiAgY29uc3QgYiA9IE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbMl0pO1xuICBpZiAoZW5lbXkuZ2V0Qm9hcmQoKVthXVtiXSAhPT0gJ21pc3MnICYmIGVuZW15LmdldEJvYXJkKClbYV1bYl0gIT09ICdoaXQnKSB7XG4gICAgZW5lbXkuZmlyZU1pc3NpbGUoYSwgYik7XG4gICAgdXBkYXRlTWVzc2FnZShlbmVteS5nZXRCb2FyZCgpW2FdW2JdKTtcbiAgfSBlbHNlIHJldHVybiAnaW52YWxpZCc7XG59O1xuXG4vLyBwbGF5IDEgcm91bmQuIGZpcmUgbWlzc2lsZSB0byBlbmVteSwgZW5lbXkgZmlyZXMgdG8gcGxheWVyXG5jb25zdCBwbGF5Um91bmQgPSAoZSkgPT4ge1xuICBpZiAocGxheWVyVHVybihlKSA9PT0gJ2ludmFsaWQnKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LmNvbHVtbicpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgY29sLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJvdW5kKTtcbiAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSb3VuZCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZW5lbXlUdXJuKCk7XG4gICAgcmVuZGVyKHBsYXllciwgZW5lbXkpO1xuICAgIGlmIChjaGVja1dpbm5lcihlbmVteSkpIHtcbiAgICAgIG1lc3NhZ2VFbC50ZXh0Q29udGVudCA9ICdZb3Ugd2luISc7XG4gICAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPVxuICAgICAgICAnR2FtZSBPdmVyISBZb3UgZGVzdHJveWVkIGFsbCBlbmVteSBzaGlwcy4gWW91IFdpbiEnO1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIGlmIChjaGVja1dpbm5lcihwbGF5ZXIpKSB7XG4gICAgICBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSAnRW5lbXkgV2lucyEnO1xuICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgJ0dhbWUgT3ZlciEgRW5lbXkgZGVzdHJveWVkIGFsbCB5b3VyIHNoaXBzISBFbmVteSBXaW5zISc7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LmNvbHVtbicpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgY29sLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJvdW5kKTtcbiAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSb3VuZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgcmFuZG9taXplQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgc3RhcnRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSAnR2FtZSBTdGFydCEgQ2xpY2sgYSBTcXVhcmUgaW4gdGhlIEVuZW15IEJvYXJkISc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS5jb2x1bW4nKS5mb3JFYWNoKChjb2wpID0+IHtcbiAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5Um91bmQpO1xuICB9KTtcbn07XG5cbnJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZVBsYWNlbWVudCk7XG5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByYW5kb21pemVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgc3RhcnRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgcmFuZG9taXplUGxhY2VtZW50KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=