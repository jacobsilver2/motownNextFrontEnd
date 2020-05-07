webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_Singles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Singles */ "./components/Singles.js");
/* harmony import */ var _components_Album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Album */ "./components/Album.js");







function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["default"]({
    uri: true ? _config__WEBPACK_IMPORTED_MODULE_3__["endpoint"] : undefined,
    onError: function onError(_ref2) {
      var networkError = _ref2.networkError,
          graphQLErrors = _ref2.graphQLErrors;
      graphQLErrors && graphQLErrors.forEach(function (gqlErr) {
        return console.log(gqlErr);
      });
      console.log("NetworkError: ".concat(networkError));
    },
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers: headers
      });
    },
    // local state
    clientState: {
      resolvers: {
        Mutation: {
          addOrRemoveLocalIdSelection: function addOrRemoveLocalIdSelection(_, variables, _ref3) {
            var cache = _ref3.cache;

            // read the selectedIds value from the cache
            var _cache$readQuery = cache.readQuery({
              query: _components_Singles__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STATE_QUERY"]
            }),
                selectedIds = _cache$readQuery.selectedIds; // remove id from local state


            if (selectedIds.includes(variables.id)) {
              var _newData = selectedIds.filter(function (id) {
                return id !== variables.id;
              });

              var _data = {
                data: {
                  selectedIds: _newData
                }
              };
              cache.writeData(_data);
              return null;
            } // add id to local state


            var newData = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedIds), [variables.id]);
            var data = {
              data: {
                selectedIds: newData
              }
            };
            cache.writeData(data);
            return null;
          },
          clearSelectedIds: function clearSelectedIds(_, variables, _ref4) {
            var cache = _ref4.cache;

            var _cache$readQuery2 = cache.readQuery({
              query: _components_Singles__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STATE_QUERY"]
            }),
                selectedIds = _cache$readQuery2.selectedIds;

            var data = {
              data: {
                selectedIds: []
              }
            };
            cache.writeData(data);
            return null;
          }
        }
      },
      defaults: {
        selectedIds: []
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(createClient));

/***/ })

})
//# sourceMappingURL=_app.js.0d7c921c915812102de1.hot-update.js.map