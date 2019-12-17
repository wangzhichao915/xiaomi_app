<template>
    <div class = "mine">
        <header>
            <div class="me">
                <div></div>
                <p>154545487</p>
            </div>
            <div class="meOder">
                <b>我的订单</b>
                <p><span>全部订单</span><van-icon name="arrow" /></p>
            </div>
            <div class="meOperate">
                <p><img src="../../assets/imgx/1.png" alt=""><span>待付款</span></p>
                <p><img src="../../assets/imgx/2.png" alt=""><span>优惠券</span></p>
                <p><img src="../../assets/imgx/3.png" alt=""><span>收藏</span></p>
            </div>
        </header>
        <section>
            <ul>
                <li><van-icon name="like-o" color = "#FF6600"/><p class = "borderGray"><span>会员中心</span><van-icon name="arrow" /></p></li>
                <li class = "borderBom"><van-icon name="location-o" color = "#FF6600"/><p @click = "btn"><span>收货地址</span><van-icon name="arrow" /></p></li>
                <li><van-icon name="coupon-o" color = "#FF6600"/><p class = "borderGray"><span>我的优惠</span><van-icon name="arrow" /></p></li>
                <li class = "borderBom"><van-icon name="other-pay" color = "#FF6600"/><p><span>我的意见</span><van-icon name="arrow" /></p></li>
                <li class = "borderBom"><van-icon name="underway-o" color = "#FF6600"/><p><span>浏览记录</span><van-icon name="arrow" /></p></li>
                <li><van-icon name="qr" color = "#FF6600"/><p><span>我的名片</span><van-icon name="arrow" /></p></li>
            </ul>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    btn(){
        this.$router.push("/address")
    }
  }
}
</script>
<style lang="less" scoped>
    .mine{
        height: 91.2vh;
        background: #F5F5F5;
    }
    header{
        width: 100%;
    }
    .me{
        width: 100%;
        height: 1.37rem;
        background: #F37D0F;
        display: flex;
        align-items: center;
        div{
            width: .9rem;
            height: .9rem;
            border-radius: 50%;
            box-sizing: border-box;
            border: 0.07rem solid #F8B16F;
            margin-left: .25rem;;
        };
        p{
            color: #fff;
            font-size: .2rem;
            margin-left: .2rem;
        }
    }
    .meOder{
        width: 100%;
        height: .83rem;
        background: #fff;
        margin: auto;
        border:1px solid #D9D9D9;
        box-sizing: border-box;
        justify-content: space-between;
        display: flex;
        padding: 0 .23rem;
        align-items: center;
        b{
            font-size: .26rem;
            color: #000;
        };
        p{
            font-size: .22rem;
            color: #333;
            display: flex;
            align-items: center;
            .van-icon{
                font: .33rem/1 "vant-icon" !important;
            }
        }
    }
    .meOperate{
        width: 100%;
        height: 1.7rem;
        display: flex;
        align-items: center;
        background: #fff;
        p{
            width: 33.333%;
            height: .85rem;
            img{
                width: .35rem;
                height: .35rem;
                display: block;
                margin: 0 auto .1rem;
            };
            span{
                width: 100%;
                display: block;
                text-align: center;
                font-size: .2rem;
                color: #333;
            }
        }
    }
    section{
        margin-top: 0.2rem;
        width: 100%;
        background: #F5F5F5;
        li{
            width: 100%;
            display: flex;
            justify-content: space-between;
            background: #fff;
            padding-left: 0.34rem;
            align-items: center;
            box-sizing:border-box;
            .van-icon{
                font: .46rem/1 "vant-icon" !important;
            }
            p{
                width: 88%;
                height: .85rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-right: .25rem;
                box-sizing: border-box;
                span{
                    font-size: .3rem;
                    color: #000;
                }
            }
        }
    }
    .borderGray{
        border-bottom:0.02rem solid #D9D9D9;
    }
    .borderBom{
        margin-bottom: .23rem;
    }
</style>