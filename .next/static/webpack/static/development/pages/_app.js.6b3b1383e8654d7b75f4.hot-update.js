webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/jake/Development/projects/motownNext/frontend/components/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1teub9m-0"
})(["border-radius:5px;cursor:pointer;transition:transform 0.3s ease;&:hover{transform:translateY(-3px);}background-color:", ";color:", ";border:none;padding:", ";font-size:", ";"], function (props) {
  return props.danger ? props.theme.red : props.theme.blue;
}, function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.large ? "10px 20px" : "10px 20px";
}, function (props) {
  return props.large ? "2rem" : "1.6rem";
});

var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      onClick = _ref.onClick,
      buttonStyle = _ref.buttonStyle,
      buttonSize = _ref.buttonSize,
      label = _ref.label;
  return __jsx(StyledButton, {
    danger: buttonStyle === "danger",
    large: buttonSize === "large",
    onClick: onClick,
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=_app.js.6b3b1383e8654d7b75f4.hot-update.js.map