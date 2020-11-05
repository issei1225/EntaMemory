<template>
  <div class="container">
    <section class="profile-container">
      <div class="img-container"></div>
      <div class="profile-right">
        <h1>Tanjiro Kamado</h1>
        <p>kisatutai mizunoto imoutono nezuko wo ningen ni modosutame katudoutyuu</p>
        <span>likeTags</span>
        <button>アニメ</button>
        <button>アニメ</button>
        <button>アニメ</button>
        <button>アニメ</button>
        <button>アニメ</button>
      </div>
      <p>
        <!-- {{userData}} -->
      </p>
    </section>
  </div>
</template>

<script>
  export default {
    data () {
      return{

      }
    },
    computed:{
      userData () {
        return this.$store.getters['auth/userData']
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
@media (min-width: 641px){
  .profile-container{
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px;
    margin: 0 auto;
    .profile-right{
      width: 50%;
      color: violet;
    }
    .img-container{
      width: 150px;
      height: 150px;
      background: violet;
      border-radius: 50%;
      margin: 13px 50px 0px 0px;
    }
    h1{
      font-size: 22px;
      margin: 10px 0px;
    }
    p{
      margin: 10px 0px;
    }
    span{
      display: block;
    }
    @include TagsButton(40px);
  }
}
@media (max-width: 640px) {
  .profile-container{
    width: 100%;
    padding: 30px;
    margin: 0 auto;
    .img-container{
      width: 150px;
      height: 150px;
      background: violet;
      border-radius: 50%;
    }
    h1{
      font-size: 22px;
      margin: 10px 0px;
    }
    p{
      margin: 10px 0px;
    }
    span{
      display: block;
    }
    @include TagsButton(40px);
  }
}
</style>