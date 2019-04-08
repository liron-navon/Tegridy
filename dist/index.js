(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tegridy"] = factory();
	else
		root["tegridy"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/index.ts (referenced with cjs require), ./src/lib/Components/TegridyPureComponent.ts (referenced with cjs require), ./src/lib/Components/TegridyStatefullComponent.ts (referenced with cjs require), ./src/lib/TegridyDom/index.ts (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var TegridyDom_1 = __webpack_require__(/*! ./lib/TegridyDom */ "./src/lib/TegridyDom/index.ts");
var TegridyStatefullComponent_1 = __webpack_require__(/*! ./lib/Components/TegridyStatefullComponent */ "./src/lib/Components/TegridyStatefullComponent.ts");
var TegridyPureComponent_1 = __webpack_require__(/*! ./lib/Components/TegridyPureComponent */ "./src/lib/Components/TegridyPureComponent.ts");
// create a standard component from the templating engine syntax (JSX|HTM|etc...)
var createComponent = function (tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (children.length > 0) {
        children.__isChildren = true;
    }
    return {
        tag: tag,
        props: tslib_1.__assign({}, props, { children: children })
    };
};
// create a new tegridy instance and create it's vDom
var render = function (component, container) {
    var tegridy = new TegridyDom_1.TegridyDom();
    tegridy.virtualDom = TegridyDom_1.TegridyDom.reconsile(container, tegridy.virtualDom, component);
    tegridy.rootComponent = tegridy.virtualDom && tegridy.virtualDom.publicInstance;
    return {
        component: tegridy.rootComponent,
        vDom: tegridy.virtualDom
    };
};
// the public API for tegridy
exports.default = {
    render: render,
    createComponent: createComponent,
    Component: TegridyStatefullComponent_1.TegridyStatefullComponent,
    PureComponent: TegridyPureComponent_1.TegridyPureComponent
};
exports.Component = TegridyStatefullComponent_1.TegridyStatefullComponent;
exports.PureComponent = TegridyPureComponent_1.TegridyPureComponent;


/***/ }),

/***/ "./src/lib/Components/TegridyPureComponent.ts":
/*!****************************************************!*\
  !*** ./src/lib/Components/TegridyPureComponent.ts ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// the base component class
var comparisonAlgorithms_1 = __webpack_require__(/*! ../comparisonAlgorithms/comparisonAlgorithms */ "./src/lib/comparisonAlgorithms/comparisonAlgorithms.ts");
var TegridyStatefullComponent_1 = __webpack_require__(/*! ./TegridyStatefullComponent */ "./src/lib/Components/TegridyStatefullComponent.ts");
var TegridyPureComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TegridyPureComponent, _super);
    function TegridyPureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // check if the component should update
    TegridyPureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        // handle state change
        if (nextProps === this.props) {
            return comparisonAlgorithms_1.didPureStateChange(this.state, nextState);
        }
        // handle props change
        return comparisonAlgorithms_1.didPurePropsChange(this.props, nextProps);
    };
    return TegridyPureComponent;
}(TegridyStatefullComponent_1.TegridyStatefullComponent));
exports.TegridyPureComponent = TegridyPureComponent;


/***/ }),

/***/ "./src/lib/Components/TegridyStatefullComponent.ts":
/*!*********************************************************!*\
  !*** ./src/lib/Components/TegridyStatefullComponent.ts ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// the base component class
var enums_1 = __webpack_require__(/*! ../enums */ "./src/lib/enums.ts");
var comparisonAlgorithms_1 = __webpack_require__(/*! ../comparisonAlgorithms/comparisonAlgorithms */ "./src/lib/comparisonAlgorithms/comparisonAlgorithms.ts");
var TegridyDom_1 = __webpack_require__(/*! ../TegridyDom */ "./src/lib/TegridyDom/index.ts");
var TegridyStatefullComponent = /** @class */ (function () {
    function TegridyStatefullComponent(props) {
        this.props = props;
        // @ts-ignore
        this.state = this.state || {};
        this.mounted = false;
        // helps us know if the component is our's
        this[enums_1.Internal.isStateFullComponent] = true;
    }
    // set the new state for the component, triggers an update if needed
    TegridyStatefullComponent.prototype.setState = function (partialState) {
        var newState = tslib_1.__assign({}, this.state, partialState);
        // check if we want to update the changes
        if (this.shouldComponentUpdate(this.props, newState)) {
            this.state = newState;
            this.componentWillUpdate(this.props, newState);
            TegridyDom_1.TegridyDom.updateInstance(this[enums_1.Internal.instance]);
            this.componentDidUpdate(this.props, newState);
        }
        else {
            // update the state without updating the component
            this.state = newState;
        }
    };
    // called before mounting the component into the dom
    TegridyStatefullComponent.prototype.componentDidMount = function () {
    };
    // called after unmounting the component from the dom
    TegridyStatefullComponent.prototype.componentWillUnmount = function () {
    };
    // called before receiving new props
    TegridyStatefullComponent.prototype.componentWillReceiveProps = function (nextProps, prevProps) {
    };
    // check if the component should update
    TegridyStatefullComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        // handle state change
        if (nextProps === this.props) {
            return comparisonAlgorithms_1.didStateChange(this.state, nextState);
        }
        else {
            // handle props change
            return comparisonAlgorithms_1.didPropsChange(this.props, nextProps);
        }
    };
    // called before every render, not including the first render.
    TegridyStatefullComponent.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    // Called after every render, not including the first render.
    TegridyStatefullComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
    };
    TegridyStatefullComponent.prototype.render = function () { };
    TegridyStatefullComponent.prototype.forceUpdate = function () {
        TegridyDom_1.TegridyDom.updateInstance(this[enums_1.Internal.instance]);
    };
    return TegridyStatefullComponent;
}());
exports.TegridyStatefullComponent = TegridyStatefullComponent;
// helps us know if the component is our's
TegridyStatefullComponent[enums_1.Internal.isStateFullComponent] = true;


/***/ }),

/***/ "./src/lib/Helpers.ts":
/*!****************************!*\
  !*** ./src/lib/Helpers.ts ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// check if value is astring
var enums_1 = __webpack_require__(/*! ./enums */ "./src/lib/enums.ts");
exports.isString = function (i) { return typeof i === 'string'; };
// check if value is a number
exports.isNumber = function (i) { return typeof i === 'number'; };
// check if value is an array
exports.isArray = function (i) { return typeof i === 'object' && Array.isArray(i); };
// check if value is function
exports.isFunction = function (i) { return typeof i === 'function'; };
// check if value is undefined or null
exports.isExist = function (i) { return i !== undefined && i !== null; };
// checks if a value is boolean
exports.isBoolean = function (i) { return typeof i === 'boolean'; };
// A simple, non secure hash function that turns a string to numbers for faster comparison
// derived from:
// https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
exports.fastHash = function (s) {
    var hash = 0;
    if (s.length == 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};
exports.isStateFullComponent = function (c) { return c && c.publicInstance && c.publicInstance[enums_1.Internal.isStateFullComponent]; };
exports.isFunctionalComponent = function (c) { return c && c.publicInstance && c.publicInstance[enums_1.Internal.isFunctionalComponent]; };
exports.isComponent = exports.isStateFullComponent || exports.isFunctionalComponent;


/***/ }),

/***/ "./src/lib/TegridyDom/Reconciler.ts":
/*!******************************************!*\
  !*** ./src/lib/TegridyDom/Reconciler.ts ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// will lookup Tegridy components in the an array of children
var index_1 = __webpack_require__(/*! ./index */ "./src/lib/TegridyDom/index.ts");
var Helpers_1 = __webpack_require__(/*! ../Helpers */ "./src/lib/Helpers.ts");
// recursively looking for the children who are also components
// to call the componentWillUnmount hook
var findComponentsInChildren = function (childInstances) {
    var total = [];
    for (var i = 0, len = childInstances.length; i < len; i++) {
        var child = childInstances[i];
        // filter null children
        if (!Helpers_1.isExist(child)) {
            return [];
        }
        // for array children we need to look for each child and check it
        if (Helpers_1.isArray(child)) {
            for (var j = 0, len2 = child.length; j < len2; j++) {
                var subChild = child[j];
                if (subChild.publicInstance && Helpers_1.isStateFullComponent(subChild)) {
                    total.push(subChild);
                }
                if (subChild.childInstances) {
                    var childrenFound = findComponentsInChildren(subChild.childInstances);
                    total = total.concat(childrenFound);
                }
            }
        }
        else {
            if (child.publicInstance && Helpers_1.isStateFullComponent(child)) {
                total.push(child);
            }
            if (child.childInstances) {
                var childrenFound = findComponentsInChildren(child.childInstances);
                total = total.concat(childrenFound);
            }
        }
    }
    return total;
};
// handle instance when it's not created (the first call to render)
exports.reconcileNoInstance = function (parentDom, element) {
    if (element === null) {
        return null;
    }
    var newInstance = index_1.TegridyDom.instantiate(element, null, parentDom);
    parentDom.appendChild(newInstance.dom);
    return newInstance;
};
// Element is non existent (when returning null from render)
exports.reconcileNoElement = function (parentDom, instance) {
    instance && instance.dom && parentDom.removeChild(instance.dom);
    return null;
};
// reconcile dom changes to an existing component
exports.reconcileComponentDomChange = function (parentDom, instance, element) {
    var newInstance = index_1.TegridyDom.instantiate(element, instance, parentDom);
    var oldInstanceChildComponents = findComponentsInChildren(instance.childInstances);
    var newInstanceChildComponents = findComponentsInChildren(newInstance.childInstance.childInstances);
    var _loop_1 = function (i) {
        var component = oldInstanceChildComponents[i];
        var exists = !!newInstanceChildComponents.find(function (c) {
            return c.publicInstance === component.publicInstance;
        });
        if (!exists) {
            // before unmount hook
            component.publicInstance.componentWillUnmount();
            component.publicInstance.mounted = false;
        }
    };
    for (var i = 0; i < oldInstanceChildComponents.length; i++) {
        _loop_1(i);
    }
    // for shadow root elements
    if (parentDom && parentDom.host) {
        // replace child manually
        if (parentDom.firstElementChild) {
            parentDom.removeChild(parentDom.firstElementChild);
        }
        parentDom.appendChild(newInstance.dom);
        console.log(newInstance.dom.innerText);
    }
    else {
        parentDom.replaceChild(newInstance.dom, instance.dom);
    }
    return newInstance;
};
// reconcile a regular HTML element
exports.reconcileNativeElement = function (parentDom, instance, element) {
    index_1.TegridyDom.updateDomProperties(instance.dom, instance.element.props, element.props);
    instance.childInstances = index_1.TegridyDom.reconsileChildren(instance, element);
    instance.element = element;
    return instance;
};
// reconcile changes to an existing component
exports.reconcileComponentChanges = function (parentDom, instance, element) {
    // if we need to reconsile a component
    var childInstance = index_1.TegridyDom.reconsile(parentDom, instance.childInstance, instance.publicInstance);
    return {
        publicInstance: instance.publicInstance,
        dom: childInstance.dom,
        childInstances: childInstance,
        element: element
    };
};


/***/ }),

/***/ "./src/lib/TegridyDom/index.ts":
/*!*************************************!*\
  !*** ./src/lib/TegridyDom/index.ts ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Helpers_1 = __webpack_require__(/*! ../Helpers */ "./src/lib/Helpers.ts");
var comparisonAlgorithms_1 = __webpack_require__(/*! ../comparisonAlgorithms/comparisonAlgorithms */ "./src/lib/comparisonAlgorithms/comparisonAlgorithms.ts");
var enums_1 = __webpack_require__(/*! ../enums */ "./src/lib/enums.ts");
var Reconciler = tslib_1.__importStar(__webpack_require__(/*! ./Reconciler */ "./src/lib/TegridyDom/Reconciler.ts"));
var TegridyDom = /** @class */ (function () {
    function TegridyDom() {
        // where we keep the entire virtual dom
        this.virtualDom = null;
        // the root component
        this.rootComponent = null;
    }
    // instantiate the element
    TegridyDom.instantiate = function (element, parentInstance, parentDom) {
        // element cannot be an array, must exist and cannot be a boolean
        // these values occur when doing conditional rendering
        if (!Helpers_1.isExist(element) || Helpers_1.isBoolean(element)) {
            return null;
        }
        // it is a text Node
        if (Helpers_1.isString(element) || Helpers_1.isNumber(element)) {
            var textDom = document.createTextNode(element);
            return {
                dom: textDom,
                childInstances: [],
                element: element
            };
        }
        var tag = element.tag, props = element.props;
        var noKeysHit = true;
        // if dom element
        if (Helpers_1.isString(tag)) {
            if (parentDom) {
            }
            // let dom;
            // const stateHash = fastHash(JSON.stringify(props)).toString();
            // if (parentDom) {
            //     const childrenWithSameTags = [...parentDom.getElementsByTagName(tag as string)];
            //
            //     const cachedChildDom = childrenWithSameTags.find((d) => {
            //         console.log(d.getAttribute('_tegridy'), stateHash);
            //         return d.getAttribute('_tegridy') === stateHash;
            //     });
            //
            //     // if (cachedChildDom) {
            //     //     // dom = cachedChildDom;
            //     // } else {
            //         dom = document.createElement(tag as string);
            //         TegridyDom.updateDomProperties(dom, props, null, stateHash);
            //     // }
            // } else {
            //     dom = document.createElement(tag as string);
            //     TegridyDom.updateDomProperties(dom, props, null, stateHash);
            // }
            var dom_1 = document.createElement(tag);
            TegridyDom.updateDomProperties(dom_1, props, null);
            var children_1 = props.children || [];
            // create and add children to the dom
            var childInstances = children_1.map(function (child, index) {
                var childInstance;
                var isChildList = Helpers_1.isArray(child);
                var formerChild = !isChildList && parentInstance && parentInstance.__instance && parentInstance.__instance.childInstance && parentInstance.__instance.childInstance.childInstances[index];
                if (formerChild && formerChild.publicInstance && formerChild.element.tag === child.tag && Helpers_1.isFunction(formerChild.publicInstance.render)) {
                    var publicInstance = formerChild.publicInstance;
                    if (Helpers_1.isFunction(publicInstance.componentWillReceiveProps)) {
                        publicInstance.componentWillReceiveProps(publicInstance.props, child.props);
                    }
                    var isStatefull = Helpers_1.isStateFullComponent(formerChild);
                    var shouldUpdate = isStatefull
                        // statefull/pure component
                        ? publicInstance.shouldComponentUpdate(child.props, publicInstance.props)
                        // functional component
                        : comparisonAlgorithms_1.didPropsChange(publicInstance.props, child.props);
                    if (shouldUpdate) {
                        // lifecycle hook componentWillUpdate
                        isStatefull && publicInstance.componentWillUpdate(child.props, publicInstance.state);
                        var prevProps = publicInstance.props;
                        publicInstance.props = child.props;
                        var myChildInstance = TegridyDom.instantiate(publicInstance.render(), formerChild.publicInstance, publicInstance.__instance && publicInstance.__instance.dom);
                        var instance = {
                            childInstance: myChildInstance,
                            dom: myChildInstance.dom,
                            element: child,
                            publicInstance: publicInstance
                        };
                        myChildInstance && dom_1.appendChild(myChildInstance.dom);
                        // lifecycle hook componentDidUpdate
                        isStatefull && publicInstance.componentDidUpdate(prevProps, publicInstance.state);
                        childInstance = instance;
                    }
                    else {
                        formerChild && dom_1.appendChild(formerChild.dom);
                        childInstance = formerChild;
                    }
                }
                else if (isChildList) {
                    var hitKeys_1 = {};
                    if (!parentInstance[enums_1.Internal.componentCache].componentKeys) {
                        parentInstance[enums_1.Internal.componentCache].componentKeys = {};
                    }
                    var componentKeys_1 = parentInstance[enums_1.Internal.componentCache].componentKeys;
                    childInstance = child.reduce(function (acc, listChild) {
                        if (listChild.props && Helpers_1.isExist(listChild.props.key)) {
                            var childKey = index + "-listChild.props.key";
                            // check if this list element is already cached
                            var cachedElement = componentKeys_1[childKey];
                            if (cachedElement && comparisonAlgorithms_1.isShallowEqual(listChild.props, cachedElement.element.props)) {
                                if (noKeysHit) {
                                    noKeysHit = false;
                                }
                                dom_1.appendChild(cachedElement.instance.dom);
                                acc.push(cachedElement);
                                return acc;
                            }
                            var listChildInstance_1 = TegridyDom.instantiate(listChild, parentInstance, parentDom);
                            // cache this component
                            componentKeys_1[childKey] = {
                                element: listChild,
                                instance: listChildInstance_1
                            };
                            listChildInstance_1 && dom_1.appendChild(listChildInstance_1.dom);
                            listChildInstance_1 && acc.push(listChildInstance_1);
                            return acc;
                        }
                        else {
                            if (!children_1.__isChildren) {
                                console.warn('array element must contain key for optimization reasons');
                            }
                        }
                        var listChildInstance = TegridyDom.instantiate(listChild, parentInstance, parentDom);
                        listChildInstance && dom_1.appendChild(listChildInstance.dom);
                        listChildInstance && acc.push(listChildInstance);
                        return acc;
                    }, []);
                    if (!noKeysHit) {
                        Object.keys(componentKeys_1)
                            .forEach(function (key) {
                            // key for this list, but the key wasn't hit
                            if (key.startsWith("" + index) && !hitKeys_1[key]) {
                                delete componentKeys_1[key];
                            }
                        });
                    }
                }
                else {
                    childInstance = TegridyDom.instantiate(child, parentInstance, parentDom);
                    childInstance && dom_1.appendChild(childInstance.dom);
                }
                return childInstance;
            });
            // clean up the keys if needed
            if (noKeysHit && parentInstance && parentInstance[enums_1.Internal.componentCache].componentKeys) {
                parentInstance[enums_1.Internal.componentCache].componentKeys = {};
            }
            return { dom: dom_1, element: element, childInstances: childInstances, parentDom: parentDom };
        }
        else {
            // create and render the component
            var publicInstance = TegridyDom.createPublicInstance(element);
            var childElement = publicInstance.render();
            // instantiate the children
            var childInstance = TegridyDom.instantiate(childElement, publicInstance, publicInstance.__instance.dom || parentDom);
            var newInternalInstance = {
                dom: childInstance.dom,
                element: element,
                childInstance: childInstance,
                publicInstance: publicInstance,
                parentDom: parentDom
            };
            publicInstance[enums_1.Internal.instance] = newInternalInstance;
            // call the componentDidMount lifecycle hook
            if (!publicInstance.mounted && Helpers_1.isStateFullComponent(newInternalInstance)) {
                publicInstance.componentDidMount();
                publicInstance.mounted = true;
            }
            return newInternalInstance;
        }
    };
    // update the instance for our component
    TegridyDom.updateInstance = function (internalInstance) {
        var parentDom = internalInstance.parentDom || internalInstance.dom.parentNode;
        var element = internalInstance.element;
        TegridyDom.reconsile(parentDom, internalInstance, element);
    };
    // creates a public instance of the TegridyStatefullComponent
    TegridyDom.createPublicInstance = function (element) {
        var _a;
        // component already exist, don't recreate it
        if (element[enums_1.Internal.instance] && element[enums_1.Internal.instance].publicInstance) {
            return element[enums_1.Internal.instance].publicInstance;
        }
        var tag = element.tag, props = element.props;
        var publicInstance;
        // when this is an anonymous function, it will have no tag
        // component is a class
        if (tag && tag[enums_1.Internal.isStateFullComponent]) {
            publicInstance = new tag(props);
        }
        // component is a function
        else {
            publicInstance = (_a = {
                    props: props
                },
                _a[enums_1.Internal.isFunctionalComponent] = true,
                _a.render = function () { return tag
                    ? tag(publicInstance.props)
                    : Helpers_1.isFunction(element) && element(); } // call anonymous function
            ,
                _a);
        }
        // give the ref of the created component
        if (props && props.ref && Helpers_1.isFunction(props.ref)) {
            props.ref(publicInstance);
        }
        // create an empty internal instance
        publicInstance[enums_1.Internal.instance] = {};
        publicInstance[enums_1.Internal.componentCache] = {};
        return publicInstance;
    };
    // remove old dom properties, and add new ones
    TegridyDom.updateDomProperties = function (dom, nextProps, lastProps) {
        // give the ref of the html element
        if (nextProps.ref && Helpers_1.isFunction(nextProps.ref)) {
            nextProps.ref(dom);
        }
        // remove the old props
        if (lastProps) {
            var lastPropsNames = Object.keys(lastProps);
            for (var i = 0, len = lastPropsNames.length; i < len; i++) {
                var name_1 = lastPropsNames[i];
                var value = lastProps[name_1];
                if (name_1 === 'children') {
                    return;
                }
                if (Helpers_1.isFunction(value)) {
                    dom[name_1.toLowerCase()] = null;
                }
                else {
                    dom[name_1] = null;
                }
            }
        }
        // apply the new props
        if (nextProps) {
            var nextPropsNames = Object.keys(nextProps);
            for (var i = 0, len = nextPropsNames.length; i < len; i++) {
                var name_2 = nextPropsNames[i];
                var value = nextProps[name_2];
                if (name_2 === 'children') {
                    return;
                }
                if (Helpers_1.isFunction(value)) {
                    dom[name_2.toLowerCase()] = value;
                }
                else {
                    dom[name_2] = value;
                }
            }
        }
    };
    // makes sure that all the elements are fitted properly, deletes, replace and create if needed.
    TegridyDom.reconsile = function (parentDom, instance, element) {
        if (instance === null) {
            return Reconciler.reconcileNoInstance(parentDom, element);
        }
        else if (element === null) {
            return Reconciler.reconcileNoElement(parentDom, instance);
        }
        else if (instance.element.tag !== element.tag) {
            return Reconciler.reconcileComponentDomChange(parentDom, instance, element);
        }
        else if (Helpers_1.isString(element.tag)) {
            return Reconciler.reconcileNativeElement(parentDom, instance, element);
        }
        else {
            return Reconciler.reconcileComponentChanges(parentDom, instance, element);
        }
    };
    // reconcile the children of an instance
    TegridyDom.reconsileChildren = function (instance, element) {
        var dom = instance.dom, childInstances = instance.childInstances;
        var nextChildElements = element.props.children || [];
        var newChildInstances = [];
        var count = Math.max(childInstances.length, nextChildElements.length);
        for (var i = 0; i < count; i++) {
            var childInstance = childInstances[i];
            var childElement = nextChildElements[i];
            var newChildInstance = TegridyDom.reconsile(dom, childInstance, childElement);
            if (newChildInstance) {
                newChildInstances.push(newChildInstance);
            }
        }
        return newChildInstances;
    };
    return TegridyDom;
}());
exports.TegridyDom = TegridyDom;


/***/ }),

/***/ "./src/lib/comparisonAlgorithms/comparisonAlgorithms.ts":
/*!**************************************************************!*\
  !*** ./src/lib/comparisonAlgorithms/comparisonAlgorithms.ts ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helpers_1 = __webpack_require__(/*! ../Helpers */ "./src/lib/Helpers.ts");
// manually check shallow equality
function isShallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (!objA || !objB) {
        return false;
    }
    var aKeys = Object.keys(objA);
    var bKeys = Object.keys(objB);
    var len = aKeys.length;
    if (bKeys.length !== len) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var key = aKeys[i];
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
exports.isShallowEqual = isShallowEqual;
;
// check if props changed
exports.didPropsChange = function (prevProps, newProps) { return !isShallowEqual(prevProps, newProps); };
// check if state changed
exports.didStateChange = function (prevState, newState) { return !isShallowEqual(prevState, newState); };
// Make a comparison for the virtual dom
exports.didVDomChange = function (oldDom, newDom) {
    var html1 = oldDom.innerHTML;
    var html2 = newDom.innerHTML;
    // if the length has changed, change the dom
    if (html1.length !== html2.length) {
        return true;
    }
    // If the hash is different, change the dom
    // this might not work properly, should be improved 🤷‍♀️
    return Helpers_1.fastHash(html1) !== Helpers_1.fastHash(html2);
};
// check if state changed for pure component
exports.didPureStateChange = function (prevState, newState) { return !isShallowEqual(prevState, newState); };
// check if props changed for pure component
exports.didPurePropsChange = function (prevProps, newProps) { return !isShallowEqual(prevProps, newProps); };


/***/ }),

/***/ "./src/lib/enums.ts":
/*!**************************!*\
  !*** ./src/lib/enums.ts ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Internal;
(function (Internal) {
    Internal["instance"] = "__instance";
    Internal["isStateFullComponent"] = "__isStateFullComponent";
    Internal["componentCache"] = "__componentCache";
    Internal["isFunctionalComponent"] = "__isFunctionalComponent";
})(Internal = exports.Internal || (exports.Internal = {}));


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map