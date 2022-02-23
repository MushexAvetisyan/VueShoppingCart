<template>
  <div class="ProductList">
    <div class="gird">
      <div class="Products" v-for="(product, index) in products" :key="index">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <div class="image-wrapper">
            <img :src="product.Img" alt="" class="image" />
            <img :src="product.ImgHover" alt="" class="image-hover" />
          </div>
          <p>{{ product.Name }}</p>
        </router-link>
        <h2>${{ product.Price }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped lang="scss">
.gird {
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-rows: 0.5fr 0.5fr;
  gap: 0 0;
}
.Products {
  width: 250px;
  height: 320px;
  border-right: 2px solid #f3f3f3;
  border-bottom: 2px solid #f3f3f3;
  padding-top: 20px;
  img {
    width: 150px;
    height: 230px;
    cursor: pointer;
  }
  a {
    text-decoration-line: none;
    color: black;
    &:hover {
      color: #03a9f8;
      transition: 0.5s;
    }
    p {
      font-weight: 500;
      font-size: 14px;
    }
  }
  h2 {
    font-size: 15px;
    color: black;
    font-weight: 500;
  }
}
.image-wrapper {
  position: relative;
}
.image-hover {
  position: absolute;
  top: 0;
  left: 50px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}
.image-hover:hover {
  opacity: 1;
}
</style>
