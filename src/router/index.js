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
      component:()=>import('@/pages/Home/Home'),
      meta:{isShow:true}
    },
    {
      path:'/classify',
      component:()=>import('@/pages/Classify/Classify'),
      meta:{isShow:true}
    },
    {
      path:'/shopp',
      component:()=>import('@/pages/Shopp/Shopp'),
      meta:{isShow:true}
    },
    {
      path:'/mine',
      component:()=>import('@/pages/Mine/Mine'),
      meta:{isShow:true}
    },
    {
      path:'/detail',
      component:()=>import('@/components/Detail'),
      meta:{isShow:false}
    },
  ]
})
