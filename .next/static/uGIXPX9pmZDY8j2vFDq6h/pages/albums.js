(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{CIUX:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("vOnD"),i=a.a.createElement,l=o.c.button.withConfig({displayName:"Button__StyledButton",componentId:"sc-1teub9m-0"})(["border-radius:5px;cursor:pointer;transition:transform 0.3s ease;&:hover{transform:translateY(-3px);}background-color:",";color:",";border:none;padding:",";font-size:",";margin-top:",";margin-bottom:",";margin-left:",";margin-right:",";"],(function(e){return e.danger?e.theme.red:e.theme.blue}),(function(e){return e.theme.offWhite}),(function(e){return e.large,"10px 20px"}),(function(e){return e.large?"2rem":"1.6rem"}),(function(e){return e.marginTop?"".concat(e.marginTop):""}),(function(e){return e.marginBottom?"".concat(e.marginBottom):""}),(function(e){return e.marginLeft?"".concat(e.marginLeft):""}),(function(e){return e.marginRight?"".concat(e.marginRight):""}));t.a=function(e){var t=e.children,n=e.type,r=e.onClick,a=e.buttonStyle,o=e.buttonSize,s=(e.label,e.marginTop),u=e.marginBottom,c=e.marginLeft,d=e.marginRight;return i(l,{danger:"danger"===a,large:"large"===o,onClick:r,type:n,marginTop:s,marginBottom:u,marginLeft:c,marginRight:d},t)}},"P+dE":function(e,t,n){"use strict";e.exports=n("f9Fb")},PMsv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/albums",function(){return n("jl0i")}])},f9Fb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;var r=function(e){if(e&&e.__esModule)return e;var t=s();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=l(n("17x9")),o=l(n("TSYQ")),i=l(n("P/eH"));function l(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(a=d(t).call(this,e))||"object"!==u(a)&&"function"!==typeof a?p(r):a).state={},n.onClick=n.onClick.bind(p(n)),n.onFocus=n.onFocus.bind(p(n)),n.onBlur=n.onBlur.bind(p(n)),n.onKeyDown=n.onKeyDown.bind(p(n)),n}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"onClick",value:function(e){this.props.disabled||this.props.readOnly||!this.props.onChange||(this.props.onChange({originalEvent:e,value:this.props.value,checked:!this.props.checked,stopPropagation:function(){},preventDefault:function(){},target:{type:"checkbox",name:this.props.name,id:this.props.id,value:this.props.value,checked:!this.props.checked}}),this.input.checked=!this.props.checked,this.input.focus(),e.preventDefault())}},{key:"componentDidMount",value:function(){this.props.tooltip&&this.renderTooltip()}},{key:"componentWillUnmount",value:function(){this.tooltip&&(this.tooltip.destroy(),this.tooltip=null)}},{key:"componentDidUpdate",value:function(e){this.input.checked=this.props.checked,e.tooltip!==this.props.tooltip&&(this.tooltip?this.tooltip.updateContent(this.props.tooltip):this.renderTooltip())}},{key:"onFocus",value:function(){this.setState({focused:!0})}},{key:"onBlur",value:function(){this.setState({focused:!1})}},{key:"onKeyDown",value:function(e){"Enter"===e.key&&(this.onClick(e),e.preventDefault())}},{key:"renderTooltip",value:function(){this.tooltip=new i.default({target:this.element,content:this.props.tooltip,options:this.props.tooltipOptions})}},{key:"render",value:function(){var e=this,t=(0,o.default)("p-checkbox p-component",this.props.className),n=(0,o.default)("p-checkbox-box p-component",{"p-highlight":this.props.checked,"p-disabled":this.props.disabled,"p-focus":this.state.focused}),a=(0,o.default)("p-checkbox-icon p-c",{"pi pi-check":this.props.checked});return r.default.createElement("div",{ref:function(t){return e.element=t},id:this.props.id,className:t,style:this.props.style,onClick:this.onClick,onContextMenu:this.props.onContextMenu,onMouseDown:this.props.onMouseDown},r.default.createElement("div",{className:"p-hidden-accessible"},r.default.createElement("input",{type:"checkbox","aria-labelledby":this.props.ariaLabelledBy,ref:function(t){return e.input=t},id:this.props.inputId,name:this.props.name,defaultChecked:this.props.checked,onKeyDown:this.onKeyDown,onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.props.disabled,readOnly:this.props.readOnly,required:this.props.required})),r.default.createElement("div",{className:n,ref:function(t){return e.box=t},role:"checkbox","aria-checked":this.props.checked},r.default.createElement("span",{className:a})))}}])&&c(n.prototype,a),l&&c(n,l),t}(r.Component);t.Checkbox=h,b(h,"defaultProps",{id:null,inputId:null,value:null,name:null,checked:!1,style:null,className:null,disabled:!1,required:!1,readOnly:!1,tooltip:null,tooltipOptions:null,ariaLabelledBy:null,onChange:null,onMouseDown:null,onContextMenu:null}),b(h,"propTypes",{id:a.default.string,inputId:a.default.string,value:a.default.any,name:a.default.string,checked:a.default.bool,style:a.default.object,className:a.default.string,disabled:a.default.bool,required:a.default.bool,readOnly:a.default.bool,tooltip:a.default.string,tooltipOptions:a.default.object,ariaLabelledBy:a.default.string,onChange:a.default.func,onMouseDown:a.default.func,onContextMenu:a.default.func})},jl0i:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("h4VS"),i=n("ttZb"),l=n("nOHt"),s=n.n(l),u=n("LIIV"),c=n("Cs6D"),d=n("tXQo"),p=n("KzMt"),f=n("obyI"),b=n("tFvR"),h=n("uRGP"),m=n("w3mf"),g=n("U2iw"),y=n("vrjE"),v=n("HfL/"),k=[{label:"Title, ascending",value:"title_ASC"},{label:"Title, descending",value:"title_DESC"},{label:"Format, ascending",value:"format_DESC"},{label:"Format, descending",value:"format_ASC"},{label:"Release Date, ascending",value:"releaseDate_ASC"},{label:"Release Date, descending",value:"releaseDate_DESC"},{label:"Record Label, ascending",value:"recordLabel_ASC"},{label:"Record Label, descending",value:"recordLabel_DESC"},{label:"Catalog Number, ascending",value:"catalogNumber_ASC"},{label:"Catalog Number, descending",value:"catalogNumber_DESC"}],_=a.a.createElement;function O(){var e=Object(o.a)(["\n  query ALL_ALBUMS_BEGINNING_WITH_NUMBER_QUERY($skip: Int = 0, $first: Int = ",', $sortBy: AlbumOrderByInput!) {\n    albums(where: {single: false, OR: [{title_starts_with: "0"},{title_starts_with: "1"},{title_starts_with: "2"},{title_starts_with: "3"},{title_starts_with: "4"},{title_starts_with: "5"},{title_starts_with: "6"},{title_starts_with: "7"},{title_starts_with: "8"},{title_starts_with: "9"}]}, first: $first, skip: $skip, orderBy: $sortBy) {\n      id\n      title\n      recordLabel\n      releaseDate\n      format\n      catalogNumber\n      single\n      artists {\n        id\n        name\n      }\n    }\n  }\n']);return O=function(){return e},e}function w(){var e=Object(o.a)(["\n  query ALL_ALBUMS_BEGINNING_WITH_QUERY($skip: Int = 0, $first: Int = ",", $letter: String, $sortBy: AlbumOrderByInput!) {\n    albums(where: {single: false, title_starts_with: $letter}, first: $first, skip: $skip, orderBy: $sortBy) {\n      id\n      title\n      recordLabel\n      releaseDate\n      format\n      catalogNumber\n      single\n      artists {\n        id\n        name\n      }\n    }\n  }\n"]);return w=function(){return e},e}function C(){var e=Object(o.a)(["\n  query ALL_ALBUMS_QUERY($first: Int = ",", $skip: Int = 0, $sortBy: AlbumOrderByInput!) {\n    albums(where: {single: false}, first: $first, skip: $skip, orderBy: $sortBy ) {\n      id\n      title\n      recordLabel\n      releaseDate\n      format\n      catalogNumber\n      single\n      artists {\n        id\n        name\n      }\n    }\n  }\n"]);return C=function(){return e},e}var j=Object(u.b)(C(),f.a),I=Object(u.b)(w(),f.a),S=Object(u.b)(O(),f.a),B=function(e){var t=e.page,n=Object(r.useState)(""),a=n[0],o=n[1],l=Object(r.useState)("title_ASC"),u=l[0],O=l[1],w=Object(r.useState)([]),C=w[0],B=w[1],D=Object(i.b)(j,{variables:{skip:t*f.a-f.a,first:f.a,sortBy:u}}),E=D.loading,L=D.error,N=D.data,x=Object(i.b)(I,{variables:{skip:t*f.a-f.a,first:f.a,letter:a,sortBy:u}}),M=x.loading,P=x.error,T=x.data,$=Object(i.b)(S,{variables:{skip:t*f.a-f.a,first:f.a,sortBy:u}}),q=$.loading,A=$.error,R=$.data;if(M||E||q)return _("p",null,"Loading...");if(P||L||A)return _("p",null,"Error :(");return _(g.a,null,_(b.SelectButton,{value:a,options:h.b,onChange:function(e){o(e.value),s.a.push({pathname:"/albums",query:{page:1}})}}),_("br",null),_(c.a,{options:k,theme:y.a,placeholder:"Sort by ".concat(Object(v.a)(k,u)),onChange:function(e){return O(e.value)},isSearchable:!0}),_("br",null),_(p.a,{page:t,model:"albums",letter:a}),_(m.a,null,""!==a&&a?"#"===a?R.albums.map((function(e){return _(d.a,{key:e.id,album:e,addToCheckedItemsList:B,checkedItems:C})})):T.albums.map((function(e){return _(d.a,{key:e.id,album:e,addToCheckedItemsList:B,checkedItems:C})})):N.albums.map((function(e){return _(d.a,{addToCheckedItemsList:B,checkedItems:C,key:e.id,album:e})}))),_(p.a,{page:t,model:"albums",letter:a}))},D=a.a.createElement;t.default=function(e){return D("div",null,D(B,{page:parseFloat(e.query.page)||1}))}},tXQo:function(e,t,n){"use strict";var r=n("ODXe"),a=n("h4VS"),o=n("q1tI"),i=n.n(o),l=n("ttZb"),s=n("LIIV"),u=n("mVCd"),c=n("YFqc"),d=n.n(c),p=n("3Mv1"),f=n("CIUX"),b=n("oTOh"),h=n("P+dE"),m=n("vOnD"),g=i.a.createElement;function y(){var e=Object(a.a)(["\n  query {\n    selectedIds @client\n  }\n"]);return y=function(){return e},e}function v(){var e=Object(a.a)(["\n  mutation($id: String!) {\n    addOrRemoveLocalIdSelection(id: $id) @client\n  }\n"]);return v=function(){return e},e}var k=m.c.div.withConfig({displayName:"Album__StyledFooter",componentId:"f8g7qf-0"})(["display:flex;justify-content:space-evenly;"]),_=m.c.div.withConfig({displayName:"Album__StyledFlexStart",componentId:"f8g7qf-1"})(["align-self:center;"]),O=m.c.div.withConfig({displayName:"Album__StlyedFlexEnd",componentId:"f8g7qf-2"})(["align-self:flex-end;"]),w=Object(s.b)(v()),C=Object(s.b)(y());t.a=function(e){var t=e.album,n=Object(l.b)(b.a),a=(n.loading,n.error,n.data),o=Object(l.b)(C),i=(o.loading,o.error,o.data),s=Object(l.a)(w),c=Object(r.a)(s,2),m=c[0],y=c[1];y.loading,y.error;var v,j=a.me?g(k,null,g(_,null,g(d.a,{href:{pathname:"/updatealbum",query:{id:t.id}}},g("a",null,g(f.a,{buttonStyle:"primary",icon:"pi pi-pencil"},"Edit")))),g(O,null,g(h.Checkbox,{onChange:function(e){m({variables:{id:t.id}})},checked:(v=t.id,i.selectedIds.includes(v))}))):null,I=g("span",null,g(d.a,{href:{pathname:"/album",query:{id:t.id}}},g("a",null,t.title||"no title"))),S=t.artists&&t.artists.map((function(e,n){return g("span",{key:e.name},g(d.a,{href:{pathname:"/artist",query:{id:e.id}}},g("a",null,e.name)),t.artists.length===n+1?" ":", ")}));return g(p.a,{title:I,footer:j,subTitle:t.releaseDate?"released ".concat(Object(u.a)(t.releaseDate)):"no release date information"},t.format&&g("div",{className:"format"},"Format: ",t.format),t.catalogNumber&&g("div",{className:"catalognumber"},"Catalog #: ",t.catalogNumber),S)}}},[["PMsv",1,2,0,3,5,4]]]);