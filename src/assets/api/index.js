
const directory = '/api'
// 获取七牛token
const qiniuToken = `${directory}/other/getQiniuToken`
// 登陆
const login = `${directory}/author/login`
// 登出
const logout = `${directory}/author/logout`
// 首页看板数据
const panel = `${directory}/index/getPanelData`
// 修改密码
const setPswd = `${directory}/user/changePassword`
// 订单列表
const orderList = `${directory}/order/orderList`
// 订单详情
const orderDetail = `${directory}/order/detail`
// 确认订单
const confirmOrder = `${directory}/order/confirmOrder`
// 订单发货
const sendGoods = `${directory}/order/sendOrder`
// 关闭订单
const cancelOrder = `${directory}/order/cancelOrder`
// 同意退款
const agreeRefundMoney = `${directory}/order/agreeRefundMoney`
// 拒绝退款
const refusalRefundMoney = `${directory}/order/refusalRefundMoney`
// （订单筛选）供应商品牌列表
const supplierBrand = `${directory}/brand/getSupplierBrand`
// （订单筛选）供应商交货类型列表
const deliveryType = `${directory}/user/getDeliveryType`
// 获取行政区域列表
const getRegion = `${directory}/area/getRegion`
// 获取行政区域省列表
const getProvince = `${directory}/area/getProvince`
// 获取行政区域市列表
const getCity = `${directory}/area/getCity`
// 获取行政区域区列表
const getDistrict = `${directory}/area/getDistrict`
// 获取用户基本信息
const getSupplierInfo = `${directory}/user/getSupplierInfo`
// 获取退货地址
const getRefundAddress = `${directory}/Address/getRefundAddress`
// 修改退换货地址
const editRefundAddress = `${directory}/Address/editRefundAddress`
// 获取销售区域模板
const getArea = `${directory}/Area/getAreaTemplates`
// 删除地区模板
const delAreaTemplate = `${directory}/area/delAreaTemplate`
// 获取对应销售区域模板列表
const getAreaTemplateItems = `${directory}/area/getAreaTemplateItems`
// 商品列表
const goodsSkuList = `${directory}/goods/goodsSkuList`
// 修改商品库存数量
const changestockNum = `${directory}/goods/changestock`
// 创建修改区域模板
const editAreaTemplate = `${directory}/area/editAreaTemplate`
// 获取区域选中状态
const getAreaTemplateItemsByType = `${directory}/area/getAreaTemplateItemsByType`

export {
  qiniuToken,
  login,
  logout,
  panel,
  setPswd,
  orderList,
  orderDetail,
  confirmOrder,
  sendGoods,
  cancelOrder,
  agreeRefundMoney,
  refusalRefundMoney,
  supplierBrand,
  deliveryType,
  getProvince,
  getCity,
  getDistrict,
  getSupplierInfo,
  getRefundAddress,
  editRefundAddress,
  getArea,
  getAreaTemplateItems,
  goodsSkuList,
  changestockNum,
  editAreaTemplate,
  getRegion,
  delAreaTemplate,
  getAreaTemplateItemsByType
}
