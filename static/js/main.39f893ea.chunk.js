(this["webpackJsonpjson-view-app"]=this["webpackJsonpjson-view-app"]||[]).push([[0],{14:function(e,i,n){},15:function(e,i,n){},16:function(e,i,n){"use strict";n.r(i);var t=n(0),a=n.n(t),r=n(7),o=n.n(r),s=(n(14),n(2)),l=n(3),c=n(1),u=n(4),d=n(5),m=(n(15),[{_id:"5e834d8bafbfc697d3a605bc",index:0,guid:"140fa5d7-4151-421a-8221-56d05b2274fc",isActive:!0,balance:"$1,983.72",picture:"http://placehold.it/32x32",age:27,eyeColor:"green",name:"Workman Lang",gender:"male",company:"INSURETY",email:"workmanlang@insurety.com",phone:"+1 (844) 410-2102",address:"166 Mill Street, Oneida, North Carolina, 969",about:"Ullamco est sint deserunt reprehenderit ex elit veniam sunt Lorem culpa. Dolor cillum qui nulla proident ullamco. Officia nisi nisi ut officia nulla adipisicing. Voluptate veniam occaecat et pariatur ipsum. Est consequat occaecat occaecat nostrud ea sit. Fugiat magna ut voluptate sit ipsum quis adipisicing.\r\n",registered:"2018-12-16T09:44:44 -02:00",latitude:-8.973326,longitude:110.557328,tags:["incididunt","in","commodo","enim","labore","nostrud","reprehenderit"],friends:[{id:0,name:"Mallory Mcfarland"},{id:1,name:"Chen Farrell"},{id:2,name:"Roberts Oneill"}],greeting:"Hello, Workman Lang! You have 7 unread messages.",favoriteFruit:"strawberry"},{_id:"5e834d8b2311bd32c9dc52ff",index:1,guid:"9ca04af8-af40-4709-88cb-749ceed4299f",isActive:!0,balance:"$2,085.01",picture:"http://placehold.it/32x32",age:36,eyeColor:"green",name:"Holden Barron",gender:"male",company:"ANOCHA",email:"holdenbarron@anocha.com",phone:"+1 (853) 459-3748",address:"184 Porter Avenue, Stockdale, Delaware, 4215",about:"Velit ex proident laboris enim. Consequat irure nisi non non laboris excepteur. Sint nisi ex in cillum in velit minim consequat ad velit ex.\r\n",registered:"2014-11-08T11:35:30 -02:00",latitude:31.721732,longitude:-114.396403,tags:["id","magna","ipsum","eiusmod","voluptate","duis","et"],friends:[{id:0,name:"Walton French"},{id:1,name:"Brandi Finley"},{id:2,name:"Goodwin Klein"}],greeting:"Hello, Holden Barron! You have 4 unread messages.",favoriteFruit:"apple"},{_id:"5e834d8b2aab46217dc51598",index:2,guid:"235597b8-dc45-4724-b643-a830c1154b30",isActive:!1,balance:"$2,499.99",picture:"http://placehold.it/32x32",age:24,eyeColor:"green",name:"Karen Woods",gender:"female",company:"ORGANICA",email:"karenwoods@organica.com",phone:"+1 (884) 547-3591",address:"945 Metrotech Courtr, Fingerville, Alabama, 4293",about:"Consectetur pariatur occaecat do duis ea ea aliqua. Magna laborum aliqua exercitation fugiat consectetur incididunt. Reprehenderit anim ex tempor labore adipisicing officia tempor enim culpa ea sit laborum. Ullamco ex do nostrud ex dolor officia laborum ullamco non. Non labore cillum est sunt fugiat. Dolor labore exercitation duis elit magna culpa deserunt nostrud sit sit ex in officia.\r\n",registered:"2015-06-01T09:28:34 -03:00",latitude:3.558185,longitude:-170.032238,tags:["elit","excepteur","commodo","irure","dolor","aliquip","aliqua"],friends:[{id:0,name:"Ivy Chandler"},{id:1,name:"Wilda Bowers"},{id:2,name:"Petersen Page"}],greeting:"Hello, Karen Woods! You have 5 unread messages.",favoriteFruit:"apple"}]),h=n(8),p=new(n.n(h).a),b={on:function(e,i){return p.on(e,i)},once:function(e,i){return p.once(e,i)},off:function(e,i){return p.off(e,i)},emit:function(e,i){return p.emit(e,i)}};Object.freeze(b);var g=b;var f=function(e){Object(d.a)(n,e);var i=Object(u.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=i.call(this,e)).state={hiddenItems:new Set,isAllTreeVisible:!0},t.onChangeBranchVisibility=t.onChangeBranchVisibility.bind(Object(c.a)(t)),t.onChangeTreeVisibility=t.onChangeTreeVisibility.bind(Object(c.a)(t)),t}return Object(l.a)(n,[{key:"renderTree",value:function(){var e=this.props.data;return e?Array.isArray(e)?this.renderListFromArray(e):this.renderListFromObject(e):a.a.createElement("p",null,"no data provided!")}},{key:"renderListFromObject",value:function(e){var i=[];if(function(e){for(var i in e)if(e.hasOwnProperty(i))return!1;return!0}(e))return"{}";for(var n in e){var t=this.renderBranch(n,e[n]);i.push(t)}return a.a.createElement("ul",null,i)}},{key:"renderListFromArray",value:function(e){var i=this,n=[];return e.length?(e.forEach((function(e,t){var a=i.renderBranch(t,e);n.push(a)})),a.a.createElement("ul",null,n)):"[]"}},{key:"renderBranch",value:function(e,i){var n,t=!1;return i||(n=""),Array.isArray(i)?(n=this.renderListFromArray(i),t=!0):"object"===typeof i?(n=this.renderListFromObject(i),t=!0):n="".concat(i),a.a.createElement(v,{name:e,value:n,isParent:t,onChangeBranchVisibility:this.onChangeBranchVisibility})}},{key:"onChangeBranchVisibility",value:function(e,i){var n,t=this.state.hiddenItems;e?((n=new Set(t)).delete(i),this.setState({hiddenItems:n})):(n=t.add(i),this.setState({hiddenItems:n})),this.onHiddenItemsChange(n)}},{key:"onHiddenItemsChange",value:function(e){var i=e.size;this.setState({isAllTreeVisible:!i})}},{key:"renderToggleButton",value:function(){var e=this.state.isAllTreeVisible;return a.a.createElement("button",{className:"toggleTreeBtn",onClick:this.onChangeTreeVisibility},e?"Collapse":"Expand"," all")}},{key:"onChangeTreeVisibility",value:function(){var e=!this.state.isAllTreeVisible;this.setState({isAllTreeVisible:e}),g.emit("CHANGE_TREE_VISIBILITY",e)}},{key:"render",value:function(){return a.a.createElement("div",{className:"wrapper"},this.renderToggleButton(),this.renderTree())}}]),n}(a.a.Component),v=function(e){Object(d.a)(n,e);var i=Object(u.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=i.call(this,e)).state={isVisible:!0},t.onChangeVisibility=t.onChangeVisibility.bind(Object(c.a)(t)),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.on("CHANGE_TREE_VISIBILITY",(function(i){e.props.isParent&&e.state.isVisible!==i&&e.setState({isVisible:i})}))}},{key:"componentWillUnmount",value:function(){g.off("CHANGE_TREE_VISIBILITY")}},{key:"onChangeVisibility",value:function(e){if(e.stopPropagation(),this.props.isParent){var i=!this.state.isVisible;this.props.onChangeBranchVisibility(i,this.props.name),this.setState({isVisible:i})}}},{key:"renderVisibilityIndicator",value:function(){var e=this.props.isParent,i=this.state.isVisible;return e?a.a.createElement("button",{className:"toggleBranchBtn"},i?"-":"+"," "):null}},{key:"render",value:function(){var e=this.props,i=e.name,n=e.value,t=e.isParent,r=this.state.isVisible;return a.a.createElement("li",null,a.a.createElement("span",{className:t?"parent":"",onClick:this.onChangeVisibility},this.renderVisibilityIndicator(),i,":"),a.a.createElement("span",{hidden:!r},n))}}]),n}(a.a.Component),y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"JSON view app"),a.a.createElement(f,{data:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,i,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.39f893ea.chunk.js.map