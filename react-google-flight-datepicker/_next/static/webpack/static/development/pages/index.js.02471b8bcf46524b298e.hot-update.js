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
    className: "jsx-3423436562" + " " + "container",
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
      className: "jsx-3423436562" + " " + (className || ""),
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
        className: "jsx-3423436562",
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
          className: "jsx-3423436562",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }));
      }));
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3423436562",
    __self: this
  }, ".container.jsx-3423436562 .prism-code{padding:10px;border-radius:3px;max-width:90%;overflow:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL0NvZGVIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdzQixhQUNLLGtCQUNKLGNBQ0UsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL0NvZGVIaWdobGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhpZ2hsaWdodCwgeyBkZWZhdWx0UHJvcHMgfSBmcm9tICdwcmlzbS1yZWFjdC1yZW5kZXJlcic7XG5cbmNvbnN0IENvZGVIaWdoTGlnaHQgPSAoeyBsYW5ndWFnZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGxhbmd1YWdlPXtsYW5ndWFnZX0gY29kZT17Y2hpbGRyZW59PlxuICAgICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHsuLi5nZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSl9PlxuICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICApfVxuICAgICAgPC9IaWdobGlnaHQ+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciA6Z2xvYmFsKC5wcmlzbS1jb2RlKSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvZGVIaWdoTGlnaHQ7XG4iXX0= */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/CodeHighlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CodeHighLight);

/***/ })

})
//# sourceMappingURL=index.js.02471b8bcf46524b298e.hot-update.js.map