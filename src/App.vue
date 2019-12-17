<template>
  <div id="app">
    
    <router-view/>
    <tabbar v-show="this.$route.meta.isShow"></tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  name: 'App',
  components:{
    Tabbar
  }
}
</script>

<style>

</style>
