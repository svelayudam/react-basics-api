(this["webpackJsonpreact-basics-api"]=this["webpackJsonpreact-basics-api"]||[]).push([[0],{14:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),l=a.n(r),c=a(11),u=a.n(c),m=a(12),i=a.n(m);function s(){var e=l.a.useState([]),t=Object(n.a)(e,2),a=t[0],r=t[1];return l.a.useEffect((function(){i.a.get("https://www.reddit.com/r/reactjs.json").then((function(e){var t=e.data.data.children.map((function(e){return e.data}));r(t)}))}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"/r/reactjs"),l.a.createElement("table",{border:"1",cellSpacing:"0"},l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"Title"),l.a.createElement("th",null,"Score"),l.a.createElement("th",null,"Comments")),a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement("a",{href:e.url},e.title)),l.a.createElement("td",null,e.score),l.a.createElement("td",null,e.num_comments))}))))}u.a.render(l.a.createElement(s,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4642ac53.chunk.js.map