<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 头部内容区 -->
        <div class="title">
          <!-- 返回按钮 -->
          <go-back></go-back>
          <p class="p1">登录</p>
          <p class="p2" @click="jumpEes()">注册</p>
        </div>
      </div>
      <!-- 登录区 -->
      <div class="cont">
        <div class="int1">
          <label for="">手机号：</label>
          <input type="text" v-model="obj.phone" @blur="ch1" /><span v-show="bool1"
            >* 手机号不能为空</span
          >
        </div>
        <hr />
        <div class="int2">
          <label for="">密码：</label>
          <input type="text" v-model="obj.password" />
          <span v-show="bool2">* 密码不能为空</span>
        </div>
        <hr />
        <div style="overflow: hidden"><a href="#">忘记密码</a></div>
        <br />
        <button @click="jumpIdx">登录</button>
        <p>还没有账号去&nbsp;<router-link tag="span" to="/regin">注册</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
// 调用登录接口
import {userLogin} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      // 定义两个变量保存span的状态
      bool1: false,
      bool2: false,
      // 定义两个变量监视input的内容
      obj:{
        phone: "",
        password: "",
      }
    };
  },
  methods: {
    // 简单实现一下跳转到注册页
    jumpEes() {
      window.open("./res.html", "_self");
    },
    // 失焦时进行判断电话号是否为空
    ch1() {
      if (this.obj.phone == "") {
        this.bool1 = true;
        return true;
      } else {
        this.bool1 = false;
      }
    },
    ch2() {
      if (this.obj.password == "") {
        this.bool2 = true;
        return true;
      } else {
        this.bool2 = false;
      }
    },
    // 写死数据登录成功调转主页
    jumpIdx() {
      if (this.ch1() || this.ch2()) {
        return;
      }
      // 指定可以跳转的用户，遍历本地存储的信息
      userLogin(this.obj)
      .then(res=>{
        if(res.code==200){
          Toast.success(res.msg)
          // 将数据存储到本地缓存
          sessionStorage.setItem('userInfo',JSON.stringify(res.list));
          // 跳转到个人中心
          this.$router.push('/mine')
        }else{
          Toast.fail(res.msg)
        }
      })
      .catch(err=>{
        Toast.fail(err)
      })
    },
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/login.css";
</style>
