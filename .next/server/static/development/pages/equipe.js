module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\www\\habbobr-front\\src\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Footer() {
  return __jsx("div", {
    className: "site-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "menu-rodape-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("ul", {
    id: "menu-rodape",
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-28 current_page_item menu-item-119",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    "aria-current": "page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 29
    }
  }, "In\xEDcio")), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-122",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  }, "Sobre")), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-123",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 29
    }
  }, "Not\xEDcias")), __jsx("li", {
    className: "menu-item menu-item-type-post_type_archive menu-item-object-forum menu-item-195",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, "F\xF3rum")), __jsx("li", {
    className: "menu-item menu-item-type-post_type_archive menu-item-object-galeria menu-item-196",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 29
    }
  }, "Galeria")), __jsx("li", {
    className: "menu-item menu-item-type-post_type_archive menu-item-object-evento menu-item-206",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, "Eventos")), __jsx("li", {
    className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-120",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, "Contato")))), __jsx("div", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "HabboBR.org"), " \xA9 ", new Date().getFullYear(), ". Todos direitos reservados."), "Esta f\xE3 site n\xE3o est\xE1 afiliada com, patrocinada por, apoiada por, ou principalmente aprovada pela Sulake Oy ou suas empresas Afiliadas.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), "Este f\xE3 site pode utilizar as marcas registradas e outras propriedades intelectuais do Habbo, que est\xE3o permitidas sob a Pol\xEDtica de F\xE3 Sites Habbo.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), "Feito com amor por ", __jsx("a", {
    href: "https://marcocuel.com/",
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 36
    }
  }, "Marco Cuel"), " e ", __jsx("a", {
    href: "http://github.com/luscas",
    className: "text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 111
    }
  }, "Lucas Bueno")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/modalActions */ "./src/redux/actions/modalActions.js");
var _jsxFileName = "C:\\www\\habbobr-front\\src\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Header(props) {
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "light",
    light: true,
    fixed: "top",
    expand: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarBrand"], {
    href: "/",
    className: "navbar-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, "habboBR", __jsx("span", {
    className: "tag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, "Beta")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggleCollapse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("span", {
    className: "navbar-toggler-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 44
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx("ul", {
    id: "menu-principal",
    className: "navbar-nav mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "/",
    className: "nav-link active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "In\xEDcio")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownToggle"], {
    nav: true,
    caret: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }, "P\xE1ginas"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"], {
    right: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Sobre"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Login"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    href: "/equipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Equipe"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Contato"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["DropdownItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Components")))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "/",
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 10
    }
  }, "Not\xEDcias")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "/",
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 10
    }
  }, "F\xF3rum")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "/",
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 10
    }
  }, "Galeria")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "/",
    className: "nav-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }
  }, "Eventos"))), __jsx("div", {
    className: "d-flex justify-content-center align-items-center ml-auto mt-3 mt-lg-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mr-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx("label", {
    className: "theme-switch mb-0",
    htmlFor: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fas fa-moon text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }), __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }))), __jsx("a", {
    className: "btn btn-primary",
    onClick: () => props.showModal(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 6
    }
  }, "Entrar"), __jsx("div", {
    className: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx("label", {
    htmlFor: "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "fas fa-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 31
    }
  })), __jsx("form", {
    method: "get",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    name: "s",
    id: "search",
    placeholder: "Buscar...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }))))));
}

const mapStateToProps = state => ({
  modal: state.modal.value
});

const mapDispatchToProps = {
  showModal: _redux_actions_modalActions__WEBPACK_IMPORTED_MODULE_3__["showModal"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
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
    this.state = {
      formShowing: 'login'
    };
  }

  toggleForm() {
    this.setState((state, props) => ({
      formShowing: state.formShowing == 'login' ? 'register' : 'login'
    }));
  }

  render() {
    const {
      children,
      title
    } = this.props;

    const modalCloseButton = __jsx("button", {
      type: "button",
      className: "close",
      onClick: () => this.props.hideModal(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 28
      }
    }, __jsx("i", {
      className: "fas fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 107
      }
    }));

    return __jsx("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 4
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 6
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 6
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }
    }, title), __jsx("link", {
      rel: "shortcut icon",
      href: "favicon.ico",
      type: "image/x-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 6
      }
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }
    }), __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }
    }, children), __jsx(_components_Player__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      isOpen: this.props.modal,
      toggle: this.props.toggleModal,
      size: "lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row no-gutters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "bg-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 8
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, "Um lugar divertido com gente incr\xEDvel."))), __jsx("div", {
      className: "col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "toggle-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 8
      }
    }, __jsx("div", {
      className: "login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
      close: modalCloseButton,
      tag: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 10
      }
    }, this.state.formShowing == 'login' ? 'Entrar' : 'Criar conta'), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 10
      }
    }, __jsx("div", {
      className: `${this.state.formShowing == 'register' && 'd-none'}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, __jsx("form", {
      id: "loginform",
      method: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 12
      }
    }, __jsx("p", {
      className: "login-username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "user_login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 14
      }
    }, "Nome de usu\xE1rio ou endere\xE7o de e-mail"), __jsx("input", {
      type: "text",
      name: "log",
      id: "user_login",
      className: "input",
      placeholder: "4Queijos",
      size: 20,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 14
      }
    })), __jsx("p", {
      className: "login-password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "user_pass",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 14
      }
    }, "Senha"), __jsx("input", {
      type: "password",
      name: "pwd",
      id: "user_pass",
      className: "input",
      placeholder: "Sua senha",
      size: 20,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 14
      }
    })), __jsx("p", {
      className: "login-remember",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 14
      }
    }, __jsx("input", {
      name: "rememberme",
      type: "checkbox",
      id: "rememberme",
      value: "forever",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }), "\xA0Lembrar-me")), __jsx("p", {
      className: "login-submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx("input", {
      type: "submit",
      className: "button button-primary",
      value: "Acessar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 14
      }
    }))), __jsx("hr", {
      className: "ou my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 12
      }
    }), __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 12
      }
    }, __jsx("a", {
      onClick: () => this.toggleForm(),
      className: "btn btn-lg btn-success show-register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, "Criar nova conta"))), __jsx("div", {
      className: `${this.state.formShowing == 'login' && 'd-none'}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx("form", {
      method: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 12
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 14
      }
    }, "Usu\xE1rio"), __jsx("input", {
      type: "text",
      name: "user_login",
      id: "user_login",
      className: "form-control alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 14
      }
    })), __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 14
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
        columnNumber: 14
      }
    })), __jsx("p", {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, "Uma confirma\xE7\xE3o de registro ser\xE1 enviada para voc\xEA por e-mail."), __jsx("input", {
      className: "btn btn-lg btn-block btn-success",
      type: "submit",
      value: "Cadastre-se",
      id: "register",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "text-center text-muted mt-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, "J\xE1 tem uma conta? \xA0", __jsx("a", {
      onClick: () => this.toggleForm(),
      className: "text-link text-primary show-login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 20
      }
    }, "Entre agora")))))))))));
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

/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\www\\habbobr-front\\src\\components\\Player.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Player() {
  return __jsx("div", {
    className: "card player",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, " ", __jsx("i", {
    className: "fas fa-pause",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 40
    }
  }), " "), __jsx("div", {
    className: "content mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("h5", {
    className: "mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "Zona Livre"), __jsx("div", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "avatar pixel sm mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "https://www.habbo.com.br/habbo-imaging/avatarimage?&user=CaioXzZ&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=s",
    alt: "CaioXzZ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  })), "CaioXzZ")), __jsx("div", {
    className: "volume",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-volume-up",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/pages/equipe.js":
/*!*****************************!*\
  !*** ./src/pages/equipe.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
var _jsxFileName = "C:\\www\\habbobr-front\\src\\pages\\equipe.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Equipe() {
  let equipe = {
    webmasters: ['Colecction', 'Sven', ',Abobado'],
    administradores: ['Renato_Moura', '@Flaz', 'Rutoc'],
    jornalismo: ['LeoToddy', 'Cheaply']
  };
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "jumbotron jumbotron-fluid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx("h1", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Equipe"))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "card mb-4 d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "list-team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "#administracao",
    className: "item active",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Administra\xE7\xE3o"), __jsx("a", {
    href: "#jornalismo",
    className: "item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Jornalismo"))), __jsx("h4", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Web Masters"), __jsx("div", {
    className: "row mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, equipe.webmasters.map((user, key) => __jsx("div", {
    className: "col-md-2",
    key: key,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "avatar pixel lg mx-auto mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${user}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`,
    alt: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }
  })), __jsx("a", {
    href: `/perfil/${user}`,
    className: "h5 text-inherit mb-1 d-block",
    "data-toggle": "tooltip",
    title: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, user)))))), __jsx("h4", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Administradores"), __jsx("div", {
    className: "row mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, equipe.administradores.map((user, key) => __jsx("div", {
    className: "col-md-2",
    key: key,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "avatar pixel lg mx-auto mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${user}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`,
    alt: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 12
    }
  })), __jsx("a", {
    href: `/perfil/${user}`,
    className: "h5 text-inherit mb-1 d-block",
    "data-toggle": "tooltip",
    title: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, user)))))), __jsx("h4", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Jornalismo"), __jsx("div", {
    className: "row mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, equipe.jornalismo.map((user, key) => __jsx("div", {
    className: "col-md-2",
    key: key,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-body text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "avatar pixel lg mx-auto mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: `https://www.habbo.com.br/habbo-imaging/avatarimage?&user=${user}&action=std&direction=2&head_direction=2&img_format=png&gesture=std&headonly=0&size=b`,
    alt: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 12
    }
  })), __jsx("a", {
    href: `/perfil/${user}`,
    className: "h5 text-inherit mb-1 d-block",
    "data-toggle": "tooltip",
    title: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, user))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Equipe);

/***/ }),

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
  type: TOGGLE_MODAL
});

/***/ }),

/***/ 6:
/*!***********************************!*\
  !*** multi ./src/pages/equipe.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\habbobr-front\src\pages\equipe.js */"./src/pages/equipe.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=equipe.js.map