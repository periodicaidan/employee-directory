(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),l=n(7),i=n.n(l),s=(n(15),n(16),n(2)),o=n(9),d=n(3);function j(e){return Object(a.jsx)("div",{className:"form-group",children:e.children})}function u(e){var t;return Object(a.jsxs)(j,{children:[e.label&&Object(a.jsx)("label",{htmlFor:e.name,children:e.label}),Object(a.jsx)("input",{type:null!==(t=e.type)&&void 0!==t?t:"text",className:"form-control",name:e.name,id:e.name,onChange:e.onChange,value:e.value}),e.tip&&Object(a.jsx)("small",{className:"form-text text-muted",children:e.tip})]})}function b(e){return Object(a.jsxs)(j,{children:[e.label&&Object(a.jsx)("label",{htmlFor:e.name,children:e.label}),Object(a.jsx)("select",{name:e.name,id:e.name,onChange:e.onChange,value:e.value,defaultValue:e.defaultValue,children:e.children})]})}var m=r.a.createContext([]);function h(e){var t=Object(c.useContext)(m),n=Object(c.useState)({firstName:"",lastName:"",department:"",role:"",managerId:void 0}),r=Object(d.a)(n,2),l=r[0],i=r[1],o=function(t){e.onComplete(t),i({firstName:"",lastName:"",department:"",role:"",managerId:void 0})};return Object(a.jsx)("div",{className:"modal",id:"addEmployeeModal",children:Object(a.jsx)("div",{className:"modal-dialog",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("div",{className:"modal-header",children:Object(a.jsx)("h4",{children:"Add Employee"})}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsxs)("form",{children:[Object(a.jsx)(u,{name:"firstName",label:"First Name",onChange:function(e){return i(Object(s.a)(Object(s.a)({},l),{},{firstName:e.target.value}))},value:l.firstName}),Object(a.jsx)(u,{name:"lastName",label:"Last Name",onChange:function(e){return i(Object(s.a)(Object(s.a)({},l),{},{lastName:e.target.value}))},value:l.lastName}),Object(a.jsx)(u,{name:"department",label:"Department",onChange:function(e){return i(Object(s.a)(Object(s.a)({},l),{},{department:e.target.value}))},value:l.department}),Object(a.jsx)(u,{name:"role",label:"Role",onChange:function(e){return i(Object(s.a)(Object(s.a)({},l),{},{role:e.target.value}))},value:l.role}),Object(a.jsxs)(b,{name:"manager",label:"Manager",onChange:function(e){return i(Object(s.a)(Object(s.a)({},l),{},{managerId:parseInt(e.target.value)}))},value:l.managerId,defaultValue:void 0,children:[Object(a.jsx)("option",{value:void 0,children:"-- None --"}),t.map((function(e){return Object(a.jsxs)("option",{value:e.id,children:[e.firstName," ",e.lastName]})}))]})]})}),Object(a.jsxs)("div",{className:"modal-footer",children:[Object(a.jsx)("button",{onClick:function(e){return o(l)},className:"btn btn-success","data-dismiss":"modal",children:"Save"}),Object(a.jsx)("button",{className:"btn btn-secondary","data-dismiss":"modal",children:"Cancel"})]})]})})})}function O(e){var t=[[e.dark,"dark"],[e.striped,"striped"],[e.bordered,"bordered"],[e.hoverable,"hover"],[e.small,"sm"]].reduce((function(e,t){var n=Object(d.a)(t,2),a=n[0],c=n[1];return a?e+" table-".concat(c):e}),"table");return Object(a.jsx)("table",{className:t,children:e.children})}function x(e){var t="";return e.dark?t="thead-dark":e.light&&(t="thead-light"),Object(a.jsx)("thead",{className:t,children:e.children})}function f(e){return Object(a.jsx)("tr",{className:e.context&&"table-".concat(e.context),children:e.children})}function v(e){return Object(a.jsx)("td",{className:e.context&&"table-".concat(e.context),children:e.children})}function p(e){return Object(a.jsx)("th",{onClick:e.onClick,children:e.children})}function N(e){var t=Object(c.useState)("id"),n=Object(d.a)(t,2),r=n[0],l=n[1],i=Object(c.useContext)(m);return Object(a.jsxs)(O,{striped:!0,hoverable:!0,children:[Object(a.jsx)(x,{children:Object(a.jsxs)(f,{children:[Object(a.jsx)(p,{onClick:function(e){return l("id")},children:"ID"}),Object(a.jsx)(p,{onClick:function(e){return l("firstName")},children:"First Name"}),Object(a.jsx)(p,{onClick:function(e){return l("lastName")},children:"Last Name"}),Object(a.jsx)(p,{onClick:function(e){return l("department")},children:"Department"}),Object(a.jsx)(p,{onClick:function(e){return l("role")},children:"Role"}),Object(a.jsx)(p,{onClick:function(e){return l("managerId")},children:"Manager"})]})}),Object(a.jsx)("tbody",{children:i.sort((function(e,t){return function(e,t,n){var a=t[e],c=n[e];return"string"===typeof a?a>c?1:-1:"number"===typeof a?a-c:0}(r,e,t)})).map((function(e){var t=e.managerId&&i.filter((function(t){return t.id===e.managerId}))[0];return Object(a.jsxs)(f,{children:[Object(a.jsx)(v,{children:e.id}),Object(a.jsx)(v,{children:e.firstName}),Object(a.jsx)(v,{children:e.lastName}),Object(a.jsx)(v,{children:e.department}),Object(a.jsx)(v,{children:e.role}),Object(a.jsx)(v,{children:t&&"".concat(t.firstName," ").concat(t.lastName)})]})}))})]})}var g=n(8);function C(){var e=Object(c.useState)(g),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("main",{children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#addEmployeeModal",children:"Add Employee"}),Object(a.jsxs)(m.Provider,{value:n,children:[Object(a.jsx)(N,{}),Object(a.jsx)(h,{onComplete:function(e){return r([].concat(Object(o.a)(n),[Object(s.a)({id:n.length+1},e)]))}})]})]})}var y=function(){return Object(a.jsx)(C,{})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};n(17);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),k()},8:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"John","lastName":"Doe","department":"Accounting","role":"Senior Accountant"},{"id":2,"firstName":"Adrian","lastName":"Arms","department":"Technology","role":"Tech Lead"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.c707618b.chunk.js.map