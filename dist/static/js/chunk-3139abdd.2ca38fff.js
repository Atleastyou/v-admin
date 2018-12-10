(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3139abdd"],{"074d":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"view-header"},[s("div",{staticClass:"icon-back",on:{click:e.back}}),s("span",{staticClass:"header-title"},[e._v(e._s(e.title))]),e.subtitle?s("span",{staticClass:"header-info"},[e._v(e._s(e.subtitle))]):e._e()])},a=[],i={name:"viewHeader",props:{title:{type:String,required:!0},subtitle:String},methods:{back:function(){this.$router.back()}}},n=i,o=(s("0f6c"),s("2877")),c=Object(o["a"])(n,r,a,!1,null,"2a55274f",null);c.options.__file="viewHeader.vue";t["a"]=c.exports},"0f6c":function(e,t,s){"use strict";var r=s("d83e"),a=s.n(r);a.a},"1e4b":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index"},[s("view-header",{staticClass:"index-header",attrs:{title:"首页看板"}}),s("div",{staticClass:"card"},[e._m(0),s("div",{staticClass:"card-info"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.total.today_order_money.num))]),s("div",{staticClass:"card-subtitle"},[e._v("今日订单总额")])])]),s("div",{staticClass:"links"},[s("h3",{staticClass:"links-title"},[e._v("待处理订单")]),s("div",{staticClass:"links-container"},e._l(e.todoOrders,function(t){return s("router-link",{staticClass:"link",attrs:{tag:"div",to:{name:t.routeName,query:t.query}}},[s("div",{staticClass:"link-icon",class:t.icon.class,style:t.icon.style}),s("div",{staticClass:"link-name"},[e._v(e._s(t.name))]),s("div",{staticClass:"link-number"},[e._v(e._s(t.number))])])}))]),s("div",{staticClass:"links"},[s("h3",{staticClass:"links-title"},[e._v("其他待处理")]),s("div",{staticClass:"links-container"},e._l(e.todoOther,function(t){return s("router-link",{staticClass:"link",attrs:{tag:"div",to:{name:t.routeName,query:t.query}}},[s("div",{staticClass:"link-icon",class:t.icon.class,style:t.icon.style}),s("div",{staticClass:"link-name"},[e._v(e._s(t.name))]),s("div",{staticClass:"link-number"},[e._v(e._s(t.number))])])}))])],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-icon"},[s("div",{staticClass:"icon-money"})])}],i=(s("456d"),s("ac6a"),s("96cf"),s("1da1")),n=s("074d"),o=s("880a"),c={name:"index",data:function(){return{total:{today_order_money:{}},todoOrders:{order_wait_pay:{icon:{class:"icon-pro",style:{color:"#D87808"}},name:"待付款",number:0,routeName:"waitPay",query:{order_status:"WAITPAY"}},order_wait_confirm:{icon:{class:"icon-dete",style:{color:"#5080C6"}},name:"待确定",number:0,routeName:"waitConfirm",query:{order_status:"WAITCONFIRM"}},order_wait_deliver:{icon:{class:"icon-car-yello",style:{color:"#D87808"}},name:"待发货",number:0,routeName:"waitDelivery",query:{order_status:"WAITSEND"}},order_delivered:{icon:{class:"icon-car-green",style:{color:"#32A25C"}},name:"已发货",number:0,routeName:"delivered",query:{order_status:"WAITRECEIVE"}},order_success:{icon:{class:"icon-success",style:{color:"#32A25C"}},name:"已成功",number:0,routeName:"finish",query:{order_status:"FINISH"}},order_refund:{icon:{class:"icon-refund",style:{color:"#D87808"}},name:"退款中",number:0,routeName:"refund",query:{order_status:"WAITRETURN"}},order_closed:{icon:{class:"icon-closed",style:{color:"#C2212A"}},name:"已关闭",number:0,routeName:"closed",query:{order_status:"CLOSED"}}},todoOther:{goods_saling:{icon:{class:"icon-sale",style:{color:"#D87808"}},name:"出售中的商品",number:0,routeName:"sales",query:{page_size:10,page:1}},goods_sold:{icon:{class:"icon-soldout",style:{color:"#5080C6"}},name:"已售罄的商品",number:0,routeName:"out",query:{page_size:10,page:1}},goods_shelf:{icon:{class:"icon-ware",style:{color:"#32A25C"}},name:"仓库中的商品",number:0,routeName:"depot",query:{page_size:10,page:1}},goods_warning_stock:{icon:{class:"icon-warning",style:{color:"#C2212A"}},name:"库存预警的商品",number:0,routeName:"warning",query:{page_size:10,page:1}}}}},methods:{getPanel:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,s,r,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.get(o["t"]);case 3:t=e.sent,s=t.data,this.total.today_order_money=s.today_order_money,Object.keys(this.todoOrders).forEach(function(e){s[e]?a.todoOrders[e].number=s[e].num:delete a.todoOrders[e]}),Object.keys(this.todoOther).forEach(function(e){s[e]?a.todoOther[e].number=s[e].num:delete a.todoOther[e]}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),r=e.t0.msg,this.$message.error(r);case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},beforeRouteEnter:function(e,t,s){s(function(e){e.getPanel()})},components:{viewHeader:n["a"]}},l=c,u=(s("2d28"),s("2877")),d=Object(u["a"])(l,r,a,!1,null,"12de2696",null);d.options.__file="index.vue";t["default"]=d.exports},"2d28":function(e,t,s){"use strict";var r=s("4282"),a=s.n(r);a.a},4282:function(e,t,s){},"456d":function(e,t,s){var r=s("4bf8"),a=s("0d58");s("5eda")("keys",function(){return function(e){return a(r(e))}})},"5eda":function(e,t,s){var r=s("5ca1"),a=s("8378"),i=s("79e5");e.exports=function(e,t){var s=(a.Object||{})[e]||Object[e],n={};n[e]=t(s),r(r.S+r.F*i(function(){s(1)}),"Object",n)}},ac6a:function(e,t,s){for(var r=s("cadf"),a=s("0d58"),i=s("2aba"),n=s("7726"),o=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),d=l("toStringTag"),m=c.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=a(_),v=0;v<f.length;v++){var y,C=f[v],b=_[C],h=n[C],p=h&&h.prototype;if(p&&(p[u]||o(p,u,m),p[d]||o(p,d,C),c[C]=m,b))for(y in r)p[y]||i(p,y,r[y],!0)}},d83e:function(e,t,s){}}]);
//# sourceMappingURL=chunk-3139abdd.2ca38fff.js.map