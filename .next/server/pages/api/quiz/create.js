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
exports.id = "pages/api/quiz/create";
exports.ids = ["pages/api/quiz/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./src/pages/api/quiz/create.ts":
/*!**************************************!*\
  !*** ./src/pages/api/quiz/create.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        log: [\n            \"query\"\n        ]\n    });\n    try {\n        const quiz = req.body;\n        const newQuiz = await prisma.quiz.create({\n            data: {\n                name: quiz.name,\n                questions: {\n                    create: quiz.questions.map((q)=>({\n                            text: q.text,\n                            answers: JSON.stringify(q.answers),\n                            correctAnswer: q.correctAnswer\n                        }))\n                }\n            }\n        });\n        console.log(\"New quiz created:\", newQuiz);\n        res.status(200);\n        res.json(newQuiz);\n    } catch (e) {\n        throw e;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3F1aXovY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUkvQixlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTUMsU0FBUyxJQUFJSix3REFBWUEsQ0FBQztRQUFFSyxLQUFLO1lBQUM7U0FBUTtJQUFDO0lBRWpELElBQUk7UUFDRixNQUFNQyxPQUFPSixJQUFJSyxJQUFJO1FBQ3JCLE1BQU1DLFVBQVUsTUFBTUosT0FBT0UsSUFBSSxDQUFDRyxNQUFNLENBQUM7WUFDdkNDLE1BQU07Z0JBQ0pDLE1BQU1MLEtBQUtLLElBQUk7Z0JBQ2ZDLFdBQVc7b0JBQ1RILFFBQVFILEtBQUtNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQWlCOzRCQUMzQ0MsTUFBTUQsRUFBRUMsSUFBSTs0QkFDWkMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDSixFQUFFRSxPQUFPOzRCQUNqQ0csZUFBZUwsRUFBRUssYUFBYTt3QkFDaEM7Z0JBQ0Y7WUFDRjtRQUNGO1FBRUFDLFFBQVFmLEdBQUcsQ0FBQyxxQkFBcUJHO1FBQ2pDTCxJQUFJa0IsTUFBTSxDQUFDO1FBQ1hsQixJQUFJbUIsSUFBSSxDQUFDZDtJQUNYLEVBQUUsT0FBT2UsR0FBRztRQUNWLE1BQU1BLEVBQUU7SUFDVjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLXRlc3QtdGVtcGxhdGUvLi9zcmMvcGFnZXMvYXBpL3F1aXovY3JlYXRlLnRzPzA2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1aXogPSByZXEuYm9keTtcclxuICAgIGNvbnN0IG5ld1F1aXogPSBhd2FpdCBwcmlzbWEucXVpei5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogcXVpei5uYW1lLFxyXG4gICAgICAgIHF1ZXN0aW9uczoge1xyXG4gICAgICAgICAgY3JlYXRlOiBxdWl6LnF1ZXN0aW9ucy5tYXAoKHE6IFF1ZXN0aW9uKSA9PiAoe1xyXG4gICAgICAgICAgICB0ZXh0OiBxLnRleHQsXHJcbiAgICAgICAgICAgIGFuc3dlcnM6IEpTT04uc3RyaW5naWZ5KHEuYW5zd2VycyksXHJcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXI6IHEuY29ycmVjdEFuc3dlcixcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJOZXcgcXVpeiBjcmVhdGVkOlwiLCBuZXdRdWl6KTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKTtcclxuICAgIHJlcy5qc29uKG5ld1F1aXopO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHJpc21hIiwibG9nIiwicXVpeiIsImJvZHkiLCJuZXdRdWl6IiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJxdWVzdGlvbnMiLCJtYXAiLCJxIiwidGV4dCIsImFuc3dlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29ycmVjdEFuc3dlciIsImNvbnNvbGUiLCJzdGF0dXMiLCJqc29uIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/quiz/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/quiz/create.ts"));
module.exports = __webpack_exports__;

})();