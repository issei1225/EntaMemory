import firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    postData:[],
    selectPost:'',
    downState:false,
    favoritePost:'',
  },

  getters: {
    postData (state) {
      return state.postData
    },
    selectPost (state) {
      return state.selectPost
    },
    downState (state) {
      return state.downState
    },
  },
  mutations: {
    setPostData (state, data) {
      state.postData = data
    },
    selectPostData (state, data) {
      state.selectPost = data
    },
    changeDownState (state, data) {
      state.downState = data
    },
    // コメントを投稿
    pushComment (state, commentData) {
      const comments = []
      if (state.selectPost.comments.length != 0) {
        comments.push(...state.selectPost.comments)
      }
      comments.push(commentData)
      state.selectPost.comments = comments
    },
    // お気に入り登録
    changeFavorite (state, favoriteData) {
      const favorite = []
      state.postData.forEach(post => {
        if (post.postId === favoriteData.id) {
          state.favoritePost = post
        }
      });
      const resolve = state.favoritePost.favorite.indexOf(favoriteData.uid)
      if (resolve === -1) {
        if (state.favoritePost.favorite.length != 0) {
          favorite.push(...state.favoritePost.favorite)
        }
        favorite.push(favoriteData.uid)
        state.favoritePost.favorite = favorite
        console.log(state.favoritePost)
      } else {
        state.favoritePost.favorite.splice(resolve, 1)
      }
    },
  },
  actions: {
    // 感想データをfirebaseへ投稿
    async post (context, post) {
      const db = firebase.firestore()
      await firebase.storage().ref(`posts//${post.image.name}`).put(post.image)
      const fireStorage = firebase.storage().ref().child(`posts//${post.image.name}`)
      const url = await fireStorage.getDownloadURL()
      const resolve = await db.collection('posts').get()
      post.image = url
      // 投稿が０の場合
      if (resolve.size === 0) {
        post.postId = 0
        db.collection('posts').doc('post0').set(post)
      }else{
        // 投稿がある場合
        const idArray = []
        resolve.forEach((doc) => {
          idArray.push(doc.data().postId);
        })
        const maxId = Math.max(...idArray) + 1;
        post.postId = maxId
        db.collection('posts').doc(`post${maxId}`).set(post)
      }
    },
    //投稿データをダウンロードする
    async downloadPost ({commit}) {
      commit('changeDownState', false)
      const db = firebase.firestore()
      const resolve = await db.collection('posts').get()
      const postData = []
      resolve.forEach((post) => {
        postData.push(post.data())
      })
      function compare( a, b ) {
        if ( a.postId > b.postId ){
          return -1;
        }
        if ( a.postId < b.postId ){
          return 1;
        }
        return 0;
      }
      postData.sort( compare );
      commit('setPostData', postData)
      commit('changeDownState', true)
    },
    //投稿データを削除する
    async deletePost (context) {
      const db = firebase.firestore()
      await db.collection('posts').doc(`post${context.state.selectPost.postId}`).delete()
    },
    //コメントを投稿する
    async uploadComment (context) {
      const db = firebase.firestore()
      await db.collection('posts').doc(`post${context.state.selectPost.postId}`).set(context.state.selectPost)
    },
    //お気に入りをfirebaseへアップロードする
    async uploadFavorite (context) {
      const db = firebase.firestore()
      await db.collection('posts').doc(`post${context.state.favoritePost.postId}`).set(context.state.favoritePost)
    },
  },
};