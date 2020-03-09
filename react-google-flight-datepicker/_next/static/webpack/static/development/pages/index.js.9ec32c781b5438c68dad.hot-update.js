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
    className: "jsx-1406352021" + " " + "container",
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
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Create Next App"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("main", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1406352021" + " " + "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1406352021" + " " + "nav-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1406352021" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "react-google-flight-datepicker"), __jsx("div", {
    className: "jsx-1406352021" + " " + "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/JSLancerTeam/react-google-flight-datepicker",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "GitHub")))), __jsx("div", {
    className: "jsx-1406352021" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "/plane.png",
    className: "jsx-1406352021" + " " + "hero__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1406352021" + " " + "hero__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "react-google-flight-datepicker"), __jsx("div", {
    className: "jsx-1406352021" + " " + "hero__subtitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "google flight date-picker implemented in ReactJS"), __jsx("div", {
    className: "jsx-1406352021" + " " + "hero__demo",
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
    className: "jsx-1406352021",
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
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-1406352021",
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
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Props"), __jsx(_Props__WEBPACK_IMPORTED_MODULE_5__["default"], {
    props: [{
      name: 'startDate',
      type: 'Date',
      defaultValue: 'null',
      description: 'Selected start date'
    }, {
      name: 'endDate',
      type: 'Date',
      defaultValue: 'null',
      description: 'Selected end date'
    }, {
      name: 'dateFormat',
      type: 'String',
      defaultValue: 'D',
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Display format for date. Check momentjs doc for information (", __jsx("a", {
        target: "_blank",
        href: "https://momentjs.com/docs/#/displaying/",
        className: "jsx-1406352021",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "https://momentjs.com/docs/#/displaying/"), ")")
    }, {
      name: 'monthFormat',
      type: 'String',
      defaultValue: 'MMM YYYY',
      description: __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Display format for month. Check momentjs doc for information (", __jsx("a", {
        target: "_blank",
        href: "https://momentjs.com/docs/#/displaying/",
        className: "jsx-1406352021",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "https://momentjs.com/docs/#/displaying/"), ")")
    }, {
      name: 'onChange',
      type: 'Function',
      defaultValue: 'null',
      description: 'Event handler that is called when startDate and endDate are changed'
    }, {
      name: 'onFocus',
      type: 'Function',
      defaultValue: 'null',
      description: 'Return a string (START_DATE, END_DATE) which indicate which text input is focused'
    }, {
      name: 'minDate',
      type: 'Date',
      defaultValue: '1900 Jan 01',
      description: 'Minimum date that user can select'
    }, {
      name: 'maxDate',
      type: 'Date',
      defaultValue: '2100 Jan 01',
      description: 'Maximum date that user can select'
    }, {
      name: 'className',
      type: 'String',
      defaultValue: '',
      description: 'Custom CSS className for datepicker'
    }, {
      name: 'disabled',
      type: 'String',
      defaultValue: 'false',
      description: 'Disable the datepicker'
    }, {
      name: 'startDatePlaceholder',
      type: 'String',
      defaultValue: 'Start Date',
      description: 'Placeholder text for startDate text input'
    }, {
      name: 'endDatePlaceholder',
      type: 'String',
      defaultValue: 'End Date',
      description: 'Placeholder text for endDate text input'
    }, {
      name: 'startWeekDay',
      type: 'String (monday or sunday)',
      defaultValue: 'monday',
      description: 'Determine the start day for a week (monday or sunday)'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("h2", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Author"), __jsx("br", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx("strong", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "David Tran"), __jsx("a", {
    href: "https://github.com/davidtran",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "https://github.com/davidtran"), __jsx("a", {
    href: "mailto:david@jslancer.com",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "david@jslancer.com"), __jsx("br", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), __jsx("strong", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Leo Phan"), __jsx("a", {
    href: "https://github.com/nhuthuy212507",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "https://github.com/nhuthuy212507"), __jsx("br", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx("footer", {
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx("a", {
    href: "https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Powered by ", __jsx("img", {
    src: "/zeit.svg",
    alt: "ZEIT Logo",
    className: "jsx-1406352021",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "83054864",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');html.jsx-1406352021,body.jsx-1406352021{font-size:18px;margin:0;}.datepickerContainer.jsx-1406352021{width:400px;margin:0 auto;font-family:'Roboto',sans-serif;}.container.jsx-1406352021{min-height:100vh;padding:0;margin:0;width:100%;}main.jsx-1406352021{width:100%;margin-top:49px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1406352021{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1406352021 img.jsx-1406352021{margin-left:0.5rem;}footer.jsx-1406352021 a.jsx-1406352021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1406352021{color:inherit;-webkit-text-decoration:none;text-decoration:none;}h2.jsx-1406352021{margin-bottom:0;}.nav.jsx-1406352021{position:fixed;top:0;left:0;right:0;z-index:1000;}.nav.jsx-1406352021 .nav-content.jsx-1406352021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px;background:white;}.nav.jsx-1406352021 .title.jsx-1406352021{color:black;font-weight:bold;font-size:1rempx;}.hero.jsx-1406352021{background:#25c2a0;padding:4rem;width:100%;color:white;text-align:center;}.hero__image.jsx-1406352021{width:250px;}.hero__title.jsx-1406352021{font-size:3rem;margin-bottom:20px;}.hero__subtitle.jsx-1406352021{font-size:1.5rem;}.hero__demo.jsx-1406352021{width:400px;margin:25px auto;}.prism-code{padding:10px;border-radius:3px;}table.jsx-1406352021{border-spacing:1px;width:90%;overflow:scroll;border-collapse:collapse;border:1px solid #ddd;}table.jsx-1406352021,th.jsx-1406352021,td.jsx-1406352021{border-collapse:collapse;border:1px solid #ddd;}table.jsx-1406352021 td.jsx-1406352021{border-spacing:1px;}@media screen and (max-width:500px){.hero.jsx-1406352021{padding:2rem;}.hero__title.jsx-1406352021{font-size:2rem;}.hero__subtitle.jsx-1406352021{font-size:1.2rem;}.hero__image.jsx-1406352021{width:150px;}.hero__demo.jsx-1406352021{width:100%;}.prism-code{max-width:90%;overflow:scroll;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStMZ0IsQUFFaUYsQUFJekQsQUFLSCxBQU1LLEFBT04sQUFTQSxBQVNRLEFBSU4sQUFNQyxBQUtFLEFBSUQsQUFRRixBQVFELEFBTU8sQUFRUCxBQUlHLEFBS0UsQUFJTCxBQUtDLEFBS00sQUFRTSxBQUtOLEFBS0osQUFHRSxBQUlFLEFBSUwsQUFJRCxBQUlHLFdBOUhBLEFBU0gsQUFrSGIsQ0F4SWMsQUFrRUcsQUFjbkIsQUFhbUIsQUF1Q2pCLENBbENrQixBQXVCbEIsQ0FoRnFCLEFBbUdILENBakpULEFBdURILEFBa0NhLEFBd0NuQixDQTlFRixDQXhDWSxBQW1GWixBQXVDRSxFQWpHRixBQXlDZSxBQStCSCxBQWFaLEVBakVTLEdBdkRULEFBMkIrQixDQXdGUCxDQTlHVyxDQU14QixBQU9JLENBc0NMLENBZVMsQUEyQm5CLEFBVWtCLENBcUNoQixDQTFDRixDQTFCYSxFQVliLEVBN0VhLEFBNkNFLE9BcUJELEVBK0JhLENBckMzQixDQTNEQSxBQXVHQSxFQTFEQSxJQTlCZSxFQW1ESyxHQXpFcEIsTUF3Q0EsTUFnRXdCLEdBOUJ4QixDQXpDeUIsQUF1Qk8sa0JBaURoQyxTQTVGd0IsMEJBVUMsOENBV0osTUFwQlEsVUEyQ1IscUNBakNBLHdDQVdyQixnQkF1Qm9CLEVBM0NDLGdCQTRDRixpQkFDbkIsRUFuQ0EsMERBVEEiLCJmaWxlIjoiL1VzZXJzL2RhdmlkdHJhbndkL1Byb2plY3RzL2xhbmRpbmcvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAncmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyJztcbmltcG9ydCBDb2RlSGlnaExpZ2h0IGZyb20gJy4vQ29kZUhpZ2hsaWdodCc7XG5pbXBvcnQgUHJvcHMgZnJvbSAnLi9Qcm9wcyc7XG5cbmNvbnN0IGRlbW9Db2RlID0gYGltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcic7XG5cbjxEYXRlUGlja2VyXG4gIHN0YXJ0RGF0ZT17bmV3IERhdGUoKX1cbiAgZW5kRGF0ZT17bmV3IERhdGUoKX1cbiAgb25DaGFuZ2U9eyh7c3RhcnREYXRlLCBlbmREYXRlfSkgPT4gb25EYXRlQ2hhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSl9XG4gIG1pbkRhdGU9e25ldyBEYXRlKDE5MDAsIDAsIDEpfVxuICBtYXhEYXRlPXtuZXcgRGF0ZSgyMTAwLCAwLCAxKX1cbiAgZGF0ZUZvcm1hdD1cIkRcIlxuICBtb250aEZvcm1hdD1cIk1NTSBZWVlZXCJcbiAgc3RhcnREYXRlUGxhY2Vob2xkZXI9XCJTdGFydCBEYXRlXCJcbiAgZW5kRGF0ZVBsYWNlaG9sZGVyPVwiRW5kIERhdGVcIlxuICBkaXNhYmxlZD17ZmFsc2V9XG4gIGNsYXNzTmFtZT1cIm15LW93bi1jbGFzcy1uYW1lXCJcbiAgc3RhcnRXZWVrRGF5PVwibW9uZGF5XCJcbi8+YDtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0pTTGFuY2VyVGVhbS9yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXJcIj5cbiAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9wbGFuZS5wbmdcIiBjbGFzc05hbWU9XCJoZXJvX19pbWFnZVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX190aXRsZVwiPnJlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX3N1YnRpdGxlXCI+XG4gICAgICAgICAgZ29vZ2xlIGZsaWdodCBkYXRlLXBpY2tlciBpbXBsZW1lbnRlZCBpbiBSZWFjdEpTXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9fX2RlbW9cIj5cbiAgICAgICAgICA8RGF0ZXBpY2tlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+SW5zdGFsbGF0aW9uPC9oMj5cbiAgICAgIDxDb2RlSGlnaExpZ2h0IGxhbmd1YWdlPVwiYmFzaFwiPlxuICAgICAgICBucG0gaW5zdGFsbCByZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXJcbiAgICAgIDwvQ29kZUhpZ2hMaWdodD5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPlVzYWdlPC9oMj5cbiAgICAgIDxDb2RlSGlnaExpZ2h0IGxhbmd1YWdlPVwianN4XCI+e2RlbW9Db2RlfTwvQ29kZUhpZ2hMaWdodD5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPlByb3BzPC9oMj5cbiAgICAgIDxQcm9wc1xuICAgICAgICBwcm9wcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ0RhdGUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnbnVsbCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NlbGVjdGVkIHN0YXJ0IGRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZW5kRGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnRGF0ZScsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdudWxsJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnU2VsZWN0ZWQgZW5kIGRhdGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGF0ZUZvcm1hdCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ0QnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBEaXNwbGF5IGZvcm1hdCBmb3IgZGF0ZS4gQ2hlY2sgbW9tZW50anMgZG9jIGZvciBpbmZvcm1hdGlvbiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtb250aEZvcm1hdCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ01NTSBZWVlZJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgRGlzcGxheSBmb3JtYXQgZm9yIG1vbnRoLiBDaGVjayBtb21lbnRqcyBkb2MgZm9yIGluZm9ybWF0aW9uIChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ29uQ2hhbmdlJyxcbiAgICAgICAgICAgIHR5cGU6ICdGdW5jdGlvbicsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdudWxsJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnRXZlbnQgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHN0YXJ0RGF0ZSBhbmQgZW5kRGF0ZSBhcmUgY2hhbmdlZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdvbkZvY3VzJyxcbiAgICAgICAgICAgIHR5cGU6ICdGdW5jdGlvbicsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdudWxsJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAnUmV0dXJuIGEgc3RyaW5nIChTVEFSVF9EQVRFLCBFTkRfREFURSkgd2hpY2ggaW5kaWNhdGUgd2hpY2ggdGV4dCBpbnB1dCBpcyBmb2N1c2VkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21pbkRhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ0RhdGUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnMTkwMCBKYW4gMDEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNaW5pbXVtIGRhdGUgdGhhdCB1c2VyIGNhbiBzZWxlY3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbWF4RGF0ZScsXG4gICAgICAgICAgICB0eXBlOiAnRGF0ZScsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICcyMTAwIEphbiAwMScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ01heGltdW0gZGF0ZSB0aGF0IHVzZXIgY2FuIHNlbGVjdCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdjbGFzc05hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDdXN0b20gQ1NTIGNsYXNzTmFtZSBmb3IgZGF0ZXBpY2tlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkaXNhYmxlZCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ2ZhbHNlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGlzYWJsZSB0aGUgZGF0ZXBpY2tlcidcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGFydERhdGVQbGFjZWhvbGRlcicsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGFjZWhvbGRlciB0ZXh0IGZvciBzdGFydERhdGUgdGV4dCBpbnB1dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdlbmREYXRlUGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BsYWNlaG9sZGVyIHRleHQgZm9yIGVuZERhdGUgdGV4dCBpbnB1dCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdzdGFydFdlZWtEYXknLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZyAobW9uZGF5IG9yIHN1bmRheSknLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnbW9uZGF5JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGV0ZXJtaW5lIHRoZSBzdGFydCBkYXkgZm9yIGEgd2VlayAobW9uZGF5IG9yIHN1bmRheSknXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICAgIDxoMj5BdXRob3I8L2gyPlxuICAgICAgPGJyIC8+XG4gICAgICA8c3Ryb25nPkRhdmlkIFRyYW48L3N0cm9uZz5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF2aWR0cmFuXCI+aHR0cHM6Ly9naXRodWIuY29tL2RhdmlkdHJhbjwvYT5cbiAgICAgIDxhIGhyZWY9XCJtYWlsdG86ZGF2aWRAanNsYW5jZXIuY29tXCI+ZGF2aWRAanNsYW5jZXIuY29tPC9hPlxuICAgICAgPGJyIC8+XG4gICAgICA8c3Ryb25nPkxlbyBQaGFuPC9zdHJvbmc+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25odXRodXkyMTI1MDdcIj5cbiAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL25odXRodXkyMTI1MDdcbiAgICAgIDwvYT5cbiAgICAgIDxiciAvPlxuICAgIDwvbWFpbj5cblxuICAgIDxmb290ZXI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly96ZWl0LmNvP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICA+XG4gICAgICAgIFBvd2VyZWQgYnkgPGltZyBzcmM9XCIvemVpdC5zdmdcIiBhbHQ9XCJaRUlUIExvZ29cIiAvPlxuICAgICAgPC9hPlxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5kYXRlcGlja2VyQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIG1haW4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNDlweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLm5hdiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIH1cblxuICAgICAgLm5hdiAubmF2LWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG5cbiAgICAgIC5uYXYgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI1YzJhMDtcbiAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVyb19faW1hZ2Uge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX3N1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX19kZW1vIHtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgIH1cblxuICAgICAgOmdsb2JhbCgucHJpc20tY29kZSkge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG5cbiAgICAgIHRhYmxlIHtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIH1cblxuICAgICAgdGFibGUsIHRoLCB0ZCB7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIHRhYmxlIHRkIHtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmhlcm9fX3RpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyb19fc3VidGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm9fX2ltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyb19fZGVtbyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICA6Z2xvYmFsKC5wcmlzbS1jb2RlKSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1908709516",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:'Roboto',Helvetica Neue,sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJWdUIsQUFJbUIsQUFNWSxVQUxiLFNBQ3dDLEdBS25ELDRDQUpBIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZHRyYW53ZC9Qcm9qZWN0cy9sYW5kaW5nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3JlYWN0LWdvb2dsZS1mbGlnaHQtZGF0ZXBpY2tlcic7XG5pbXBvcnQgQ29kZUhpZ2hMaWdodCBmcm9tICcuL0NvZGVIaWdobGlnaHQnO1xuaW1wb3J0IFByb3BzIGZyb20gJy4vUHJvcHMnO1xuXG5jb25zdCBkZW1vQ29kZSA9IGBpbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXInO1xuXG48RGF0ZVBpY2tlclxuICBzdGFydERhdGU9e25ldyBEYXRlKCl9XG4gIGVuZERhdGU9e25ldyBEYXRlKCl9XG4gIG9uQ2hhbmdlPXsoe3N0YXJ0RGF0ZSwgZW5kRGF0ZX0pID0+IG9uRGF0ZUNoYW5nZShzdGFydERhdGUsIGVuZERhdGUpfVxuICBtaW5EYXRlPXtuZXcgRGF0ZSgxOTAwLCAwLCAxKX1cbiAgbWF4RGF0ZT17bmV3IERhdGUoMjEwMCwgMCwgMSl9XG4gIGRhdGVGb3JtYXQ9XCJEXCJcbiAgbW9udGhGb3JtYXQ9XCJNTU0gWVlZWVwiXG4gIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyPVwiU3RhcnQgRGF0ZVwiXG4gIGVuZERhdGVQbGFjZWhvbGRlcj1cIkVuZCBEYXRlXCJcbiAgZGlzYWJsZWQ9e2ZhbHNlfVxuICBjbGFzc05hbWU9XCJteS1vd24tY2xhc3MtbmFtZVwiXG4gIHN0YXJ0V2Vla0RheT1cIm1vbmRheVwiXG4vPmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8bWFpbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+cmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KU0xhbmNlclRlYW0vcmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyXCI+XG4gICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPGltZyBzcmM9XCIvcGxhbmUucG5nXCIgY2xhc3NOYW1lPVwiaGVyb19faW1hZ2VcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb19fdGl0bGVcIj5yZWFjdC1nb29nbGUtZmxpZ2h0LWRhdGVwaWNrZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19zdWJ0aXRsZVwiPlxuICAgICAgICAgIGdvb2dsZSBmbGlnaHQgZGF0ZS1waWNrZXIgaW1wbGVtZW50ZWQgaW4gUmVhY3RKU1xuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvX19kZW1vXCI+XG4gICAgICAgICAgPERhdGVwaWNrZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGgyPkluc3RhbGxhdGlvbjwvaDI+XG4gICAgICA8Q29kZUhpZ2hMaWdodCBsYW5ndWFnZT1cImJhc2hcIj5cbiAgICAgICAgbnBtIGluc3RhbGwgcmVhY3QtZ29vZ2xlLWZsaWdodC1kYXRlcGlja2VyXG4gICAgICA8L0NvZGVIaWdoTGlnaHQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5Vc2FnZTwvaDI+XG4gICAgICA8Q29kZUhpZ2hMaWdodCBsYW5ndWFnZT1cImpzeFwiPntkZW1vQ29kZX08L0NvZGVIaWdoTGlnaHQ+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5Qcm9wczwvaDI+XG4gICAgICA8UHJvcHNcbiAgICAgICAgcHJvcHM9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhcnREYXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdEYXRlJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ251bGwnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZWxlY3RlZCBzdGFydCBkYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2VuZERhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ0RhdGUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnbnVsbCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1NlbGVjdGVkIGVuZCBkYXRlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RhdGVGb3JtYXQnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdEJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgRGlzcGxheSBmb3JtYXQgZm9yIGRhdGUuIENoZWNrIG1vbWVudGpzIGRvYyBmb3IgaW5mb3JtYXRpb24gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbW9udGhGb3JtYXQnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdNTU0gWVlZWScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIERpc3BsYXkgZm9ybWF0IGZvciBtb250aC4gQ2hlY2sgbW9tZW50anMgZG9jIGZvciBpbmZvcm1hdGlvbiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBodHRwczovL21vbWVudGpzLmNvbS9kb2NzLyMvZGlzcGxheWluZy9cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdvbkNoYW5nZScsXG4gICAgICAgICAgICB0eXBlOiAnRnVuY3Rpb24nLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnbnVsbCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ0V2ZW50IGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBzdGFydERhdGUgYW5kIGVuZERhdGUgYXJlIGNoYW5nZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnb25Gb2N1cycsXG4gICAgICAgICAgICB0eXBlOiAnRnVuY3Rpb24nLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnbnVsbCcsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgJ1JldHVybiBhIHN0cmluZyAoU1RBUlRfREFURSwgRU5EX0RBVEUpIHdoaWNoIGluZGljYXRlIHdoaWNoIHRleHQgaW5wdXQgaXMgZm9jdXNlZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdtaW5EYXRlJyxcbiAgICAgICAgICAgIHR5cGU6ICdEYXRlJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJzE5MDAgSmFuIDAxJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTWluaW11bSBkYXRlIHRoYXQgdXNlciBjYW4gc2VsZWN0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ21heERhdGUnLFxuICAgICAgICAgICAgdHlwZTogJ0RhdGUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnMjEwMCBKYW4gMDEnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdNYXhpbXVtIGRhdGUgdGhhdCB1c2VyIGNhbiBzZWxlY3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY2xhc3NOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ3VzdG9tIENTUyBjbGFzc05hbWUgZm9yIGRhdGVwaWNrZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdmYWxzZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rpc2FibGUgdGhlIGRhdGVwaWNrZXInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhcnREYXRlUGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGxhY2Vob2xkZXIgdGV4dCBmb3Igc3RhcnREYXRlIHRleHQgaW5wdXQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZW5kRGF0ZVBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQbGFjZWhvbGRlciB0ZXh0IGZvciBlbmREYXRlIHRleHQgaW5wdXQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnc3RhcnRXZWVrRGF5JyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcgKG1vbmRheSBvciBzdW5kYXkpJyxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogJ21vbmRheScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0RldGVybWluZSB0aGUgc3RhcnQgZGF5IGZvciBhIHdlZWsgKG1vbmRheSBvciBzdW5kYXkpJ1xuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgICA8aDI+QXV0aG9yPC9oMj5cbiAgICAgIDxiciAvPlxuICAgICAgPHN0cm9uZz5EYXZpZCBUcmFuPC9zdHJvbmc+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkdHJhblwiPmh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZHRyYW48L2E+XG4gICAgICA8YSBocmVmPVwibWFpbHRvOmRhdmlkQGpzbGFuY2VyLmNvbVwiPmRhdmlkQGpzbGFuY2VyLmNvbTwvYT5cbiAgICAgIDxiciAvPlxuICAgICAgPHN0cm9uZz5MZW8gUGhhbjwvc3Ryb25nPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uaHV0aHV5MjEyNTA3XCI+XG4gICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9uaHV0aHV5MjEyNTA3XG4gICAgICA8L2E+XG4gICAgICA8YnIgLz5cbiAgICA8L21haW4+XG5cbiAgICA8Zm9vdGVyPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vemVpdC5jbz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICBQb3dlcmVkIGJ5IDxpbWcgc3JjPVwiL3plaXQuc3ZnXCIgYWx0PVwiWkVJVCBMb2dvXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICBodG1sLFxuICAgICAgYm9keSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICAuZGF0ZXBpY2tlckNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBtYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDQ5cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICB9XG5cbiAgICAgIC5uYXYgLm5hdi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgfVxuXG4gICAgICAubmF2IC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbXB4O1xuICAgICAgfVxuXG4gICAgICAuaGVybyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNWMyYTA7XG4gICAgICAgIHBhZGRpbmc6IDRyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmhlcm9fX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgfVxuXG4gICAgICAuaGVyb19fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5oZXJvX19zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuXG4gICAgICAuaGVyb19fZGVtbyB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgICB9XG5cbiAgICAgIDpnbG9iYWwoLnByaXNtLWNvZGUpIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuXG4gICAgICB0YWJsZSB7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG5cbiAgICAgIHRhYmxlLCB0aCwgdGQge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuXG4gICAgICB0YWJsZSB0ZCB7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICB9XG4gICAgICAgIC5oZXJvX190aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm9fX3N1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvX19pbWFnZSB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlcm9fX2RlbW8ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmdsb2JhbCgucHJpc20tY29kZSkge1xuICAgICAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/davidtranwd/Projects/landing/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.9ec32c781b5438c68dad.hot-update.js.map