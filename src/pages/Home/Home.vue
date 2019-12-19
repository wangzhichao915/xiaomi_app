<template>
  <div class="home">
    <header>
      <div class="left"></div>
      <input type="text" />
      <van-icon name="search" size="0.27rem" />
    </header>
    <div class="marginTop"></div>
    <div class="swiper">
      <van-swipe :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in swiperArr" :key="i">
          <img :src=item.img alt='' />
        </van-swipe-item>
      </van-swipe>
    </div>
    <nav>
      <van-grid :border="false" :column-num="5">
        <van-grid-item icon="photo-o" text="icon1" />
        <van-grid-item icon="photo-o" text="icon2" />
        <van-grid-item icon="photo-o" text="icon3" />
        <van-grid-item icon="photo-o" text="icon4" />
        <van-grid-item icon="photo-o" text="icon5" />
      </van-grid>
    </nav>
    <section>
      <van-grid :border="false" :column-num="2" :gutter="10">
        <van-grid-item v-for="(item,i) in sectionArr" :key="i" @click="goDetail(item)">
          <van-image :src=item.img />
          <div class="txt">
            <h3>{{item.name}}</h3>
            <p>{{item.content}}</p>
            <br />
            <span>￥{{item.price}}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sectionArr: [],
      swiperArr:[]
    };
  },
  mounted() {
    this.sectionData();
    this.swiperData()
  },
  methods: {
    sectionData() {
      this.$axios
        .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
        .then(res => {
          console.log(res)
          this.sectionArr = res.data;
        });
    },
    swiperData(){
         this.$axios
        .get("https://shiyaming1994.github.io/mi/static/rotationChart.json")
        .then(res => {
          this.swiperArr = res.data;
        });
    },
    goDetail(item){
        this.$router.push('/detail')
        localStorage.setItem('obj',JSON.stringify(item))
    }
  }
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 1.1rem;
  padding: 0.2rem 0.35rem;
  box-sizing: border-box;
  position: relative;
  background: #f2f2f2;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  .left {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: #87ceeb;
    float: left;
  }
  input {
    width: 3.85rem;
    height: 0.5rem;
    line-height: 1.1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    border: 0.02rem solid #e5e5e5;
    float: right;
  }
  .van-icon {
    position: absolute;
    left: 2.45rem;
    top: 0.4rem;
  }
}
.marginTop{
    width: 100%;
    margin-top: 1.1rem;
}
.swiper {
  width: 100%;
  height: 3.2rem;
  .van-swipe {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
nav {
  width: 100%;
  height: 1.3rem;
  .van-grid {
    width: 100%;
    height: 100%;
  }
}
section {
  width: 100%;
  .van-grid {
    width: 100%;
    .van-grid-item .txt {
      width: 100%;
      padding: 0.25rem 0;
      box-sizing: border-box;
      h3 {
        color: #000;
        font-size: 0.3rem;
        margin-bottom: 0.15rem;
      }
      p {
        font-size: 0.2rem;
        color: #757575;
      }
      span {
        font-size: 0.22rem;
        color: #eb6962;
        font-weight: bold;
      }
    }
  }
}
</style>