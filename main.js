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

/***/ "./src/modules/checkLoser.js":
/*!***********************************!*\
  !*** ./src/modules/checkLoser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkLoser = (user) => user.shipArray.every((ship) => ship.isSunk());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkLoser);


/***/ }),

/***/ "./src/modules/domHandler.js":
/*!***********************************!*\
  !*** ./src/modules/domHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domHandler = (() => {
  const messageEl = document.querySelector('.message-log');
  const randomizeButton = document.querySelector('.randomize');
  const startButton = document.querySelector('.start');
  const modal = document.getElementById('game-over');
  const modalText = document.querySelector('.last-message');
  const restartButton = document.querySelector('.restart');

  const updateMessage = (state) => {
    if (state === 'miss') {
      messageEl.textContent = 'You missed! Try again.';
    }
    if (state === 'hit') messageEl.textContent = 'You hit a Ship, nice!';
  };

  return {
    messageEl,
    randomizeButton,
    startButton,
    modal,
    modalText,
    restartButton,
    updateMessage,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domHandler);


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
/* harmony import */ var _modules_checkLoser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkLoser */ "./src/modules/checkLoser.js");
/* harmony import */ var _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/domHandler */ "./src/modules/domHandler.js");









let player;
let enemy;

const randomizePlacement = () => {
  player = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.default)('you', (0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.default)()).startGameboard();
  enemy = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.default)('enemy', (0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.default)()).startGameboard();
  (0,_modules_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__.default)(player);
  (0,_modules_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__.default)(enemy);
  (0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.default)(player, enemy);
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.messageEl.textContent =
    'Click: Randomize to re-place ships. Start Game to begin!';
};

// # initial render #
randomizePlacement();

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
    _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.updateMessage(enemy.getBoard()[a][b]);
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
    if ((0,_modules_checkLoser__WEBPACK_IMPORTED_MODULE_6__.default)(enemy)) {
      _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.messageEl.textContent = 'You win!';
      _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.modalText.textContent =
        'Game Over! You destroyed all enemy ships. You Win!';
      _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.modal.style.display = 'block';
    }
    if ((0,_modules_checkLoser__WEBPACK_IMPORTED_MODULE_6__.default)(player)) {
      _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.messageEl.textContent = 'Enemy Wins!';
      _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.modalText.textContent =
        'Game Over! Enemy destroyed all your ships! Enemy Wins!';
      _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.modal.style.display = 'block';
    }
    document.querySelectorAll('.enemy.column').forEach((col) => {
      col.removeEventListener('click', playRound);
      col.addEventListener('click', playRound);
    });
  }
};

const startGame = () => {
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.randomizeButton.disabled = true;
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.startButton.disabled = true;
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.messageEl.textContent =
    'Game Start! Click a Square in the Enemy Board!';
  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

_modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.randomizeButton.addEventListener('click', randomizePlacement);
_modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.startButton.addEventListener('click', startGame);
_modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.restartButton.addEventListener('click', () => {
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.modal.style.display = 'none';
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.randomizeButton.disabled = false;
  _modules_domHandler__WEBPACK_IMPORTED_MODULE_7__.default.startButton.disabled = false;
  randomizePlacement();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9tb2R1bGVzL2NoZWNrTG9zZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vc3JjL21vZHVsZXMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvbW9kdWxlcy9nZXRBbmRTZXRTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvbW9kdWxlcy9nZXRSYW5kb21OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixxSEFBcUg7QUFDckgseUhBQXlIO0FBQ3pIO0FBQ0EsaURBQWlELHNCQUFzQix1Q0FBdUMscUJBQXFCLHdCQUF3QixzQ0FBc0Msb0NBQW9DLEdBQUcsZUFBZSxjQUFjLGVBQWUsdUNBQXVDLGlCQUFpQixzQkFBc0IsR0FBRyxLQUFLLDJCQUEyQixHQUFHLFVBQVUsa0JBQWtC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X0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJvemErTGlicmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1yYWlzaW46ICMyNDIxMjQ7XFxuICAtLXNreWJsdWU6IHJnYmEoNTgsIDEzNCwgMjU1LCAwLjQpO1xcbiAgLS1vY2VhbjogIzNhODZmZjtcXG4gIC0tb2Zmd2hpdGU6ICNmOWY5Zjk7XFxuICAtLWxpZ2h0cmVkOiByZ2IoMjMwLCAxMywgMTMsIDAuNCk7XFxuICAtLWxpZ2h0cGluazogcmdiKDIzMSwgMTExLCAxMTEpO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdQcm96YSBMaWJyZScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmFpc2luKTtcXG4gIGNvbG9yOiB2YXIoLS1vZmZ3aGl0ZSk7XFxufVxcbi5tYWluLW1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJhbmRvbWl6ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG4uc3RhcnQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG4ucmFuZG9taXplLFxcbi5zdGFydCxcXG4ucmVzdGFydCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogbGF0bywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVweCA3cHggNXB4IDdweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLnJhbmRvbWl6ZTpob3ZlcixcXG4uc3RhcnQ6aG92ZXIsXFxuLnJlc3RhcnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5yYW5kb21pemU6ZGlzYWJsZWQsXFxuLnN0YXJ0OmRpc2FibGVkIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmdhbWUtcHJvcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWVzc2FnZS1sb2cge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMC41ZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgd2lkdGg6IDMwZW07XFxuICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcXG59XFxuLm1haW5ib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ucGxheWVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4uZW5lbXktd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcbi5jb2x1bW4ge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBtYXJnaW46IDAuNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW9mZndoaXRlKTtcXG59XFxuLmNvbHVtbjpob3ZlciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucGxheWVyYm9hcmQgLmNhcnJpZXIsXFxuLnBsYXllcmJvYXJkIC5iYXR0bGVzaGlwLFxcbi5wbGF5ZXJib2FyZCAuZnJpZ2F0ZSxcXG4ucGxheWVyYm9hcmQgLnN1Ym1hcmluZSxcXG4ucGxheWVyYm9hcmQgLmRlc3Ryb3llcixcXG4ucGxheWVyYm9hcmQgLnRhbmtlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3libHVlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9jZWFuKTtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodHJlZCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodHBpbmspO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTMxLCAxMzEsIDEzMSwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogODAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG4ucmVzdGFydCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgKiB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG4gIC5tYWluYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLm1lc3NhZ2UtbG9nIHtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICB9XFxuICAucm93IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgfVxcbiAgLmNvbHVtbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgfVxcbiAgLnJhbmRvbWl6ZSxcXG4gIC5zdGFydCB7XFxuICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDRweDtcXG4gIH1cXG4gIC5wbGF5ZXItd3JhcHBlciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbiAgLmVuZW15LXdyYXBwZXIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuICAubW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQywrQkFBK0I7QUFDakM7QUFDQTs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7OztFQUdFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDtBQUNBOztFQUVFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTs7Ozs7O0VBTUUsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLGtCQUFrQjtFQUNuQyxVQUFVLEVBQUUsZUFBZTtFQUMzQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUUsa0NBQWtDO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVSxFQUFFLG9EQUFvRDtBQUNsRTtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBOztJQUVFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDhCQUE4QixFQUFFLG1CQUFtQjtJQUNuRCxvQ0FBb0MsRUFBRSxxQkFBcUI7RUFDN0Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByb3phK0xpYnJlJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tcmFpc2luOiAjMjQyMTI0O1xcbiAgLS1za3libHVlOiByZ2JhKDU4LCAxMzQsIDI1NSwgMC40KTtcXG4gIC0tb2NlYW46ICMzYTg2ZmY7XFxuICAtLW9mZndoaXRlOiAjZjlmOWY5O1xcbiAgLS1saWdodHJlZDogcmdiKDIzMCwgMTMsIDEzLCAwLjQpO1xcbiAgLS1saWdodHBpbms6IHJnYigyMzEsIDExMSwgMTExKTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUHJvemEgTGlicmUnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhaXNpbik7XFxuICBjb2xvcjogdmFyKC0tb2Zmd2hpdGUpO1xcbn1cXG4ubWFpbi1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yYW5kb21pemUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuLnN0YXJ0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuLnJhbmRvbWl6ZSxcXG4uc3RhcnQsXFxuLnJlc3RhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IGxhdG8sIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1cHggN3B4IDVweCA3cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5yYW5kb21pemU6aG92ZXIsXFxuLnN0YXJ0OmhvdmVyLFxcbi5yZXN0YXJ0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ucmFuZG9taXplOmRpc2FibGVkLFxcbi5zdGFydDpkaXNhYmxlZCB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5nYW1lLXByb3BlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1lc3NhZ2UtbG9nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIHdpZHRoOiAzMGVtO1xcbiAgcGFkZGluZzogMWVtIDAgMWVtIDA7XFxufVxcbi5tYWluYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnBsYXllci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLmVuZW15LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG59XFxuLnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uY29sdW1uIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgbWFyZ2luOiAwLjVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vZmZ3aGl0ZSk7XFxufVxcbi5jb2x1bW46aG92ZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnBsYXllcmJvYXJkIC5jYXJyaWVyLFxcbi5wbGF5ZXJib2FyZCAuYmF0dGxlc2hpcCxcXG4ucGxheWVyYm9hcmQgLmZyaWdhdGUsXFxuLnBsYXllcmJvYXJkIC5zdWJtYXJpbmUsXFxuLnBsYXllcmJvYXJkIC5kZXN0cm95ZXIsXFxuLnBsYXllcmJvYXJkIC50YW5rZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5Ymx1ZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vY2Vhbik7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRyZWQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHRwaW5rKTtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMSwgMTMxLCAxMzEsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtY29udGVudCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDgwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG59XFxuLnJlc3RhcnQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICoge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAubWFpbmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tZXNzYWdlLWxvZyB7XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgfVxcbiAgLnJvdyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gIH1cXG4gIC5jb2x1bW4ge1xcbiAgICB3aWR0aDogMzBweDtcXG4gIH1cXG4gIC5yYW5kb21pemUsXFxuICAuc3RhcnQge1xcbiAgICBwYWRkaW5nOiAycHggNHB4IDJweCA0cHg7XFxuICB9XFxuICAucGxheWVyLXdyYXBwZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIH1cXG4gIC5lbmVteS13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbiAgLm1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcE5hbWVzID0gW1xuICAgICdjYXJyaWVyJyxcbiAgICAnYmF0dGxlc2hpcCcsXG4gICAgJ2ZyaWdhdGUnLFxuICAgICdzdWJtYXJpbmUnLFxuICAgICdkZXN0cm95ZXInLFxuICAgICd0YW5rZXInLFxuICBdO1xuICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcblxuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKSAvLyBtYWtlIDEweDEwXG4gICAgLmZpbGwoMClcbiAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKDApKTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IGNoZWNrT3ZlcmxhcHMgPSAoeCwgeSwgc2hpcCkgPT4ge1xuICAgIGNvbnN0IHhCb2FyZCA9IGJvYXJkW3hdLmZpbHRlcigoc3F1YXJlLCBpbmRleCkgPT5cbiAgICAgIGluZGV4ID49IHkgJiYgaW5kZXggPD0geSArIHNoaXAubGVuZ3RoID8gc3F1YXJlIDogJydcbiAgICApO1xuICAgIGxldCB5Qm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHlCb2FyZC5wdXNoKGJvYXJkW2ldW3ldKTtcbiAgICB9XG4gICAgeUJvYXJkID0geUJvYXJkLmZpbHRlcigoc3F1YXJlLCBpbmRleCkgPT5cbiAgICAgIGluZGV4ID49IHggJiYgaW5kZXggPD0geCArIHNoaXAubGVuZ3RoID8gc3F1YXJlIDogJydcbiAgICApO1xuICAgIGlmIChzaGlwLmF4aXMgPT09IGZhbHNlKSByZXR1cm4gIXhCb2FyZC5ldmVyeSgoc3F1YXJlKSA9PiBzcXVhcmUgPT09IDApO1xuICAgIGlmIChzaGlwLmF4aXMgPT09IHRydWUpIHJldHVybiAheUJvYXJkLmV2ZXJ5KChzcXVhcmUpID0+IHNxdWFyZSA9PT0gMCk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tPdXRvZkJvdW5kcyA9ICh4LCB5LCBsZW5ndGgpID0+IHggKyBsZW5ndGggPiAxMCB8fCB5ICsgbGVuZ3RoID4gMTA7XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoc2hpcEFycmF5Lmxlbmd0aCA8PSA1KSB7XG4gICAgICAvLyBjaGVjayBpZiBhbGwgNSBzaGlwcyBhcmUgcGxhY2VkXG4gICAgICBpZiAoY2hlY2tPdXRvZkJvdW5kcyh4LCB5LCBzaGlwLmxlbmd0aCkpIHJldHVybiAnT3V0IG9mIEJvdW5kcyc7XG4gICAgICBpZiAoY2hlY2tPdmVybGFwcyh4LCB5LCBzaGlwKSkgcmV0dXJuICdPdmVybGFwcyBhbm90aGVyIHNoaXAnO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzaGlwLmF4aXMgPT09IGZhbHNlKSBib2FyZFt4XVt5ICsgaV0gPSBzaGlwLm5hbWU7XG4gICAgICAgIGVsc2UgaWYgKHNoaXAuYXhpcyA9PT0gdHJ1ZSkgYm9hcmRbeCArIGldW3ldID0gc2hpcC5uYW1lO1xuICAgICAgfVxuICAgICAgc2hpcEFycmF5LnB1c2goc2hpcCk7XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCBnZXRMZW5ndGhGcm9tQXJyYXkgPSAobWFyaykgPT4ge1xuICAgIGlmIChtYXJrID09PSAnY2FycmllcicpIHJldHVybiA2O1xuICAgIGlmIChtYXJrID09PSAnYmF0dGxlc2hpcCcpIHJldHVybiA1O1xuICAgIGlmIChtYXJrID09PSAnZnJpZ2F0ZScpIHJldHVybiA0O1xuICAgIGlmIChtYXJrID09PSAnc3VibWFyaW5lJykgcmV0dXJuIDM7XG4gICAgaWYgKG1hcmsgPT09ICdkZXN0cm95ZXInKSByZXR1cm4gMjtcbiAgICBpZiAobWFyayA9PT0gJ3RhbmtlcicpIHJldHVybiAxO1xuICB9O1xuXG4gIC8vIGNvbnN0IGNoZWNrV2lubmVyID0gKGRhbWFnZWRTaGlwKSA9PiB7XG4gIC8vICAgaWYgKGRhbWFnZWRTaGlwLmlzU3VuaygpKSB7XG4gIC8vICAgICBjb25zdCBpbmRleCA9IHNoaXBBcnJheS5maW5kSW5kZXgoKHNoaXApID0+IHNoaXAgPT09IGRhbWFnZWRTaGlwKTtcbiAgLy8gICAgIHNoaXBBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gc2hpcEFycmF5Lmxlbmd0aCA9PT0gMDtcbiAgLy8gfTtcblxuICBjb25zdCBnZXRUYXJnZXRTaGlwID0gKHgsIHksIG1hcmspID0+IHtcbiAgICAvLyBjb25zdCBtYXJrID0gc2hpcE5hbWVzLmZpbmQoKG5hbWUpID0+IG5hbWUgPT09IHRhcmdldCk7XG4gICAgLy8gdGFyZ2V0ID0gbWFyaztcbiAgICBjb25zdCBkYW1hZ2VkU2hpcCA9IHNoaXBBcnJheS5maW5kKFxuICAgICAgKHNoaXApID0+IHNoaXAubGVuZ3RoID09PSBnZXRMZW5ndGhGcm9tQXJyYXkobWFyaylcbiAgICApO1xuICAgIGRhbWFnZWRTaGlwLmhpdCgpO1xuICB9O1xuICBjb25zdCBmaXJlTWlzc2lsZSA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldID09PSAnaGl0JyB8fCBib2FyZFt4XVt5XSA9PT0gJ21pc3MnKSByZXR1cm4gJ2ludmFsaWQnO1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gMCkge1xuICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgICBpZiAoc2hpcE5hbWVzLmluY2x1ZGVzKGJvYXJkW3hdW3ldKSkge1xuICAgICAgY29uc3QgbWFyayA9IHNoaXBOYW1lcy5maW5kKChuYW1lKSA9PiBuYW1lID09PSBib2FyZFt4XVt5XSk7XG4gICAgICBnZXRUYXJnZXRTaGlwKHgsIHksIG1hcmspO1xuICAgICAgYm9hcmRbeF1beV0gPSAnaGl0JztcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0Qm9hcmQsIHBsYWNlU2hpcCwgZmlyZU1pc3NpbGUsIHNoaXBBcnJheSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTtcbiIsImNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgcGxheWVyVHVybiA9IHRydWU7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc3RhcnRHYW1lYm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICByZXR1cm4geyBwbGF5ZXJUdXJuLCBnZXROYW1lLCBzdGFydEdhbWVib2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRmFjdG9yeTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAvLyBjYXJyaWVyIFs1XSwgYmF0dGxlc2hpcFs0XSwgY3J1aXNlclszXSwgc3VibWFyaW5lWzJdLCBkZXN0cm95ZXJbMV1cbiAgbGV0IG5hbWUgPSAnJztcblxuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgNjpcbiAgICAgIG5hbWUgPSAnY2Fycmllcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBuYW1lID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbmFtZSA9ICdmcmlnYXRlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5hbWUgPSAnc3VibWFyaW5lJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIG5hbWUgPSAnZGVzdHJveWVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG5hbWUgPSAndGFua2VyJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBuYW1lID0gJyc7XG4gIH1cblxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID09PSAwKSByZXR1cm4gJ0xlbmd0aCBjYW5ub3QgYmUgMCc7XG4gIGNvbnN0IGF4aXMgPSBmYWxzZTsgLy8gZmFsc2UgaXMgaG9yaXpvbnRhbCBheGlzXG5cbiAgY29uc3Qgc2hpcEhQID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgnbycpOyAvLyBTaGlwIGxpZmUgZGVwZW5kaW5nIG9uIGxlbmd0aFxuXG4gIGNvbnN0IGlzUm90YXRlZCA9IChyb3RhdGlvbikgPT4ge1xuICAgIGlmIChyb3RhdGlvbikgcmV0dXJuICFheGlzO1xuICAgIHJldHVybiBheGlzO1xuICB9OyAvLyBjaGFuZ2Ugcm90YXRpb25cblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgc2hpcEhQLnBvcCgpO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBIUC5sZW5ndGggPT09IDA7XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBpc1JvdGF0ZWQsIGhpdCwgaXNTdW5rLCBzaGlwSFAsIGF4aXMsIG5hbWUgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeTtcbiIsImNvbnN0IGNoZWNrTG9zZXIgPSAodXNlcikgPT4gdXNlci5zaGlwQXJyYXkuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja0xvc2VyO1xuIiwiY29uc3QgZG9tSGFuZGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWxvZycpO1xuICBjb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9taXplJyk7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3ZlcicpO1xuICBjb25zdCBtb2RhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdC1tZXNzYWdlJyk7XG4gIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGFydCcpO1xuXG4gIGNvbnN0IHVwZGF0ZU1lc3NhZ2UgPSAoc3RhdGUpID0+IHtcbiAgICBpZiAoc3RhdGUgPT09ICdtaXNzJykge1xuICAgICAgbWVzc2FnZUVsLnRleHRDb250ZW50ID0gJ1lvdSBtaXNzZWQhIFRyeSBhZ2Fpbi4nO1xuICAgIH1cbiAgICBpZiAoc3RhdGUgPT09ICdoaXQnKSBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSAnWW91IGhpdCBhIFNoaXAsIG5pY2UhJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VFbCxcbiAgICByYW5kb21pemVCdXR0b24sXG4gICAgc3RhcnRCdXR0b24sXG4gICAgbW9kYWwsXG4gICAgbW9kYWxUZXh0LFxuICAgIHJlc3RhcnRCdXR0b24sXG4gICAgdXBkYXRlTWVzc2FnZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUhhbmRsZXI7XG4iLCJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi4vZmFjdG9yaWVzL3NoaXBGYWN0b3J5JztcblxuY29uc3QgZ2V0QW5kU2V0U2hpcHMgPSAodXNlcikgPT4ge1xuICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuICBjb25zdCByb3RhdGlvbiA9IFt0cnVlLCBmYWxzZV07XG4gIGxldCBpID0gMTtcbiAgd2hpbGUgKHBsYWNlZFNoaXBzLmxlbmd0aCA8IDYpIHtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBGYWN0b3J5KGkpO1xuICAgIGN1cnJlbnRTaGlwLmF4aXMgPSByb3RhdGlvbltNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbiAgICBjb25zdCB0ZXN0U2hpcCA9IHVzZXIucGxhY2VTaGlwKFxuICAgICAgY3VycmVudFNoaXAsXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgICk7XG4gICAgaWYgKHRlc3RTaGlwICE9PSAnT3V0IG9mIEJvdW5kcycgJiYgdGVzdFNoaXAgIT09ICdPdmVybGFwcyBhbm90aGVyIHNoaXAnKSB7XG4gICAgICBwbGFjZWRTaGlwcy5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBnZXRBbmRTZXRTaGlwcztcbiIsImNvbnN0IGdldFJhbmRvbU51bWJlciA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmFuZG9tTnVtYmVyO1xuIiwiY29uc3QgcmVuZGVyID0gKHBsYXllciwgZW5lbXkpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJib2FyZCcpO1xuICBjb25zdCBlbmVteUJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXlib2FyZCcpO1xuXG4gIGNvbnN0IGNsZWFyRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICBjbGVhckVsZW1lbnQocGxheWVyQm9hcmRFbCk7XG4gIGNsZWFyRWxlbWVudChlbmVteUJvYXJkRWwpO1xuXG4gIHBsYXllci5nZXRCb2FyZCgpLmZvckVhY2goKHJvdywgeEluZGV4KSA9PiB7XG4gICAgY29uc3Qgcm93QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dCbG9jay5jbGFzc0xpc3QuYWRkKCdyb3cnLCBgJHt4SW5kZXh9YCk7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgeUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29sdW1uQmxvY2suY2xhc3NMaXN0LmFkZCgnY29sdW1uJywgYCR7eUluZGV4fWApO1xuICAgICAgaWYgKGNvbHVtbiAhPT0gJzAnKSBjb2x1bW5CbG9jay5jbGFzc0xpc3QuYWRkKGNvbHVtbik7XG4gICAgICByb3dCbG9jay5hcHBlbmRDaGlsZChjb2x1bW5CbG9jayk7XG4gICAgfSk7XG4gICAgcGxheWVyQm9hcmRFbC5hcHBlbmRDaGlsZChyb3dCbG9jayk7XG4gIH0pO1xuXG4gIGVuZW15LmdldEJvYXJkKCkuZm9yRWFjaCgocm93LCB4SW5kZXgpID0+IHtcbiAgICBjb25zdCByb3dCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJvd0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2VuZW15JywgJ3JvdycsIGAke3hJbmRleH1gKTtcbiAgICByb3cuZm9yRWFjaCgoY29sdW1uLCB5SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbHVtbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb2x1bW5CbG9jay5jbGFzc0xpc3QuYWRkKCdlbmVteScsICdjb2x1bW4nLCBgJHt5SW5kZXh9YCk7XG4gICAgICBpZiAoY29sdW1uICE9PSAnMCcpIGNvbHVtbkJsb2NrLmNsYXNzTGlzdC5hZGQoY29sdW1uKTtcbiAgICAgIHJvd0Jsb2NrLmFwcGVuZENoaWxkKGNvbHVtbkJsb2NrKTtcbiAgICB9KTtcbiAgICBlbmVteUJvYXJkRWwuYXBwZW5kQ2hpbGQocm93QmxvY2spO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW5kZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeSc7XG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tICcuL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5JztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9tb2R1bGVzL3JlbmRlcic7XG5pbXBvcnQgZ2V0QW5kU2V0U2hpcHMgZnJvbSAnLi9tb2R1bGVzL2dldEFuZFNldFNoaXBzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBnZXRSYW5kb21OdW1iZXIgZnJvbSAnLi9tb2R1bGVzL2dldFJhbmRvbU51bWJlcic7XG5pbXBvcnQgY2hlY2tMb3NlciBmcm9tICcuL21vZHVsZXMvY2hlY2tMb3Nlcic7XG5pbXBvcnQgZG9tSGFuZGxlciBmcm9tICcuL21vZHVsZXMvZG9tSGFuZGxlcic7XG5cbmxldCBwbGF5ZXI7XG5sZXQgZW5lbXk7XG5cbmNvbnN0IHJhbmRvbWl6ZVBsYWNlbWVudCA9ICgpID0+IHtcbiAgcGxheWVyID0gcGxheWVyRmFjdG9yeSgneW91JywgZ2FtZWJvYXJkRmFjdG9yeSgpKS5zdGFydEdhbWVib2FyZCgpO1xuICBlbmVteSA9IHBsYXllckZhY3RvcnkoJ2VuZW15JywgZ2FtZWJvYXJkRmFjdG9yeSgpKS5zdGFydEdhbWVib2FyZCgpO1xuICBnZXRBbmRTZXRTaGlwcyhwbGF5ZXIpO1xuICBnZXRBbmRTZXRTaGlwcyhlbmVteSk7XG4gIHJlbmRlcihwbGF5ZXIsIGVuZW15KTtcbiAgZG9tSGFuZGxlci5tZXNzYWdlRWwudGV4dENvbnRlbnQgPVxuICAgICdDbGljazogUmFuZG9taXplIHRvIHJlLXBsYWNlIHNoaXBzLiBTdGFydCBHYW1lIHRvIGJlZ2luISc7XG59O1xuXG4vLyAjIGluaXRpYWwgcmVuZGVyICNcbnJhbmRvbWl6ZVBsYWNlbWVudCgpO1xuXG4vLyAjIHJlY3Vyc2lvbiBpZiByYW5kb20gKHgseSkgaXMgbm90IHZhbGlkICNcbmNvbnN0IGVuZW15VHVybiA9ICgpID0+IHtcbiAgY29uc3QgeCA9IGdldFJhbmRvbU51bWJlcigpO1xuICBjb25zdCB5ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gIGlmIChwbGF5ZXIuZ2V0Qm9hcmQoKVt4XVt5XSA9PT0gJ21pc3MnIHx8IHBsYXllci5nZXRCb2FyZCgpW3hdW3ldID09PSAnaGl0Jykge1xuICAgIGVuZW15VHVybigpO1xuICB9XG4gIHJldHVybiBwbGF5ZXIuZmlyZU1pc3NpbGUoeCwgeSk7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbmNvbnN0IHBsYXllclR1cm4gPSAoZSkgPT4ge1xuICBjb25zdCBhID0gTnVtYmVyKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0WzJdKTtcbiAgY29uc3QgYiA9IE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbMl0pO1xuICBpZiAoZW5lbXkuZ2V0Qm9hcmQoKVthXVtiXSAhPT0gJ21pc3MnICYmIGVuZW15LmdldEJvYXJkKClbYV1bYl0gIT09ICdoaXQnKSB7XG4gICAgZW5lbXkuZmlyZU1pc3NpbGUoYSwgYik7XG4gICAgZG9tSGFuZGxlci51cGRhdGVNZXNzYWdlKGVuZW15LmdldEJvYXJkKClbYV1bYl0pO1xuICB9IGVsc2UgcmV0dXJuICdpbnZhbGlkJztcbn07XG5cbi8vIHBsYXkgMSByb3VuZC4gZmlyZSBtaXNzaWxlIHRvIGVuZW15LCBlbmVteSBmaXJlcyB0byBwbGF5ZXJcbmNvbnN0IHBsYXlSb3VuZCA9IChlKSA9PiB7XG4gIGlmIChwbGF5ZXJUdXJuKGUpID09PSAnaW52YWxpZCcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZW5lbXkuY29sdW1uJykuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBjb2wucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5Um91bmQpO1xuICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJvdW5kKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBlbmVteVR1cm4oKTtcbiAgICByZW5kZXIocGxheWVyLCBlbmVteSk7XG4gICAgaWYgKGNoZWNrTG9zZXIoZW5lbXkpKSB7XG4gICAgICBkb21IYW5kbGVyLm1lc3NhZ2VFbC50ZXh0Q29udGVudCA9ICdZb3Ugd2luISc7XG4gICAgICBkb21IYW5kbGVyLm1vZGFsVGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgICdHYW1lIE92ZXIhIFlvdSBkZXN0cm95ZWQgYWxsIGVuZW15IHNoaXBzLiBZb3UgV2luISc7XG4gICAgICBkb21IYW5kbGVyLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgICBpZiAoY2hlY2tMb3NlcihwbGF5ZXIpKSB7XG4gICAgICBkb21IYW5kbGVyLm1lc3NhZ2VFbC50ZXh0Q29udGVudCA9ICdFbmVteSBXaW5zISc7XG4gICAgICBkb21IYW5kbGVyLm1vZGFsVGV4dC50ZXh0Q29udGVudCA9XG4gICAgICAgICdHYW1lIE92ZXIhIEVuZW15IGRlc3Ryb3llZCBhbGwgeW91ciBzaGlwcyEgRW5lbXkgV2lucyEnO1xuICAgICAgZG9tSGFuZGxlci5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LmNvbHVtbicpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgY29sLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJvdW5kKTtcbiAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSb3VuZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgZG9tSGFuZGxlci5yYW5kb21pemVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBkb21IYW5kbGVyLnN0YXJ0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgZG9tSGFuZGxlci5tZXNzYWdlRWwudGV4dENvbnRlbnQgPVxuICAgICdHYW1lIFN0YXJ0ISBDbGljayBhIFNxdWFyZSBpbiB0aGUgRW5lbXkgQm9hcmQhJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVuZW15LmNvbHVtbicpLmZvckVhY2goKGNvbCkgPT4ge1xuICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlSb3VuZCk7XG4gIH0pO1xufTtcblxuZG9tSGFuZGxlci5yYW5kb21pemVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByYW5kb21pemVQbGFjZW1lbnQpO1xuZG9tSGFuZGxlci5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5kb21IYW5kbGVyLnJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvbUhhbmRsZXIubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9tSGFuZGxlci5yYW5kb21pemVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgZG9tSGFuZGxlci5zdGFydEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICByYW5kb21pemVQbGFjZW1lbnQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==