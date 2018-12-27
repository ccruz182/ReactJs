webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./componentes/Eventos.js":
/*!********************************!*\
  !*** ./componentes/Eventos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Evento */ "./componentes/Evento.js");
var _jsxFileName = "C:\\Users\\CESAR C\\Desktop\\Github\\ReactJs\\bitcoinapp\\componentes\\Eventos.js";




var Eventos = function Eventos(props) {
  var eventos = props.eventos;
  var i = 0;
  var eventosJSX = [];

  for (i = 0; i < 20; i++) {
    eventosJSX.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Evento__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: eventos[i].name.text,
      informacion: eventos[i],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    itemsPerRow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, eventosJSX);
};

/* harmony default export */ __webpack_exports__["default"] = (Eventos);

/***/ })

})
//# sourceMappingURL=index.js.c44281619d88dda2fb07.hot-update.js.map