<template>
  <div class="cart">
    <div class="cart-title">
      <h2>Shopping Cart</h2>
      <p v-show="!storeCarts.length">
        <i>Please Add Product</i>
      </p>
    </div>
    <div class="cart-content" v-for="cart in storeCarts" :key="cart.id">
      <div class="cart-content__info">
        <p class="name">{{ cart.Name }}</p>
        <p class="count">{{ cart.Count }} * ${{ cart.Price }}</p>
      </div>
      <div class="cart-content__image-wrapper">
        <img :src="cart.Img" alt="img" />
        <span @click.prevent="RemoveItem(cart)">x</span>
      </div>
    </div>
    <div class="cart-action">
      <span v-show="storeCarts.length">SUBTOTAL ${{ this.total }}</span>
      <p>
        <button
          v-show="storeCarts.length"
          class="button is-primary"
          @click="checkout"
        >
          Checkout
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    storeCarts() {
      return this.$store.getters.getStoreCarts;
    },

    ...mapGetters({
      products: "products",
    }),
    total() {
      return this.storeCarts.reduce((total, p) => {
        return total + p.Price * p.Count;
      }, 0);
    },
  },
  methods: {
    RemoveItem(cart) {
      this.$store.commit("RemoveItem", cart);
    },
    checkout() {
      alert("Pay us $" + this.total);
    },
  },
};
</script>

<style scoped lang="scss">
.cart-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  padding: 0 30px;
  &__info {
    text-align: left;
    .name {
      font-size: 20px;
      font-weight: 600;
      color: #222529;
      margin-bottom: 10px;
    }
    .count {
      font-size: 16px;
      font-weight: 400;
      color: #555;
    }
  }
  &__image-wrapper {
    position: relative;
    img {
      width: 100px;
      height: 100px;
    }
    span {
      position: absolute;
      top: -10px;
      right: -10px;
      border-radius: 50%;
      box-shadow: 0 2px 5px 0;
      z-index: 100;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>
