<template>
  <div class="address">
    <header>
      <van-icon name="arrow-left" @click="back" />
      <span>收货地址</span>
      <van-icon name="search" />
    </header>
    <section>
      <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "2",
      list: [],
      newList: JSON.parse(localStorage.getItem("NewAddress"))||[]
    };
  },

  methods: {
    back() {
      this.$router.push("/mine");
    },
    onAdd() {
      this.$router.push({
        path: "/newAddress",
        query: { flag: true, seen: 1 }
      });
    },
    onEdit(item, i) {
      this.$router.push({ path: "/newAddress", query: { index: i } });
    }
  },
  mounted() {
    this.newList.forEach((item,i)=>{
        this.list.push({
            flag:item.isDefault,
            id:String(i+1),
            name: item.name,
            tel: item.tel,
            address: item.province + item.city + item.county + item.addressDetail
        })
    })
    this.list.forEach(item=>{
        if(item.flag){
            this.chosenAddressId = item.id
        }
    })
  }
};
</script>

<style lang="less" scoped>
* {
  font-size: 0.22rem !important;
  line-height: normal;
}
.address {
  width: 100%;
  height: 100vh;
  background: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
header {
  background: #f2f2f2;
  height: 0.86rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  box-sizing: border-box;
  .van-icon {
    font: 0.33rem/1 "vant-icon" !important;
  }
  span {
    font-size: 0.3rem !important;
    color: #666;
  }
}
.van-icon {
  font-size: 0.3rem !important;
}
</style>