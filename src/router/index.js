import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LoginRegister from '../views/LoginRegister.vue'
import MyPage from '../views/MyPage.vue'
import Details from '../views/Details.vue'
import NewUser from '../views/NewUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/loginregister',
    name: 'LoginRegister',
    component: LoginRegister
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/newuser',
    name: 'NewUser',
    component: NewUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
