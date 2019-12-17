<template>
    <div>
        <van-nav-bar
            :title="text"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script>
export default {
    props:["text"],
     methods: {
        onClickLeft() {
        Toast('返回');
        }
    }
}
</script>
<style scoped>

</style>