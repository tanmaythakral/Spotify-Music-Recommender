(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(26),o=a.n(s),r=a(1);function i(){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{class:"navbar",children:Object(r.jsx)("div",{class:"container-fluid",children:Object(r.jsx)("span",{class:"navbar-brand mb-0 h1",children:"Spotify Songs Recommender"})})})})}new Date;function l(){return Object(r.jsx)("div",{children:Object(r.jsx)("footer",{})})}var d=a(14),u=a.n(d),p=a(27),h=a(4),j=a(9),b=a.n(j),m=["Alt Rock","Bluegrass","Blues","Classical","Country","Dance","Electro","Hard Rock","Heavy Metal","Hip Hop","House","Indie","Jrock","Kpop","Pop"];function O(){var e=new URLSearchParams("http://localhost:3000/#/search#access_token=BQCeN8OlQoRJTX_bB1lFfdIuazKQx3C0BFr75KeOTsDy0sdKVOVw7NFhvNQHTV7R09WsBvt6-vjuMiGl-5HPJyFVUKs3kevpXWraEyXh-Xqg8wT-NGvO7Z7Q3JdSXJKmj4GZYu8Ou0xpqYbqmVHkgsPuEOs9-LS6vzRx9BU_FZ1xNc0bLpHMylseNI1EEzRHbyWBMxtCCzAcXKaW9oXN--ENTcQvxs_p4g&token_type=Bearer&expires_in=3600".search).get("access_token");console.log("Token",e);var t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)([]),i=Object(h.a)(o,2),l=(i[0],i[1],Object(n.useState)("")),d=Object(h.a)(l,2),j=d[0],O=d[1],f=Object(n.useState)(""),v=Object(h.a)(f,2),x=v[0],y=v[1],g=Object(n.useState)(""),k=Object(h.a)(g,2),S=k[0],C=k[1],w=Object(n.useState)([{}]),B=Object(h.a)(w,2),_=B[0],H=B[1],T=Object(n.useState)(!1),A=Object(h.a)(T,2),z=A[0],M=A[1],N=Object(n.useState)(""),R=Object(h.a)(N,2),E=R[0],F=R[1],G=Object(n.useState)(10),K=Object(h.a)(G,2),P=K[0],J=K[1],X=Object(n.useState)("kpop"),Q=Object(h.a)(X,2),I=Q[0],V=Q[1],D=Object(n.useState)(""),W=Object(h.a)(D,2),q=W[0],L=W[1],U=Object(n.useState)(""),Z=Object(h.a)(U,2),Y=Z[0],$=Z[1],ee=Object(n.useState)(.5),te=Object(h.a)(ee,2),ae=te[0],ne=te[1];function ce(){return(ce=Object(p.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b()("https://api.spotify.com/v1/me",{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c}}).then((function(e){C(e.data.display_name),F(e.data.id)})),a=[],n=[],s(e),t.next=6,b()("https://api.spotify.com/v1/recommendations",{method:"GET",params:{limit:P,seed_artists:Y,seed_genres:I,seed_tracks:q,target_danceability:ae},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c}}).then((function(e){for(var t=0;t<P;t++){var c=e.data.tracks[t].uri;a.push(c);var s={songname:e.data.tracks[t].name,imageurl:e.data.tracks[t].album.images[1].url};n.push(s)}y(a),H(n),M(!0),alert("Checkout your recommendations! Hit button again for another set or scroll down to add them on spotify")})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){b()("https://api.spotify.com/v1/me/top/tracks",{method:"GET",headers:{Authorization:"Bearer "+e}}).then((function(e){for(var t=[],a=0;a<20;a++){var n=e.data.items[a].id;t.push(n)}var c=Math.floor(Math.random()*t.length);L(t[c])})),b()("https://api.spotify.com/v1/me/top/artists",{method:"GET",headers:{Authorization:"Bearer "+e}}).then((function(e){for(var t=[],a=0;a<20;a++){var n=e.data.items[a].id;t.push(n)}var c=Math.floor(Math.random()*t.length);$(t[c])}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{class:"mb-3",children:[Object(r.jsx)("h2",{children:"Choose your Genre!"}),Object(r.jsx)("select",{class:"genre-select form-select form-select-lg mb-3",onChange:function(e){V(e.target.value)},"aria-label":".form-select-lg example",children:m.map((function(e,t){return Object(r.jsx)("option",{value:t,children:e})}))}),Object(r.jsx)("h2",{children:"How many recommendations do you need?"}),Object(r.jsx)("input",{value:P,type:"number",onChange:function(e){J(e.target.value)},min:"1",max:"100",class:"form-control",id:"exampleInputPassword1"}),Object(r.jsx)("h2",{children:"How much do you feel like Dancing?"}),Object(r.jsx)("input",{type:"range",onChange:function(e){ne(e.target.value)},class:"form-range",min:"0",max:"1",step:".001",id:"customRange2"})]}),Object(r.jsx)("button",{id:"get-recom",onClick:function(){return ce.apply(this,arguments)},children:"Get Recommended"}),z?Object(r.jsxs)("h1",{class:"welcome-header",children:["Ok! ",Object(r.jsx)("span",{id:"name",children:S})," let's get started"]}):null,z?Object(r.jsx)("div",{children:_.map((function(e){return Object(r.jsxs)("div",{className:"album row",children:[Object(r.jsx)("img",{className:"albumimage col-6",src:e.imageurl,alt:e.songname}),Object(r.jsx)("h1",{className:"albumnheading col-6",children:e.songname})]})}))}):null,z?Object(r.jsx)("button",{onClick:function(){b()("https://api.spotify.com/v1/users/"+E+"/playlists",{method:"POST",data:{name:"My Playlist",description:"Created by KingShadow285",public:!1},headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c}}).then((function(e){O(e.data.id),b()("https://api.spotify.com/v1/playlists/"+j+"/tracks",{method:"Post",data:{uris:x},headers:{"Content-Type":"application/json",Authorization:"Bearer "+c}}).then((function(e){alert("Songs have been added!")})).catch((function(e){console.log(e)}))}))},id:"addtoplaylist",children:"Add to Spotify"}):null]})})}var f=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(i,{}),Object(r.jsx)(O,{}),Object(r.jsx)(l,{})]})};a(54);function v(){window.location.replace("https://accounts.spotify.com/authorize?client_id=302e8a7bf7464b7c8c53b0ed7fe09005&redirect_uri=https:%2F%2Ftanmaythakral.github.io%2FSpotify-Music-Recommender%2F%23%2Fsearch&response_type=token&scope=playlist-modify-public+playlist-modify-private+user-top-read")}var x=a(28),y=a(2);o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(x.a,{basename:"/Spotify-Music-Recommender",children:Object(r.jsxs)(y.c,{children:[Object(r.jsx)(y.a,{path:"/",exact:!0,component:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{class:"welcome-header",children:"Hello"}),Object(r.jsx)("button",{onClick:v,children:"Click to authorize"})]})}}),Object(r.jsx)(y.a,{path:"/search",component:f})]})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.cec3a6d4.chunk.js.map