<template>
  <div class="container">
    <section class="profile-container">
      <div class="img-container">
        <img :src="userData.image" alt="">
      </div>
      <div class="profile-right">
        <h1>{{userData.name}}</h1>
        <p>{{userData.introduction}}</p>
        <span>興味のあるタグ</span>
        <ul>
          <li v-for="(tag, index) in userData.tags" :key="index">{{tag}}</li>
        </ul>
      </div>
      <p>
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
      border-radius: 50%;
      margin: 13px 50px 0px 0px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    h1{
      font-size: 22px;
      margin: 10px 0px;
      color: black;
    }
    p{
      margin: 10px 0px;
      color: black;
    }
    span{
      display: block;
      color: black;
      font-weight: bold;
    }
    ul{
      list-style: none;
      padding: 0;
      li{
        display: inline-block;
        padding:5px 20px;
        font-size: 15px;
        color: #727272;
        background: rgba(255, 255, 255, 0);
        margin:10px 10px 0px 0px;
        border: 1px solid #727272;
        border-radius: 2px;
        // &:hover{
        //   cursor: pointer;
        //   transition: all .3s ease;
        // }
      }
    }
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
      border-radius: 50%;
      margin: 13px 50px 0px 0px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    h1{
      font-size: 22px;
      margin: 10px 0px;
      color: black;
    }
    p{
      margin: 10px 0px;
      color: black;
    }
    span{
      display: block;
      color: black;
    }
    ul{
      list-style: none;
      padding: 0;
      li{
        display: inline-block;
        padding:5px 20px;
        font-size: 15px;
        color: #727272;
        background: rgba(255, 255, 255, 0);
        margin:10px 10px 0px 0px;
        border: 1px solid #727272;
        border-radius: 2px;
        &:hover{
          cursor: pointer;
          transition: all .3s ease;
        }
      }
    }
  }
}
</style>