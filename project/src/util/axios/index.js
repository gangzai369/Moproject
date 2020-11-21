// 引入HTTP
import http from './axios'

// 创建接口
export function getBannerList(){
    return http.get('/getbanner')
}
// 获取商品信息接口
export function getIndexGoods(){
    return http.get('/getindexgoods');
}
// 分类属性结构
export function getCateTree(){
    return http.get('/getcatetree')
}
// 获取商品列表
export function getShopList(params){
    return http.get('/getgoods',{
        params
    })
}
// 获取商品详情接口
export function getGoodsDetail(params){
    return http.get('/getgoodsinfo',{
        params
    })
}
// 购物车列表
export function getShopCarList(params){
    return http.get('/cartlist',{
        params
    })
}
// 添加购物车
export function getAddCart(data){
    return http.post('/cartadd',data)
}
// 删除购物车
export function getDeleteCart(data){
    return http.post('/cartdelete',data)
}
// 用户注册接口
export function userReg(data){
    return http.post('/register',data)
}
// 用户登录接口
export function userLogin(data){
    return http.post('/login',data)
}