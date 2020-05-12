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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


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

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/Nav.js + 2 modules
var Nav = __webpack_require__("oTOh");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__("impR");
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__("MGkW");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__("Q4dm");
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: ./components/styles/DropDown.js

const DropDown = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "sc-10gtd6k-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], props => props.theme.lightgrey);
const DropDownItem = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-10gtd6k-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.theme.lightgrey, props => props.highlighted ? "#f7f7f7" : "white", props => props.highlighted ? "padding-left: 2rem;" : null, props => props.highlighted ? props.theme.lightgrey : "white");
const glow = Object(external_styled_components_["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-10gtd6k-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

// CONCATENATED MODULE: ./components/styles/song/title.js

const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "title__Title",
  componentId: "sc-1bdfavd-0"
})(["margin:0 1rem;text-align:center;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1;font-size:2rem;text-align:center;color:white;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;}"], props => props.theme.red);
/* harmony default export */ var title = (Title);
// EXTERNAL MODULE: ./components/styles/reactSelectTheme.js
var reactSelectTheme = __webpack_require__("vrjE");

// CONCATENATED MODULE: ./components/Search.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const StyledSearchBar = external_styled_components_default.a.div.withConfig({
  displayName: "Search__StyledSearchBar",
  componentId: "sexg82-0"
})(["display:grid;grid-template-columns:5fr 1fr;grid-gap:1rem;"]);
const SEARCH_SONGS_QUERY = external_graphql_tag_default.a`
  query SEARCH_SONGS_QUERY($searchTerm: String!) {
    songs(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { altTitle_contains: $searchTerm }
          { fromFilm_contains: $searchTerm }
        ]
      }
    ) {
      id
      title
    }
  }
`;
const SEARCH_ARTISTS_QUERY = external_graphql_tag_default.a`
  query SEARCH_ARTISTS_QUERY($searchTerm: String!) {
    artists(where: { OR: [{ name_contains: $searchTerm }] }) {
      id
      name
    }
  }
`;
const SEARCH_ALBUMS_QUERY = external_graphql_tag_default.a`
  query SEARCH_ALBUMS_QUERY($searchTerm: String!) {
    albums(where: { OR: [{ title_contains: $searchTerm }] }) {
      id
      title
    }
  }
`;
const SEARCH_COMPOSERS_QUERY = external_graphql_tag_default.a`
  query SEARCH_COMPOSERS_QUERY($searchTerm: String!) {
    composers(where: { OR: [{ name_contains: $searchTerm }] }) {
      id
      name
    }
  }
`;

function routeToItem(route, item) {
  item && router_default.a.push({
    pathname: `/${route}`,
    query: {
      id: item.id
    }
  });
}

function returnQuery(item) {
  if (item === "song") {
    return SEARCH_SONGS_QUERY;
  }

  if (item === "album") {
    return SEARCH_ALBUMS_QUERY;
  }

  if (item === "artist") {
    return SEARCH_ARTISTS_QUERY;
  }

  if (item === "composer") {
    return SEARCH_COMPOSERS_QUERY;
  }
}

const dropdownSelectItems = [{
  label: "Song",
  value: "song"
}, {
  label: "Artist",
  value: "artist"
}, {
  label: "Album",
  value: "album"
}, {
  label: "Composer",
  value: "composer"
}];

class Search_AutoComplete extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      items: [],
      loading: false,
      item: "song"
    });

    _defineProperty(this, "handleSelectChange", event => this.setState({
      item: event.value
    }));

    _defineProperty(this, "onChange", external_lodash_debounce_default()(async (e, client) => {
      this.setState({
        loading: true
      });
      const response = e.target.value && (await client.query({
        query: returnQuery(this.state.item),
        variables: {
          searchTerm: e.target.value
        }
      }));
      e.target.value && this.setState({
        items: response.data.songs || response.data.albums || response.data.composers || response.data.artists,
        loading: false
      });
    }, 350));
  }

  render() {
    Object(external_downshift_["resetIdCounter"])();
    return __jsx(SearchStyles, null, __jsx(external_downshift_default.a, {
      onChange: item => routeToItem(this.state.item, item),
      itemToString: item => item === null ? "" : item.title || item.name
    }, ({
      getInputProps,
      getItemProps,
      isOpen,
      inputValue,
      highlightedIndex
    }) => __jsx("div", null, __jsx(external_react_apollo_["ApolloConsumer"], null, client => __jsx(StyledSearchBar, null, __jsx("input", getInputProps({
      type: "search",
      placeholder: "Search",
      id: "search",
      className: this.state.loading ? "loading" : "",
      onChange: e => {
        e.persist();
        this.onChange(e, client);
      }
    })), __jsx(external_react_select_default.a, {
      theme: reactSelectTheme["a" /* default */],
      value: this.state.item,
      options: dropdownSelectItems,
      onChange: this.handleSelectChange,
      placeholder: `Search for a${this.state.item.toLowerCase().includes("a", 0) ? "n" : ""} ${this.state.item.toLowerCase()}`
    }))), isOpen ? __jsx(DropDown, null, this.state.items.map((item, index) => __jsx(DropDownItem, _extends({}, getItemProps({
      key: item.id,
      index,
      item
    }), {
      highlighted: index === highlightedIndex
    }), __jsx(title, null, item.title || item.name)))) : null)));
  }

}

/* harmony default export */ var Search = (Search_AutoComplete);
// EXTERNAL MODULE: external "primereact/progressbar"
var progressbar_ = __webpack_require__("6JDq");

// CONCATENATED MODULE: ./components/Header.js
var Header_jsx = external_react_default.a.createElement;








const Logo = external_styled_components_default.a.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1s2mubi-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}a:hover{color:", ";}@media (max-width:1300px){margin:0;text-align:center;}"], props => props.theme.blue, props => props.theme.offWhite);
const StyledHeader = external_styled_components_default.a.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-1s2mubi-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], props => props.theme.black, props => props.theme.lightgrey);

const Header = () => {
  const {
    0: loadingState,
    1: setLoadingState
  } = Object(external_react_["useState"])(false);

  router_default.a.onRouteChangeStart = () => {
    setLoadingState(true);
  };

  router_default.a.onRouteChangeComplete = () => {
    setLoadingState(false);
  };

  router_default.a.onRouteChangeError = () => {
    setLoadingState(false);
  };

  return Header_jsx(StyledHeader, null, Header_jsx("div", {
    className: "bar"
  }, Header_jsx(Logo, null, Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("a", null, "Motown DB"))), Header_jsx(Nav["b" /* default */], null)), loadingState && Header_jsx(progressbar_["ProgressBar"], {
    style: {
      height: "5px"
    },
    mode: "indeterminate"
  }), Header_jsx("div", {
    className: "sub-bar"
  }, Header_jsx(Search, null)));
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js

var Meta_jsx = external_react_default.a.createElement;


const Meta = () => Meta_jsx(head_default.a, null, Meta_jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), Meta_jsx("meta", {
  charSet: "utf-8"
}), Meta_jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/public/nprogress.css"
}), Meta_jsx("title", null, "Motown DB"));

/* harmony default export */ var components_Meta = (Meta);
// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__("CIUX");

// CONCATENATED MODULE: ./components/AdminPanel.js
var AdminPanel_jsx = external_react_default.a.createElement;




 // import { CURRENT_USER_QUERY } from "./Nav";

const Center = external_styled_components_default.a.div.withConfig({
  displayName: "AdminPanel__Center",
  componentId: "sc-1o45frt-0"
})(["display:flex;justify-content:center;align-items:center;"]);
const AdminPanelWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AdminPanel__AdminPanelWrapper",
  componentId: "sc-1o45frt-1"
})(["border-top:10px solid ", ";display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px;justify-content:center;align-items:stretch;position:fixed;bottom:0;left:0;right:0;background-color:white;height:150px;overflow:scroll;"], props => props.theme.black);
const SelectedItemsList = external_styled_components_default.a.ul.withConfig({
  displayName: "AdminPanel__SelectedItemsList",
  componentId: "sc-1o45frt-2"
})([""]);
const CURRENT_USER_QUERY = external_apollo_boost_["gql"]`
  query {
    me {
      id
      email
      name
      permissions
    }
  }
`;
const LOCAL_STATE_QUERY = external_apollo_boost_["gql"]`
  query {
    selectedIds @client
  }
`;
const TURN_SINGLE_INTO_ALBUM_MUTATION = external_apollo_boost_["gql"]`
  mutation TURN_SINGLE_INTO_ALBUM_MUTATION($id: ID!) {
    turnSingleIntoAlbum(id: $id) {
      id
      title
      single
    }
  }
`;
const JOIN_SINGLES_MUTATION = external_apollo_boost_["gql"]`
  mutation JOIN_SINGLES_MUTATION($albumOneId: ID!, $albumTwoId: ID!) {
    joinTwoSingles(albumOneId: $albumOneId, albumTwoId: $albumTwoId) {
      id
      title
    }
  }
`;
const CLEAR_SELECTED_IDS = external_apollo_boost_["gql"]`
  mutation {
    clearSelectedIds @client
  }
`;

const AdminPanel = () => {
  const [turnSingleIntoAlbumMutation, {
    loading: turnSingleIntoAlbumLoading,
    error: turnSingleIntoAlbumError
  }] = Object(react_hooks_["useMutation"])(TURN_SINGLE_INTO_ALBUM_MUTATION);
  const [joinTwoSinglesMutation, {
    loading: joinTwoSinglesLoading,
    error: joinTwoSinglesError
  }] = Object(react_hooks_["useMutation"])(JOIN_SINGLES_MUTATION);
  const [clearSelectedIdsMutation, {
    loading: clearSelectedIdsLoading,
    error: clearSelectedIdsError
  }] = Object(react_hooks_["useMutation"])(CLEAR_SELECTED_IDS);

  async function turnSingleIntoAlbum() {
    turnSingleIntoAlbumMutation({
      variables: {
        id: localStateData.selectedIds[0]
      }
    });
    turnSingleIntoAlbumError && console.log(turnSingleIntoAlbumError);
    clearSelectedIdsMutation();
  }

  async function joinASideAndBSide() {
    joinTwoSinglesMutation({
      variables: {
        albumOneId: localStateData.selectedIds[0],
        albumTwoId: localStateData.selectedIds[1]
      }
    });
    joinTwoSinglesError && console.log(joinTwoSinglesError);
    clearSelectedIdsMutation();
  }

  const {
    loading: currentUserLoading,
    error: currentUserError,
    data: currentUserData
  } = Object(react_hooks_["useQuery"])(CURRENT_USER_QUERY);
  const {
    loading: localStateLoading,
    error: localStateError,
    data: localStateData
  } = Object(react_hooks_["useQuery"])(LOCAL_STATE_QUERY);
  if (currentUserLoading) return "Loading...";
  if (currentUserError) return `Error! ${error.message}`;
  const {
    me
  } = currentUserData;
  return me && AdminPanel_jsx(external_react_default.a.Fragment, null, AdminPanel_jsx(AdminPanelWrapper, null, AdminPanel_jsx(Button["a" /* default */], {
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    buttonSize: "large",
    onClick: turnSingleIntoAlbum
  }, "Turn Single Into Album"), AdminPanel_jsx(Button["a" /* default */], {
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    onClick: turnSingleIntoAlbum,
    buttonStyle: "danger",
    buttonSize: "large"
  }, "Clear Selected Items"), AdminPanel_jsx(Button["a" /* default */], {
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    buttonSize: "large",
    onClick: joinASideAndBSide
  }, "Join A-Side and B-Side")));
};

/* harmony default export */ var components_AdminPanel = (AdminPanel);
// EXTERNAL MODULE: ./public/fonts/radnikanext-medium-webfont.woff2
var radnikanext_medium_webfont_woff2 = __webpack_require__("Svcd");
var radnikanext_medium_webfont_woff2_default = /*#__PURE__*/__webpack_require__.n(radnikanext_medium_webfont_woff2);

// EXTERNAL MODULE: ./public/fonts/Carbon14LabelerRegular.woff2
var Carbon14LabelerRegular_woff2 = __webpack_require__("DZTD");

// EXTERNAL MODULE: ./node_modules/primereact/resources/themes/nova-light/theme.css
var theme = __webpack_require__("z93d");

// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.min.css
var primereact_min = __webpack_require__("Rs88");

// EXTERNAL MODULE: ./node_modules/primeicons/primeicons.css
var primeicons = __webpack_require__("QSGA");

// CONCATENATED MODULE: ./components/Page.js
var Page_jsx = external_react_default.a.createElement;










const Page_theme = {
  red: "#FF0000",
  blue: "#017ad9",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};
const GlobalStyle = external_styled_components_["createGlobalStyle"]`
  @font-face {
    font-family: 'Radnika Next';
    src: url(${radnikanext_medium_webfont_woff2_default.a}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Radnika Next';
  }
  a {
    text-decoration: none;
    color: ${Page_theme.black};
  }
  button {  font-family: 'Radnika Next'; }
`;
const StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-14vv5uc-0"
})(["background:white;color:", ";"], props => props.theme.black);
const Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-14vv5uc-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], props => props.theme.maxWidth);

const Page = ({
  children
}) => {
  return Page_jsx(external_styled_components_["ThemeProvider"], {
    theme: Page_theme
  }, Page_jsx(GlobalStyle, null), Page_jsx(StyledPage, null, Page_jsx(components_Meta, null), Page_jsx(components_Header, null), Page_jsx(Inner, null, children), Page_jsx(components_AdminPanel, null)));
};

/* harmony default export */ var components_Page = (Page);
// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__("ePNP");
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__("obyI");

// EXTERNAL MODULE: ./components/Singles.js + 1 modules
var Singles = __webpack_require__("66DL");

// EXTERNAL MODULE: ./components/Album.js
var Album = __webpack_require__("tXQo");

// CONCATENATED MODULE: ./lib/withData.js






function createClient({
  headers
}) {
  return new external_apollo_boost_default.a({
    //    uri: process.env.NODE_ENV === "development" ? endpoint : endpoint,
    uri: "http://localhost:4444",
    onError: ({
      networkError,
      graphQLErrors
    }) => {
      graphQLErrors && graphQLErrors.forEach(gqlErr => console.log(gqlErr));
      console.log(`NetworkError: ${networkError}`);
    },
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    },
    // local state
    clientState: {
      resolvers: {
        Mutation: {
          addOrRemoveLocalIdSelection(_, variables, {
            cache
          }) {
            // read the selectedIds value from the cache
            const {
              selectedIds
            } = cache.readQuery({
              query: Singles["a" /* LOCAL_STATE_QUERY */]
            }); // remove id from local state

            if (selectedIds.includes(variables.id)) {
              const newData = selectedIds.filter(id => id !== variables.id);
              const data = {
                data: {
                  selectedIds: newData
                }
              };
              cache.writeData(data);
              return null;
            } // add id to local state


            const newData = [...selectedIds, variables.id];
            const data = {
              data: {
                selectedIds: newData
              }
            };
            cache.writeData(data);
            return null;
          },

          clearSelectedIds(_, variables, {
            cache
          }) {
            const {
              selectedIds
            } = cache.readQuery({
              query: Singles["a" /* LOCAL_STATE_QUERY */]
            });
            const data = {
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

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient));
// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;





class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } // this exposes the query to the user


    pageProps.query = ctx.query;
    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      apollo,
      pageProps
    } = this.props;
    return _app_jsx(external_react_apollo_["ApolloProvider"], {
      client: apollo
    }, _app_jsx(components_Page, null, _app_jsx(Component, pageProps)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(_app_MyApp));

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

/***/ "6JDq":
/***/ (function(module, exports) {

module.exports = require("primereact/progressbar");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "DZTD":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,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"

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ "MGkW":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "Q4dm":
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "QSGA":
/***/ (function(module, exports) {



/***/ }),

/***/ "Rs88":
/***/ (function(module, exports) {



/***/ }),

/***/ "Svcd":
/***/ (function(module, exports) {

module.exports = "data:font/woff2;base64,d09GMgABAAAAAE4sABMAAAAAv9QAAE28AAEGJAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGm4bxVgchAwGYACDYggwCYRlEQgKgo1wge4HATYCJAOHAAuDQgAEIAWIbgeFEAyBCj93ZWJmBhvbrAeUbbtYRLoTYKr6VnUJk+nmeIHcLBkEV3XH7AjsdiCqCHcw+/8/47ghoqAF1Tbf932QxYZCoYwe7OxQ3zM35tkdzNBzmqowqP4ZarwSv9Ebd9QOpUhKDFpClUvRcTBQ/q3s047050SLimW8AmUlrkD0CXT15x+KFH+vj7VULC42ObQuVO7g9G0qMhwJYtHmzO6mbZzkGisyBlWhdNDYNQqKOjglPoXJCfomv9e/8wtsG/nGYp16Cb7WevvNzN7fC+IFUUUYJgUMxgEKFxXP5Rk1ushkh+fn1vuLAkaUYlEhMGFUbTBYkBsw6AFjRG6koyRSKiVaUpASo5EwClTKyEP0yioOdenJDwD+pOdXwvogOoy1izQCkMs4jCoxjR3G+g/nGnD1+4sok4le0yEfNWCJHPh+1OknyXFATyoeAI8AMEpWHPfqtslHjqMlaY5z3T+PRxMQfpbkQImG+QKAh9f9u9P7e02m9cScmBgIqhCKoBSaIDxo4ZXIN9H7HN2M8LSxNGpzVPy/mwtIoxMp/z8LrFrLOYK9+30A6oTVuggp5ylORaeqfRCi//1e5+UHec1NEbaM17WsAkLWAbme7yJ0mRU5XyPfnPp7BRpW3KLMxPPXWxPevAVwcxC2C5XYupZdIhdhu8WhT+DCkxUBFcA/PPXL0j8XrL1TnLmcpbySwzhGbAZM2XvdvboqMdvIgBjwkGjad1avFctH4hySZ+7N7Hnpr9zL//GysgJcQEtgcWkRGl6eEtwfnVYv0FMKCBFEMthge8bj2fGlkIqmuqJMXbXt/W+2DQJBNgih0K1eX/HR9D8Inh+bGbF4NErj9Yb4J9k2rKSZhu6tikZN+0tVv/a9BUgunOUfpYtlLnoqXKwvV5Wwi2ByAcjELqgjIMkjSg4SpW+LtP+MSGo+SNEeyvmnECslX05dlYr6uv7K+z+dZXuOAoSvp6I8bsNVLw9IO/4ea9F7I632AP18PsSRNHLGWq2PqQyjF8JYEbZ5KbECLK8KFl3qvCvK1FV+fi61SYnliDJCb/57B7v/U0qKScspUa7IIxRmHsjiJaNLkdSQHaCbJCHVJqcG5WTYixQYMPikGmfttG4/Y67vQUZd0yNzTDLE9xENO+rv5W7Yvy92tNutSP9x+UtxIhJEJJMg4kJ5h7jm+oLYw7YHL/Q/TS1ySWOy/Yyt+sOtmKsfW60zVoACvkIvn0YAvPlT96PwuSNGfAC8W3PyJfxKD8Bm4WDEQEggZD/C2YsEiYpw0RJAEiMcnwAkKcIlSwVJ+ztcugsgF10Cd9lTEAQg6e7xn3QT6DDYvAUMFsAf3JYUB/bKbDSN3KN6TLPXOyiCnLn9rGCwdGiC5T0Ma3qcq+vqWJV++lWVt2E7jgoSAP7ALn4ckBnwRBKeA4chIWbAcW0CDDgXks6lX8XklSq876zWjzkaogu9YSA4SP/rODBIqqqBi2oo2KPFIVdmTF37nxlCih4QREHgzUEgygQeotogyQ4BJjS0QktnC30IYy02FPdBJBF8MMsgD0FWx5BK8L9Jeg8BxPPEhicBwurp8F25afXmHoEVisllMYT7/BNWqOIs6Mm/V8mYSQPxe+cE+Bj90o7Abwv7uBHP+FMYAlN85vajZPaOi0PjoNrjw2B165KovQB61gHhbmLuNUGryEmy8gQYOXrfh7uaBTQZcTASyeQOC4EUrBz2udFQGZiFJoSbLHCEELHuuAvtHhH3k6j7LGBWgIgHSdSVcrAFzDpA2rgryigwu0wwRAy0QBMDjnBLZIhhNwgIVBjZUHARA2+gDTFD1MAYWAMyMLVYx5ZA4DyhJmWIAr1FlhYjToKHd/Bzx03GJ0R/s+65b9mKBx5atW7DE1B4QQA66rH4ChYV9JVmyE33PfPFf8pAQDhIIhRC1Y/QC0vBSyeFm2cQqnCscqK0nNwXGrL4i0YPx+oaATpxhkDBY43y5CXPtvf8eC/Dx36zrffRB12fnPaZPN9vnX7l/XvSIMeMspgsq2fJYz8JPrjtY+OzR5pg9jU6bEgyIOqhjzV+trTnB3rzqffhC+lwxCPHrHEcNByLAZCpGSDxYVTOtFibn5EZJlJTdlycQx4hCzx6Q7HZdumAgw45Ug53/DFAVGnB4IrFTyj74ISatThmwKAhw0ZcAOtBoAfaV7vxySsGtd1v1rXryBduLuTY8RYZlLyp5otDptMkt56RSS2ayx1VhG/JQ2haGDoNteGVNyyA029UpLuGfMxl87j58AUlIy7kuzXdSSewdOoWP5+T3ww4BvWdACZN/uKTKewtxH+u4t0R2PH4YZndAgyYeTd7fxPlwTYxULYsFHbKFyhuuButFlI2Epbem5oqJSJHyZv9+RzH2yFPY8ijOz/puv1Tv4pYs8e33vtx2r31SC7eNn7QKI/q+FWb5B0S7XDBKMQr+GpOI6pCQkybQig+bpLZIYj8UWBmBWH3vKU7FopO2B2ieNiDJLull16C60hJxftt37+xGL/j51KIVVvG328nqmTJV0U89BOtxUCFYqVjVEyLQQFxzXhoTRdjRxobajJK0e6xINDpSbOo6e6Ndbys6hFqFNW03LgbJ1CPsljmA1MLO/0Iv0HOhTRWG5yndBu06KFvj7Q32dtyZfx0nV31yfSYiWxVWM8F/0pQSGNB9tcyjr/yNt2oztGtXk4cTqqH6r309FTIMZOrezeeUaqzuMnDoQhq1N5W+elL1w8XvnCIvUAGgFQzItAQwz5Jk9h0wSTV4Qi7aUeTPV0ZcMnrQmqqOmu4/kaBzE3vzrIMb8AFIjVXufv0Qj4sl65XILrJoO5agfjk9aMlbUgN+hHtEHw0jN3duJwP9N9JcAKiOtxshXkT4LfDbMAX/W0VIH1KAkLaLiEiWgVr9qzTyhW+zAPZlZkYN70U4atGtVv5NpSgtzZ3CcJigv6z5+TaqripwnjkcB5KwpIBCoi3JCw8HzRoBnkhCwtiApl75XgAQ4qciO0h2oPg4d7EenIex+N+4WxNOrDch+szmnalRFWq4UKoE2jQ0aSnxUA7GulgTHSTuZEXFvoQrQjymRjQMWRDZGfEwZiTCRdTHuW8KvhU8qsSUC1oNYS8z2DyFUEoVgbt6K3B4+XKoVWoAVcHEa5eE0kHyTqUJCbyHKIs6w24TYcU8tGt592jWQA95phrlajhWNOBA/3kipEReo8PE/B+EYCqR0BCQdu/7UAFdsMkMLsYIXDwu6RQyVHxfs0OaoJCwiKiKFFBqJKWsnL6Pusd4yShDoHDgoGFI2FuDGC8BAFMIHv3rHSnwMF1ZAJMZaPmog3glIWNiRDB7hG4KDGWTJ+KX4BdAbC8N6f2ti24nCi0o0HuwN46cWkLRAOK3Vnk0VVpYK0/LcU5Gj9ycF/Ixz+M3y7HPbgEdEeM30fw9x0DnBOlrt+qW7pl7c2a8SOgLu0VwVIdDCcAA0C6A//eNqaXom5yoqDOrLx2lcG9oIyAYs1Syjq4UI+i1FpVko58rOk9DOp3KMuRDLXORMpuQIa67fhoRDEl7mehtvwXHiFDpL6autKu5NeNqEybepZNJB9sjShbsG4GQYFOJKigvKqnU16B+f0ACqrTPnzIIbv22Zo0tbWi48whMQgdLWj7XCzAn9MBd3DLTHbwaJsmfgj4BSOIgyNqZRQooZViO7ichPMsS/JcnNmBZtZ/E0O3f0CbOEDzq+cVlWZ7nP2KoHJTAek4WHMHbLZG0903iseOD2kvOj6SUpFphcQZ0ZoT8P4IdNG/pApOgyykyPSG4OBCh3Cx7gcrIthRtyLygsNIR8gcniBCtRm3+zgO6DA79LBFNTikIBQwjhCcIFGh0WDQ4TAgOBPlQoxrRHDjDscDEhOEBc+TOC8SRpKkkKaSMYqs0eSMIWMseYdhdUPq+Qym13FIA4YhjNygjEacEyYgTUWkabOkXSTjEshZMq46D5CjjL4+fDSuAYMYAEM4rIJmIwyB/roA4/mA/qDDbj0T6wVwrTQJKPTRgzSawC8kIsS4M7+BGLA4lEKoyKMn8oyDFRHipGZlKVRRR45V+nijA84AKGgohzByEPVS4S5Ckq2JhwCxAD024pINnTKrMcl4ibNBepr1XCpYCsI7gCWD8gunAoNgLwBwywQFZ5xlUNEXbk4obyCA3MlDxOwHuejIw5DyFB3BtCzctDH0oCnU9bpJNzxLzy3i079NaqWqalw2J+sEJMszNQwlR5kTHkBP8nxSVgKVBYjNc85gJbnBU+3LJWCYKMt0GAvkCjfmxlyaqQOmC4HwFHL8ccRQaSOhCji2F49CXts68Bgv7dgqFUiG16T4X6SCC1PhqBBCu/8y06ezaAdc/rubHypaZPN4nuPFg7t1IUmyjq6ZLT+MmZTaZPSEi7e20WT28qvN1rlGIcquMDIJ4CEJOjiqriQMJFtaQoVbzDG0V6JDDQcETHvTgT82MSaanGDkZzfAtqPAElE66rpuaIOwswYTFgiAAgMmsFKBXNoZGANp4IYWMXDDFzHgSC2k6jCI/EcfnQy8jy0Poyc5M9+MFB8/PUsXoIbAkN2KAC+yjhFm+1RpL5F9FQ74X8y1hYZWTethHBjqEDisDwPLPeD4kiEgjwID2ABL+217XbIVazI47x33i5tJIxQY4IhcdXo1xq1pU+EkGKeuIfCei4Wau445snoJqi8AEWJAEFwm6GQ4RdIJwOdpgGf+1CoERyEAo2UgMMMhkH1M1+9GBAnKGShAcbsOXVofomfKBgwEAxT6wxH8+9DX0ohIyegLaYBf/u4fEAiODZkdkiDBOGIkSwejfV8FkuptQDlyHT6AznwY9mVwfykIFGAmlAZqVe7GIPgJ8hP2SZbQAhJnEhKbdU/L5UOUHrbfyPWGbVbQrwK+bVtMEpDZMTk2ASgcmR0WB5Td3QIgQ0BKKZU4pgRV2YAR6KnlEIU631WS6149d32KXV5D4gQB3ouRbgeDIKgq0MgDA0hRs0wAJZ3H4PyOnNw6GYK9cCPnHkQu3IFV+TCm9CPh6b1cNGsZnsI3D0ZVIxiItNj5ZQ30qxbpScvXdA4SojIsNwE3HhdIjy2kK//0kfz0Ls2+O7sBRThhbRH/z4L6ZPIbDeASQLnZIgKj6QqNFnInk89nkjfq0LsEmA5vn6aoLCfNOmsnmJGW5tPmaKo4ACpM2PBRYMaCI6TsrY0Y7YQpZ1xcHp4XRtgHMvShpr8wnisuueicKJR935+//OwcnsZZnMYJHMIuzHx2aO76vRQe1fTq0fo/a236Qj/53wPkgkShMViciKgYXlyiL8vxgijJiqrphmmBbMf1/CCM4iTN8qKs6qZdUyNjE1MzcwtLK2sbWzsS2d6B4uhEpdEZzi6ubu4eTJanlzfbx9fPPyAwKJgDco7kFZTXNLW1tnd2dPX09fYfHxwYGh4dOzE+cXJm+tQs4E/hRj5KOZYQ/SQpSgiQ+wUEwJ4nADj4At0/wtA4ADj0thqSkV19PX/n7sqDe/cnjbO/4PHHDQCc+X8Isj6PReeS0rLiyipQ8d1YDy7+JQLgrEqXaRgagYEkwj+cw2N/NkjIVf5SChV/Qwys+abNpqOsghp9DwfGwdfBO3sV3j5f5UBrw9yYrVSrrodlKr7h4MsJJ/DO8BPvsxNcYB39ShNVJTzo2MwwcrlXkdYSNcH17O8MJCotVr6KT1XNp1/lv/hP1ajEDdkKb56vfkoEsYoMzDFmFGLqjOxknGzUrMeNY8aIHNpwma6+KYGyuZl5PViem+AWhstmoHfImMB1qW0UuT6tnUNvUZuqTcTX6mWiJKmi9sWvH2eLtlKW4xbdEppmY/iKFZedCeRyU/YYBbGFNk+chQpOmYSPfZhjUfCKUMMW7Vcp1VCjczE6ssRlBkPDlsrlqZ9AXnQu0rj6XViSRHynXQNoUN6GHIboEiWUchej+G5mQ4pKx4AocaIqWm+qtlGNota2sonI9kt8VhPcLQM+Mw/x+Lovb8O0Zxete03gAveSj/VA1jZAZtg+hWomjl6lSrwh7NfPToOM5fp60nHBDaHoiIjykNIY9Ct0EnKg9aLHEbC6hdyvnAIEcrn+FEECdTlO5pGpsWWUAOMChXI41k7AMATUSFOm8B0gHgFxHuh3EUAn43eRVHbAvMcdywbJ9yHI9ypCQIeFiDtwWQLI1+EyoYqWpCK1kAJ4IaqKCw5qAmZYVEfg6DDG4X4GEapihVJ9EiSshVQdeD4NApLhqKQmHfQaV8F+HHorClDQU9kw0H2/1FADDHCvNUTjg9RgTKtVlZe6Yccnhee9KJMSSxGAAkafbIavfYMXPAmh5dakCnVaSmUWztKNB260kBz4hUWdLPQQVonFTUcACRrWGCqIz9jdx8iMLuUGhwR66jrdALxSA0STWkkFkWoFmKSHyoBudIU2A4dnjrGGNgEuQXt4ktA003Bg7NjEGN1IkJLnMCmbSA86ch7AL2IBQOCBv9yB7CR0bJMauQdjPUp9leyWgCUGkcgSkj1oPOnYBJBBKhOkRqZYVdxyHsGnbHiKh8IUPRTiIJloIjbbWHVA40ZD6RN30DEAuj+Z4AUGHic1blw3bcFc12mfZ2C2PFI8YqG8GCpYCItYufoxKMsPhgsC5zCWFAZkpXCO0qBjpVwg77JAFLtF3UhBFh1TgpxSQGkTuORUEs2rm8RK1EgPsroE11FbRYQpHu2tKWKBYXSuvKGjmqiN5mGzrW6fuB2LexZJvz1xc05xM03+DczNhmv+NxtwO0P2tNBlPKHkpSUrXpxextC4CC4Ke3SJWB53jnCsmidbKe5glNDlDYZoqDBS1NTA3s120GkbYkVHABxkUHcahmMdSHPtlXnCCoAxHCc0yuIEfv4KOmZbDykiLjOd0j3u08VEYy4b3zXQQlg388t9X+RpngVCCfM2cj8qW8haPD6hB0lf8eIZaPvipMV4/nw4oSAtTtziaFp3qW6H1nhbe8NhHucJlvYkhW+BrPCVujS1sGOIlPJllqubMHIpTfwOTUUDj2NnHyOfZkk91FGGcrWM5tS4jkDTOEG/isn2HUR1gtb4tZS3a6eXEJ0uwdwOuGI1pA4h0URJiRs9iUwtdHhKCOizDS3+OQXexQTCzLAI3KwLhzTfziKJkpKL0kXX3VEn98fgKsxZCJ6wUl8x5qMU9GALgrx5evMrzT3eemnSe2ONnwU5NiHMJ9gBpWrczLOE6J9aIXuZ3TCFfkvQw2Qg+kkfGYyP9IxuYstdJqU9kGa5K+b1Z1kAp34Vgmf6/b3q92VIE0FjdBfP1w3NN81qvj9hWyukW+4nRg6rZqxAq6xG88i00BBSG6nSyuu3Uvp/70p6zS4lf2xlfVt4JsenmswRdGQLKQLNtl65KlBScDtRK4zYwrZed+EWUO26vBuIcVF7mrCE6TjHs5KAiE2qFRKXo3mVhbbf0GUCQVfjW7bxaq8SNuu3UWaYD1gPeMOqgyTUnNAESA2KJWjqhSxetWuMjsBgDLyPkLqTBFUmIkcEKd+qw7B+2L1ILhbGCJUCQTmdkzKgaNQfBfeaSSDZZphJu0MDco+bayAJEpEx1fI9N2HBGcrb014xYPvHSKtLc5v4JFtrDLiRgiHFIKf8LMvFdqRKwGvq7J0QlMcUq2J3nsFONnhuFhXzG+NIBe5QXsMcCdWQ55mBoXpsuIlXtrCNAiQAQIO4HJoZcHv71T5PzuAdJo86J1P5tz0h8SKuCXVfH9QBcc1MTRS53kw5rL3hQFmLYC9UQaGU7aaaJO/mOfWM/N1aM5y8yEWNgbE/ANFM/RwYYW873KIcz9Rx5xvPM8B8p08pzaKjIzfatpWHEd+8hZWKqieN8cR/mPoR4x7Ah/q8Qfv7SYxbZ3CTFJDdzqKqH//op/utRcsR+lBpONk8V0LrApKsXFs8Pw2iFJ+C4kwoG6qMUG5lz1kQtnowQaZQQv1VG2lPcduxKFiv2Qut+7JaJ5rb3BgD1jynTvaDGMRIPxlqpVzTSmGfr6Sw5nsiAxEfbJaUuxkQG6JDDDPMuQTyXqQ1sMcWmNse0zGUBBgPhGPK2t0xccrGk7/LbTvywdef//65vfnb9J6jH37zhXvXXfK+0Zgj4HKu6ajZEDlp7lcvurnJzgJo6c3PwuI782GjN0NWil84nfIpqe11upEqdfJCvRzouaI4bxDfm2/rX//F+4iQpHT8gsgbLubdv8FYbDrJ8QyjmZYoidSfF/CKPSeN+1HuIiBCpZKGd6wjXgm1soUvkvszwRKae9vppYmGJJ7MCJX5AltzOggUiJvtT91mtE2qUXkq8PYUj4EKgJOVh8WJ449a1ZGLZo4DF/J9UA1eUiBjpa7a524m4iELxDWZXTulmMef/uGfWrlxMUdfWRTKOG0t25clQjZ6T4CEOJM/QehgJ4Zyp/6iT+/CYqUmRKAH0KyxuBow96zxkH7FvAQbxE/wQHUP4eWrNp5LcCgaamN+0E9ZmBx74Ifs7ulvuNyDAKEBNEUNJCmuooWc9dgaGW9ZpD+yK1+iKfoQa0EZjXL8uNGmjWrDJlnZIDZWlHKe2LFPQMzl8qFVHlqDlldso21iBFF5XSHtyBoe3aC7qAMlxY7gea2EnYjHkScw1IkPrbThaIeCH8Cd/fx09ruP0Pn51Klzn7FDHRTDnXbnHUZ64YJRrifacR5bgR3rY+cDiDTVqajaxD0oWVNsPKSREjXZnPoclvVJvWUbpIMOuxJkshPMTCYamoEXhyX86S4QZl+eQnOS0AQojTHX9XPdxAetAh8ZMU5yhGxDcQoi/FgHBBg9X9hk/l6B59MjuaHZkvWCSorFQNIFY0G5V7BgKy0d5NFcJzxnCWRHKm4hImnCYrA9vHJSlYthiBhK+Vc9qGieOjqCyz7Htu2zb007YnfZ1q5UYUUTCxr30U3r9ZvAyIdiSXFD/rXukHYhO1NoEG/RB9uVBFK2YhpE4kAqH8xAQ5GtwIDikRSloFbmjuWW0/uejq2gXQKTUj7Z2B7OHpuwoSILlKdIfxYbDs/TRHtyK5W3DboRjWvlYNVsn+wZtj1zHO15DyQjDIqc/yGJFMk4+okxnMS4kmLY114DyaL7uE6/mDiMztVcsKvoUAgskIoBzVB/iw9hBJEVHaGjNIMLw/tp5MvreIPeU4dPHb7nt4q8XJI5enTk6Hhf75J85sVskCR9Bvdyb//mR4qlii8WKxSTKDkHd+LmDBXdHWrNxZnoe3QpjS5pQpWrU8k5uBB9j6nGO6Pu/1y+OzTu9xv/Lr7Awq+5+rETpH/qX1V9uXHlMfK/Z/i67a7P2mf6Tv3n4vE/Lz4wzsWdwnZPlrmjvuGT9xQn/U6habupX0qm6hrSfqNp7VHTsdWHzZ0PHrQ3r67+3Wrs6kw0cWGYGLvQTYiuDMhTwsiYCIzCifGBzY8eNh1bf9jc/uhRe9OjtXfHjF1diSYMFxMjZ2djoqvzqPdFezWBhW8CJ47hY3LBOYRURWl4ffLS/F+nqiMrJ7uCf5oShA2Kksq5j3asVB0Tym/3yvf9iWx4pNgc3ZCQe6okmXKsgNnLYYIHoTr9Z8UoL8rInfSMRCM3wjQThWKt4DtWtZyCaxLV2812puV6m9LZM83pu3c3H9nlps12Dy6J5yq1HCuz5vT37diNQZSJsPAinj7118/NmIkPW4jP3zjnVY/xxGNYXrU3Zq9Z3MnLYvr6rEHoAm5xEb24hFsKZu98fsCfTA+oi2nQv3f6zBahcgGnjpO/HRMZoy/1v1GTpj7/HwaQofuOqv/vvZxfP++V2fgmq+IlRWdmykGz9PnLzPqsJa+iBp8VjQ/elRxc7YGjRF8vY0tzlomB774yXIV/mvTYoUaOi5OFp5Ehe38JtsJevFfKlv/cGaCIXj8JcVs8Yj87QeCbbZttJrBiOxJ5dv7REYHrGFtXTeRI1p8/NRM/laVf+Bo2s+P4/lkOWZZ8U7apoaOWvIRasA9EF8/Mr0iLLEvjJeTGRtIArd07yM87ys+fG54ChVOkWktfbSc2xly2qo33HOblxff47kfKO8EcG/qfomJagwa1atiROZbTUWZsaaWPi1tz5+XP+zB9suSyr7Kdu+yDDsQWpgfHHWnMTDtaGeHEp1jY07BMo061KTNKYqFw7o6E+tuxZinR+v51s29uwfc9cE3Kp03bOI1Hos7bJsV22P4uJQRleQd6ZtOo+SrtIGBx3ZNnB6T+zvJeaaq845aSu+bfM+Onlhj0orhmpbCSn1hQ/pCPURPTsKH4ulSNhPVQL+r07bmL64fHJ6C6za2S2fecynPRNk7n6wZf1Ciiefvyzx2eVft3MbJnhflnx1R0jdLUS+1zBkxUzBnmiY2tLHxjnmKjKvMF/Kp8UzufzJ7gJ45zYROChFokUZ2GQ3GRdtnyO5FJRWUUf/P9mIaY3aH60Q3RFpc1SQFzp4pR0LlzkpYnLzLtPtl9ZIEnT/mcq0+hIFthFMG6khll1jw5SYBM3qNTjup6gNJ7/YCuk+RAYZowdRx0dex1Mwht9hoRtiRnorOOrb4GRdc13i3QR8AWo8MQDU76BwqMcziZb/N6m1I6+6lq+3nFP2kWJyPCMvWpvGpjA5qEgV2jLSu9P5NvZRgYaB6gcu45USe73MHdTIyyfEgh7orwmFmoBOegg712AvV/NzKDxvJJOdoQgZo6/Tuq+orl7JjJ6YqYnVPvv6PLrw1FeHbfzPk1QSp+u1VCXsKFCpRIkiRNLXdTyriuh8znHdqr2k+8x7PTBO7l8VotR9x8Vo47eA6giIgPki+u5Am7g9QwubuGr/Xe2rX9Z0vzakIE18svMZR3VTTp/jSL4xEpTPQv0Dw6HIrk/rbfpoQdOHq6tnLxltyv3/S1WHm67sBRSpj9Nvc3MpQ44RhDmvJb83JKa+vgWm+hp99+fl7++glm2mlWqWEY+E3jGydSg/b57ajRMA5c1lgutkVOSpU1XohE+v60vWkU4o2ViupyDa0+dCXNb0+rVWFgYJkR26/chB1yKA3tyJUaS1UCF+ziPiW3eGSeEo5S4l94vtD/RSs5X2LTAt6fkpZGe1ZkUK6Of/y732u/mJ2AP1prGX0moEIzr2/y3KCERi6hp4YUfa95MkdTPon/zDQ7TFdxu6dWLXf3roqsUrrd4rXzTXAm49ZM0pYxEDUgAZIdUjOqGp5DQuFEmz835ZcW7+/6VdTFJUf071PZkQ58+E9RHCza1EpoDqrc37wmZuDR8f7B0enZ40HvMc2D6UrPXnUd3/rL/sjtPxNEBJy50Vjrh2ojOr1yr4rvNMf1IcWei++oWP8Q1sv58fRqdN/pe/bfYtUPwerx6u6KQH0TIPH+/HU1b0o95786MjrY2zc2OLIaNO7m58P2ZLNMoC/EtN3En9jd9j/TlBuId6zgFGICfhotqYY+KymLwPchEmQaiD8kegcliIM/G1WUmApKKgr1PFOuab1S6PnU8hTqonR5uurgy4vinGZ+c7Ga4fWogCgC7bWhqiakcfXLoV55BQ29yWaAufMUegpQ158izCETYwev6YND9d9ABDVvLNk1QgF+Q1JB+obDS7vXdpK33mDfKEBviFYPUR8PmBKYlvmCoApSoALJD04JoXmF3GPTKJVPts4Rnvy+M79H6/B0zcWBuROMKRN7a6uMhpzND84sBYZ9U4N1Xw8PWVRK9cYmcPXLwt2ePk+sRQtFXXsKphMycodH+/IGhfGFUxE2U5rsd62Ny65ZNw8s6J/V5MrGZ0YGJBX3hxT3JflnRYyj1+Tqnz2wcDNr2bW1kUhhyADXLxsp1ShZj/b/xjQhOrH2+VO4G0t+NHc4I6FguqelcCpemDfIt7Hfa+4K/6RngDHEOcBgaW11h91rnLUcngw4+I/EtasGFz2h9df4b/mQz4n4xYWHhEdHs8DV99J5l+bLE5dOv4yjmFLttf5e+vue+z1Pq8hS2tPcyhFGaEi3sz4Nn+tulu54PkFwjNa4h+nWsqfF4ki8Gl0kl9c+GleRXRotqm7f6R59X8KMhWjIGkxJyuprqcsZT+FnDRcJ5Rkx1MVMKDN+qafXt6//cj75z2JsVnl9hm1Di3uLrKz1F/cvBKNqbngUM84j9D36lZzozAKaiTYTZ3+s4dMNiwvb9/JtfnR0+Bl8B35blBpa6E1ogsvxoMT1wEs4cnBf0OELN58tYD2mkpg8n7CArOyavo7ALYLN9bOMb2hhHBUlOp72PTyz/moRoT9kKSaPauNUtxbSr/u2NvJ+V1fj/ba14b7Lr2s/tnr2W0b1ieLuraKe0ZNF/VvF/Y71zbPrc1H8piePd0aZg436TUwLei9Y/vcUTAnS8oZH+vMG0/iFU2HjtsNOz+Mn/CZU7kj2omNa3jyFuTHlRvKG0wQFUz3HShA/7fMMb2ihrKD0hJfiGlXjMbWW7CTV7tRZimpH5xsK/UpwCDXAwkLPQZ8pW6XWo93TeXTq1+lH2JUT9bfo9BEXd5KLkb4ateIKMY55IMjCiqYlcDoFu/a1WC4oFqq9t9TR4tbyZekL0ceZkYzC9DYPjKd5CBvgLszHuoPCCWf+mgpUW2IkpXMk4TlRe4gtVUpQXQtPZLJDXLrDQBzeKxrveLjUq5Ybs68mtm80ipa7lzsee5n4LLG9zrHOvf2Z8KVQHRBbIvBkSSm8QDJqz6dxtwdLo1O3MZxcW7KPmbqYCu09rc8Bs/lDt14Hp2fk85fTDtWi8OyZwhyYJ+Gd3n5NV71xIklNNdzjgN47gieUU3j2bKE5zVY/ceN/UGsCru4zaEIzPeChGk5SI6mrhrnv/yXDcsYws6DuOP1FgWz1aeaD7mJOYp/w+rH1OrNQZYrBBydl9bjB/+50bTYaBalQDpEMaCrqulZUH5oo2TitPwbc+Oq35rT4EzMZ3z4Y39C4/WWpZ9fzS5pdphqv2TV/DD27Ln+Zv6ERxo14O3IeYWzycVZz0WRYiSfPLg1hxZTmpW9Uvq1k/L9PNZLbPZae5pFLCpIeLi4Kc/KZnW2FzFr1wmJ6GjPf2ojRC1XLC5ltnfm34TA3a/R4WsbASHr2SH9a5sBoDsKYKCyoFFQKpxfm//cf92+jWfdaD/w/cDzwv4Wkjf93g90SiHs/a/JO0/yDer7SzlH0sIk4HSoxeXeFTKV6shVVyK6O8Y1yrxr6fmJRwNGVJUvYBlh40H2MTVQ7AmTT5DJl0ggBZLPDzJJwzzLdcBKHUVXMGtLkeTXuL3fg5VqGHQoI1/8njSGmAttlt9s9o1/cTvyhs1j1/f2knRgs0voL9KUHRmbpH8s+TFhZ1coYLPnmOldbvejyUyZIkk5G7yWDWhkrq6r1/P6D6kPTMxpDezz/uI18MEZtUPr1Ahw7V7pRYpI0zcSn05zjaxpexGsZ75xOxU97mCRtlJTOwTEVaMO/YutyC9Q2rfXJBub2FZb6nMb2nLtNI+VFB24wM0Jz+YUpL4Tq29osHruhj1jjMilDT/pAWx9Y76KitpM/0DYGNo6W4PBDjOd9zHXd0mB3kPtYsKG1Pm25nUUpnswU592LSXeH2OM+YPsHJRTqEebN78xjPust7ywbCCSi+MKFopKLF4pLm5eSogsXW4tpHI6jUyiHVsYU6uTICXHJxTZhqXkh2MUl9NIStooxC4G91n2IslJEHXjmePZmWG2UkePs7GwiWr0Qn9KKqm+9Ci+cB+iU+T+hM5blsawh09esLF3iW5u1M+kREXQabz6Dx6XZ/xnUlO5tCtBzpKuuKiniHaVLNAqfPk86/s1PPsjfM7qLz/dtohOQU4PzG6snxtZW56+tPRw7sfHo2dVk/7hWv7jkVL+EVv8El9pg6nrX+gAt+QN6+22ngAWWJLfokJ8XC7mX39/fTQhNMV2IdzsoeyhiYKoZmX+2Rd8BJqz7u0TILayhLNdREryyiDL0Cu5bgJDr64so4lmFqQeS1BVp6e1dobVRBFeF8C/ae5ygVCjJEmM4xQJVuOrWLpYVv23xepYmxJ98PqIaWbzqitvV5Xera3gRVdWQ6gja3wyPfE1JDXWWmrqDhvazwn0qb4hh40DNmPNN7RsnSnPRWgRE1Sz4jZ24F4hcVqjLkO/WZsP+53u8bYCc1qJlJ8lbEtS+X9u8JyhZzpOhTPDo8AjGC/Al0G5Xt51pwtB9a8qqiU/gw7/emM6Hhc+lywWtvNmTosxNuZsWRJmbpIhAIY3XhowfKPvIwgetVpTcbiEX1UZEY1Puv1twk1/s5bXGf0Z85uXQ6w+lrGRCS4rtIrz/J3gN/FCind49DW9j1jASA2G1yRome0HrlTqB1PRlwzqO9gA/TsDFkDTG7uzZZnL8mVlyE+lssluXJAPnM4cPR8+paVFjy0uDwcFN1QJB4rx2DdJztbk0EhZ2+2vmbm5lJS9yZOmmfPZxbux4y9flT95eXnz+7krMtworDemUp/K5Hhql282kk+uFkoaK4Mu+7mcqKSTL9+BzvmODkV79S2bLJOWKeX0qcy43ymSAk1BK7VAMNAnN/3nkSOT13Nicn/SGyH8VoR9Rp/Vr/FkNHMt9nMeOj5b37AUm378ZUhRjyJMbC3Nb2NSFRn0t6i8q8aOWr7mZhkdujgbNkBHi5R0TlRMdKSwEXIxROyxbQQpeFASrZqCU8FC1g6zWZ2Tw5rhXjb4uSZqKeo1NkTpZJ7cCJi9NOnrWhRhrYFS3gqn9iC2krp6pqs+1MbYi9dnFt67lFWG0zTGqgW5W/zBqf+bsMgVBT9hdFtVhN8e/UcJ64Wa1dI4BlgJ/X510yRtdRpT04BzDwzKO5r2nM7j3PTMmlkYZnxPsrayyq3L2B8ESbpFYezJUiiinv4JQrejuc+3BL3PjEpRwl31H4R6/rvm/MbeQc7GIfLXr9DIlo96RNWCb33NNqwsHbzORycybeicsK/AqFSPeWUwd1LL/Q94rR6WU4ALmoPsRS4txw7Fdsi/t2c0Yfk13vlb465OuCeSZZwok1zrTikze/WPkZm7bK4R9bxm6m5JLGm5MT3aXi5QwT7Jt1Ys9D5hn2j8ayvBOqOXXZwuWyOaemJINv/Iu2iPPzGOpQ4kCwUhje3pfAl8wvF0pbj/ugYjHjlNIujj7TN7WTH1ZT9YxoPxsKzEQRqwBm4l+TAEroXqx3oUNS81icU2dyxONSpMQDy0alzUHP2G0MMjll1/EXcA14TZn95vtl64NPGB2QE8rOC0ppGHTkAb9t7EgMY4bJEwLaXw2ommNm/Pjon85Oc+11dhSYu+v2eizNk6JSajb57KZVtW6WDUu7OkCT3p7WYEiVbzdTGQlUJjpuCg+3j4+gKUSFsLz5BRrJyKnEqOl9OqbAfq2x97/JtB/G1nN5boLplOHTNWNCXsQN38jyKsyeXmtTd4ABBaBXzW+Bkdq+oyD+pJadsnPp9+gsy9WPi1/83FXY7Ct3Z52x2JvvXJvZ2s3LksVxxpVoSw4qTli+zhWND1rcGC2u/2KqNc2BKxKLAkcF8nGyS/iKu8CSC1hDdP17n8Ovs/j/mRaQG3MQRw8vR+aN3uu/qkkI9on7LU1/beYrxq9xqqGubdGeMfB5bbM+59P+BGPutu3aqtv3q6tv7FYU3drUY9ZAsY3ERVD/1hzyMdFBtc7qYq1HGqa/XNGS/6olKjW3HjwoCKo7+yTDCOd4Lc3xK3YZX/uSTisWRTflH+iT6VWldT1BbAPal2waQpRyx2uPBKeZ2NtX6k6WCbe9NG3u4u7sCudh0DOZvzIOCV6VLRVpHir6HPB5zfFBfoix/SOdOhh9TdAq5R/QNZzejtWTpl5fDcYdv+YSt3Hu4Eb4jbxYweRpYL53v/vRnbAgr4xVGalt4AgjaBTL8ACUpkn+b+PaQFoErADqj591ho+kQBSCllJQgCapNRWsGzYKRfQUjhIfeZ5YBIAxYJ0FqAANOXDOzMtqu3Wc4lgTXoCT+WzLgTDGwaZ8+7e6cZzETLjbnOnTJwWweqphzDtHyAZpG1u2judhW6ppA0SMo/ngGOtV1Ch0vTPdAHwyvHVu+7LydqD5c/h+LW+SjvK/HijpYkHhJqYsykOEwr1gNzehOpxlNncSkhPfAufiPW+DSj4toAX22MEDD5jck5SPruS+Tdqgn7JjX7Y+JN++3p8UHmvu4b9cZTCVvIQtFI+nmin94Je7APpySMAp7X1vVGhbCSBfud5eoEF/0d9fzSCSgXBz07p/6P5nLvLQ2gE+AtV1zn4yg5jS952JK6LYTMCOPW9Hciq22M/iPcj/rTG4mjcxE1cQdH9H0HLmfWdo9ONEZ+169GRaGtKsR3rvCAjOUIBw2ZWyLpdnc0b5O0og4XQtblGHbLjpReYrkFj8CgAxUE/wxkftf0KXwYYDA1DdPGMEcr00PO8BanyyLF72BbNNm97g+lwW7GaYkVNR8lAdnhEs1ivoDRtLl43Rhxe5C0p79oEdc0oDu7nNdUDfreuv1h48Zbx+E/zDYDXzg7Qyotc5ur8asVKcxFPl+YYx5l2py14hWeoa2xdPat1HkZ7OdMpPHrmT9em/czWm2tLTUqn5pzHwPDtjzqCfLjgphlVHJe0dWAt51u/HK0mgM7YwWxwY28qTRwYqKlCHhg38etFSJh2qgW5kOsCzG9sL7oc+Z4IGUK271SaSQ2xi4VQipl95ZagSjKESUYO5pioeaiaIf8wEByeXSeHNv1hAzUn9vzjoKJf6WAZtInglHRckaBeTU3uASpZeNzM/bYf9N6NDSYdhZKaECJyhwqsmSxCZBDkziAAvCI4mMwreSUP+khFLBxXZguFeliFXpWooPbQxtGmUYz2AU/GAVpDRXGwzb6mUHu3nIz6Tf2g96YkYJMeyubS6bhzG2oxrXoS2OIx6Njm+ufeOTD89fiGT3ijcxineD8uVdgiAjeiud1GmaPeHY5cZ8UfXChlvgFQRI5Q7dQKYtGZFh4J1uDyptzHIeI7FaZFB2gq41Fq5IyZMhipJw7DYN1N7pJam+Pk6dNDE6V7PKOEik01sKXjNVt6HT4VboRT6war172JUTlxkTYTurkkp9lAHwg9mFOR55VRTZw47WYyGfXzbVZ11eb9g2Bwf4OKKSs2K/WBaMxC0dqK0k3XKc9QPd9UWRl6VQ1tIM42Ue8JjIv12Q6OIRtX+VPqdLO+bOAJtZOmWE3EuoLA6mDiGtolp6fF0pO7n5UOmmusgeK2iTvOfj5aZ6Ne55BTY7w0llmVhs0hmBrzcFE6cIOhZNsdQuidHdw9DIt9O/HRfdD3+6SP9iY2sLuhsD9YbJA59Lw3Z3m3Pze7MWPHprPS/XaYsSKQc+TsEqCFfUNA39yUo6hRNdXhVIg7KUovl/dg9DrwuphIPAXcx0hH98KYnOQygzEbbbGCmDlaDR2rMGtSa/q7wwl0QacwIcXNcDSAt7uJ9JBp3ag5lOumHxJ5t7Ng/LjGZ8/qQ7rbqARb6ttPX/mCskidj78hRXgTvzt7eAfErrxDtgA2ra9bK1fla+9PK/hZfzb/jGp6K02yYiGTeWuzoPwjYxjyhx/u/kPhn9PnHe3PC/6s/ye//MV7yuFif+VBjsdCpKnsYUfG2mbj5bfBnt3Hj9PdZdzwJIJOvzVfV25x+fYnz7uqwxc94wj8WcWXf59T++uf1/y26geKysLXaL+0Pnv8+vuCIdY4UrjEwiYaxTOQQi+1RJOKWWw2IfvN6S33jc6WlfbIRkKxaC31fjEpnsywpM5VNUFspzBsGgaReAaCP46s+0HeurHZUj+gK4lbNeYMmS3bEAzy9+hIQrZoPO0ATdns3Flm4qS1ygzykkKe5KQQgSoUoSCG+PJQ3tEsWrtMgIaQDEAVEcReYh18Fns1E6bsqNm+cMsn6WGC0WRqaEaRqbB/KhvZBtFc3cXxvIGdZMQ2ClphPZSsMWGJYzpNR6cjy2FjpzGYDdjB8R/AyNDajJf9wK7aHzUDzFsgWBq8xDFYqVUk7gjvw+yj2i1XFMkBQKnTneueMgSCMhkfDwhwGSSK3RMxELp03AOU2W299I0bdu8zeKZTupWBQabY3U1Gw0Np9zrxBgenKbNC6qkP29loB3N041KvHjiWTlAd1AlVwDnAxEIano0uvYQHZoUhJB1Rue2t72nAquibPdzSMLw0MxNHBsyvmKEkJZLEiNAKlKDGibSaTwKbzG6UMUvbvpfhiYkI9L73uGYyKNRdMR2m1BAUAzPyjqLZ4G2xO5eBIzOxiIjUkZVCHR5zz+ZVIGNeg1UMWVDH2JXF4HeaIQyvTRvTl3mlZIqDvbyLvvFrqwDtpdiNBHa8nluvZsMBpoFx3jeDLs2B8Z71xhs9NUI4Ma3bVLzLZjWzTXy7LaJcaSmzvnVQhkgClRtoCpOANe6GdOEyCeL1Hmwc1L0/hJos+gqnprZKzyCLKzP3R8F4wsOypqKwc+kqDrJyIMXWOGZeppRIiEBglj/XRCGrdhKuiiLdG4hOBcb4VXYJ5EzgU9X2rFiH3vn7v5EvUPx5R/Md5fDvo86v/v7jP7u2Fp+qLlV5viMZxU1wnm/n3OXi/Yj33IZRlheFOjeRBnSV+fVOeQPgfbmtWT6A5PugS3GNWIj8FilKj/LXyShBC8wyYG65OSnFEStZLh0KoAp6zxFkjhniDEH+32aQeTFzuRZJf5zWJFYpcqvyYFAGCVYWevTwKUqVxWTyycY/yMTP6qK7yX1YgpGvnaWbyppOp7B9Su4lrWiXIpqG0FoYFUsOQAlMuAAtdYF00Xs7ej2dVhlktIA7Jueh8q9/qRIq9X45OS84T/99LOeWxM+PLGb6RG6shXZmR/XgRiKHmHqJKh3XkirsUNRP43KxgshSPRWduh8PChLxxOiNKI41pxZB97GhIuJkYD5iWdlw0r69fffNN6P5fueOERVaE5AWC4NAUU+sDVu5QEdAU/MHFV+FIM3aayjLYekibBgGhIUo7EIhi7UC714tkEZ2SJPEI12LNIxuoAtVAjC3gCZwusxXaF6NXMK8SXdUatvzyZY2mz03wcokDqE2li6kM+ES/1G4SsoiX3rw0CtL/Atmh8hAgCmFPic49ce1sJArL4tao8guiRZTHUwj8BcaTGSlSqSdlyAQ5apHJEHsOju4f95cJHtyW6BRt9XqjbwA1AFdEAe/UAhj8QWAm+kHWsJbXpK8fXB8+XgdjfZYbapnJwtTyyODqiR7B3fnqSDjRBVZxmQFyoKGfSpQvZoRQjC+Dqd5PrFRDkqqPuI6J+iza4uoSsrLECKETYMFfETiUcHtwT7CbYXeNWvgmO59X8xsRoQuaZWM/NPZhMUxnQFQwVb0zu4sqdWovQMQcMBedtHEMagiVlNRfyeSBTpW6g0JZlltZlda+zDM8prBVzM9kNSI+nhgrBMDbkxBZYWZDhCEiGDclkH+2Cb7PCwkDFW0+6hmt+kHhcEILHORDzMg6ZfSh0otFKeLeJ1BG0prC+hPaCd39NIsizGdfNjnA0cHOzcogZoG3x2h8uVcM46zVbvPb2BeSKr5TsotLVNerjKsK2vYWPBArQmBw+uizWZ0Mh0Yi6gatBXuJ6xuRybXiGiX7Mz4eWpwI4xnkOzG/oV5jaw5yvWBvlbw5Nhgc3hsn5qFvrJUuInym2xzosPSJsMYCgBNGCKgGbkluuxNQmVR2paHdT7wGK19hUcGt3stY38LGSpudUUIHAF73HxUkXdzvh7ww2///9enTj/6H/83/UbimIHnSkKxVgRCYzb6dbFk29jmyXIGeo2IQg4T9DWQVEYjcKdaLECR11ooNavR3sCp0NUxaCz7O9FiPE/a3vwMYm2ii36I5uZ4VIWMiw2oLJkyn8bd9Tqvtmz6WoFkr1eX6aRSRsQB1gblTQqq8oSebxxweUmBFkDqStSE1cpdkWqQ034ESXBWZa/a7IgTBTKrtk6ryWydww1ltBR4Y8uFQRer9n3O7ItopIcEHRazPYE4QhORn2tOt1k7jjN2NdAt2EsFix/NGSm4cn0wLUDPrEWvy4ZHPDHaXSSa7H+x61KaNy2GZwiErJDJl0AWe96obIXRg2ktBO1r5kLRWzFhCZ3WFqutjrOn2sfVytI/sBFHu9mQFvtzNVAMijZpJAMl1O2jIwdROGA+xEvKsbq9I2eHx8ET7excZkgB57NnTpbipgdVSz0WK+aSjtupDObR2w+cgN0aRE4SlBmZ+q39X1ee74jRH1Jfm0nFzT0gfuRXoAFbDapx1qoaZrykpqiDatghKtqWBBHbshl9iOymA0i1CbVA2SInCm7mmHMVRo/iK60obBtmFSImTaPq4c7xk/q133rzrtc+fA4f05nrT86v/pfwqn1MqvJm6Ru59P4505Qi8fJByn9WMlMu1yfb4l4d5Q0G3vz+vnhLkbdNxNn85HMHIj6NyGeFUEiDkJV9jTPsasVnr/PJ69EC28Bb8LaphantRG0fhve/ymdS/ahV9kNV2U9Tvbje56vQvcaCNyEnZgQz1M9gs/nsm8fr+9RDtnlhrtmjk/7UsLH5kNhz+DObZ3f9rXUv8x16WS0GzO1AWbubFfXqt3uL5sRHtKTWtzvaGnf6Rg9VVYG/sxW5LL3HPe+RVxVK/RG+CXD47Idrv1+cnV68eLND08u3X/ch95CKazu7y7ujy+cvCoGmXAy1ltUfz3S610e6gHC2cDmdVrEN/zBLu/nPX80ImBvTasvdmZwSN1A+iKAD8ogwUtXTJ3xV9lOt6amYFgIHG6qxumGTWKxchYqoCwMT5mCAsQhFjsAFUNpxgN18E0hPxGNPNbD3Kt71yfEvlhS9HjVwr7X/+Wl/Xz6X+Vp9hM/0BF/Ujnfn2Dz4uny8QUibeJHL7/cXW1UDx+zdG671K7ivzeu+H1KZagdx35W7yqu55Hq329acPXJCsP/tzF8R50mrlhFSLs1By9APFyZw/I2x8KAz0rgMuwWqeuiTthZBxMwFJfhoQGiAq3So+CQE9jjVMqEerqnDICdRADYUYMLYkKf1fae7xh1vr/LYx1EVNVoXx23sNYUmwRYMM2JLKSxBqRCTXkKSUZopxKzmmKbZiFWmwCOv/a8zt0qof/7NIcohZjA0Zbr0HmgTC2+TnWzi9ZjOG2zkOFKdV2CTVwyLdAFVM7OmRgEvLS+tUIIoJ0fOfmkKueQyn2LzNFqaKqSqd6fCbynA4jw6Pjtq0za3k9eD1wrsr8DyQO7buqiUypsc+9PIpksVKntVo5byvaItB1qfoFSVyqC23SRf2DSrD+gld+RYfgcyv2shcKnt7hEOu6bMkbt5HL3Vd8BS9VtoYJ1q2BUu+KLA5xTzFPPVeqpnWPg7i8wc9zN4RccU9J7yPEs0X+XNpDE9lWU2S5wDywoZ7aS43JibO732alM0YTS5tI6iLuDqA3Fz92xMDtWU55ghGmlaNpUd55jou6NCa9UTtCzdOhGWnsppc+DCiCcchkobsr7FeblzNIeUY/nIbBNPaL65hLOqoQh4K5xJ87W0fvPg+OGjxmoamKY2t4b6Z/cVyUUNG046bo+E3NfqoZhSmF78v5HY+SbytZZXK2ZLoltonjmvuNtSt4hfyrXiEUXQpmlbwkg4O65XwEWGXe0Vbf76OLJ6Oc5eZWBzKzhGmMaFgt1Roka5kFkDdFy77LYFJPBiNk5xLW2loi1xAH4plPoIiQ0hkz+mKZcpDCSLRgCq9kIgwVyobUCv9Wg0xbrlkYo9JlHTl6HaOFXi8E+sEiZ6gvHeGdN9ZntsImD6a2Beb1sbjrYFByIwTp1qwdsP6xQrKLPJhTPcHyLVaDexnywKzWax5nBHffYKNFlMHybOx47j0ojZgtRai853QL4JPPDMA06tJXLxhI22QO+hZkJxPV5y1DaToCpxbaPhq0GZmqFcL7ZR+8yAyfbPN5El9lJDEwyc52O9wWnDJXmIqu7PvHvW3Nvd6dvtuvgQwesnfsmHsDG/vNwkDreatod0NEWhLVYIyTuMQnrHXtOWRSMoUdXf6ev3cAzbXcHHufS8Ij6Y/HeVrMUAuBQ95U4u79xSqo1Ao1WRCa9gGfK+txsYnna+ORGs15x4liWD65OjgE7y65CPo9Z+owlaCRXB6VacydVsH6bCVtPllY+9JjQT1ahpY7d7LLm+Gct3kKlighgHLPUmleDdQgqAxjoVKq1E2hn2tN48o86/Trp6GEK0qceMnc+8lb2tG/9ouQi6Zxz+dfggvLBSBUWjeZ5OKbJSVpgnmvIkItQ2ARVOj5vB4pPSXsaX4CXvCqevSt/eT+Cpovkk+sA4kQE0TruNV2K+/rmX7+Er9PTDDYGKZ56q4gPXo0+nhyj2VJVFKOJCuybNKmpnnDJT3v2Y7siqbfvXs8wDThCyG49wVtwRwJv7UZd3QccMlfi85JbFXtjPb+gdO586PbtwU+8TRxr0ldiYNZtqRRFqWmkXXDJL3tOYHshJO+8/XWaeNy7Vqb2M9g83OI6+Qj9Shy/hWGMt9WiI23J/ejxBnSnHVAG0N/F29pNyo+qMcamTjFWg3M+zua5W1cX2/H3yrfyRV7XX9r/61kV/qYtF41c/HPl75p2KdTVQX+X83+wYU90/90Oh/KUW/knuih2Ss+ZEPCyq0MZVOZ22JxBRiaTdjzyWOD9gsi5vZb3yAvcBOh4rNjeL9+jMuvb1rt8lB3jCV1WNOEqxf/L6ybStM2v5WprcRto2vfbGXdbA7O7bBEjx1/zkXmXumkd7aZqXZHxluFcPBSP32mX//YPMGz4uRDNfjOzQSxzF5crbtcR1asu/YTbBq60Rt3kHpJDbfxI6KMq53nZvar16uH/XXHy15sQ7+YPHyHezefjfH6lp4g4EPfvy+h9eHOx96XX3ykqp065mm0+vSWHu8jamuR8SXT2eDiDTpLm6IqSO4HxjUzoBCMvMUseq1m7gYhxpHdaiWBn6Lywd+EUcKnd8rV2xdXj66HHC7WOmrc3j9QtrNBc3Yjx1GdxAgokkW1hakDXKCfpG6QdTw8dgm6XcY6qyAn2smKzgIv1WckvXsIWxrGPbQpfYR5hzHa76TObcafh8medCZGbSXSLtxWwl5Y+BVUsOzmFaPF3W7w+LeUuL3UuznYFcAXW6hLvEdcYqtuDETLUp+iwr2wkO2gjAqeBtxZ2tjRIfQeTsioBwsq7vNkq0Fqv1gYAKs4cGh3ncaNFChPpQ+tilQvhcEdeUZvWFm9GRJBdnnUhAeYgshMLeSS4pOmQvTjGQcTZFXs/dZfVkFeuFWptzPHYn0T3+1JTtVu0s8g0NzHr3oPnn780vvqmCkrdh5QGSUnXF8jS2x54iZSGWaSIEvHkpU2vK2pInvyIUtK9c62QzTGXlgDGNWqDO0Cd6ulljbcYRYNLVCaUoNiUXTSUcvZrD7tJvTAXp2GEW2UvJ/LWuuVUVdW0URXYRM+mJo3n9BwEGzCLXTHXpIAwrnKYvMvk0uSB0s2NOLtRI1mEtj99LMnDxa3s77vmlMCMp11ZP9k+HRzC4mFXl3IJ0uMeoc2bhcQ4MewcKMTRc4UfoGHPegEOuJIt26EsLOpjC1U+Zvmnia3uuoAlrFQdPnpR5QT04Am+aoZjqtuw25xPU3Eh8u+SmvYh36o6meS/U0nyQOl+Ju7V2LDshw7O2iceX6PAcfgjpWlkdnj94+PTZ6kTz9n75bbprPxW7gaUY0Oylmi67ns6wbZN5Taomq3loR9m3npqbpQ5X3PDTKi+kxXZfe8XDdeYZzGFx0sTJ02eN3Yjsc06HL/Cww8ZrsMB1bc2k1KGNjaVh6d5FCkwNY4y5KQ3x4n0ktLT7xIXnelK0s9k92w3YhmIcHYK7SXWG7ndVs+1oOhdTV5wdXqhYZZ/rIi25W2zCS8bSBsmrhAh83vLaOiqR5ipC4rTeJeGvT0W5NTFt9ERXHVFU8eDpSY2l3zhkm8zU5nZVPAA0W1Aknvy6VreVHU5ntJJiGp27DWm7soVvWOItb70G5T/QMqTSZyzfg0V3UQvE/OqVKBgf8vV/1HxyZaIsK4oqcOCeo2bKHNHIL5gq07spfIc3KS0pMRvbRmJuIbyHA1WeQ6xUNm4OISGtq7VYV1kWG5n3P0VBHISZzFENFYJxQLUG6/YhJl3bVAyOIUREU97wZrUXx7pOwyX0ievaYOVhhVXhvPM0vyZrhQ/lVZcB0/NdxcktFhzL5rBB5xDHx32OhmMt6/nsvC9ux1SVa07Ur6aad6746gdYeDbbX2uKEolVli+UQqaGT+wlr5GQcBuZ5jHNc9L7Xkwv6HaYSi6zdwK+JjOz1sHD0I9N4zGU0cTzLUMrGiYvxcP0SV4Y25LcQhEvxHYEfPcRVR67l8c4LuOuNdOUJ5fRRaDL8J3luRzks5lk57WCrOnVOXAd8uBCrgHmqZnGlZMKXpWXUKU4N1kuleLsmkaFDIfyqqfKThmGDU3aCwWqlcgRh4asvCi06m1jZlboAahWrRfKJVEak052YIDJWSvrUHlI6aq3KjAzShfpAYJuc9YmlfUkl0DxR6x/O9cvLQvx9fnSy5qkfZk+IUvcs9/rwI02K8Cy4fPF0nY89mImVRA7MCs0WGUWc7RfeglYi5xcR8xKaXIfrOuAMQ4gODJH066e4lyf/CEknTNIVDxZ7jBw/o4OmChkjoH3p0/VGF0QPuiOyf41Rh//oAtR3Y4t1oUvgsGiaGrJx+bKj6OwuHeN9LAeRkLKJD0o0eUss+YH//n+16fNyxo/76iiRTC8Ijf/JEcts/bq7eWvj+dq+pPwSdPXbf5RptTmPKJ6c0N9du8ylb84Oi1A2ihBuW7AolXj1r9O9Id0IuLF61++m/6bEV3ELf/WB2rwuePvKrzhTvNOFeTqJBDMr8PdLID65L8+0D7xh2rt/mtaf/739J49QLoNpMmguvzfN1fK3G2tcOwbwucP1qRixxl30wAO//sUcoOcDhKWeHChKKoSAW6XkObvKLxm+APj0BfN0QU5mItU5UbMNPcqq7lVnmIrNr6HVU7UJu8Lb/HTbm+L59yYGjuNSP2YcxVVppvf/E18rKDLMVqtCRGnK+0ZMf1MaLsstQn5ycY8Z/oIcofJzKVO8wQ4UP9CbJGptJS5qia0uGbKXCDWBuUDt85xKwXbXy4zUyluqDtsIcqx3lqkCBCtKKwrrobI5CVZzfVoQAi6nqNIanFZGkqXhXJMYaOKopbt7BbrM+oXWNfRtLEce5kGL0Ld+knGadYmrTCsovXb3bByl9XzwgcNemzOyPVjLt8V5DVVFxwE5BpBV5GtxggJlu9I7bU9Jch9TG6E06veel4Vco1eHZFKJl/nJ19aV+scbdsdz20bSbK3zdYdCUFuLlMI+fdU+nbEqdGueE4tCKeii707EQR6Ekt10mDbbmlQVz1StHUnMi8ymmYgZKdzpPJd4sDC1l2CwhVOee29MgDtjbcFaZO2gP82JJszZPrsYM4SV+agPgnADdILII0AsZfzvdzvAM4C9nZCUHeY7t9Aeq02lnU+Ck1aHNS2GOgEy5yTu+PdjnEgjxWYsT2Y16l+4PdJttX6eLb1nQ8kYFoFTM5LgvaRwfr5Bg4qWABiCEgVyC5mBwEGEwQBzjhMBQTliBOQ5KJKQFGMfgEtfM0LGJrpII/1ZwkizFOGIMogzQh4B9OWsEguywhLCFlbuA6fffkbfhFPbC0DhZyCLF6CdHyReCIkUZRhMi0F8uQrwaB+HGHiRPo5+7g6uIhH7sJYGMCuxiZgnPYf8oLdILcym9nczmRjKXOLEZbXDpoEZ/T1RcBiysYtSsFTEKMZKxvBIhcAZZ6EAkJdbD3ZWfHSoHSeDpHO9Il4qEcwIFrYTZiGVXGIgrVwXFA03KplNYXNmpmZg45rCPOAscgBJSP04V+wRPq1HAVnXARcwnKDECUWQvvTZGLCc8ItD59Y0nynZJPp+YRYMqGYew6seiOotH7cwUTK41EKtPOmUIMNitMI5g9JqbmhqQhzoqmVeYl4qLWxUGQ/eVyJuy5zPduKTQx/R/+k/26T04LDub8DkSD41MPSMLBTB6GiLA7PRN8EuzpMMCxNFJvYRvMRkCSOTgFtPGnSZciUJRuTkCPX8JiCqT7SEhZXxrKq1UzKo38yew4oHDmhoqFP+yLNhetUgSbugYnFkxdvbD58+fEXIHAyH09gIUCPfAXOa7ClUIUybQb1LiQotS5PrXKNil31RLshuDejliw4IUSoKmFu4Fp03R033XLbW+GWJ0qy7hie/1Rfe8UDEd75W4moB+NasWLE6RQv0TUIzzZZkhSptqU5LJ1QpgyzumTLkuOI9/5xxriTzlq1FigIDWEgLISDRP5K63PBQ+KQREiGVEg7ZdKMU+ZMmXZNkeEl45qLSzbkbPCjkDyKF5OeEHHo1NoAnRwXSSDYETwf+8UGBALB/5C/gb+hP9HfyN/Y38Tf1N/Mzy78EOG6h3DhkbxkPjeMI4goJhpQoLoRBeGQzI/fknNs5Flop0ChckDnGDf2SQiq8DlJmYyDflzChz4u4xEV5/jsG0dNYmEcYByu6DAO17EfRyo6TMAtYDoZHhGG1MuAxlHneUwQipdzEk5JYTw6BeOW5bB1zgBU9g5YmfiMy+gAyE8XIgEAAAA="

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

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

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

/***/ "impR":
/***/ (function(module, exports) {

module.exports = require("downshift");

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
//this is client side config ony. don't put anything in here that
// shouldn't be public
// export const endpoint = `http://localhost:4000`;
// export const prodEndpoint = `https://sickfits-yoga-prod.herokuapp.com/`;
const endpoint = "http://localhost:4000";
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

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z93d":
/***/ (function(module, exports) {



/***/ })

/******/ });