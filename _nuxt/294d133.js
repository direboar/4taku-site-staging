(this.webpackJsonp=this.webpackJsonp||[]).push([[13],{500:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(6),o=n(26),c=n(27),l=(n(38),n(32),n(3),n(13),n(96),n(40)),h=function(){function e(t,n,r){Object(o.a)(this,e),this.id=t,this.name=n,this.imageURL=r}var t,n,h;return Object(c.a)(e,null,[{key:"getMinionTypes",value:(h=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.minionTypes||(e.minionTypes=this.load(n)),t.abrupt("return",e.minionTypes);case 2:case"end":return t.stop()}}),t,this)}))),function(e){return h.apply(this,arguments)})},{key:"load",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(t){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(l.a.getAPIServerURL(),"/miniontypes"),e.next=3,t({url:n,method:"GET"});case 3:if(200===(r=e.sent).status){e.next=6;break}throw new Error("api error : ".concat(r.data));case 6:return data=r.data,e.abrupt("return",data);case 8:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})},{key:"calcUnallocated",value:(t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,e.getMinionTypes();case 3:return t.sent.forEach((function(e){n.find((function(t){return t.id===e.id}))||r.push(e)})),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})}]),e}();h.minionTypes=null},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(6),o=(n(38),n(35),n(32),n(40)),c=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,c,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.a.getAPIServerURL(),"/tiertables/").concat(n),e.next=3,t({url:r,method:"GET"});case 3:if(200===(c=e.sent).status){e.next=8;break}throw new Error("api error : ".concat(c.data));case 8:return data=c.data,l={id:data.id,name:data.name,tiers:data.tiers,ownerid:data.ownerid},e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},549:function(e,t,n){"use strict";n.r(t);var r=n(6),o=(n(38),n(60),n(75),n(302),n(3),n(13),n(96),n(32),n(512)),c=n(513),l=n(500),h=n(503),f={name:"Heros",data:function(){return{heroDatas:[],tiertable:{}}},computed:{heros:{get:function(){return this.$store.state.decktracker.heros},set:function(e){}},bans:{get:function(){return this.$store.state.decktracker.bans},set:function(e){}},headers:function(){if(!this.bans)return[];var e=[{text:"ヒーロー名",value:"name"},{text:"ランク",value:"tirescore.rank"}];return this.bans.includes("メカ")&&e.push({text:"メカ",value:"ban.Mechs"}),this.bans.includes("マーロック")&&e.push({text:"マーロック",value:"ban.Murlocs"}),this.bans.includes("獣")&&e.push({text:"獣",value:"ban.Beast"}),this.bans.includes("海賊")&&e.push({text:"海賊",value:"ban.Pirates"}),this.bans.includes("キルボア")&&e.push({text:"キルボア",value:"ban.Quillboar"}),this.bans.includes("悪魔")&&e.push({text:"悪魔",value:"ban.Demons"}),this.bans.includes("ドラゴン")&&e.push({text:"ドラゴン",value:"ban.Dragons"}),this.bans.includes("エレメンタル")&&e.push({text:"エレメンタル",value:"ban.Elementals"}),this.bans.includes("ナーガ")&&e.push({text:"ナーガ",value:"ban.Naga"}),e}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.$store.getters["account/isValid"]?e.$store.state.account.account.tierTableId:null)){t.next=5;break}return t.next=4,Object(h.a)(e.$axios,n);case 4:e.tiertable=t.sent;case 5:case"end":return t.stop()}}),t)})))()},watch:{heros:function(e){this.setHeroDatas(e),console.log(this.heroDatas)}},beforeDestroy:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("decktracker/watchEnd");case 2:case"end":return t.stop()}}),t)})))()},methods:{setHeroDatas:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=[],o=0;case 2:if(!(o<e.length)){n.next=10;break}return n.next=5,t.getHeroData(e[o]);case 5:(c=n.sent)&&r.push(c);case 7:o++,n.next=2;break;case 10:t.heroDatas=r;case 11:case"end":return n.stop()}}),n)})))()},sortByRank:function(e,t){e.sort((function(a,b){var e=a.tirescore.order-b.tirescore.order;return t?e:-1*e}));return e},getHeroData:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.getMinionTypes(t.$axios);case 2:return r=n.sent,o=null,t.tiertable.tiers.forEach((function(n){var c=n.heros.find((function(n){var r=t.$store.getters["decktrackerHeroMapping/convertToHeroName"](e.name);return n.name===r}));c&&(o={name:e.displayName,tirescore:{rank:n.name,order:n.order},ban:t.createBans(c,r)})})),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))()},createBans:function(e,t){var n=this,r={};return t.forEach((function(t){r[t.name]=n.checkBan(t.name,e)})),r},checkBan:function(e,t){return t.ban.exists.find((function(t){return t.name===e}))?"いたほうが良い":t.ban.notExists.find((function(t){return t.name===e}))?"いないほうが良い":"―"},readHeroName:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,HeroName.getMap();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},readMinderRanking:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getMap();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},readMinderHeroNameMapping:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getMap();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))()},getChipColor:function(e){return"いたほうが良い"===e?"#9CCC65":"いないほうが良い"===e?"#FFA726":void 0}}},m=n(95),v=n(135),d=n.n(v),k=n(539),x=n(636),y=n(628),w=n(629),R=n(630),C=n(631),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-expansion-panels",{attrs:{value:0}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"text-h6",attrs:{color:"primary"}},[e._v("\n      Tier表によるキャラクター評価\n    ")]),e._v(" "),n("v-expansion-panel-content",{attrs:{color:"primary"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.heroDatas,"item-key":"name","group-by":"tirescore.rank","custom-sort":e.sortByRank,"hide-default-footer":"","no-data-text":""},scopedSlots:e._u([{key:"group.header",fn:function(t){var r=t.group,o=(t.items,t.headers);t.toggle,t.isOpen,t.remove;return[n("td",[e._v("\n            ランク："+e._s(r)+"\n          ")]),e._v(" "),n("td",{attrs:{colspan:o.length-1}})]}},{key:"item.ban.Pirates",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Pirates),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Pirates)+"\n          ")])]}},{key:"item.ban.Demons",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Demons),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Demons)+"\n          ")])]}},{key:"item.ban.Beast",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Beast),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Beast)+"\n          ")])]}},{key:"item.ban.Mechs",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Mechs),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Mechs)+"\n          ")])]}},{key:"item.ban.Dragons",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Dragons),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Dragons)+"\n          ")])]}},{key:"item.ban.Quillboar",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Quillboar),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Quillboar)+"\n          ")])]}},{key:"item.ban.Murlocs",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Murlocs),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Murlocs)+"\n          ")])]}},{key:"item.ban.Elementals",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Elementals),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Elementals)+"\n          ")])]}},{key:"item.ban.Naga",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getChipColor(r.ban.Naga),"text-color":"black",dark:""}},[e._v("\n            "+e._s(r.ban.Naga)+"\n          ")])]}}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VChip:k.a,VDataTable:x.a,VExpansionPanel:y.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:R.a,VExpansionPanels:C.a})}}]);