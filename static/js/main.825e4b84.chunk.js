(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),i=(a(37),a(7)),c=a(1),l=a(15),m=a.n(l),u=a(29),v=a(10),p=a(11),d=a(13),f=a(12),E=a(30),h=a.n(E);a(56);var y=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,c=e.genres;return r.a.createElement(i.b,{to:{pathname:"/movie-detail",state:{id:t,year:a,title:n,summary:o,poster:s,genres:c}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("ul",{className:"movie__genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genres"},e)}))),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180),"..."))))},g=(a(62),function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(63);var _=function(e){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},b=function(e){Object(d.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component);a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};var j=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null),r.a.createElement(c.a,{path:"/",exact:!0,component:g}),r.a.createElement(c.a,{path:"/about",component:_}),r.a.createElement(c.a,{path:"/movie/:id",component:b}))};s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.825e4b84.chunk.js.map