<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll"  class="check-bottom" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="price">合计: {{ totalPrice }}</div>

    <div class="calculate">结算:({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"
export default {
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    }
  },
  computed: {
      ...mapGetters(['cartList']),
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0).toFixed(2)
      );
    },
    checkLength() {
        return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.cartList.length === 0) return false
      return !(this.cartList.filter(item => !item.checked).length)
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  position: relative;
  background-color: #eee;
  line-height: 40px;
}
.check-content {
  display: flex;
  width: 70px;
  align-items: center;
}
.check-bottom {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 5px;
}
.price {
    flex: 1;
    margin-left: 20px;
}
.calculate {
    width: 70px;
    background-color: red;
    color: #fff;
    text-align: center;
}
</style>
