<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 返回按钮 -->
        <go-back></go-back>
        <p>商品详情</p>
        <div class="circle">
          <div class="circles"></div>
          <div class="circles"></div>
          <div class="circles"></div>
        </div>
      </div>
      <!-- 中间第一部分 -->
      <div class="middle-1">
        <img
          :src="
            detail.img
              ? $imgUrl + detail.img
              : '../../assets/images/detail_images/pic_1.jpg'
          "
        />
        <p class="p1">{{ detail.goodsname }}</p>
        <p class="p2">
          <span>商品价格：&yen;&nbsp;{{ detail.price | toPrice(2) }}</span
          >（此价格不与套装优惠同时享受）
        </p>
        <p class="p3">
          <span>市场价：&yen;&nbsp;{{ detail.market_price | toPrice(2) }}</span>
        </p>
      </div>
      <!-- 中间第二部分 -->
      <div class="middle-2">
        <div class="middle_1">
          <p class="p1">
            促销 ：
            <span class="span1">满减</span>&nbsp;&nbsp;满两件9折；满三件8折
          </p>
        </div>
        <hr />
        <div class="middle_2">
          <p>购买数量</p>
          <div class="sum">
            <van-stepper
              v-model="shopSum"
              theme="round"
              button-size="22"
              disable-input
            />
          </div>
        </div>
        <hr />
        <div class="middle_3">
          <div class="head">
            <p>商品属性</p>
          </div>
          <div class="body">
            <div class="body3">规格</div>
            <div class="body1" v-for="(item, index) in arr" :key="item">
              <van-tag type="warning" size="large" @click="sel(index)">{{
                item
              }}</van-tag>
            </div>
          </div>
        </div>
      </div>
      <!-- 中间第三部分 -->
      <div class="middle-3">
        <div class="head">商品详情</div>
        <div :v-html="detail.description"></div>
        <img src="../../assets/images/detail_images/pic_3.jpg" alt="" />
        <img src="../../assets/images/detail_images/pic_4.jpg" alt="" />
        <img src="../../assets/images/detail_images/pic_5.jpg" alt="" />
        <img src="../../assets/images/detail_images/pic_6.jpg" alt="" />
        <img src="../../assets/images/detail_images/pic_7.jpg" alt="" />
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <div class="bottom_head">商品评价</div>
        <p>121sd2fsd</p>
        <p>效果很好，物流很快，下次继续来！</p>
        <div class="img clearfix">
          <div class="img1">
            <img src="../../assets/images/detail_images/pic_10.jpg" alt="" />
          </div>
          <div class="img1">
            <img src="../../assets/images/detail_images/pic_8.jpg" alt="" />
          </div>
          <div class="img1">
            <img src="../../assets/images/detail_images/pic_9.jpg" alt="" />
          </div>
        </div>
        <p class="p1">2020-06-06</p>
        <div class="text">
          <p>共1000+条评价</p>
          <p style="text-align: right">查看更多></p>
        </div>
        <div class="bottom_foot clearfix">
          <div class="bottom_car">
            <img src="../../assets/images/public/icon_7.jpg" alt="" />
            <p>购物车</p>
            <div class="yuandian">2</div>
          </div>
          <div class="foot_right">立即购买</div>
          <div class="foot_left" @click="toCart()">加入购物车</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入接口
import { getGoodsDetail, getAddCart } from "../../util/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      userInfo: {}, //保存后台数据
      detail: {},
      arr: [], //保存规格
      issel: false,
      shopSum: 1,
      obj: {
        //调用商品添加的接口提交的数据
        uid: "",
        goodsid: 0,
        num: 1,
      },
    };
  },
  mounted() {
    this.getGoodAction();
    this.getUserInfo();
  },
  methods: {
    // 定义方法从后台获取数据
    getUserInfo() {
      this.userInfo = sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : {};
      this.obj.uid = this.userInfo.uid;
      this.obj.goodsid = this.$route.query.id;
    },
    // 点击规格变色
    sel(idx) {
      if (this.issel) {
        this.type = "danger";
      } else {
        this.type = "warning";
      }
      this.issel = !this.issel;
    },
    // 跳转购物车,并进行数据添加
    toCart() {
      if (this.userInfo.nickname) {
        this.obj.num = this.shopSum; //数量
        getAddCart(this.obj)
          .then((res) => {
            if (res.code == 200) {
              Toast.success(res.msg);
            } else {
              Toast.fail(res.msg);
            }
          })
          .catch((err) => {
            Toast.fail(err);
          });
          this.$router.push("/shopcar");
      }else{
        Toast.fail('您还未登录先登录吧');
        this.$router.push("/login");
      }
    },
    //
    getGoodAction() {
      getGoodsDetail({
        id: this.$route.query.id,
      })
        .then((res) => {
          if (res.code == 200) {
            this.detail = res.list[0];
            this.arr = this.detail.specsattr.split(",");
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/details.css";
</style>
