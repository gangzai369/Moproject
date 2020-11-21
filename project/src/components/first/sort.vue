<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 返回按钮 -->
        <go-back></go-back>
        <p>商品分类</p>
        <div class="circle">
          <div class="circles"></div>
          <div class="circles"></div>
          <div class="circles"></div>
        </div>
      </div>
      <!-- 身体部分 -->
      <div class="body">
        <div class="left">
          <ul>
            <van-sidebar v-model="activeKey" @change="onChange">
              <van-sidebar-item
                v-for="item in treeList"
                :key="item.id"
                :title="item.catename"
              />
            </van-sidebar>
          </ul>
        </div>

        <div class="right">
          <van-grid :border="false" :column-num="3">
            <van-grid-item
              v-for="item in treeChild"
              :key="item.id"
              @click="toShop(item.id)"
            >
              <van-image
                :src="
                  item.img
                    ? $imgUrl + item.img
                    : 'https://img.yzcdn.cn/vant/apple-1.jpg'
                "
              />
              <span>{{ item.catename }}</span>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../../util/axios";
export default {
  data() {
    return {
      activeKey: 0,
      // 获取的数据
      treeList: [],
      // tree的children
      treeChild: [],
    };
  },
  mounted() {
    this.getCateTreeAction();
  },
  methods: {
    // 跳转商品列表页
    toShop(id) {
      this.$router.push({
        path: "/shoplist",
        query: {
          id
        },
      });
    },
    //
    onChange() {
      this.treeChild = this.treeList[this.activeKey].children;
    },
    // 调用接口
    getCateTreeAction() {
      getCateTree()
        .then((res) => {
          this.treeList = res.list;
          this.treeChild = res.list[0].children;
        })
        .catch((err) => {});
    },
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/shoptype.css";
.van-image {
  width: 1.4rem;
  height: 1.4rem;
}
</style>
