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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Todos = (props)=>{\n    _s();\n    const [Task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const name = router.query.username;\n    async function getTodos(user) {\n        try {\n            const response = await fetch(\"/api/\".concat(user), {\n                method: \"GET\"\n            });\n            const data = await response.json();\n            setTodos(data);\n        } catch (TypeError) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, this);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getTodos(name);\n    }, [\n        todos\n    ]);\n    async function addTask(task) {\n        const response = await fetch(\"api/\".concat(name), {\n            method: \"POST\",\n            body: JSON.stringify({\n                task\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await response.json();\n        setTodos(data);\n        getTodos(name);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-20 sm:my-10 sm:mx-28\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex text-3xl font-bold\",\n                    children: [\n                        \"Hello\\xa0\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#2161AB]\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 69\n                        }, undefined),\n                        \"!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-14 mb-5 text-2xl sm:text-2xl font-bold\",\n                    children: \" Here is your List!\"\n                }, void 0, false, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"sm:grid sm:grid-cols-4 sm:gap-3 \",\n                    children: todos.map((todo)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            todo: todo\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 33\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                    className: \"mt-24 max-sm:mt-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-5 max-sm:text-2xl text-2xl font-bold\",\n                            children: \" Add more Tasks to your List!\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"shadow-md max-sm:text-lh max-sm:py-7 max-sm:rounded-xl text-lg w-80 h-10 rounded-lg px-4 py-6 bg-[#BDD2FA] mt-5\",\n                            type: \"text\",\n                            placeholder: \"Enter your Task here\",\n                            value: Task,\n                            onChange: (e)=>{\n                                setTask(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 266\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#2161AB] px-3 py-1 mt-3 ml-2 font-md max-sm:font-medium max-sm:text-lg max-sm:p-2.5 max-sm:mt-5 rounded-lg text-white\",\n                            onClick: ()=>{\n                                addTask(Task);\n                            },\n                            children: \"Add to Todos\"\n                        }, void 0, false, {\n                            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"A:\\\\Abirami\\\\Learning\\\\Todo-Manager\\\\src\\\\components\\\\Todos.tsx\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Todos, \"K15oI93JaMj3LmsC0/pf1ir5qt8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Todos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todos);\nvar _c;\n$RefreshReg$(_c, \"Todos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2Rvcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDZDtBQUNhO0FBQ0s7QUFFbEI7QUFJekIsTUFBTU0sUUFBUSxDQUFDQyxRQUFpQjs7SUFDNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBYSxFQUFFO0lBQ2pELE1BQU1TLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNYSxPQUFPRCxPQUFPRSxLQUFLLENBQUNDLFFBQVE7SUFFbEMsZUFBZUMsU0FBU0MsSUFBWSxFQUFFO1FBQ2xDLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sUUFBYSxPQUFMRixPQUFRO2dCQUFFRyxRQUFRO1lBQU07WUFDN0QsTUFBTUMsT0FBbUIsTUFBTUgsU0FBU0ksSUFBSTtZQUM1Q1gsU0FBU1U7UUFDYixFQUNBLE9BQU9FLFdBQVc7WUFDZCxxQkFBUSw4REFBQ3JCLHlEQUFLQTs7Ozs7UUFDbEI7SUFDSjtJQUVBRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pZLFNBQVNIO0lBQ2IsR0FBRztRQUFDSDtLQUFNO0lBRVYsZUFBZWMsUUFBUUMsSUFBWSxFQUFFO1FBQ2pDLE1BQU1QLFdBQVcsTUFBTUMsTUFBTSxPQUFZLE9BQUxOLE9BQ2hDO1lBQ0lPLFFBQVE7WUFDUk0sTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFSDtZQUFLO1lBQzVCSSxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNsRDtRQUNKLE1BQU1SLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtRQUNoQ1gsU0FBU1U7UUFDVEwsU0FBU0g7SUFDYjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDaUI7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFBMEI7c0NBQVcsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUFrQmxCOzs7Ozs7d0JBQVM7Ozs7Ozs7OEJBQzVGLDhEQUFDaUI7b0JBQUlDLFdBQVU7OEJBQTRDOzs7Ozs7OEJBQzNELDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDVnJCLE1BQU11QixHQUFHLENBQUMsQ0FBQ0MsT0FBUzt3QkFDakIscUJBQVEsOERBQUM3Qiw2Q0FBSUE7NEJBQUM2QixNQUFNQTs7Ozs7O29CQUN4Qjs7Ozs7OzhCQUVKLDhEQUFDQztvQkFBT0osV0FBVTs7c0NBQ2QsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUEwQzs7Ozs7O3NDQUN6RCw4REFBQ0s7NEJBQU1MLFdBQVU7NEJBQWtITSxNQUFLOzRCQUFPQyxhQUFZOzRCQUF1QkMsT0FBTy9COzRCQUFNZ0MsVUFBVSxDQUFDQyxJQUFNO2dDQUFFaEMsUUFBUWdDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBRTs7Ozs7O3NDQUFXLDhEQUFDSTs7Ozs7c0NBQ3RQLDhEQUFDQzs0QkFBT2IsV0FBVTs0QkFBNEhjLFNBQVMsSUFBTTtnQ0FBRXJCLFFBQVFoQjs0QkFBTTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwTTtHQWxETUY7O1FBR2FOLGtEQUFTQTs7O0tBSHRCTTtBQW9ETiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2Rvcy50c3g/MGU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHRvZG90eXBlIH0gZnJvbSAnQC90eXBlcy90b2RvdHlwZSdcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xyXG5cclxudHlwZSBQcm9wcyA9IHt9XHJcblxyXG5jb25zdCBUb2RvcyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtUYXNrLCBzZXRUYXNrXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTx0b2RvdHlwZVtdPihbXSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBuYW1lID0gcm91dGVyLnF1ZXJ5LnVzZXJuYW1lIGFzIHN0cmluZ1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFRvZG9zKHVzZXI6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvJHt1c2VyfWAsIHsgbWV0aG9kOiAnR0VUJyB9KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhOiB0b2RvdHlwZVtdID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldFRvZG9zKGRhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChUeXBlRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8RXJyb3IgLz4pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0VG9kb3MobmFtZSk7XHJcbiAgICB9LCBbdG9kb3NdKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBhZGRUYXNrKHRhc2s6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGFwaS8ke25hbWV9YCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRhc2sgfSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBzZXRUb2RvcyhkYXRhKVxyXG4gICAgICAgIGdldFRvZG9zKG5hbWUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTIwIHNtOm15LTEwIHNtOm14LTI4Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHRleHQtM3hsIGZvbnQtYm9sZCc+SGVsbG8mbmJzcDs8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjMjE2MUFCXVwiPntuYW1lfTwvcD4hPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE0IG1iLTUgdGV4dC0yeGwgc206dGV4dC0yeGwgZm9udC1ib2xkXCI+IEhlcmUgaXMgeW91ciBMaXN0ITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmdyaWQgc206Z3JpZC1jb2xzLTQgc206Z2FwLTMgJz5cclxuICAgICAgICAgICAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENhcmQgdG9kbz17dG9kb30gLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxjZW50ZXIgY2xhc3NOYW1lPVwibXQtMjQgbWF4LXNtOm10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IG1heC1zbTp0ZXh0LTJ4bCB0ZXh0LTJ4bCBmb250LWJvbGRcIj4gQWRkIG1vcmUgVGFza3MgdG8geW91ciBMaXN0ITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NoYWRvdy1tZCBtYXgtc206dGV4dC1saCBtYXgtc206cHktNyBtYXgtc206cm91bmRlZC14bCB0ZXh0LWxnIHctODAgaC0xMCByb3VuZGVkLWxnIHB4LTQgcHktNiBiZy1bI0JERDJGQV0gbXQtNScgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBUYXNrIGhlcmUnIHZhbHVlPXtUYXNrfSBvbkNoYW5nZT17KGUpID0+IHsgc2V0VGFzayhlLnRhcmdldC52YWx1ZSkgfX0+PC9pbnB1dD48YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjMjE2MUFCXSBweC0zIHB5LTEgbXQtMyBtbC0yIGZvbnQtbWQgbWF4LXNtOmZvbnQtbWVkaXVtIG1heC1zbTp0ZXh0LWxnIG1heC1zbTpwLTIuNSBtYXgtc206bXQtNSByb3VuZGVkLWxnIHRleHQtd2hpdGVcIiBvbkNsaWNrPXsoKSA9PiB7IGFkZFRhc2soVGFzaykgfX0+QWRkIHRvIFRvZG9zPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9zIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiRXJyb3IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJUb2RvcyIsInByb3BzIiwiVGFzayIsInNldFRhc2siLCJ0b2RvcyIsInNldFRvZG9zIiwicm91dGVyIiwibmFtZSIsInF1ZXJ5IiwidXNlcm5hbWUiLCJnZXRUb2RvcyIsInVzZXIiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiZGF0YSIsImpzb24iLCJUeXBlRXJyb3IiLCJhZGRUYXNrIiwidGFzayIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJ0b2RvIiwiY2VudGVyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Todos.tsx\n"));

/***/ })

});