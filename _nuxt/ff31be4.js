(this.webpackJsonp=this.webpackJsonp||[]).push([[20],{544:function(e,t,n){"use strict";n.r(t);var r=n(545),o=n.n(r);t.default={ssr:!1,target:"static",head:{titleTemplate:"%s - 4taku",title:"4taku",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}]},css:[],plugins:[{src:"plugins/vue-papaparse.js",ssr:!1},"@/plugins/vue-draggable","@/plugins/vuetify","@/plugins/axios","@/plugins/persistedstate","@/plugins/auth0","@/plugins/confirmAuthState"],components:!0,buildModules:["@nuxtjs/vuetify"],modules:["@nuxtjs/pwa","@nuxtjs/axios",["@nuxtjs/google-adsense",{id:"ca-pub-9097509632200457"}]],env:{xxx:"/4taku-site-staging/"},axios:{baseURL:"/"},pwa:{manifest:{lang:"en"}},vuetify:{customVariables:["~/assets/variables.scss"],theme:{dark:!0,themes:{dark:{primary:o.a.blue.darken2,accent:o.a.grey.darken3,secondary:o.a.amber.darken3,info:o.a.teal.lighten1,warning:o.a.amber.base,error:o.a.deepOrange.accent4,success:o.a.green.accent3}}}},router:{base:"/4taku-site-staging/",middleware:["auth"]},build:{extend:function(e){var t=e.module,output=e.output;t.rules.unshift({test:/\.worker\.js$/,loader:"worker-loader"}),output.globalObject="this"}}}},653:function(e,t,n){"use strict";n.r(t);var r,o,c=n(5),l=(n(35),n(39),n(658)),d=n(646),m=n(37),f=(n(544),{middleware:"authenticated",name:"tiers",data:function(){return{headers:[{text:"id",value:"id"},{text:"名前",value:"name"},{text:"作成者",value:"ownerName"},{text:"更新日時",value:"updatedAt"},{text:"—",value:"action"}],options:{},tiertables:[],page:1,pageCount:3,itemsPerPage:13,owner:!0}},watch:{page:(o=Object(c.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTiertables();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)}),owner:(r=Object(c.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getTiertables();case 2:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},computed:{},mounted:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getTiertables();case 2:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){},methods:{showTierTable:function(e){this.$router.push("/tiertable/edit?id=".concat(e.id))},getTiertables:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=(e.page-1)*e.itemsPerPage,r=e.itemsPerPage,o="".concat(m.a.getAPIServerURL(),"/tiertables?offset=").concat(n,"&limit=").concat(r),e.owner&&(o+="&owner=".concat(e.owner,"&accountId=").concat(e.$store.state.account.account.id)),t.next=6,e.$axios({url:o,method:"GET"});case 6:if(200===(c=t.sent).status){t.next=9;break}throw new Error("api error : ".concat(c.data));case 9:data=c.data,e.tiertables=data.entity,e.pageCount=Math.floor(data.totalCount/e.itemsPerPage)+1,data.totalCount===(e.pageCount-1)*e.itemsPerPage&&(e.pageCount=e.pageCount-1);case 13:case"end":return t.stop()}}),t)})))()},formatDate:function(e){var t=Object(l.a)(e);return Object(d.a)(t,"yyyy/MM/dd HH:mm:ss")}}}),h=f,v=n(75),w=n(135),x=n.n(w),k=n(219),y=n(486),j=n(480),C=n(657),P=n(647),T=n(644),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v("BattleGround Tier表一覧")]),e._v(" "),n("v-card-actions",[n("v-checkbox",{attrs:{label:"自分が登録したTier表を表示"},model:{value:e.owner,callback:function(t){e.owner=t},expression:"owner"}})],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tiertables,page:e.page,"items-per-page":e.itemsPerPage,"item-key":"name","hide-default-footer":!0},on:{"update:page":function(t){e.page=t}},scopedSlots:e._u([{key:"item.action",fn:function(t){var r=t.item;return[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.showTierTable(r)}}},[e._v("表示")])]}},{key:"item.updatedAt",fn:function(t){var r=t.item;return[n("span",[e._v(e._s(e.formatDate(r.updatedAt)))])]}}])}),e._v(" "),n("div",{staticClass:"text-center pt-2"},[n("v-pagination",{attrs:{length:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)],1)}),[],!1,null,"41ebc506",null);t.default=component.exports;x()(component,{VBtn:k.a,VCard:y.a,VCardActions:j.a,VCardTitle:j.c,VCheckbox:C.a,VDataTable:P.a,VPagination:T.a})}}]);