webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/redux/actions/modalActions.js":
/*!*******************************************!*\
  !*** ./src/redux/actions/modalActions.js ***!
  \*******************************************/
/*! exports provided: SHOW_MODAL, HIDE_MODAL, TOGGLE_MODAL, showModal, hideModal, toggleModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MODAL", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIDE_MODAL", function() { return HIDE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODAL", function() { return TOGGLE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideModal", function() { return hideModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleModal", function() { return toggleModal; });
//Action Types
const SHOW_MODAL = "SHOW_MODAL";
const HIDE_MODAL = "HIDE_MODAL";
const TOGGLE_MODAL = "TOGGLE_MODAL"; //Action Creator

const showModal = () => ({
  type: SHOW_MODAL
});
const hideModal = () => ({
  type: HIDE_MODAL
});
const toggleModal = () => ({
  type: HIDE_MODAL
});

/***/ }),

/***/ "./src/redux/reducers/modalReducer.js":
/*!********************************************!*\
  !*** ./src/redux/reducers/modalReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modalActions */ "./src/redux/actions/modalActions.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const modalReducer = (state = {
  value: 0
}, action) => {
  switch (action.type) {
    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["SHOW_MODAL"]:
      return _objectSpread({}, state, {
        value: true
      });

    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["HIDE_MODAL"]:
      return _objectSpread({}, state, {
        value: false
      });

    case _actions_modalActions__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_MODAL"]:
      return _objectSpread({}, state, {
        value: state.value = !state.value
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modalReducer);

/***/ })

})
//# sourceMappingURL=_app.js.469ee0a3a95bc74d7f1e.hot-update.js.map