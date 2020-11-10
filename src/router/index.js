import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginRegister from '../views/LoginRegister.vue'
import MyPage from '../views/MyPage.vue'
import Details from '../views/Details.vue'
import NewUser from '../views/NewUser.vue'
import TagPage from '../views/TagPage.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loginregister',
    name: 'LoginRegister',
    component: LoginRegister,
    beforeEnter (to, from, next) {
      if (store.getters['auth/active']) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    beforeEnter (to, from, next) {
      if (store.getters['auth/active']) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/newuser',
    name: 'NewUser',
    component: NewUser,
    beforeEnter (to, from, next) {
      if (store.getters['auth/active']) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/tagpage',
    name: 'TagPage',
    component: TagPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }; // トップに移動
  }
})

export default router
