"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[username]",{

/***/ "./src/components/Todos.tsx":
/*!**********************************!*\
  !*** ./src/components/Todos.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Todos = (props)=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const name = router.query.username;\n    async function getTodos(user) {\n        try {\n            const response = await fetch(\"/api/\".concat(user), {\n                method: \"GET\"\n            });\n            const data = await response.json();\n            setTodos(data);\n        } catch (TypeError) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                lineNumber: 22,\n                columnNumber: 21\n            }, this);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getTodos(name);\n    }, [\n        todos\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-10 mx-28\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex text-4xl font-bold\",\n                    children: [\n                        \"Hello \\xa0 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#2161AB]\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 71\n                        }, undefined),\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-14 mb-5 text-2xl font-bold\",\n                    children: \" Here is your List!\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4 gap-3 \",\n                    children: todos.map((todo)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            todo: todo\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 33\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-20 mb-5 text-2xl font-bold\",\n                            children: \" Add more Tasks to your List!\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow-md text-lg w-80 h-10 rounded-lg px-4 py-6 bg-[#BDD2FA] mt-5\",\n                            type: \"text\",\n                            placeholder: \"Enter your Task here\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 162\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#2161AB] px-3 py-1 mt-5 ml-2 font-md rounded-lg text-white text-end\",\n                            children: \"Add to Todos\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Todos, \"/4U9Nw414wdNPFyacvT9TkTu07I=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2Rvcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZDtBQUNhO0FBQ0s7QUFFbEI7QUFJekIsTUFBTU0sUUFBUSxDQUFDQyxRQUFpQjs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFhLEVBQUU7SUFDakQsTUFBTU8sU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU1XLE9BQU9ELE9BQU9FLEtBQUssQ0FBQ0MsUUFBUTtJQUVsQyxlQUFlQyxTQUFTQyxJQUFZLEVBQUU7UUFDbEMsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxRQUFhLE9BQUxGLE9BQVE7Z0JBQUVHLFFBQVE7WUFBTTtZQUM3RCxNQUFNQyxPQUFtQixNQUFNSCxTQUFTSSxJQUFJO1lBQzVDWCxTQUFTVTtRQUNiLEVBQ0EsT0FBT0UsV0FBVztZQUNkLHFCQUFRLDhEQUFDbkIseURBQUtBOzs7OztRQUNsQjtJQUNKO0lBRUFFLGdEQUFTQSxDQUFDLElBQU07UUFDWlUsU0FBU0g7SUFDYixHQUFHO1FBQUNIO0tBQU07SUFFVixxQkFDSTtrQkFDSSw0RUFBQ2M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFBMEI7c0NBQWEsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUFrQlo7Ozs7Ozt3QkFBUzs7Ozs7Ozs4QkFDOUYsOERBQUNXO29CQUFJQyxXQUFVOzhCQUFnQzs7Ozs7OzhCQUMvQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1ZmLE1BQU1pQixHQUFHLENBQUMsQ0FBQ0MsT0FBUzt3QkFDakIscUJBQVEsOERBQUNyQiw2Q0FBSUE7NEJBQUNxQixNQUFNQTs7Ozs7O29CQUN4Qjs7Ozs7OzhCQUVKLDhEQUFDQzs7c0NBQ0csOERBQUNMOzRCQUFJQyxXQUFVO3NDQUFnQzs7Ozs7O3NDQUMvQyw4REFBQ0s7NEJBQU1MLFdBQVU7NEJBQXFFTSxNQUFLOzRCQUFPQyxhQUFZOzs7Ozs7c0NBQStCLDhEQUFDQzs7Ozs7c0NBQzlJLDhEQUFDQzs0QkFBT1QsV0FBVTtzQ0FBMEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEg7R0F0Q01qQjs7UUFFYU4sa0RBQVNBOzs7S0FGdEJNO0FBd0NOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvZG9zLnRzeD8wZTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdG9kb3R5cGUgfSBmcm9tICdAL3R5cGVzL3RvZG90eXBlJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnXHJcblxyXG50eXBlIFByb3BzID0ge31cclxuXHJcbmNvbnN0IFRvZG9zID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTx0b2RvdHlwZVtdPihbXSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LnVzZXJuYW1lIGFzIHN0cmluZ1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRvZG9zKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvJHt1c2VyfWAsIHsgbWV0aG9kOiAnR0VUJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhOiB0b2RvdHlwZVtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldFRvZG9zKGRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8RXJyb3IgLz4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VG9kb3MobmFtZSk7XHJcbiAgICB9LCBbdG9kb3NdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS0xMCBteC0yOCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB0ZXh0LTR4bCBmb250LWJvbGQnPkhlbGxvICZuYnNwOyA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjMjE2MUFCXVwiPntuYW1lfTwvcD4hPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE0IG1iLTUgdGV4dC0yeGwgZm9udC1ib2xkXCI+IEhlcmUgaXMgeW91ciBMaXN0ITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTQgZ2FwLTMgJz5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENhcmQgdG9kbz17dG9kb30gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMCBtYi01IHRleHQtMnhsIGZvbnQtYm9sZFwiPiBBZGQgbW9yZSBUYXNrcyB0byB5b3VyIExpc3QhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2hhZG93LW1kIHRleHQtbGcgdy04MCBoLTEwIHJvdW5kZWQtbGcgcHgtNCBweS02IGJnLVsjQkREMkZBXSBtdC01JyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIFRhc2sgaGVyZSc+PC9pbnB1dD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjMjE2MUFCXSBweC0zIHB5LTEgbXQtNSBtbC0yIGZvbnQtbWQgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIHRleHQtZW5kXCI+QWRkIHRvIFRvZG9zPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiRXJyb3IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJUb2RvcyIsInByb3BzIiwidG9kb3MiLCJzZXRUb2RvcyIsInJvdXRlciIsIm5hbWUiLCJxdWVyeSIsInVzZXJuYW1lIiwiZ2V0VG9kb3MiLCJ1c2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImRhdGEiLCJqc29uIiwiVHlwZUVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsInRvZG8iLCJjZW50ZXIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Todos.tsx\n"));

/***/ })

});