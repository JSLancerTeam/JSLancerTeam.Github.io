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
    className: "jsx-3094600717" + " " + "container",
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
      className: "jsx-3094600717" + " " + (className || ""),
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
        className: "jsx-3094600717",
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
          className: "jsx-3094600717",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }));
      }));
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3094600717",
    __self: this
  }, ".container.jsx-3094600717{max-width:90%;overflow:scroll;}.container.jsx-3094600717 .prism-code{padding:10px;border-radius:3px;max-width:90%;overflow:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL0NvZGVIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUd1QixBQUlELGFBQ0ssQ0FKRixnQkFDbEIsQ0FJZ0IsY0FDRSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2RhdmlkdHJhbndkL1Byb2plY3RzL2xhbmRpbmcvcGFnZXMvQ29kZUhpZ2hsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGlnaGxpZ2h0LCB7IGRlZmF1bHRQcm9wcyB9IGZyb20gJ3ByaXNtLXJlYWN0LXJlbmRlcmVyJztcblxuY29uc3QgQ29kZUhpZ2hMaWdodCA9ICh7IGxhbmd1YWdlLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIaWdobGlnaHQgey4uLmRlZmF1bHRQcm9wc30gbGFuZ3VhZ2U9e2xhbmd1YWdlfSBjb2RlPXtjaGlsZHJlbn0+XG4gICAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIHt0b2tlbnMubWFwKChsaW5lLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgey4uLmdldExpbmVQcm9wcyh7IGxpbmUsIGtleTogaSB9KX0+XG4gICAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiB7Li4uZ2V0VG9rZW5Qcm9wcyh7IHRva2VuLCBrZXkgfSl9IC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICl9XG4gICAgICA8L0hpZ2hsaWdodD5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICB9XG4gICAgICAuY29udGFpbmVyIDpnbG9iYWwoLnByaXNtLWNvZGUpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29kZUhpZ2hMaWdodDtcbiJdfQ== */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/CodeHighlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CodeHighLight);

/***/ })

})
//# sourceMappingURL=index.js.1e6ff62d5a52b063373c.hot-update.js.map