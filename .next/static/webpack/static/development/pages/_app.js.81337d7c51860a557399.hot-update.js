webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/AdminPanel.js":
/*!**********************************!*\
  !*** ./components/AdminPanel.js ***!
  \**********************************/
/*! exports provided: Center, AdminPanelWrapper, SelectedItemsList, CURRENT_USER_QUERY, LOCAL_STATE_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelWrapper", function() { return AdminPanelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedItemsList", function() { return SelectedItemsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STATE_QUERY", function() { return LOCAL_STATE_QUERY; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./components/Button.js");



var _jsxFileName = "/Users/jake/Development/projects/motownNext/frontend/components/AdminPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation {\n    clearSelectedIds @client\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation JOIN_SINGLES_MUTATION($albumOneId: ID!, $albumTwoId: ID!) {\n    joinTwoSingles(albumOneId: $albumOneId, albumTwoId: $albumTwoId) {\n      id\n      title\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation TURN_SINGLE_INTO_ALBUM_MUTATION($id: ID!) {\n    turnSingleIntoAlbum(id: $id) {\n      id\n      title\n      single\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query {\n    selectedIds @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  query {\n    me {\n      id\n      email\n      name\n      permissions\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 // import { CURRENT_USER_QUERY } from "./Nav";

var Center = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "AdminPanel__Center",
  componentId: "sc-1o45frt-0"
})(["display:flex;justify-content:center;align-items:center;"]);
var AdminPanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "AdminPanel__AdminPanelWrapper",
  componentId: "sc-1o45frt-1"
})(["border-top:10px solid ", ";display:grid;grid-template-columns:auto 1fr 1fr 1fr;grid-gap:20px;justify-content:space-between;align-items:stretch;position:fixed;bottom:0;left:0;right:0;background-color:white;height:150px;overflow:scroll;"], function (props) {
  return props.theme.black;
});
var SelectedItemsList = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].ul.withConfig({
  displayName: "AdminPanel__SelectedItemsList",
  componentId: "sc-1o45frt-2"
})([""]);
var CURRENT_USER_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());
var LOCAL_STATE_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject2());
var TURN_SINGLE_INTO_ALBUM_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject3());
var JOIN_SINGLES_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject4());
var CLEAR_SELECTED_IDS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject5());

var AdminPanel = function AdminPanel() {
  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(TURN_SINGLE_INTO_ALBUM_MUTATION),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      turnSingleIntoAlbumMutation = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      turnSingleIntoAlbumLoading = _useMutation2$.loading,
      turnSingleIntoAlbumError = _useMutation2$.error;

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(JOIN_SINGLES_MUTATION),
      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 2),
      joinTwoSinglesMutation = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      joinTwoSinglesLoading = _useMutation4$.loading,
      joinTwoSinglesError = _useMutation4$.error;

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(CLEAR_SELECTED_IDS),
      _useMutation6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation5, 2),
      clearSelectedIdsMutation = _useMutation6[0],
      _useMutation6$ = _useMutation6[1],
      clearSelectedIdsLoading = _useMutation6$.loading,
      clearSelectedIdsError = _useMutation6$.error;

  function turnSingleIntoAlbum() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function turnSingleIntoAlbum$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            turnSingleIntoAlbumMutation({
              variables: {
                id: localStateData.selectedIds[0]
              }
            });
            turnSingleIntoAlbumError && console.log(turnSingleIntoAlbumError);
            clearSelectedIdsMutation();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function joinASideAndBSide() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function joinASideAndBSide$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            joinTwoSinglesMutation({
              variables: {
                albumOneId: checkedItems[0],
                albumTwoId: checkedItems[1]
              }
            });
            joinTwoSinglesError && console.log(joinTwoSinglesError);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(CURRENT_USER_QUERY),
      currentUserLoading = _useQuery.loading,
      currentUserError = _useQuery.error,
      currentUserData = _useQuery.data;

  var _useQuery2 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(LOCAL_STATE_QUERY),
      localStateLoading = _useQuery2.loading,
      localStateError = _useQuery2.error,
      localStateData = _useQuery2.data;

  if (currentUserLoading) return "Loading...";
  if (currentUserError) return "Error! ".concat(error.message);
  var me = currentUserData.me;
  return me && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(AdminPanelWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, localStateData.selectedIds.length > 0 && __jsx(SelectedItemsList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Selected Items:"), localStateData.selectedIds.map(function (selectedId) {
    return __jsx("li", {
      key: selectedId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, selectedId);
  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    marginTop: "20px",
    marginBottom: "20px",
    buttonSize: "large",
    onClick: turnSingleIntoAlbum,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Turn Single Into Album"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    marginTop: "20px",
    marginBottom: "20px",
    onClick: turnSingleIntoAlbum,
    buttonStyle: "danger",
    buttonSize: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Clear Selected Items"), __jsx(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    marginTop: "20px",
    marginBottom: "20px",
    buttonSize: "large",
    onClick: joinASideAndBSide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Join A-Side and B-Side")));
};

/* harmony default export */ __webpack_exports__["default"] = (AdminPanel);

/***/ })

})
//# sourceMappingURL=_app.js.81337d7c51860a557399.hot-update.js.map