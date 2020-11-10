<template>
  <div class="container">
    <div class="tags">
      <h1>タグ</h1>
      <div class="buttons">
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'アニメ'}}">アニメ</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: '映画'}}">映画</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'ゲーム'}}">ゲーム</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'アクション'}}">アクション</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: '恋愛'}}">恋愛</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'スポーツ'}}">スポーツ</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'SF'}}">SF</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'ホラー'}}">ホラー</router-link>
        <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'ネタバレあり'}}">ネタバレあり</router-link>
        <!-- <router-link tag="button" :to="{name: 'TagPage', query: {tag: 'ネタバレあり'}}">ネタバレなし</router-link> -->
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
