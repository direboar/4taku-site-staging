(this.webpackJsonp=this.webpackJsonp||[]).push([[13,7,8],{481:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var o=t(5),r=t(26),c=t(27),l=(t(38),t(32),t(3),t(12),t(86),t(36)),v=function(){function e(n,t,o){Object(r.a)(this,e),this.id=n,this.name=t,this.imageURL=o}var n,t,v;return Object(c.a)(e,null,[{key:"getMinionTypes",value:(v=Object(o.a)(regeneratorRuntime.mark((function n(t){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.minionTypes||(e.minionTypes=this.load(t)),n.abrupt("return",e.minionTypes);case 2:case"end":return n.stop()}}),n,this)}))),function(e){return v.apply(this,arguments)})},{key:"load",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(n){var t,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(l.a.getAPIServerURL(),"/miniontypes"),e.next=3,n({url:t,method:"GET"});case 3:if(200===(o=e.sent).status){e.next=6;break}throw new Error("api error : ".concat(o.data));case 6:return data=o.data,e.abrupt("return",data);case 8:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})},{key:"calcUnallocated",value:(n=Object(o.a)(regeneratorRuntime.mark((function n(t){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=[],n.next=3,e.getMinionTypes();case 3:return n.sent.forEach((function(e){t.find((function(n){return n.id===e.id}))||o.push(e)})),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)}))),function(e){return n.apply(this,arguments)})}]),e}();v.minionTypes=null},482:function(e,n,t){"use strict";t.r(n);var o={name:"GoogleAdsence"},r=t(96),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("adsbygoogle",{attrs:{"ad-slot":"5862743108"}})}),[],!1,null,null,null);n.default=component.exports},483:function(e,n,t){var content=t(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(23).default)("6e80afcb",content,!0,{sourceMap:!1})},486:function(e,n,t){"use strict";t.r(n);var o=t(5),r=(t(38),t(32),t(657)),c=t(481),l={props:{dialog:Boolean,hero:{type:Object},editable:{type:Boolean,default:!1}},data:function(){return{id:Object(r.a)(),name:"XXX",displayName:"XXX",imageURL:"XXX",memo:"",ban:null,heroMemoURL:""}},computed:{},watch:{hero:function(e){e&&(this.id=e.id,this.name=e.name,this.displayName=e.displayName,this.imageURL=e.imageURL,this.memo=e.memo,this.ban=e.ban,this.heroMemoURL=e.heroMemoURL)}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createBan();case 2:e.ban=n.sent;case 3:case"end":return n.stop()}}),n)})))()},methods:{save:function(){this.$emit("updateHero",{ban:this.ban,memo:this.memo,heroMemoURL:this.heroMemoURL}),this.$emit("update:dialog",!1)},createBan:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=Object(r.a)(),n.t1=[],n.t2=[],n.t3=[],n.next=6,c.a.getMinionTypes(e.$axios);case 6:return n.t4=n.sent,n.abrupt("return",{id:n.t0,required:n.t1,desierd:n.t2,needless:n.t3,unallocated:n.t4});case 8:case"end":return n.stop()}}),n)})))()},createGroup:function(e){return"group_".concat(e)}}},v=(t(488),t(96)),d=t(135),h=t.n(d),x=t(219),f=t(490),m=t(479),y=t(559),k=t(477),w=t(577),_=t(169),O=t(560),j=t(574),C=t(643),component=Object(v.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:e.dialog,callback:function(n){e.dialog=n},expression:"dialog"}},[t("v-card",{attrs:{color:"black"}},[t("v-card-title",[t("v-container",{staticStyle:{"background-color":"#424242"}},[t("v-row",[t("v-col",{attrs:{cols:"1"}},[t("img",{staticClass:"image",attrs:{src:e.imageURL}})]),e._v(" "),t("v-col",{attrs:{cols:"3"}},[e._v("\n            "+e._s(e.displayName)+"の詳細\n          ")]),e._v(" "),t("v-col",{attrs:{cols:"6"}}),e._v(" "),t("v-col",{attrs:{cols:"2"}},[e.editable?t("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",large:""},on:{click:e.save}},[e._v("\n              更新\n            ")]):e._e(),e._v(" "),t("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:"",large:""},on:{click:function(n){return e.$emit("update:dialog",!1)}}},[e._v("\n              戻る\n            ")])],1)],1)],1)],1),e._v(" "),t("v-container",{staticStyle:{"background-color":"#616161"}},[t("v-row",[t("v-col",{attrs:{cols:"6"}},[t("v-img",{attrs:{src:e.heroMemoURL}})],1),e._v(" "),t("v-col",{attrs:{cols:"6"}},[t("v-text-field",{attrs:{label:"ヒーローメモ画像ファイルのURL"},model:{value:e.heroMemoURL,callback:function(n){e.heroMemoURL=n},expression:"heroMemoURL"}}),e._v(" "),t("v-textarea",{attrs:{label:"ヒーロー攻略メモ"},model:{value:e.memo,callback:function(n){e.memo=n},expression:"memo"}})],1)],1)],1),e._v(" "),t("v-container",{staticStyle:{"background-color":"#000000"}},[t("v-row",[t("v-col",{staticClass:"text-h4",attrs:{cols:"12"}},[e._v("有利BAN")])],1),e._v(" "),t("v-row",[t("v-col",{staticClass:"text-h6",staticStyle:{"background-color":"#424242"},attrs:{cols:"3"}},[e._v("未割当")]),e._v(" "),t("v-col",{staticClass:"text-h6",staticStyle:{"background-color":"#B71C1C"},attrs:{cols:"3"}},[e._v("必須")]),e._v(" "),t("v-col",{staticClass:"text-h6",staticStyle:{"background-color":"#0D47A1"},attrs:{cols:"3"}},[e._v("欲しい")]),e._v(" "),t("v-col",{staticClass:"text-h6",staticStyle:{"background-color":"#607D8B"},attrs:{cols:"3"}},[e._v("不要")])],1),e._v(" "),e.ban?t("v-row",{staticStyle:{height:"300px"}},[t("draggable",{staticClass:"col col-3",staticStyle:{"background-color":"#424242"},attrs:{group:"ban",cols:"3"},model:{value:e.ban.unallocated,callback:function(n){e.$set(e.ban,"unallocated",n)},expression:"ban.unallocated"}},e._l(e.ban.unallocated,(function(e){return t("img",{key:e.name,staticClass:"image",attrs:{src:e.imageURL}})})),0),e._v(" "),t("draggable",{staticClass:"col col-3",staticStyle:{"background-color":"#B71C1C"},attrs:{group:"ban",cols:"3"},model:{value:e.ban.required,callback:function(n){e.$set(e.ban,"required",n)},expression:"ban.required"}},e._l(e.ban.required,(function(e){return t("img",{key:e.name,staticClass:"image",attrs:{src:e.imageURL}})})),0),e._v(" "),t("draggable",{staticClass:"col col-3",staticStyle:{"background-color":"#0D47A1"},attrs:{group:"ban",cols:"3"},model:{value:e.ban.desierd,callback:function(n){e.$set(e.ban,"desierd",n)},expression:"ban.desierd"}},e._l(e.ban.desierd,(function(e){return t("img",{key:e.name,staticClass:"image",attrs:{src:e.imageURL}})})),0),e._v(" "),t("draggable",{staticClass:"col col-3",staticStyle:{"background-color":"#607D8B"},attrs:{group:"ban",cols:"3"},model:{value:e.ban.needless,callback:function(n){e.$set(e.ban,"needless",n)},expression:"ban.needless"}},e._l(e.ban.needless,(function(e){return t("img",{key:e.name,staticClass:"image",attrs:{src:e.imageURL}})})),0)],1):e._e(),e._v(" "),t("google-adsence")],1)],1)],1)}),[],!1,null,"4cc6c569",null);n.default=component.exports;h()(component,{GoogleAdsence:t(482).default}),h()(component,{VBtn:x.a,VCard:f.a,VCardTitle:m.c,VCol:y.a,VContainer:k.a,VDialog:w.a,VImg:_.a,VRow:O.a,VTextField:j.a,VTextarea:C.a})},488:function(e,n,t){"use strict";t(483)},489:function(e,n,t){var o=t(22)(!1);o.push([e.i,".image[data-v-4cc6c569]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover}",""]),e.exports=o},507:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t(5),r=(t(38),t(35),t(32),t(36)),c=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n,t){var o,c,data,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="".concat(r.a.getAPIServerURL(),"/tiertables/").concat(t),e.next=3,n({url:o,method:"GET"});case 3:if(200===(c=e.sent).status){e.next=8;break}throw new Error("api error : ".concat(c.data));case 8:return data=c.data,l={id:data.id,name:data.name,tiers:data.tiers,ownerid:data.ownerid},console.log(data),e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},519:function(e,n,t){var content=t(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(23).default)("b23b1292",content,!0,{sourceMap:!1})},520:function(e,n,t){var content=t(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(23).default)("e11d1724",content,!0,{sourceMap:!1})},521:function(e,n,t){var o=t(22)(!1);o.push([e.i,'.theme--light.v-expansion-panels .v-expansion-panel{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panels .v-expansion-panel--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:rgba(0,0,0,.12)}.theme--light.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.16}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.04}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.12}.theme--light.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.16}.theme--dark.v-expansion-panels .v-expansion-panel{background-color:#1e1e1e;color:#fff}.theme--dark.v-expansion-panels .v-expansion-panel--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panels .v-expansion-panel:not(:first-child):after{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-expansion-panels .v-expansion-panel-header .v-expansion-panel-header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--focusable .v-expansion-panel-header--active:focus:before{opacity:.32}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:hover:before{opacity:.08}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:hover:before,.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover:focus:before{opacity:.24}.theme--dark.v-expansion-panels.v-expansion-panels--hover>.v-expansion-panel>.v-expansion-panel-header:hover--active:focus:before{opacity:.32}.v-expansion-panels{border-radius:4px;display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;width:100%;z-index:1}.v-expansion-panels>*{cursor:auto}.v-expansion-panels>:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.v-expansion-panels>:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active{border-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--active+.v-expansion-panel{border-top-left-radius:4px;border-top-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)>.v-expansion-panel--next-active .v-expansion-panel-header{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-expansion-panel{flex:1 0 100%;max-width:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel:before{border-radius:inherit;bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:-1;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-expansion-panel:not(:first-child):after{border-top:thin solid;content:"";left:0;position:absolute;right:0;top:0;transition:border-color .2s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)}.v-expansion-panel--disabled .v-expansion-panel-header{pointer-events:none}.v-expansion-panel--active+.v-expansion-panel,.v-expansion-panel--active:not(:first-child){margin-top:16px}.v-expansion-panel--active+.v-expansion-panel:after,.v-expansion-panel--active:not(:first-child):after{opacity:0}.v-expansion-panel--active>.v-expansion-panel-header{min-height:64px}.v-expansion-panel--active>.v-expansion-panel-header--active .v-expansion-panel-header__icon:not(.v-expansion-panel-header__icon--disable-rotate) .v-icon{transform:rotate(-180deg)}.v-expansion-panel-header__icon{display:inline-flex;margin-bottom:-4px;margin-top:-4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-expansion-panel-header__icon{margin-left:auto}.v-application--is-rtl .v-expansion-panel-header__icon{margin-right:auto}.v-expansion-panel-header{align-items:center;border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;font-size:.9375rem;line-height:1;min-height:48px;outline:none;padding:16px 24px;position:relative;transition:min-height .3s cubic-bezier(.25,.8,.5,1);width:100%}.v-application--is-ltr .v-expansion-panel-header{text-align:left}.v-application--is-rtl .v-expansion-panel-header{text-align:right}.v-expansion-panel-header:not(.v-expansion-panel-header--mousedown):focus:before{opacity:.12}.v-expansion-panel-header:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel-header>:not(.v-expansion-panel-header__icon){flex:1 1 auto}.v-expansion-panel-content{display:flex}.v-expansion-panel-content__wrap{padding:0 24px 16px;flex:1 1 auto;max-width:100%}.v-expansion-panels--accordion>.v-expansion-panel{margin-top:0}.v-expansion-panels--accordion>.v-expansion-panel:after{opacity:1}.v-expansion-panels--popout>.v-expansion-panel{max-width:calc(100% - 32px)}.v-expansion-panels--popout>.v-expansion-panel--active{max-width:calc(100% + 16px)}.v-expansion-panels--inset>.v-expansion-panel{max-width:100%}.v-expansion-panels--inset>.v-expansion-panel--active{max-width:calc(100% - 32px)}.v-expansion-panels--flat>.v-expansion-panel:after{border-top:none}.v-expansion-panels--flat>.v-expansion-panel:before{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panels--tile,.v-expansion-panels--tile>.v-expansion-panel:before{border-radius:0}',""]),e.exports=o},549:function(e,n,t){"use strict";t(519)},550:function(e,n,t){var o=t(22)(!1);o.push([e.i,".image[data-v-50b703f0]{width:80px;height:80px;-o-object-fit:cover;object-fit:cover}",""]),e.exports=o},566:function(e,n,t){"use strict";t(10),t(9),t(11),t(3),t(16),t(12),t(17);var o=t(2),r=t(141),c=t(136),l=t(1),v=t(14);function d(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}n.a=Object(v.a)(Object(r.a)("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(c.b)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(l.t)(this))}})},567:function(e,n,t){"use strict";var o=t(210),r=t(218),c=t(39),l=t(136),v=t(1),d=t(14),h=Object(d.a)(r.a,c.a,Object(l.a)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));n.a=h.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(o.a,this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(v.t)(n))])]})))}})},568:function(e,n,t){"use strict";t(10),t(9),t(11),t(3),t(16),t(12),t(17);var o=t(2),r=t(210),c=t(114),l=t(39),v=t(136),d=t(97),h=t(1),x=t(14);function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var y=Object(x.a)(l.a,Object(v.a)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));n.a=y.extend().extend({name:"v-expansion-panel-header",directives:{ripple:d.a},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(h.t)(this,"actions")||[this.$createElement(c.a,this.expandIcon)];return this.$createElement(r.c,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:m(m({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(h.t)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},569:function(e,n,t){"use strict";t(10),t(9),t(11),t(3),t(16),t(12),t(17);var o=t(2),r=(t(211),t(212),t(520),t(162)),c=t(13);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}n.a=r.a.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},r.a.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(c.a)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"==typeof this.value[0]&&Object(c.a)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),o=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(o)}}})},570:function(e,n,t){"use strict";t.r(n);var o=t(5),r=(t(38),t(60),t(75),t(302),t(3),t(12),t(86),t(32),t(481)),c=t(507),l=(t(486),{name:"Heros",data:function(){return{heroDatas:[],tiertable:{},showHero:!1,dialogHero:null}},computed:{heros:{get:function(){return this.$store.state.decktracker.heros},set:function(e){}},bans:{get:function(){return this.$store.state.decktracker.bans},set:function(e){}},headers:function(){if(!this.bans)return[];var e=[{text:"",value:"image",width:"5%"},{text:"ヒーロー名",value:"name",width:"10%"},{text:"ランク",value:"tirescore.rank",width:"10%"}];return this.bans.includes("メカ")&&e.push({text:"メカ",value:"ban.Mechs",width:"10%"}),this.bans.includes("マーロック")&&e.push({text:"マーロック",value:"ban.Murlocs",width:"10%"}),this.bans.includes("獣")&&e.push({text:"獣",value:"ban.Beast",width:"10%"}),this.bans.includes("海賊")&&e.push({text:"海賊",value:"ban.Pirates",width:"10%"}),this.bans.includes("キルボア")&&e.push({text:"キルボア",value:"ban.Quillboar",width:"10%"}),this.bans.includes("悪魔")&&e.push({text:"悪魔",value:"ban.Demons",width:"10%"}),this.bans.includes("ドラゴン")&&e.push({text:"ドラゴン",value:"ban.Dragons",width:"10%"}),this.bans.includes("エレメンタル")&&e.push({text:"エレメンタル",value:"ban.Elementals",width:"10%"}),this.bans.includes("ナーガ")&&e.push({text:"ナーガ",value:"ban.Nagas",width:"10%"}),e.push({text:"―",value:"action",width:"5%"}),e}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t=e.$store.getters["account/isValid"]?e.$store.state.account.account.tierTableId:null)){n.next=5;break}return n.next=4,Object(c.a)(e.$axios,t);case 4:e.tiertable=n.sent;case 5:case"end":return n.stop()}}),n)})))()},watch:{heros:function(e){this.setHeroDatas(e)}},beforeDestroy:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("decktracker/watchEnd");case 2:case"end":return n.stop()}}),n)})))()},methods:{setHeroDatas:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=[],r=0;case 2:if(!(r<e.length)){t.next=10;break}return t.next=5,n.getHeroData(e[r]);case 5:(c=t.sent)&&o.push(c);case 7:r++,t.next=2;break;case 10:n.heroDatas=o;case 11:case"end":return t.stop()}}),t)})))()},sortByRank:function(e,n){e.sort((function(a,b){var e=a.tirescore.order-b.tirescore.order;return n?e:-1*e}));return e},getHeroData:function(e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.getMinionTypes(n.$axios);case 2:return o=t.sent,c=null,n.tiertable.tiers.forEach((function(t){var r=t.heros.find((function(n){return n.deckTrackerHeroName===e.name}));r&&(c={name:e.displayName,tirescore:{rank:t.name,order:t.tableOrder},ban:n.createBans(r,o),imageurl:r.imageURL,originalHeroData:r})})),t.abrupt("return",c||n.createErrorData(e,o,"Tier表に定義されていません"));case 6:case"end":return t.stop()}}),t)})))()},createErrorData:function(e,n,t){var o={name:e.displayName,tirescore:{rank:t,order:t},ban:{}};return n.forEach((function(e){o.ban[e.name]=t})),o},createBans:function(e,n){var t=this,o={};return n.forEach((function(n){o[n.name]=t.checkBan(n.name,e)})),o},checkBan:function(e,n){return n.ban.required.find((function(n){return n.name===e}))?"必須":n.ban.desierd.find((function(n){return n.name===e}))?"欲しい":n.ban.needless.find((function(n){return n.name===e}))?"不要":"―"},getChipColor:function(e){return"必須"===e?"#558B2F":"欲しい"===e?"#9CCC65":"不要"===e?"#FFA726":void 0},displayHero:function(e){this.dialogHero=e.originalHeroData,this.showHero=!0},closeDialog:function(){this.dialogHero=null,this.showHero=!1}}}),v=(t(549),t(96)),d=t(135),h=t.n(d),x=t(219),f=t(490),m=t(564),y=t(647),k=t(566),w=t(567),_=t(568),O=t(569),component=Object(v.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panels",{attrs:{value:0}},[t("v-expansion-panel",[t("v-expansion-panel-header",{staticClass:"text-h6",attrs:{color:"primary"}},[e._v("\n      Tier表によるキャラクター評価 ／ Tier表名:"+e._s(this.tiertable.name)+"\n    ")]),e._v(" "),t("v-expansion-panel-content",{attrs:{color:"primary"}},[t("v-data-table",{staticClass:"elevation-1",attrs:{"calculate-widths":"",headers:e.headers,items:e.heroDatas,"item-key":"name","group-by":"tirescore.rank","custom-sort":e.sortByRank,"hide-default-footer":"","no-data-text":""},scopedSlots:e._u([{key:"group.header",fn:function(n){var o=n.group,r=(n.items,n.headers);n.toggle,n.isOpen,n.remove;return[t("td",[e._v("\n            ランク："+e._s(o)+"\n          ")]),e._v(" "),t("td",{attrs:{colspan:r.length-1}})]}},{key:"item.image",fn:function(e){var n=e.item;return[t("v-card",{attrs:{dense:""}},[t("img",{staticClass:"image",attrs:{src:n.imageurl}})])]}},{key:"item.name",fn:function(n){var o=n.item;return[t("v-card",{attrs:{dense:""}},[e._v("\n            "+e._s(o.name)+"\n          ")])]}},{key:"item.ban.Pirates",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Pirates),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Pirates)+"\n          ")])]}},{key:"item.ban.Demons",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Demons),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Demons)+"\n          ")])]}},{key:"item.ban.Beast",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Beast),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Beast)+"\n          ")])]}},{key:"item.ban.Mechs",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Mechs),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Mechs)+"\n          ")])]}},{key:"item.ban.Dragons",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Dragons),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Dragons)+"\n          ")])]}},{key:"item.ban.Quillboar",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Quillboar),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Quillboar)+"\n          ")])]}},{key:"item.ban.Murlocs",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Murlocs),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Murlocs)+"\n          ")])]}},{key:"item.ban.Elementals",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Elementals),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Elementals)+"\n          ")])]}},{key:"item.ban.Nagas",fn:function(n){var o=n.item;return[t("v-chip",{attrs:{color:e.getChipColor(o.ban.Nagas),"text-color":"black",dark:""}},[e._v("\n            "+e._s(o.ban.Nagas)+"\n          ")])]}},{key:"item.action",fn:function(n){var o=n.item;return[t("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(n){return e.displayHero(o)}}},[e._v("\n            詳細表示\n          ")])]}}],null,!0)})],1)],1),e._v(" "),t("HeroEditDialog",{attrs:{dialog:e.showHero,hero:e.dialogHero,editable:!1},on:{"update:dialog":function(n){e.showHero=n},updateHero:function(n){return e.closeDialog()}}})],1)}),[],!1,null,"50b703f0",null);n.default=component.exports;h()(component,{HeroEditDialog:t(486).default}),h()(component,{VBtn:x.a,VCard:f.a,VChip:m.a,VDataTable:y.a,VExpansionPanel:k.a,VExpansionPanelContent:w.a,VExpansionPanelHeader:_.a,VExpansionPanels:O.a})}}]);