(this.webpackJsonp=this.webpackJsonp||[]).push([[17],{642:function(e,t,r){"use strict";r.r(t);var n=r(4),c=(r(36),{data:function(){return{message:"redirecting.."}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,path;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.message="redirecting..",t.next=3,e.$store.dispatch("auth/afterLogin");case 3:if(r=e.$store.state.auth.isAuthenticated,e.message="get account info from api server...",!r){t.next=11;break}return t.next=8,e.$store.dispatch("account/getFromServer");case 8:e.$store.getters["account/isValid"]?(path=e.$store.state.auth.path,e.$router.push(path)):e.$router.push("/account/profile"),t.next=12;break;case 11:e.$router.push("/");case 12:case"end":return t.stop()}}),t)})))()}}),o=r(94),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  "+e._s(e.message)+"\n")])}),[],!1,null,null,null);t.default=component.exports}}]);