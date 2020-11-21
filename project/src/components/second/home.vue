<template>
  <div>
    <!-- 整块内容区域 -->
    <div class="container">
      <!-- 头部 -->
      <div class="header">
        <div class="head">
          <img src="../../assets/images/index_images/logo.jpg" alt="" />
          <input type="text" placeholder="寻找商品" />
          <div class="circle">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
          </div>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="nav">
        <div class="nav_left">
          <ul>
            <li>推荐</li>
            <li
              style="
                width: 0.02rem;
                flex: 0;
                color: silver;
                font-weight: normal;
                margin: 0 -0.5rem;
              "
            >
              |
            </li>
            <li>女装</li>
            <li>鞋包</li>
            <li>家居</li>
            <li>母婴儿童</li>
            <li>美食</li>
          </ul>
        </div>
        <div class="nav_right">
          <img src="../../assets/images/index_images/arrow.jpg" alt="" />
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner">
        <van-swipe @change="onChange" :autoplay="2000">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="$imgUrl+item.img">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 限时抢购栏 -->
      <div class="menu">
        <div class="box">
          <img src="../../assets/images/index_images/icon_1.jpg" alt="" />
          <p>限时抢购</p>
        </div>
        <div class="box">
          <img src="../../assets/images/index_images/icon_2.jpg" alt="" />
          <p>积分商城</p>
        </div>
        <div class="box">
          <img src="../../assets/images/index_images/icon_3.jpg" alt="" />
          <p>联系我们</p>
        </div>
        <div class="box" @click="$router.push('/sort')">
          <img src="../../assets/images/index_images/icon_4.jpg" alt="" />
          <p>商品分类</p>
        </div>
      </div>
      <!-- 限时秒杀栏 -->
      <div class="timestop">
        <div class="time_left">
          <div class="left-1">
            <img src="../../assets/images/index_images/timer.jpg" alt="" />
            <span class="span">限时秒杀</span>
          </div>
          <p>每天零点场 好货秒不停</p>
          <div class="left-2">
            <div class="timer">
              <div class="time">02</div>
              <div class="time1">:</div>
              <div class="time">55</div>
              <div class="time1">:</div>
              <div class="time">50</div>
            </div>
            <p class="p1">秒杀</p>
          </div>
          <div class="left-3">
            <img src="../../assets/images/index_images/shop_5.jpg" alt="" />
            <div class="price"><span>&yen;</span>14.8</div>
          </div>
        </div>
        <div class="time_right">
          <div class="right_head">
            <p>品牌上新&nbsp;<span class="span">折</span></p>
            <p class="p2">每日9点 抢大牌</p>
            <img src="../../assets/images/index_images/brand.jpg" alt="" />
          </div>
          <div class="right_foot">
            <div class="foot_left">
              <p class="p1">每日十件</p>
              <p class="p2">只为你选好货</p>
              <img src="../../assets/images/index_images/shop_2.jpg" alt="" />
            </div>
            <div class="foot_left">
              <p class="p1">拼啊</p>
              <p class="p2">超级好价拼团</p>
              <img src="../../assets/images/index_images/shop_3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 中部商品 -->
      <div class="bar"></div>
      <!-- 底部商品模块 -->
      <div class="shop">
        <div class="shop_list">
          <div
            :class="[index == num ? 'list active' : 'list']"
            v-for="(item, index) in typeArr"
            @click="change(index)"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <div class="shopbox" v-for="item in shopList.content" :key="item.id">
          <img :src="$imgUrl+item.img" />
          <div class="text">
            <p class="p1">{{ item.goodsname }}</p>
            <p class="p2">价格：<span>&yen;</span>{{ item.price|toPrice(2)}}</p>
            <p class="p3">市场价：<span>&yen;</span>{{ item.market_price|toPrice(2)}}</p>
            <div class="button">立即抢购</div>
          </div>
        </div>
      </div>
      <!-- <hr> -->
      <!-- 底部栏 -->
      <go-nav></go-nav>
    </div>
    <router-view />
  </div>
</template>

<script>
// 引入接口
import { getBannerList,getIndexGoods } from "../../util/axios";
import {Toast} from 'vant'
export default {
  data() {
    return {
      num: 0,
      bannerList: [], //轮播图数据
      // 创建数据
      shopList: [],
      // 总数据
      sList:[],
      // 创建数据
      typeArr: ["热门推荐", "发现好货", "只看专场", "只看商品"],
    };
  },
  mounted() {
    //组件一加载就触发
    this.getBannerListAction();
    this.getIndexGoodAction();
  },
  methods: {
    
    // 轮播图改变事件
    onChange(){},
    // 定义方法点击改变颜色
    change(i) {
      this.num = i
      this.shopList = this.sList[i];
    },
    // 接收轮播数据
    getBannerListAction() {
      getBannerList()
        .then((res) => {
          if (res.code == 200) {
            this.bannerList = res.list;
          }
        })
        .catch((err) => {
          Toast.fail(err.msg)
        });
    },
    // 获取商品接口
    getIndexGoodAction(){
      getIndexGoods()
      .then(res=>{
        this.sList = res.list;
        this.shopList = res.list[0];
      })
      .catch(err=>{
        Toast.fail(err.msg)
      })
    }
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/index.css";
</style>
