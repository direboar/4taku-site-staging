(this.webpackJsonp=this.webpackJsonp||[]).push([[24,8],{481:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("fa0d060e",content,!0,{sourceMap:!1})},482:function(t,e,r){"use strict";r.r(e);var n={name:"GoogleAdsence"},o=(r(483),r(92)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("1")])}),[],!1,null,null,null);e.default=component.exports},483:function(t,e,r){"use strict";r(481)},484:function(t,e,r){var n=r(24)(!1);n.push([t.i,".adcenter{text-align:center}",""]),t.exports=n},528:function(t,e,r){"use strict";r(37),r(51),r(28);var n=r(9),o=r(0);e.a=o.a.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,e=t.mobile,r=t.width,n=t.name;if(t.mobileBreakpoint===this.mobileBreakpoint)return e;var o=parseInt(this.mobileBreakpoint,10);return!isNaN(o)?r<o:n===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(n.d)("mobile-break-point","mobile-breakpoint",this)}})},590:function(t,e,r){var content=r(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("423abb7a",content,!0,{sourceMap:!1})},608:function(t,e,r){"use strict";r(590)},609:function(t,e,r){var n=r(24)(!1);n.push([t.i,".image[data-v-95019d34]{width:150px;height:150px;-o-object-fit:cover;object-fit:cover}",""]),t.exports=n},615:function(t,e,r){var content=r(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("6989664e",content,!0,{sourceMap:!1})},616:function(t,e,r){var n=r(24)(!1);n.push([t.i,".theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#363636}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;left:0;max-width:100%;overflow:hidden;pointer-events:auto;top:0;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,visibility,width}.v-navigation-drawer:not([data-booted=true]){transition:none!important}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer .v-list:not(.v-select-list){background:inherit}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer__content{height:100%;overflow-y:auto;overflow-x:hidden}.v-navigation-drawer__image{border-radius:inherit;height:100%;position:absolute;top:0;bottom:0;z-index:-1;contain:strict;width:100%}.v-navigation-drawer__image .v-image{border-radius:inherit}.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile{max-height:50%;top:auto;bottom:0;min-width:100%}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{z-index:1}.v-navigation-drawer--fixed{z-index:6}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile){z-index:4}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list-item>:first-child{margin-left:0;margin-right:0}.v-navigation-drawer--mini-variant .v-list-item>:not(:first-child){position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;display:inline;display:initial}.v-navigation-drawer--mini-variant .v-list-group--no-action .v-list-group__items,.v-navigation-drawer--mini-variant .v-list-group--sub-group{display:none}.v-navigation-drawer--mini-variant.v-navigation-drawer--custom-mini-variant .v-list-item{justify-content:center}.v-navigation-drawer--temporary{z-index:7}.v-navigation-drawer--mobile{z-index:6}.v-navigation-drawer--close{visibility:hidden}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}",""]),t.exports=n},655:function(t,e,r){"use strict";r.r(e);r(56);var n={auth:!1,data:function(){return{panel:0,items:[{title:"1.Yontakuについて",subtitles:[{subtitle:"Yontakuでできること:ヒーローの評価",goto:"#hero-evaluation"}]},{title:"2.Yontakuを使用するための準備をする",subtitles:[{subtitle:"BGSupport for Streamerのインストール",goto:"#install"},{subtitle:"Yontakuにログイン",goto:"#login"}]},{title:"3.Tier表によるヒーロー評価を行う",subtitles:[{subtitle:"評価に用いるTier表を選択する",goto:"#select-tier-table"},{subtitle:"バトルグラウンドを開始する",goto:"#start-bg"},{subtitle:"Minder Curve Sheetを使用する",goto:"#minder-curve-sheet"}]},{title:"4.Tier表を作成する",subtitles:[{subtitle:"基本:Tier表を作成する",goto:"#create-tier-table"},{subtitle:"応用:ヒーロー攻略情報を登録する",goto:"#setting-ban-and-memo-to-hero"},{subtitle:"Tierの編集・追加・削除",goto:"#edit-tier"},{subtitle:"Tier表の更新・削除",goto:"#edit-tier-table"}]},{title:"5.注意事項",subtitles:[{subtitle:"ヒーロー情報について",goto:"#about-new-hero"},{subtitle:"評価が正しく行えない場合",goto:"#about-evaluation"}]}]}},computed:{currentTabComponent:function(){return this.currentTab}},methods:{display:function(t,e){var r=this;console.log(t),console.log(e.goto),this.panel=t,setTimeout((function(){r.$vuetify.goTo(e.goto)}),100)},goto:function(t){this.$vuetify.goTo(t)}}},o=(r(608),r(92)),l=r(136),v=r.n(l),c=r(488),h=r(480),d=r(591),f=r(194),m=r(196),_=r(132),w=r(114),y=(r(13),r(11),r(15),r(3),r(17),r(12),r(18),r(2)),x=(r(37),r(221),r(38),r(615),r(284)),T=r(285),k=r(46),A=r(222),C=r(528),B=r(581),E=r(164),M=r(39),O=r(219),Y=r(231),S=r(1);function j(t,e){var r=t.changedTouches[0];e.touchendX=r.clientX,e.touchendY=r.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,r=t.touchendX,n=t.touchstartY,o=t.touchendY;t.offsetX=r-e,t.offsetY=o-n,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&r<e-16&&t.left(t),t.right&&r>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<n-16&&t.up(t),t.down&&o>n+16&&t.down(t))}(e)}function V(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var r=t.changedTouches[0];e.touchstartX=r.clientX,e.touchstartY=r.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return j(t,e)},touchmove:function(t){return function(t,e){var r=t.changedTouches[0];e.touchmoveX=r.clientX,e.touchmoveY=r.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var $={inserted:function(t,e,r){var n=e.value,o=n.parent?t.parentElement:t,l=n.options||{passive:!0};if(o){var v=V(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[r.context._uid]=v,Object(S.z)(v).forEach((function(t){o.addEventListener(t,v[t],l)}))}},unbind:function(t,e,r){var n=e.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var o=n._touchHandlers[r.context._uid];Object(S.z)(o).forEach((function(t){n.removeEventListener(t,o[t])})),delete n._touchHandlers[r.context._uid]}}},z=r(10);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var H=Object(z.a)(Object(T.a)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),k.a,A.a,C.a,B.a,E.a,M.a).extend({name:"v-navigation-drawer",directives:{ClickOutside:O.a,Resize:Y.a,Touch:$},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&C.a.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(S.h)(this.height),top:this.isBottom?"auto":Object(S.h)(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(S.h)(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(S.h)(this.computedTransform,"%"),")"),width:Object(S.h)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(x.a,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[image])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var r=document.createEvent("UIEvents");r.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(r)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var slot=Object(S.t)(this,t);return slot?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},slot):slot},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(S.t)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),X=r(592),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-navigation-drawer",{attrs:{app:"",permanent:"",width:"400"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-group",{key:i,attrs:{color:"#E0E0E0",value:!0,"no-action":"","sub-group":""},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-body-1 white--text"},[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.subtitles,(function(n,o){return r("v-list-item",{key:o,attrs:{link:""},on:{click:function(r){return t.display(e.panel,n)}}},[r("v-list-item-subtitle",{staticClass:"text-body-1 white--text",domProps:{textContent:t._s(n.subtitle)}})],1)}))],2)})),1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-card",[r("v-card-title",{staticClass:"text-h3"},[t._v("1.Yontakuについて")]),t._v(" "),r("p"),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"hero-evaluation"}},[t._v("Yontakuでできること:ヒーローの評価")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8"},[r("p"),t._v("\n          ヒーローピック画面に表示される各ヒーローのランクや今回登場する種族の有利・不利をリアルタイムに表示することができます。\n          "),r("ol",[r("li",[t._v("ハースストーンプレイ時にどのヒーローをピックするかの情報を提示する機能を提供します。")]),t._v(" "),r("li",[t._v("判断基準となるTier表は、当サービス内に各ユーザーが自由に作成できます。(サービス内にTierMakerと同じような機能があります。）")]),t._v(" "),r("li",[t._v("自分が作成したTier表でなく、他のユーザーが作成したTier表を使用してヒーローピックを評価することもできます。")]),t._v(" "),r("li",[t._v("Tier表にはヒーローごとに、テキストもしくは画像リンクで自由にメモをつけることができます。付けたメモはヒーローピック時に表示することができます。")])]),t._v(" "),r("p"),t._v("\n          (*1) Yontakuでは、バトルグラウンドの情報を取得するためにBGSupport for Streamerを使用します。そのためインストールが必要です。\n          "),r("br"),t._v("\n          (*2) BGSupport for Streamerは常に最新版を使用するようにしてください。（バージョンアップ後の動作確認までは行えない可能性があります）\n          "),r("br")])],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h3"},[t._v("2.Yontakuを使用するための準備をする")]),t._v(" "),r("p"),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"install"}},[t._v("BGSupport for Streamerのインストール")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8"},[t._v("\n          Yontakuでヒーローの評価を行う準備として、Hearthstone DeckTrackerおよびBGSupport for Streamer(*1)をインストールします。\n          "),r("p"),t._v(" "),r("ol",[r("li",[t._v("Hearthstone DeckTrackerをインストールします。インストール手順は"),r("a",{attrs:{href:"https://nekokuma.com/78192/",rel:"noopener noreferrer",target:"_blank"}},[t._v("ねこくまぶろぐ")]),t._v("様の記載を参照してください。")]),t._v(" "),r("li",[t._v("BGSupport for Streamerをインストールします(*2)。"),r("a",{attrs:{href:"https://discord.com/invite/WEw2qYpaRD",rel:"noopener noreferrer",target:"_blank"}},[t._v(" レヲランガ様のDiscordサーバ")]),t._v("に参加したうえで、チャンネル「#導入手順」の①～⑤まで実施してください。（インストールするプログラムは、チャンネル【最新版】から最新のファイルを取得するようにしてください。）\n            ")])]),t._v(" "),r("p"),t._v("\n          (*1) Yontakuでは、バトルグラウンドの情報を取得するためにBGSupport for Streamerを使用します。そのためインストールが必要です。\n          "),r("br"),t._v("\n          (*2) BGSupport for Streamerは常に最新版を使用するようにしてください。（バージョンアップ後の動作確認までは行えない可能性があります）\n          "),r("br")]),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"login"}},[t._v("Yontakuにログイン")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8"},[t._v("\n          Yontakuにログインします。またYontakuにユーザー情報の登録を行います。なお、Yontakuを使用するためにはtwitter登録が必要です。\n          "),r("p"),t._v(" "),r("ol",[r("li",[t._v("画面右上の「ログイン」ボタンを押します。")]),t._v(" "),r("li",[t._v("「Yontakuにログインします。」という画面が表示されるので、ツイッターアイコンボタンを押します。")]),t._v(" "),r("li",[t._v("アカウント設定画面が表示されるので、アカウント名を入力し、「登録」ボタンを押します。")])]),t._v(" "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/rs7rKeAYWaA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h3 white--text"},[t._v("3.Tier表によるヒーロー評価を行う")]),t._v(" "),r("p"),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"select-tier-table"}},[t._v("評価に用いるTier表を選択する")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8"},[t._v("\n          Yontakuは、あなたもしくは他のユーザーが作成したTier表を使って、リアルタイムにヒーローの評価を行うことができます。"),r("br"),t._v("\n          ここでは、「バトグラ徹底攻略」のTier表を使用して評価を行う手順を、例として説明します。\n          "),r("ol",[r("li",[t._v("画面右上の「Tier表一覧」を選択します。")]),t._v(" "),r("li",[t._v("一覧上から「バトグラ徹底攻略 Tier表」を表示します。"),r("br"),t._v("もし「バトグラ徹底攻略 Tier表」が一覧に表示されていない場合は、画面上部にある「Tier表名」に「バトグラ徹底攻略」と入力して検索してください。")]),t._v(" "),r("li",[t._v("Tier表が表示されたことを確認したら、画面上の「ヒーロー評価で使用する」ボタンを押し、「ヒーロー評価で使用中」に変わることを確認してください。")])]),t._v(" "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/ZP9y9EEAyig",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"start-bg"}},[t._v("バトルグラウンドを開始する")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8"},[t._v("\n          バトルグラウンドを開始し、リアルタイムなヒーロー評価を行います。"),r("br"),t._v(" "),r("ol",[r("li",[t._v("Hearthstone DeckTrackerを起動します。（BGSupportForStreamerがインストールされている必要があります。）")]),t._v(" "),r("li",[t._v("ハースストーンを起動します。")]),t._v(" "),r("li",[t._v("画面右上の「ヒーロー評価」を選択します。")]),t._v(" "),r("li",[t._v("「ファイル読込」ボタンを押します。")]),t._v(" "),r("li",[t._v("C:\\Users\\<ユーザー名>\\AppData\\LocalLow\\Temp\\Json1.jsonを選択します。(*1)")]),t._v(" "),r("li",[t._v("バトルグラウンドを開始します。")]),t._v(" "),r("li",[t._v("一番最初に起動した場合、通知の許可が求められるので「許可する」を押してください。")]),t._v(" "),r("li",[t._v("バトルグラウンドのヒーロー選択画面が表示されると、画面右下に通知が発生するので押してください。ヒーロー評価情報が表示されます。")])]),t._v("\n          (*1)C:\\Users\\>ユーザー名<\\AppDataフォルダが見つからない場合、"),r("a",{attrs:{href:"https://support.microsoft.com/ja-jp/windows/%E9%9A%A0%E3%81%97%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B-0320fe58-0117-fd59-6851-9b7f9840fdb2#:~:text=%5B%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88%5D%20%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%92%E9%81%B8%E6%8A%9E%E3%81%97,%E3%81%AE%E9%A0%86%E3%81%AB%E9%81%B8%E6%8A%9E%E3%81%97%E3%81%BE%E3%81%99%E3%80%82",rel:"noopener noreferrer",target:"_blank"}},[t._v("隠しファイルを表示するように設定して")]),t._v("から、もう一度「ファイル読込」ボタンを推してください。\n          "),r("p"),t._v("\n          表示されたヒーロー評価情報について、以下の操作が可能です。"),r("br"),t._v(" "),r("ul",[r("li",[t._v("「詳細表示」ボタンを押すと、"),r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.goto("#setting-ban-and-memo-to-hero")}}},[t._v(" ヒーローの攻略メモとBAN情報の詳細")]),t._v("\n              を見ることができます。")]),t._v(" "),r("li",[t._v("ヒーロー攻略メモに外部URLのリンクが設定されている場合、「リンク先表示」ボタンを押すことで外部サイトが表示されます。")])]),t._v(" "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/wmstWMpIusQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"minder-curve-sheet"}},[r("a",{attrs:{href:"https://www.bgcurvesheet.com/",rel:"noopener noreferrer",target:"_blank"}},[t._v("Minder Curve Sheet")]),t._v("を用いた評価を行う")]),t._v(" "),r("v-card-text",{staticClass:"\n            text-body-1\n            font-weight-light\n            mb-8"},[t._v("\n          Tier表に加えて、Minder Curve Sheetのレーティングにもとづく評価を行えます。なお、Tier表による評価と同時に行うこともできます。\n          Minder Curve Sheetによる評価を行う場合は、以下の設定をしてください。\n          "),r("ol",[r("li",[t._v("画面左上の「アカウント設定」を選択します。")]),t._v(" "),r("li",[t._v("「Minder Curve Sheetによる評価を行う」のチェックボックスをオンにしたうえで、「登録」ボタンを押します。")])]),t._v("\n          登録後、評価を行う手順は"),r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.goto("#start-bg")}}},[t._v("「バトルグラウンドを開始する」\n          ")]),t._v("と同じです。\n          "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/hebMZuGX7yI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h3"},[t._v("4.Tier表を作成する")]),t._v(" "),r("p"),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"create-tier-table"}},[t._v("基本:Tier表を作成する")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8 "},[t._v("\n          基本的なTier表作成手順を説明します。\n          "),r("ol",[r("li",[t._v("画面右上の「Tier表作成」を選択します。")]),t._v(" "),r("li",[t._v("画面下部にヒーローが列挙されているので、ヒーローをドラッグしてTierに移動してください。")]),t._v(" "),r("li",[t._v("Tier表が完成したら、Tier表の名前を入力し、画面右上の「Tier表を保存」ボタンを押します。")]),t._v(" "),r("li",[t._v("「Tier表を保存しました」というメッセージが出たら作成完了です。(*1)")])]),t._v("\n          (*1) 「Tier表を保存」ボタンを押すまで、Tier表のデータは保存されません。定期的に「Tier表を保存」ボタンを押すようにしてください。\n          "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/6zAlHkm2EAM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"setting-ban-and-memo-to-hero"}},[t._v("応用:ヒーローごとにBAN情報・攻略メモを記述する")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8 "},[t._v("\n          Tier表を作成する時、ヒーローごとにBAN情報と攻略メモを設定することができます。設定した情報は、ヒーロー評価時にみることができます。\n          "),r("p"),t._v(" "),r("ol",[r("li",[t._v("Tier表に配置したヒーローをダブルクリックします。")]),t._v(" "),r("li",[t._v("ヒーロー攻略メモに、外部URLのリンクとリンク先の名称を設定できます。")]),t._v(" "),r("li",[t._v("ヒーロー攻略メモに、ヒーロー攻略メモを入力できます。")]),t._v(" "),r("li",[t._v("画面下の「BAN情報」を編集できます。")]),t._v(" "),r("li",[t._v("必要な情報を編集したら、画面右上の「更新」ボタンを押してください(*1)。")])]),t._v("\n          (*1)「更新」ボタンを押してもデータは保存されません。「Tier表を保存」ボタンを押す必要があります。\n        ")]),t._v(" "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/sO3JDMKUjww",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"edit-tier"}},[t._v("Tierの編集・追加・削除")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8 "},[t._v("\n          Tier表のTierを編集・追加・削除ができます。\n        ")]),t._v(" "),r("v-card",{attrs:{height:"300"}},[r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/3jDJfMVZF0s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"edit-tier-table"}},[t._v("Tier表の更新・削除")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8 "},[t._v("\n          自分が作成したTier表を後から変更することができます。なお、他の人が作成したTier表を変更することはできません。\n          "),r("p"),t._v(" "),r("ol",[r("li",[t._v("画面右上の「Tier表一覧」を選択します。")]),t._v(" "),r("li",[t._v("画面右上の「自分が作成したTier表を表示」チェックボックスをオンにします。")]),t._v(" "),r("li",[t._v("編集したいTier表を表示します。")])])])],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h3"},[t._v("5.注意事項")]),t._v(" "),r("p"),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"about-new-hero"}},[t._v("新ヒーローの反映タイミングについて")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8 "},[r("ul",[r("li",[t._v("Yontakuで扱うことができるヒーローは、"),r("a",{attrs:{href:"https://hearthstone.blizzard.com/ja-jp/battlegrounds",rel:"noopener noreferrer",target:"_blank"}},[t._v("Blizzard社の公式HP")]),t._v("に掲載されているヒーローと同じです。（実際には1日程度のタイムラグがあります。）(*1)\n            ")]),t._v(" "),r("li",[t._v("ヒーロー評価対象として表示されるようになるまでには、以下の手順を踏む必要があります。そのためある程度のタイムラグが発生する見込みです。\n            ")]),t._v(" "),r("ol",[r("li",[t._v("新ヒーローに対応した最新版のBGSupport for Streamerをインストールする。")]),t._v(" "),r("li",[t._v("対処のヒーローがYontakuで扱える状態になっていること（Blizzard社の公式HPに対象のヒーローが表示されていること)。")]),t._v(" "),r("li",[t._v("Yontakuのシステム内に、BGSupport for Streamerの出力情報が登録済みであること(*2)")])])]),t._v(" "),r("p"),t._v("\n          (*1)Blizzard社のbattlenet apiを使用して取得しています。"),r("br"),t._v("\n          (*2)Yontaku開発者が手作業で行います。\n        ")]),t._v(" "),r("v-card-subtitle",{staticClass:"text-h4 white--text",attrs:{id:"about-evaluation"}},[t._v("評価が正しく行えない場合")]),t._v(" "),r("v-card-text",{staticClass:"text-body-1 font-weight-light mb-8 "},[t._v("\n          以下の場合、ヒーローの評価を正しく行えません。そのような場合は"),r("a",{attrs:{href:"https://discord.gg/ypMAwVuB",rel:"noopener noreferrer",target:"_blank"}},[t._v("Discordサーバー")]),t._v("上で開発者までご連絡ください。(修正できる保証はありません。)"),r("br"),t._v("\n          その際、「ヒーロー評価」に設定したファイルを合わせて提供していただけると助かります。"),r("br"),t._v(" "),r("ul",[r("li",[t._v("新ヒーローがまだYontakuに反映されていない")]),t._v(" "),r("li",[t._v("BGSupport for Streamerが出力するファイルの内容がおかしい\n              "),r("ol",[r("li",[t._v("タスクキル後、ファイル上に大量のヒーロー情報が出力される")]),t._v(" "),r("li",[t._v("BAN情報が通常と異なる内容で出力される（稀に発生することを確認）")])])])]),t._v("\n          なお、これらの事象を完璧に解消することは非常に大変です。個人で開発していることを踏まえ、ある程度割り切った形でご利用下さい。"),r("br"),t._v("\n          特にBGSupport for Streamerについては、Yontakuを実現するために機能追加をお願いしてはおりますが、本サービスの開発には直接関わっておられません。"),r("br"),t._v("\n          そのためYontakuに関連する問い合わせは必ず"),r("a",{attrs:{href:"https://discord.gg/ypMAwVuB",rel:"noopener noreferrer",target:"_blank"}},[t._v("Yontaku開発者のDiscordサーバー")]),t._v("に報告するようお願いします。（直接レヲランガ様への連絡をしないようお願いします。）\n          "),r("p")])],1)],1)],1),t._v(" "),r("google-adsence")],1)}),[],!1,null,"95019d34",null);e.default=component.exports;v()(component,{GoogleAdsence:r(482).default}),v()(component,{VCard:c.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCol:d.a,VList:f.a,VListGroup:m.a,VListItem:_.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VNavigationDrawer:H,VRow:X.a})}}]);