(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{650:function(e,t,r){"use strict";r.r(t);var n=r(4),c=(r(38),{components:{GoogleAdsence:r(304).default},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var path;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("auth/afterLogin");case 2:if(!e.$store.state.auth.isAuthenticated){t.next=9;break}return t.next=6,e.$store.dispatch("account/getFromServer");case 6:e.$store.getters["account/isValid"]?(path=e.$store.state.auth.path,e.$router.push(path)):e.$router.push("/account/profile"),t.next=10;break;case 9:e.$router.push("/");case 10:case"end":return t.stop()}}),t)})))()}}),o=r(75),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  redirecting..\n  ")])}),[],!1,null,null,null);t.default=component.exports}}]);