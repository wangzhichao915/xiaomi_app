<template>
    <div class = "newAddress">
        <header><van-icon name="arrow-left" @click = "back"/><span>收货地址</span><van-icon name="search" /></header>
        <section>
            <van-address-edit
            :area-list="areaList"
            show-set-default
            show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            @change-default = "init"
            />
        </section>
    </div>
</template>

<script>
import areaList from "../../assets/js/area.js";
export default {
     data() {
        return {
        areaList,
        searchResult: [],
        id:'1',
        newarr:JSON.parse(localStorage.getItem("address"))
        }
    },
    mounted(){
    },
    methods: {
        back(){
            history.back()
        },
        onSave(content) {           
            this.newarr.push(
                    {
                        id:(this.newarr.length+1)+'',
                        name:content.name,
                        tel:content.tel,
                        address:`${content.province}、${content.city}、${content.county}:${content.addressDetail}`
                    }
                )
            localStorage.setItem("NewAddress",JSON.stringify(this.newarr))

            this.$router.push({
                path:"/address",
                query:{
                    // addressArr:this.newarr,
                    id:this.id
                }
            })   

        },
        init(val){
            console.log(val)
            if(val == true){
                this.id = (this.newarr.length+1)+''
            }else{
                this.id = '1'
            }
        },
        onDelete() {
        Toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [{
                name: '黄龙万科中心',
                address: '杭州市西湖区'
                }];
            } else {
                this.searchResult = [];
            }
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        font-size: .26rem!important;
    }
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
