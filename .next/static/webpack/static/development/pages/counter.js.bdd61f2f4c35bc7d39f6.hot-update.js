webpackHotUpdate("static\\development\\pages\\counter.js",{

/***/ "./src/pages/counter.js":
/*!******************************!*\
  !*** ./src/pages/counter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./src/redux/actions/counterActions.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "C:\\www\\habbobr-front\\src\\pages\\counter.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Counter extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }
    }, "Counter"), __jsx("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 6
      }
    }, this.props.counter)), __jsx("button", {
      onClick: this.props.incrementCounter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, "Increment"), __jsx("button", {
      onClick: this.props.decrementCounter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, "Decrement"));
  }

}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["incrementCounter"],
  decrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["decrementCounter"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Counter));

/***/ })

})
//# sourceMappingURL=counter.js.bdd61f2f4c35bc7d39f6.hot-update.js.map