<template>
  <div>
    <div class="bottom">
      <router-link activeClass='select' tag="div" to="/home" class="pic pic1" ><p>主页</p></router-link>
      <router-link activeClass='select' tag="div" to="/shopcar" class="pic pic2"><p>购物车</p></router-link>
      <router-link activeClass='select' tag="div" to="/mine" class="pic pic3"><p>我的</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  lang="" scoped>
.bottom {
  width: 7.5rem;
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  bottom: 0;
}
.bottom .pic {
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.2rem;
  color: gray;
  text-align: center;
}
.bottom .pic p {
  margin-top: 1rem;
}
.bottom .pic1 {
  background-image: url(../assets/images/public/icon_8.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.54rem 0.54rem;
}
.bottom .pic2 {
  background-image: url(../assets/images/public/icon_7.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.54rem 0.54rem;
}
.bottom .pic3 {
  background-image: url(../assets/images/public/icon_5.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.54rem 0.54rem;
}
.select{
    color: tomato !important;
}
</style>
