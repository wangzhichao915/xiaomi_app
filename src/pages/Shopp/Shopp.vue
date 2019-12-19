<template>
  <div>
    <top text="购物车"></top>
    <div class="title">
      <h2>
        登录后享受更多优惠
        <span>去登录 ></span>
      </h2>
    </div>
    <div class="content" v-show="!flag">
      <h2>
        <b>购物车还是空的</b>
        <span>去逛逛</span>
      </h2>
    </div>
    <van-card
      v-show="flag"
      :desc="item.price"
      :title="item.name"
      :thumb="item.img"
      v-for="(item,index) in shoppArr"
      :key="index"
    >
      <div slot="tags" class="slot">
        <van-stepper v-model="item.num" />
        <van-icon name="delete" @click="del(index)" />
      </div>
    </van-card>
    <div class="guessLike">
      <img src="../../assets/img/1.png" alt class="img1" />
      <h2>
        <span>实时推荐你的心心念念</span>
      </h2>
      <ul>
        <li v-for="(item,index) in listArr" :key="index" @click="goDetail(item)">
          <img :src="item.img" alt />
          <p>{{item.name}}</p>
          <p>{{item.content}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="flag">
      <p>
        共{{count}}件 金额:
        <br />
        <b>{{money}}</b>元
      </p>
      <div class="commit">
        <div class="button1">继续购物</div>
        <div class="button2">去结算</div>
      </div>
    </footer>
  </div>
</template>
<script>
import Top from "../../components/Top";
export default {
  data() {
    return {
      listArr: [],
      shoppArr:JSON.parse(localStorage.getItem("key")) || [],
      flag: false,
    };
  },
  mounted() {
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
      .then(res => {
        this.listArr = res.data;
      });
    // this.shoppArr = JSON.parse(localStorage.getItem("key"));
    if (this.shoppArr.length != 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  components: {
    Top
  },
  computed: {
    money() {
      return this.shoppArr.reduce((pre, next) => {
        return pre + next.price * next.num;
      }, 0);
    },
    count() {
      return this.shoppArr.reduce((pre, next) => {
        localStorage.setItem("info",pre + next.num)
        return pre + next.num;
      }, 0);
    },
  },
  methods: {
    del(i) {
      this.shoppArr.splice(i, 1);
      if (this.shoppArr.length == 0) {
      this.flag = false;
      localStorage.removeItem('info')
    } 
      localStorage.setItem("key", JSON.stringify(this.shoppArr));
    },
    goDetail(item) {
      this.$router.push("/detail");
      localStorage.setItem("obj", JSON.stringify(item));
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  width: 100%;
  height: 1.1rem;
  background: #fff;
  h2 {
    margin-left: 0.3rem;
    color: #000;
    font-size: 0.28rem;
    font-weight: normal;
    line-height: 1.1rem;
    span {
      float: right;
      margin-right: 0.3rem;
      font-size: 0.22rem;
      color: #999;
    }
  }
}
.content {
  width: 100%;
  height: 1.2rem;
  background: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 0.26rem;
    color: #999;
    text-align: center;
    font-weight: normal;
    span {
      width: 1.24rem;
      height: 0.4rem;
      display: inline-block;
      border: 1px solid #999;
      margin-left: 0.1rem;
      color: #000;
    }
    b {
      font-weight: normal;
      display: inline-block;
    }
  }
}
.guessLike {
  width: 100%;
  .img1 {
    width: 2.1rem;
    height: 0.3rem;
    display: block;
    margin: auto;
    margin-top: 0.5rem;
  }
  h2 {
    width: 92%;
    height: 0.01rem;
    background: #ccc;
    margin: auto;
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
    position: relative;
    span {
      width: 2.4rem;
      height: 0.3rem;
      background: #fff;
      position: absolute;
      text-align: center;
      font-size: 0.22rem;
      color: #888;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      box-sizing: border-box;
      padding-bottom: 0.15rem;
      img {
        width: 100%;
        height: 3.2rem;
      }
      p {
        margin-left: 0.2rem;
      }
      & p:first-of-type {
        font-size: 0.28rem;
        margin-top: 0.24rem;
        color: #000;
      }
      & p:nth-of-type(2) {
        font-size: 0.2rem;
        margin-top: 0.05rem;
        color: #999;
      }
      & p:last-of-type {
        font-size: 0.26rem;
        margin-top: 0.05rem;
        font-weight: bold;
        opacity: 0.8;
        color: #ea625b;
      }
    }
  }
}
.footer {
  width: 100%;
  height: 1rem;
  background: #f7f7f7;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  p {
    width: 35%;
    margin-top: 0.1rem;
    font-size: 0.24rem;
    color: #999;
    line-height: 0.4rem;
    margin-left: 0.4rem;
    b {
      font-size: 0.32rem;
      color: #ff5722;
      margin-right: 0.1rem;
    }
  }
  .commit {
    width: 65%;
    box-sizing: border-box;
    display: flex;
    font-size: 0.26rem;
    line-height: 1rem;
    text-align: center;
    .button1 {
      width: 50%;
      color: #333;
      background: #f5f5f5;
    }
    .button2 {
      width: 50%;
      background: #ff5722;
      color: #fff;
    }
  }
}
.van-tag {
  font-size: 18px;
}
.van-card__desc {
  margin-top: 0.1rem;
}
.slot {
  margin-top: 0.1rem;
  position: relative;
}
.van-icon {
  font-size: 24px;
  position: absolute;
  right: 0.2rem;
}
</style>