webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-flight-datepicker */ "./node_modules/react-google-flight-datepicker/dist/index.js");
/* harmony import */ var react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CodeHighlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CodeHighlight */ "./pages/CodeHighlight.js");
/* harmony import */ var _Props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Props */ "./pages/Props.js");
var _jsxFileName = "/Users/davidtranwd/Projects/landing/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var demoCode = "import DatePicker from 'react-google-flight-datepicker';\n\n<DatePicker\n  startDate={new Date()}\n  endDate={new Date()}\n  onChange={({startDate, endDate}) => onDateChange(startDate, endDate)}\n  minDate={new Date(1900, 0, 1)}\n  maxDate={new Date(2100, 0, 1)}\n  dateFormat=\"D\"\n  monthFormat=\"MMM YYYY\"\n  startDatePlaceholder=\"Start Date\"\n  endDatePlaceholder=\"End Date\"\n  disabled={false}\n  className=\"my-own-class-name\"\n  startWeekDay=\"monday\"\n/>";

var Home = function Home() {
  return __jsx("div", {
    className: "jsx-2703206471" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("main", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2703206471" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2703206471" + " " + "nav-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2703206471" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "react-google-flight-datepicker"), __jsx("div", {
    className: "jsx-2703206471" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/JSLancerTeam/react-google-flight-datepicker",
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "GitHub")))), __jsx("div", {
    className: "jsx-2703206471" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("img", {
    src: "/plane.png",
    className: "jsx-2703206471" + " " + "hero__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2703206471" + " " + "hero__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "react-google-flight-datepicker"), __jsx("div", {
    className: "jsx-2703206471" + " " + "hero__subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "google flight date-picker implemented in ReactJS"), __jsx("div", {
    className: "jsx-2703206471" + " " + "hero__demo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(react_google_flight_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), __jsx("h2", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Installation"), __jsx(_CodeHighlight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: "bash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "npm install react-google-flight-datepicker"), __jsx("br", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Usage"), __jsx(_CodeHighlight__WEBPACK_IMPORTED_MODULE_4__["default"], {
    language: "jsx",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, demoCode), __jsx("br", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("a", {
    href: "https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Powered by ", __jsx("img", {
    src: "/zeit.svg",
    alt: "ZEIT Logo",
    className: "jsx-2703206471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2427912546",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');html.jsx-2703206471,body.jsx-2703206471{font-size:18px;}.datepickerContainer.jsx-2703206471{width:400px;margin:0 auto;font-family:'Roboto',sans-serif;}.container.jsx-2703206471{min-height:100vh;padding:0;}main.jsx-2703206471{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}footer.jsx-2703206471{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2703206471 img.jsx-2703206471{margin-left:0.5rem;}footer.jsx-2703206471 a.jsx-2703206471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-2703206471{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.nav.jsx-2703206471{position:fixed;top:0;left:0;right:0;z-index:1000;}.nav.jsx-2703206471 .nav-content.jsx-2703206471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px;background:white;}.nav.jsx-2703206471 .title.jsx-2703206471{color:black;font-weight:bold;font-size:1rempx;}.hero.jsx-2703206471{background:#25c2a0;padding:4rem;width:100%;color:white;text-align:center;}.hero__image.jsx-2703206471{width:250px;}.hero__title.jsx-2703206471{font-size:3rem;margin-bottom:20px;}.hero__subtitle.jsx-2703206471{font-size:1.5rem;}.hero__demo.jsx-2703206471{width:400px;margin:25px auto;}.prism-code{padding:10px;border-radius:3px;}@media screen and (max-width:500px){.datepickerContainer.jsx-2703206471{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFZ0IsQUFFaUYsQUFHekQsQUFJSCxBQU1LLEFBS0YsQUFVSixBQVNRLEFBSU4sQUFNQyxBQUtDLEFBUUYsQUFRRCxBQU1PLEFBUVAsQUFJRyxBQUtFLEFBSUwsQUFLQyxBQU1BLFdBN0VBLEFBOEViLENBbkdjLEFBNkRHLEFBY25CLEFBYW1CLENBS0MsQ0FyREcsQ0E1Q3ZCLEFBZVMsQUFrQ0QsQUFrQ2EsRUF6RVQsQUE4RVosRUF0REEsQUFxQ2UsRUFyQk4sR0F4QnNCLEVBckJJLENBTW5DLENBd0NVLENBZVMsQUEyQm5CLEVBS0EsQ0ExQmEsRUFZYixFQWhDZSxPQXFCRCxHQU5kLEVBbkRlLENBcUNmLElBMUJlLEVBK0NLLEdBcEVwQixNQXVDQSxTQThCQSxDQXJDeUIsQUFtQk8sZ0RBeENSLEtBV0MsOENBV0osZ0JBbUJBLFdBeENJLDBCQVdKLHdDQVdyQixnQkFtQm9CLGlCQXhDQyxDQXlDRixpQkFDbkIsRUEvQkEseUVBVmEsV0FDYiIsImZpbGUiOiIvVXNlcnMvZGF2aWR0cmFud2QvUHJvamVjdHMvbGFuZGluZy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3JlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcic7XG5pbXBvcnQgQ29kZUhpZ2hMaWdodCBmcm9tICcuL0NvZGVIaWdobGlnaHQnO1xuaW1wb3J0IFByb3BzIGZyb20gJy4vUHJvcHMnO1xuXG5jb25zdCBkZW1vQ29kZSA9IGBpbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXInO1xuXG48RGF0ZVBpY2tlclxuICBzdGFydERhdGU9e25ldyBEYXRlKCl9XG4gIGVuZERhdGU9e25ldyBEYXRlKCl9XG4gIG9uQ2hhbmdlPXsoe3N0YXJ0RGF0ZSwgZW5kRGF0ZX0pID0+IG9uRGF0ZUNoYW5nZShzdGFydERhdGUsIGVuZERhdGUpfVxuICBtaW5EYXRlPXtuZXcgRGF0ZSgxOTAwLCAwLCAxKX1cbiAgbWF4RGF0ZT17bmV3IERhdGUoMjEwMCwgMCwgMSl9XG4gIGRhdGVGb3JtYXQ9XCJEXCJcbiAgbW9udGhGb3JtYXQ9XCJNTU0gWVlZWVwiXG4gIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyPVwiU3RhcnQgRGF0ZVwiXG4gIGVuZERhdGVQbGFjZWhvbGRlcj1cIkVuZCBEYXRlXCJcbiAgZGlzYWJsZWQ9e2ZhbHNlfVxuICBjbGFzc05hbWU9XCJteS1vd24tY2xhc3MtbmFtZVwiXG4gIHN0YXJ0V2Vla0RheT1cIm1vbmRheVwiXG4vPmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+cmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KU0xhbmNlclRlYW0vcmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyXCI+R2l0SHViPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvcGxhbmUucG5nXCIgY2xhc3NOYW1lPVwiaGVyb19faW1hZ2VcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGl0bGVcIj5cbiAgICAgICAgICByZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXJcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fc3VidGl0bGVcIj5cbiAgICAgICAgICBnb29nbGUgZmxpZ2h0IGRhdGUtcGlja2VyIGltcGxlbWVudGVkIGluIFJlYWN0SlNcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fZGVtb1wiPlxuICAgICAgICAgIDxEYXRlcGlja2VyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMj5JbnN0YWxsYXRpb248L2gyPlxuICAgICAgPENvZGVIaWdoTGlnaHQgbGFuZ3VhZ2U9XCJiYXNoXCI+XG4gICAgICAgIG5wbSBpbnN0YWxsIHJlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlclxuICAgICAgPC9Db2RlSGlnaExpZ2h0PlxuICAgICAgPGJyIC8+XG4gICAgICA8aDI+VXNhZ2U8L2gyPlxuICAgICAgPENvZGVIaWdoTGlnaHQgbGFuZ3VhZ2U9XCJqc3hcIj57ZGVtb0NvZGV9PC9Db2RlSGlnaExpZ2h0PlxuICAgICAgPGJyIC8+XG4gICAgPC9tYWluPlxuXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL3plaXQuY28/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgUG93ZXJlZCBieSA8aW1nIHNyYz1cIi96ZWl0LnN2Z1wiIGFsdD1cIlpFSVQgTG9nb1wiIC8+XG4gICAgICA8L2E+XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIH1cblxuICAgICAgLmRhdGVwaWNrZXJDb250YWluZXIge1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbWFpbiB7XG4gICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5uYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXYgLm5hdi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAubmF2IC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbXB4O1xuICAgICAgfVxuXG4gICAgICAuaGVybyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNWMyYTA7XG4gICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAuaGVyb19fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX19zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAuaGVyb19fZGVtbyB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICB9XG5cbiAgICAgIDpnbG9iYWwoLnByaXNtLWNvZGUpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAuZGF0ZXBpY2tlckNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1908709516",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:'Roboto',Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBMdUIsQUFJbUIsQUFNWSxVQUxiLFNBQ3dDLEdBS25ELDRDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAncmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyJztcbmltcG9ydCBDb2RlSGlnaExpZ2h0IGZyb20gJy4vQ29kZUhpZ2hsaWdodCc7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi9Qcm9wcyc7XG5cbmNvbnN0IGRlbW9Db2RlID0gYGltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcic7XG5cbjxEYXRlUGlja2VyXG4gIHN0YXJ0RGF0ZT17bmV3IERhdGUoKX1cbiAgZW5kRGF0ZT17bmV3IERhdGUoKX1cbiAgb25DaGFuZ2U9eyh7c3RhcnREYXRlLCBlbmREYXRlfSkgPT4gb25EYXRlQ2hhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSl9XG4gIG1pbkRhdGU9e25ldyBEYXRlKDE5MDAsIDAsIDEpfVxuICBtYXhEYXRlPXtuZXcgRGF0ZSgyMTAwLCAwLCAxKX1cbiAgZGF0ZUZvcm1hdD1cIkRcIlxuICBtb250aEZvcm1hdD1cIk1NTSBZWVlZXCJcbiAgc3RhcnREYXRlUGxhY2Vob2xkZXI9XCJTdGFydCBEYXRlXCJcbiAgZW5kRGF0ZVBsYWNlaG9sZGVyPVwiRW5kIERhdGVcIlxuICBkaXNhYmxlZD17ZmFsc2V9XG4gIGNsYXNzTmFtZT1cIm15LW93bi1jbGFzcy1uYW1lXCJcbiAgc3RhcnRXZWVrRGF5PVwibW9uZGF5XCJcbi8+YDtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pTTGFuY2VyVGVhbS9yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXJcIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9wbGFuZS5wbmdcIiBjbGFzc05hbWU9XCJoZXJvX19pbWFnZVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190aXRsZVwiPlxuICAgICAgICAgIHJlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlclxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19zdWJ0aXRsZVwiPlxuICAgICAgICAgIGdvb2dsZSBmbGlnaHQgZGF0ZS1waWNrZXIgaW1wbGVtZW50ZWQgaW4gUmVhY3RKU1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19kZW1vXCI+XG4gICAgICAgICAgPERhdGVwaWNrZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyPkluc3RhbGxhdGlvbjwvaDI+XG4gICAgICA8Q29kZUhpZ2hMaWdodCBsYW5ndWFnZT1cImJhc2hcIj5cbiAgICAgICAgbnBtIGluc3RhbGwgcmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyXG4gICAgICA8L0NvZGVIaWdoTGlnaHQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZUhpZ2hMaWdodCBsYW5ndWFnZT1cImpzeFwiPntkZW1vQ29kZX08L0NvZGVIaWdoTGlnaHQ+XG4gICAgICA8YnIgLz5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jbz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3plaXQuc3ZnXCIgYWx0PVwiWkVJVCBMb2dvXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAuZGF0ZXBpY2tlckNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLm5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIH1cblxuICAgICAgLm5hdiAubmF2LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5uYXYgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI1YzJhMDtcbiAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVyb19faW1hZ2Uge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX19kZW1vIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgIH1cblxuICAgICAgOmdsb2JhbCgucHJpc20tY29kZSkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5kYXRlcGlja2VyQ29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cbe2c730cac3ca61416b.hot-update.js.map