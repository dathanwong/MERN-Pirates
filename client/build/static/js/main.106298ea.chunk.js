(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,a,t){e.exports=t(48)},23:function(e,a,t){},24:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(16),r=t.n(l),s=(t(23),t(1)),o=(t(24),t(4)),i=t(3),m=t.n(i),u=function(e){var a=e.pirates,t=e.setPirates;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col-3"}),c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",null,"Pirate Crew")),c.a.createElement("div",{className:"col-3"},c.a.createElement(o.a,{to:"/pirates/new",className:"btn btn-primary"},"Add Pirate"))),a.map((function(e){return c.a.createElement("div",{key:e._id,className:"row my-5"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"container border border-dark"},c.a.createElement("div",{className:"row m-2"},c.a.createElement("div",{className:"col-3"},c.a.createElement("img",{src:e.image,alt:"",style:{width:"150px",height:"150px"}})),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h2",null,e.name)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 text-right"},c.a.createElement(o.a,{to:"/pirates/"+e._id,className:"btn btn-primary"},"View Pirate")),c.a.createElement("div",{className:"col-6 text-left"},c.a.createElement("button",{onClick:function(){return n=e._id,void m.a.delete("http://localhost:8000/api/pirates/"+n).then((function(){t(a.filter((function(e){return e._id!==n})))})).catch((function(e){return console.log(e)}));var n},className:"btn btn-danger"},"Walk the Plank"))))))))})))},d=function(e){var a,t,l,r,i,u,d,v,E,h,p,N,b,g,f,w,y=Object(n.useState)(""),j=Object(s.a)(y,2),P=j[0],O=j[1],k=Object(n.useState)(""),C=Object(s.a)(k,2),x=C[0],S=C[1],H=Object(n.useState)(0),L=Object(s.a)(H,2),M=L[0],A=L[1],Y=Object(n.useState)(""),q=Object(s.a)(Y,2),B=q[0],_=q[1],W=Object(n.useState)("Captain"),F=Object(s.a)(W,2),I=F[0],J=F[1],Q=Object(n.useState)(!0),T=Object(s.a)(Q,2),D=T[0],U=T[1],V=Object(n.useState)(!0),$=Object(s.a)(V,2),z=$[0],G=$[1],K=Object(n.useState)(!0),R=Object(s.a)(K,2),X=R[0],Z=R[1],ee=Object(n.useState)(!1),ae=Object(s.a)(ee,2),te=ae[0],ne=ae[1],ce=Object(n.useState)([]),le=Object(s.a)(ce,2),re=le[0],se=le[1];return Object(n.useEffect)((function(){P.length>0&&x.length>0&&M>=0&&B.length>0&&I.length>0?ne(!0):ne(!1)}),[P,x,M,B,I]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-between"},c.a.createElement("div",{className:"col-3"}),c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",null,"Add Pirate")),c.a.createElement("div",{className:"col-3"},c.a.createElement(o.a,{to:"/pirates",className:"btn btn-primary"},"Crew Board"))),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:P,image:x,numChests:M,catchPhrase:B,position:I,hasPegLeg:D,hasEyePatch:z,hasHookHand:X};m.a.post("http://localhost:8000/api/pirates",a).then((function(e){console.log(e.data),Object(o.c)("/pirates/"+e.data._id)})).catch((function(e){console.log(e.response.data.errors),se(e.response.data.errors)}))}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row my-2"},"Pirate Name:"),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{required:!0,type:"text",value:P,onChange:function(e){return O(e.target.value)}}),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(a=re.name)||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.message)),c.a.createElement("div",{className:"row my-2"},"Image Url:"),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{required:!0,type:"text",value:x,onChange:function(e){return S(e.target.value)}}),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(l=re.image)||void 0===l||null===(r=l.properties)||void 0===r?void 0:r.message)),c.a.createElement("div",{className:"row my-2"},"# of Treasure Chests:"),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{required:!0,type:"number",value:M,onChange:function(e){return A(e.target.value)}}),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(i=re.numChests)||void 0===i||null===(u=i.properties)||void 0===u?void 0:u.message)),c.a.createElement("div",{className:"row my-2"},"Pirate Catch Phrase:"),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{required:!0,type:"text",value:B,onChange:function(e){return _(e.target.value)}}),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(d=re.catchPhrase)||void 0===d||null===(v=d.properties)||void 0===v?void 0:v.message))),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row"},"Crew Position:"),c.a.createElement("div",{className:"row my-2"},c.a.createElement("select",{required:!0,value:I,onChange:function(e){return J(e.target.value)}},c.a.createElement("option",{value:"Captain"},"Captain"),c.a.createElement("option",{value:"First Mate"},"First Mate"),c.a.createElement("option",{value:"Quarter Master"},"Quarter Master"),c.a.createElement("option",{value:"Boatswain"},"Boatswain"),c.a.createElement("option",{value:"Powder Monkey"},"Powder Monkey")),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(E=re.position)||void 0===E||null===(h=E.properties)||void 0===h?void 0:h.message)),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{type:"checkbox",checked:!0,name:"hasPegLeg",id:"",value:D,onSelect:function(e){return U(e.target.value)}}),c.a.createElement("label",null,"Peg Leg"),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(p=re.hasPegLeg)||void 0===p||null===(N=p.properties)||void 0===N?void 0:N.message)),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{type:"checkbox",checked:!0,name:"hasEyePatch",id:"",value:z,onSelect:function(e){return G(e.target.value)}}),c.a.createElement("label",null,"Eye Patch"),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(b=re.hasEyePatch)||void 0===b||null===(g=b.properties)||void 0===g?void 0:g.message)),c.a.createElement("div",{className:"row my-2"},c.a.createElement("input",{type:"checkbox",checked:!0,name:"hasHookHand",id:"",value:X,onSelect:function(e){return Z(e.target.value)}}),c.a.createElement("label",null,"Hook Hand"),re&&c.a.createElement("span",{className:"text-danger"},null===re||void 0===re||null===(f=re.hasHookHand)||void 0===f||null===(w=f.properties)||void 0===w?void 0:w.message)),c.a.createElement("div",{className:"row my-2"},te?c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Pirate"):c.a.createElement("button",{disabled:!0,className:"btn btn-primary",type:"submit"},"Add Pirate"))))))},v=function(e){var a=Object(n.useState)(null),t=Object(s.a)(a,2),l=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],d=i[1],v=Object(n.useState)(!1),E=Object(s.a)(v,2),h=E[0],p=E[1],N=Object(n.useState)(!1),b=Object(s.a)(N,2),g=b[0],f=b[1];function w(a){l[a]=!l[a],console.log(l),m.a.put("http://localhost:8000/api/pirates/"+e.id,l).then((function(e){r(l),d(l.hasPegLeg),p(l.hasEyePatch),f(l.hasHookHand)})).catch((function(e){console.log(e)}))}return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pirates/"+e.id).then((function(e){r(e.data),d(e.data.hasPegLeg),p(e.data.hasEyePatch),f(e.data.hasHookHand)})).catch((function(e){console.log(e)}))}),[e.id]),null===l?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-center"},c.a.createElement("h1",null,l.name))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row"},c.a.createElement("img",{src:l.image,alt:"",style:{height:"300px"}})),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,'"',l.catchPhrase,'"'))),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"container border border-dark"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("h2",null,"About")),c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-4"},"Position:"),c.a.createElement("div",{className:"col-8"},l.position)),c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-4"},"Treasures:"),c.a.createElement("div",{className:"col-8"},l.numChests)),c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-4"},"Peg Leg:"),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},u?"Yes":"No"),c.a.createElement("div",{className:"col"},u?c.a.createElement("button",{onClick:function(e){return w("hasPegLeg")},className:"btn btn-danger"},"No"):c.a.createElement("button",{onClick:function(e){return w("hasPegLeg")},className:"btn btn-success"},"Yes"))))),c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-4"},"Eye Patch:"),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},h?"Yes":"No"),c.a.createElement("div",{className:"col"},h?c.a.createElement("button",{onClick:function(e){return w("hasEyePatch")},className:"btn btn-danger"},"No"):c.a.createElement("button",{onClick:function(e){return w("hasEyePatch")},className:"btn btn-success"},"Yes"))))),c.a.createElement("div",{className:"row my-2"},c.a.createElement("div",{className:"col-4"},"Hook Hand:"),c.a.createElement("div",{className:"col-8"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},g?"Yes":"No"),c.a.createElement("div",{className:"col"},g?c.a.createElement("button",{onClick:function(e){return w("hasHookHand")},className:"btn btn-danger"},"No"):c.a.createElement("button",{onClick:function(e){return w("hasHookHand")},className:"btn btn-success"},"Yes")))))))))};var E=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pirates").then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(o.b,null,c.a.createElement(u,{path:"/pirates",pirates:t,setPirates:l}),c.a.createElement(d,{path:"/pirates/new",pirates:t,setPirates:l}),c.a.createElement(v,{path:"pirates/:id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.106298ea.chunk.js.map