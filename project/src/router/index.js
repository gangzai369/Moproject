import Vue from 'vue'
import Router from 'vue-router'

// 引入要使用的组件
// 引入一级路由
import Index from '../components/first/index'
import detail from '../components/first/detail'
import login from '../components/first/login'
import regin from '../components/first/regin'
import search from '../components/first/search'
import sort from '../components/first/sort'
import shopcon from '../components/first/shopconfirm'
// 引入二级路由
import home from '../components/second/home'
import mine from '../components/second/mine'
import shopcar from '../components/second/shopcar'

Vue.use(Router)

export default new Router({
  routes: [
    // 配置一级路由地址和组件
    {
      path:'/index',
      component:Index,
      // 配置二级路由
      children:[
        {
          path:'/home',
          component:home,
        },
        {
          path:'/mine',
          component:mine
        },
        {
          path:'/shopcar',
          component:shopcar
        },
        // 二级路由实现重定向
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/detail',
      component:detail
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/regin',
      component:regin
    },
    {
      path:'/sort',
      component:sort
    },
    {
      path:'/search',
      component:search
    },
    {
      path:'/shopcon',
      component:shopcon
    },
    {
      path:'/shoplist',
      component:()=>import('../components/first/shoplist')
    },
    // 重定向路由地址
    {
      path:"*",
      redirect:'/index'
    }
  ]
})
