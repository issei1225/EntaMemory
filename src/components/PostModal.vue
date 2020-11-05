<template>
<div>
  <div class="overlay" @click.self="ofModal" v-if="width === true && modal === true">
    <div class="container">
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
        <button class="cancel" @click="ofModal">Cancel</button>
      </div>
    </div>
  </div>
  <SmartPostModal />
</div>
</template>

<script>
import SmartPostModal from '@/components/SmartPostModal.vue'
  export default {
    components:{
      SmartPostModal,
    },
    data () {
      return{
      }
    },
    computed:{
      width () {
        return this.$store.getters['layout/width']
      },
      modal () {
        return this.$store.getters['layout/modal']
      },
    },
    methods:{
      ofModal () {
        this.$store.commit('layout/changeModal')
      }
    },
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
@media (min-width:1141px){
  .overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.418);
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center; 
    .container{
      width: 85%;
      height: 90%;
      background: white;
      border-radius: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      // padding: 0 30px;
      .img-container{
        width: 43%;
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
         width: 50%;
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
          @include submitButton;
          @include cancelButton;
      }
    }
  }
}
@media (min-width: 641px) and (max-width: 1141px) {
    .overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.418);
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center; 
    .container{
      width: 85%;
      height: 90%;
      background: white;
      border-radius: 5px;
      overflow: scroll;
      // display: flex;
      // align-items: center;
      padding: 30px;
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
          @include submitButton;
          @include cancelButton;
      }
    }
  }
}
</style>

