<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 返回按钮 -->
        <go-back></go-back>
        <p>购物车</p>
        <div class="circle">
          <div class="circles"></div>
          <div class="circles"></div>
          <div class="circles"></div>
        </div>
      </div>
      <!-- 头像位置 -->
      <div class="personpic">
        <div class="per_left">
          <img src="../../assets/images/mine_images/head.jpg" alt="" />
          <div class="per_text">
            <p class="p2" v-if="userInfo.nickname">{{userInfo.nickname}} <button @click="btnExit" class="btn">登出</button></p>
            <p class="p2" v-else>您还未登录，请先登录~~ <router-link to="/login">登录</router-link></p>
            <p class="p2">V1</p>
          </div>
        </div>
        <div class="per_right">每日签到</div>
      </div>
      <!-- 代付款 -->
      <div class="per_money">
        <div class="per_box">
          <img src="../../assets/images/mine_images/icon_1.jpg" alt="" />
          <p>联系我们</p>
        </div>
        <div class="per_box">
          <img src="../../assets/images/mine_images/icon_2.jpg" alt="" />
          <p>代付款</p>
        </div>
        <div class="per_box">
          <img src="../../assets/images/mine_images/icon_3.jpg" alt="" />
          <p>待收货</p>
        </div>
      </div>
      <!-- 列表栏 -->
      <div class="per_list">
        <div class="list">
          <img src="../../assets/images/mine_images/icon_4.jpg" alt="" />
          <p>地址管理</p>
        </div>
        <div class="list_right">
          <img src="../../assets/images/order/arrow.jpg" alt="" class="imgs" />
        </div>
      </div>
      <div class="per_list">
        <div class="list">
          <img src="../../assets/images/mine_images/icon_5.jpg" alt="" />
          <p>我的钱包</p>
        </div>
        <div class="list_right">
          <p>200余额</p>
          <img src="../../assets/images/order/arrow.jpg" alt="" class="imgs" />
        </div>
      </div>
      <div class="per_list">
        <div class="list">
          <img src="../../assets/images/mine_images/icon_6.jpg" alt="" />
          <p>我的优惠券</p>
        </div>
        <div class="list_right">
          <img src="../../assets/images/order/arrow.jpg" alt="" class="imgs" />
        </div>
      </div>
      <div class="per_list">
        <div class="list">
          <img src="../../assets/images/mine_images/icon_7.jpg" alt="" />
          <p>我的地址</p>
        </div>
        <div class="list_right">
          <img src="../../assets/images/order/arrow.jpg" alt="" class="imgs" />
        </div>
      </div>
      <div class="per_list">
        <div class="list">
          <img src="../../assets/images/mine_images/icon_8.jpg" alt="" />
          <p>我的小伙伴</p>
        </div>
        <div class="list_right">
          <img src="../../assets/images/order/arrow.jpg" alt="" class="imgs" />
        </div>
      </div>
      <!-- 底部栏 -->
      <go-nav></go-nav>
    </div>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  data() {
    return {
        userInfo:{},//接收后台的数据
    };
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    // 退出登录
    btnExit(){
      sessionStorage.removeItem('userInfo');
      Toast.success('登出成功！！！');
      this.$router.push('/login');
    },
    // 定义方法从后台获取数据
    getUserInfo(){
      this.userInfo =sessionStorage.getItem('userInfo')? JSON.parse(sessionStorage.getItem('userInfo')):{};
    }
  }
};
</script>

<style  lang="" scoped>
@import '../../assets/less/mine.css';
</style>
