(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a7473e"],{"06b7":function(e,t,r){"use strict";var n=r("fc55"),a=r.n(n);a.a},"074d":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"view-header"},[r("div",{staticClass:"icon-back",on:{click:e.back}}),r("span",{staticClass:"header-title"},[e._v(e._s(e.title))]),e.subtitle?r("span",{staticClass:"header-info"},[e._v(e._s(e.subtitle))]):e._e()])},a=[],i={name:"viewHeader",props:{title:{type:String,required:!0},subtitle:String},methods:{back:function(){this.$router.back()}}},s=i,o=(r("0f6c"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,"2a55274f",null);c.options.__file="viewHeader.vue";t["a"]=c.exports},"0f6c":function(e,t,r){"use strict";var n=r("d83e"),a=r.n(n);a.a},"11e9":function(e,t,r){var n=r("52a7"),a=r("4630"),i=r("6821"),s=r("6a99"),o=r("69a8"),c=r("c69a"),l=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?l:function(e,t){if(e=i(e),t=s(t,!0),c)try{return l(e,t)}catch(r){}if(o(e,t))return a(!n.f.call(e,t),e[t])}},"33c7":function(e,t,r){},"386d":function(e,t,r){r("214f")("search",1,function(e,t,r){return[function(r){"use strict";var n=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,n):new RegExp(r)[t](String(n))},r]})},"456d":function(e,t,r){var n=r("4bf8"),a=r("0d58");r("5eda")("keys",function(){return function(e){return a(n(e))}})},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,r){var n=r("d3f4"),a=r("8b97").set;e.exports=function(e,t,r){var i,s=t.constructor;return s!==r&&"function"==typeof s&&(i=s.prototype)!==r.prototype&&n(i)&&a&&a(e,i),e}},"5eda":function(e,t,r){var n=r("5ca1"),a=r("8378"),i=r("79e5");e.exports=function(e,t){var r=(a.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},"638b":function(e,t,r){"use strict";var n=r("33c7"),a=r.n(n);a.a},"8b97":function(e,t,r){var n=r("d3f4"),a=r("cb7c"),i=function(e,t){if(a(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,r){return i(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:i}},9093:function(e,t,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},aa77:function(e,t,r){var n=r("5ca1"),a=r("be13"),i=r("79e5"),s=r("fdef"),o="["+s+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,r){var a={},o=i(function(){return!!s[e]()||c[e]()!=c}),l=a[e]=o?t(p):s[e];r&&(a[r]=l),n(n.P+n.F*o,"String",a)},p=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},ac6a:function(e,t,r){for(var n=r("cadf"),a=r("0d58"),i=r("2aba"),s=r("7726"),o=r("32e9"),c=r("84f2"),l=r("2b4c"),u=l("iterator"),d=l("toStringTag"),p=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(f),m=0;m<h.length;m++){var y,v=h[m],g=f[v],_=s[v],b=_&&_.prototype;if(b&&(b[u]||o(b,u,p),b[d]||o(b,d,v),c[v]=p,g))for(y in n)b[y]||i(b,y,n[y],!0)}},c5f6:function(e,t,r){"use strict";var n=r("7726"),a=r("69a8"),i=r("2d95"),s=r("5dbc"),o=r("6a99"),c=r("79e5"),l=r("9093").f,u=r("11e9").f,d=r("86cc").f,p=r("aa77").trim,f="Number",h=n[f],m=h,y=h.prototype,v=i(r("2aeb")(y))==f,g="trim"in String.prototype,_=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():p(t,3);var r,n,a,i=t.charCodeAt(0);if(43===i||45===i){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var s,c=t.slice(2),l=0,u=c.length;l<u;l++)if(s=c.charCodeAt(l),s<48||s>a)return NaN;return parseInt(c,n)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof h&&(v?c(function(){y.valueOf.call(r)}):i(r)!=f)?s(new m(_(t)),r,h):_(t)};for(var b,k=r("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)a(m,b=k[w])&&!a(h,b)&&d(h,b,u(m,b));h.prototype=y,y.constructor=h,r("2aba")(n,f,h)}},d65e:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"filter"},e._l(e.filter,function(t){return r("div",{staticClass:"filter-row"},[e._l(t,function(t){return["handle"===t.type?r("div",{staticClass:"filter-item"},[r("div",{staticClass:"filter-name",style:{width:e.titleWidth+"px"}}),r("div",{staticClass:"filter-handles",style:{width:e.inputWidth+"px"}},e._l(t.buttons,function(t){return r("el-button",{attrs:{size:t.size,name:t.name},on:{click:t.handle}},[e._v(e._s(t.label))])}))]):r("div",{staticClass:"filter-item"},[r("div",{staticClass:"filter-name",style:{width:e.titleWidth+"px"}},[e._v(e._s(t.name))]),r("div",{staticClass:"filter-body",style:{width:e.inputWidth+"px"}},["default"!==t.type&&t.type?e._e():r("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t[t.key],callback:function(r){e.$set(t,t.key,r)},expression:"item[item.key]"}}),"select"===t.type?r("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t[t.key],callback:function(r){e.$set(t,t.key,r)},expression:"item[item.key]"}},[r("el-option",{attrs:{label:"全部",value:""}}),e._l(t.options,function(e,n){return r("el-option",{key:n,attrs:{label:t.optLabel?e[t.optLabel]:e,value:t.optValue?e[t.optValue]:e}})})],2):e._e(),"date"===t.type?r("el-date-picker",{attrs:{size:"small","prefix-icon":"none",type:"daterange","range-separator":"-","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t[t.key],callback:function(r){e.$set(t,t.key,r)},expression:"item[item.key]"}}):e._e()],1)])]})],2)}))},a=[],i={name:"filterOrder",props:{filter:Array,titleWidth:{default:"84",type:String},inputWidth:{default:"220",type:String}}},s=i,o=(r("06b7"),r("2877")),c=Object(o["a"])(s,n,a,!1,null,"7e11f8dc",null);c.options.__file="filterData.vue";t["a"]=c.exports},d83e:function(e,t,r){},da49:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"orders"},[r("view-header",{attrs:{title:"已成功",subtitle:"商城实物商品交易订单查询及管理"}}),r("filter-data",{attrs:{filter:e.filter}}),r("div",{staticClass:"orders-list"},[r("div",{staticClass:"orders-list-header"},[r("div",{staticClass:"orders-list-title"},[r("span",{staticClass:"orders-list-name"},[e._v("订单列表")]),r("span",{staticClass:"orders-list-total"},[e._v(e._s("（共"+e.totalOrders+"条记录）"))])]),r("i",{staticClass:"orders-list-reload icon-reload",class:{"orders-list-reloading":e.reloading},on:{click:e.getOrders}}),r("div",{staticClass:"orders-list-handles"},[r("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportExcel}},[e._v("导出数据")])],1)]),r("div",{staticClass:"orders-list-body"},[r("div",{staticClass:"table-header"},[r("el-checkbox",{staticClass:"table-checkAll",on:{change:e.checkAll},model:{value:e.checkedAll,callback:function(t){e.checkedAll=t},expression:"checkedAll"}},[e._v("全选")]),r("el-table",{staticStyle:{width:"100%"},attrs:{"cell-style":{fontSize:"12px"},border:"","show-header":!1,data:e.tableHeader}},[r("el-table-column",{attrs:{"min-width":"200",align:"center",prop:"goods"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"price"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"num"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"time"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"totalPrice"}}),r("el-table-column",{attrs:{"min-width":"100",align:"center",prop:"receive"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"status"}})],1)],1),0===e.orderList.length?r("div",{staticClass:"table-empty"},[e._v("未找到符合条件的内容")]):r("div",{staticClass:"table-list"},e._l(e.orderList,function(t,n){return r("div",{staticClass:"table-item"},[r("div",{staticClass:"table-item-header"},[r("el-checkbox",{on:{change:e.checkItem},model:{value:t.checked,callback:function(r){e.$set(t,"checked",r)},expression:"item.checked"}}),r("span",[e._v("订单号: "+e._s(t.order_sn))]),r("span",[e._v("下单时间: "+e._s(t.add_time))])],1),r("el-table",{staticStyle:{width:"100%"},attrs:{"cell-style":{fontSize:"12px",paddingTop:"20px",paddingBottom:"20px"},border:"","row-key":"order_sn","show-header":!1,data:t.goods,"span-method":e.objectSpanMethod}},[r("el-table-column",{attrs:{"min-width":"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"table-item-good"},[r("img",{staticClass:"table-item-img",attrs:{src:t.row.img}}),r("p",[e._v(e._s(t.row.goods_name))])])]}}])}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"goods_price"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"goods_num"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"delivery_type"}}),r("el-table-column",{attrs:{"min-width":"80",align:"center",prop:"price"}}),r("el-table-column",{attrs:{"min-width":"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[r("p",[e._v(e._s(t.consignee))]),r("p",[e._v(e._s(t.mobile))])]}}])}),r("el-table-column",{attrs:{"min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[r("p",[e._v(e._s(t.order_status))]),r("router-link",{staticClass:"table-item-link",attrs:{to:{name:"orderDetail",params:{id:t.order_id}}}},[e._v("订单详情")])]}}])})],1)],1)}))]),e.totalPage?r("div",{staticClass:"orders-list-pagination"},[r("el-pagination",{attrs:{layout:"prev, pager, next","page-count":e.totalPage,"current-page":e.currentPage},on:{"current-change":e.changeCurrent,"prev-click":e.prev,"next-click":e.next}})],1):e._e()])],1)},a=[],i=(r("456d"),r("be94")),s=(r("a481"),r("ac6a"),r("c5f6"),r("96cf"),r("1da1")),o=(r("386d"),r("cadf"),r("551c"),r("097d"),r("074d")),c=r("d65e"),l=r("880a"),u={name:"finish",data:function(){return{tableHeader:[{goods:"商品",price:"结算单价",num:"数量",time:"交货期",totalPrice:"结算金额",receive:"收货人",status:"订单状态"}],orderList:[],totalPage:0,currentPage:1,totalOrders:0,filter:[[{name:"订单号:",type:"default",key:"order_sn",order_sn:""},{name:"交货期:",type:"select",key:"delivery_type",delivery_type:"",options:[]},{name:"品牌:",type:"select",key:"brand_id",brand_id:"",optLabel:"name",optValue:"id",options:[]}],[{name:"收货人姓名:",type:"default",key:"consignee",consignee:""},{name:"物流号:",type:"default",key:"invoice_no",invoice_no:""},{name:"物流公司:",type:"default",key:"shipping_name",shipping_name:""}],[{name:"订单完成时间:",type:"date",key:"endTime",endTime:[]},{name:"下单时间段:",type:"date",key:"payTime",payTime:[]},{type:"handle",buttons:[{name:"search",size:"small",label:"搜索",handle:this.search},{name:"reset",size:"small",label:"重置",handle:this.reset}]}]],brand:[],delivery_type:[],checkedAll:!1,reloading:!1}},methods:{getOrders:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.reloading=!0,e.next=4,this.$axios.get(l["s"],{params:this.$route.query});case 4:t=e.sent,r=t.data,this.reloading=!1,this.totalPage=r.page_count,this.currentPage=Number(this.$route.query.page)||1,this.totalOrders=r.count,r.list.forEach(function(e){e.checked=!1}),this.orderList=r.list,e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](0),n=e.t0.msg,this.reloading=!1,this.$message.error(n);case 19:case"end":return e.stop()}},e,this,[[0,14]])}));return function(){return e.apply(this,arguments)}}(),changeCurrent:function(e){this.currentPage=e,this.$router.replace({name:"finish",query:Object(i["a"])({},this.$route.query,{page:this.currentPage})})},prev:function(){this.currentPage--,this.$router.replace({name:"finish",query:Object(i["a"])({},this.$route.query,{page:this.currentPage})})},next:function(){this.currentPage++,this.$router.replace({name:"finish",query:Object(i["a"])({},this.$route.query,{page:this.currentPage})})},checkItem:function(){var e=this.orderList.every(function(e){return e.checked});e&&(this.checkedAll=!0)},checkAll:function(e){this.orderList.forEach(function(t){t.checked=e})},exportExcel:function(){var e="订单号,商品,下单时间,结算单价,数量,交货期,结算金额,收货人,订单状态\n",t=0;if(this.orderList.forEach(function(r){r.checked&&(t++,e+="\n",r.goods.forEach(function(t){e+="".concat(r.order_sn,"\t,").concat(t.goods_name,"\t,").concat(r.add_time,"\t,").concat(t.goods_price,"\t,").concat(t.goods_num,"\t,").concat(t.delivery_type,"\t,").concat(t.price,"\t,").concat(r.consignee,"\t,").concat(r.order_status,"\t,\n")}))}),t){var r="data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(e),n=document.createElement("a");n.href=r,n.download="订单列表(共".concat(t,"条订单).csv"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}else this.$message.error("请选择要导出的订单")},getOptions:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$axios.get(l["y"]);case 3:return t=e.sent,r=t.data.brand,e.next=7,this.$axios.get(l["f"]);case 7:n=e.sent,a=n.data.delivery_type,this.brand=r,this.delivery_type=a,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),i=e.t0.msg,this.$message.error(i);case 17:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}(),search:function(){var e={};this.filter.map(function(t){return t.map(function(t){t[t.key]&&(e[t.key]=t[t.key])})}),e["order_end_stm"]=e["endTime"][0],e["order_end_etm"]=e["endTime"][1],e["order_pay_stm"]=e["payTime"][0],e["order_pay_etm"]=e["payTime"][1],Object.keys(e).forEach(function(t){"endTime"!==t&&"payTime"!==t&&e[t]||delete e[t]}),this.$router.replace({name:"finish",query:Object(i["a"])({},e,{order_status:this.$route.query.order_status})})},initFilter:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:try{this.filter.forEach(function(e){return e.forEach(function(e){"brand_id"===e.key&&(e.options=r.brand),"delivery_type"===e.key&&(e.options=r.delivery_type),"endTime"===e.key?e[e.key]=[r.$route.query["order_end_stm"]||"",r.$route.query["order_end_etm"]||""]:"payTime"===e.key?e[e.key]=[r.$route.query["order_pay_stm"]||"",r.$route.query["order_pay_etm"]||""]:"brand_id"===e.key?e[e.key]=Number(r.$route.query[e.key])||"":e[e.key]=r.$route.query[e.key]||""})})}catch(n){t=n.msg,this.$message.error(t)}case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),reset:function(){this.$router.replace({name:"finish",query:{order_status:"FINISH"}})},objectSpanMethod:function(e){e.row,e.column;var t=e.rowIndex,r=e.columnIndex;if(3===r||4===r||5===r||6===r)return t%100===0?{rowspan:100,colspan:1}:{rowspan:0,colspan:0}}},beforeRouteEnter:function(e,t,r){r(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.getOrders(),e.next=3,t.getOptions();case 3:t.initFilter();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},beforeRouteUpdate:function(e,t,r){r(),this.getOrders(),this.initFilter()},components:{viewHeader:o["a"],filterData:c["a"]}},d=u,p=(r("638b"),r("2877")),f=Object(p["a"])(d,n,a,!1,null,"59b716c2",null);f.options.__file="finish.vue";t["default"]=f.exports},fc55:function(e,t,r){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-18a7473e.bd32a66d.js.map