import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    products: [
      {
        id: 1,
        Img: require("../assets/ProductImages/product-1.8444bac.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product12_266ac76d3c.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "The Night Before",
        Price: "$" + 299 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 2,
        Img: require("../assets/ProductImages/product-3.70e441f.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product14_f16429b1b2.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "Ask Again Yes",
        Price: "$" + 259 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 3,
        Img: require("../assets/ProductImages/product-2.63f5952.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product16_debc59ec70.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "Call an Audible",
        Price: "$" + 299 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 4,
        Img: require("../assets/ProductImages/shop25_product5_fe43c2fbdc.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product18_bb0df43931.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "Grey",
        Price: "$" + 55 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 5,
        Img: require("../assets/ProductImages/shop25_product2_80f1c2d5c2.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product15_20770fbd87.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "I’ll Never Tell",
        Price: "$" + 129 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 6,
        Img: require("../assets/ProductImages/shop25_product3_4adb13a071.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product7_3dcd3f0022.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "On Earth We’re Briefly",
        Price: "$" + 129 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 7,
        Img: require("../assets/ProductImages/shop25_product4_e3c277a34f.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product16_debc59ec70.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "Queen Bee",
        Price: "$" + 49 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
      {
        id: 8,
        Img: require("../assets/ProductImages/shop25_product11_3a093b0a01.jpg"),
        ImgHover: require("../assets/ProductImages/imgHover/shop25_product9_f4e83b3c9e.jpg"),
        ImgBig: require("../assets/ProductImages/TheNightBig.jpg"),
        Name: "Sorcery of Thrones",
        Price: "$" + 599 + "," + 0,
        Description:
          "ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. " +
          "Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet " +
          "quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        SKU: "854613298",
      },
    ],
    storeCarts: [],
  },
  getters: {
    products: (state) => state.products,
    product: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    getStoreCarts: (store) => store.storeCarts,
  },
  mutations: {
    SET_STORE_CART: (store, storeCart) => {
      store.storeCarts.push(storeCart)
    }
  }
});
