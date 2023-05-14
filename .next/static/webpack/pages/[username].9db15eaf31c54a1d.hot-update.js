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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Todos = (props)=>{\n    _s();\n    const [Task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const name = router.query.username;\n    async function getTodos(user) {\n        try {\n            const response = await fetch(\"/api/\".concat(user), {\n                method: \"GET\"\n            });\n            const data = await response.json();\n            setTodos(data);\n        } catch (TypeError) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, this);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getTodos(name);\n    }, [\n        todos\n    ]);\n    asyn;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-10 mx-28\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex text-4xl font-bold\",\n                    children: [\n                        \"Hello \\xa0 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#2161AB]\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 71\n                        }, undefined),\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-14 mb-5 text-2xl font-bold\",\n                    children: \" Here is your List!\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4 gap-3 \",\n                    children: todos.map((todo)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            todo: todo\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 33\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    className: \"mt-24\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 text-2xl font-bold\",\n                            children: \" Add more Tasks to your List!\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow-md text-lg w-80 h-10 rounded-lg px-4 py-6 bg-[#BDD2FA] mt-5\",\n                            type: \"text\",\n                            placeholder: \"Enter your Task here\",\n                            value: Task,\n                            onChange: (e)=>{\n                                setTask(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 221\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#2161AB] px-3 py-1 mt-5 ml-2 font-md rounded-lg text-white text-end\",\n                            onClick: ()=>{\n                                addTask(Task);\n                            },\n                            children: \"Add to Todos\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Abirami\\\\Learning\\\\todo\\\\src\\\\components\\\\Todos.tsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Todos, \"K15oI93JaMj3LmsC0/pf1ir5qt8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2Rvcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZDtBQUNhO0FBQ0s7QUFFbEI7QUFJekIsTUFBTU0sUUFBUSxDQUFDQyxRQUFpQjs7SUFDNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBYSxFQUFFO0lBQ2pELE1BQU1TLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNYSxPQUFPRCxPQUFPRSxLQUFLLENBQUNDLFFBQVE7SUFFbEMsZUFBZUMsU0FBU0MsSUFBWSxFQUFFO1FBQ2xDLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sUUFBYSxPQUFMRixPQUFRO2dCQUFFRyxRQUFRO1lBQU07WUFDN0QsTUFBTUMsT0FBbUIsTUFBTUgsU0FBU0ksSUFBSTtZQUM1Q1gsU0FBU1U7UUFDYixFQUNBLE9BQU9FLFdBQVc7WUFDZCxxQkFBUSw4REFBQ3JCLHlEQUFLQTs7Ozs7UUFDbEI7SUFDSjtJQUVBRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pZLFNBQVNIO0lBQ2IsR0FBRztRQUFDSDtLQUFNO0lBRVZjO0lBQ0EscUJBQ0k7a0JBQ0ksNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7d0JBQTBCO3NDQUFhLDhEQUFDQzs0QkFBRUQsV0FBVTtzQ0FBa0JiOzs7Ozs7d0JBQVM7Ozs7Ozs7OEJBQzlGLDhEQUFDWTtvQkFBSUMsV0FBVTs4QkFBZ0M7Ozs7Ozs4QkFDL0MsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNWaEIsTUFBTWtCLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO3dCQUNqQixxQkFBUSw4REFBQ3hCLDZDQUFJQTs0QkFBQ3dCLE1BQU1BOzs7Ozs7b0JBQ3hCOzs7Ozs7OEJBRUosOERBQUNDO29CQUFPSixXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3pDLDhEQUFDSzs0QkFBTUwsV0FBVTs0QkFBcUVNLE1BQUs7NEJBQU9DLGFBQVk7NEJBQXVCQyxPQUFPMUI7NEJBQU0yQixVQUFVLENBQUNDLElBQU07Z0NBQUUzQixRQUFRMkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUFFOzs7Ozs7c0NBQVcsOERBQUNJOzs7OztzQ0FDek0sOERBQUNDOzRCQUFPYixXQUFVOzRCQUEwRWMsU0FBUyxJQUFNO2dDQUFFQyxRQUFRakM7NEJBQU07c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEo7R0F4Q01GOztRQUdhTixrREFBU0E7OztLQUh0Qk07QUEwQ04sK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kb3MudHN4PzBlNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9FcnJvcidcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB0b2RvdHlwZSB9IGZyb20gJ0AvdHlwZXMvdG9kb3R5cGUnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCdcclxuXHJcbnR5cGUgUHJvcHMgPSB7fVxyXG5cclxuY29uc3QgVG9kb3MgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbVGFzaywgc2V0VGFza10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8dG9kb3R5cGVbXT4oW10pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgbmFtZSA9IHJvdXRlci5xdWVyeS51c2VybmFtZSBhcyBzdHJpbmdcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRUb2Rvcyh1c2VyOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpLyR7dXNlcn1gLCB7IG1ldGhvZDogJ0dFVCcgfSlcclxuICAgICAgICAgICAgY29uc3QgZGF0YTogdG9kb3R5cGVbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBzZXRUb2RvcyhkYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoVHlwZUVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPEVycm9yIC8+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldFRvZG9zKG5hbWUpO1xyXG4gICAgfSwgW3RvZG9zXSk7XHJcblxyXG4gICAgYXN5blxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktMTAgbXgtMjgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdGV4dC00eGwgZm9udC1ib2xkJz5IZWxsbyAmbmJzcDsgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzIxNjFBQl1cIj57bmFtZX08L3A+ITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNCBtYi01IHRleHQtMnhsIGZvbnQtYm9sZFwiPiBIZXJlIGlzIHlvdXIgTGlzdCE8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy00IGdhcC0zICc+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDYXJkIHRvZG89e3RvZG99IC8+KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Y2VudGVyIGNsYXNzTmFtZT1cIm10LTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IHRleHQtMnhsIGZvbnQtYm9sZFwiPiBBZGQgbW9yZSBUYXNrcyB0byB5b3VyIExpc3QhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2hhZG93LW1kIHRleHQtbGcgdy04MCBoLTEwIHJvdW5kZWQtbGcgcHgtNCBweS02IGJnLVsjQkREMkZBXSBtdC01JyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIFRhc2sgaGVyZScgdmFsdWU9e1Rhc2t9IG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRUYXNrKGUudGFyZ2V0LnZhbHVlKSB9fT48L2lucHV0Pjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyMyMTYxQUJdIHB4LTMgcHktMSBtdC01IG1sLTIgZm9udC1tZCByb3VuZGVkLWxnIHRleHQtd2hpdGUgdGV4dC1lbmRcIiBvbkNsaWNrPXsoKSA9PiB7IGFkZFRhc2soVGFzaykgfX0+QWRkIHRvIFRvZG9zPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiRXJyb3IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJUb2RvcyIsInByb3BzIiwiVGFzayIsInNldFRhc2siLCJ0b2RvcyIsInNldFRvZG9zIiwicm91dGVyIiwibmFtZSIsInF1ZXJ5IiwidXNlcm5hbWUiLCJnZXRUb2RvcyIsInVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJUeXBlRXJyb3IiLCJhc3luIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsInRvZG8iLCJjZW50ZXIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiYWRkVGFzayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Todos.tsx\n"));

/***/ })

});