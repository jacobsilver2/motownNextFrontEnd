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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WTiC");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3Mv1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/cardStyles.js

const CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "cardStyles__CardWrapper",
  componentId: "sc-12n0701-0"
})(["display:flex;flex-direction:column;background-color:", ";transition:all 0.3s ease 0s;padding:20px;box-shadow:", ";text-align:", ";.title{font-size:2rem;font-weight:bold;}.subtitle{font-size:1.5rem;font-weight:lighter;font-style:italic;}.content{color:", ";padding-bottom:10px;flex:1 0 auto;}.format{font-style:italic;}.catalognumber{font-style:italic;}.publishedby{font-style:italic;}.publisheddate{font-style:italic;}.releaseddate{font-style:italic;}.recordlabel{font-style:italic;}.additionalinfo{font-style:italic;}.alttitle{font-style:italic;}.publisher{font-style:italic;}.publisheddate{font-style:italic;}.instrumental{font-style:italic;}.fromfilm{font-style:italic;}.footer{border-top:2px solid ", ";padding-top:20px;flex-shrink:0;}"], props => props.theme.lightgrey, props => props.theme.bs, props => props.isTitle ? "center" : "left", props => props.theme.black, props => props.theme.black);

// CONCATENATED MODULE: ./components/Card.js
var __jsx = external_react_default.a.createElement;



const Card = ({
  title,
  footer,
  subTitle,
  children,
  isTitle
}) => {
  return __jsx(CardWrapper, {
    isTitle: isTitle
  }, __jsx("div", {
    className: "title"
  }, title), subTitle && __jsx("div", {
    className: "subtitle"
  }, subTitle), __jsx("div", {
    className: "content"
  }, children), footer && __jsx("div", {
    className: "footer"
  }, footer));
};

/* harmony default export */ var components_Card = __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4WEJ":
/***/ (function(module, exports) {

module.exports = require("primereact/paginator");

/***/ }),

/***/ "66DL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LOCAL_STATE_QUERY; });

// UNUSED EXPORTS: ALL_SINGLES_QUERY, ALL_SINGLES_BEGINNING_WITH_QUERY, ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: ./components/Album.js
var Album = __webpack_require__("tXQo");

// EXTERNAL MODULE: ./components/Pagination.js + 1 modules
var Pagination = __webpack_require__("KzMt");

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "primereact/selectbutton"
var selectbutton_ = __webpack_require__("JAxm");

// EXTERNAL MODULE: ./lib/selectButtons.js
var selectButtons = __webpack_require__("uRGP");

// EXTERNAL MODULE: ./components/styles/Multilist.js
var Multilist = __webpack_require__("w3mf");

// EXTERNAL MODULE: ./components/styles/Center.js
var Center = __webpack_require__("U2iw");

// CONCATENATED MODULE: ./lib/sortByOptions/singlesSortBySelectOptions.js
const sortBySelectItems = [{
  label: "Title, ascending",
  value: "title_ASC"
}, {
  label: "Title, descending",
  value: "title_DESC"
}, {
  label: "Format, ascending",
  value: "format_DESC"
}, {
  label: "Format, descending",
  value: "format_ASC"
}, {
  label: "Release Date, ascending",
  value: "releaseDate_ASC"
}, {
  label: "Release Date, descending",
  value: "releaseDate_DESC"
}, {
  label: "Record Label, ascending",
  value: "recordLabel_ASC"
}, {
  label: "Record Label, descending",
  value: "recordLabel_DESC"
}, {
  label: "Catalog Number, ascending",
  value: "catalogNumber_ASC"
}, {
  label: "Catalog Number, descending",
  value: "catalogNumber_DESC"
}];
/* harmony default export */ var singlesSortBySelectOptions = (sortBySelectItems);
// EXTERNAL MODULE: ./lib/sortByOptions/sortBySelectReturnLabel.js
var sortBySelectReturnLabel = __webpack_require__("HfL/");

// EXTERNAL MODULE: ./components/styles/reactSelectTheme.js
var reactSelectTheme = __webpack_require__("vrjE");

// CONCATENATED MODULE: ./components/Singles.js
var __jsx = external_react_default.a.createElement;















const LOCAL_STATE_QUERY = external_apollo_boost_["gql"]`
  query {
    selectedIds @client
  }
`;
const ALL_SINGLES_QUERY = external_apollo_boost_["gql"]`
  query ALL_SINGLES_QUERY($first: Int = ${config["a" /* perPage */]}, $skip: Int = 0, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: true}, first: $first, skip: $skip, orderBy: $sortBy ) {
      id
      title
      recordLabel
      releaseDate
      format
      catalogNumber
      single
      artists {
        id
        name
      }
    }
  }
`;
const ALL_SINGLES_BEGINNING_WITH_QUERY = external_apollo_boost_["gql"]`
  query ALL_SINGLES_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ${config["a" /* perPage */]}, $letter: String, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: true, title_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      title
      recordLabel
      releaseDate
      format
      catalogNumber
      single
      artists {
        id
        name
      }
    }
  }
`;
const ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY = external_apollo_boost_["gql"]`
  query ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY($skip: Int = 0, $first: Int = ${config["a" /* perPage */]}, $sortBy: AlbumOrderByInput!) {
    albums(where: {single: true, OR: [{title_starts_with: "0"},{title_starts_with: "1"},{title_starts_with: "2"},{title_starts_with: "3"},{title_starts_with: "4"},{title_starts_with: "5"},{title_starts_with: "6"},{title_starts_with: "7"},{title_starts_with: "8"},{title_starts_with: "9"}]}, first: $first, skip: $skip, orderBy: $sortBy) {
      id
      title
      recordLabel
      releaseDate
      format
      catalogNumber
      single
      artists {
        id
        name
      }
    }
  }
`;

const Singles = ({
  page
}) => {
  const {
    0: letter,
    1: setLetter
  } = Object(external_react_["useState"])("");
  const {
    0: sortBy,
    1: setSortBy
  } = Object(external_react_["useState"])("title_ASC");
  const {
    0: checkedItems,
    1: setCheckedItems
  } = Object(external_react_["useState"])([]);
  const {
    loading: localStateLoading,
    error: localStateError,
    data: localStateData
  } = Object(react_hooks_["useQuery"])(LOCAL_STATE_QUERY);
  const {
    loading: allSinglesLoading,
    error: allSinglesError,
    data: allSinglesData
  } = Object(react_hooks_["useQuery"])(ALL_SINGLES_QUERY, {
    variables: {
      skip: page * config["a" /* perPage */] - config["a" /* perPage */],
      first: config["a" /* perPage */],
      sortBy
    }
  });
  const {
    loading: singlesBeginningWithLoading,
    error: singlesBeginningWithError,
    data: singlesBeginningWithData
  } = Object(react_hooks_["useQuery"])(ALL_SINGLES_BEGINNING_WITH_QUERY, {
    variables: {
      skip: page * config["a" /* perPage */] - config["a" /* perPage */],
      first: config["a" /* perPage */],
      letter,
      sortBy
    }
  });
  const {
    loading: singlesBeginningWithNumberLoading,
    error: singlesBeginningWithNumberError,
    data: singlesBeginningWithNumberData
  } = Object(react_hooks_["useQuery"])(ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY, {
    variables: {
      skip: page * config["a" /* perPage */] - config["a" /* perPage */],
      first: config["a" /* perPage */],
      sortBy
    }
  });
  if (singlesBeginningWithLoading || allSinglesLoading || singlesBeginningWithNumberLoading) return __jsx("p", null, "Loading...");
  if (singlesBeginningWithError || allSinglesError || singlesBeginningWithNumberError) return __jsx("p", null, "Error :(");

  function getSingles() {
    if (letter === "" || !letter) {
      return allSinglesData.albums.filter(album => album.single).map(album => __jsx(Album["a" /* default */], {
        key: album.id,
        album: album
      }));
    } else if (letter === "#") {
      return singlesBeginningWithNumberData.albums.filter(album => album.single).map(single => __jsx(Album["a" /* default */], {
        key: single.id,
        album: single
      }));
    } else {
      return singlesBeginningWithData.albums.filter(album => album.single).map(single => __jsx(Album["a" /* default */], {
        key: single.id,
        album: single
      }));
    }
  }

  return __jsx(Center["a" /* default */], null, __jsx(selectbutton_["SelectButton"], {
    value: letter,
    options: selectButtons["b" /* selectButtonsAthruZWithNumber */],
    onChange: e => {
      setLetter(e.value);
      router_default.a.push({
        pathname: "/singles",
        query: {
          page: 1
        }
      });
    }
  }), __jsx("br", null), __jsx(external_react_select_default.a, {
    options: singlesSortBySelectOptions,
    theme: reactSelectTheme["a" /* default */],
    placeholder: `Sort by ${Object(sortBySelectReturnLabel["a" /* default */])(singlesSortBySelectOptions, sortBy)}`,
    onChange: e => setSortBy(e.value),
    isSearchable: true
  }), __jsx("br", null), __jsx(Pagination["a" /* default */], {
    page: page,
    model: "singles",
    letter: letter
  }), __jsx(Multilist["a" /* default */], null, getSingles()), __jsx(Pagination["a" /* default */], {
    page: page,
    model: "singles",
    letter: letter
  }));
};

/* harmony default export */ var components_Singles = __webpack_exports__["b"] = (Singles);

/***/ }),

/***/ "CIUX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1teub9m-0"
})(["border-radius:5px;cursor:pointer;transition:transform 0.3s ease;&:hover{transform:translateY(-3px);}background-color:", ";color:", ";border:none;padding:", ";font-size:", ";margin-top:", ";margin-bottom:", ";margin-left:", ";margin-right:", ";"], props => props.danger ? props.theme.red : props.theme.blue, props => props.theme.offWhite, props => props.large ? "10px 20px" : "10px 20px", props => props.large ? "2rem" : "1.6rem", props => props.marginTop ? `${props.marginTop}` : "", props => props.marginBottom ? `${props.marginBottom}` : "", props => props.marginLeft ? `${props.marginLeft}` : "", props => props.marginRight ? `${props.marginRight}` : "");

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  label,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}) => {
  return __jsx(StyledButton, {
    danger: buttonStyle === "danger",
    large: buttonSize === "large",
    onClick: onClick,
    type: type,
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HfL/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getSelectLabel(sortBySelectItems, sortBy) {
  const filteredSelectItem = sortBySelectItems.filter(item => item.value === sortBy);
  return filteredSelectItem[0].label;
}

/* harmony default export */ __webpack_exports__["a"] = (getSelectLabel);

/***/ }),

/***/ "JAxm":
/***/ (function(module, exports) {

module.exports = require("primereact/selectbutton");

/***/ }),

/***/ "KzMt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/PaginationStyles.js

const PaginationStyles = external_styled_components_default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "rkhbcq-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled=\"true\"]{color:grey;pointer-events:none;}@media screen and (max-width:600px){.pagination-page-number{display:none;}.pagination-count{display:none;}}"], props => props.theme.lightgrey, props => props.theme.lightgrey);
/* harmony default export */ var styles_PaginationStyles = (PaginationStyles);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: external "primereact/paginator"
var paginator_ = __webpack_require__("4WEJ");

// CONCATENATED MODULE: ./components/Pagination.js
var __jsx = external_react_default.a.createElement;








const SONGS_PAGINATION_QUERY = external_graphql_tag_default.a`
  query SONGS_PAGINATION_QUERY($letter: String) {
    songsConnection(where: { title_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const SONGS_PAGINATION_WITH_NUMBER_QUERY = external_graphql_tag_default.a`
  query SONGS_PAGINATION_QUERY {
    songsConnection(
      where: {
        OR: [
          { title_starts_with: "0" }
          { title_starts_with: "1" }
          { title_starts_with: "2" }
          { title_starts_with: "3" }
          { title_starts_with: "4" }
          { title_starts_with: "5" }
          { title_starts_with: "6" }
          { title_starts_with: "7" }
          { title_starts_with: "8" }
          { title_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const ALBUMS_PAGINATION_QUERY = external_graphql_tag_default.a`
  query ALBUMS_PAGINATION_QUERY($letter: String) {
    albumsConnection(where: { title_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const ALBUMS_PAGINATION_WITH_NUMBER_QUERY = external_graphql_tag_default.a`
  query ALBUMS_PAGINATION_QUERY {
    albumsConnection(
      where: {
        OR: [
          { title_starts_with: "0" }
          { title_starts_with: "1" }
          { title_starts_with: "2" }
          { title_starts_with: "3" }
          { title_starts_with: "4" }
          { title_starts_with: "5" }
          { title_starts_with: "6" }
          { title_starts_with: "7" }
          { title_starts_with: "8" }
          { title_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const ARTISTS_PAGINATION_QUERY = external_graphql_tag_default.a`
  query ARTISTS_PAGINATION_QUERY($letter: String) {
    artistsConnection(where: { name_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const ARTISTS_PAGINATION_WITH_NUMBER_QUERY = external_graphql_tag_default.a`
  query ARTISTS_PAGINATION_QUERY {
    artistsConnection(
      where: {
        OR: [
          { name_starts_with: "0" }
          { name_starts_with: "1" }
          { name_starts_with: "2" }
          { name_starts_with: "3" }
          { name_starts_with: "4" }
          { name_starts_with: "5" }
          { name_starts_with: "6" }
          { name_starts_with: "7" }
          { name_starts_with: "8" }
          { name_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;
const COMPOSERS_PAGINATION_QUERY = external_graphql_tag_default.a`
  query COMPOSERS_PAGINATION_QUERY($letter: String) {
    composersConnection(where: { name_starts_with: $letter }) {
      aggregate {
        count
      }
    }
  }
`;
const COMPOSERS_PAGINATION_WITH_NUMBER_QUERY = external_graphql_tag_default.a`
  query COMPOSERS_PAGINATION_QUERY {
    composersConnection(
      where: {
        OR: [
          { name_starts_with: "0" }
          { name_starts_with: "1" }
          { name_starts_with: "2" }
          { name_starts_with: "3" }
          { name_starts_with: "4" }
          { name_starts_with: "5" }
          { name_starts_with: "6" }
          { name_starts_with: "7" }
          { name_starts_with: "8" }
          { name_starts_with: "9" }
        ]
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = ({
  page,
  model,
  letter
}) => {
  let PAGINATION_QUERY;

  switch (model) {
    case "songs":
      letter === "#" ? PAGINATION_QUERY = SONGS_PAGINATION_WITH_NUMBER_QUERY : PAGINATION_QUERY = SONGS_PAGINATION_QUERY;
      break;

    case "albums":
      letter === "#" ? PAGINATION_QUERY = ALBUMS_PAGINATION_WITH_NUMBER_QUERY : PAGINATION_QUERY = ALBUMS_PAGINATION_QUERY;
      break;

    case "singles":
      letter === "#" ? PAGINATION_QUERY = ALBUMS_PAGINATION_WITH_NUMBER_QUERY : PAGINATION_QUERY = ALBUMS_PAGINATION_QUERY;
      break;

    case "artists":
      PAGINATION_QUERY = ARTISTS_PAGINATION_QUERY;
      break;

    case "composers":
      PAGINATION_QUERY = COMPOSERS_PAGINATION_QUERY;
      break;

    default:
      PAGINATION_QUERY = SONGS_PAGINATION_QUERY;
  }

  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(PAGINATION_QUERY, {
    variables: {
      letter: letter
    }
  });
  if (loading) return __jsx("p", null, "Loading...");
  if (error) return __jsx("p", null, "Error!");
  let count;
  if (model === "songs") count = data.songsConnection.aggregate.count;
  if (model === "artists") count = data.artistsConnection.aggregate.count;
  if (model === "albums") count = data.albumsConnection.aggregate.count;
  if (model === "singles") count = data.albumsConnection.aggregate.count;
  if (model === "composers") count = data.composersConnection.aggregate.count;
  const pages = Math.ceil(count / config["a" /* perPage */]) || 1;
  return __jsx(styles_PaginationStyles, null, __jsx(link_default.a, {
    href: {
      pathname: model,
      query: {
        page: page - 1
      }
    }
  }, __jsx("a", {
    className: "prev",
    "aria-disabled": page <= 1
  }, "Prev")), __jsx("p", {
    className: "pagination-page-number"
  }, "Page ", page, " of ", pages), __jsx("p", {
    className: "pagination-count"
  }, count, " ", model), __jsx(link_default.a, {
    href: {
      pathname: model,
      query: {
        page: page + 1
      }
    }
  }, __jsx("a", {
    className: "next",
    "aria-disabled": page >= pages
  }, "Next")));
};

/* harmony default export */ var components_Pagination = __webpack_exports__["a"] = (Pagination);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "U2iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Center */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Center = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Center",
  componentId: "hio5ev-0"
})(["text-align:center;"]);
/* harmony default export */ __webpack_exports__["a"] = (Center);

/***/ }),

/***/ "WTiC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Singles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("66DL");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Albums = props => __jsx("div", null, __jsx(_components_Singles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"], {
  page: parseFloat(props.query.page) || 1
}));

/* harmony default export */ __webpack_exports__["default"] = (Albums);

/***/ }),

/***/ "Y3rL":
/***/ (function(module, exports) {

module.exports = require("primereact/checkbox");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mVCd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formattedDate; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formattedDate(date) {
  // if the record was released on Jan 1, it probably wasn't and only
  // the year was available.  So we return true and format just the year.
  if (moment__WEBPACK_IMPORTED_MODULE_0___default()(date).month() === 0 && moment__WEBPACK_IMPORTED_MODULE_0___default()(date).dayOfYear() === 1) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY");
  }

  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format("MMMM Do, YYYY");
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oTOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CURRENT_USER_QUERY; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/navStyles.js

const NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "navStyles__NavStyles",
  componentId: "sc-1gqvwbr-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;color:", ";font-weight:800;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:\"\";width:2px;background:", ";height:100%;left:0;position:absolute;top:0;bottom:0;}&:after{height:2px;background:", ";content:\"\";width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], props => props.theme.black, props => props.theme.lightgrey, props => props.theme.blue, props => props.theme.lightgrey);
/* harmony default export */ var navStyles = (NavStyles);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/Signout.js
var __jsx = external_react_default.a.createElement;




const SIGNOUT_MUTATION = external_graphql_tag_default.a`
  mutation SIGNOUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = props => {
  const [signoutMutation, {
    loading: mutationLoading,
    error: mutationError
  }] = Object(react_hooks_["useMutation"])(SIGNOUT_MUTATION);
  return __jsx("button", {
    onClick: () => signoutMutation({
      refetchQueries: [{
        query: CURRENT_USER_QUERY
      }]
    })
  }, "Sign Out");
};

/* harmony default export */ var components_Signout = (Signout);
// CONCATENATED MODULE: ./components/Nav.js
var Nav_jsx = external_react_default.a.createElement;








const CURRENT_USER_QUERY = external_graphql_tag_default.a`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;

const Nav = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(CURRENT_USER_QUERY);
  const router = Object(router_["useRouter"])(); // console.log(router.pathname);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const {
    me
  } = data;
  return Nav_jsx(navStyles, null, me && Nav_jsx("p", null, me.name), Nav_jsx(link_default.a, {
    href: "/songs"
  }, Nav_jsx("a", {
    style: {
      color: router.pathname === "/songs" ? "#017ad9" : ""
    }
  }, "Songs")), Nav_jsx(link_default.a, {
    href: "/artists"
  }, Nav_jsx("a", {
    style: {
      color: router.pathname === "/artists" ? "#017ad9" : ""
    }
  }, "Artists")), Nav_jsx(link_default.a, {
    href: "/albums"
  }, Nav_jsx("a", {
    style: {
      color: router.pathname === "/albums" ? "#017ad9" : ""
    }
  }, "Albums (LP)")), Nav_jsx(link_default.a, {
    href: "/singles"
  }, Nav_jsx("a", {
    style: {
      color: router.pathname === "/singles" ? "#017ad9" : ""
    }
  }, "Singles (45)")), Nav_jsx(link_default.a, {
    href: "/composers"
  }, Nav_jsx("a", {
    style: {
      color: router.pathname === "/composers" ? "#017ad9" : ""
    }
  }, "Composers")), me && Nav_jsx(components_Signout, null));
};

/* harmony default export */ var components_Nav = __webpack_exports__["b"] = (Nav);

/***/ }),

/***/ "obyI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
//this is client side config ony. don't put anything in here that
// shouldn't be public
const endpoint = "http://localhost:4000";
const prodEndpoint = 'http://www.motowndb.com:4747';
const perPage = 50;

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "tXQo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_OR_REMOVE_LOCAL_ID_SELECTION_MUTATION */
/* unused harmony export LOCAL_STATE_QUERY */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_formatDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mVCd");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3Mv1");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("CIUX");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("oTOh");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Y3rL");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import { Card } from "primereact/card";

 // import { Button } from "primereact/button";





const StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "Album__StyledFooter",
  componentId: "f8g7qf-0"
})(["display:flex;justify-content:space-evenly;"]);
const StyledFlexStart = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "Album__StyledFlexStart",
  componentId: "f8g7qf-1"
})(["align-self:center;"]);
const StlyedFlexEnd = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "Album__StlyedFlexEnd",
  componentId: "f8g7qf-2"
})(["align-self:flex-end;"]);
const ADD_OR_REMOVE_LOCAL_ID_SELECTION_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  mutation($id: String!) {
    addOrRemoveLocalIdSelection(id: $id) @client
  }
`;
const LOCAL_STATE_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query {
    selectedIds @client
  }
`;

const Album = ({
  album
}) => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_Nav__WEBPACK_IMPORTED_MODULE_7__[/* CURRENT_USER_QUERY */ "a"]);
  const {
    loading: localStateQueryLoading,
    error: localStateQueryError,
    data: localStateQueryData
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(LOCAL_STATE_QUERY);
  const [addOrRemoveLocalIdSelectionMutation, {
    loading: addOrRemoveLocalIdSelectionMutationLoading,
    error: addOrRemoveLocalIdSelectionMutationError
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(ADD_OR_REMOVE_LOCAL_ID_SELECTION_MUTATION);

  function handleChecked(e) {
    addOrRemoveLocalIdSelectionMutation({
      variables: {
        id: album.id
      }
    });
  }

  function isChecked(id) {
    return localStateQueryData.selectedIds.includes(id);
  }

  const footer = data.me ? __jsx(StyledFooter, null, __jsx(StyledFlexStart, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: {
      pathname: "/updatealbum",
      query: {
        id: album.id
      }
    }
  }, __jsx("a", null, __jsx(_Button__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    buttonStyle: "primary",
    icon: "pi pi-pencil"
  }, "Edit")))), __jsx(StlyedFlexEnd, null, __jsx(primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
    onChange: e => handleChecked(e),
    checked: isChecked(album.id)
  }))) : null;

  const title = __jsx("span", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: {
      pathname: "/album",
      query: {
        id: album.id
      }
    }
  }, __jsx("a", null, album.title || "no title")));

  const artists = album.artists && album.artists.map((artist, index) => __jsx("span", {
    key: artist.name
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: {
      pathname: "/artist",
      query: {
        id: artist.id
      }
    }
  }, __jsx("a", null, artist.name)), album.artists.length === index + 1 ? " " : ", "));
  return __jsx(_Card__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: title,
    footer: footer,
    subTitle: album.releaseDate ? `released ${Object(_lib_formatDate__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(album.releaseDate)}` : "no release date information"
  }, album.format && __jsx("div", {
    className: "format"
  }, "Format: ", album.format), album.catalogNumber && __jsx("div", {
    className: "catalognumber"
  }, "Catalog #: ", album.catalogNumber), artists);
};

/* harmony default export */ __webpack_exports__["a"] = (Album);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uRGP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectButtonsAthruZWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectButtonsAthruZ; });
const selectButtonsAthruZWithNumber = [{
  label: "A",
  value: "A"
}, {
  label: "B",
  value: "B"
}, {
  label: "C",
  value: "C"
}, {
  label: "D",
  value: "D"
}, {
  label: "E",
  value: "E"
}, {
  label: "F",
  value: "F"
}, {
  label: "G",
  value: "G"
}, {
  label: "H",
  value: "H"
}, {
  label: "I",
  value: "I"
}, {
  label: "J",
  value: "J"
}, {
  label: "K",
  value: "K"
}, {
  label: "L",
  value: "L"
}, {
  label: "M",
  value: "M"
}, {
  label: "N",
  value: "N"
}, {
  label: "O",
  value: "O"
}, {
  label: "P",
  value: "P"
}, {
  label: "Q",
  value: "Q"
}, {
  label: "R",
  value: "R"
}, {
  label: "S",
  value: "S"
}, {
  label: "T",
  value: "T"
}, {
  label: "U",
  value: "U"
}, {
  label: "V",
  value: "V"
}, {
  label: "W",
  value: "W"
}, {
  label: "X",
  value: "X"
}, {
  label: "Y",
  value: "Y"
}, {
  label: "Z",
  value: "Z"
}, {
  label: "#",
  value: "#"
}, {
  label: "All",
  value: ""
}];
const selectButtonsAthruZ = [{
  label: "A",
  value: "A"
}, {
  label: "B",
  value: "B"
}, {
  label: "C",
  value: "C"
}, {
  label: "D",
  value: "D"
}, {
  label: "E",
  value: "E"
}, {
  label: "F",
  value: "F"
}, {
  label: "G",
  value: "G"
}, {
  label: "H",
  value: "H"
}, {
  label: "I",
  value: "I"
}, {
  label: "J",
  value: "J"
}, {
  label: "K",
  value: "K"
}, {
  label: "L",
  value: "L"
}, {
  label: "M",
  value: "M"
}, {
  label: "N",
  value: "N"
}, {
  label: "O",
  value: "O"
}, {
  label: "P",
  value: "P"
}, {
  label: "Q",
  value: "Q"
}, {
  label: "R",
  value: "R"
}, {
  label: "S",
  value: "S"
}, {
  label: "T",
  value: "T"
}, {
  label: "U",
  value: "U"
}, {
  label: "V",
  value: "V"
}, {
  label: "W",
  value: "W"
}, {
  label: "X",
  value: "X"
}, {
  label: "Y",
  value: "Y"
}, {
  label: "Z",
  value: "Z"
}, {
  label: "All",
  value: ""
}];

/***/ }),

/***/ "vrjE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function customTheme(theme) {
  return _objectSpread({}, theme, {
    colors: _objectSpread({}, theme.colors, {
      primary25: "#017ad9",
      primary: "#017ad9"
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (customTheme);

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "w3mf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const MultiList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Multilist__MultiList",
  componentId: "cmuw4i-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;@media screen and (max-width:800px){grid-template-columns:1fr;}"], props => props.theme.maxWidth);
/* harmony default export */ __webpack_exports__["a"] = (MultiList);

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });