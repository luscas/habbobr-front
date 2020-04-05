webpackHotUpdate("static\\development\\pages\\counter.js",{

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions/modalActions */ "./src/redux/actions/modalActions.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Player */ "./src/components/Player.js");
var _jsxFileName = "C:\\www\\habbobr-front\\src\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      title
    } = this.props;

    const modalCloseButton = __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 28
      }
    }, __jsx("i", {
      className: "fas fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 108
      }
    }));

    return __jsx("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 6
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 6
      }
    }, title), __jsx("link", {
      rel: "shortcut icon",
      href: "favicon.ico",
      type: "image/x-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 6
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 5
      }
    }), __jsx("main", {
      class: "mt-5 container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }
    }, this.props.modal ? 'Mostrando' : 'Escondendo', __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }
    }), __jsx("button", {
      onClick: this.props.showModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 6
      }
    }, "Show"), __jsx("button", {
      onClick: this.props.hideModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 6
      }
    }, "Hide")), __jsx(_components_Player__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      isOpen: this.props.modal,
      toggle: this.props.toggleModal,
      size: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "bg-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 8
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, "Um lugar divertido com gente incr\xEDvel."))), __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "toggle-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
      close: modalCloseButton,
      wrapTag: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 10
      }
    }, "Entrar"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 10
      }
    }, __jsx("form", {
      name: "loginform",
      id: "loginform",
      action: "https://marcocuel.com/p/fansite/wp-login.php",
      method: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "login-username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "user_login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 12
      }
    }, "Nome de usu\xE1rio ou endere\xE7o de e-mail"), __jsx("input", {
      type: "text",
      name: "log",
      id: "user_login",
      className: "input",
      defaultValue: true,
      size: 20,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 12
      }
    })), __jsx("p", {
      className: "login-password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, __jsx("label", {
      htmlFor: "user_pass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 12
      }
    }, "Senha"), __jsx("input", {
      type: "password",
      name: "pwd",
      id: "user_pass",
      className: "input",
      defaultValue: true,
      size: 20,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 12
      }
    })), __jsx("p", {
      className: "login-remember",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }, __jsx("input", {
      name: "rememberme",
      type: "checkbox",
      id: "rememberme",
      defaultValue: "forever",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 48
      }
    }), " Lembrar-me")), __jsx("p", {
      className: "login-submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, __jsx("input", {
      type: "submit",
      name: "wp-submit",
      id: "wp-submit",
      className: "button button-primary",
      defaultValue: "Acessar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 12
      }
    }), __jsx("input", {
      type: "hidden",
      name: "redirect_to",
      defaultValue: "https://marcocuel.com/p/fansite/entrar/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 12
      }
    }))), __jsx("hr", {
      className: "ou my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, __jsx("a", {
      href: "https://marcocuel.com/p/fansite/registro",
      className: "btn btn-lg btn-success show-register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Criar nova conta")))))))));
  }

}

const mapStateToProps = state => ({
  modal: state.modal.value
});

const mapDispatchToProps = {
  showModal: _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["showModal"],
  hideModal: _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["hideModal"],
  toggleModal: _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_4__["toggleModal"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ })

})
//# sourceMappingURL=counter.js.d2557757de9121742a87.hot-update.js.map