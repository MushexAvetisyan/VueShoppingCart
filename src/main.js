import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas, faS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import firebase from "firebase/compat";

library.add(fas);
library.add(far);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCWrbCLm5JtxPdeTefua6E_8Cw3R-IRXSo",
  authDomain: "e-commerce-d3aca.firebaseapp.com",
  projectId: "e-commerce-d3aca",
  databaseURL: "https://e-commerce-d3aca-default-rtdb.firebaseio.com/",
  storageBucket: "e-commerce-d3aca.appspot.com",
  messagingSenderId: "812128500154",
  appId: "1:812128500154:web:d7b41b2c41edbb156b8583",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
