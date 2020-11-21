<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 返回按钮 -->
        <go-back></go-back>
        <img src="../../assets/images/list_images/logo.jpg" alt="" />
        <div class="circle">
          <div class="circles"></div>
          <div class="circles"></div>
          <div class="circles"></div>
        </div>
      </div>
      <!-- 搜索商品 -->
      <div class="searchshop">
        <!-- <img src="../../assets/images/list_images/search.jpg" alt=""> -->
        <input type="text" placeholder="搜索商品" />
      </div>
      <!-- 商品介绍 -->
      <div class="shop">
        <div class="shop1">
          <img src="../../assets/images/list_images/pic.jpg" alt="" />
          <p>滋源修护滋养洗发香乳 520ml*2瓶</p>
          <p class="p2"><span>&yen; </span>120.00</p>
          <p class="p3">共有1212条评论</p>
        </div>
        <div class="shop1">
          <img src="../../assets/images/list_images/pic.jpg" alt="" />
          <p>
            阿道夫修护滋养洗发香乳 洗发水 持久留下520ml*2瓶 旗舰店正品换新升级款
          </p>
          <p class="p2"><span>&yen; </span>120.00</p>
          <p class="p3">共有1212条评论</p>
        </div>
        <div class="shop1">
          <img src="../../assets/images/list_images/pic.jpg" alt="" />
          <p>
            法式兰蔻修护滋养洗发香乳 洗发水 持久留下520ml*2瓶
            旗舰店正品换新升级款
          </p>
          <p class="p2"><span>&yen; </span>120.00</p>
          <p class="p3">共有1212条评论</p>
        </div>
        <div class="shop1">
          <img src="../../assets/images/list_images/pic.jpg" alt="" />
          <p>滋源修护滋养洗发香乳 520ml*2瓶</p>
          <p class="p2"><span>&yen; </span>120.00</p>
          <p class="p3">共有1212条评论</p>
        </div>
      </div>
      <!-- 底部栏 -->
      <div class="bottom">
        <div class="pic pic1"><p>主页</p></div>
        <div class="pic pic2"><p>购物车</p></div>
        <div class="pic pic3"><p>我的</p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // s:require('../../assets/images')
    };
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/search.css";
</style>
