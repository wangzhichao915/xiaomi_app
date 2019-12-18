<template>
    <div class = "address">
        <header><van-icon name="arrow-left" @click = "back"/><span>收货地址</span><van-icon name="search" /></header>
        <section>
            <van-address-list
                v-model="chosenAddressId"
                :list="list"
                :disabled-list="disabledList"
                disabled-text="以下地址超出配送范围"
                @add="onAdd"
            />
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chosenAddressId: this.$route.query.id||'1',
            list: [
                {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            disabledList: [
                {
                id: '3',
                name: '王五',
                tel: '1320000000',
                address: '浙江省杭州市滨江区江南大道 15 号'
                }
            ],
            newList:this.$route.query.addressArr
        }
    },

    methods: {
        back(){
            this.$router.push("/mine")
        },
        onAdd() {
            this.$router.push({
                path:"/newAddress",
                query:{
                    newarr:this.list
                }
            })
        },
    },
    mounted(){
        console.log(this.chosenAddressId)
        if(this.newList == undefined){
            return
        }
        // this.chosenAddressId = 1
        this.list = this.newList
    }
}
</script>

<style lang="less" scoped>
    *{
        font-size: .22rem !important;
        line-height: normal;
    }
    .address{
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
    .van-icon{
        font-size: .3rem !important;
    }
</style>