import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
  },
  state: {
    products: [
      {
        id: 1,
        ProductImg: require("../assets/ProductImages/product-1.8444bac.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product12_266ac76d3c.jpg"),
        ProductName: "The Night Before",
        ProductPrice: "$"+299+","+0
      },
      {
        id: 2,
        ProductImg: require("../assets/ProductImages/product-3.70e441f.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product14_f16429b1b2.jpg"),
        ProductName: "Ask Again Yes",
        ProductPrice: "$"+259+","+0
      },
      {
        id: 3,
        ProductImg: require("../assets/ProductImages/product-2.63f5952.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product16_debc59ec70.jpg"),
        ProductName: "Call an Audible",
        ProductPrice: "$"+299+","+0
      },
      {
        id: 4,
        ProductImg: require("../assets/ProductImages/shop25_product5_fe43c2fbdc.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product18_bb0df43931.jpg"),
        ProductName: "Grey",
        ProductPrice: "$"+55+","+0
      },
      {
        id: 5,
        ProductImg: require("../assets/ProductImages/shop25_product2_80f1c2d5c2.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product15_20770fbd87.jpg"),
        ProductName: "I’ll Never Tell",
        ProductPrice: "$"+129+","+0
      },
      {
        id: 6,
        ProductImg: require("../assets/ProductImages/shop25_product3_4adb13a071.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product7_3dcd3f0022.jpg"),
        ProductName: "On Earth We’re Briefly",
        ProductPrice: "$"+129+","+0
      },
      {
        id: 7,
        ProductImg: require("../assets/ProductImages/shop25_product4_e3c277a34f.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product16_debc59ec70.jpg"),
        ProductName: "Queen Bee",
        ProductPrice: "$"+49+","+0
      },
      {
        id: 8,
        ProductImg: require("../assets/ProductImages/shop25_product11_3a093b0a01.jpg"),
        ProductImgHover: require("../assets/ProductImages/imgHover/shop25_product9_f4e83b3c9e.jpg"),
        ProductName: "Sorcery of Thrones",
        ProductPrice: "$"+599+","+0
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  }
})
