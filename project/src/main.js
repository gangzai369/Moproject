// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入重置样式表
import './assets/css/reset.css';
// 引入字体转换js文件
import './assets/js/remScale'
// 全局引入过滤器,并进行全局遍历
import allFilter from './filter'
// 全局引入vant
import VantUI from 'vant'
Vue.use(VantUI)
import 'vant/lib/index.css'
// 引入vuex仓库
import store from './store'

// 全局设置目标地址
Vue.prototype.$imgUrl = 'http://localhost:3000'

for(let item in allFilter){
  Vue.filter(item,allFilter[item]);
};
// 全局引入组件，并进行全局遍历
import allComponent from './common'
for(let i in allComponent){
  Vue.component(i,allComponent[i]);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
