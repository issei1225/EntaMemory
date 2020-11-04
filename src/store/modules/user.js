export default {
  namespaced: true,

  state: {
    width:innerWidth,
    modal:false,
  },

  getters: {
    // ウィンドウ幅
    width (state) {
      if (state.width <= 640) {
        return false
      } else {
        return true
      }
    },
    // モーダルウィンドウ状態
    modal (state) {
      return state.modal
    },
  },
  mutations: {
    // ウィンドウ幅監視
    changeWidth (state, width) {
      state.width = width
    },
    // モーダルウィンドウ表示切り替え
    changeModal (state) {
      state.modal = !state.modal
    }
  },
  actions: {

  },
};