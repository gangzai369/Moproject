<template>
  <div>
    <!--  -->
    <div class="content" v-if="userInfo == null">
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
      <van-empty description="您还未登录，先去登录吧" />
      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="toLogin"
      >
        登录
      </van-button>
    </div>
    <!--  -->
    <div class="content" v-if="goodList == null">
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
      <van-empty image="search" description="购物车空空如也~~" />
      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="toShop"
      >
        前去购物
      </van-button>
    </div>
    <!--  -->
    <div class="content" v-else>
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
      
      <!-- 商品列表 -->
      <div class="shoplist">
        <div class="lists" v-for="(item, i) in goodList" :key="item.id">
          <div class="list-1">
            <div class="duihao">
              <input
                type="checkbox"
                v-model="goodList[i].checkOne"
                @change="one"
              />
            </div>
            <img
              :src="goodList[i].img ? $imgUrl + goodList[i].img : ''"
              alt=""
            />
            <div class="text">
              <p class="p1">{{ goodList[i].goodsname }}</p>
              <p class="p2"></p>
              <p class="p3">
                <span>&yen;&nbsp;</span>{{ goodList[i].price | toPrice(2) }}
              </p>
            </div>
            <div class="sum">
              <div class="sumleft" @click.stop="mul(i)">-</div>
              <div class="sumiddle">
                {{ goodList[i].num }}
              </div>
              <div class="sumright" @click.stop="add(i)">+</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 结算栏 -->
      <div class="account">
        <div class="account-1">
          <div class="duihao">
            <input type="checkbox" v-model="checkAll" @change="all()" />
          </div>
          <p>全选</p>
        </div>
        <div class="account-2">
          <p class="p1">
            总计：&nbsp;<span>{{ priceSum | toPrice(2) }}</span>
          </p>
          <p class="p2">不含运费 已优惠&yen;0.00元</p>
        </div>
        <div class="account-3" @click="account()">
          去结算(共{{ goodSum }}件)
        </div>
        <!-- <router-link tag="div"to="/shopcon"></router-link> -->
      </div>
      <!-- 底部栏 -->
      <go-nav></go-nav>
    </div>
  </div>
</template>

<script>
// 导入关于购物车的接口
import { getShopCarList, getDeleteCart } from "../../util/axios";
import {Toast} from 'vant'
export default {
  data() {
    return {
      goodSum: 0,
      priceSum: 0,
      checkAll: false,
      bool: false,
      userInfo: {},
      //   模拟数据
      goodList: [],
    };
  },
  mounted() {
    // 组件加载判断是否登录
    this.getUserInfo();
  },
  methods: {
    // 获取后台数据
    getUserInfo() {
      this.userInfo = sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : {};
      if (this.userInfo != {}) {
        this.getGoodsListAction(this.userInfo.uid);
      }
    },
    // 判断后台数据，确定显示的内容
    getGoodsListAction(id) {
      getShopCarList({
        uid: id,
      })
        .then((res) => {
          this.goodList = res.list;
        })
        .catch((err) => {});
    },
    // 跳转到登录页
    toLogin() {
      this.$router.push("/login");
    },
    // 跳转到商品分类页
    toShop() {
      this.$router.push("/sort");
    },
    // 结算方法
    account() {
      this.goodList.some((item) => {
        if (item.checkOne == true) {
          this.bool = true;
          this.$router.push("/shopcon");
          return true;
        }
      });
      if (!this.bool) {
        Toast.fail("请勾选商品！！！")
      }
    },
    // 添加操作
    add(i) {
      // 此处默认可以无限添加
      this.goodList[i].num++;
      // 调用自定义函数
      this.comput();
    },
    // 减少操作
    mul(i) {
      if (this.goodList[i].num <= 1) {
        Toast.fail('不能再减少了！！！')
        return;
      }
      this.goodList[i].num--;
      // 调用自定义函数
      this.comput();
    },
    // 点击全选进行选择
    all() {
      this.goodList.forEach((item) => {
        item.checkOne = this.checkAll;
      });
      // 调用自定义函数
      this.comput();
    },
    // 点击每一项都进行判断
    one() {
      this.goodList.every((item) => {
        return (this.checkAll = item.checkOne);
      });
      // 调用自定义函数
      this.comput();
    },
    // 自定义函数计算总价和总个数
    comput() {
      // 遍历商品列表进行计算
      let sum = 0; //保存价格
      let s = 0; //保存数量
      this.goodList.forEach((item, i) => {
        if (item.checkOne) {
          s += item.num;
          sum += item.num * item.price;
        }
      });
      // 赋值进行数据绑定
      this.goodSum = s;
      this.priceSum = sum;
    },
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/shopcar.css";
</style>
