webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Noticias.js":
/*!*********************************!*\
  !*** ./componentes/Noticias.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Noticia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Noticia */ "./componentes/Noticia.js");
var _jsxFileName = "C:\\Users\\CESAR C\\Desktop\\Github\\ReactJs\\bitcoinapp\\componentes\\Noticias.js";




var Noticias = function Noticias(props) {
  var noticias = props.articulos;
  var noticiasJSX = [];
  noticias.forEach(function (noticia) {
    noticiasJSX.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Noticia__WEBPACK_IMPORTED_MODULE_2__["default"], {
      informacion: noticia,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Noticias sobre Bitcoin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    itemsPerRow: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, noticiasJSX));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.e822da3108e8c92c2f4e.hot-update.js.map