webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/reducers/counterReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/counterReducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/counterActions */ "./src/redux/actions/counterActions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const counterReducer = (state = {
  value: 0
}, action) => {
  switch (action.type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_1__["INCREMENT_COUNTER"]:
      return _objectSpread({}, state, {
        value: state.value < 10 ? state.value + 1 : state.value
      });

    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_1__["DECREMENT_COUNTER"]:
      return _objectSpread({}, state, {
        value: state.value > 0 ? state.value - 1 : state.value
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (counterReducer);

/***/ })

})
//# sourceMappingURL=_app.js.70de6f5d147a63911e83.hot-update.js.map