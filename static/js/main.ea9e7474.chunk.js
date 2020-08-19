(this["webpackJsonptodo-app-hooks"]=this["webpackJsonptodo-app-hooks"]||[]).push([[0],{62:function(e,t,n){e.exports=n(73)},67:function(e,t,n){},68:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(67),n(68),n(39)),i=n(74),d=n(116),u=n(117),m=n(118),s=n(30),g=n(50),f=n(10),E=function(e,t){var n=Object(a.useState)((function(){var n;try{n=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(a){n=t}return n})),o=Object(f.a)(n,2),r=o[0],c=o[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[r,e]),[r,c]},v=n(120),h=function(e){var t=E("todos",e),n=Object(f.a)(t,2),a=n[0],o=n[1];return{todos:a,addTodo:function(e){o([].concat(Object(g.a)(a),[{id:Object(v.a)(),task:e,completed:!1}]))},removeTodo:function(e){var t=a.filter((function(t){return t.id!==e}));o(t)},toggleTodo:function(e){var t=a.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{completed:!t.completed}):t}));o(t)},editTodo:function(e,t){var n=a.map((function(n){return n.id===e?Object(s.a)(Object(s.a)({},n),{},{task:t}):n}));o(n)}}},p=n(110),T=n(115),b=n(111),O=n(113),k=n(121),j=n(114),w=n(112),y=n(48),S=n.n(y),C=n(49),x=n.n(C),I=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(f.a)(t,2),o=n[0],r=n[1],c=function(){r(!o)};return[o,c]},W=n(119),A=function(e){var t=Object(a.useState)(e),n=Object(f.a)(t,2),o=n[0],r=n[1];return[o,function(e){r(e.target.value)},function(){r("")}]},D=function(e){var t=e.id,n=e.editTodo,a=e.task,r=e.toggleEditing,c=A(a),l=Object(f.a)(c,3),i=l[0],d=l[1],u=l[2];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(t,i),u(),r()},style:{marginLeft:"1rem",width:"50%"}},o.a.createElement(W.a,{margin:"normal",value:i,onChange:d,fullWidth:!0,autoFocus:!0}))},J=function(e){var t=e.id,n=e.task,a=e.completed,r=e.removeTodo,c=e.toggleTodo,l=e.editTodo,i=I(!1),d=Object(f.a)(i,2),u=d[0],m=d[1];return o.a.createElement(b.a,{style:{height:"64px"}},u?o.a.createElement(D,{editTodo:l,id:t,task:n,toggleEditing:m}):o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{tabIndex:-1,checked:a,onClick:function(){return c(t)}}),o.a.createElement(O.a,{style:{textDecoration:a?"line-through":"none"}},n),o.a.createElement(j.a,null,o.a.createElement(w.a,{onClick:function(){return r(t)}},o.a.createElement(S.a,null)),o.a.createElement(w.a,{onClick:m},o.a.createElement(x.a,null)))))},N=function(e){var t=e.todos,n=e.removeTodo,a=e.toggleTodo,r=e.editTodo;return t.length?o.a.createElement(i.a,null,o.a.createElement(p.a,null,t.map((function(e,c){return o.a.createElement(o.a.Fragment,null,o.a.createElement(J,Object.assign({},e,{key:e.id,removeTodo:n,toggleTodo:a,editTodo:r})),c!==t.length-1&&o.a.createElement(T.a,null))})))):null},F=function(e){var t=e.addTodo,n=A(""),a=Object(f.a)(n,3),r=a[0],c=a[1],l=a[2];return o.a.createElement(i.a,{style:{margin:"1rem 0",padding:"0 1rem 1rem 1rem"}},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r),l()}},o.a.createElement(W.a,{value:r,onChange:c,margin:"normal",label:"Add New Todo",fullWidth:!0})))},B=function(){var e=h([{id:1,task:"Exercise",completed:!1},{id:2,task:"Cook Lunch",completed:!0},{id:3,task:"Sleep at 10AM",completed:!1}]),t=e.todos,n=e.addTodo,a=e.removeTodo,r=e.toggleTodo,c=e.editTodo;return o.a.createElement(i.a,{style:{padding:0,margin:0,height:"100vh",backgroundColor:"#fafafa"},elevation:0},o.a.createElement(d.a,{color:"primary",position:"static",style:{height:"64px"}},o.a.createElement(u.a,null,o.a.createElement(l.a,{color:"inherit"},"TODOS WITH REACT HOOKS"))),o.a.createElement(m.a,{container:!0,justify:"center",style:{marginTop:"1rem"}},o.a.createElement(m.a,{item:!0,xs:11,md:8,lg:4},o.a.createElement(F,{addTodo:n}),o.a.createElement(N,{todos:t,removeTodo:a,toggleTodo:r,editTodo:c}))))};var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.ea9e7474.chunk.js.map