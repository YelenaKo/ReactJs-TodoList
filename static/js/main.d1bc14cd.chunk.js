(window["webpackJsonpreact-crash-course"]=window["webpackJsonpreact-crash-course"]||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),c=a.n(r),l=a(17),i=a(5),d=a(6),s=a(8),u=a(7),p=a(9),m=a(13),f=a(10);a(32);var b={background:"#22356b",color:"#fff",textAlign:"center",padding:"10px"},h={color:"#fff",textdecoration:"none"},y=function(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.b,{style:h,to:"/"},"Home")," |",o.a.createElement(m.b,{style:h,to:"/about"},"About"))},E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{backgroundColor:a.props.todo.completed?"#f4f4f4":"#fff9d4",padding:"10px",borderBottom:"1px  #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none",fontFamily:"serif"}},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("i",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," ",a,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:v},"x"))))}}]),t}(o.a.Component),v={backgroundColor:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},g=E,j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(g,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),t}(o.a.Component),O=a(25),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){return a.setState(Object(O.a)({},e.target.name,e.target.value))},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"add-newtodo"},o.a.createElement("form",{onSubmit:this.onSubmit,className:"add-newtodo-form",style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"add Todo ...",style:{flex:"10",color:"#290684"},value:this.state.title,onChange:this.onChange,className:"add-newtodo-form-input"}),o.a.createElement("input",{type:"submit",value:"Submit",className:"add-newtodo-form-btn",style:{flex:"1"}})))}}]),t}(n.Component);var C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,"About"),o.a.createElement("p",null,"This is the Todo list app"))},x=a(26),T=a.n(x),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.markComplete=function(e){a.setState({todos:a.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},a.delTodo=function(e){a.setState({todos:Object(l.a)(a.state.todos.filter((function(t){return t.id!==e})))})},a.addTodo=function(e){var t={id:T.a.v4(),title:e,completed:!1};a.setState({todos:[].concat(Object(l.a)(a.state.todos),[t])})},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(y,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{addTodo:e.addTodo}),o.a.createElement(j,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(f.a,{path:"/about",component:C}))))}}]),t}(n.Component);c.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d1bc14cd.chunk.js.map