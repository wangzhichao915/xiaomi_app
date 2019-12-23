<template>
  <div class="newAddress">
    <van-nav-bar :title="$route.query.seen==1?'新增地址':'编辑地址'" left-arrow @click-left="onClickLeft" />
    <section>
      <van-address-edit
        :area-list="areaList"
        show-set-default
        :address-info="editObj"
        :show-delete="$route.query.seen==1?false:true"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
      />
    </section>
  </div>
</template>

<script>
import areaList from "../../assets/js/area.js";
export default {
  data() {
    return {
      areaList: areaList,
      flag: true,
      newarr: JSON.parse(localStorage.getItem("NewAddress")) || [],
      editObj: {}
    };
  },
  mounted() {
    this.$route.query.seen == 1
      ? {}
      : (this.editObj = JSON.parse(localStorage.getItem("NewAddress"))[
          this.$route.query.index
        ]);
  },
  methods: {
    onClickLeft() {
      history.back();
    },
    onSave(obj) {
      if (obj.isDefault) this.newarr.forEach(item => item.isDefault == false);
      if (this.$route.query.flag) {
        this.newarr.push(obj);
        localStorage.setItem("NewAddress", JSON.stringify(this.newarr));
        this.$router.push("/address");
      } else {
        this.newarr.splice(this.$route.query.index, 1, obj);
        localStorage.setItem("NewAddress", JSON.stringify(this.newarr));
        this.$router.push("/address");
      }
    },
    onDelete() {
      this.newarr.splice(this.$route.query.index, 1);
      if (this.newarr.length != 0) {
        //保证必须有一条默认地址
        if (this.newarr.every(item => item.isDefault == false)) {
          this.newarr[0].isDefault = true;
        }
      }
      localStorage.setItem("NewAddress", JSON.stringify(this.newarr));
      this.$router.push("/address");
    }
  }
};
</script>

<style lang="less" scoped>
* {
  font-size: 0.26rem !important;
}
.newAddress {
  width: 100%;
  height: 100vh;
  background: #fff;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

.van-address-edit > div:nth-child(3) {
  display: none !important;
}
.van-cell:nth-child(3) {
  display: none !important;
}
.van-field:nth-child(3) {
  display: none !important;
}
</style>
