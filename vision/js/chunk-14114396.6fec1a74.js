(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14114396"],{5147:function(t,n,e){var o=e("2b4c")("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[o]=!1,!"/./"[t](n)}catch(i){}}return!0}},"7f7f":function(t,n,e){var o=e("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in i||e("9e1e")&&o(i,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},aae3:function(t,n,e){var o=e("d3f4"),i=e("2d95"),a=e("2b4c")("match");t.exports=function(t){var n;return o(t)&&(void 0!==(n=t[a])?!!n:"RegExp"==i(t))}},b107:function(t,n,e){"use strict";e("a481"),e("f559");var o={random:function(t){return t+(new Date).getTime()+Math.ceil(1e4*Math.random())},randomCmpId:function(){return this.random("cmp-")},randomFullScreenId:function(){return this.random("full-screen-")},validateCmpId:function(t){var n="cmp-";if(!t.startsWith(n))return!1;var e=t.replace(n,"")/1e4,o=Math.floor(e);return!(!new Date(o)instanceof Date)}};n["a"]=o},d2c8:function(t,n,e){var o=e("aae3"),i=e("be13");t.exports=function(t,n,e){if(o(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},f559:function(t,n,e){"use strict";var o=e("5ca1"),i=e("9def"),a=e("d2c8"),r="startsWith",s=""[r];o(o.P+o.F*e("5147")(r),"String",{startsWith:function(t){var n=a(this,t,r),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),o=String(t);return s?s.call(n,o,e):n.slice(e,e+o.length)===o}})},fa5f:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu"},[t._l(t.menu,(function(n,o){return[e("div",{key:o,staticClass:"node",on:{mouseover:function(t){n.show=!0},mouseleave:function(t){n.show=!1}}},[e("el-button",{attrs:{type:"primary",size:"mini",circle:""}},[e("i",{staticClass:"icon iconfont",class:"icon-"+n.icon})]),e("el-tabs",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"node.show"}],attrs:{type:"border-card","tab-position":"left"}},[t._l(n.categories,(function(i,a){return[e("el-tab-pane",{key:a},[e("span",{attrs:{slot:"label"},slot:"label"},[e("i",{staticClass:"icon iconfont",class:"icon-"+i.icon})]),t._l(i.items,(function(i,r){return[e("div",{key:r,staticClass:"item-card",on:{click:function(n){return t.addComponent(o,a,r)}}},[e("img",{attrs:{src:t.getComponentImage(i)},on:{drag:function(t){n.show=!1},dragstart:function(n){return t.dragComponent(n,o,a,r)},dragend:function(n){return t.endDrag(n)}}}),e("div",{staticClass:"item-name"},[t._v(t._s(i.text))])])]}))],2)]}))],2)],1)]}))],2)},i=[],a=(e("7f7f"),e("b107")),r=e("2ef0"),s=e.n(r),c={name:"Menu",props:["config","state"],data:function(){return{showPanel:!1,menu:null}},mounted:function(){this.initComponentMenu()},methods:{initComponentMenu:function(){this.menu=s.a.clone(this.$store.state.screen.design.menu);var t=this.state.dynamicComponent.list;t&&t.length&&this.menu.push({icon:"star",text:"自定义组件",show:!1,categories:[{text:"自定义组件",icon:"star",items:t}]})},getComponentImage:function(t){return t.image?t.image:"./img/components/"+t.category+"/"+t.name+".png"},addComponent:function(t,n,e){var o=this.menu[t].categories[n].items[e];this.config.components||(this.config.components={}),this.config.sequence||(this.config.sequence=[]);var i=this.generateComponent(o),a=i.config.id;this.config.sequence.unshift(a),this.$set(this.config.components,a,i)},dragComponent:function(t,n,e,o){this.state.menu.dragMode=!0;var i=this.menu[n].categories[e].items[o];this.state.menu.component=this.generateComponent(i)},generateComponent:function(t){var n=a["a"].randomCmpId();return{text:t.text,category:t.category,name:t.name,image:t.image,config:{remote:{config:t.config},id:n,grid:{id:null},state:{configInit:!1},style:{},trigger:null,option:null,store:{proxy:null,trigger:null},data:null,proxy:null,transform:null,handler:null,event:null}}},endDrag:function(t){this.state.menu.dragMode=!1,this.state.menu.component=null}},watch:{"state.dynamicComponent.list":{immediate:!0,handler:function(){this.initComponentMenu()}}}},u=c,m=e("2877"),l=Object(m["a"])(u,o,i,!1,null,"e24b3fbe",null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-14114396.6fec1a74.js.map