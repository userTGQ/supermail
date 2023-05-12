import Vue from 'vue'
import Router from 'vue-router'

const home =()=>import('../views/home/Home.vue')
const cart=()=>import('../views/cart/Cart.vue')
const category=()=>import('../views/category/Category.vue')
const profile=()=>import('@/views/profile/Profile.vue')
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/profile',
      component:profile
    }

  ]
})
