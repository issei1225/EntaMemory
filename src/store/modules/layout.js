export default {
  namespaced: true,

  state: {
    width:innerWidth,
    modal:false,
    path:'',
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
    // 現在のパス
    path (state) {
      return state.path
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
    },
    // 現在のパスを取得
    changePath (state, path) {
      state.path = path
    },
  },
  actions: {

  },
};