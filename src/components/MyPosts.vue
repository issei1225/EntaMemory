<template>
<div>
  <ul id="ul" v-show="myPost.length !== 0">
    <li @click.self="goDatails(post)" :id="index" class="box" v-for="(post, index) in myPost" :key="index">
      <div @click.self="goDatails(post)" class="img-container">
        <img @click.self="goDatails(post)" :src="post.image">
        <button @click="favorite(post.postId)" class="favorite"><font-awesome-icon :class="{'active':post.favorite.indexOf(userData.uid) != -1}" class="star" icon="star"/>お気に入り：{{post.favorite.length}}</button>
      </div>
      <div @click.self="goDatails(post)" class="contents">
        <div @click.self="goDatails(post)" class="contents-container">
          <div @click.self="goDatails(post)" class="user-container">
            <img @click.self="goDatails(post)" class="user-image" :src="post.userImage">
            <span @click.self="goDatails(post)">{{post.name}}</span>
          </div>
          <h1 @click.self="goDatails(post)">{{post.postTitle}}</h1>
          <button v-for="(tag, index) in post.selectTags" :key="index">{{tag}}</button>
        </div>
      </div>
    </li>
  </ul>
  <h1 class="none" v-show="myPost.length === 0">投稿はありません</h1>
</div>
</template>

<script>
  export default {
    data () {
      return{
        tag:'',
      }
    },
    computed:{
      // 全ての投稿データ
      postData () {
        return this.$store.getters['user/postData']
      },
      // ユーザデータ
      userData () {
        return this.$store.getters['auth/userData']
      },
      // 自分の投稿データ
      myPost () {
        let test = []
        this.postData.forEach(element => {
          if (element.uid === this.userData.uid  ) {
            test.push(element)
          }
        });
        return test
      },
      // 投稿のダウンロードが完了しているか
      downState () {
        return this.$store.getters['user/downState']
      },
    },
    watch :{
      // ダウンロードが完了していたら投稿の描画が完了後ダミー要素を追加する
      downState (data) {
        if (data) {
          this.$nextTick(() => {
            const test = document.getElementsByClassName('dummy-elements')
            if(test.length != 0){
              test[0].parentNode.removeChild(test[0])
            }
            const ul = document.getElementById('ul')
            const li = document.createElement('li')
            li.setAttribute('class', 'dummy-elements')
            ul.appendChild(li)
          })
        }
      }
    },
    methods:{
      // 投稿詳細ページへ
      goDatails (post) {
        this.$store.commit('user/selectPostData', post)
        this.$router.push('/details')
      },
      // お気に入り機能
      favorite (id) {
        const favoriteData = 
        {
          id:id,
          uid:this.userData.uid
        }
        this.$store.commit('user/changeFavorite', favoriteData)
        this.$store.dispatch('user/uploadFavorite')
      },
    },
    // 空の要素を追加する(ページ遷移時)
    mounted () {
      if(this.downState){
          this.$nextTick(() => {
          const ul = document.getElementById('ul')
          const li = document.createElement('li')
          li.setAttribute('class', 'dummy-elements')
          ul.appendChild(li)
        })
      }
    },
    created () {
      this.tag = this.$route.query.tag
   }
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
// デスクトップサイズ
@media (min-width: 1141px){
  ul{
    @include topLayout(32%, space-between);
  }
  .none{
    font-size: 24px;
    color: black;
    text-align: center;
    font-weight: normal;
    margin-top: 30px;
  }
}
// タブレットサイズ
@media (min-width: 641px) and (max-width: 1140px){
  ul{
    @include topLayout(48%, space-between);
  }
  .none{
    font-size: 24px;
    color: black;
    text-align: center;
    font-weight: normal;
    margin-top: 30px;
  }
}
// スマホサイズ
@media (max-width:640px) {
  ul{
    @include topLayout(100%, center);
  }
  .none{
    font-size: 20px;
    color: black;
    text-align: center;
    font-weight: normal;
    margin-top: 30px;
  }
}

</style>

<style style="scss">
/* タブレットサイズ */
@media (min-width: 1141px){
  .dummy-elements{
      position: relative; 
      display: flex;
      background:transparent;
      width: 30%;
  }
}
/* タブレットサイズ */
@media (min-width: 641px) and (max-width: 1140px){
  .dummy-elements{
      position: relative; 
      display: flex;
      background:transparent;
      width: 45%;
  }
}
/* スマホサイズ */
  @media (max-width:640px) {
    .dummy-elements{
      width: 0;
      height: 0;
    }
  }
</style>