<template>
  <div>
    <div class="box">
      <van-nav-bar title="标题" left-text="返回" left-arrow >
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
      <!-- 商品标签 -->
      <van-card
        v-for="item in shopList"
        :key="item.id"
        num="1"
        :price="item.price.toFixed(2)"
        desc="描述信息"
        :title="item.goodsname"
        :thumb="
          item.img ? $imgUrl + item.img : 'https://img.yzcdn.cn/vant/ipad.jpeg'
        "
         @click="toDetail(item.id)"
      />
    </div>
  </div>
</template>

<script>
// 引入接口
import { getShopList,getGoodsDetail } from "../../util/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      shopList: [],
      id: 0, //接收跳转传进来的id值
    };
  },
  methods: {
    // 点击跳转商品详情页
    toDetail(id){
      this.$router.push({
        path:'/detail',
        query:{
          id
        }
      })
    },
    getShopAction() {
      getShopList({
        fid: this.$route.query.id,
      })
        .then((res) => {
          if (res.code == 200) {
            this.shopList = res.list;
          }
        })
        .catch((err) => {
          Toast.fail(err);
        });
    },
  },
  mounted() {
    this.getShopAction();
  },
};
</script>

<style lang='' scoped>
.van-card {
  font-size: 0.16rem;
}
</style>