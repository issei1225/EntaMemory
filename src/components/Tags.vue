<template>
  <div class="container">
    <div class="tags">
      <h1>Tags</h1>
      <div class="buttons">
        <button>アニメ</button>
        <button>ゲーム</button>
        <button>映画</button>
        <button>アクション</button>
        <button>恋愛</button>
        <button>スポーツ</button>
        <button>SF</button>
        <button>ホラー</button>
        <button>ネタバレあり</button>
        <button>ネタバレなし</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {

  }
}
</script> 

<style scoped lang="scss">
@import '../assets/sass/mixins';

.container{
  text-align: center;
  padding: 40px 0;
  width: 100%;
  background: linear-gradient(-45deg, rgba(123, 235, 255, 0.767), rgba(247, 0, 255, 0.829)),url("../assets/images/movie.jpg");
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: 2px;
  h1{
    font-size: 22px;
    font-weight: normal;
  }
  .tags{
    .buttons{
      width: 80%;
      margin: 0 auto;
    }
    @include TagsButton(40px);
  }
}
</style>
