import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHobgN-69HISWWy1SpJ3_LLdwyDGBgRbo",
  authDomain: "entamemory-eff0f.firebaseapp.com",
  databaseURL: "https://entamemory-eff0f.firebaseio.com",
  projectId: "entamemory-eff0f",
  storageBucket: "entamemory-eff0f.appspot.com",
  messagingSenderId: "639493219033",
  appId: "1:639493219033:web:40808082765c7c7f8a94c8"
}
firebase.initializeApp(config)

/* eslint-disable no-new */

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
