import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: () =>
      import("../components/HomePageComponents/HomeComponent.vue"),
  },
  {
    path: "/Browse",
    name: "Browse",
    component: () => import("../components/BrowseComponent.vue"),
  },
  {
    path: "/ContentCreator",
    name: "ContentCreator",
    component: () => import("../components/ContentCreatorsComponent.vue"),
  },
  {
    path: "/Accountability",
    name: "Accountability",
    component: () =>
      import("../components/AccountabilityPartnersComponent.vue"),
  },
  {
    path: "/WishList",
    name: "WishList",
    component: () => import("../components/WishListComponent.vue"),
  },
  {
    path: "/ExploreBooks",
    name: "ExploreBooks",
    component: () =>
      import("../components/HomePageComponents/ExploreBooks.vue"),
  },
  {
    path: "/Registration",
    name: "Registration",
    component: () =>
      import("../components/RegistrationPageComponents/Registration.vue"),
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: () =>
      import("../components/RegistrationPageComponents/ResetPassword.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/LoginPageComponent/Login.vue"),
  },
  {
    path: "/MyProfile",
    name: "MyProfile",
    component: () => import("../components/LoginPageComponent/MyProfile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
