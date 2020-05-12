(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"66DL":function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n("h4VS"),o=n("q1tI"),a=n.n(o),i=n("ttZb"),l=n("nOHt"),u=n.n(l),s=n("LIIV"),c=n("Cs6D"),p=n("tXQo"),d=n("KzMt"),f=n("obyI"),b=n("tFvR"),h=n("uRGP"),m=n("w3mf"),g=n("U2iw"),y=[{label:"Title, ascending",value:"title_ASC"},{label:"Title, descending",value:"title_DESC"},{label:"Format, ascending",value:"format_DESC"},{label:"Format, descending",value:"format_ASC"},{label:"Release Date, ascending",value:"releaseDate_ASC"},{label:"Release Date, descending",value:"releaseDate_DESC"},{label:"Record Label, ascending",value:"recordLabel_ASC"},{label:"Record Label, descending",value:"recordLabel_DESC"},{label:"Catalog Number, ascending",value:"catalogNumber_ASC"},{label:"Catalog Number, descending",value:"catalogNumber_DESC"}],v=n("HfL/"),k=n("vrjE"),_=a.a.createElement;function O(){var e=Object(r.a)(["\n  query ALL_SINGLES_BEGINNING_WITH_NUMBER_QUERY($skip: Int = 0, $first: Int = ",', $sortBy: AlbumOrderByInput!) {\n    albums(where: {single: true, OR: [{title_starts_with: "0"},{title_starts_with: "1"},{title_starts_with: "2"},{title_starts_with: "3"},{title_starts_with: "4"},{title_starts_with: "5"},{title_starts_with: "6"},{title_starts_with: "7"},{title_starts_with: "8"},{title_starts_with: "9"}]}, first: $first, skip: $skip, orderBy: $sortBy) {\n      id\n      title\n      recordLabel\n      releaseDate\n      format\n      catalogNumber\n      single\n      artists {\n        id\n        name\n      }\n    }\n  }\n']);return O=function(){return e},e}function w(){var e=Object(r.a)(["\n  query ALL_SINGLES_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ",", $letter: String, $sortBy: AlbumOrderByInput!) {\n    albums(where: {single: true, title_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {\n      id\n      title\n      recordLabel\n      releaseDate\n      format\n      catalogNumber\n      single\n      artists {\n        id\n        name\n      }\n    }\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(r.a)(["\n  query ALL_SINGLES_QUERY($first: Int = ",", $skip: Int = 0, $sortBy: AlbumOrderByInput!) {\n    albums(where: {single: true}, first: $first, skip: $skip, orderBy: $sortBy ) {\n      id\n      title\n      recordLabel\n      releaseDate\n      format\n      catalogNumber\n      single\n      artists {\n        id\n        name\n      }\n    }\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(r.a)(["\n  query {\n    selectedIds @client\n  }\n"]);return S=function(){return e},e}var j=Object(s.b)(S()),I=Object(s.b)(C(),f.a),D=Object(s.b)(w(),f.a),B=Object(s.b)(O(),f.a);t.b=function(e){var t=e.page,n=Object(o.useState)(""),r=n[0],a=n[1],l=Object(o.useState)("title_ASC"),s=l[0],O=l[1],w=Object(o.useState)([]),C=(w[0],w[1],Object(i.b)(j)),S=(C.loading,C.error,C.data,Object(i.b)(I,{variables:{skip:t*f.a-f.a,first:f.a,sortBy:s}})),E=S.loading,N=S.error,L=S.data,x=Object(i.b)(D,{variables:{skip:t*f.a-f.a,first:f.a,letter:r,sortBy:s}}),$=x.loading,q=x.error,P=x.data,M=Object(i.b)(B,{variables:{skip:t*f.a-f.a,first:f.a,sortBy:s}}),R=M.loading,T=M.error,A=M.data;if($||E||R)return _("p",null,"Loading...");if(q||N||T)return _("p",null,"Error :(");return _(g.a,null,_(b.SelectButton,{value:r,options:h.b,onChange:function(e){a(e.value),u.a.push({pathname:"/singles",query:{page:1}})}}),_("br",null),_(c.a,{options:y,theme:k.a,placeholder:"Sort by ".concat(Object(v.a)(y,s)),onChange:function(e){return O(e.value)},isSearchable:!0}),_("br",null),_(d.a,{page:t,model:"singles",letter:r}),_(m.a,null,""!==r&&r?"#"===r?A.albums.filter((function(e){return e.single})).map((function(e){return _(p.a,{key:e.id,album:e})})):P.albums.filter((function(e){return e.single})).map((function(e){return _(p.a,{key:e.id,album:e})})):L.albums.filter((function(e){return e.single})).map((function(e){return _(p.a,{key:e.id,album:e})}))),_(d.a,{page:t,model:"singles",letter:r}))}},CIUX:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD"),i=o.a.createElement,l=a.c.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-1teub9m-0"})(["border-radius:5px;cursor:pointer;transition:transform 0.3s ease;&:hover{transform:translateY(-3px);}background-color:",";color:",";border:none;padding:",";font-size:",";margin-top:",";margin-bottom:",";margin-left:",";margin-right:",";"],(function(e){return e.danger?e.theme.red:e.theme.blue}),(function(e){return e.theme.offWhite}),(function(e){return e.large,"10px 20px"}),(function(e){return e.large?"2rem":"1.6rem"}),(function(e){return e.marginTop?"".concat(e.marginTop):""}),(function(e){return e.marginBottom?"".concat(e.marginBottom):""}),(function(e){return e.marginLeft?"".concat(e.marginLeft):""}),(function(e){return e.marginRight?"".concat(e.marginRight):""}));t.a=function(e){var t=e.children,n=e.type,r=e.onClick,o=e.buttonStyle,a=e.buttonSize,u=(e.label,e.marginTop),s=e.marginBottom,c=e.marginLeft,p=e.marginRight;return i(l,{danger:"danger"===o,large:"large"===a,onClick:r,type:n,marginTop:u,marginBottom:s,marginLeft:c,marginRight:p},t)}},"P+dE":function(e,t,n){"use strict";e.exports=n("f9Fb")},f9Fb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;var r=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=l(n("17x9")),a=l(n("TSYQ")),i=l(n("P/eH"));function l(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=p(t).call(this,e))||"object"!==s(o)&&"function"!==typeof o?d(r):o).state={},n.onClick=n.onClick.bind(d(n)),n.onFocus=n.onFocus.bind(d(n)),n.onBlur=n.onBlur.bind(d(n)),n.onKeyDown=n.onKeyDown.bind(d(n)),n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"onClick",value:function(e){this.props.disabled||this.props.readOnly||!this.props.onChange||(this.props.onChange({originalEvent:e,value:this.props.value,checked:!this.props.checked,stopPropagation:function(){},preventDefault:function(){},target:{type:"checkbox",name:this.props.name,id:this.props.id,value:this.props.value,checked:!this.props.checked}}),this.input.checked=!this.props.checked,this.input.focus(),e.preventDefault())}},{key:"componentDidMount",value:function(){this.props.tooltip&&this.renderTooltip()}},{key:"componentWillUnmount",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)}},{key:"componentDidUpdate",value:function(e){this.input.checked=this.props.checked,e.tooltip!==this.props.tooltip&&(this.tooltip?this.tooltip.updateContent(this.props.tooltip):this.renderTooltip())}},{key:"onFocus",value:function(){this.setState({focused:!0})}},{key:"onBlur",value:function(){this.setState({focused:!1})}},{key:"onKeyDown",value:function(e){"Enter"===e.key&&(this.onClick(e),e.preventDefault())}},{key:"renderTooltip",value:function(){this.tooltip=new i.default({target:this.element,content:this.props.tooltip,options:this.props.tooltipOptions})}},{key:"render",value:function(){var e=this,t=(0,a.default)("p-checkbox p-component",this.props.className),n=(0,a.default)("p-checkbox-box p-component",{"p-highlight":this.props.checked,"p-disabled":this.props.disabled,"p-focus":this.state.focused}),o=(0,a.default)("p-checkbox-icon p-c",{"pi pi-check":this.props.checked});return r.default.createElement("div",{ref:function(t){return e.element=t},id:this.props.id,className:t,style:this.props.style,onClick:this.onClick,onContextMenu:this.props.onContextMenu,onMouseDown:this.props.onMouseDown},r.default.createElement("div",{className:"p-hidden-accessible"},r.default.createElement("input",{type:"checkbox","aria-labelledby":this.props.ariaLabelledBy,ref:function(t){return e.input=t},id:this.props.inputId,name:this.props.name,defaultChecked:this.props.checked,onKeyDown:this.onKeyDown,onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.props.disabled,readOnly:this.props.readOnly,required:this.props.required})),r.default.createElement("div",{className:n,ref:function(t){return e.box=t},role:"checkbox","aria-checked":this.props.checked},r.default.createElement("span",{className:o})))}}])&&c(n.prototype,o),l&&c(n,l),t}(r.Component);t.Checkbox=h,b(h,"defaultProps",{id:null,inputId:null,value:null,name:null,checked:!1,style:null,className:null,disabled:!1,required:!1,readOnly:!1,tooltip:null,tooltipOptions:null,ariaLabelledBy:null,onChange:null,onMouseDown:null,onContextMenu:null}),b(h,"propTypes",{id:o.default.string,inputId:o.default.string,value:o.default.any,name:o.default.string,checked:o.default.bool,style:o.default.object,className:o.default.string,disabled:o.default.bool,required:o.default.bool,readOnly:o.default.bool,tooltip:o.default.string,tooltipOptions:o.default.object,ariaLabelledBy:o.default.string,onChange:o.default.func,onMouseDown:o.default.func,onContextMenu:o.default.func})},tXQo:function(e,t,n){"use strict";var r=n("ODXe"),o=n("h4VS"),a=n("q1tI"),i=n.n(a),l=n("ttZb"),u=n("LIIV"),s=n("mVCd"),c=n("YFqc"),p=n.n(c),d=n("3Mv1"),f=n("CIUX"),b=n("oTOh"),h=n("P+dE"),m=n("vOnD"),g=i.a.createElement;function y(){var e=Object(o.a)(["\n  query {\n    selectedIds @client\n  }\n"]);return y=function(){return e},e}function v(){var e=Object(o.a)(["\n  mutation($id: String!) {\n    addOrRemoveLocalIdSelection(id: $id) @client\n  }\n"]);return v=function(){return e},e}var k=m.c.div.withConfig({displayName:"Album__StyledFooter",componentId:"f8g7qf-0"})(["display:flex;justify-content:space-evenly;"]),_=m.c.div.withConfig({displayName:"Album__StyledFlexStart",componentId:"f8g7qf-1"})(["align-self:center;"]),O=m.c.div.withConfig({displayName:"Album__StlyedFlexEnd",componentId:"f8g7qf-2"})(["align-self:flex-end;"]),w=Object(u.b)(v()),C=Object(u.b)(y());t.a=function(e){var t=e.album,n=Object(l.b)(b.a),o=(n.loading,n.error,n.data),a=Object(l.b)(C),i=(a.loading,a.error,a.data),u=Object(l.a)(w),c=Object(r.a)(u,2),m=c[0],y=c[1];y.loading,y.error;var v,S=o.me?g(k,null,g(_,null,g(p.a,{href:{pathname:"/updatealbum",query:{id:t.id}}},g("a",null,g(f.a,{buttonStyle:"primary",icon:"pi pi-pencil"},"Edit")))),g(O,null,g(h.Checkbox,{onChange:function(e){m({variables:{id:t.id}})},checked:(v=t.id,i.selectedIds.includes(v))}))):null,j=g("span",null,g(p.a,{href:{pathname:"/album",query:{id:t.id}}},g("a",null,t.title||"no title"))),I=t.artists&&t.artists.map((function(e,n){return g("span",{key:e.name},g(p.a,{href:{pathname:"/artist",query:{id:e.id}}},g("a",null,e.name)),t.artists.length===n+1?" ":", ")}));return g(d.a,{title:j,footer:S,subTitle:t.releaseDate?"released ".concat(Object(s.a)(t.releaseDate)):"no release date information"},t.format&&g("div",{className:"format"},"Format: ",t.format),t.catalogNumber&&g("div",{className:"catalognumber"},"Catalog #: ",t.catalogNumber),I)}}}]);