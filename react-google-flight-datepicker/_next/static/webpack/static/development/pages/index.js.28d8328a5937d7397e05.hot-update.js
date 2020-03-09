webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/CodeHighlight.js":
/*!********************************!*\
  !*** ./pages/CodeHighlight.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");

var _jsxFileName = "/Users/davidtranwd/Projects/landing/pages/CodeHighlight.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var CodeHighLight = function CodeHighLight(_ref) {
  var language = _ref.language,
      children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-941408077" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__["defaultProps"], {
    language: language,
    code: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return __jsx("pre", {
      style: style,
      className: "jsx-941408077" + " " + (className || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, tokens.map(function (line, i) {
      return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getLineProps({
        line: line,
        key: i
      }), {
        className: "jsx-941408077",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), line.map(function (token, key) {
        return __jsx("span", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
          token: token,
          key: key
        }), {
          className: "jsx-941408077",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }));
      }));
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "941408077",
    __self: this
  }, ".container.jsx-941408077{max-width:90%;overflow:scroll;}.container.jsx-941408077 .prism-code{padding:10px;border-radius:3px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL0NvZGVIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUd1QixBQUlELGFBQ0ssQ0FKRixnQkFDbEIsQ0FJQSIsImZpbGUiOiIvVXNlcnMvZGF2aWR0cmFud2QvUHJvamVjdHMvbGFuZGluZy9wYWdlcy9Db2RlSGlnaGxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSAncHJpc20tcmVhY3QtcmVuZGVyZXInO1xuXG5jb25zdCBDb2RlSGlnaExpZ2h0ID0gKHsgbGFuZ3VhZ2UsIGNoaWxkcmVuIH0pID0+IChcbiAgPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhpZ2hsaWdodCB7Li4uZGVmYXVsdFByb3BzfSBsYW5ndWFnZT17bGFuZ3VhZ2V9IGNvZGU9e2NoaWxkcmVufT5cbiAgICAgICAgeyh7IGNsYXNzTmFtZSwgc3R5bGUsIHRva2VucywgZ2V0TGluZVByb3BzLCBnZXRUb2tlblByb3BzIH0pID0+IChcbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pfT5cbiAgICAgICAgICAgICAgICB7bGluZS5tYXAoKHRva2VuLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgKX1cbiAgICAgIDwvSGlnaGxpZ2h0PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIH1cbiAgICAgIC5jb250YWluZXIgOmdsb2JhbCgucHJpc20tY29kZSkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVIaWdoTGlnaHQ7XG4iXX0= */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/CodeHighlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CodeHighLight);

/***/ })

})
//# sourceMappingURL=index.js.28d8328a5937d7397e05.hot-update.js.map