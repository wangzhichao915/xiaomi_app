<template>
  <div v-if="JSON.stringify(detailObj) != '{}'">
    <div class="swiper">
      <van-swipe :autoplay="1000" indicator-color="white">
        <van-swipe-item v-for="(item,i) in detailObj.imgList" :key="i">
          <img :src="item.img" alt />
        </van-swipe-item>
      </van-swipe>
      <van-icon name="arrow-left" size="0.4rem" @click="goBack" />
    </div>
    <div class="txt">
      <h3>{{detailObj.name}}</h3>
      <p>{{detailObj.info}}</p>
      <br />
      <span>￥{{detailObj.price}}</span>
    </div>
    <div class="info">
      <div class="top" @click="flag = true">
        <p>已选</p>
        <ul>
          <li>{{detailObj.name}}</li>
          <li>{{detailObj.edition[0].Memory}}x1</li>
        </ul>
        <van-icon size="0.28rem" name="arrow" />
      </div>
      <div class="bottom">
        <p>送至</p>
        <ul>
          <li>北京</li>
        </ul>
        <van-icon size="0.28rem" name="arrow" />
      </div>
    </div>
    <div class="detail">
      <img v-for="(item,i) in detailObj.info_img" :key="i" :src="item.img" alt />
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" @click="goHome" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="info" @click='goShopp'/>
      <van-goods-action-button type="warning" text="加入购物车" @click="flag=true" />
    </van-goods-action>
    <div class="detailbox" v-show="flag">
      <div class="detaillist">
        <van-icon size="0.3rem" name="cross" @click="flag = false" />
        <div class="msg">
          <img :src="detailObj.edition[seen].color[seen1].img" alt />
          <div class="right">
            <p>￥{{detailObj.edition[seen].edition_price}}</p>
            <ul>
              <li>{{detailObj.name}}</li>
              <li>{{detailObj.edition[seen].Memory}}</li>
              <li>{{detailObj.edition[seen].color[seen1].color_list}}</li>
            </ul>
          </div>
        </div>
        <div class="edition">
          <header>版本</header>
          <ul
            v-for="(item,i) in detailObj.edition"
            :key="i"
            @click="selectEdition(i)"
            :class="{active:seen == i}"
          >
            <li>{{item.Memory}}</li>
            <li>{{item.edition_price}}</li>
          </ul>
        </div>
        <div class="color">
          <header>颜色</header>
          <ul>
            <li
              @click="selectColor(i)"
              v-for="(item,i) in editionObj.color"
              :key="i"
              :class="{active1:seen1 == i}"
            >{{item.color_list}}</li>
          </ul>
        </div>
        <div class="num">
          <p>购买数量</p>
          <van-stepper v-model="value" />
        </div>
        <van-button round type="warning" size="large" @click="shopp">加入购物车</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info:localStorage.getItem("info"),
      detailObj: {},
      flag: false,
      value: 1,
      editionObj: {},
      seen: 0,
      seen1: 0,
      arr: JSON.parse(localStorage.getItem("key")) || []
    };
  },
  mounted() {
    this.getData();
    this.editionObj = this.detailObj.edition[0];
    this.info = localStorage.getItem("info")
  },
  methods: {
    //提交购物车
    shopp() {
      var shoppArr = {};
      shoppArr.name = this.detailObj.name;
      shoppArr.price = this.detailObj.edition[this.seen].edition_price;
      shoppArr.type = this.detailObj.edition[this.seen].Memory;
      shoppArr.img = this.detailObj.edition[this.seen].color[this.seen1].img;
      shoppArr.color = this.detailObj.edition[this.seen].color[
        this.seen1
      ].color_list;
      shoppArr.num = this.value;
      this.arr.push(shoppArr);
      localStorage.setItem("key", JSON.stringify(this.arr));
      localStorage.setItem("info",Number(localStorage.getItem("info"))+Number(this.value))
      this.info = localStorage.getItem("info")
    },
    getData() {
      this.detailObj = JSON.parse(localStorage.getItem('obj'))
    },
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push("/home");
    },
    goShopp(){
      this.$router.push('/shopp')
    },
    selectEdition(i) {
      this.editionObj = this.detailObj.edition[i];
      this.seen = i;
    },
    selectColor(i) {
      this.seen1 = i;
    }
  }
};
</script>
<style lang="less" scoped>
.active {
  border: 0.02rem solid #f56600 !important;
  color: #f56600 !important;
}
.active1 {
  border: 0.02rem solid #f56600 !important;
  color: #f56600 !important;
}
.detailbox {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.65);
}
.detaillist {
  width: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0.3rem 0.3rem 0 0;
  padding: 0.9rem 0.3rem 0 0.3rem;
  box-sizing: border-box;
  .van-icon {
    position: absolute;
    right: 0.3rem;
    top: 0.3rem;
  }
  .msg {
    width: 100%;
    height: 1.72rem;
    display: flex;
    justify-content: space-between;
    img {
      width: 1.7rem;
      height: 1.7rem;
    }
    .right {
      width: 4rem;
      height: 100%;
      padding-top: 0.4rem;
      p {
        width: 100%;
        height: 0.55rem;
        font-size: 0.32rem;
        color: #000;
      }
      ul {
        width: 100%;
        li {
          margin-right: 0.1rem;
          font-size: 0.22rem;
          color: #212121;
          float: left;
        }
        & li:nth-child(2) {
          margin-top: 0.05rem;
        }
      }
    }
  }
  .edition {
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    header {
      width: 100%;
      height: 0.45rem;
      font-size: 0.2rem;
      color: #212121;
    }
    ul {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.15rem;
      border: 0.02rem solid #99999e;
      padding: 0 0.25rem;
      box-sizing: border-box;
      li {
        line-height: 0.6rem;
        font-size: 0.2rem;
      }
    }
  }
  .color {
    width: 100%;
    margin-bottom: 0.6rem;
    header {
      width: 100%;
      height: 0.45rem;
      font-size: 0.2rem;
      color: #212121;
    }
    ul {
      width: 100%;
      height: 0.6rem;
      padding-left: 0.3rem;
      box-sizing: border-box;
      li {
        width: 1.1rem;
        height: 100%;
        text-align: center;
        line-height: 0.6rem;
        border: 0.02rem solid #99999e;
        margin-right: 0.2rem;
        font-size: 0.3rem;
        color: #99999e;
        float: left;
      }
    }
  }
  .num {
    width: 100%;
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    p {
      line-height: 0.7rem;
      font-size: 0.22rem;
      color: #000;
    }
    .van-stepper {
      line-height: 0.7rem;
    }
  }
}
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
  .van-icon {
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
.info {
  width: 90%;
  height: 1.7rem;
  margin: auto;
  background: #fafafa;
  .top {
    width: 100%;
    height: 50%;
    border-bottom: 0.02rem solid #cccccc;
    padding: 0 0.25rem;
    box-sizing: border-box;
    p {
      width: 0.75rem;
      height: 100%;
      line-height: 0.85rem;
      color: #737373;
      font-size: 0.22rem;
      float: left;
    }
    ul {
      height: 100%;
      line-height: 0.85rem;
      color: #000;
      font-size: 0.22rem;
      float: left;
      li {
        float: left;
        margin-left: 0.05rem;
      }
    }
    .van-icon {
      float: right;
      line-height: 0.85rem;
    }
  }
  .bottom {
    width: 100%;
    height: 50%;
    padding: 0 0.25rem;
    box-sizing: border-box;
    p {
      width: 0.75rem;
      height: 100%;
      line-height: 0.85rem;
      color: #737373;
      font-size: 0.22rem;
      float: left;
    }
    ul {
      height: 100%;
      line-height: 0.85rem;
      color: #000;
      font-size: 0.22rem;
      float: left;
    }
    .van-icon {
      float: right;
      line-height: 0.85rem;
    }
  }
}
.detail {
  width: 100%;
  margin-top: 0.8rem;
  img {
    width: 100%;
  }
}
</style>