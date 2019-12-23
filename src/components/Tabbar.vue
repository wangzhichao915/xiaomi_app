<template>
    <div style="margin-bottom:1rem;" class="tabbar">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" to="/shopp" :info=info>购物车</van-tabbar-item>
            <van-tabbar-item icon="manager-o" to="/mine">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            info: localStorage.getItem("info"),
        }
  },
}
</script>


<style scoped>
.van-tabbar{
    width: 100%;
    height: 1rem;
    background: #fff;
}
</style>