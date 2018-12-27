webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Precio.js":
/*!*******************************!*\
  !*** ./componentes/Precio.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _PrecioSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecioSpan */ "./componentes/PrecioSpan.js");
var _jsxFileName = "C:\\Users\\CESAR C\\Desktop\\Github\\ReactJs\\bitcoinapp\\componentes\\Precio.js";




var Precio = function Precio(props) {
  var _props$datos = props.datos,
      percent_change_1h = _props$datos.percent_change_1h,
      percent_change_24h = _props$datos.percent_change_24h,
      percent_change_7d = _props$datos.percent_change_7d,
      price = _props$datos.price;
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    color: "green",
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Precio del bitcoin")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    textAlign: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Precio Actual: $ ", price.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    columns: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrecioSpan__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titulo: "\xDAltima Hora",
    porcentaje: percent_change_1h.toFixed(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrecioSpan__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titulo: "\xDAltimas 24Hora",
    porcentaje: percent_change_24h.toFixed(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrecioSpan__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titulo: "\xDAltimos 7 d\xEDas",
    porcentaje: percent_change_7d.toFixed(2),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.485e46639a4319af8dd4.hot-update.js.map