(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),c=a.n(o),s=(a(12),a(1)),l=a(2),i=a(4),h=a(3),u=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:" tc bg-light-green dib ma2 pa3 br3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"tc pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots Here",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid #210D0A",height:"600px"}},e.children)},b=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops there is an error"):this.props.children}}]),a}(n.Component),p=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfields:t.target.value})},e.state={robots:[],searchfields:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfields.toLowerCase())||t.email.toLowerCase().includes(e.state.searchfields.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h3",{className:"tc"},"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:t}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13),a(14);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.cd034a74.chunk.js.map