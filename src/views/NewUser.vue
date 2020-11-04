<template>
  <div>
    <h1>Profile Image</h1>
    <div class="img-container"></div>
    <h1>Profile Text</h1>
    <textarea></textarea>
    <h1>Profile Tags</h1>
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
    <button @click="goHome" class="ok-button">EntaMermoryを始める</button>
  </div>
</template>

<script>

  export default {
    components:{
    },
    data () {
      return{

      }
    },
    methods:{
      goHome () {
        this.$router.push('/')
      }
    },
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';

h1{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 23px;
}
.img-container{
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  margin: 0 auto;
  &:hover{
    cursor: pointer;
    border:1px solid violet;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.349);
  }
}
textarea{
  resize: none;
  display: block;
  margin: 0 auto;
  font-size: 18px;
  width: 350px;
  height: 100px;
  border: 1px solid transparent;
  &:focus{
    outline: none;
  }
}
  .buttons{
    width: 400px;
    margin: 0 auto;
    text-align: center;
    @include TagsButton(40px);
  }
.ok-button{
  display: block;
  margin: 50px auto 70px;
  background: violet;
  border-color: transparent;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 3px;
  color: white;
  &:hover{
    cursor: pointer;
    transition: all .3s ease;
    color: violet;
    background: white;
  }
  &:focus{
    outline: none;
  }
}
</style>

