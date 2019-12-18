<template>
    <div class="top">
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
            // history.back()
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>

</style>