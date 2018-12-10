(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-321d40fd"],{"074d":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"view-header"},[e("div",{staticClass:"icon-back",on:{click:t.back}}),e("span",{staticClass:"header-title"},[t._v(t._s(t.title))]),t.subtitle?e("span",{staticClass:"header-info"},[t._v(t._s(t.subtitle))]):t._e()])},i=[],r={name:"viewHeader",props:{title:{type:String,required:!0},subtitle:String},methods:{back:function(){this.$router.back()}}},l=r,c=(e("0f6c"),e("2877")),n=Object(c["a"])(l,a,i,!1,null,"2a55274f",null);n.options.__file="viewHeader.vue";s["a"]=n.exports},"0c63":function(t,s,e){},"0f6c":function(t,s,e){"use strict";var a=e("d83e"),i=e.n(a);i.a},7988:function(t,s,e){"use strict";var a=e("0c63"),i=e.n(a);i.a},ac6a:function(t,s,e){for(var a=e("cadf"),i=e("0d58"),r=e("2aba"),l=e("7726"),c=e("32e9"),n=e("84f2"),o=e("2b4c"),d=o("iterator"),m=o("toStringTag"),v=n.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},u=i(f),_=0;_<u.length;_++){var p,b=u[_],C=f[b],h=l[b],g=h&&h.prototype;if(g&&(g[d]||c(g,d,v),g[m]||c(g,m,b),n[b]=v,C))for(p in a)g[p]||r(g,p,a[p],!0)}},c1b2:function(t,s,e){},d762:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"address"},[e("view-header",{attrs:{title:t.title,subtitle:t.subtitle}}),e("div",{staticClass:"consignee"},[e("div",{staticClass:"title"},[t._v("收货人信息")]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("收货人姓名")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.username))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("联系方式")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.contact))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("收货地址")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.address))])])]),e("div",{staticClass:"logistic"},[e("div",{staticClass:"title"},[t._v("要求物流公司")]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("物流公司名称")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.logistics_company))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("物流公司电话")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.logistics_tel))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("物流公司地址")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.logistics_address))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("所在地区")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.logistics_arrival_area))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"},[t._v("物流备注")]),e("div",{staticClass:"item-text"},[t._v(t._s(t.addressData.note))])]),e("div",{staticClass:"address-item"},[e("div",{staticClass:"item-label"}),e("el-button",{attrs:{size:"small",name:"search"},on:{click:t.edit}},[t._v("编辑")])],1)]),e("edit-sales-address",{on:{refreshData:t.refreshData}})],1)},i=[],r=(e("96cf"),e("1da1")),l=e("be94"),c=e("074d"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("modal",{attrs:{name:"editSalesAddress",width:480,height:"auto"},on:{"before-open":t.beforeOpen,"before-close":t.beforeClose}},[e("div",{staticClass:"edit"},[e("div",{staticClass:"edit-header"},[e("div",{staticClass:"edit-title"},[t._v("编辑退货地址")]),e("div",{staticClass:"edit-icon-close el-icon-close",on:{click:t.close}})]),e("div",{staticClass:"edit-form"},[e("div",{staticClass:"form-title"},[t._v("确认收货人信息")]),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("div",{staticClass:"label_important"},[t._v("*")]),e("span",[t._v("收货人姓名:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.username,callback:function(s){t.$set(t.form,"username",s)},expression:"form.username"}})],1),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("div",{staticClass:"label_important"},[t._v("*")]),e("span",[t._v("联系方式:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.contact,callback:function(s){t.$set(t.form,"contact",s)},expression:"form.contact"}})],1),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("div",{staticClass:"label_important"},[t._v("*")]),e("span",[t._v(" 收货地址:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.address,callback:function(s){t.$set(t.form,"address",s)},expression:"form.address"}})],1),e("div",{staticClass:"form-title"},[t._v("确认收货人信息")]),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("div",{staticClass:"label_important"},[t._v("*")]),e("span",[t._v(" 物流公司名称:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.logistics_company,callback:function(s){t.$set(t.form,"logistics_company",s)},expression:"form.logistics_company"}})],1),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("div",{staticClass:"label_important"},[t._v("*")]),e("span",[t._v(" 物流公司电话:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.logistics_tel,callback:function(s){t.$set(t.form,"logistics_tel",s)},expression:"form.logistics_tel"}})],1),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("span",[t._v(" 物流公司地址:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.logistics_address,callback:function(s){t.$set(t.form,"logistics_address",s)},expression:"form.logistics_address"}})],1),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("span",[t._v(" 所在地区:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.logistics_arrival_area,callback:function(s){t.$set(t.form,"logistics_arrival_area",s)},expression:"form.logistics_arrival_area"}})],1),e("div",{staticClass:"form-item"},[e("div",{staticClass:"form-label"},[e("span",[t._v(" 物流备注:")])]),e("el-input",{attrs:{size:"mini"},model:{value:t.form.note,callback:function(s){t.$set(t.form,"note",s)},expression:"form.note"}})],1),e("div",{staticClass:"form-btn"},[e("el-button",{attrs:{name:"cancel"},on:{click:t.cancel}},[t._v("取消")]),e("el-button",{attrs:{name:"sure"},on:{click:t.submit}},[t._v("确定")])],1)])])])},o=[],d=(e("ac6a"),e("880a")),m={name:"editSalesAddress",data:function(){return{form:{username:"",address:"",contact:"",logistics_company:"",logistics_tel:"",logistics_address:"",logistics_arrival_area:"",note:""},filter:[{key:"username",msg:"收货人姓名必填"},{key:"address",msg:"收货地址必填"},{key:"contact",msg:"联系方式必填"},{key:"logistics_company",msg:"物流公司名称必填"},{key:"logistics_tel",msg:"物流公司电话必填"}],isSave:!1}},methods:{beforeOpen:function(t){var s=t.params;this.isSave=!1,this.form=Object(l["a"])({},this.form,s)},beforeClose:function(t){this.$emit("refreshData",this.isSave)},close:function(){this.$modal.hide("editSalesAddress")},cancel:function(){this.close()},submit:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:t.prev=0,t.t0=regeneratorRuntime.keys(this.filter);case 2:if((t.t1=t.t0()).done){t.next=9;break}if(s=t.t1.value,this.form[this.filter[s].key]){t.next=7;break}return this.$message.error(this.filter[s].msg),t.abrupt("return");case 7:t.next=2;break;case 9:return t.next=11,this.$axios.post(d["h"],this.form);case 11:this.$message({type:"success",message:"操作成功"}),this.isSave=!0,this.close(),t.next=20;break;case 16:t.prev=16,t.t2=t["catch"](0),e=t.t2.msg,this.$message.error(e);case 20:case"end":return t.stop()}},t,this,[[0,16]])}));return function(){return t.apply(this,arguments)}}()}},v=m,f=(e("f4d6"),e("2877")),u=Object(f["a"])(v,n,o,!1,null,"76c33c69",null);u.options.__file="editSalesAddress.vue";var _=u.exports,p={name:"salesReturn",components:{viewHeader:c["a"],editSalesAddress:_},data:function(){return{title:"退货地址管理",subtitle:"区代退货时联系人与要求发送物流",addressData:{}}},methods:{edit:function(){this.form=Object(l["a"])({},this.form,this.addressData),this.$modal.show("editSalesAddress",Object(l["a"])({},this.form))},refreshData:function(t){t&&this.getRefundAddress()},clickBlank:function(t){var s=event.target.childNodes[0];s&&"modal-container"===s.className&&this.close()},getRefundAddress:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var s,e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.get(d["l"]);case 3:s=t.sent,e=s.data,this.addressData=e,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),a=t.t0.err,this.$message.error(a);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}()},beforeRouteEnter:function(t,s,e){e(function(t){t.getRefundAddress()})}},b=p,C=(e("7988"),Object(f["a"])(b,a,i,!1,null,"4b833a72",null));C.options.__file="address.vue";s["default"]=C.exports},d83e:function(t,s,e){},f4d6:function(t,s,e){"use strict";var a=e("c1b2"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-321d40fd.c5e2fb32.js.map