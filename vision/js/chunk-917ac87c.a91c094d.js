(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-917ac87c"],{2226:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen-overview"},[a("div",{staticClass:"logo"}),a("div",{staticClass:"title"},[t._v("VISION")]),a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.menuIndex,mode:"horizontal","background-color":"rgba(0,0,0,0)","text-color":"#fff","active-text-color":"#00BAFF"},on:{select:t.selectMenu}},[a("el-menu-item",{attrs:{index:"0"}},[a("i",{staticClass:"icon iconfont icon-layer"},[t._v("我的可视化")])]),a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"icon iconfont icon-cube"},[t._v("我的系统")])]),a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"icon iconfont icon-datasource"},[t._v("我的数据源")])])],1),a("div",{staticClass:"system"},[a("i",{staticClass:"icon iconfont icon-user"},[a("span",[t._v(t._s(t.userInfo.name))])]),a("i",{staticClass:"icon iconfont icon-logout",on:{click:t.logout}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.menuIndex,expression:"menuIndex==='0'"}],staticClass:"container container-result"},[a("div",{staticClass:"card add",on:{click:t.addScreen}},[a("div",{staticClass:"content"},[a("i",{staticClass:"icon iconfont icon-plus"}),a("div",[t._v("新建可视化")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导入配置",placement:"bottom"}},[a("i",{staticClass:"el-icon-upload",on:{click:t.showImporter}})])],1)]),t.screen.list&&t.screen.list.length?[t._l(t.screen.list,(function(e,i){return[a("div",{key:i,staticClass:"card"},[a("div",{staticClass:"img-cover"},[e.cover?a("img",{attrs:{src:e.cover}}):t._e()]),a("div",{staticClass:"title-bar"},[a("el-row",[a("el-col",{staticClass:"name",attrs:{span:16}},[t._v(t._s(e.name||"未命名"))]),a("el-col",{staticClass:"state",attrs:{span:8}},[0===e.state?a("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("未发布")]):a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("已发布")])],1)],1)],1),a("div",{staticClass:"toolbar"},[a("div",{staticClass:"delete"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("i",{staticClass:"icon iconfont icon-delete",on:{click:function(e){return t.deleteScreen(i)}}})])],1),a("div",{staticClass:"edit"},[a("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:function(e){return t.editScreen(i)}}},[t._v(" 编 辑")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出",placement:"bottom"}},[a("i",{staticClass:"icon iconfont icon-download",on:{click:function(e){return t.exportScreen(i)}}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"预览",placement:"bottom"}},[a("i",{staticClass:"icon iconfont icon-view",on:{click:function(e){return t.previewScreen(i)}}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"发布",placement:"bottom"}},[a("i",{staticClass:"icon iconfont icon-plane",on:{click:function(e){return t.publishScreen(i)}}})])],1)])]}))]:t._e()],2),a("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.menuIndex,expression:"menuIndex==='1'"}],staticClass:"container container-result"},[a("div",{staticClass:"card add",on:{click:t.addIntegration}},[t._m(0)]),t.integration.list&&t.integration.list.length?[t._l(t.integration.list,(function(e,i){return[a("div",{key:i,staticClass:"card"},[e.cover?[a("div",{staticClass:"img-cover"})]:[a("img",{staticClass:"img-cover",attrs:{src:e.cover}})],a("div",{staticClass:"title-bar"},[a("el-row",[a("el-col",{staticClass:"name",attrs:{span:16}},[t._v(t._s(e.name||"未命名"))]),a("el-col",{staticClass:"state",attrs:{span:8}},[0===e.state?a("el-tag",{attrs:{size:"mini",type:"info"}},[t._v("未发布")]):a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("已发布")])],1)],1)],1),a("div",{staticClass:"toolbar"},[a("div",{staticClass:"delete"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("i",{staticClass:"icon iconfont icon-delete",on:{click:function(e){return t.deleteIntegration(i)}}})])],1),a("div",{staticClass:"edit"},[a("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:function(e){return t.editIntegration(i)}}},[t._v(" 编 辑")])],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"导出",placement:"bottom"}},[a("i",{staticClass:"icon iconfont icon-download",on:{click:function(e){return t.exportIntegration(i)}}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"预览",placement:"bottom"}},[a("i",{staticClass:"icon iconfont icon-view",on:{click:function(e){return t.previewIntegration(i)}}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"发布",placement:"bottom"}},[a("i",{staticClass:"icon iconfont icon-plane",on:{click:function(e){return t.publishIntegration(i)}}})])],1)],2)]}))]:t._e()],2),a("div",{directives:[{name:"show",rawName:"v-show",value:"2"===t.menuIndex,expression:"menuIndex==='2'"}],staticClass:"container container-result"},[a("div",{staticClass:"ds-toolbar"},[a("div",{staticClass:"ds-add",on:{click:t.addDataSource}},[t._m(1)])]),a("div",{staticClass:"ds-list"},[t.dataSource.list&&t.dataSource.list.length?[t._l(t.dataSource.list,(function(e,i){return[a("el-col",{key:i,attrs:{span:12}},[a("div",{staticClass:"ds-block"},[a("div",{staticClass:"ds-tile"},[a("div",{staticClass:"ds-icon"},[a("i",{staticClass:"icon iconfont",class:e.type?"icon-"+e.type.toLowerCase():"icon-datasource-o"})]),a("div",{staticClass:"ds-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"ds-time"},[t._v(t._s(e.createTime.substring(0,10)))])]),a("div",{staticClass:"ds-opts"},[a("div",{staticClass:"ds-opts-btn"},[t.isFileSource(e)?t._e():a("i",{staticClass:"icon iconfont icon-edit",on:{click:function(a){return t.editDataSource(e)}}}),a("i",{staticClass:"icon iconfont icon-delete",on:{click:function(a){return t.deleteDataSource(e)}}})])])])])]}))]:t._e()],2)]),a("Importer",{attrs:{config:t.importer}}),t.edit.visible?a("DataSourceEdit",{attrs:{config:t.edit}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("i",{staticClass:"icon iconfont icon-plus"}),a("div",[t._v("新建系统")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ds-add-text"},[a("i",{staticClass:"icon iconfont icon-plus"}),t._v(" 新建数据源")])}],o=(a("ffc9"),a("32a0")),s=a("5225"),r=a("a3be"),c=a("7638"),l=a("2ef0"),u=a.n(l),d={name:"Overview",data:function(){return{userInfo:{name:""},menuIndex:"0",screen:{index:null,list:null},integration:{index:null,list:null},dataSource:{list:null},importer:{visible:!1},edit:{visible:!1,dataSource:{}}}},mounted:function(){this.initUserInfo(),this.listScreen(),this.listIntegration(),this.listDataSource()},methods:{initUserInfo:function(){var t=this;this.ajax({url:r["a"].USER.CURRENT,method:c["a"].AJAX.GET}).then((function(e){e&&e.success?t.userInfo=e.data:t.userInfo.name="游客"}))},selectMenu:function(t){this.menuIndex=t},listScreen:function(){var t=this;this.ajax({url:r["a"].SCREEN.LIST,method:c["a"].AJAX.POST,data:{}}).then((function(e){t.screen.list=e.data}))},listIntegration:function(){var t=this;this.ajax({url:r["a"].INTEGRATION.LIST,method:c["a"].AJAX.POST,data:{}}).then((function(e){t.integration.list=e.data}))},listDataSource:function(){var t=this;this.ajax({url:r["a"].DATA_SOURCE.LIST_BY_USER,method:c["a"].AJAX.POST}).then((function(e){t.dataSource.list=e.data}))},addScreen:function(){this.$router.push("./design")},editScreen:function(t){this.$router.push("./design?id="+this.screen.list[t].id)},deleteScreen:function(t){var e=this;this.$confirm("可视化成果删除后无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.ajax({url:r["a"].SCREEN.DELETE,params:{id:e.screen.list[t].id}}).then((function(a){a.success?(e.screen.list.splice(t,1),e.$message(c["a"].MESSAGE.DELETE_SUCCESS)):e.$message({message:a["message"],type:"error"})}))})).catch((function(){}))},exportScreen:function(t){var e=this.formatConfigParam(this.screen.list[t]);e.id=null;var a=document.createElement("a"),i=new Blob([JSON.stringify(e,null,4)]);a.download="config-"+(new Date).getTime(),a.href=URL.createObjectURL(i),a.click(),URL.revokeObjectURL(i)},previewScreen:function(t){var e=this.formatConfigParam(this.screen.list[t]),a=e.id,i=this.$router.resolve({path:"./presentation",query:{id:a}});window.open(i.href,"_blank")},publishScreen:function(t){var e=this,a=this.formatConfigParam(this.screen.list[t]);this.ajax({url:r["a"].SCREEN.PUBLISH,method:c["a"].AJAX.POST,data:a}).then((function(t){e.listScreen(),e.$message(c["a"].MESSAGE.SAVE_SUCCESS)}))},formatConfigParam:function(t){var e=u.a.cloneDeep(t);for(var a in e){var i=e[a];u.a.isObject(i)&&(e[a]=JSON.stringify(i))}return e},addIntegration:function(){this.$router.push("./integration")},editIntegration:function(t){this.$router.push("./integration?id="+this.integration.list[t].id)},deleteIntegration:function(t){var e=this;this.$confirm("可视化成果删除后无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.ajax({url:r["a"].INTEGRATION.DELETE,params:{id:e.integration.list[t].id}}).then((function(a){a.success?(e.integration.list.splice(t,1),e.$message(c["a"].MESSAGE.DELETE_SUCCESS)):e.$message({message:a["message"],type:"error"})}))})).catch((function(){}))},exportIntegration:function(t){var e=this.formatConfigParam(this.integration.list[t]);e.id=null;var a=document.createElement("a"),i=new Blob([JSON.stringify(e,null,4)]);a.download="integration-"+(new Date).getTime(),a.href=URL.createObjectURL(i),a.click(),URL.revokeObjectURL(i)},previewIntegration:function(t){var e=this.formatConfigParam(this.integration.list[t]),a=e.id,i=this.$router.resolve({path:"./integration_presentation",query:{id:a}});window.open(i.href,"_blank")},publishIntegration:function(t){var e=this,a=this.formatConfigParam(this.integration.list[t]);this.ajax({url:r["a"].INTEGRATION.PUBLISH,method:c["a"].AJAX.POST,data:a}).then((function(t){e.listIntegration(),e.$message(c["a"].MESSAGE.SAVE_SUCCESS)}))},addDataSource:function(){this.edit={visible:!0,dataSource:null}},editDataSource:function(t){var e=this;this.ajax({url:r["a"].DATA_SOURCE.GET,method:c["a"].AJAX.POST,data:{dsId:t.id,type:t.type}}).then((function(t){e.edit={visible:!0,dataSource:t.data}}))},deleteDataSource:function(t){var e=this;this.$confirm("数据源删除后无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.ajax({url:r["a"].DATA_SOURCE.DELETE,method:c["a"].AJAX.POST,data:{dsId:t.id,type:t.type}}).then((function(a){e.$message(c["a"].MESSAGE.DELETE_SUCCESS);for(var i=0;i<e.dataSource.list.length;i++)e.dataSource.list[i].id===t.id&&e.dataSource.list.splice(i,1)}))})).catch((function(){}))},isFileSource:function(t){return"EXCEL"===t.type},showImporter:function(t){this.importer.visible=!0,t.stopPropagation()},logout:function(){var t=this;this.$confirm("是否注销",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$store.commit(c["a"].MUTATIONS.SET_TOKEN,null),t.$cookies.remove(c["a"].AJAX.TOKEN),t.$router.push("./login")})).catch((function(){}))}},watch:{"importer.visible":function(t){this.importer.visible||this.listDataSource()},"edit.visible":function(t){this.edit.visible||this.listDataSource()}},components:{Importer:s["default"],DataSourceEdit:o["default"]}},f=d,m=a("2877"),p=Object(m["a"])(f,i,n,!1,null,null,null);e["default"]=p.exports},"288b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"dbSourceForm",attrs:{model:t.config.dataSource,rules:t.rules,size:"mini","label-width":"80px"}},[a("el-form-item",{attrs:{label:"域名/IP",prop:"host"}},[a("el-input",{model:{value:t.config.dataSource.host,callback:function(e){t.$set(t.config.dataSource,"host",e)},expression:"config.dataSource.host"}})],1),a("el-form-item",{attrs:{label:"端口",prop:"port"}},[a("el-input",{model:{value:t.config.dataSource.port,callback:function(e){t.$set(t.config.dataSource,"port",e)},expression:"config.dataSource.port"}})],1),a("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[a("el-input",{model:{value:t.config.dataSource.userName,callback:function(e){t.$set(t.config.dataSource,"userName",e)},expression:"config.dataSource.userName"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{model:{value:t.config.dataSource.password,callback:function(e){t.$set(t.config.dataSource,"password",e)},expression:"config.dataSource.password"}})],1),a("el-form-item",{attrs:{label:"数据库",prop:"db"}},[a("el-col",{attrs:{span:16}},[a("el-select",{attrs:{placeholder:"请选择数据库"},model:{value:t.config.dataSource.db,callback:function(e){t.$set(t.config.dataSource,"db",e)},expression:"config.dataSource.db"}},t._l(t.db,(function(t,e){return a("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1),a("el-col",{attrs:{span:7,offset:1}},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:t.initDb}},[t._v("获取数据库列表")])],1)],1)],1)},n=[],o=a("7638"),s=a("a3be"),r={name:"DatabaseForm",props:["config"],data:function(){return{rules:{host:[{required:!0,message:"必须填写"}],port:[{required:!0,message:"必须填写"}],userName:[{required:!0,message:"必须填写"}],password:[{required:!0,message:"必须填写"}],db:[{required:!0,message:"必须填写"}]},db:[]}},mounted:function(){this.config&&this.config.dataSource.id&&this.config.dataSource.id&&this.initDb()},methods:{initDb:function(){var t=this;this.db=[];var e=this.config.dataSource;this.ajax({url:s["a"].DATA_SOURCE.LIST_DB,method:o["a"].AJAX.POST,data:{host:e.host,port:e.port,userName:e.userName,password:e.password,type:e.type}}).then((function(e){t.db=e.data}))}}},c=r,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,"3a7da4ee",null);e["default"]=u.exports},"32a0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{width:"40%",title:t.config.dataSource.id?"编辑数据源":"新建数据源",visible:t.config.visible,"close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.config,"visible",e)}}},[a("el-form",{ref:"dataSourceForm",attrs:{model:t.config.dataSource,rules:t.rules,size:"mini","label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.config.dataSource.name,callback:function(e){t.$set(t.config.dataSource,"name",e)},expression:"config.dataSource.name"}})],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"请选择数据源类型","default-first-option":!0},model:{value:t.config.dataSource.type,callback:function(e){t.$set(t.config.dataSource,"type",e)},expression:"config.dataSource.type"}},t._l(t.dataSourceType,(function(t){return a("el-option",{key:t.type,attrs:{label:t.desc,value:t.type}})})),1)],1)],1),a(t.form.loader[t.form.mapper[t.config.dataSource.type]].default,{ref:"subDsForm",tag:"component",attrs:{config:t.config}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.save}},[t._v("确 定")]),a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.config.visible=!1}}},[t._v("取 消")])],1)],1)},n=[],o=a("a3be"),s=a("7638"),r=a("2ef0"),c=a.n(r),l={name:"DataSourceEdit",props:["config"],data:function(){return{rules:{name:[{required:!0,message:"必须填写名称",trigger:"blur"}]},form:{mapper:{},url:{},loader:{}},dataSourceType:[{type:"EXCEL",desc:"XLS/CSV 文件",form:"FileForm",url:o["a"].DATA_SOURCE.SAVE_FILE},{type:"POSTGRESQL",desc:"PostgreSQL数据库",form:"DatabaseForm",url:o["a"].DATA_SOURCE.SAVE_DATABASE},{type:"MYSQL",desc:"MySQL数据库",form:"DatabaseForm",url:o["a"].DATA_SOURCE.SAVE_DATABASE},{type:"ORACLE",desc:"Oracle数据库",form:"DatabaseForm",url:o["a"].DATA_SOURCE.SAVE_DATABASE},{type:"SQLSERVER",desc:"SqlServer数据库",form:"DatabaseForm",url:o["a"].DATA_SOURCE.SAVE_DATABASE}]}},created:function(){this.loadForm(),this.config.dataSource||(this.config.dataSource=c.a.assignIn({},this.dataSourceType[0]))},methods:{save:function(){var t=this,e=this.$refs.dataSourceForm,a=this.$refs.subDsForm;e.validate((function(e,i){e&&a.$children[0].validate((function(e,a){if(e){var i=t.form.url[t.config.dataSource.type];t.ajax({url:i,method:s["a"].AJAX.POST,data:t.config.dataSource}).then((function(e){e.success&&(t.$message(s["a"].MESSAGE.SAVE_SUCCESS),t.config.visible=!1)}))}}))}))},loadForm:function(){for(var t=0;t<this.dataSourceType.length;t++){var e=this.dataSourceType[t],i=e.form;this.form.mapper[e.type]=i,this.form.url[e.type]=e.url,this.form.loader[i]||(this.form.loader[i]=a("5fac")("./"+i+".vue"))}}}},u=l,d=a("2877"),f=Object(d["a"])(u,i,n,!1,null,"54529620",null);e["default"]=f.exports},"4ef4":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form-item",{attrs:{label:"url",required:""}},[a("el-input",{model:{value:t.config.dataSource.url,callback:function(e){t.$set(t.config.dataSource,"url",e)},expression:"config.dataSource.url"}})],1),a("el-form-item",{attrs:{label:"协议",required:""}},[a("el-select",{attrs:{placeholder:"请选择协议类型"},model:{value:t.config.dataSource.protocol,callback:function(e){t.$set(t.config.dataSource,"protocol",e)},expression:"config.dataSource.protocol"}},t._l(t.protocol,(function(t,e){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1)],1)],1)},n=[],o={name:"ApiForm",props:["config"],data:function(){return{protocol:[{name:"http"},{name:"https"}]}}},s=o,r=a("2877"),c=Object(r["a"])(s,i,n,!1,null,"d93b1e12",null);e["default"]=c.exports},5225:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{width:"50%",title:"导入配置",visible:t.config.visible,"close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.config,"visible",e)}}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{attrs:{type:"textarea",rows:12,size:"mini",resize:"none"},model:{value:t.screen,callback:function(e){t.screen=e},expression:"screen"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.save}},[t._v("确 定")]),a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.config.visible=!1}}},[t._v("取 消")])],1)],1)},n=[],o=a("a3be"),s=a("7638"),r={name:"Importer",props:["config"],data:function(){return{rules:{screen:[{required:!0,message:"配置不可为空",trigger:"blur"}]},screen:null}},methods:{save:function(){var t=this;try{JSON.parse(this.screen),this.ajax({url:o["a"].SCREEN.SAVE,method:s["a"].AJAX.POST,data:JSON.parse(this.screen)}).then((function(e){e.success&&(t.$message(s["a"].MESSAGE.SAVE_SUCCESS),t.config.visible=!1)}))}catch(e){this.$message({message:s["a"].MESSAGE.JSON_PARSE_ERROR,type:"error"})}}}},c=r,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,"3591f3a2",null);e["default"]=u.exports},"5fac":function(t,e,a){var i={"./ApiForm.vue":"4ef4","./DatabaseForm.vue":"288b","./FileForm.vue":"8992"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=o,t.exports=n,n.id="5fac"},8992:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{model:t.config.dataSource,rules:t.rules,size:"mini","label-width":"80px"}},[a("el-form-item",{attrs:{label:"",prop:"attachment"}},[a("el-upload",{attrs:{drag:"",limit:1,headers:t.getToken(),action:t.getUploadUrl(),"before-upload":t.beforeUpload,"on-remove":t.remove,"on-success":t.onSuccess,"on-exceed":t.onExceed,"on-Error":t.onError}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传xls、xlsx、csv文件")])])],1)],1)},n=[],o=(a("7f7f"),a("a3be")),s=a("7638"),r={name:"FileForm",props:["config"],data:function(){var t=this,e=function(e,a,i){t.config.dataSource.attachmentId?i():i(new Error("请上传文件。"))};return{rules:{attachment:[{validator:e,trigger:"change"}]}}},methods:{beforeUpload:function(t){var e=t.name,a=e.substring(e.lastIndexOf(".")+1).toLowerCase();if("xls"!==a&&"xlsx"!==a&&"csv"!==a)return this.$message({message:"只支持xls、xlsx、csv文件",type:"error"}),!1},getUploadUrl:function(){return o["a"].ATTACHMENT.UPLOAD},getToken:function(){return{token:this.$store.state.token}},remove:function(t,e){var a=this;this.config.dataSource.id&&(this.ajax({url:o["a"].ATTACHMENT.DELETE,params:{id:this.config.dataSource.id}}).then((function(t){t.data.success&&a.$message(s["a"].MESSAGE.DELETE_SUCCESS)})),this.config.dataSource.id=null)},onSuccess:function(t){this.config.dataSource.attachmentId=t.data.id},onError:function(t){this.$message({message:t.data.message,type:"error"})},onExceed:function(t,e){this.$message({message:"最多只可上传1个文件，请删除当前文件后再上传",type:"error"})}}},c=r,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,"48386735",null);e["default"]=u.exports},ffc9:function(t,e,a){}}]);
//# sourceMappingURL=chunk-917ac87c.a91c094d.js.map