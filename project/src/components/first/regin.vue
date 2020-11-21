<template>
  <div>
    <div class="content">
      <div class="header">
        <!-- 头部内容区 -->
        <div class="title">
          <!-- 返回按钮 -->
          <go-back></go-back>
          <p class="p1">注册</p>
          <p class="p2" @click="jumpLog">登录</p>
        </div>
      </div>
      <!-- 登录区 -->
      <div class="cont">
        <div class="int1">
          <label for="">昵称：</label>
          <input type="text" v-model="obj.nickname" @blur="ch1" /><span
            v-show="bool1"
            >* 请输入昵称</span
          >
        </div>
        <hr />
        <div class="int2">
          <label for="">手机号：</label>
          <input type="text" v-model="obj.phone" @blur="ch2" /><span
            v-show="bool2"
            >* 请输入手机号</span
          >
        </div>
        <hr />
        <div class="int3">
          <label for="">密码：</label>
          <input type="text" v-model="obj.password" @blur="ch3" /><span
            v-show="bool3"
            >* 请输入密码</span
          >
        </div>
        <hr />
        <div class="int4">
          <label for="">验证码：</label>
          <input type="text" />
          <button>获取验证码</button>
        </div>
        <hr />
        <br />
        <button @click="sub()">下一步</button>
        <br />
        <!--  -->
        <div class="agree">
          <input type="checkbox" v-model="bool" /><span
            >&nbsp;我已阅读并同意其中的隐私条款</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入注册接口
import {userReg} from '../../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      // 定义一个对象保存注册用户的数据
      obj: {
        nickname: "",
        phone: "",
        password: "",
      },
      // 定义一个数组保存用户数据
      // 初始把本地存储的数据赋值给arrObj
      arrObj: JSON.parse(localStorage.getItem("userList"))
        ? JSON.parse(localStorage.getItem("userList"))
        : [],
      // 保存三个变量用以显示span的状态
      bool1: false,
      bool2: false,
      bool3: false,
      // 保存同意按钮的状态,默认同意
      bool: true,
    };
  },
  methods: {
    // 跳转登录页
    jumpLog() {
      window.open("./login.html", "_self");
    },
    // 前三个表单失焦进行判断
    ch1() {
      if (this.obj.nickname == "") {
        this.bool1 = true;
        return true;
      } else {
        this.bool1 = false;
      }
    },
    ch2() {
      if (this.obj.phone == "") {
        this.bool2 = true;
        return true;
      } else {
        this.bool2 = false;
      }
    },
    ch3() {
      if (this.obj.password == "") {
        this.bool3 = true;
        return true;
      } else {
        this.bool3 = false;
      }
    },
    // 点击按钮进行数据提交,提交到本地存储
    sub() {
      // 调用注册接口
      userReg(this.obj)
      .then(res=>{
        Toast.success(res.msg)
      })
      .catch(err=>{
        Toast.fail(err)
      })
      // 跳转登录页
      this.$router.push('/login')
    },
  },
};
</script>

<style  lang="" scoped>
@import "../../assets/less/res.css";
</style>
