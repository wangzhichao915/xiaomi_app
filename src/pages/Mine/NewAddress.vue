<template>
    <div class = "newAddress">
        <header><van-icon name="arrow-left" @click = "back"/><span>收货地址</span><van-icon name="search" /></header>
        <section>
            <van-address-edit         
                show-set-default       
                @save="onSave"              
            />
        </section>
    </div>
</template>

<script>
export default {
     data() {
        return {
        searchResult: [],
        }
    },
    methods: {
        back(){
            history.back()
        },
        onSave(content) {
            console.log(content)
        },
    }
}
</script>

<style lang="less" scoped>
    .newAddress{
        width: 100%;
        height: 80vh;
        background: #fff;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }
    header{
        background: #F2F2F2;
        height: .86rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.3rem;
        box-sizing: border-box;
        .van-icon{
            font: .33rem/1 "vant-icon" !important;
        };
        span{
            font-size: .3rem !important;
            color: #666;
        }
    }
    .van-address-edit>div:nth-child(3){
        display: none !important;
    }
    .van-cell:nth-child(3){
        display: none !important;
    }
    .van-field:nth-child(3){
        display: none !important;
    }
</style>
