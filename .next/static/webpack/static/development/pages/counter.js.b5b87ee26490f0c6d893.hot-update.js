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
    return __jsx(Layout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 4
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, "Counter"), __jsx("center", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 6
      }
    }, this.props.counter)), __jsx("button", {
      onClick: this.props.incrementCounter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }
    }, "Increment"), __jsx("button", {
      onClick: this.props.decrementCounter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
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
//# sourceMappingURL=counter.js.b5b87ee26490f0c6d893.hot-update.js.map