(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-939ce94e"],{"0149":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"basic-info"},[i("view-header",{attrs:{title:t.title,subtitle:t.subtitle}}),i("div",{staticClass:"basic-content"},[i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("企业名称")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.suppliers_name))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("供应商ID")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.suppliers_id))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("企业logo")]),t.supplierInfo.suppliers_logo?i("img",{staticClass:"item-img",attrs:{src:t.supplierInfo.suppliers_logo}}):t._e()]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("主营类别")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.major_business))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("上架品牌")]),t._l(t.supplierInfo.brand,function(s){return s.logo?i("img",{staticClass:"item-img",attrs:{src:s.logo}}):t._e()})],2),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("企业类型")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.type))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("成立时间")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.found_time))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("企业地址")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.address))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("营业执照")]),t.supplierInfo.business_licence?i("img",{staticClass:"item-img",attrs:{src:t.supplierInfo.business_licence}}):t._e()]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("联系人")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.suppliers_contacts))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("职位")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.contacts_job))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("电话")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.suppliers_phone))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("传真")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.suppliers_fax))])]),i("div",{staticClass:"info-item"},[i("div",{staticClass:"item-label"},[t._v("邮箱")]),i("div",{staticClass:"item-text"},[t._v(t._s(t.supplierInfo.suppliers_email))])]),i("div",{staticClass:"prompt-label"},[t._v("提示：如果上述信息有误，请联系巢搭配平台客服人员及时修改")])])],1)},a=[],l=(i("96cf"),i("1da1")),n=i("074d"),c=i("880a"),r={name:"basicInfo",components:{viewHeader:n["a"]},data:function(){return{title:"企业基本信息",subtitle:"",supplierInfo:{}}},methods:{getSupplierInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var s,i,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log("production"),t.next=4,this.$axios.get(c["n"]);case 4:s=t.sent,i=s.data,this.supplierInfo=i,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),e=t.t0.msg,this.$message.error(e);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}()},beforeRouteEnter:function(t,s,i){i(function(t){t.getSupplierInfo()})}},o=r,v=(i("6327"),i("2877")),p=Object(v["a"])(o,e,a,!1,null,"1964449c",null);p.options.__file="basicInfo.vue";s["default"]=p.exports},"074d":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"view-header"},[i("div",{staticClass:"icon-back",on:{click:t.back}}),i("span",{staticClass:"header-title"},[t._v(t._s(t.title))]),t.subtitle?i("span",{staticClass:"header-info"},[t._v(t._s(t.subtitle))]):t._e()])},a=[],l={name:"viewHeader",props:{title:{type:String,required:!0},subtitle:String},methods:{back:function(){this.$router.back()}}},n=l,c=(i("0f6c"),i("2877")),r=Object(c["a"])(n,e,a,!1,null,"2a55274f",null);r.options.__file="viewHeader.vue";s["a"]=r.exports},"07ab":function(t,s,i){},"0f6c":function(t,s,i){"use strict";var e=i("d83e"),a=i.n(e);a.a},6327:function(t,s,i){"use strict";var e=i("07ab"),a=i.n(e);a.a},d83e:function(t,s,i){}}]);
//# sourceMappingURL=chunk-939ce94e.6789a348.js.map