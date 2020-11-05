import firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    active:false,
    name:'',
    image:'',
    uid:'',
    introduction:'',
    tags:'',
  },
  getters: {
    // ログイン状態
    active (state) {
      return state.active
    },
    userData (state) {
      const userData = {
        name:state.name,
        image:state.image,
        uid:state.uid,
        introduction:state.introduction,
        tags:state.tags
      }
      return userData
    }
  },
  mutations: {
    // ログイン状態更新
    changeActive (state) {
      state.active = !state.active
    },
    // UIDとユーザーネーム追加
    setUidAndName (state, userData) {
      state.uid = userData.uid
      state.name = userData.name
    },
    // ユーザー情報すべて追加
    setUserData (state, userData) {
      state.uid = userData.uid
      state.name = userData.name
      state.image = userData.image
      state.introduction = userData.introduction
      state.tags = userData.tags
    },
    // ログアウト処理
    logout (state) {
      state.active = !state.active
      state.uid = ''
      state.name = ''
      state.image = ''
      state.introduction = ''
      state.tags = []
    },
  },
  actions: {
    // 新規ユーザー登録＆ログイン処理
    async register (context, data) {
      const result = await firebase.auth().createUserWithEmailAndPassword(data.registerEmail, data.registerPass)
      const userData = {
        name:data.name,
        uid:result.user.uid,
      }
      await firebase.firestore().collection('users').doc(result.user.uid).set(userData)
      context.commit('changeActive')
      context.commit('setUidAndName', userData)
    },
    // ログイン処理
    async login (context, data) {
      const resolve = await firebase.auth().signInWithEmailAndPassword(data.loginEmail, data.loginPass)
      const uid  = resolve.user.uid
      const db = firebase.firestore().collection('users')
      const userData = await db.doc(uid).get()
      context.commit('changeActive')
      context.commit('setUserData', userData.data())
    },
    // ユーザーデータ追加処理
    async dataRegister (context, data) {
      await firebase.storage().ref(`users//${context.state.uid}.jpg`).put(data.image)
      const fireStorage = firebase.storage().ref().child(`users//${context.state.uid}.jpg`)
      const url = await fireStorage.getDownloadURL()
      const userData = {
        uid:context.state.uid,
        name:context.state.name,
        tags:data.tags,
        introduction:data.introduction,
        image:url,
      }
      await firebase.firestore().collection('users').doc(context.state.uid).set(userData)
      context.commit('setUserData', userData)
    },
  },
};