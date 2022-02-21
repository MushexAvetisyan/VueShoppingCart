<template>
  <div class="cart">
    <div class="cart-title">
      <h2>Shopping Cart</h2>
    </div>
    <div class="cart-content" v-for="cart in storeCarts" :key="cart.id">
      <div class="cart-content__info">
        <p class="name">{{ cart.Name }}</p>
        <p class="count">{{`${cart.Count} * ${cart.Price} `}}</p>
      </div>
      <div class="cart-content__image-wrapper">
        <img :src="cart.Img" alt="img">
        <span>x</span>
      </div>
    </div>
    <div class="cart-action">

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  computed: {
    storeCarts() {
      return this.$store.getters.getStoreCarts
    }
  }
}
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
      margin-bottom: 10px
    }
    .count {
      font-size: 16px;
      font-weight: 400;
      color: #555
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
    }
  }
}
</style>
