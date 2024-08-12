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

/***/ "./app/dev.ts":
/*!********************!*\
  !*** ./app/dev.ts ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_module_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app-components */ \"../app-components/lib/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app_components__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n(() => {\n    console.log(\"Start Test\");\n    new _common_module_app_components__WEBPACK_IMPORTED_MODULE_0__.Confirm();\n})();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///./app/dev.ts?");

/***/ }),

/***/ "../app-components/lib/AppCompConfig.js":
/*!**********************************************!*\
  !*** ../app-components/lib/AppCompConfig.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AppCompConfig {\n    modalRemovalDelay = 500;\n    modalRemovalClassName = \"fade-out\";\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new AppCompConfig());\n//# sourceMappingURL=AppCompConfig.js.map\n\n//# sourceURL=webpack:///../app-components/lib/AppCompConfig.js?");

/***/ }),

/***/ "../app-components/lib/index.js":
/*!**************************************!*\
  !*** ../app-components/lib/index.js ***!
  \**************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Confirm: () => (/* reexport safe */ _modals_Confirm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _modals_Confirm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals/Confirm.js */ \"../app-components/lib/modals/Confirm.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modals_Confirm_js__WEBPACK_IMPORTED_MODULE_0__]);\n_modals_Confirm_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n//# sourceMappingURL=index.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/index.js?");

/***/ }),

/***/ "../app-components/lib/modals/Confirm.js":
/*!***********************************************!*\
  !*** ../app-components/lib/modals/Confirm.js ***!
  \***********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Confirm)\n/* harmony export */ });\n/* harmony import */ var _Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.js */ \"../app-components/lib/modals/Modal.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Modal_js__WEBPACK_IMPORTED_MODULE_0__]);\n_Modal_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nclass Confirm extends _Modal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super(\".confirm\");\n    }\n}\n//# sourceMappingURL=Confirm.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/modals/Confirm.js?");

/***/ }),

/***/ "../app-components/lib/modals/Modal.js":
/*!*********************************************!*\
  !*** ../app-components/lib/modals/Modal.js ***!
  \*********************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _common_module_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/app */ \"../app-module/lib/index.js\");\n/* harmony import */ var _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppCompConfig.js */ \"../app-components/lib/AppCompConfig.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_module_app__WEBPACK_IMPORTED_MODULE_0__]);\n_common_module_app__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nclass Modal extends _common_module_app__WEBPACK_IMPORTED_MODULE_0__.DomNode {\n    constructor(classNames, ...children) {\n        super(`dialog.modal${classNames}`, ...children, {\n            removalDelay: _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalRemovalDelay,\n            removalClassName: _AppCompConfig_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalRemovalClassName,\n        });\n        this.appendTo(_common_module_app__WEBPACK_IMPORTED_MODULE_0__.BodyNode).htmlElement.showModal();\n        this.onDom(\"click\", (event) => {\n            const rect = this.calculateRect();\n            if (event.clientX < rect.left ||\n                event.clientX > rect.right ||\n                event.clientY < rect.top ||\n                event.clientY > rect.bottom) {\n                this.remove();\n            }\n        });\n    }\n}\n//# sourceMappingURL=Modal.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-components/lib/modals/Modal.js?");

/***/ }),

/***/ "../app-module/lib/dom/BodyNode.js":
/*!*****************************************!*\
  !*** ../app-module/lib/dom/BodyNode.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../app-module/lib/dom/DomNode.js\");\n\nclass BodyNode extends _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super(document.body);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BodyNode());\n//# sourceMappingURL=BodyNode.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/BodyNode.js?");

/***/ }),

/***/ "../app-module/lib/dom/DomNode.js":
/*!****************************************!*\
  !*** ../app-module/lib/dom/DomNode.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomNode)\n/* harmony export */ });\n/* harmony import */ var _common_module_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/ts */ \"../ts-module/lib/index.js\");\n/* harmony import */ var _DomUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomUtil.js */ \"../app-module/lib/dom/DomUtil.js\");\n\n\nclass DomNode extends _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.EventContainer {\n    parent;\n    children = [];\n    removalDelay;\n    removalClassName;\n    htmlElement;\n    constructor(htmlElement, ...children) {\n        super();\n        this.htmlElement = htmlElement instanceof HTMLElement\n            ? htmlElement\n            : _DomUtil_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createHtmlElement(htmlElement ?? \"\");\n        this.append(...children);\n    }\n    appendText(text) {\n        if (this.htmlElement instanceof HTMLTextAreaElement) {\n            this.htmlElement.value += text;\n        }\n        else {\n            const fragment = document.createDocumentFragment();\n            text.split(\"\\n\").forEach((line, index) => {\n                if (index > 0)\n                    fragment.appendChild(document.createElement(\"br\"));\n                fragment.appendChild(document.createTextNode(line));\n            });\n            this.htmlElement.appendChild(fragment);\n        }\n        return this;\n    }\n    append(...children) {\n        for (const child of children) {\n            if (child instanceof DomNode) {\n                child.appendTo(this);\n            }\n            else if (typeof child === \"string\") {\n                this.appendText(child);\n            }\n            else {\n                if (child.removalDelay !== undefined) {\n                    this.removalDelay = child.removalDelay;\n                }\n                if (child.removalClassName !== undefined) {\n                    this.removalClassName = child.removalClassName;\n                }\n            }\n        }\n    }\n    isVisible() {\n        let currentNode = this;\n        while (currentNode !== undefined) {\n            if (currentNode.htmlElement === document.body) {\n                return true;\n            }\n            currentNode = currentNode.parent;\n        }\n        return false;\n    }\n    notifyVisibility() {\n        this.emit(\"visible\", ...[]);\n        this.children.forEach((child) => child.notifyVisibility());\n    }\n    appendTo(parent, index) {\n        if (index === undefined || index >= parent.htmlElement.childNodes.length) {\n            parent.htmlElement.appendChild(this.htmlElement);\n        }\n        else {\n            const referenceNode = parent.htmlElement.childNodes[index];\n            parent.htmlElement.insertBefore(this.htmlElement, referenceNode);\n        }\n        this.parent = parent;\n        if (this.isVisible())\n            this.notifyVisibility();\n        return this;\n    }\n    remove() {\n        if (this.removalClassName) {\n            this.htmlElement.classList.add(this.removalClassName);\n        }\n        if (this.removalDelay === undefined) {\n            this.htmlElement.remove();\n        }\n        else {\n            setTimeout(() => {\n                this.htmlElement.remove();\n            }, this.removalDelay);\n        }\n    }\n    empty() {\n        this.htmlElement.innerHTML = \"\";\n        return this;\n    }\n    set text(text) {\n        this.empty();\n        if (text)\n            this.appendText(text);\n    }\n    get text() {\n        return this.htmlElement.textContent ?? \"\";\n    }\n    style(styles) {\n        Object.assign(this.htmlElement.style, styles);\n        return this;\n    }\n    onDom(type, listener, options) {\n        this.htmlElement.addEventListener(type, listener, options);\n        return this;\n    }\n    calculateRect() {\n        return this.htmlElement.getBoundingClientRect();\n    }\n}\n//# sourceMappingURL=DomNode.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/DomNode.js?");

/***/ }),

/***/ "../app-module/lib/dom/DomUtil.js":
/*!****************************************!*\
  !*** ../app-module/lib/dom/DomUtil.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DomUtil {\n    createHtmlElement(selector) {\n        const parts = (selector || \"div\").split(/([#.])/);\n        const tagName = parts[0] || \"div\";\n        const element = document.createElement(tagName);\n        let currentType = \"\";\n        for (let i = 1; i < parts.length; i += 2) {\n            currentType = parts[i];\n            const value = parts[i + 1];\n            if (currentType === \"#\")\n                element.id = value;\n            else if (currentType === \".\")\n                element.classList.add(value);\n        }\n        return element;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new DomUtil());\n//# sourceMappingURL=DomUtil.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/DomUtil.js?");

/***/ }),

/***/ "../app-module/lib/dom/el.js":
/*!***********************************!*\
  !*** ../app-module/lib/dom/el.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ el)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../app-module/lib/dom/DomNode.js\");\n\nfunction el(htmlElement, ...children) {\n    return new _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](htmlElement, ...children);\n}\n//# sourceMappingURL=el.js.map\n\n//# sourceURL=webpack:///../app-module/lib/dom/el.js?");

/***/ }),

/***/ "../app-module/lib/index.js":
/*!**********************************!*\
  !*** ../app-module/lib/index.js ***!
  \**********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BodyNode: () => (/* reexport safe */ _dom_BodyNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   BrowserInfo: () => (/* reexport safe */ _utils_BrowserInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   DomNode: () => (/* reexport safe */ _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Router: () => (/* reexport safe */ _route_Router_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Store: () => (/* reexport safe */ _store_Store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   View: () => (/* reexport safe */ _route_View_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   el: () => (/* reexport safe */ _dom_el_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _dom_BodyNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/BodyNode.js */ \"../app-module/lib/dom/BodyNode.js\");\n/* harmony import */ var _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/DomNode.js */ \"../app-module/lib/dom/DomNode.js\");\n/* harmony import */ var _dom_el_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/el.js */ \"../app-module/lib/dom/el.js\");\n/* harmony import */ var _route_Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route/Router.js */ \"../app-module/lib/route/Router.js\");\n/* harmony import */ var _route_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route/View.js */ \"../app-module/lib/route/View.js\");\n/* harmony import */ var _store_Store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/Store.js */ \"../app-module/lib/store/Store.js\");\n/* harmony import */ var _utils_BrowserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/BrowserInfo.js */ \"../app-module/lib/utils/BrowserInfo.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_route_Router_js__WEBPACK_IMPORTED_MODULE_3__]);\n_route_Router_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack:///../app-module/lib/index.js?");

/***/ }),

/***/ "../app-module/lib/route/Router.js":
/*!*****************************************!*\
  !*** ../app-module/lib/route/Router.js ***!
  \*****************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_module_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/ts */ \"../ts-module/lib/index.js\");\n\nif (!window.URLPattern) {\n    await __webpack_require__.e(/*! import() */ \"vendors-node_modules_urlpattern-polyfill_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! urlpattern-polyfill */ \"./node_modules/urlpattern-polyfill/index.js\"));\n}\nclass Router {\n    routes = [];\n    viewOpening = false;\n    openingViews = [];\n    constructor() {\n        window.addEventListener(\"popstate\", (event) => {\n            console.log(event);\n        });\n    }\n    openView(View, params) {\n        this.viewOpening = true;\n        const view = new View();\n        view.changeParams(params);\n        this.openingViews.push(view);\n        this.viewOpening = false;\n    }\n    route(uri, View) {\n        const pathname = \"/\" + uri;\n        const urlPattern = new URLPattern({ pathname });\n        this.routes.push({ urlPattern, View });\n        const params = urlPattern.exec({ pathname: location.pathname })?.pathname\n            .groups;\n        if (params)\n            this.openView(View, params);\n    }\n    changeUri(uri) {\n        const pathname = \"/\" + uri;\n        history.pushState(undefined, \"\", pathname);\n        for (const route of this.routes) {\n            const openingView = this.openingViews.find((view) => view instanceof route.View);\n            const params = route.urlPattern.exec({ pathname: location.pathname })\n                ?.pathname.groups;\n            if (params) {\n                openingView\n                    ? openingView.changeParams(params)\n                    : this.openView(route.View, params);\n            }\n            else if (openingView) {\n                openingView.close();\n                _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.ArrayUtil.pull(this.openingViews, openingView);\n            }\n        }\n    }\n    go(uri) {\n        const pathname = \"/\" + uri;\n        if (location.pathname !== pathname) {\n            if (this.viewOpening)\n                setTimeout(() => this.changeUri(uri));\n            else\n                this.changeUri(uri);\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Router());\n//# sourceMappingURL=Router.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack:///../app-module/lib/route/Router.js?");

/***/ }),

/***/ "../app-module/lib/route/View.js":
/*!***************************************!*\
  !*** ../app-module/lib/route/View.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n    closed = false;\n    container;\n    changeParams(params) { }\n    close() {\n        this.container?.delete();\n        this.closed = true;\n    }\n}\n//# sourceMappingURL=View.js.map\n\n//# sourceURL=webpack:///../app-module/lib/route/View.js?");

/***/ }),

/***/ "../app-module/lib/store/Store.js":
/*!****************************************!*\
  !*** ../app-module/lib/store/Store.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _common_module_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-module/ts */ \"../ts-module/lib/index.js\");\n\nclass Store {\n    prefix;\n    constructor(name) {\n        this.prefix = `${name}/`;\n    }\n    getStorage(permanent) {\n        return permanent ? localStorage : sessionStorage;\n    }\n    getFullKey(key) {\n        return this.prefix + key;\n    }\n    static isQuotaExceededError(e) {\n        return e instanceof DOMException && (e.code === 22 ||\n            e.code === 1014 ||\n            e.name === \"QuotaExceededError\" ||\n            e.name === \"NS_ERROR_DOM_QUOTA_REACHED\");\n    }\n    set(key, value, permanent = false) {\n        const storage = this.getStorage(permanent);\n        const fullKey = this.getFullKey(key);\n        try {\n            storage.setItem(fullKey, JSON.stringify(value));\n        }\n        catch (e) {\n            if (Store.isQuotaExceededError(e)) {\n                storage.clear();\n                location.reload();\n            }\n            else {\n                throw e;\n            }\n        }\n    }\n    get(key) {\n        const fullKey = this.getFullKey(key);\n        const value = sessionStorage.getItem(fullKey) ??\n            localStorage.getItem(fullKey);\n        if (value === null)\n            return undefined;\n        try {\n            return _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.JsonUtil.parseWithUndefined(value);\n        }\n        catch (e) {\n            console.error(`Failed to parse ${fullKey}: ${value}`);\n            console.error(e);\n        }\n    }\n    getAll() {\n        const result = {};\n        const processStorage = (storage) => {\n            for (let i = 0; i < storage.length; i++) {\n                const key = storage.key(i);\n                if (key?.startsWith(this.prefix)) {\n                    const value = storage.getItem(key);\n                    if (value !== null) {\n                        const parsedKey = key.slice(this.prefix.length);\n                        try {\n                            result[parsedKey] = _common_module_ts__WEBPACK_IMPORTED_MODULE_0__.JsonUtil.parseWithUndefined(value);\n                        }\n                        catch (e) {\n                            console.error(`Failed to parse ${key}: ${value}`);\n                            console.error(e);\n                        }\n                    }\n                }\n            }\n        };\n        processStorage(sessionStorage);\n        processStorage(localStorage);\n        return result;\n    }\n    isPermanent(key) {\n        return localStorage.getItem(this.getFullKey(key)) !== null;\n    }\n    delete(...keys) {\n        keys.forEach((key) => {\n            const fullKey = this.getFullKey(key);\n            sessionStorage.removeItem(fullKey);\n            localStorage.removeItem(fullKey);\n        });\n    }\n    clear() {\n        [sessionStorage, localStorage].forEach((storage) => {\n            for (let i = storage.length - 1; i >= 0; i--) {\n                const key = storage.key(i);\n                if (key?.startsWith(this.prefix)) {\n                    storage.removeItem(key);\n                }\n            }\n        });\n    }\n}\n//# sourceMappingURL=Store.js.map\n\n//# sourceURL=webpack:///../app-module/lib/store/Store.js?");

/***/ }),

/***/ "../app-module/lib/utils/BrowserInfo.js":
/*!**********************************************!*\
  !*** ../app-module/lib/utils/BrowserInfo.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass BrowserInfo {\n    _isAndroid;\n    _isIOS;\n    get isAndroid() {\n        return this._isAndroid ??\n            (this._isAndroid = /Android/i.test(navigator.userAgent));\n    }\n    get isIOS() {\n        return this._isIOS ??\n            (this._isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent));\n    }\n    get isMobileDevice() {\n        return this.isAndroid || this.isIOS;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BrowserInfo());\n//# sourceMappingURL=BrowserInfo.js.map\n\n//# sourceURL=webpack:///../app-module/lib/utils/BrowserInfo.js?");

/***/ }),

/***/ "../ts-module/lib/event/EventContainer.js":
/*!************************************************!*\
  !*** ../ts-module/lib/event/EventContainer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventContainer)\n/* harmony export */ });\nclass EventContainer {\n    events = {};\n    on(eventName, eventHandler) {\n        if (!this.events[eventName])\n            this.events[eventName] = [];\n        this.events[eventName].push(eventHandler);\n    }\n    emit(eventName, ...args) {\n        if (!this.events[eventName])\n            return [];\n        return this.events[eventName].map((handler) => handler(...args));\n    }\n}\n//# sourceMappingURL=EventContainer.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/event/EventContainer.js?");

/***/ }),

/***/ "../ts-module/lib/index.js":
/*!*********************************!*\
  !*** ../ts-module/lib/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ArrayUtil: () => (/* reexport safe */ _utils_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   EventContainer: () => (/* reexport safe */ _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   JsonUtil: () => (/* reexport safe */ _utils_JsonUtil_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   StringUtil: () => (/* reexport safe */ _utils_StringUtil_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event/EventContainer.js */ \"../ts-module/lib/event/EventContainer.js\");\n/* harmony import */ var _utils_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ArrayUtil.js */ \"../ts-module/lib/utils/ArrayUtil.js\");\n/* harmony import */ var _utils_JsonUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/JsonUtil.js */ \"../ts-module/lib/utils/JsonUtil.js\");\n/* harmony import */ var _utils_StringUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/StringUtil.js */ \"../ts-module/lib/utils/StringUtil.js\");\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/index.js?");

/***/ }),

/***/ "../ts-module/lib/utils/ArrayUtil.js":
/*!*******************************************!*\
  !*** ../ts-module/lib/utils/ArrayUtil.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ArrayUtil {\n    pull(array, ...removeList) {\n        const removeSet = new Set(removeList);\n        return array.filter((item) => !removeSet.has(item));\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ArrayUtil());\n//# sourceMappingURL=ArrayUtil.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/ArrayUtil.js?");

/***/ }),

/***/ "../ts-module/lib/utils/JsonUtil.js":
/*!******************************************!*\
  !*** ../ts-module/lib/utils/JsonUtil.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass JsonUtil {\n    parseWithUndefined(data) {\n        return JSON.parse(data, (_, v) => v === null ? undefined : v);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new JsonUtil());\n//# sourceMappingURL=JsonUtil.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/JsonUtil.js?");

/***/ }),

/***/ "../ts-module/lib/utils/StringUtil.js":
/*!********************************************!*\
  !*** ../ts-module/lib/utils/StringUtil.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StringUtil {\n    capitalize(input) {\n        const words = input.split(\" \");\n        const capitalizedWords = words.map((word) => {\n            if (word.length === 0)\n                return word;\n            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();\n        });\n        return capitalizedWords.join(\" \");\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new StringUtil());\n//# sourceMappingURL=StringUtil.js.map\n\n//# sourceURL=webpack:///../ts-module/lib/utils/StringUtil.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/dev.ts");
/******/ 	
/******/ })()
;