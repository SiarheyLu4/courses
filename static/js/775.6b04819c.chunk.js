"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[775],{1775:function(r,n,e){e.r(n),e.d(n,{default:function(){return Z}});var t,a,u=e(168),c=e(8789),s=e(1413),i=e(5861),o=e(9439),p=e(4687),f=e.n(p),h=e(2791),l=e(9827),v=e(7689),d=e(184),x=function(){var r=(0,h.useState)({item:{},loading:!1,error:null}),n=(0,o.Z)(r,2),e=n[0],t=n[1],a=(0,v.UO)().id;(0,h.useEffect)((function(){var r=function(){var r=(0,i.Z)(f().mark((function r(){var n;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t((function(r){return(0,s.Z)((0,s.Z)({},r),{},{loading:!0,error:null})})),r.next=4,(0,l.XR)(a);case 4:n=r.sent,t((function(r){return(0,s.Z)((0,s.Z)({},r),{},{item:n})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),t((function(n){return(0,s.Z)((0,s.Z)({},n),{},{error:r.t0})}));case 11:return r.prev=11,t((function(r){return(0,s.Z)((0,s.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[a,t]);var u=e.item,c=u.title,p=u.description;return(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:c}),(0,d.jsx)("p",{children:p})]})},w=c.ZP.div(t||(t=(0,u.Z)(["\nmax-width: 1140px;\nmargin: 0 auto;\n"]))),m=c.ZP.h2(a||(a=(0,u.Z)(["\nfont-size: 32px;\ntext-align: center;\nmargin:12px;\n"]))),Z=function(){return(0,d.jsxs)(w,{children:[(0,d.jsx)(m,{children:"Course Page"}),(0,d.jsx)(x,{})]})}},9827:function(r,n,e){e.d(n,{CA:function(){return o},XR:function(){return p}});var t=e(5861),a=e(4687),u=e.n(a),c=e(1243).Z.create({baseURL:"https://api.wisey.app/api/v1"}),s=function(r){c.defaults.headers.common.authorization="Bearer ".concat(r)},i=function(){var r=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c.get("/auth/anonymous?platform=subscriptions");case 3:n=r.sent,e=n.data.token,s(e),r.next=11;break;case 8:throw r.prev=8,r.t0=r.catch(0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i();case 3:return r.next=5,c.get("/core/preview-courses");case 5:return n=r.sent,e=n.data,r.abrupt("return",e.courses);case 10:throw r.prev=10,r.t0=r.catch(0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i();case 3:return r.next=5,c.get("/core/preview-courses/".concat(n));case 5:return e=r.sent,t=e.data,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),r.t0;case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=775.6b04819c.chunk.js.map