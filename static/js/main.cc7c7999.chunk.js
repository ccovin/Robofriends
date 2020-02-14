(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),i=n(10),s=n(8),l=n(17),u=n(18),h=(n(28),n(1)),d=n(2),b=n(4),f=n(3),p=n(5),m=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},g=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},v=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},E=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},O=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops, an error has occurred."):this.props.children}}]),t}(o.Component),j=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return r.a.createElement("button",{className:"ma2",id:"counter",color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(j,{color:"red"}))}}]),t}(o.Component),w=(n(29),function(e){function t(){var e,n;Object(h.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(b.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).filterRobots=function(){return n.props.robots.filter((function(e){return e.name.toLowerCase().includes(n.props.searchField.toLowerCase())}))},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=(e.robots,e.isPending);return r.a.createElement("div",{className:"tc"},r.a.createElement(y,null),r.a.createElement(v,{searchChange:t}),r.a.createElement(E,null,n?r.a.createElement("h1",null,"Loading"):r.a.createElement(O,null,r.a.createElement(g,{robots:this.filterRobots()}))))}}]),t}(o.Component)),R=(n(30),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(w,this.props)}}]),t}(o.Component)),C=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(R),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var _={searchField:""},T={isPending:!1,robots:[],error:""},N=(n(31),Object(l.createLogger)()),U=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),A=Object(s.d)(U,Object(s.a)(u.a,N));c.a.render(r.a.createElement(i.a,{store:A},r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Robofriends","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.cc7c7999.chunk.js.map