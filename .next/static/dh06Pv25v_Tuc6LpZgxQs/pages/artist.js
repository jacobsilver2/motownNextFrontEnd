(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Mv1":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("vOnD").c.div.withConfig({displayName:"cardStyles__CardWrapper",componentId:"sc-12n0701-0"})(["display:flex;flex-direction:column;background-color:",";transition:all 0.3s ease 0s;padding:20px;box-shadow:",";text-align:",";.title{font-size:2rem;font-weight:bold;}.subtitle{font-size:1.5rem;font-weight:lighter;font-style:italic;}.content{color:",";padding-bottom:10px;flex:1 0 auto;}.format{font-style:italic;}.catalognumber{font-style:italic;}.publishedby{font-style:italic;}.publisheddate{font-style:italic;}.releaseddate{font-style:italic;}.recordlabel{font-style:italic;}.additionalinfo{font-style:italic;}.alttitle{font-style:italic;}.publisher{font-style:italic;}.publisheddate{font-style:italic;}.instrumental{font-style:italic;}.fromfilm{font-style:italic;}.footer{border-top:2px solid ",";padding-top:20px;flex-shrink:0;}"],(function(t){return t.theme.lightgrey}),(function(t){return t.theme.bs}),(function(t){return t.isTitle?"center":"left"}),(function(t){return t.theme.black}),(function(t){return t.theme.black})),a=o.a.createElement;e.a=function(t){var e=t.title,n=t.footer,r=t.subTitle,o=t.children,s=t.isTitle;return a(i,{isTitle:s},a("div",{className:"title"},e),r&&a("div",{className:"subtitle"},r),a("div",{className:"content"},o),n&&a("div",{className:"footer"},n))}},"6H41":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artist",function(){return n("nurw")}])},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},VUBQ:function(t,e,n){"use strict";var r=n("vOnD"),o=n("q1tI"),i=n.n(o).a.createElement,a=r.c.div.withConfig({displayName:"ErrorMessage__ErrorStyles",componentId:"sc-15nap07-0"})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]),s=function(t){var e=t.error;return e&&e.message?e.networkError&&e.networkError.result&&e.networkError.result.errors.length?e.networkError.result.errors.map((function(t,e){return i(a,{key:e},i("p",{"data-test":"graphql-error"},i("strong",null,"Shoot!"),t.message.replace("GraphQL error: ","")))})):i(a,null,i("p",{"data-test":"graphql-error"},i("strong",null,"Shoot!"),e.message.replace("GraphQL error: ",""))):null};s.defaultProps={error:{}},e.a=s},YFqc:function(t,e,n){t.exports=n("cTJO")},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("a1gu"),a=n("Nsbk"),s=n("7W2i"),l=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var c,f=u(n("q1tI")),p=n("QmWs"),d=n("g/15"),h=l(n("nOHt"));function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new Map,v=window.IntersectionObserver,y={};function b(){return c||(v?c=new v((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(c.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(t){function e(t){var n;return r(this,e),(n=i(this,a(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:m(t),as:e?m(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,s=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var l=window.location.pathname;a=(0,p.resolve)(l,a),s=s?(0,p.resolve)(l,s):a,t.preventDefault();var u=n.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return s(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,p.resolve)(t,n);return[o,r?(0,p.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&v&&t&&t.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=b();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();h.default.prefetch(e[0],e[1],t).catch((function(t){0})),y[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var i=f.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),e}(f.Component);e.default=w},nurw:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("h4VS"),a=n("lTCR"),s=n.n(a),l=n("ttZb"),u=n("VUBQ"),c=n("vOnD"),f=n("YFqc"),p=n.n(f),d=n("3Mv1"),h=o.a.createElement;function m(){var t=Object(i.a)(["\n  query SINGLE_ARTIST_QUERY($id: ID!) {\n    artist(where: { id: $id }) {\n      id\n      name\n      songs {\n        id\n        title\n      }\n      albums {\n        id\n        title\n      }\n    }\n  }\n"]);return m=function(){return t},t}c.c.div.withConfig({displayName:"SingleArtist__SingleArtistStyles",componentId:"sc-1t9u136-0"})(["max-width:1200px;margin:2rem auto;box-shadow:",";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;.name{text-align:center;}.details{margin:3rem;font-size:2rem;}"],(function(t){return t.theme.bs}));var g=c.c.div.withConfig({displayName:"SingleArtist__AlbumsAndSongs",componentId:"sc-1t9u136-1"})(["display:grid;grid-template-columns:1fr 1fr;"]),v=s()(m()),y=function(t){var e=t.id,n=Object(l.b)(v,{variables:{id:e}}),r=n.loading,i=n.error,a=n.data;if(i)return h(u.a,{error:i});if(r)return h("p",null,"Loading...");if(!a.artist)return h("p",null,"No artist found for ",e);var s=a.artist,c=s.name,f=s.songs,m=s.albums;return h(o.a.Fragment,null,h(d.a,{isTitle:!0,title:c}),h(g,null,f&&h(d.a,{title:"Songs ".concat(c," ").concat(c.includes("and")||c.includes("And")||c.includes("&")?"have":"has"," recorded:")},h("ul",{style:{listStyleType:"none",margin:0,padding:0}},f.map((function(t){return h("p",{key:t.id},h(p.a,{href:{pathname:"song",query:{id:t.id}}},h("a",null,t.title)))})))),m&&h(d.a,{title:"Can be heard on the albums:"},h("ul",{style:{listStyleType:"none",margin:0,padding:0}},m.map((function(t){return h("p",{key:t.id},h(p.a,{href:{pathname:"album",query:{id:t.id}}},h("a",null,t.title)))}))))))},b=o.a.createElement;e.default=function(t){var e=t.query;return b(y,{id:e.id})}}},[["6H41",1,2,0,3]]]);