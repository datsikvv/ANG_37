(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/Header/header.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/Header/header.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n    <p class=\"header__company-name\">{{companyName}}</p></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>add-product works!</p> -->\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit\">\n    <div class=\"form-group\">\n      <label for=\"product\">Product</label>\n      <input  type=\"text\" class=\"form-control\" id=\"product\"  placeholder=\"Enter data\" formControleName=\"email\">\n    </div>\n\n<div class=\"form-group\">\n    <label for=\"product\">Price</label>\n    <input  type=\"text\" class=\"form-control\" id=\"product\"  placeholder=\"Enter data\" formControleName=\"password\">\n</div>\n  \n    \n\n    <button  class=\"btn btn-primary\" >Submit</button>\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- <app-product-list></app-product-list> -->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-2\">\n            <nav class=\"nav\">\n                <ul>\n                    <li>    \n                        <button routerLink=\"/home\"\n                         routerLinkActive=\"active\"\n                         class=\"btn  btn-sm btn-outline-light .full-width btn-primary\">Home</button>\n                    </li>\n                    <li>    \n                        <button routerLink=\"/table\" \n                        routerLinkActive=\"active\"\n                        class=\"btn btn-sm btn-outline-light full-width btn-primary\">Table</button>\n                    </li>\n                    <li>    \n                        <button routerLink=\"/form\"\n                         routerLinkActive=\"active\" \n                         class=\"btn  btn-sm btn-outline-light .full-width btn-primary\">Form</button>\n                    </li>\n                    <li>    \n                        <button routerLink=\"/test-style\" \n                        routerLinkActive=\"active\"\n                        class=\"btn  btn-sm btn-outline-light .full-width btn-primary\">Test-style</button>\n                    </li>\n                    <li>    \n                        <button routerLink=\"/input\" \n                        routerLinkActive=\"active\"\n                        class=\"btn  btn-sm btn-outline-light .full-width btn-primary\">Input-output</button>\n                    </li>\n                    <li>    \n                        <button routerLink=\"/view\" \n                        routerLinkActive=\"active\"\n                        class=\"btn  btn-sm btn-outline-light .full-width btn-primary\">View</button>\n                    </li>\n                    <li>    \n                        <button routerLink=\"/binding\" \n                        routerLinkActive=\"active\"\n                        class=\"btn  btn-sm btn-outline-light .full-width btn-primary\">Binding</button>\n                    </li>\n\n                </ul>\n            \n            \n            </nav>\n        </div> \n        <div class=\"col-10\">\n            <router-outlet></router-outlet>\n        </div>\n        \n    </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/block-host/block-host.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/block-host/block-host.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>block-host works!</p>\n<app-block></app-block>\n<app-block></app-block>\n<app-block></app-block>\n<app-block></app-block>\n<app-block></app-block>\n<app-block></app-block>\n<app-block></app-block>\n<input #name type=\"text\" value=\"text\">\n<button (click)=\"showBlock()\">Show</button>\n<ng-content></ng-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/block-host/block/block.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/block-host/block/block.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"visble\">block works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/data-binding/data-binding.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/data-binding/data-binding.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>data-binding works!</p>\n\n<!-- <img src=\"assets/img/1.jpg\" title=\"text\"> -->\n<img [src]=\"res\" title=\"text\"> \n<!-- <img src={{res}} title=\"text\">  -->\n\n\n\n<input type=\"checkbox\" [checked]=\"flag\">flag\n\n<button (click)='toogleImage()'>toogle</button>\n\n<div [class]=\"getClasses()\">\n    text\n</div>\n<div [class.border1]=\"borderClass\" (click)='toogleImage()'>\n    text\n</div>\n<div [class.bg]=\"bgClass\">\n    text\n</div>\n<div [style.background-color]=\"flag ?  'red' : 'white'\">\n    text\n</div>\n\n<hr>\n\n<input type=\"checkbox\" [(ngModel)]=\"settings.accent\" [ngModelOptions]=\"{standalone: true}\" >Accent <br>\n<input type=\"checkbox\" [(ngModel)]=\"settings.error\" [ngModelOptions]=\"{standalone: true}\" >error <br>\n<input type=\"checkbox\" [(ngModel)]=\"settings.highlighted\" [ngModelOptions]=\"{standalone: true}\" >highlighted <br>\n\n\n<div [ngClass]=\"settings\">\n    Test div 1\n</div>\n<div [class.accent]=\"settings.accent\"\n[class.error]=\"settings.error\"\n[class.highlighted]=\"settings.highlighted\">\n    Test div 2\n</div>\n\n\n<hr>\n\n\n<input type=\"text\" [(ngModel)]=\"choice\" [ngModelOptions]=\"{standalone: true}\" >choice <br>\n\n\n<div [ngSwitch]=\"choice\">\n <div *ngSwitchCase=\"'1'\">div 1</div>\n <div *ngSwitchCase=\"'2'\">div 2</div>\n <div *ngSwitchCase=\"'3'\">div 3</div>\n <div *ngSwitchCase=\"'4'\">div 4</div>\n <div *ngSwitchDefault=>div  Default</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"welcome\">Welcome, dear friends!!!!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-output/counter/counter.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input-output/counter/counter.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"border: 1px solid black; padding: 3px; margin: 10px\">\n    <h5>{{name}}</h5>\n    <p>Conter value: {{ counterValue }}</p>\n    <button (click)=\"increment()\">Increment</button>\n</div>\n<ng-content></ng-content>\n<p>END Content</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-output/input-output.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/input-output/input-output.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>input-output works!</p>\n<app-counter (onData)=\"test($event)\" [name]=\"'Counter 1'\" [counterValue]=\"5\"></app-counter>\n<app-counter (onData)=\"test($event)\" [name]=\"'Counter 2'\" [counterValue]=\"10\"></app-counter>\n<app-counter (onData)=\"test($event)\" [name]=\"getData()\"></app-counter>\n<app-counter>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. \n    Magni, ut. Excepturi in quod, repellat aut facere reiciendis\n     saepe aliquid eveniet! Deleniti quasi atque\n     fuga esse, facilis dignissimos recusandae dolor natus.\n</app-counter>\n<app-counter>\n    <p>Hello</p>\n</app-counter>\n<app-counter>\n    <h4>Bye</h4>\n</app-counter>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Products</p>\n<ol>\n    <li *ngFor=\"let product of productList\" (click)=\"selectProduct(product)\">\n        {{product.name}} {{product.price}}\n    </li>\n\n</ol>\n<hr>\n\n\n<table class=\"table\">\n    <thead>\n        <tr>    \n                <th>Product</th>\n                <th>Price</th> \n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let product of productList\" (click)=\"selectProduct(product)\">\n                <td >{{product.name}}</td>\n                <td >{{product.price}}</td>  \n        </tr>    \n\n    </tbody>\n</table>\n\n<p *ngIf=\"selectedProduct\">{{selectedProduct?.name}}</p>\n\n<br>\n<br>\n<br>\n<br>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-style/chapter/chapter.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-style/chapter/chapter.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Chapter name</h4>    \n\n<p>chapter works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-style/test-style.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test-style/test-style.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Book name</h2>\n\n\n<p>\n    Book description\n    <br>\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo suscipit ea placeat ad fuga qui voluptas at libero, dolorem eaque sapiente, sequi quia quas! Magnam molestias amet blanditiis adipisci id.\n</p>\n\n<app-chapter></app-chapter>\n<app-chapter></app-chapter>\n<app-chapter></app-chapter>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

/***/ "./src/Header/header.component.css":
/*!*****************************************!*\
  !*** ./src/Header/header.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n    height: 80px;\r\n    background-color: aquamarine;\r\n    padding: 5px;\r\n\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n.header__company-name {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: blueviolet;\r\n    font-family: sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9IZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFlBQVk7O0lBRVosYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvSGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5oZWFkZXJfX2NvbXBhbnktbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/Header/header.component.ts":
/*!****************************************!*\
  !*** ./src/Header/header.component.ts ***!
  \****************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.companyName = 'Mega Application';
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/Header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/Header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AddProductComponent = class AddProductComponent {
    constructor() { }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    onSubmit(loginForm) {
        console.log(loginForm.value);
    }
};
AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")).default]
    })
], AddProductComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav {\r\nheight: calc(100vh - 60px);\r\nbackground-color: lightblue;\r\n}\r\n\r\n.full-width {\r\n    width: 100%;\r\n}\r\n\r\n.active {\r\n    background-color: rgb(10, 57, 73) !important;\r\n    color: yellow !important;\r\n}\r\n\r\nul {\r\n    list-style: none\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG5oZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgNTcsIDczKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bla- bla-bla';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_Header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Header/header.component */ "./src/Header/header.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_list_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product.service */ "./src/app/product-list/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _test_style_test_style_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test-style/test-style.component */ "./src/app/test-style/test-style.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _test_style_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./test-style/chapter/chapter.component */ "./src/app/test-style/chapter/chapter.component.ts");
/* harmony import */ var _input_output_input_output_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-output/input-output.component */ "./src/app/input-output/input-output.component.ts");
/* harmony import */ var _input_output_counter_counter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./input-output/counter/counter.component */ "./src/app/input-output/counter/counter.component.ts");
/* harmony import */ var _block_host_block_host_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./block-host/block-host.component */ "./src/app/block-host/block-host.component.ts");
/* harmony import */ var _block_host_block_block_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./block-host/block/block.component */ "./src/app/block-host/block/block.component.ts");
/* harmony import */ var _data_binding_data_binding_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data-binding/data-binding.component */ "./src/app/data-binding/data-binding.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            src_Header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
            _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"],
            _test_style_test_style_component__WEBPACK_IMPORTED_MODULE_10__["TestStyleComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _test_style_chapter_chapter_component__WEBPACK_IMPORTED_MODULE_12__["ChapterComponent"],
            _input_output_input_output_component__WEBPACK_IMPORTED_MODULE_13__["InputOutputComponent"],
            _input_output_counter_counter_component__WEBPACK_IMPORTED_MODULE_14__["CounterComponent"],
            _block_host_block_host_component__WEBPACK_IMPORTED_MODULE_15__["BlockHostComponent"],
            _block_host_block_block_component__WEBPACK_IMPORTED_MODULE_16__["BlockComponent"],
            _data_binding_data_binding_component__WEBPACK_IMPORTED_MODULE_17__["DataBindingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                { path: 'table', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"] },
                { path: 'form', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_9__["AddProductComponent"] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                { path: 'test-style', component: _test_style_test_style_component__WEBPACK_IMPORTED_MODULE_10__["TestStyleComponent"] },
                { path: 'input', component: _input_output_input_output_component__WEBPACK_IMPORTED_MODULE_13__["InputOutputComponent"] },
                { path: 'view', component: _block_host_block_host_component__WEBPACK_IMPORTED_MODULE_15__["BlockHostComponent"] },
                { path: 'binding', component: _data_binding_data_binding_component__WEBPACK_IMPORTED_MODULE_17__["DataBindingComponent"] }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        providers: [
            _product_list_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/block-host/block-host.component.css":
/*!*****************************************************!*\
  !*** ./src/app/block-host/block-host.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLWhvc3QvYmxvY2staG9zdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/block-host/block-host.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-host/block-host.component.ts ***!
  \****************************************************/
/*! exports provided: BlockHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHostComponent", function() { return BlockHostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _block_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/block.component */ "./src/app/block-host/block/block.component.ts");



let BlockHostComponent = class BlockHostComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.inputName);
    }
    ngAfterViewInit() {
        console.log(this.inputName.nativeElement);
    }
    // public showBlock(): void {
    //   this.block.show();
    // }
    showBlock() {
        this.block.forEach(block => block.show());
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_block_block_component__WEBPACK_IMPORTED_MODULE_2__["BlockComponent"])
], BlockHostComponent.prototype, "block", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name', { static: false })
], BlockHostComponent.prototype, "inputName", void 0);
BlockHostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block-host',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block-host.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/block-host/block-host.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block-host.component.css */ "./src/app/block-host/block-host.component.css")).default]
    })
], BlockHostComponent);



/***/ }),

/***/ "./src/app/block-host/block/block.component.css":
/*!******************************************************!*\
  !*** ./src/app/block-host/block/block.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2NrLWhvc3QvYmxvY2svYmxvY2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/block-host/block/block.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/block-host/block/block.component.ts ***!
  \*****************************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlockComponent = class BlockComponent {
    constructor() {
        this.visble = false;
    }
    ngOnInit() {
    }
    show() {
        this.visble = true;
    }
};
BlockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-block',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/block-host/block/block.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./block.component.css */ "./src/app/block-host/block/block.component.css")).default]
    })
], BlockComponent);



/***/ }),

/***/ "./src/app/data-binding/data-binding.component.css":
/*!*********************************************************!*\
  !*** ./src/app/data-binding/data-binding.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".border1 {\r\n    border: 1px solid black ;\r\n}\r\n\r\n.bg {\r\n    background-color: aquamarine;\r\n}\r\n\r\n.italic {\r\n    font-style: italic;\r\n}\r\n\r\n.accent {\r\n    color: green;\r\n}\r\n\r\n.error {\r\n    border: 1px solid red;\r\n\r\n}\r\n\r\n.highlighted {\r\n    background-color: blueviolet;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1iaW5kaW5nL2RhdGEtYmluZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjs7QUFFekI7O0FBQ0E7SUFDSSw0QkFBNEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvZGF0YS1iaW5kaW5nL2RhdGEtYmluZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlcjEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgO1xyXG59XHJcblxyXG4uYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5hY2NlbnQge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG59XHJcbi5oaWdobGlnaHRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG5cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/data-binding/data-binding.component.ts":
/*!********************************************************!*\
  !*** ./src/app/data-binding/data-binding.component.ts ***!
  \********************************************************/
/*! exports provided: DataBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBindingComponent", function() { return DataBindingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataBindingComponent = class DataBindingComponent {
    constructor() {
        this.img1 = 'assets/img/1.jpg';
        this.img2 = 'assets/img/2.jpg';
        this.res = '';
        this.flag = '';
        this.settings = {
            accent: false,
            error: false,
            highlighted: false
        };
        this.choice = '';
        this.borderClass = false;
        this.bgClass = false;
    }
    ngOnInit() {
    }
    toogleImage() {
        if (this.res === this.img1) {
            this.res = this.img2;
        }
        else {
            this.res = this.img1;
        }
        this.borderClass = true;
        this.bgClass = true;
        // this.flag = !this.flag
    }
    getClasses() {
        return 'border1 bg italic';
    }
};
DataBindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-binding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-binding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/data-binding/data-binding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-binding.component.css */ "./src/app/data-binding/data-binding.component.css")).default]
    })
], DataBindingComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: rgb(197, 124, 13);\r\n}\r\n.welcome {\r\n    font-size: 75px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMTI0LCAxMyk7XHJcbn1cclxuLndlbGNvbWUge1xyXG4gICAgZm9udC1zaXplOiA3NXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/input-output/counter/counter.component.css":
/*!************************************************************!*\
  !*** ./src/app/input-output/counter/counter.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LW91dHB1dC9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/input-output/counter/counter.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/input-output/counter/counter.component.ts ***!
  \***********************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounterComponent = class CounterComponent {
    constructor() {
        this.name = 'NoName';
        this.counterValue = 0;
        this.counterStep = 1;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    increment() {
        this.counterValue = this.counterValue + this.counterStep;
        this.onData.emit(this.counterValue);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CounterComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('step')
], CounterComponent.prototype, "counterStep", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CounterComponent.prototype, "onData", void 0);
CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-output/counter/counter.component.html")).default,
        inputs: ['counterValue'],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./counter.component.css */ "./src/app/input-output/counter/counter.component.css")).default]
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/input-output/input-output.component.css":
/*!*********************************************************!*\
  !*** ./src/app/input-output/input-output.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LW91dHB1dC9pbnB1dC1vdXRwdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/input-output/input-output.component.ts":
/*!********************************************************!*\
  !*** ./src/app/input-output/input-output.component.ts ***!
  \********************************************************/
/*! exports provided: InputOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputOutputComponent", function() { return InputOutputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputOutputComponent = class InputOutputComponent {
    constructor() {
        this.sameData = {
            name: 'Ivan'
        };
    }
    ngOnInit() {
    }
    getData() {
        return this.sameData.name;
    }
    test(event) {
        return console.log(event);
    }
};
InputOutputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input-output',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-output.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/input-output/input-output.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input-output.component.css */ "./src/app/input-output/input-output.component.css")).default]
    })
], InputOutputComponent);



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/product-list/product.service.ts");



// const PRODUCTS: any[] = [
//   {name: 'LG', price: 500},
//   {name: 'Samsung', price: 500},
//   {name: 'Apple', price: 500},
//   {name: 'Sony', price: 500},
//   {name: 'HTC', price: 500},
//   {name: 'Moto', price: 500},
// ]
let ProductListComponent = class ProductListComponent {
    constructor(productService) {
        this.productService = productService;
        this.productList = [];
        this.selectedProduct = null;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.productList = data;
        });
    }
    selectProduct(product) {
        this.selectedProduct = product;
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-list/product-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/product-list/product.service.ts":
/*!*************************************************!*\
  !*** ./src/app/product-list/product.service.ts ***!
  \*************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ProductService = class ProductService {
    constructor() {
        this.products = [
            { name: 'LG', price: 500 },
            { name: 'Samsung', price: 500 },
            { name: 'Apple', price: 500 },
            { name: 'Sony', price: 500 },
            { name: 'HTC', price: 500 },
            { name: 'Moto', price: 500 },
        ];
    }
    getProducts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.products);
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);

;


/***/ }),

/***/ "./src/app/test-style/chapter/chapter.component.css":
/*!**********************************************************!*\
  !*** ./src/app/test-style/chapter/chapter.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Qtc3R5bGUvY2hhcHRlci9jaGFwdGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/test-style/chapter/chapter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/test-style/chapter/chapter.component.ts ***!
  \*********************************************************/
/*! exports provided: ChapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterComponent", function() { return ChapterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChapterComponent = class ChapterComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChapterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chapter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chapter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-style/chapter/chapter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chapter.component.css */ "./src/app/test-style/chapter/chapter.component.css")).default]
    })
], ChapterComponent);



/***/ }),

/***/ "./src/app/test-style/test-style.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-style/test-style.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\r\n    display: block;\r\n    border: 1px solid black;\r\n    margin: 3px;\r\n    padding: 3px;\r\n}\r\n\r\np {\r\n    color: red;\r\n\r\n}\r\n\r\nh2 {\r\ncolor: brown;\r\n}\r\n\r\n:host /deep/ p {\r\n    color: green;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1zdHlsZS90ZXN0LXN0eWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTs7QUFFZDs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZXN0LXN0eWxlL3Rlc3Qtc3R5bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG5cclxufVxyXG5cclxuaDIge1xyXG5jb2xvcjogYnJvd247XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBwIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/test-style/test-style.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-style/test-style.component.ts ***!
  \****************************************************/
/*! exports provided: TestStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestStyleComponent", function() { return TestStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestStyleComponent = class TestStyleComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestStyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-style',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-style.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test-style/test-style.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-style.component.css */ "./src/app/test-style/test-style.component.css")).default]
    })
], TestStyleComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Documents\datsyk\ANG-33-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map