import Vue from 'vue'
import Vuex from 'vuex'
import {auth, user, layout} from './modules'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    user,
    layout
  },
  strict: true,
  plugins: [createPersistedState({
      key: 'EntaMemory',
      paths: ['auth', 'user'],
      storage: window.sessionStorage
  })]
});
