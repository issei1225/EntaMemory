<template>
  <div>
    <ul  id="ul">
      <li @click="goDatails" class="box">
        <div class="img-container">
          <img src="../assets/images/game.jpg">
        </div>
        <div class="contents">
          <div class="contents-container">
            <div class="user-container">
              <img class="user-image" src="../assets/images/game.jpg">
              <span>namename</span>
            </div>
            <h1>タイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトル</h1>
            <button>ゲーム</button>
            <button>スポーツ</button>
            <button>ネタバレあり</button>
          </div>
        </div>
      </li>
      <li @click="goDatails" class="box">
        <div class="img-container">
          <img src="../assets/images/game.jpg">
        </div>
        <div class="contents">
          <div class="contents-container">
            <div class="user-container">
              <img class="user-image" src="../assets/images/game.jpg">
              <span>namename</span>
            </div>
            <h1>タイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトル</h1>
            <button>ゲーム</button>
            <button>スポーツ</button>
            <button>ネタバレあり</button>
          </div>
        </div>
      </li>
      <li @click="goDatails" class="box">
        <div class="img-container">
          <img src="../assets/images/game.jpg">
        </div>
        <div class="contents">
          <div class="contents-container">
            <div class="user-container">
              <img class="user-image" src="../assets/images/game.jpg">
              <span>namename</span>
            </div>
            <h1>タイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトル</h1>
            <button>ゲーム</button>
            <button>スポーツ</button>
            <button>ネタバレあり</button>
          </div>
        </div>
      </li>
      <li @click="goDatails" class="box">
        <div class="img-container">
          <img src="../assets/images/game.jpg">
        </div>
        <div class="contents">
          <div class="contents-container">
            <div class="user-container">
              <img class="user-image" src="../assets/images/game.jpg">
              <span>namename</span>
            </div>
            <h1>タイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトル</h1>
            <button>ゲーム</button>
            <button>スポーツ</button>
            <button>ネタバレあり</button>
          </div>
        </div>
      </li>
      <li @click="goDatails" class="box">
        <div class="img-container">
          <img src="../assets/images/game.jpg">
        </div>
        <div class="contents">
          <div class="contents-container">
            <div class="user-container">
              <img class="user-image" src="../assets/images/game.jpg">
              <span>namename</span>
            </div>
            <h1>タイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトルタイトル,タイトルタイトル,タイトルタイトル,タイトルタイトル</h1>
            <button>ゲーム</button>
            <button>スポーツ</button>
            <button>ネタバレあり</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return{
      }
    },
    methods:{
      goDatails () {
        this.$router.push('Details')
      }
    },
    mounted () {
      // 空の要素を追加する
      const ul = document.getElementById('ul')
      const li = document.createElement('li')
      li.setAttribute('class', 'dummy-elements')
      ul.appendChild(li)
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
}
// タブレットサイズ
@media (min-width: 641px) and (max-width: 1140px){
  ul{
    @include topLayout(48%, space-between);
  }
}
// スマホサイズ
@media (max-width:640px) {
  ul{
    @include topLayout(100%, center);
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