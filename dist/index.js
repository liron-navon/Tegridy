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
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/lib/Components/TegridyStatefullComponent.ts (referenced with cjs require) */
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
var TegridyStatefullComponent_1 = __webpack_require__(/*! ./lib/Components/TegridyStatefullComponent */ "./src/lib/Components/TegridyStatefullComponent.ts");
var Helpers_1 = __webpack_require__(/*! ./lib/Helpers */ "./src/lib/Helpers.ts");
var Helpers_2 = __webpack_require__(/*! ./lib/Helpers */ "./src/lib/Helpers.ts");
var Helpers_3 = __webpack_require__(/*! ./lib/Helpers */ "./src/lib/Helpers.ts");
var createComponent = function (tag, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    if (Helpers_1.isFunction(tag) && !tag.__isStatefull) {
        tag.__isFunctional = true;
    }
    return {
        tag: tag,
        props: props || {},
        children: children,
        isF: Boolean(tag.__isFunctional),
        isC: Boolean(tag.__isStatefull)
    };
};
var applyElementProps = function (dom, props, lastProps) {
    Object.keys(props).forEach(function (name) {
        if (name.startsWith('on')) {
            dom.addEventListener(name.substring(2).toLowerCase(), props[name]);
        }
        else {
            dom.setAttribute(name, props[name]);
        }
    });
};
var Tegridy = /** @class */ (function () {
    function Tegridy() {
        this.vDom = null;
        this.rootElement = null;
    }
    Tegridy.updateState = function (instance, newState) {
        var parentDom = instance.parentDom, dom = instance.dom, rootVDom = instance.rootVDom;
        instance.state = newState;
        instance.elementsUsedFromCache = [];
        Tegridy.reconcileComponent(rootVDom, parentDom, instance, dom);
        // delete unused keys
        var keys = Object.keys(instance.cachedElements);
        if (keys.length !== instance.elementsUsedFromCache.length) {
            keys.forEach(function (k) {
                if (!instance.elementsUsedFromCache.includes(k)) {
                    delete instance.cachedElements[k];
                }
            });
        }
    };
    Tegridy.reconcileChildren = function (parentComponent, parentDom, lastInstance, lastDom, lastComponentInstance) {
        if (!parentComponent.children) {
            return null;
        }
        parentComponent.children.map(function (child, i) {
            if (Helpers_2.isArray(child)) {
                if (lastComponentInstance && lastComponentInstance.cachedElements) {
                    child.map(function (subChild) {
                        var key = i + parentComponent.tag + subChild.props.key;
                        var cachedInstance = lastComponentInstance.cachedElements[key];
                        if (!cachedInstance) {
                            var _a = Tegridy.reconcile(subChild, parentDom, null, null, lastComponentInstance), dom = _a.dom, vDom = _a.vDom;
                            lastComponentInstance.cachedElements[key] = {
                                dom: dom, vDom: vDom, r: lastComponentInstance.renderID
                            };
                            lastComponentInstance.elementsUsedFromCache.push(key);
                        }
                        else {
                            // no need to render this
                            var _b = Tegridy.reconcile(subChild, parentDom, cachedInstance.vDom, cachedInstance.dom, lastComponentInstance), dom = _b.dom, vDom = _b.vDom;
                            lastComponentInstance.cachedElements[key] = {
                                dom: dom, vDom: vDom, r: lastComponentInstance.renderID
                            };
                            lastComponentInstance.elementsUsedFromCache.push(key);
                        }
                    });
                }
                else {
                    child.map(function (child) {
                        return Tegridy.reconcile(child, parentDom, null, null, lastComponentInstance);
                    });
                }
                //cachedElements
                // child.map((child) => {
                //     return Tegridy.reconcile(child, parentDom, lastInstance, lastDom, null);
                // });
                return;
            }
            else {
                var childDom = lastDom
                    ? Helpers_2.isArray(lastDom)
                        ? lastDom[i]
                        : lastDom.childNodes[i]
                    : null;
                var childInstance = lastInstance
                    ? Helpers_2.isArray(lastInstance)
                        ? lastInstance[i]
                        : lastInstance.children[i]
                    : null;
                return Tegridy.reconcile(child, parentDom, childInstance, childDom, lastComponentInstance);
            }
        });
        return { dom: parentDom, vDom: parentComponent };
    };
    Tegridy.reconcileComponent = function (component, parentDom, lastInstance, lastDom) {
        if (component.isF) {
            var instance = component.tag;
            instance.parentDom = parentDom;
            var res = instance(component.props);
            if (!instance.cachedElements) {
                instance.cachedElements = {};
            }
            var reconciled = Tegridy.reconcile(res, parentDom, instance.vDom, lastDom ? lastDom : null, instance);
            instance.vDom = reconciled.vDom;
            instance.dom = reconciled.dom;
            instance.rootVDom = component;
            return reconciled;
        }
        else {
            var instance = lastInstance ? lastInstance : new component.tag(component.props);
            var res = instance.render();
            instance.parentDom = parentDom;
            if (!instance.cachedElements) {
                instance.cachedElements = {};
            }
            var reconciled = Tegridy.reconcile(res, parentDom, instance.vDom, lastDom ? lastDom : null, instance);
            instance.vDom = reconciled.vDom;
            instance.dom = reconciled.dom;
            instance.rootVDom = component;
            return reconciled;
        }
    };
    Tegridy.reconcile = function (component, parentDom, lastInstance, lastDom, lastComponentInstance) {
        if (Helpers_1.isBoolean(component) || !Helpers_2.isExist(component)) {
            return null;
        }
        if (Helpers_2.isString(component) || Helpers_1.isNumber(component)) {
            var newNode = document.createTextNode(component.toString());
            if (lastDom) {
                parentDom.replaceChild(newNode, lastDom);
            }
            else {
                parentDom.appendChild(newNode);
            }
            return { dom: newNode, vDom: component };
        }
        if (component.tag && Helpers_1.isFunction(component.tag)) {
            return Tegridy.reconcileComponent(component, parentDom, lastInstance, lastDom);
        }
        if (lastInstance && lastDom) {
            if (component.tag) {
                if (lastInstance.tag !== component.tag) {
                    parentDom.removeChild(lastDom);
                    return Tegridy.reconcileChildren(component, parentDom, null, null, lastComponentInstance);
                }
                debugger;
                if (!Helpers_3.isShallowEqual(lastInstance.props, component.props)) {
                    applyElementProps(lastDom, component.props, lastInstance.props);
                    return { dom: lastDom, vDom: lastInstance.vDom };
                }
                if (component.children) {
                    return Tegridy.reconcileChildren(component, lastDom, component, lastDom, lastComponentInstance);
                }
            }
            else {
                // compare text nodes
                if (lastInstance === component) {
                    return { dom: lastDom, vDom: component };
                }
                else {
                    parentDom.replaceWith(document.createTextNode(component));
                }
            }
        }
        else {
            if (component.tag) {
                var newDomNode = document.createElement(component.tag);
                parentDom.appendChild(newDomNode);
                applyElementProps(newDomNode, component.props, null);
                if (component.children) {
                    return Tegridy.reconcileChildren(component, newDomNode, null, null, lastComponentInstance);
                }
                return { dom: newDomNode, vDom: component };
            }
            else {
                var newDomNode = document.createTextNode(component);
                if (parentDom.nodeType === Node.TEXT_NODE) {
                    parentDom.replaceWith(newDomNode);
                }
                else {
                    debugger;
                    parentDom.appendChild(newDomNode);
                }
                return { dom: newDomNode, vDom: component };
            }
        }
        return { dom: parentDom, vDom: component };
    };
    return Tegridy;
}());
exports.Tegridy = Tegridy;
var render = function (component, element) {
    var t = new Tegridy();
    t.vDom = component;
    t.rootElement = element;
    Tegridy.reconcile(component, t.rootElement, null, null, null);
};
exports.default = {
    createComponent: createComponent,
    Component: TegridyStatefullComponent_1.TegridyStatefullComponent,
    render: render
};


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
var index_1 = __webpack_require__(/*! ../../index */ "./src/index.ts");
var TegridyStatefullComponent = /** @class */ (function () {
    function TegridyStatefullComponent(props) {
        this.cachedElements = {};
        this.elementsUsedFromCache = [];
        this.props = props;
        // @ts-ignore
        this.state = this.state || {};
        this.mounted = false;
    }
    // set the new state for the component, triggers an update if needed
    TegridyStatefullComponent.prototype.setState = function (partialState) {
        var newState = tslib_1.__assign({}, this.state, partialState);
        //
        // // check if we want to update the changes
        // if (this.shouldComponentUpdate(this.props, newState)) {
        //     this.state = newState;
        //
        //     this.componentWillUpdate(this.props, newState);
        //
        index_1.Tegridy.updateState(this, newState);
        //
        //     this.componentDidUpdate(this.props, newState);
        // } else {
        //     // update the state without updating the component
        //     this.state = newState;
        // }
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
        // // handle state change
        // if (nextProps === this.props) {
        //     return didStateChange(this.state, nextState)
        // } else {
        //     // handle props change
        //     return didPropsChange(this.props, nextProps)
        // }
        return true;
    };
    // called before every render, not including the first render.
    TegridyStatefullComponent.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    // Called after every render, not including the first render.
    TegridyStatefullComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
    };
    TegridyStatefullComponent.prototype.render = function () { return null; };
    TegridyStatefullComponent.prototype.forceUpdate = function () {
        // TegridyDom.updateInstance(this[Internal.instance]);
    };
    TegridyStatefullComponent.__isStatefull = true;
    return TegridyStatefullComponent;
}());
exports.TegridyStatefullComponent = TegridyStatefullComponent;


/***/ }),

/***/ "./src/lib/Helpers.ts":
/*!****************************!*\
  !*** ./src/lib/Helpers.ts ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// check if value is astring
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.isStateFullComponent = function (c) { return c && c.publicInstance && c.publicInstance.__isStatefull; };
exports.isFunctionalComponent = function (c) { return c && c.publicInstance && c.publicInstance.__isFunctional; };
exports.isComponent = exports.isStateFullComponent || exports.isFunctionalComponent;
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


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map