import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/NavBar.vue')
  },
  {
    path: '/HomeComponent',
    name: 'HomeComponent',
    component: () => import('../components/HomeComponent.vue')
  },
  {
    path: '/Browse',
    name: 'Browse',
    component: () => import('../components/BrowseComponent.vue')
  },
  {
    path: '/ContentCreator',
    name: 'ContentCreator',
    component: () => import('../components/ContentCreatorsComponent.vue')
  },
  {
    path: '/Accountability',
    name: 'Accountability',
    component: () => import('../components/AccountabilityPartnersComponent.vue')
  },
  {
    path: '/WishList',
    name: 'WishList',
    component: () => import('../components/WishListComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
