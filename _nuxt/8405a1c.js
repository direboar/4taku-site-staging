(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{544:function(t,o,e){"use strict";e.r(o);e(32);var n={props:{dialog:Boolean,tier:{type:Object}},data:function(){return{swatches:[["#FF0000","#AA0000","#550000"],["#FFFF00","#AAAA00","#555500"],["#00FF00","#00AA00","#005500"],["#00FFFF","#00AAAA","#005555"],["#0000FF","#0000AA","#000055"]],id:"0",name:"XXX",color:"grey"}},computed:{},watch:{tier:function(t){t&&(this.id=t.id,this.name=t.name,this.color=t.color)}},mounted:function(){},methods:{save:function(){this.$emit("updateTier",{id:this.id,name:this.name,color:this.color}),this.$emit("update:dialog",!1)}}},c=e(75),r=e(135),l=e.n(r),d=e(218),v=e(501),m=e(479),h=e(513),A=e(647),F=e(477),f=e(642),k=e(514),w=e(526),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-dialog",{attrs:{width:"400","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(o){t.dialog=o},expression:"dialog"}},[e("v-card",{attrs:{color:"black"}},[e("v-container",[e("v-row",{attrs:{justify:"space-around"}},[e("v-col",{attrs:{cols:"12"}},[t._v("\n          ラベル名\n          "),e("v-text-field",{model:{value:t.name,callback:function(o){t.name=o},expression:"name"}}),t._v("\n          背景色\n          "),e("v-color-picker",{staticClass:"ma-2",attrs:{swatches:t.swatches,"show-swatches":"","hide-canvas":""},model:{value:t.color,callback:function(o){t.color=o},expression:"color"}})],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:t.save}},[t._v("\n          登録\n        ")]),t._v(" "),e("v-btn",{staticClass:"mb-2",attrs:{color:"seconcary",dark:""},on:{click:function(o){return t.$emit("update:dialog",!1)}}},[t._v("\n          戻る\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCol:h.a,VColorPicker:A.a,VContainer:F.a,VDialog:f.a,VRow:k.a,VTextField:w.a})}}]);