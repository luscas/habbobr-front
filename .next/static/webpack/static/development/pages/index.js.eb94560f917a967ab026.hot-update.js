webpackHotUpdate("static\\development\\pages\\index.js",{

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
    return __jsx("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 4
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 5
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 6
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 6
      }
    }, title), __jsx("link", {
      rel: "shortcut icon",
      href: "favicon.ico",
      type: "image/x-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 6
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }
    }), __jsx("main", {
      class: "mt-5 container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, this.props.modal ? 'Mostrando' : 'Escondendo', __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }
    }), __jsx("button", {
      onClick: this.props.showModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }
    }, "Show"), __jsx("button", {
      onClick: this.props.hideModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 6
      }
    }, "Hide")), __jsx(_components_Player__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      isOpen: this.props.modal,
      toggle: this.props.toggleModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
      toggle: this.props.toggleModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 6
      }
    }, "Modal title"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 6
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "primary",
      onClick: this.props.toggleModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 6
      }
    }, "Do Something"), ' ', __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      color: "secondary",
      onClick: this.props.toggleModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 6
      }
    }, "Cancel"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      isOpen: false,
      toggle: this.props.toggleModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "modal-dialog modal-lg modal-dialog-centered",
      role: "document",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "bg-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 8
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, "Um lugar divertido com gente incr\xEDvel."))), __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "toggle-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, __jsx("h3", {
      className: "modal-title",
      id: "loginModalCenterTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 10
      }
    }, "Entrar"), __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 10
      }
    }, __jsx("i", {
      className: "fas fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 10
      }
    }))), __jsx("div", {
      className: "modal-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("form", {
      name: "loginform",
      id: "loginform",
      action: "https://marcocuel.com/p/fansite/wp-login.php",
      method: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 10
      }
    }, __jsx("p", {
      className: "login-username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 10
      }
    }, __jsx("label", {
      htmlFor: "user_login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
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
        lineNumber: 80,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "login-password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 10
      }
    }, __jsx("label", {
      htmlFor: "user_pass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
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
        lineNumber: 84,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "login-remember",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 10
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 40
      }
    }, __jsx("input", {
      name: "rememberme",
      type: "checkbox",
      id: "rememberme",
      defaultValue: "forever",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 47
      }
    }), " Lembrar-me")), __jsx("p", {
      className: "login-submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 10
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
        lineNumber: 88,
        columnNumber: 11
      }
    }), __jsx("input", {
      type: "hidden",
      name: "redirect_to",
      defaultValue: "https://marcocuel.com/p/fansite/entrar/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }))), __jsx("hr", {
      className: "ou my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 10
      }
    }), __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 10
      }
    }, __jsx("a", {
      href: "https://marcocuel.com/p/fansite/registro",
      className: "btn btn-lg btn-success show-register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 10
      }
    }, "Criar nova conta")))), __jsx("div", {
      className: "register",
      style: {
        display: 'none'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "modal-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx("h3", {
      className: "modal-title",
      id: "loginModalCenterTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 10
      }
    }, "Criar conta"), __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 10
      }
    }, __jsx("i", {
      className: "fas fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 10
      }
    }))), __jsx("div", {
      className: "modal-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, __jsx("form", {
      action: "https://marcocuel.com/p/fansite/wp-login.php?action=register",
      method: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 10
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, "Usu\xE1rio"), __jsx("input", {
      type: "text",
      name: "user_login",
      id: "user_login",
      className: "form-control alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 10
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, "E-mail"), __jsx("input", {
      type: "text",
      name: "user_email",
      id: "user_email",
      className: "form-control alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    })), __jsx("p", {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 10
      }
    }, "Uma confirma\xE7\xE3o de registro ser\xE1 enviada para voc\xEA por e-mail."), __jsx("input", {
      className: "btn btn-lg btn-block btn-success",
      type: "submit",
      defaultValue: "Cadastre-se",
      id: "register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 10
      }
    }), __jsx("div", {
      className: "text-center text-muted mt-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 10
      }
    }, "J\xE1 tem uma conta? ", __jsx("a", {
      href: "https://marcocuel.com/p/fansite/entrar",
      className: "text-link text-primary show-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, "Entre agora"))))))))))));
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
//# sourceMappingURL=index.js.eb94560f917a967ab026.hot-update.js.map