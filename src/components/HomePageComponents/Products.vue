<template>
  <div class="ProductComponent">
    <router-link to="/">Back</router-link>
    <!--    {{$route.params.id}}-->
    <div class="Product">
      <div class="main" v-if="product">
        <div class="img">
          <img :src="product.ImgBig" alt="img" />
          <div class="info">
            <h1>{{ product.Name }}</h1>
            <hr width="50px" />
            <h2>${{ product.Price }}</h2>
            <span>
              <p>
                {{ product.Description }}
              </p>
            </span>
            <p class="Sku">
              SKU: <span>{{ product.SKU }}</span>
            </p>
            <p>
              CATEGORY: <router-link to="/">Arts & Photography</router-link>
            </p>
            <div class="AddToCart">
              <div class="ItemCount">
                <span @click="decrement" class="buttonIncrement">-</span>
                <span>{{ productCount }}</span>
                <span @click="increment" class="buttonDecrement">+</span>
              </div>
              <div class="AddingButton">
                <button @click="addToCart">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productCount: 1,
    };
  },
  computed: {
    product() {
      return this.$store.getters.product(parseInt(this.$route.params.id));
    },
  },
  methods: {
    increment() {
      this.productCount++;
    },
    decrement() {
      if (this.productCount <= 1) {
        this.setState({
          productCount: 1,
        });
      } else {
        this.productCount--;
      }
    },
    addToCart() {
      const cart = {
        id: this.product.id,
        Name: this.product.Name,
        Img: this.product.Img,
        Price: this.product.Price,
        Count: this.productCount,
      };
      this.$store.commit("SET_STORE_CART", cart);
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  cursor: pointer;
}
.main {
  background-color: white;
  margin-top: 30px;
  .img {
    display: flex;
    width: 80%;
    margin: 0 auto;
    text-align: left;
    padding: 30px;
    img {
      width: 400px;
      height: 480px;
    }
  }
  .info {
    h1,
    h2,
    span,
    p {
      margin-left: 20px;
    }
    h1 {
      color: #222529;
    }
    a {
      color: black;
      text-decoration-line: none;
      &:hover {
        text-decoration-line: underline;
      }
    }
    h2 {
      color: black;
      font-size: 20px;
      font-weight: 500;
    }
    p {
      width: 600px;
      color: #7b7977;
      font-weight: 500;
    }
    .Sku {
      margin: 15px 0 10px auto;
      span {
        color: black;
        margin-left: 0;
        font-size: 14px;
      }
    }
    hr {
      color: #e7e7e7;
      margin: 10px 0 10px 20px;
    }
  }
  .AddToCart {
    border-top: 1px solid #e7e7e7;
    margin-left: 20px;
    display: flex;
    padding: 20px 0;
    button {
      padding: 10px 30px;
      font-size: 15px;
      outline: none;
      border: none;
      background-color: #222529;
      cursor: pointer;
      color: white;
      &:hover {
        background-color: rgba(34, 37, 41, 0.9);
        transition: 0.5s;
      }
    }
    .AddingButton {
    }
    .ItemCount {
      margin-left: 0;
      padding: 8px 0 8px 0;
      border: 1px solid silver;
      .buttonIncrement {
        border-right: 1px solid silver;
        padding: 10px;
        margin: 0 0 0 0;
        cursor: pointer;
      }
      .buttonDecrement {
        border-left: 1px solid silver;
        padding: 10px;
        margin: 0 0 0 15px;
        cursor: pointer;
      }
    }
  }
}
</style>
