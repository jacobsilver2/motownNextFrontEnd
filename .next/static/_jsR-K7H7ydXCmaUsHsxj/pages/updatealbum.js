(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4kVR":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updatealbum",function(){return t("lris")}])},ODXe:function(e,r,t){"use strict";function n(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return t}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(r,"a",(function(){return n}))},VUBQ:function(e,r,t){"use strict";var n=t("vOnD"),o=t("q1tI"),a=t.n(o).a.createElement,i=n.c.div.withConfig({displayName:"ErrorMessage__ErrorStyles",componentId:"sc-15nap07-0"})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]),l=function(e){var r=e.error;return r&&r.message?r.networkError&&r.networkError.result&&r.networkError.result.errors.length?r.networkError.result.errors.map((function(e,r){return a(i,{key:r},a("p",{"data-test":"graphql-error"},a("strong",null,"Shoot!"),e.message.replace("GraphQL error: ","")))})):a(i,null,a("p",{"data-test":"graphql-error"},a("strong",null,"Shoot!"),r.message.replace("GraphQL error: ",""))):null};l.defaultProps={error:{}},r.a=l},lris:function(e,r,t){"use strict";t.r(r);var n=t("q1tI"),o=t.n(n),a=t("o0o1"),i=t.n(a),l=t("rePB"),u=t("ODXe"),c=t("h4VS"),d=t("ttZb"),b=t("lTCR"),f=t.n(b),s=(t("nOHt"),t("mzXK")),m=t("VUBQ"),p=o.a.createElement;function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){Object(l.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function y(){var e=Object(c.a)(["\n  mutation UPDATE_ALBUM_MUTATION(\n    $id: ID!\n    $title: String!\n    $catalogNumber: String\n    $format: String\n    $info: String\n    $recordLabel: StringA\n  ) {\n    updateAlbum(\n      id: $id\n      title: $title\n      catalogNumber: $catalogNumber\n      format: $format\n      info: $info\n      recordLabel: $recordLabel\n    ) {\n      id\n      title\n    }\n  }\n"]);return y=function(){return e},e}function w(){var e=Object(c.a)(["\n  query SINGLE_ALBUM_QUERY($id: ID!) {\n    album(where: { id: $id }) {\n      id\n      title\n      catalogNumber\n      format\n      info\n      recordLabel\n    }\n  }\n"]);return w=function(){return e},e}var O=f()(w()),v=f()(y()),j=function(e){var r=e.id,t=Object(d.b)(O,{variables:{id:r}}),o=t.loading,a=t.error,c=t.data,b=void 0===c?{album:{}}:c,f=Object(d.a)(v),g=Object(u.a)(f,2),y=g[0],w=g[1],j=w.loading,k=w.error,S=Object(n.useState)({}),x=S[0],E=S[1];function L(e){e.preventDefault();var r=e.target,t=r.name,n=r.type,o=r.value,a="number"===n?parseFloat(o):o;E(h({},x,Object(l.a)({},t,a)))}return o?p("p",null,"Loading"):p(s.a,{onSubmit:function(e){return function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),y({variables:h({id:r},x)}),k&&console.log(k);case 3:case"end":return t.stop()}}),null,null,null,Promise)}(e)}},p(m.a,{error:a}),p("fieldset",{disabled:o,"aria-busy":o},p("label",{htmlFor:"title"},"Title",p("input",{type:"text",id:"title",name:"title",placeholder:"Title",required:!0,defaultValue:b.album.title,onChange:L})),p("label",{htmlFor:"catalogNumber"},"Catalog Number",p("input",{type:"text",id:"catalogNumber",name:"catalogNumber",placeholder:"Catalog Number",required:!0,defaultValue:b.album.catalogNumber,onChange:L})),p("label",{htmlFor:"format"},"Format",p("input",{type:"text",id:"format",name:"format",placeholder:"Format",required:!0,defaultValue:b.album.format,onChange:L})),p("label",{htmlFor:"info"},"Info",p("input",{type:"text",id:"info",name:"info",placeholder:"Info",required:!0,defaultValue:b.album.info,onChange:L})),p("label",{htmlFor:"recordLabel"},"Record Label",p("input",{type:"text",id:"recordLabel",name:"recordLabel",placeholder:"Record Label",defaultValue:b.album.recordLabel,onChange:L})),p("button",{type:"submit"},"Sav",j?"ing":"e"," Changes")))},k=o.a.createElement;r.default=function(e){return k("div",null,k(j,{id:e.query.id}))}},mzXK:function(e,r,t){"use strict";var n=t("vOnD"),o=Object(n.d)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),a=n.c.form.withConfig({displayName:"Form",componentId:"sc-1kmq3n-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:",';}}button,input[type="submit"]{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:"";display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy="true"]::before{background-size:50% auto;animation:'," 0.5s linear infinite;}}"],(function(e){return e.theme.red}),o);r.a=a},rePB:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,"a",(function(){return n}))}},[["4kVR",1,2,0,3]]]);