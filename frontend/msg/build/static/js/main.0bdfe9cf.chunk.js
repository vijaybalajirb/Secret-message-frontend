(this.webpackJsonpmsg=this.webpackJsonpmsg||[]).push([[0],{18:function(e,t,c){},29:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(10),r=c.n(a),j=(c(29),c(14)),b=c(4),i=(c(18),c(5)),o=c(39),u=c(40),l=c(23),d=(c(32),c(1)),h=function(){var e=Object(b.f)(),t=Object(s.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),j=Object(i.a)(r,2),h=j[0],O=j[1],x=Object(s.useState)(""),g=Object(i.a)(x,2),p=g[0],f=g[1],m=Object(s.useState)(""),v=Object(i.a)(m,2),S=v[0],y=v[1],w=Object(s.useState)(""),k=Object(i.a)(w,2),C=k[0],M=k[1],N=Object(s.useState)(!0),E=Object(i.a)(N,2),F=E[0],T=E[1];Object(s.useEffect)((function(){M("".concat(window.location.href,"message/")),a(Math.random().toString(36).substring(5).toUpperCase())}),[]),Object(s.useEffect)((function(){T(!(n&&h&&S&&p&&C))}),[n,h,S,p,C]);return Object(d.jsxs)(o.a,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"heading",children:"Secret message "}),Object(d.jsx)("div",{className:"deleteMessagebtn",children:Object(d.jsx)(u.a,{variant:"warning",onClick:function(){return e.push("/delete")},children:"Delete Message"})})]}),Object(d.jsx)("label",{htmlFor:"random",children:Object(d.jsx)("b",{children:"Random String"})}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:"input-goup",value:n,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"password",children:Object(d.jsx)("b",{children:"Password"})}),Object(d.jsx)("input",{type:"text",className:"input-group",value:h,onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"message",children:Object(d.jsx)("b",{children:"Mesage"})}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{id:"message",cols:"60",rows:"10",value:S,onChange:function(e){return y(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"mail",children:Object(d.jsx)("b",{children:"Target Mail"})}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"text",className:"input-group",value:p,onChange:function(e){return f(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)(u.a,{variant:"success",type:"button",disabled:F,onClick:function(){fetch("https://secret-message-backends.herokuapp.com/create-message",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({randomKey:n,password:h,message:S,targetMail:p,targetURL:C})}).then((function(e){l.a.notify("Secret Message Sent")})).catch((function(e){return console.log(e)}))},children:Object(d.jsx)("b",{children:"Send"})})]})},O=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),r=Object(i.a)(a,2),j=r[0],b=r[1];return Object(s.useEffect)((function(){var e=window.location.href,t=new URL(e);n(t.searchParams.get("rs"))}),[]),Object(s.useEffect)((function(){fetch("https://secret-message-backends.herokuapp.com/message-by-id/".concat(c)).then((function(e){return e.json()})).then((function(e){var t;return b(null===(t=e.result[0])||void 0===t?void 0:t.message)}))}),[c]),Object(d.jsx)("div",{children:j?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Message"}),Object(d.jsx)("h4",{children:"This is a secret message for your!!!!"}),Object(d.jsx)("h3",{children:j})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"ooops msg not foud"}),Object(d.jsx)("h4",{children:"Message has been deleted by creator"})]})})},x=function(){var e=Object(b.f)(),t=Object(s.useState)(""),c=Object(i.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(""),j=Object(i.a)(r,2),l=j[0],h=j[1],O=Object(s.useState)(""),x=Object(i.a)(O,2),g=x[0],p=x[1],f=Object(s.useState)(!0),m=Object(i.a)(f,2),v=m[0],S=m[1];return Object(s.useEffect)((function(){S(!n||!l)})),Object(d.jsxs)(o.a,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Delete message"}),Object(d.jsx)("div",{className:"deleteMessagebtn",children:Object(d.jsx)(u.a,{variant:"success",onClick:function(){return e.push("/")},children:"Create Message"})})]}),Object(d.jsx)("label",{htmlFor:"key",children:"Secretkey"}),Object(d.jsx)("input",{type:"text",className:"input-group",value:n,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(d.jsx)("input",{type:"password",className:"input-group",value:l,onChange:function(e){return h(e.target.value)}}),g.length>0&&Object(d.jsxs)("h5",{children:["Message : ",g]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn btn-danger",disabled:v,onClick:function(){fetch("https://secret-message-backends.herokuapp.com/delete-message",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({secretKey:n,password:l})}).then((function(e){return e.json()})).then((function(e){p(e.message),S(!0)}))},children:"Delete"})]})};c(37);var g=function(e){return Object(d.jsx)(j.a,{children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(d.jsx)(h,{})}}),Object(d.jsx)(b.a,{exact:!0,path:"/delete",render:function(e){return Object(d.jsx)(x,{})}}),Object(d.jsx)(b.a,{path:"/message",render:function(e){return Object(d.jsx)(O,{})}})]})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.0bdfe9cf.chunk.js.map