(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1123:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Me}));var r,c,a,s,u,i,o,l,b,j,f,p,d,O,h,x,m,v,g,w,y,k=n(24),S=n(0),C=n(11),E=n(5),I=n(44),A=n(103),R=n(20),B=n(168),L=n(4),M=n.n(L),z=n(15),D=n(18),H=n(30),K=n(19),N=n(29),Q=n(42),q=n(857),T=function(){var e=Object(S.useState)(!0),t=Object(D.a)(e,2),n=t[0],r=t[1],c=Object(Q.l)();return Object(S.useEffect)((function(){c&&function(){var e=Object(z.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.b)(c);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]),n},U=n(852),F=n(877),P=n(858),Y=n(864),W=n(281),J=function(e){var t=Object(S.useState)(!1),n=Object(D.a)(t,2),r=n[0],c=n[1],a=Object(W.c)().onApprove;return{handleApprove:Object(S.useCallback)(Object(z.a)(M.a.mark((function t(){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(!0),t.next=4,a();case 4:t.sent||c(!1),e(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),[a,e]),requestedApproval:r}},V=n(875),X=n(2),Z=C.e.div(r||(r=Object(k.a)(["\n  text-align: left;\n  overflow-y: auto;\n  max-height: 400px;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),$=function(e){var t=e.onDismiss,n=Object(R.b)().t;return Object(X.jsxs)(E.ob,{title:n("Warning"),onDismiss:t,children:[Object(X.jsxs)(Z,{children:[n("Lottery ticket purchases are final."),Object(X.jsx)("br",{}),n("Your CAKE will not be returned to you after you spend it to buy tickets."),Object(X.jsx)("br",{}),n("Tickets are only valid for one lottery draw, and will be burned after the draw."),Object(X.jsx)("br",{}),n("Buying tickets does not guarantee you will win anything. Please only participate once you understand the risks.")]}),Object(X.jsx)(V.a,{children:Object(X.jsx)(E.q,{width:"100%",onClick:t,children:n("I understand")})})]})},G=C.e.div(c||(c=Object(k.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),_=C.e.div(a||(a=Object(k.a)(["\n  align-items: center;\n  display: flex;\n"]))),ee=C.e.div(s||(s=Object(k.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),te=C.e.span(u||(u=Object(k.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),ne=function(e){var t=e.max,n=e.symbol,r=e.availableSymbol,c=e.onChange,a=e.onSelectMax,s=e.value,u=Object(R.b)().t;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsxs)(E.R,{alignItems:"center",children:[Object(X.jsx)(E.Z,{type:"number",inputMode:"numeric",min:"0",onChange:c,placeholder:"0",value:s}),Object(X.jsxs)(_,{children:[Object(X.jsx)(G,{}),Object(X.jsx)(te,{children:n}),Object(X.jsx)(G,{}),Object(X.jsx)(E.q,{scale:"sm",onClick:a,children:u("Max")})]})]}),Object(X.jsx)(ee,{children:u("%num% %symbol% Available",{num:t.toLocaleString(),symbol:r})})]})},re=n(36),ce=function(e){var t,n=e.max,r=e.onDismiss,c=Object(S.useState)("1"),a=Object(D.a)(c,2),s=a[0],u=a[1],i=Object(S.useState)(!1),o=Object(D.a)(i,2),l=o[0],b=o[1],j=Object(S.useState)(!1),f=Object(D.a)(j,2)[1],p=Object(R.b)().t,d=Object(S.useMemo)((function(){return Object(N.c)(n)}),[n]),O=Object(S.useMemo)((function(){return parseInt(Object(N.e)(n.div(re.k)),10)}),[n]),h=Object(F.b)().onMultiBuy,x=Object(F.a)(),m=Object(S.useCallback)(Object(z.a)(M.a.mark((function e(){var t,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f(!0),t=parseInt(s),n=Array.apply(null,{length:t}).map((function(){return[Math.floor(Math.random()*x)+1,Math.floor(Math.random()*x)+1,Math.floor(Math.random()*x)+1,Math.floor(Math.random()*x)+1]})),e.next=6,h(re.k.toString(),n);case 6:e.sent&&f(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[h,f,x,s]),v=Object(S.useCallback)((function(){Number(O)>re.j?u(re.j.toString()):u(O.toString())}),[O]);return Object(X.jsxs)(E.ob,{title:p("Enter amount of tickets to buy"),onDismiss:r,children:[Object(X.jsx)(ne,{value:s,onSelectMax:v,onChange:function(e){e.currentTarget.validity.valid&&u(e.currentTarget.value)},max:d,symbol:p("Ticket").toUpperCase(),availableSymbol:"CAKE"}),Object(X.jsx)("div",{children:Object(X.jsx)(ae,{children:p("1 Ticket = %lotteryPrice% CAKE",{lotteryPrice:re.k})})}),Object(X.jsxs)("div",{children:[Object(X.jsx)(ue,{children:p("Ticket purchases are final. Your CAKE cannot be returned to you after buying tickets.")}),Object(X.jsx)(se,{children:p("You will spend: %num% CAKE",{num:(t=s,+t*re.k)})})]}),Object(X.jsxs)(V.a,{children:[Object(X.jsx)(E.q,{width:"100%",variant:"secondary",onClick:r,children:p("Cancel")}),Object(X.jsx)(E.q,{id:"lottery-buy-complete",width:"100%",disabled:l||!Number.isInteger(parseInt(s))||parseInt(s)>Number(O)||parseInt(s)>re.j||parseInt(s)<1,onClick:Object(z.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,m();case 3:b(!1),r();case 5:case"end":return e.stop()}}),e)}))),children:p(l?"Pending Confirmation":"Confirm")})]})]})},ae=C.e.div(i||(i=Object(k.a)(["\n  margin-left: 0.4em;\n  font-size: 14px;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),se=C.e.div(o||(o=Object(k.a)(["\n  margin-top: 1em;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),ue=C.e.div(l||(l=Object(k.a)(["\n  margin-top: 1em;\n  margin-left: 0.4em;\n  color: #ed4b9e;\n"]))),ie=n(125),oe=n(32),le=n(16),be=n(859),je=n(867),fe=C.e.div(b||(b=Object(k.a)(["\n  margin-bottom: 24px;\n"]))),pe=function(e){var t=e.claimAmount,n=Object(R.b)().t,r=Object(H.c)().account,c=Object(N.c)(t),a=Object(oe.H)(),s=new le.BigNumber(c).multipliedBy(a).toNumber();return r?Object(X.jsxs)(fe,{children:[Object(X.jsx)(be.a,{value:c,lineHeight:"1.5"}),a.gt(0)&&Object(X.jsx)(je.a,{value:s,decimals:2})]}):Object(X.jsx)(E.Qb,{color:"textDisabled",style:{lineHeight:"76px"},children:n("Locked")})},de=function(){var e=Object(R.b)().t;return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(E.Qb,{bold:!0,fontSize:"24px",style:{lineHeight:"1.5"},children:e("Coming Soon")}),Object(X.jsx)("br",{})]})},Oe=Object(C.e)(E.u)(j||(j=Object(k.a)(["\n  background-image: url('/images/ticket-bg.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),he=C.e.div(f||(f=Object(k.a)(["\n  margin-bottom: 16px;\n"]))),xe=C.e.img(p||(p=Object(k.a)(["\n  margin-bottom: 16px;\n"]))),me=C.e.div(d||(d=Object(k.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),ve=C.e.div(O||(O=Object(k.a)(["\n  display: flex;\n  margin-top: 24px;\n  button {\n    flex: 1 0 50%;\n  }\n"]))),ge=function(){var e=Object(H.c)().account,t=T(),n=Object(S.useState)(!1),r=Object(D.a)(n,2),c=r[0],a=r[1],s=Object(R.b)().t,u=Object(Y.b)(),i=Object(E.kc)(Object(X.jsx)($,{})),o=Object(D.a)(i,1)[0],l=Object(P.b)(),b=l.claimAmount,j=l.setLastUpdated,f=Object(F.c)().onMultiClaim,p=Object(U.a)(Object(K.d)()),d=J(o),O=d.handleApprove,h=d.requestedApproval,x=Object(S.useCallback)(Object(z.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,f();case 4:e.sent&&(a(!1),j()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[f,a,j]),m=Object(E.kc)(Object(X.jsx)(ce,{max:p})),v=Object(D.a)(m,1)[0];return Object(X.jsx)(Oe,{children:Object(X.jsxs)(E.v,{children:[Object(X.jsx)(E.S,{scale:"xl",mb:"24px",children:s("Your Lottery Winnings")}),Object(X.jsx)(xe,{src:"/images/ticket.svg",alt:"cake logo",width:64,height:64}),Object(X.jsxs)(he,{children:[Object(X.jsxs)(me,{children:[s("CAKE to Collect"),":"]}),Object(X.jsx)(pe,{claimAmount:b})]}),Object(X.jsxs)(he,{children:[Object(X.jsxs)(me,{children:[s("Total jackpot this round"),":"]}),Object(X.jsx)(de,{})]}),e?Object(X.jsxs)(ve,{children:[Object(X.jsx)(E.q,{id:"dashboard-collect-winnings",disabled:0===Object(N.c)(b)||c,onClick:x,style:{marginRight:"8px"},children:s("Collect Winnings")}),u.toNumber()?t?Object(X.jsxs)(E.q,{disabled:!0,children:[" ",s("On sale soon")]}):Object(X.jsx)(E.q,{id:"dashboard-buy-tickets",variant:"secondary",onClick:v,children:s("Buy Tickets")}):Object(X.jsx)(E.q,{width:"100%",disabled:h,onClick:O,children:s("Approve CAKE")})]}):Object(X.jsx)(ve,{children:Object(X.jsx)(ie.a,{width:"100%"})})]})})},we=Object(C.e)(E.u)(h||(h=Object(k.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ye=C.e.div(x||(x=Object(k.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ke=function(){var e=Object(R.b)().t,t=Object(U.d)(),n=Object(N.c)(Object(U.b)(Object(K.d)())),r=t?Object(N.c)(t)-n:0;return Object(X.jsx)(we,{children:Object(X.jsxs)(E.v,{children:[Object(X.jsx)(E.S,{scale:"xl",mb:"24px",children:e("ICEBRK Stats")}),Object(X.jsxs)(ye,{children:[Object(X.jsx)(E.Qb,{fontSize:"14px",children:e("Total ICEBRK Supply")}),r&&Object(X.jsx)(be.a,{fontSize:"14px",value:r})]}),Object(X.jsxs)(ye,{children:[Object(X.jsx)(E.Qb,{fontSize:"14px",children:e("Total ICEBRK Burned")}),Object(X.jsx)(be.a,{fontSize:"14px",decimals:0,value:n})]})]})})},Se=n(98),Ce=Object(C.e)(E.u)(m||(m=Object(k.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n\n  transition: opacity 200ms;\n  &:hover {\n    opacity: 0.65;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Ee=Object(C.e)(E.S).attrs({scale:"xl"})(v||(v=Object(k.a)(["\n  line-height: 44px;\n"]))),Ie=function(){var e=Object(R.b)().t;return Object(X.jsx)(Ce,{children:Object(X.jsx)(Se.b,{exact:!0,activeClassName:"active",to:"/lottery",id:"lottery-pot-cta",children:Object(X.jsxs)(E.v,{children:[Object(X.jsx)(E.S,{color:"contrast",scale:"lg",children:e("Lottery")}),Object(X.jsx)(Ee,{color:"#7645d9",children:e("Coming Soon")}),Object(X.jsxs)(E.R,{justifyContent:"space-between",children:[Object(X.jsx)(E.S,{color:"contrast",scale:"lg"}),Object(X.jsx)(E.e,{mt:30,color:"primary"})]})]})})})},Ae=n(79),Re=C.e.div(g||(g=Object(k.a)(["\n  align-items: center;\n  background-image: url('/images/egg/","');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/ICEBRK.png'), url('/images/blue-hex.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.isDark?"LogoHeaderLight240x83.png":"LogoHeaderDark240x83.png"}),(function(e){return e.theme.mediaQueries.lg})),Be=Object(C.e)(E.i)(w||(w=Object(k.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Le=Object(C.e)(E.i)(y||(y=Object(k.a)(["\n  align-items: start;\n  margin-bottom: 24px;\n  grid-gap: 24px;\n\n  & > div {\n    grid-column: span 6;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    margin-bottom: 32px;\n    grid-gap: 32px;\n\n    & > div {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Me=function(){var e=Object(R.b)().t,t=Object(I.b)(),n=Object(Ae.a)().isDark?"primary":"secondary",r=!Object(E.jc)().isXl?"":e("ICEBRK-R");return Object(S.useEffect)((function(){t(Object(A.c)(A.d.map((function(e){return e.pid}))))}),[t]),Object(X.jsxs)(B.a,{children:[Object(X.jsxs)(Re,{children:[Object(X.jsx)(E.S,{as:"h1",scale:"xl",mb:"24px",color:n,children:r}),Object(X.jsx)(E.Qb,{children:e("Powered by the Binance Smart Chain.")})]}),Object(X.jsxs)("div",{children:[Object(X.jsx)(Be,{children:Object(X.jsx)(ge,{})}),Object(X.jsx)(Le,{children:Object(X.jsx)(Ie,{})}),Object(X.jsx)(Be,{children:Object(X.jsx)(ke,{})})]})]})}},852:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return x}));var r=n(4),c=n.n(r),a=n(15),s=n(18),u=n(0),i=n(16),o=n.n(i),l=n(30),b=n(33),j=n(25),f=n(48),p=n(111),d=n(273),O=function(){var e=Object(p.a)().slowRefresh,t=Object(u.useState)(),n=Object(s.a)(t,2),r=n[0],i=n[1];return Object(u.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,i(new o.a(1e9*n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},h=function(e){var t=Object(u.useState)(j.c),n=Object(s.a)(t,2),r=n[0],i=n[1],l=Object(p.a)().slowRefresh,d=Object(f.a)();return Object(u.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,d),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t.t0=t.sent,r=1e9*t.t0,i(new o.a(r));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[d,e,l]),r},x=function(){var e=Object(u.useState)(j.c),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(l.c)().account,b=Object(d.a)(),p=b.lastUpdated,O=b.setLastUpdated,h=Object(f.a)();return Object(u.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getBalance(i);case 2:t=e.sent,r(new o.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,h,p,r]),{balance:n,refresh:O}};t.a=function(e){var t=Object(u.useState)(j.c),n=Object(s.a)(t,2),r=n[0],i=n[1],d=Object(l.c)().account,O=Object(f.a)(),h=Object(p.a)().fastRefresh;return Object(u.useEffect)((function(){d&&function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e,O),t.next=3,n.methods.balanceOf(d).call();case 3:r=t.sent,i(new o.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[d,e,O,h]),r}},857:function(e,t,n){"use strict";n.d(t,"i",(function(){return h})),n.d(t,"e",(function(){return x})),n.d(t,"j",(function(){return v})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return w})),n.d(t,"d",(function(){return y})),n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return C})),n.d(t,"h",(function(){return E}));var r=n(4),c=n.n(r),a=n(15),s=n(16),u=n.n(s),i=n(835),o=n(68),l=n(291),b=n(290),j=n(289),f=n(36),p=n(19),d=n(25),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s,u,b,j,f,d,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(o.b)(),a=new r.eth.Contract(l,Object(p.m)()),s=new i.b(t),u=[],!(n.length>100)){e.next=13;break}b=0,j=c.a.mark((function e(){var t,r,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.slice(100*b,100*(b+1)),r=t.map((function(e){return[e[0].toLowerCase(),s.encodeFunctionData(e[1],e[2])]})),e.next=4,a.methods.aggregate(r).call();case 4:i=e.sent,o=i.returnData,b++,u=u.concat(o.map((function(e,n){return s.decodeFunctionResult(t[n][1],e)})));case 8:case"end":return e.stop()}}),e)}));case 7:if(!(b<n.length/100)){e.next=11;break}return e.delegateYield(j(),"t0",9);case 9:e.next=7;break;case 11:e.next=19;break;case 13:return f=n.map((function(e){return[e[0].toLowerCase(),s.encodeFunctionData(e[1],e[2])]})),e.next=16,a.methods.aggregate(f).call();case 16:d=e.sent,O=d.returnData,u=O.map((function(e,t){return s.decodeFunctionResult(n[t][1],e)}));case 19:return e.abrupt("return",u);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t.methods.multiBuy(new u.a(n).times(f.i).toString(),r).send({from:a}).on("transactionHash",(function(e){return e.transactionHash})));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t,n,r,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,s){var i,o,l,j,f,p,d,h,x,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=s,e.t0){e.next=5;break}return e.next=4,t.methods.issueIndex().call();case 4:e.t0=e.sent;case 5:return i=e.t0,e.next=8,m(n,r);case 8:return o=e.sent,l=Array.apply(null,{length:o}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=12,O(b,l);case 12:return j=e.sent,f=j.map((function(e){return e.toString()})),p=f.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=17,O(b,p);case 17:return d=e.sent,h=[],d.forEach(function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:new u.a(t).eq(i)&&h.push(f[n]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),x=h.map((function(e){return[n.options.address,"getLotteryNumbers",[e]]})),e.next=23,O(b,x);case 23:return v=e.sent,e.next=26,S(t);case 26:return e.abrupt("return",v);case 27:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.balanceOf(n).call());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,s,u,i,o,l,f,p,d,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return e.next=4,m(n,r);case 4:return a=e.sent,s=Array.apply(null,{length:a}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=8,O(b,s);case 8:return u=e.sent,i=u.map((function(e){return e.toString()})),o=i.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=13,O(b,o);case 13:return l=e.sent,f=i.filter((function(e,t){return!l[t][0]})),p=f.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=18,O(j,p);case 18:return d=e.sent,h=[],d.forEach((function(e,t){e>0&&h.push(f[t])})),h.length>200&&(h=h.slice(0,200)),e.prev=22,e.abrupt("return",t.methods.multiClaim(h).send({from:r}).on("transactionHash",(function(e){return e.transactionHash})));case 26:return e.prev=26,e.t0=e.catch(22),e.abrupt("return",console.error(e.t0));case 29:case"end":return e.stop()}}),e,null,[[22,26]])})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var s,i,o,l,f,p,h,x,v,g,w,y,k,C;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.methods.issueIndex().call();case 3:return s=e.sent,e.next=6,m(n,r);case 6:return i=e.sent,o=Array.apply(null,{length:i}).map((function(e,t){return[n.options.address,"tokenOfOwnerByIndex",[r,t]]})),e.next=10,O(b,o);case 10:return l=e.sent,f=l.map((function(e){return e.toString()})),p=f.map((function(e){return[n.options.address,"getLotteryIssueIndex",[e]]})),e.next=15,O(b,p);case 15:return h=e.sent,x=f.map((function(e){return[n.options.address,"getClaimStatus",[e]]})),e.next=19,O(b,x);case 19:return v=e.sent,e.next=22,S(t);case 22:return g=e.sent,w=[],h.forEach(function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(g||t.toString()!==s)&&(v[n][0]||w.push(f[n]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),y=w.map((function(e){return[t.options.address,"getRewardView",[e]]})),e.next=28,O(j,y);case 28:return k=e.sent,C=k.reduce((function(e,t){return u.a.sum(e,t)}),d.c),e.abrupt("return",C);case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0);case 36:return e.abrupt("return",d.c);case 37:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(t,n,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",t.methods.getTotalRewards(n).call());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.maxNumber().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.methods.drawed().call());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return r=e.sent,e.next=5,t.methods.drawed().call();case 5:return e.sent||(r-=1),e.prev=7,e.next=10,t.methods.historyAmount(r,5-n).call();case 10:return a=e.sent,e.abrupt("return",new u.a(a).div(f.i).div(f.k).toNumber());case 14:e.prev=14,e.t0=e.catch(7),console.error(e.t0);case 17:return e.abrupt("return",0);case 18:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.methods.issueIndex().call();case 2:return n=e.sent,r=[],e.next=6,t.methods.drawed().call();case 6:if((a=e.sent)||0!==parseInt(n,10)){e.next=9;break}return e.abrupt("return",[0,0,0,0]);case 9:if(a){e.next=22;break}s=0;case 11:if(!(s<4)){e.next=20;break}return e.t0=r,e.next=15,t.methods.historyNumbers(n-1,s).call();case 15:e.t1=+e.sent.toString(),e.t0.push.call(e.t0,e.t1);case 17:s++,e.next=11;break;case 20:e.next=32;break;case 22:u=0;case 23:if(!(u<4)){e.next=32;break}return e.t2=r,e.next=27,t.methods.winningNumbers(u).call();case 27:e.t3=+e.sent.toString(),e.t2.push.call(e.t2,e.t3);case 29:u++,e.next=23;break;case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},858:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d}));var r=n(4),c=n.n(r),a=n(15),s=n(18),u=n(0),i=n(30),o=(n(16),n(42)),l=n(25),b=n(111),j=n(857),f=n(273),p=function(){var e=Object(u.useState)(l.c),t=Object(s.a)(e,2),n=t[0],r=t[1],b=Object(u.useState)(!1),p=Object(s.a)(b,2),d=p[0],O=p[1],h=Object(i.c)().account,x=Object(o.m)(),m=Object(o.l)(),v=Object(f.a)(),g=v.lastUpdated,w=v.setLastUpdated,y=Object(u.useCallback)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,Object(j.f)(m,x,h);case 3:t=e.sent,r(t),O(!1);case 6:case"end":return e.stop()}}),e)}))),[h,m,x]);return Object(u.useEffect)((function(){h&&m&&x&&y()}),[h,y,m,x,g]),{claimLoading:d,claimAmount:n,setLastUpdated:w}},d=function(){var e=Object(u.useState)([0,0,0,0]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(o.l)(),l=Object(b.a)().fastRefresh;return Object(u.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.h)(i);case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,i,r]),n};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(u.useState)([]),n=Object(s.a)(t,2),r=n[0],l=n[1],f=Object(i.c)(),p=f.account,d=Object(o.m)(),O=Object(o.l)(),h=Object(b.a)(),x=h.fastRefresh;return Object(u.useEffect)((function(){p&&O&&d&&function(){var t=Object(a.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.e)(O,d,p,e);case 2:n=t.sent,l(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,O,d,x,e]),r}},859:function(e,t,n){"use strict";var r=n(0),c=n(274),a=n(5),s=n(2);t.a=function(e){var t=e.value,n=e.decimals,u=e.fontSize,i=void 0===u?"40px":u,o=e.lineHeight,l=void 0===o?"1":o,b=e.prefix,j=void 0===b?"":b,f=e.bold,p=void 0===f||f,d=e.color,O=void 0===d?"text":d,h=Object(c.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),x=h.countUp,m=h.update,v=Object(r.useRef)(m);return Object(r.useEffect)((function(){v.current(t)}),[t,v]),Object(s.jsxs)(a.Qb,{bold:p,fontSize:i,style:{lineHeight:l},color:O,children:[j,x]})}},864:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return h}));var r=n(4),c=n.n(r),a=n(15),s=n(18),u=n(0),i=n(16),o=n.n(i),l=n(30),b=n(19),j=n(25),f=n(42),p=n(111),d=function(){var e=Object(u.useState)(j.c),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(l.c)().account,d=Object(f.c)(),O=Object(p.a)().fastRefresh;return Object(u.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.methods.allowance(i,Object(b.r)()).call();case 2:t=e.sent,r(new o.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,d,O]),n},O=function(){var e=Object(u.useState)(j.c),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(l.c)().account,d=Object(f.c)(),O=Object(p.a)().fastRefresh;return Object(u.useEffect)((function(){i&&function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.methods.allowance(i,Object(b.i)()).call();case 2:t=e.sent,r(new o.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,d,O]),n},h=function(e,t,n){var r=Object(l.c)().account,i=Object(u.useState)(j.c),b=Object(s.a)(i,2),f=b[0],p=b[1];return Object(u.useEffect)((function(){r&&function(){var n=Object(a.a)(c.a.mark((function n(){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.methods.allowance(r,t).call();case 3:a=n.sent,p(new o.a(a)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}()()}),[r,t,e,n]),f}},867:function(e,t,n){"use strict";var r=n(14),c=(n(0),n(859)),a=n(2);t.a=function(e){return Object(a.jsx)(c.a,Object(r.a)({fontSize:"14px",lineHeight:"1.1",color:"textSubtle",prefix:"~$",bold:!1,decimals:2},e))}},875:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,c,a,s=n(24),u=n(0),i=n.n(u),o=n(11),l=n(2),b=o.e.div(r||(r=Object(s.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),j=function(e){var t,n=e.size,r=void 0===n?"md":n,c=Object(u.useContext)(o.a).spacing;switch(r){case"lg":t=c[6];break;case"sm":t=c[2];break;case"md":default:t=c[4]}return Object(l.jsx)(b,{size:t})},f=o.e.div(c||(c=Object(s.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px 0;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),p=o.e.div(a||(a=Object(s.a)(["\n  flex: 1;\n"]))),d=function(e){var t=e.children,n=i.a.Children.toArray(t).length;return Object(l.jsx)(f,{children:i.a.Children.map(t,(function(e,t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{children:e}),t<n-1&&Object(l.jsx)(j,{})]})}))})}},877:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f}));var r=n(18),c=n(4),a=n.n(c),s=n(15),u=n(0),i=n(30),o=n(42),l=n(857),b=function(){var e=Object(i.c)().account,t=Object(o.l)(),n=Object(o.m)();return{onMultiClaim:Object(u.useCallback)(Object(s.a)(a.a.mark((function r(){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(l.j)(t,n,e);case 3:return c=r.sent,r.abrupt("return",c);case 7:return r.prev=7,r.t0=r.catch(0),r.abrupt("return",!1);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),[e,t,n])}},j=function(){var e=Object(i.c)().account,t=Object(o.l)();return{onMultiBuy:Object(u.useCallback)(function(){var n=Object(s.a)(a.a.mark((function n(r,c){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(l.i)(t,r,c,e);case 3:return s=n.sent,n.abrupt("return",s);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),[e,t])}},f=function(){var e=Object(u.useState)(5),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(o.l)(),b=Object(u.useCallback)(Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.d)(i);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),[i]);return Object(u.useEffect)((function(){i&&b()}),[i,b]),n}}}]);
//# sourceMappingURL=7.d3b1edf4.chunk.js.map