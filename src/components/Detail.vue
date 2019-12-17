<template>
  <div>
    <div class="swiper">
      <van-swipe :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in detailObj.imgList" :key="i">
          <img :src="item.img" alt />
        </van-swipe-item>
      </van-swipe>
      <van-icon name="arrow-left" size="0.4rem" />
    </div>
    <div class="txt">
        <h3>{{detailObj.name}}</h3>
        <p>{{detailObj.info}}</p>
        <br />
        <span>￥{{detailObj.price}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detailObj: {}
    };
  },
  mounted() {
    this.getData();
    console.log(this.detailObj);
  },
  methods: {
    getData() {
      this.detailObj = this.$route.query.data;
    }
  }
};
</script>
<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 7rem;
  position: relative;
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .van-icon{
      position: absolute;
      left: 0.4rem;
      top: 0.4rem;
  }
}
.txt {
      width: 100%;
      height: 2.6rem;
      padding: 0.25rem;
      box-sizing: border-box;
      h3 {
        color: #000;
        font-size: 0.42rem;
        margin-bottom: 0.15rem;
      }
      p {
        font-size: 0.22rem;
        color: #757575;
      }
      span {
        font-size: 0.34rem;
        color: #eb6962;
        font-weight: bold;
      }
    }
</style>