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
exports.id = "pages/api/quiz/getquiz";
exports.ids = ["pages/api/quiz/getquiz"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/quiz/getquiz.ts":
/*!***************************************!*\
  !*** ./src/pages/api/quiz/getquiz.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log: [\n            \"query\"\n        ]\n    });\n    try {\n        const quizId = parseInt(req.query.id);\n        const quiz = await prisma.quiz.findUnique({\n            where: {\n                id: quizId\n            },\n            include: {\n                questions: true\n            }\n        });\n        if (!quiz) {\n            res.status(404);\n            res.json({\n                error: \"Quiz not found\"\n            });\n        } else {\n            res.status(200);\n            res.json({\n                quiz\n            });\n        }\n    } catch (e) {\n        res.status(500);\n        res.json({\n            error: \"Unable to fetch quiz data\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3F1aXovZ2V0cXVpei50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFHL0IsZUFBZUMsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLE1BQU1DLFNBQVMsSUFBSUosd0RBQVlBLENBQUM7UUFBRUssS0FBSztZQUFDO1NBQVE7SUFBQztJQUVqRCxJQUFJO1FBQ0YsTUFBTUMsU0FBU0MsU0FBU0wsSUFBSU0sS0FBSyxDQUFDQyxFQUFFO1FBRXBDLE1BQU1DLE9BQU8sTUFBTU4sT0FBT00sSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQ0xILElBQUlIO1lBQ047WUFDQU8sU0FBUztnQkFDUEMsV0FBVyxJQUFJO1lBQ2pCO1FBQ0Y7UUFFQSxJQUFJLENBQUNKLE1BQU07WUFDVFAsSUFBSVksTUFBTSxDQUFDO1lBQ1haLElBQUlhLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFpQjtRQUNyQyxPQUFPO1lBQ0xkLElBQUlZLE1BQU0sQ0FBQztZQUNYWixJQUFJYSxJQUFJLENBQUM7Z0JBQUVOO1lBQUs7UUFDbEIsQ0FBQztJQUNILEVBQUUsT0FBT1EsR0FBRztRQUNWZixJQUFJWSxNQUFNLENBQUM7UUFDWFosSUFBSWEsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBNEI7SUFDaEQsU0FBVTtRQUNSLE1BQU1iLE9BQU9lLFdBQVc7SUFDMUI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVjaC10ZXN0LXRlbXBsYXRlLy4vc3JjL3BhZ2VzL2FwaS9xdWl6L2dldHF1aXoudHM/MWMwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1aXpJZCA9IHBhcnNlSW50KHJlcS5xdWVyeS5pZCBhcyBzdHJpbmcpO1xyXG5cclxuICAgIGNvbnN0IHF1aXogPSBhd2FpdCBwcmlzbWEucXVpei5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogcXVpeklkLFxyXG4gICAgICB9LFxyXG4gICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgcXVlc3Rpb25zOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFxdWl6KSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDA0KTtcclxuICAgICAgcmVzLmpzb24oeyBlcnJvcjogXCJRdWl6IG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApO1xyXG4gICAgICByZXMuanNvbih7IHF1aXogfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApO1xyXG4gICAgcmVzLmpzb24oeyBlcnJvcjogXCJVbmFibGUgdG8gZmV0Y2ggcXVpeiBkYXRhXCIgfSk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInByaXNtYSIsImxvZyIsInF1aXpJZCIsInBhcnNlSW50IiwicXVlcnkiLCJpZCIsInF1aXoiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpbmNsdWRlIiwicXVlc3Rpb25zIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZSIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/quiz/getquiz.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/quiz/getquiz.ts"));
module.exports = __webpack_exports__;

})();