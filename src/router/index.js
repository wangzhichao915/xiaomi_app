import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:()=>import('@/pages/Home/Home')
    },
    {
      path:'/home',
      component:()=>import('@/pages/Home/Home')
    },
    {
      path:'/classify',
      component:()=>import('@/pages/Classify/Classify')
    },
    {
      path:'/shopp',
      component:()=>import('@/pages/Shopp/Shopp')
    },
    {
      path:'/mine',
      component:()=>import('@/pages/Mine/Mine')
    },
  ]
})
