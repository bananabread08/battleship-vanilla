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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mainboard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row {\n  display: flex;\n  height: 40px;\n}\n.column {\n  width: 40px;\n  margin: 0.5px;\n  border: 2px solid black;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    27deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(156, 161, 229, 1) 21%,\n    rgba(2, 13, 189, 1) 100%\n  );\n}\n.column:hover {\n  background: green;\n  cursor: pointer;\n}\n.carrier {\n  background: #b7410e;\n}\n.battleship {\n  background: #e1ad01;\n}\n.frigate {\n  background: gray;\n}\n.submarine {\n  background: magenta;\n}\n.destroyer {\n  background: #40e0d0;\n}\n.tanker {\n  background: #addfad;\n}\n.hit {\n  background: red;\n}\n.miss {\n  background: white;\n}\n\n.enemyboard {\n  margin-left: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B;;;;;GAKC;AACH;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".mainboard {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row {\n  display: flex;\n  height: 40px;\n}\n.column {\n  width: 40px;\n  margin: 0.5px;\n  border: 2px solid black;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    27deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(156, 161, 229, 1) 21%,\n    rgba(2, 13, 189, 1) 100%\n  );\n}\n.column:hover {\n  background: green;\n  cursor: pointer;\n}\n.carrier {\n  background: #b7410e;\n}\n.battleship {\n  background: #e1ad01;\n}\n.frigate {\n  background: gray;\n}\n.submarine {\n  background: magenta;\n}\n.destroyer {\n  background: #40e0d0;\n}\n.tanker {\n  background: #addfad;\n}\n.hit {\n  background: red;\n}\n.miss {\n  background: white;\n}\n\n.enemyboard {\n  margin-left: 10px;\n}\n"],"sourceRoot":""}]);
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

  const checkWinner = (damagedShip) => {
    if (damagedShip.isSunk()) {
      const index = shipArray.findIndex((ship) => ship === damagedShip);
      shipArray.splice(index, 1);
    }
    return shipArray.length === 0;
  };

  const getTargetShip = (x, y, mark) => {
    // const mark = shipNames.find((name) => name === target);
    // target = mark;
    const damagedShip = shipArray.find(
      (ship) => ship.length === getLengthFromArray(mark)
    );
    if (damagedShip.axis === false) {
      damagedShip.hit(y);
      if (checkWinner(damagedShip)) return true;
    } else {
      damagedShip.hit(x);
      if (checkWinner(damagedShip)) return true;
    }
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

  const hit = (position) => {
    shipHP.splice(position, 1, 'hit');
  };

  const isSunk = () => shipHP.every((hp) => hp === 'hit');

  return { length, isRotated, hit, isSunk, shipHP, axis, name };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);


/***/ }),

/***/ "./src/getAndSetShips.js":
/*!*******************************!*\
  !*** ./src/getAndSetShips.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/shipFactory */ "./src/factories/shipFactory.js");


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

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _getAndSetShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getAndSetShips */ "./src/getAndSetShips.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");






const player = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.default)('you', (0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.default)()).startGameboard();
const enemy = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.default)('enemy', (0,_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__.default)()).startGameboard();
// const playerTurn = true;

(0,_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__.default)(player);
(0,_getAndSetShips__WEBPACK_IMPORTED_MODULE_3__.default)(enemy);
(0,_render__WEBPACK_IMPORTED_MODULE_2__.default)(player, enemy);

const getRandomNumber = () => Math.floor(Math.random() * 9);

// play 1 round. fire missile to enemy, enemy fires to player
const playRound = (e) => {
  if (
    enemy.fireMissile(
      Number(e.target.parentNode.classList[2]),
      Number(e.target.classList[2])
    ) === 'invalid'
  )
    return;
  enemy.fireMissile(
    Number(e.target.parentNode.classList[2]),
    Number(e.target.classList[2])
  );
  while (
    player.fireMissile(getRandomNumber(), getRandomNumber()) === 'invalid'
  ) {
    player.fireMissile(getRandomNumber(), getRandomNumber());
  }
  (0,_render__WEBPACK_IMPORTED_MODULE_2__.default)(player, enemy);

  document.querySelectorAll('.enemy.column').forEach((col) => {
    col.addEventListener('click', playRound);
  });
};

// event starter
document.querySelectorAll('.enemy.column').forEach((col) => {
  col.addEventListener('click', playRound);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS8uL3NyYy9nZXRBbmRTZXRTaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC12YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXZhbmlsbGEvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLFVBQVUsa0JBQWtCLGlCQUFpQixHQUFHLFdBQVcsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsbUNBQW1DLGlKQUFpSixHQUFHLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxlQUFlLHdCQUF3QixHQUFHLFlBQVkscUJBQXFCLEdBQUcsY0FBYyx3QkFBd0IsR0FBRyxjQUFjLHdCQUF3QixHQUFHLFdBQVcsd0JBQXdCLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxTQUFTLHNCQUFzQixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxTQUFTLHVGQUF1RixVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmNvbHVtbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1hcmdpbjogMC41cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjdkZWcsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXFxuICAgIHJnYmEoMTU2LCAxNjEsIDIyOSwgMSkgMjElLFxcbiAgICByZ2JhKDIsIDEzLCAxODksIDEpIDEwMCVcXG4gICk7XFxufVxcbi5jb2x1bW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJyaWVyIHtcXG4gIGJhY2tncm91bmQ6ICNiNzQxMGU7XFxufVxcbi5iYXR0bGVzaGlwIHtcXG4gIGJhY2tncm91bmQ6ICNlMWFkMDE7XFxufVxcbi5mcmlnYXRlIHtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcbi5zdWJtYXJpbmUge1xcbiAgYmFja2dyb3VuZDogbWFnZW50YTtcXG59XFxuLmRlc3Ryb3llciB7XFxuICBiYWNrZ3JvdW5kOiAjNDBlMGQwO1xcbn1cXG4udGFua2VyIHtcXG4gIGJhY2tncm91bmQ6ICNhZGRmYWQ7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmVuZW15Ym9hcmQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUI7Ozs7O0dBS0M7QUFDSDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbmJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmNvbHVtbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1hcmdpbjogMC41cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjdkZWcsXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXFxuICAgIHJnYmEoMTU2LCAxNjEsIDIyOSwgMSkgMjElLFxcbiAgICByZ2JhKDIsIDEzLCAxODksIDEpIDEwMCVcXG4gICk7XFxufVxcbi5jb2x1bW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJyaWVyIHtcXG4gIGJhY2tncm91bmQ6ICNiNzQxMGU7XFxufVxcbi5iYXR0bGVzaGlwIHtcXG4gIGJhY2tncm91bmQ6ICNlMWFkMDE7XFxufVxcbi5mcmlnYXRlIHtcXG4gIGJhY2tncm91bmQ6IGdyYXk7XFxufVxcbi5zdWJtYXJpbmUge1xcbiAgYmFja2dyb3VuZDogbWFnZW50YTtcXG59XFxuLmRlc3Ryb3llciB7XFxuICBiYWNrZ3JvdW5kOiAjNDBlMGQwO1xcbn1cXG4udGFua2VyIHtcXG4gIGJhY2tncm91bmQ6ICNhZGRmYWQ7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmVuZW15Ym9hcmQge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBzaGlwTmFtZXMgPSBbXG4gICAgJ2NhcnJpZXInLFxuICAgICdiYXR0bGVzaGlwJyxcbiAgICAnZnJpZ2F0ZScsXG4gICAgJ3N1Ym1hcmluZScsXG4gICAgJ2Rlc3Ryb3llcicsXG4gIF07XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuXG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApIC8vIG1ha2UgMTB4MTBcbiAgICAuZmlsbCgwKVxuICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoMCkpO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgY29uc3QgY2hlY2tPdmVybGFwcyA9ICh4LCB5LCBzaGlwKSA9PiB7XG4gICAgY29uc3QgeEJvYXJkID0gYm9hcmRbeF0uZmlsdGVyKChzcXVhcmUsIGluZGV4KSA9PlxuICAgICAgaW5kZXggPj0geSAmJiBpbmRleCA8PSB5ICsgc2hpcC5sZW5ndGggPyBzcXVhcmUgOiAnJ1xuICAgICk7XG4gICAgbGV0IHlCb2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgeUJvYXJkLnB1c2goYm9hcmRbaV1beV0pO1xuICAgIH1cbiAgICB5Qm9hcmQgPSB5Qm9hcmQuZmlsdGVyKChzcXVhcmUsIGluZGV4KSA9PlxuICAgICAgaW5kZXggPj0geCAmJiBpbmRleCA8PSB4ICsgc2hpcC5sZW5ndGggPyBzcXVhcmUgOiAnJ1xuICAgICk7XG4gICAgaWYgKHNoaXAuYXhpcyA9PT0gZmFsc2UpIHJldHVybiAheEJvYXJkLmV2ZXJ5KChzcXVhcmUpID0+IHNxdWFyZSA9PT0gMCk7XG4gICAgaWYgKHNoaXAuYXhpcyA9PT0gdHJ1ZSkgcmV0dXJuICF5Qm9hcmQuZXZlcnkoKHNxdWFyZSkgPT4gc3F1YXJlID09PSAwKTtcbiAgfTtcblxuICBjb25zdCBjaGVja091dG9mQm91bmRzID0gKHgsIHksIGxlbmd0aCkgPT4geCArIGxlbmd0aCA+IDEwIHx8IHkgKyBsZW5ndGggPiAxMDtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSkgPT4ge1xuICAgIGlmIChzaGlwQXJyYXkubGVuZ3RoIDw9IDUpIHtcbiAgICAgIC8vIGNoZWNrIGlmIGFsbCA1IHNoaXBzIGFyZSBwbGFjZWRcbiAgICAgIGlmIChjaGVja091dG9mQm91bmRzKHgsIHksIHNoaXAubGVuZ3RoKSkgcmV0dXJuICdPdXQgb2YgQm91bmRzJztcbiAgICAgIGlmIChjaGVja092ZXJsYXBzKHgsIHksIHNoaXApKSByZXR1cm4gJ092ZXJsYXBzIGFub3RoZXIgc2hpcCc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNoaXAuYXhpcyA9PT0gZmFsc2UpIGJvYXJkW3hdW3kgKyBpXSA9IHNoaXAubmFtZTtcbiAgICAgICAgZWxzZSBpZiAoc2hpcC5heGlzID09PSB0cnVlKSBib2FyZFt4ICsgaV1beV0gPSBzaGlwLm5hbWU7XG4gICAgICB9XG4gICAgICBzaGlwQXJyYXkucHVzaChzaGlwKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aEZyb21BcnJheSA9IChtYXJrKSA9PiB7XG4gICAgaWYgKG1hcmsgPT09ICdjYXJyaWVyJykgcmV0dXJuIDY7XG4gICAgaWYgKG1hcmsgPT09ICdiYXR0bGVzaGlwJykgcmV0dXJuIDU7XG4gICAgaWYgKG1hcmsgPT09ICdmcmlnYXRlJykgcmV0dXJuIDQ7XG4gICAgaWYgKG1hcmsgPT09ICdzdWJtYXJpbmUnKSByZXR1cm4gMztcbiAgICBpZiAobWFyayA9PT0gJ2Rlc3Ryb3llcicpIHJldHVybiAyO1xuICAgIGlmIChtYXJrID09PSAndGFua2VyJykgcmV0dXJuIDE7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tXaW5uZXIgPSAoZGFtYWdlZFNoaXApID0+IHtcbiAgICBpZiAoZGFtYWdlZFNoaXAuaXNTdW5rKCkpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcEFycmF5LmZpbmRJbmRleCgoc2hpcCkgPT4gc2hpcCA9PT0gZGFtYWdlZFNoaXApO1xuICAgICAgc2hpcEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJldHVybiBzaGlwQXJyYXkubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhcmdldFNoaXAgPSAoeCwgeSwgbWFyaykgPT4ge1xuICAgIC8vIGNvbnN0IG1hcmsgPSBzaGlwTmFtZXMuZmluZCgobmFtZSkgPT4gbmFtZSA9PT0gdGFyZ2V0KTtcbiAgICAvLyB0YXJnZXQgPSBtYXJrO1xuICAgIGNvbnN0IGRhbWFnZWRTaGlwID0gc2hpcEFycmF5LmZpbmQoXG4gICAgICAoc2hpcCkgPT4gc2hpcC5sZW5ndGggPT09IGdldExlbmd0aEZyb21BcnJheShtYXJrKVxuICAgICk7XG4gICAgaWYgKGRhbWFnZWRTaGlwLmF4aXMgPT09IGZhbHNlKSB7XG4gICAgICBkYW1hZ2VkU2hpcC5oaXQoeSk7XG4gICAgICBpZiAoY2hlY2tXaW5uZXIoZGFtYWdlZFNoaXApKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFtYWdlZFNoaXAuaGl0KHgpO1xuICAgICAgaWYgKGNoZWNrV2lubmVyKGRhbWFnZWRTaGlwKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICBjb25zdCBmaXJlTWlzc2lsZSA9ICh4LCB5KSA9PiB7XG4gICAgaWYgKGJvYXJkW3hdW3ldID09PSAnaGl0JyB8fCBib2FyZFt4XVt5XSA9PT0gJ21pc3MnKSByZXR1cm4gJ2ludmFsaWQnO1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gMCkge1xuICAgICAgYm9hcmRbeF1beV0gPSAnbWlzcyc7XG4gICAgICByZXR1cm4gJ21pc3MnO1xuICAgIH1cbiAgICBpZiAoc2hpcE5hbWVzLmluY2x1ZGVzKGJvYXJkW3hdW3ldKSkge1xuICAgICAgY29uc3QgbWFyayA9IHNoaXBOYW1lcy5maW5kKChuYW1lKSA9PiBuYW1lID09PSBib2FyZFt4XVt5XSk7XG4gICAgICBnZXRUYXJnZXRTaGlwKHgsIHksIG1hcmspO1xuICAgICAgYm9hcmRbeF1beV0gPSAnaGl0JztcbiAgICAgIHJldHVybiAnaGl0JztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0Qm9hcmQsIHBsYWNlU2hpcCwgZmlyZU1pc3NpbGUsIHNoaXBBcnJheSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeTtcbiIsImNvbnN0IHBsYXllckZhY3RvcnkgPSAobmFtZSwgYm9hcmQpID0+IHtcbiAgY29uc3QgcGxheWVyVHVybiA9IHRydWU7XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG5cbiAgY29uc3Qgc3RhcnRHYW1lYm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICByZXR1cm4geyBwbGF5ZXJUdXJuLCBnZXROYW1lLCBzdGFydEdhbWVib2FyZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRmFjdG9yeTtcbiIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAvLyBjYXJyaWVyIFs1XSwgYmF0dGxlc2hpcFs0XSwgY3J1aXNlclszXSwgc3VibWFyaW5lWzJdLCBkZXN0cm95ZXJbMV1cbiAgbGV0IG5hbWUgPSAnJztcblxuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgNjpcbiAgICAgIG5hbWUgPSAnY2Fycmllcic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBuYW1lID0gJ2JhdHRsZXNoaXAnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgbmFtZSA9ICdmcmlnYXRlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIG5hbWUgPSAnc3VibWFyaW5lJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIG5hbWUgPSAnZGVzdHJveWVyJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIG5hbWUgPSAndGFua2VyJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBuYW1lID0gJyc7XG4gIH1cblxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID09PSAwKSByZXR1cm4gJ0xlbmd0aCBjYW5ub3QgYmUgMCc7XG4gIGNvbnN0IGF4aXMgPSBmYWxzZTsgLy8gZmFsc2UgaXMgaG9yaXpvbnRhbCBheGlzXG5cbiAgY29uc3Qgc2hpcEhQID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgnbycpOyAvLyBTaGlwIGxpZmUgZGVwZW5kaW5nIG9uIGxlbmd0aFxuXG4gIGNvbnN0IGlzUm90YXRlZCA9IChyb3RhdGlvbikgPT4ge1xuICAgIGlmIChyb3RhdGlvbikgcmV0dXJuICFheGlzO1xuICAgIHJldHVybiBheGlzO1xuICB9OyAvLyBjaGFuZ2Ugcm90YXRpb25cblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICBzaGlwSFAuc3BsaWNlKHBvc2l0aW9uLCAxLCAnaGl0Jyk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcEhQLmV2ZXJ5KChocCkgPT4gaHAgPT09ICdoaXQnKTtcblxuICByZXR1cm4geyBsZW5ndGgsIGlzUm90YXRlZCwgaGl0LCBpc1N1bmssIHNoaXBIUCwgYXhpcywgbmFtZSB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5O1xuIiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL3NoaXBGYWN0b3J5JztcblxuY29uc3QgZ2V0QW5kU2V0U2hpcHMgPSAodXNlcikgPT4ge1xuICBjb25zdCBwbGFjZWRTaGlwcyA9IFtdO1xuICBjb25zdCByb3RhdGlvbiA9IFt0cnVlLCBmYWxzZV07XG4gIGxldCBpID0gMTtcbiAgd2hpbGUgKHBsYWNlZFNoaXBzLmxlbmd0aCA8IDYpIHtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBGYWN0b3J5KGkpO1xuICAgIGN1cnJlbnRTaGlwLmF4aXMgPSByb3RhdGlvbltNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXTtcbiAgICBjb25zdCB0ZXN0U2hpcCA9IHVzZXIucGxhY2VTaGlwKFxuICAgICAgY3VycmVudFNoaXAsXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKVxuICAgICk7XG4gICAgaWYgKHRlc3RTaGlwICE9PSAnT3V0IG9mIEJvdW5kcycgJiYgdGVzdFNoaXAgIT09ICdPdmVybGFwcyBhbm90aGVyIHNoaXAnKSB7XG4gICAgICBwbGFjZWRTaGlwcy5wdXNoKGN1cnJlbnRTaGlwKTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBnZXRBbmRTZXRTaGlwcztcbiIsImNvbnN0IHJlbmRlciA9IChwbGF5ZXIsIGVuZW15KSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyYm9hcmQnKTtcbiAgY29uc3QgZW5lbXlCb2FyZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15Ym9hcmQnKTtcblxuICBjb25zdCBjbGVhckVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYXJFbGVtZW50KHBsYXllckJvYXJkRWwpO1xuICBjbGVhckVsZW1lbnQoZW5lbXlCb2FyZEVsKTtcblxuICBwbGF5ZXIuZ2V0Qm9hcmQoKS5mb3JFYWNoKChyb3csIHhJbmRleCkgPT4ge1xuICAgIGNvbnN0IHJvd0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93QmxvY2suY2xhc3NMaXN0LmFkZCgncm93JywgYCR7eEluZGV4fWApO1xuICAgIHJvdy5mb3JFYWNoKChjb2x1bW4sIHlJbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sdW1uQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbHVtbkJsb2NrLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbicsIGAke3lJbmRleH1gKTtcbiAgICAgIGlmIChjb2x1bW4gIT09ICcwJykgY29sdW1uQmxvY2suY2xhc3NMaXN0LmFkZChjb2x1bW4pO1xuICAgICAgcm93QmxvY2suYXBwZW5kQ2hpbGQoY29sdW1uQmxvY2spO1xuICAgIH0pO1xuICAgIHBsYXllckJvYXJkRWwuYXBwZW5kQ2hpbGQocm93QmxvY2spO1xuICB9KTtcblxuICBlbmVteS5nZXRCb2FyZCgpLmZvckVhY2goKHJvdywgeEluZGV4KSA9PiB7XG4gICAgY29uc3Qgcm93QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByb3dCbG9jay5jbGFzc0xpc3QuYWRkKCdlbmVteScsICdyb3cnLCBgJHt4SW5kZXh9YCk7XG4gICAgcm93LmZvckVhY2goKGNvbHVtbiwgeUluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2x1bW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29sdW1uQmxvY2suY2xhc3NMaXN0LmFkZCgnZW5lbXknLCAnY29sdW1uJywgYCR7eUluZGV4fWApO1xuICAgICAgaWYgKGNvbHVtbiAhPT0gJzAnKSBjb2x1bW5CbG9jay5jbGFzc0xpc3QuYWRkKGNvbHVtbik7XG4gICAgICByb3dCbG9jay5hcHBlbmRDaGlsZChjb2x1bW5CbG9jayk7XG4gICAgfSk7XG4gICAgZW5lbXlCb2FyZEVsLmFwcGVuZENoaWxkKHJvd0Jsb2NrKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzL3BsYXllckZhY3RvcnknO1xuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSAnLi9mYWN0b3JpZXMvZ2FtZWJvYXJkRmFjdG9yeSc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCBnZXRBbmRTZXRTaGlwcyBmcm9tICcuL2dldEFuZFNldFNoaXBzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcblxuY29uc3QgcGxheWVyID0gcGxheWVyRmFjdG9yeSgneW91JywgZ2FtZWJvYXJkRmFjdG9yeSgpKS5zdGFydEdhbWVib2FyZCgpO1xuY29uc3QgZW5lbXkgPSBwbGF5ZXJGYWN0b3J5KCdlbmVteScsIGdhbWVib2FyZEZhY3RvcnkoKSkuc3RhcnRHYW1lYm9hcmQoKTtcbi8vIGNvbnN0IHBsYXllclR1cm4gPSB0cnVlO1xuXG5nZXRBbmRTZXRTaGlwcyhwbGF5ZXIpO1xuZ2V0QW5kU2V0U2hpcHMoZW5lbXkpO1xucmVuZGVyKHBsYXllciwgZW5lbXkpO1xuXG5jb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcblxuLy8gcGxheSAxIHJvdW5kLiBmaXJlIG1pc3NpbGUgdG8gZW5lbXksIGVuZW15IGZpcmVzIHRvIHBsYXllclxuY29uc3QgcGxheVJvdW5kID0gKGUpID0+IHtcbiAgaWYgKFxuICAgIGVuZW15LmZpcmVNaXNzaWxlKFxuICAgICAgTnVtYmVyKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0WzJdKSxcbiAgICAgIE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbMl0pXG4gICAgKSA9PT0gJ2ludmFsaWQnXG4gIClcbiAgICByZXR1cm47XG4gIGVuZW15LmZpcmVNaXNzaWxlKFxuICAgIE51bWJlcihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdFsyXSksXG4gICAgTnVtYmVyKGUudGFyZ2V0LmNsYXNzTGlzdFsyXSlcbiAgKTtcbiAgd2hpbGUgKFxuICAgIHBsYXllci5maXJlTWlzc2lsZShnZXRSYW5kb21OdW1iZXIoKSwgZ2V0UmFuZG9tTnVtYmVyKCkpID09PSAnaW52YWxpZCdcbiAgKSB7XG4gICAgcGxheWVyLmZpcmVNaXNzaWxlKGdldFJhbmRvbU51bWJlcigpLCBnZXRSYW5kb21OdW1iZXIoKSk7XG4gIH1cbiAgcmVuZGVyKHBsYXllciwgZW5lbXkpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS5jb2x1bW4nKS5mb3JFYWNoKChjb2wpID0+IHtcbiAgICBjb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5Um91bmQpO1xuICB9KTtcbn07XG5cbi8vIGV2ZW50IHN0YXJ0ZXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmVteS5jb2x1bW4nKS5mb3JFYWNoKChjb2wpID0+IHtcbiAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVJvdW5kKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==