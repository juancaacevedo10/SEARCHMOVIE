(this.webpackJsonpsearchmovie=this.webpackJsonpsearchmovie||[]).push([[0],{121:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c(0),a=c.n(r),s=c(13),i=c.n(s),o=(c(83),c(84),c(51)),j=c(16),l=c(27),b=c(8),O=c.n(b),u=c(47),d=c(153),h=c(154),x=c(155),m=c(156),p=c(158),v=c(160),f=c(12),g=c(149),R=function(e){return Object(n.jsxs)(g.a,Object(f.a)(Object(f.a)({},e),{},{children:[Object(n.jsx)("path",{d:"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}),Object(n.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"})]}))},y=c(159),C={display:"flex",alignItems:"center",justifyContent:"center"},E=Object(y.a)({container:Object(f.a)({height:"100vh",flexDirection:"column"},C),cardContainer:Object(f.a)({flexDirection:"column",width:400,height:200,padding:"2rem"},C),title:{fontSize:"4rem"},titleGridContainer:Object(f.a)({},C),textFieldSearch:{width:"90%"},searchButton:{marginLeft:".5rem"},buttonsContainer:{marginTop:".5rem"},movieIcon:{fontSize:"4rem"}}),_=function(e){var t=e.history,c=Object(r.useState)(""),a=Object(u.a)(c,2),s=a[0],i=a[1],o=E();return Object(n.jsx)(d.a,{className:o.container,children:Object(n.jsxs)(h.a,{className:o.cardContainer,children:[Object(n.jsxs)(x.a,{container:!0,className:o.titleGridContainer,children:[Object(n.jsx)(x.a,{children:Object(n.jsx)(m.a,{className:o.title,children:"Bienvenido!"})}),Object(n.jsx)(x.a,{children:Object(n.jsx)(R,{className:o.movieIcon})})]}),Object(n.jsx)(p.a,{value:s,placeholder:"Buscar...",className:o.textFieldSearch,onChange:function(e){i(e.target.value)}}),Object(n.jsxs)(x.a,{className:o.buttonsContainer,children:[Object(n.jsx)(v.a,{variant:"contained",onClick:function(e){i("")},children:"Limpiar"}),Object(n.jsx)(v.a,{variant:"contained",color:"primary",size:"large",className:o.searchButton,onClick:function(e){t.push("/results?movieName=".concat(s))},children:"Buscar"})]})]})})},w=c(157),I=c(69),S=c.n(I),L="SEARCH_MOVIE_START",N="SEARCH_MOVIE_ERROR",T="SEARCH_MOVIE_COMPLETE",M="SEARCH_MOVIE_BY_ID_START",k="SEARCH_MOVIE_BY_ID_ERROR",A="SEARCH_MOVIE_BY_ID_COMPLETE",B=c(41),H=Object(y.a)({cardContainer:{marginBottom:8},poster:{width:120},titleContainer:{paddingLeft:8,paddingTop:12}}),D=Object(j.e)((function(e){var t=e.Title,c=e.Year,r=e.Type,a=e.imdbID,s=e.Poster,i=e.history,o=H();return Object(n.jsx)(h.a,{className:o.cardContainer,children:Object(n.jsxs)(x.a,{container:!0,children:[Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)("img",{src:s,alt:t,className:o.poster})}),Object(n.jsxs)(x.a,{item:!0,className:o.titleContainer,children:[Object(n.jsx)(m.a,{children:t}),Object(n.jsx)(m.a,{children:c}),Object(n.jsx)(m.a,{children:r}),Object(n.jsx)(v.a,{color:"primary",variant:"contained",onClick:function(){i.push("/movie/".concat(a))},children:"Ver mas"})]})]})})})),V=function(e){var t=e.location,c=Object(l.b)(),a=Object(l.c)((function(e){return function(e){return Object(B.get)(e,"search.movieResults.Search")}(e)})),s=Object(l.c)((function(e){return function(e){return Object(B.get)(e,"search.isLoading")}(e)})),i=Object(r.useState)(!1),o=Object(u.a)(i,2),j=o[0],b=o[1];Object(r.useEffect)((function(){var e=S.a.parse(t.search).movieName;e&&!j&&(b(!0),c({type:L,payload:{movieName:e}}))}));return Object(n.jsx)(d.a,{children:a?a.map((function(e,t){return Object(n.jsx)(D,Object(f.a)({},e),t)})):s?Object(n.jsx)(w.a,{size:100,color:"primary"}):Object(n.jsx)("div",{})})},z=function(e){var t=e.match,c=H(),a=Object(l.b)(),s=Object(l.c)((function(e){return function(e){return Object(B.get)(e,"search.movieResult")}(e)}));return Object(r.useEffect)((function(){var e=t.params.id;(!s||s&&s.imdbID!==e)&&a({type:M,payload:{movieId:e}})})),s?Object(n.jsxs)(d.a,{children:[Object(n.jsx)(m.a,{variant:"h3",children:s.Title}),Object(n.jsxs)(x.a,{container:!0,children:[Object(n.jsx)(x.a,{item:!0,children:Object(n.jsx)("img",{src:s.Poster,alt:s.Poster})}),Object(n.jsxs)(x.a,{item:!0,className:c.titleContainer,children:[Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Actores: "}),s.Actors," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Director: "}),s.Director," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Genre: "}),s.Genre," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Language: "}),s.Language," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Metascore: "}),s.Metascore," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Released: "}),s.Released," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Production: "}),s.Production," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Rated: "}),s.Rated," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Runtime: "}),s.Runtime," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Type: "}),s.Type," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Year: "}),s.Year," "]}),Object(n.jsxs)(m.a,{children:[Object(n.jsx)("strong",{children:"Country: "}),s.Country," "]})]})]})]}):Object(n.jsx)(w.a,{size:100,color:"primary"})},P=function(e){var t=e.store;return Object(n.jsx)(l.a,{store:t,children:Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:_}),Object(n.jsx)(j.a,{path:"/results",component:V}),Object(n.jsx)(j.a,{path:"/movie/:id",component:z})]})})})};P.prototype={store:O.a.object.isRequired};var G=P,Y=c(33),F=c(71),J={},q=Object(Y.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(f.a)(Object(f.a)({},e),{},{isLoading:!0});case N:return Object(f.a)(Object(f.a)({},e),{},{isLoading:!1,movieResults:null});case T:return Object(f.a)(Object(f.a)({},e),{},{isLoading:!1,movieResults:t.results.data});case M:return Object(f.a)(Object(f.a)({},e),{},{isLoading:!0,movieResult:null});case k:return Object(f.a)(Object(f.a)({},e),{},{isLoading:!1,movieResult:null});case A:return console.log(t),Object(f.a)(Object(f.a)({},e),{},{isLoading:!1,movieResult:t.movie.data});default:return Object(f.a)({},e)}}}),K=c(25),Q=c.n(K),U=c(23),W=c(70),X=c.n(W),Z=function(e,t,c,n){return X()({method:n,url:"https://www.omdbapi.com/?apiKey=ffd0c3a5"+e,data:t,headers:c})},$=Q.a.mark(ce),ee=Q.a.mark(ne),te=Q.a.mark(re);function ce(e){var t,c;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(U.b)(Z,"&s=".concat(t.movieName),null,null,"GET");case 4:return c=n.sent,n.next=7,Object(U.c)({type:T,results:c});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(U.c)({type:N,error:n.t0});case 13:case"end":return n.stop()}}),$,null,[[1,9]])}function ne(e){var t,c;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,n.next=4,Object(U.b)(Z,"&i=".concat(t.movieId),null,null,"GET");case 4:return c=n.sent,n.next=7,Object(U.c)({type:A,movie:c});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(1),n.next=13,Object(U.c)({type:k,error:n.t0});case 13:case"end":return n.stop()}}),ee,null,[[1,9]])}function re(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.d)(L,ce);case 2:return e.next=4,Object(U.d)(M,ne);case 4:case"end":return e.stop()}}),te)}var ae=Q.a.mark(se);function se(){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([re()]);case 2:case"end":return e.stop()}}),ae)}var ie=function(){var e=Object(F.a)();return Object(f.a)(Object(f.a)({},Object(Y.d)(q,Object(Y.a)(e))),{},{runSaga:e.run(se)})}();i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(G,{store:ie})}),document.getElementById("root"))},83:function(e,t,c){},84:function(e,t,c){}},[[121,1,2]]]);
//# sourceMappingURL=main.c472de52.chunk.js.map