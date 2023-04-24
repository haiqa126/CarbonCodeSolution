"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/quiz";
exports.ids = ["pages/api/quiz"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/quiz/index.ts":
/*!*************************************!*\
  !*** ./src/pages/api/quiz/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log: [\n            \"query\"\n        ]\n    });\n    try {\n        const quiz = await prisma.quiz.findMany();\n        res.status(200);\n        res.json({\n            quiz\n        });\n    } catch (e) {\n        res.status(500);\n        res.json({\n            error: \"Unable to fetch list of quizes\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3F1aXovaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRy9CLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW1CLEVBQUU7SUFDaEYsTUFBTUMsU0FBTyxJQUFJSix3REFBWUEsQ0FBQztRQUFDSyxLQUFJO1lBQUM7U0FBUTtJQUFBO0lBRTVDLElBQUc7UUFFQyxNQUFNQyxPQUFNLE1BQU1GLE9BQU9FLElBQUksQ0FBQ0MsUUFBUTtRQUN0Q0osSUFBSUssTUFBTSxDQUFDO1FBQ1hMLElBQUlNLElBQUksQ0FBQztZQUFDSDtRQUFJO0lBRWxCLEVBQUUsT0FBTUksR0FBRTtRQUNOUCxJQUFJSyxNQUFNLENBQUM7UUFDWEwsSUFBSU0sSUFBSSxDQUFDO1lBQUNFLE9BQU87UUFBZ0M7SUFFckQ7QUFJQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaC10ZXN0LXRlbXBsYXRlLy4vc3JjL3BhZ2VzL2FwaS9xdWl6L2luZGV4LnRzPzZhZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOk5leHRBcGlSZXNwb25zZSkge1xuY29uc3QgcHJpc21hPW5ldyBQcmlzbWFDbGllbnQoe2xvZzpbXCJxdWVyeVwiXX0pXG5cbnRyeXtcblxuICAgIGNvbnN0IHF1aXo9IGF3YWl0IHByaXNtYS5xdWl6LmZpbmRNYW55KCk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5qc29uKHtxdWl6fSlcblxufSBjYXRjaChlKXtcbiAgICByZXMuc3RhdHVzKDUwMCk7XG4gICAgcmVzLmpzb24oe2Vycm9yOiBcIlVuYWJsZSB0byBmZXRjaCBsaXN0IG9mIHF1aXplc1wifSk7XG5cbn0gXG5cblxuXG59XG5cbiAgICBcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwicXVpeiIsImZpbmRNYW55Iiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/quiz/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/quiz/index.ts"));
module.exports = __webpack_exports__;

})();