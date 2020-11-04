<template>
    <div class="smart-container" v-if="width === false && modal === true">
      <h1>Submit to Unsplash</h1>
      <span></span>
      <div class="img-container">
        <img src="../assets/images/movie.jpg" alt="">
      </div>
      <div class="text-container">
        <label for="">Title</label>
        <input type="text">
        <label for="">Post Title</label>
        <input type="text">
        <label for="">Main text</label>
        <textarea></textarea>
        <label for="">Tags</label>
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
        <button class="submit">Submit</button>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return{
      }
    },
    computed:{
      width () {
        return this.$store.getters['user/width']
      },
      modal () {
        return this.$store.getters['user/modal']
      },
    },
    methods:{
      // ofModal () {
      //   this.stateModal = false
      // }
    },
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
  .smart-container{
    position: fixed;
    z-index: 8;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    padding: 30px;
    overflow: scroll;
    h1{
      text-align: center;
      margin-bottom: 20px;
      font-size: 20px;
    }
    .img-container{
      width: 90%;
      margin: 0 auto;
      height: 55%;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      &:hover{
        cursor: pointer;
      }
      img{
        width: 95%;
        height: 95%;
        object-fit: cover;
        border-radius: 3px;
      }
    }
    .text-container{
      width: 70%;
      margin: 0 auto;
      input, textarea{
        display: block;
        resize: none;
        width: 100%;
        height: 30px;
        &:focus{
          outline: none;
        }
      }
      textarea{
        height: 150px;
        font-size: 18px;
      }
      label{
        display: block;
        margin-top: 20px;
      }
      .buttons{
        @include TagsButton(30px);
      }
      .submit{
        display: block;
        margin: 30px auto;
        text-decoration: none;
        background-color: rgb(49, 190, 49);
        border:1px solid transparent;
        font-size: 15px;
        padding: 10px 100px;
        border-radius: 10px;
        color: white;
        &:hover{
          cursor: pointer;
          transition: background .3s ease;
          background: rgb(64, 207, 64);
        }
      }
    }
  }

</style>

