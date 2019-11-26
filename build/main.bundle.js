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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./behavior/array-listener.js":
/*!************************************!*\
  !*** ./behavior/array-listener.js ***!
  \************************************/
/*! exports provided: arrayOperations, listener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOperations", function() { return arrayOperations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listener", function() { return listener; });
function arrayOperations(array, callback) {
  Object.defineProperties(array, {
    push: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var result = Array.prototype.push.apply(this, args);
        callback("push", args);
        return result;
      }
    },
    pop: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function value() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var result = Array.prototype.pop.apply(this, args);
        callback("pop", result);
        return result;
      }
    }
  });
}
function listener(operation, values) {
  console.log("".concat(operation, " has been performed on the array with values ").concat(values));
}

/***/ }),

/***/ "./behavior/command.js":
/*!*****************************!*\
  !*** ./behavior/command.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Command; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Command =
/*#__PURE__*/
function () {
  function Command(specialMath) {
    _classCallCheck(this, Command);

    this.specialMath = specialMath;
    this.commandsExecuted = [];
  }

  _createClass(Command, [{
    key: "execute",
    value: function execute(command) {
      this.specialMath[command]();
      this.commandsExecuted.push(command);
    }
  }]);

  return Command;
}();



/***/ }),

/***/ "./behavior/cumulative-sum.js":
/*!************************************!*\
  !*** ./behavior/cumulative-sum.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CumulativeSum; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CumulativeSum =
/*#__PURE__*/
function () {
  function CumulativeSum() {
    _classCallCheck(this, CumulativeSum);

    this.sum = 0;
  }

  _createClass(CumulativeSum, [{
    key: "add",
    value: function add(num) {
      this.sum += num;
      return this;
    }
  }]);

  return CumulativeSum;
}();



/***/ }),

/***/ "./behavior/index.js":
/*!***************************!*\
  !*** ./behavior/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cumulative_sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cumulative-sum */ "./behavior/cumulative-sum.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command */ "./behavior/command.js");
/* harmony import */ var _special_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-math */ "./behavior/special-math.js");
/* harmony import */ var _array_listener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array-listener */ "./behavior/array-listener.js");





function cumulativeSum() {
  var sum1 = new _cumulative_sum__WEBPACK_IMPORTED_MODULE_0__["default"]();
  console.log(sum1.add(10).add(2).add(50).sum);
}

function specialMath() {
  var commandInstance = new _command__WEBPACK_IMPORTED_MODULE_1__["default"](new _special_math__WEBPACK_IMPORTED_MODULE_2__["default"](5));
  commandInstance.execute("square");
  commandInstance.execute("squareRoot");
  commandInstance.execute("cube");
  console.log(commandInstance.commandsExecuted);
}

function arrayOperationListener() {
  var users = ["Alex Banks", "Eve Porcello"];
  Object(_array_listener__WEBPACK_IMPORTED_MODULE_3__["arrayOperations"])(users, _array_listener__WEBPACK_IMPORTED_MODULE_3__["listener"]);
  users.push("Vinay", "Itapu");
  users.pop();
  users.pop();
}

cumulativeSum();
specialMath();
arrayOperationListener();

/***/ }),

/***/ "./behavior/special-math.js":
/*!**********************************!*\
  !*** ./behavior/special-math.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpecialMath; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SpecialMath =
/*#__PURE__*/
function () {
  function SpecialMath(num) {
    _classCallCheck(this, SpecialMath);

    this._num = num;
  }

  _createClass(SpecialMath, [{
    key: "square",
    value: function square() {
      return Math.pow(this._num, 2);
    }
  }, {
    key: "cube",
    value: function cube() {
      return Math.pow(this._num, 3);
    }
  }, {
    key: "squareRoot",
    value: function squareRoot() {
      return Math.sqrt(this._num);
    }
  }]);

  return SpecialMath;
}();



/***/ }),

/***/ "./creational/employee.js":
/*!********************************!*\
  !*** ./creational/employee.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Employee; });
/* harmony import */ var _shopper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopper */ "./creational/shopper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Employee =
/*#__PURE__*/
function (_Shopper) {
  _inherits(Employee, _Shopper);

  function Employee(name) {
    var _this;

    var money = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var employer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

    _classCallCheck(this, Employee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Employee).call(this, name, money));
    _this.employerName = employer;
    _this.employed = true;
    return _this;
  }

  return Employee;
}(_shopper__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./creational/factory.js":
/*!*******************************!*\
  !*** ./creational/factory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return factory; });
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ "./creational/employee.js");
/* harmony import */ var _shopper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopper */ "./creational/shopper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var factory =
/*#__PURE__*/
function () {
  function factory() {
    _classCallCheck(this, factory);

    this.employee = null;
  }

  _createClass(factory, [{
    key: "getInstance",
    value: function getInstance(type, name) {
      var money = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      var employer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

      if (type === "shopper") {
        return new _shopper__WEBPACK_IMPORTED_MODULE_1__["default"](name, money);
      } else if (type === "employee") {
        if (this.employee) {
          console.warn("Employee instance already exists. Returning the previous instance");
          return this.employee;
        } else {
          this.employee = new _employee__WEBPACK_IMPORTED_MODULE_0__["default"](name, money, employer);
          return this.employee;
        }
      }
    }
  }]);

  return factory;
}();



/***/ }),

/***/ "./creational/index.js":
/*!*****************************!*\
  !*** ./creational/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./creational/factory.js");

var factory = new _factory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var shopper = factory.getInstance("shopper", "Alex Banks", 100);
var emp1 = factory.getInstance("employee", "Eve Porcello", 100);
var emp2 = factory.getInstance("employee", "Eve Porcello", 100);
console.log(shopper, emp1, emp2);

/***/ }),

/***/ "./creational/person.js":
/*!******************************!*\
  !*** ./creational/person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "un-named person";

  _classCallCheck(this, Person);

  this.name = name;
};



/***/ }),

/***/ "./creational/shopper.js":
/*!*******************************!*\
  !*** ./creational/shopper.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shopper; });
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ "./creational/person.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Shopper =
/*#__PURE__*/
function (_Person) {
  _inherits(Shopper, _Person);

  function Shopper(name) {
    var _this;

    var money = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Shopper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shopper).call(this, name));
    _this.money = money;
    _this.employed = false;
    return _this;
  }

  return Shopper;
}(_person__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creational_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creational/index */ "./creational/index.js");
/* harmony import */ var _structural_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structural/index */ "./structural/index.js");
/* harmony import */ var _behavior_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behavior/index */ "./behavior/index.js");




/***/ }),

/***/ "./structural/calculator-adapter.js":
/*!******************************************!*\
  !*** ./structural/calculator-adapter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcAdapter; });
/* harmony import */ var _new_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-calculator */ "./structural/new-calculator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var calcAdapter =
/*#__PURE__*/
function () {
  function calcAdapter() {
    _classCallCheck(this, calcAdapter);

    this.newCalculator = new _new_calculator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(calcAdapter, [{
    key: "multiply",
    value: function multiply(obj, n) {
      this.newCalculator.multiply(obj.res, n);
    }
  }]);

  return calcAdapter;
}();



/***/ }),

/***/ "./structural/clever-calculator.js":
/*!*****************************************!*\
  !*** ./structural/clever-calculator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CleverCalculator; });
/* harmony import */ var _ultimate_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ultimate-calculator */ "./structural/ultimate-calculator.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CleverCalculator =
/*#__PURE__*/
function () {
  function CleverCalculator() {
    _classCallCheck(this, CleverCalculator);

    this.previousResults = {
      add: {},
      sub: {},
      multiply: {},
      divide: {}
    };
    this.ultimateCalculator = new _ultimate_calculator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(CleverCalculator, [{
    key: "operations",
    value: function operations(type, n1, n2) {
      switch (type) {
        case "add":
          if (!this.previousResults[type]["".concat(n1, "+").concat(n2)]) this.previousResults[type]["".concat(n1, "+").concat(n2)] = this.ultimateCalculator.add(n1, n2);
          return this.previousResults[type]["".concat(n1, "+").concat(n2)];

        case "sub":
          if (!this.previousResults[type]["".concat(n1, "-").concat(n2)]) this.previousResults[type]["".concat(n1, "-").concat(n2)] = this.ultimateCalculator.sub(n1, n2);
          return this.previousResults[type]["".concat(n1, "-").concat(n2)];

        case "multiply":
          if (!this.previousResults[type]["".concat(n1, "*").concat(n2)]) this.previousResults[type]["".concat(n1, "*").concat(n2)] = this.ultimateCalculator.multiply(n1, n2);
          return this.previousResults[type]["".concat(n1, "*").concat(n2)];

        case "divide":
          if (!this.previousResults[type]["".concat(n1, "/").concat(n2)]) this.previousResults[type]["".concat(n1, "/").concat(n2)] = this.ultimateCalculator.divide(n1, n2);
          return this.previousResults[type]["".concat(n1, "/").concat(n2)];
      }
    }
  }]);

  return CleverCalculator;
}();



/***/ }),

/***/ "./structural/index.js":
/*!*****************************!*\
  !*** ./structural/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clever_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clever-calculator */ "./structural/clever-calculator.js");
/* harmony import */ var _ultimate_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ultimate-calculator */ "./structural/ultimate-calculator.js");
/* harmony import */ var _calculator_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculator-adapter */ "./structural/calculator-adapter.js");
/* harmony import */ var _old_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./old-calculator */ "./structural/old-calculator.js");
/* harmony import */ var _log_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-calculator */ "./structural/log-calculator.js");






function oldCalculator() {
  var oldCalculator = new _old_calculator__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var calcAdapter = new _calculator_adapter__WEBPACK_IMPORTED_MODULE_2__["default"]();
  calcAdapter.multiply(oldCalculator.operations(3, 2, "sub"), 6);
}

function ultimateCalculator() {
  var ultimateCalculator = new _ultimate_calculator__WEBPACK_IMPORTED_MODULE_1__["default"]();
  console.log("multiplication", ultimateCalculator.multiply(3, 200));
  console.log("addition", ultimateCalculator.add(3, 200));
}

function cleverCalculator() {
  var cleverCalculator = new _clever_calculator__WEBPACK_IMPORTED_MODULE_0__["default"]();
  console.log("clever add", cleverCalculator.operations("add", 99, 99));
  console.log("clever sub", cleverCalculator.operations("sub", 88, 99));
  console.log("clever multiply", cleverCalculator.operations("multiply", 3, 22));
  console.log("clever divide", cleverCalculator.operations("divide", 99, 3));
}

function logCalculator() {
  var logCalculator = new _log_calculator__WEBPACK_IMPORTED_MODULE_4__["default"]();
  logCalculator.logger("add", 99, 13);
}

oldCalculator();
ultimateCalculator();
cleverCalculator();
logCalculator();

/***/ }),

/***/ "./structural/log-calculator.js":
/*!**************************************!*\
  !*** ./structural/log-calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogCalculator; });
/* harmony import */ var _clever_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clever-calculator */ "./structural/clever-calculator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LogCalculator =
/*#__PURE__*/
function (_CleverCalculator) {
  _inherits(LogCalculator, _CleverCalculator);

  function LogCalculator() {
    _classCallCheck(this, LogCalculator);

    return _possibleConstructorReturn(this, _getPrototypeOf(LogCalculator).call(this));
  }

  _createClass(LogCalculator, [{
    key: "logger",
    value: function logger(type, n1, n2) {
      console.log("".concat(type, " of ").concat(n1, " and ").concat(n2, " is ").concat(this.operations(type, n1, n2)));
    }
  }]);

  return LogCalculator;
}(_clever_calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./structural/new-calculator.js":
/*!**************************************!*\
  !*** ./structural/new-calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewCalculator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewCalculator = function NewCalculator() {
  _classCallCheck(this, NewCalculator);

  this.multiply = function (term1, term2) {
    return term1 * term2;
  };

  this.divide = function (term1, term2) {
    return term1 / term2;
  };
};



/***/ }),

/***/ "./structural/old-calculator.js":
/*!**************************************!*\
  !*** ./structural/old-calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OldCalculator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OldCalculator = function OldCalculator() {
  _classCallCheck(this, OldCalculator);

  this.operations = function (term1, term2, operation) {
    switch (operation) {
      case "add":
        return {
          res: term1 + term2
        };

      case "sub":
        return {
          res: term1 - term2
        };

      default:
        return NaN;
    }
  };
};



/***/ }),

/***/ "./structural/ultimate-calculator.js":
/*!*******************************************!*\
  !*** ./structural/ultimate-calculator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UltimateCalculator; });
/* harmony import */ var _new_calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-calculator */ "./structural/new-calculator.js");
/* harmony import */ var _old_calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./old-calculator */ "./structural/old-calculator.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var UltimateCalculator =
/*#__PURE__*/
function (_NewCalculator) {
  _inherits(UltimateCalculator, _NewCalculator);

  function UltimateCalculator() {
    var _this;

    _classCallCheck(this, UltimateCalculator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UltimateCalculator).call(this));
    _this.oldCalculator = new _old_calculator__WEBPACK_IMPORTED_MODULE_1__["default"]();
    return _this;
  }

  _createClass(UltimateCalculator, [{
    key: "add",
    value: function add(n1, n2) {
      return this.oldCalculator.operations(n1, n2, "add").res;
    }
  }, {
    key: "sub",
    value: function sub(n1, n2) {
      return this.oldCalculator.operations(n1, n2, "sub").res;
    }
  }]);

  return UltimateCalculator;
}(_new_calculator__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map