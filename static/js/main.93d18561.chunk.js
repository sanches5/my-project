(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),i=n(10),s=n.n(i),d=(n(26),n(27),n(1)),r=(n(28),n(2)),a=["Dashboard","Customers","Remittance","P2P","Transaction-history","Todos"];var u=function(){return Object(r.jsx)("div",{className:"side-bar",children:a.map((function(t){return Object(r.jsx)("a",{href:t.toLowerCase(),children:t},t)}))})},j=n(21),l=(n(30),n(16)),h=n(17),b=n(4),f=new(function(){function t(){Object(l.a)(this,t),this.todos=[{id:1,text:"new task!!",complete:!1}],Object(b.d)(this)}return Object(h.a)(t,[{key:"addTodo",value:function(t){this.todos.push(t)}},{key:"removeTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}},{key:"completedTodo",value:function(t){this.todos[t].complete=!this.todos[t].complete}}]),t}()),p=n(20),m=Object(p.a)((function(){var t=Object(o.useState)(""),e=Object(j.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"todos",children:[Object(r.jsx)("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)}}),Object(r.jsx)("button",{onClick:function(){f.addTodo({completed:!1,text:n,id:f.todos[f.todos.length-1].id+1}),c("")},children:"create task"}),f.todos.map((function(t,e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"checkbox",defaultChecked:t.complete,onChange:function(){return f.completedTodo(e)}}),Object(r.jsx)("p",{children:t.text}),Object(r.jsx)("button",{onClick:function(){return f.removeTodo(t.id)},children:"delete"})]},t.id)}))]})}));var O=function(){return Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(u,{}),Object(r.jsx)(d.a,{path:"/todos",component:m})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),i(t),s(t)}))},v=n(13);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v.a,{basename:"/my-project",children:Object(r.jsx)(O,{})})}),document.getElementById("root")),x()}},[[38,1,2]]]);
//# sourceMappingURL=main.93d18561.chunk.js.map