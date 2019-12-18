<template>
    <div class="classify">
        <van-nav-bar
            title="分类"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    <div class="better_scroll">
        <div class="boxqu">
        <div class="leftwrap" ref="navwrap">
            <ul class="content">
            <li
                ref="li1"
                v-for="(item,index) in listArr"
                :class="{'current':currentIndex===index}"
                @click="select(index,$event)" :key="index"
            >{{item}}</li>
            </ul>
        </div>
        <div class="wrapper" ref="wrapper">
            <ul class="content">
            <li ref="li2" v-for="item in listArr" :key="item.id">
                <img src="../../assets/img/2.png" alt="">
                <p>{{item}}</p>
                <div class="phoneList">
                    <div v-for="item in phoneData" :key="item.id" class="box">
                        <img :src="item.img" alt="">
                        <p>{{item.name}}</p>
                    </div>
                </div>
            </li>
            </ul>
        </div>
    </div>
    </div>
    </div>
</template>
 
<script>
import Top from '../../components/Top'
import BScroll from "better-scroll"
 
export default {
//   name: "better_scroll",
  components:{
     Top
  },
  data(){
    return {
      listArr:['手机','电视','电脑','家电','路由','出行','出行','智能','灯具','家电'],
      currentIndex: 0, //当前显示的下标
      listHeight: [],
      scrollY: 0,
      menuIndexChange: true,
      phoneData:[]
    };
  },
  //接收父组件传过来的值
  props: {},
  components: {},
  created() {
    this.$nextTick(() => {
      // 3 在这个函数中调用以防内容还未加载完就执行，获取不到元素的高度导致无法滑动
      this._initScroll();
      this.height();
    });
  },
  mounted() {
      this.$axios.get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1").then(res=>{
          this.phoneData=res.data
      })
  },
  methods: {
      onClickLeft(){
          history.back()
      },
    //新建滚动实例  并监听右侧滚动的高度
    _initScroll() {
      //注意此处是 this.$refs.xxx
      this.navwrapScroll = new BScroll(this.$refs.navwrap, {
        click: true
      });
 
      this.wrapperScroll = new BScroll(this.$refs.wrapper, {
        click: true, //better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
        probeType: 3 //这个属性设置之后可以监听得到了
      });
 
      //监听滚动事件
      this.wrapperScroll.on("scroll", pos => {
        // 当允许滚动并滚动的y轴小于0
        if (this.menuIndexChange && pos.y <= 0) { 
          this.scrollY = Math.abs(Math.round(pos.y));  //滚动距离
        //   console.log(this.scrollY);
 
          // 循环每一个模块距离顶部的高度
          for (let i = 0; i < this.listHeight.length; i++) {
            let height1 = this.listHeight[i];
            let height2 = this.listHeight[i + 1];
            if (
              !height2 ||
              (this.scrollY >= height1 && this.scrollY < height2)
            ) {
            //   console.log(i);
              this._followScroll(i); //左侧动画移动
              this.currentIndex = i;
              return;
            }
          }
        }
      });
    },
 
    //获取右侧每个模块的高度
    height() {
      let wrap2 = this.$refs.li2;
    //   console.log(this.$refs.li2);
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < wrap2.length; i++) {
        let item = wrap2[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
      console.log(this.listHeight);
    },
 
 
    //  点击左侧滚动
    select(index, event) {
      // PC页面时,点击不会被 better-scroll阻止事件,初始化,给 better-scroll派发事件,使移动端拥有点击事件,因此切换到PC端时,点击事件会被执行两次,
      if (!event._constructed) {
        return;
      }
 
      this.currentIndex = index;  //改变点击的当前样式
      this.menuIndexChange = false;  //禁用右侧滚动  防止左右两侧都改变index  解决运动时listenScroll依然监听的bug
 
      //左侧网上偏移100
      this._followScroll(index); //左侧动画移动
 
      //右侧滚到响应位置
      let wrap2 = this.$refs.li2;
      let el = wrap2[index];
      this.wrapperScroll.scrollToElement(el, 300);
 
      //右侧滚动结束后在允许动画
      this.wrapperScroll.on("scrollEnd", () => {
        this.menuIndexChange = true;
      });
    },
 
    //左侧网上偏移
    _followScroll(index) {
      let wrap1 = this.$refs.li1;
      let el = wrap1[index];
      this.navwrapScroll.scrollToElement(el, 300, 0, -100); //往上偏移100
    },
 
  },
 
  computed: {
  }
};
</script>
 
 
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.boxqu {
  display: flex;
  flex-wrap: nowrap;
}
.leftwrap {
  width: 100px;
  height: 84vh;
  overflow: hidden;
  border: 1px solid #ccc;
}
 
.leftwrap .content {
  display: block;
  width: 100%;
  height: 100%;
}
 
.leftwrap .content li {
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #ccc;
  text-align: center;
  box-sizing: border-box;
  line-height: 8.4vh;
}
 
.leftwrap .content li.current {
  color: red;
  border-right: 3px solid red;
}
 
.wrapper {
  width: 100%;
  height: 84vh;
  background: pink;
  overflow: hidden;
}
 
.wrapper .content {
  display: block;
  width: 100%;
  margin: 0 auto;
  /* background: rgba(255, 255, 255, 0.6); */
}
 
.wrapper .content li {
  width: 100%;
  height: 6.8rem;
  background: #fff;
  border-bottom: 1px solid red;
  text-align: center;
  /* line-height: 200px; */
  overflow: hidden;
}
.content>li>img{
    width: 4.4rem;
    height: 1.38rem;
    display: block;
    margin: auto;
    margin-top: 0.3rem;
}
.content>li>p{
    line-height: normal;
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;
    font-size: 0.3rem;
    color: #000;
}

.wrapper .content>ul>li:last-of-type {
  height: 600px;
}
 
.content li {
  display: block;
}

.phoneList{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.phoneList>.box{
    width: 28%;
    height: 2rem;
}
.phoneList>.box>img{
    width: 100%;
    height: 1.5rem;
    line-height: normal;
}
.phoneList>.box>p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.header{
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #000;
}
.van-nav-bar__title{
    max-width:none;
    border-bottom: 1px solid #ccc;
}

</style>