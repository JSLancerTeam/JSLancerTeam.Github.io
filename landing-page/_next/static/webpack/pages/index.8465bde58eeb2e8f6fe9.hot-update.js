/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Team.tsx":
/*!*****************************!*\
  !*** ./components/Team.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_leo_Projects_jslancer_landing_page_v2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _common_ArrowLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/ArrowLeft */ \"./components/common/ArrowLeft.tsx\");\n/* harmony import */ var _common_ArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/ArrowRight */ \"./components/common/ArrowRight.tsx\");\n/* harmony import */ var _common_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Section */ \"./components/common/Section.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/leo/Projects/jslancer-landing-page-v2/components/Team.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_leo_Projects_jslancer_landing_page_v2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar StyledSectionContainer = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_common_Section__WEBPACK_IMPORTED_MODULE_5__.SectionContainer).withConfig({\n  displayName: \"Team__StyledSectionContainer\",\n  componentId: \"k6mj2q-0\"\n})([\"background:white;background-image:none;padding-bottom:100px;\"]);\n_c = StyledSectionContainer;\nvar Desc = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.p.withConfig({\n  displayName: \"Team__Desc\",\n  componentId: \"k6mj2q-1\"\n})([\"font-weight:600;font-size:20px;line-height:140%;color:#484E54;width:530px;margin:0;margin-bottom:35px;@media (max-width:768px){width:100%;font-size:16px;}\"]);\n_c2 = Desc;\nvar MemberWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"Team__MemberWrapper\",\n  componentId: \"k6mj2q-2\"\n})([\"margin:0 auto;\"]);\n_c3 = MemberWrapper;\nvar Member = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"Team__Member\",\n  componentId: \"k6mj2q-3\"\n})([\"background:linear-gradient(180.07deg,rgba(255,255,255,0) 55.83%,#00AEEF 107.7%),url(\", \");background-repeat:no-repeat;background-position:center;display:flex;flex-direction:column;justify-content:flex-end;width:307px;height:376px;padding:20px;box-shadow:4px 10px 15px rgba(0,0,0,0.25);border-radius:3px;\"], function (props) {\n  return \"\".concat(props.url);\n});\n_c4 = Member;\nvar NameMember = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.span.withConfig({\n  displayName: \"Team__NameMember\",\n  componentId: \"k6mj2q-4\"\n})([\"font-family:Teko;font-weight:bold;font-size:24px;line-height:100%;color:#FFFFFF;text-shadow:2px 2px 4px rgba(0,0,0,0.25);\"]);\n_c5 = NameMember;\nvar PositionMember = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.span.withConfig({\n  displayName: \"Team__PositionMember\",\n  componentId: \"k6mj2q-5\"\n})([\"font-weight:600;font-size:20px;line-height:140%;color:#FFFFFF;text-shadow:2px 2px 4px rgba(0,0,0,0.25);\"]);\n_c6 = PositionMember;\nvar LinkSocial = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"Team__LinkSocial\",\n  componentId: \"k6mj2q-6\"\n})([\"display:flex;padding-left:10px;margin-top:15px;a + a{margin-left:10px;}\"]);\n_c7 = LinkSocial;\nvar ArrowRightStyled = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_common_ArrowRight__WEBPACK_IMPORTED_MODULE_4__.default).withConfig({\n  displayName: \"Team__ArrowRightStyled\",\n  componentId: \"k6mj2q-7\"\n})([\"width:auto;height:auto;right:0;top:-82px;@media (max-width:768px){width:45px;height:45px;bottom:-75px;top:unset;}\"]);\n_c8 = ArrowRightStyled;\nvar ArrowLeftStyled = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.default)(_common_ArrowLeft__WEBPACK_IMPORTED_MODULE_3__.default).withConfig({\n  displayName: \"Team__ArrowLeftStyled\",\n  componentId: \"k6mj2q-8\"\n})([\"width:auto;height:auto;right:95px;left:auto;top:-82px;@media (max-width:768px){width:45px;height:45px;top:unset;right:50px;bottom:-75px;}\"]);\n_c9 = ArrowLeftStyled;\nvar teams = [{\n  image: '/static/images/team/david.png',\n  name: 'David Tran',\n  position: 'Lead Developer'\n}, {\n  image: '/static/images/team/leo-phan.png',\n  name: 'Leo Phan',\n  position: 'Full-stack Developer'\n}, {\n  image: '/static/images/team/clement.png',\n  name: 'Clement Le',\n  position: 'Full-stack Developer'\n}, {\n  image: '/static/images/team/tony.png',\n  name: 'Tony Nguyen',\n  position: 'Frontend Developer'\n}];\n\nvar Team = function Team(_ref) {\n  var isMobile = _ref.isMobile;\n  var settings = {\n    dots: true,\n    infinite: true,\n    speed: 500,\n    slidesToShow: isMobile ? 2 : 4,\n    slidesToScroll: 1,\n    nextArrow: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ArrowRightStyled, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 16\n    }, _this),\n    prevArrow: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ArrowLeftStyled, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 16\n    }, _this),\n    appendDots: function appendDots() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);\n    }\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledSectionContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Section__WEBPACK_IMPORTED_MODULE_5__.SectionTitle, {\n      children: \"MEET THE TEAM\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Desc, {\n      children: \"We are grateful to know you are interested in our content and services. Subscribe\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_Section__WEBPACK_IMPORTED_MODULE_5__.SectionContent, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({}, settings), {}, {\n        children: teams.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MemberWrapper, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Member, {\n                url: item.image,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NameMember, {\n                  children: item.name\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 136,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PositionMember, {\n                  children: item.position\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 137,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LinkSocial, {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: \"/static/images/team/twitter.svg\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 141,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 140,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: \"/static/images/team/github.svg\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 144,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 143,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 139,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 127,\n    columnNumber: 5\n  }, _this);\n};\n\n_c10 = Team;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Team);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"StyledSectionContainer\");\n$RefreshReg$(_c2, \"Desc\");\n$RefreshReg$(_c3, \"MemberWrapper\");\n$RefreshReg$(_c4, \"Member\");\n$RefreshReg$(_c5, \"NameMember\");\n$RefreshReg$(_c6, \"PositionMember\");\n$RefreshReg$(_c7, \"LinkSocial\");\n$RefreshReg$(_c8, \"ArrowRightStyled\");\n$RefreshReg$(_c9, \"ArrowLeftStyled\");\n$RefreshReg$(_c10, \"Team\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtLnRzeD8wYTVmIl0sIm5hbWVzIjpbIlN0eWxlZFNlY3Rpb25Db250YWluZXIiLCJzdHlsZWQiLCJTZWN0aW9uQ29udGFpbmVyIiwiRGVzYyIsIk1lbWJlcldyYXBwZXIiLCJNZW1iZXIiLCJwcm9wcyIsInVybCIsIk5hbWVNZW1iZXIiLCJQb3NpdGlvbk1lbWJlciIsIkxpbmtTb2NpYWwiLCJBcnJvd1JpZ2h0U3R5bGVkIiwiQXJyb3dSaWdodCIsIkFycm93TGVmdFN0eWxlZCIsIkFycm93TGVmdCIsInRlYW1zIiwiaW1hZ2UiLCJuYW1lIiwicG9zaXRpb24iLCJUZWFtIiwiaXNNb2JpbGUiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJhcHBlbmREb3RzIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsc0JBQXNCLEdBQUdDLDBEQUFNLENBQUNDLDZEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsb0VBQTVCO0tBQU1GLHNCO0FBS04sSUFBTUcsSUFBSSxHQUFHRixtRUFBSDtBQUFBO0FBQUE7QUFBQSxrS0FBVjtNQUFNRSxJO0FBZU4sSUFBTUMsYUFBYSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxzQkFBbkI7TUFBTUcsYTtBQUlOLElBQU1DLE1BQU0sR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsd1RBQ21GLFVBQUFLLEtBQUs7QUFBQSxtQkFBT0EsS0FBSyxDQUFDQyxHQUFiO0FBQUEsQ0FEeEYsQ0FBWjtNQUFNRixNO0FBY04sSUFBTUcsVUFBVSxHQUFHUCxzRUFBSDtBQUFBO0FBQUE7QUFBQSxpSUFBaEI7TUFBTU8sVTtBQVNOLElBQU1DLGNBQWMs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QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBeENEOztPQUFNYixJO0FBMENOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UZWFtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSBcIi4vY29tbW9uL0Fycm93TGVmdFwiO1xuaW1wb3J0IEFycm93UmlnaHQgZnJvbSBcIi4vY29tbW9uL0Fycm93UmlnaHRcIjtcbmltcG9ydCB7IFNlY3Rpb25Db250YWluZXIsIFNlY3Rpb25Db250ZW50LCBTZWN0aW9uVGl0bGUgfSBmcm9tIFwiLi9jb21tb24vU2VjdGlvblwiO1xuXG5jb25zdCBTdHlsZWRTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkKFNlY3Rpb25Db250YWluZXIpYFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuYDtcbmNvbnN0IERlc2MgPSBzdHlsZWQucGBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgY29sb3I6ICM0ODRFNTQ7XG4gIHdpZHRoOiA1MzBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuYDtcblxuY29uc3QgTWVtYmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuY29uc3QgTWVtYmVyID0gc3R5bGVkLmRpdjx7IHVybDogc3RyaW5nIH0+YFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwLjA3ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDU1LjgzJSwgIzAwQUVFRiAxMDcuNyUpLCB1cmwoJHtwcm9wcyA9PiBgJHtwcm9wcy51cmx9YH0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAzMDdweDtcbiAgaGVpZ2h0OiAzNzZweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogNHB4IDEwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG5gO1xuXG5jb25zdCBOYW1lTWVtYmVyID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtZmFtaWx5OiBUZWtvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuYDtcblxuY29uc3QgUG9zaXRpb25NZW1iZXIgPSBzdHlsZWQuc3BhbmBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuYDtcblxuY29uc3QgTGlua1NvY2lhbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcblxuICBhICsgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFycm93UmlnaHRTdHlsZWQgPSBzdHlsZWQoQXJyb3dSaWdodClgXG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC04MnB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3R0b206IC03NXB4O1xuICAgIHRvcDogdW5zZXQ7XG4gIH1cbmA7XG5cbmNvbnN0IEFycm93TGVmdFN0eWxlZCA9IHN0eWxlZChBcnJvd0xlZnQpYFxuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICByaWdodDogOTVweDtcbiAgbGVmdDogYXV0bztcbiAgdG9wOiAtODJweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogNDVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiB1bnNldDtcbiAgICByaWdodDogNTBweDtcbiAgICBib3R0b206IC03NXB4O1xuICB9XG5gO1xuXG5jb25zdCB0ZWFtcyA9IFtcbiAgeyBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3RlYW0vZGF2aWQucG5nJywgbmFtZTogJ0RhdmlkIFRyYW4nLCBwb3NpdGlvbjogJ0xlYWQgRGV2ZWxvcGVyJyB9LFxuICB7IGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdGVhbS9sZW8tcGhhbi5wbmcnLCBuYW1lOiAnTGVvIFBoYW4nLCBwb3NpdGlvbjogJ0Z1bGwtc3RhY2sgRGV2ZWxvcGVyJyB9LFxuICB7IGltYWdlOiAnL3N0YXRpYy9pbWFnZXMvdGVhbS9jbGVtZW50LnBuZycsIG5hbWU6ICdDbGVtZW50IExlJywgcG9zaXRpb246ICdGdWxsLXN0YWNrIERldmVsb3BlcicgfSxcbiAgeyBpbWFnZTogJy9zdGF0aWMvaW1hZ2VzL3RlYW0vdG9ueS5wbmcnLCBuYW1lOiAnVG9ueSBOZ3V5ZW4nLCBwb3NpdGlvbjogJ0Zyb250ZW5kIERldmVsb3BlcicgfSxcbl07XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBpc01vYmlsZTogYm9vbGVhbjtcbn1cblxuY29uc3QgVGVhbTogRkM8SVByb3BzPiA9ICh7IGlzTW9iaWxlIH0pID0+IHtcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogaXNNb2JpbGUgPyAyIDogNCxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBuZXh0QXJyb3c6IDxBcnJvd1JpZ2h0U3R5bGVkIC8+LFxuICAgIHByZXZBcnJvdzogPEFycm93TGVmdFN0eWxlZCAvPixcbiAgICBhcHBlbmREb3RzOiAoKSA9PiA8PjwvPixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFNlY3Rpb25UaXRsZT5NRUVUIFRIRSBURUFNPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8RGVzYz5XZSBhcmUgZ3JhdGVmdWwgdG8ga25vdyB5b3UgYXJlIGludGVyZXN0ZWQgaW4gb3VyIGNvbnRlbnQgYW5kIHNlcnZpY2VzLiBTdWJzY3JpYmU8L0Rlc2M+XG4gICAgICA8U2VjdGlvbkNvbnRlbnQ+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7dGVhbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPE1lbWJlcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgPE1lbWJlciB1cmw9e2l0ZW0uaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgPE5hbWVNZW1iZXI+e2l0ZW0ubmFtZX08L05hbWVNZW1iZXI+XG4gICAgICAgICAgICAgICAgICA8UG9zaXRpb25NZW1iZXI+e2l0ZW0ucG9zaXRpb259PC9Qb3NpdGlvbk1lbWJlcj5cbiAgICAgICAgICAgICAgICA8L01lbWJlcj5cbiAgICAgICAgICAgICAgICA8TGlua1NvY2lhbD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pbWFnZXMvdGVhbS90d2l0dGVyLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pbWFnZXMvdGVhbS9naXRodWIuc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGlua1NvY2lhbD5cbiAgICAgICAgICAgICAgPC9NZW1iZXJXcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgPC9TZWN0aW9uQ29udGVudD5cbiAgICA8L1N0eWxlZFNlY3Rpb25Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Team.tsx\n");

/***/ })

});