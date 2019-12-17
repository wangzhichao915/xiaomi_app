<template>
    <div style="margin-bottom:1rem;">
        <van-tabbar v-model="active">
            <van-tabbar-item :icon="item.icon" v-for="(item,i) in pathArr" :key='i' @click='goPage(i)'>{{item.txt}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            pathArr:[
                {
                    path:'/home',icon:'wap-home-o',txt:'首页'
                },
                {
                    path:'/classify',icon:'apps-o',txt:'分类'
                },
                {
                    path:'/shopp',icon:'shopping-cart-o',txt:'购物车'
                },
                {
                    path:'/mine',icon:'manager-o',txt:'个人'
                },
            ]
        }
  },
  methods:{
      goPage(i){
          this.$router.push(this.pathArr[i].path)
      }
  }
}
</script>


<style scoped>
.van-tabbar{
    width: 100%;
    height: 1rem;
    background: #f7f7f7;
}
</style>