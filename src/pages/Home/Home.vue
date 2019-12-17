<template>
    <div>
        <header>
            <div class="left"></div>
            <input type="text">
            <van-icon name="search" slot="right" />
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    header{
        width: 100%;
        height: 1.1rem;
        padding: 0.2rem 0.35rem;
        box-sizing: border-box;
        position: relative; 
        background: #F2F2F2;      
        .left{
            width: 0.7rem;
            height: 0.7rem;
            border-radius: 50%;
            background: #87CEEB;
            float: left;
        }
        input{
            width: 3.85rem;
            height: 0.5rem;
            line-height: 1.1rem;
            border-radius: 0.5rem;
            border:none;
            outline: none;
            border:0.02rem solid #E5E5E5;
            float: right;
        }
        .van-icon{
            width: 0.27rem;
            height: 0.27rem;
            position: absolute;
            left: 2.45rem;
            top: 0.4rem;
        }
    }
</style>