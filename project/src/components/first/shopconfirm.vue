<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 返回按钮 -->
        <go-back></go-back>
        <p>支付页</p>
        <div class="circle">
          <div class="circles"></div>
          <div class="circles"></div>
          <div class="circles"></div>
        </div>
      </div>
      <!-- 收货人信息 -->
      <div class="persons">
        <div class="person">
          <div class="pername">
            <p>收货人：sunli</p>
            <p>00021000020</p>
          </div>
          <div class="perarr">
            <p>收货地址：北京市海淀区引泉路清林苑6号楼中公教育就业总部3层</p>
          </div>
        </div>
        <img src="../../assets/images/order/arrow.jpg" alt="" />
      </div>
      <div class="goods">
        <div class="goodsname">
          <img src="../../assets/images/order/shop.jpg" alt="" />
          <p class="p1">雅诗兰黛护肤霜</p>
          <p class="p2">规格：5g</p>
          <p class="p3"><span>&yen;&nbsp;</span>120.00</p>
        </div>
        <div class="goodsnum">
          <p>购买数量：</p>
          <div class="sum">
            <div class="sumleft">-</div>
            <div class="sumiddle">1</div>
            <div class="sumright">+</div>
          </div>
        </div>
        <div class="express">
          <p>配送方式：</p>
          <p>XX快递</p>
        </div>
      </div>
      <!-- 优惠方式 -->
      <div class="favour">
        <div class="favour-paper">
          <p>优惠券</p>
          <p>无可用优惠券</p>
        </div>
        <hr />
        <div class="favour-point">
          <p>使用积分</p>
          <input type="text" placeholder="输入积分" class="input1" />
          <input type="submit" value="使用" class="input2" />
          <p>可用 <span>50</span> 积分</p>
        </div>
      </div>
      <!-- 应付款 -->
      <div class="money">
        <div class="m1">
          <p class="m1-p1">商品金额</p>
          <p class="m1-p2">&yen;68.00</p>
        </div>
        <div class="m1">
          <p class="m1-p1">运费</p>
          <p class="m1-p2">+&yen;0.00</p>
        </div>
        <div class="m1">
          <p class="m1-p1">优惠券</p>
          <p class="m1-p2">-&yen;0.00</p>
        </div>
        <div class="m1">
          <p class="m1-p1">会员优惠</p>
          <p class="m1-p2">-&yen;0.00</p>
        </div>
        <div class="m1">
          <p class="m1-p1">积分抵扣</p>
          <p class="m1-p2">-&yen;0.00</p>
        </div>
      </div>
      <!-- 实付金额 -->
      <div class="per">
        <p>实付金额：<span>&yen;&nbsp;68.00</span></p>
      </div>
      <!-- 提交按钮 -->
      <div class="btn">
        <input type="submit" value="提交订单" />
      </div>
      <!-- 底部栏 -->
      <go-nav></go-nav>
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
@import "../../assets/less/ordershop.css";
</style>
