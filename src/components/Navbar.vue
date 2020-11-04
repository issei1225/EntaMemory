<template>
<div>
  <div class="container">
    <router-link class="title" to="/">EntaMemory</router-link>
    <div class="nav-right" v-if="width">
      <router-link v-if="active" class="link" to="loginregister">Login/Register</router-link>
      <router-link v-else class="link" to="mypage">Name</router-link>
      <button class="submit" @click="onPostModal">Post your impressions</button>
    </div>
    <div class="nav-right" v-if="!width">
       <span @click="changeDrop"><font-awesome-icon icon="bars"/></span>
    </div>
    <ul class="drop-menu" v-if="!width && drop">
      <li>Post your impressions</li>
      <li>Login/Register</li>
    </ul>
  </div>
  <div class="nav-padding">

  </div>
</div>
</template>

<script>

  export default {
    data () {
      return{
        drop:false,
      }
    },
    computed:{
      // ログイン状態
      active () {
        return this.$store.getters['auth/active']
      },
      // ウィンドウ幅
      width () {
        return this.$store.getters['user/width']
      },
    },
    methods:{
      onPostModal () {
        this.$store.commit('user/changeModal')
      },
      changeDrop () {
        this.drop = !this.drop
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/sass/mixins';
@import '../assets/sass/variables';
  .container{
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 60px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.171);
    background-color: #3f3f3f;
    .title{
      font-size: 18px;
      line-height: 60px;
      margin-left: 20px;
      width: 110px;
      text-decoration: none;
      color: rgba(211, 211, 211, 0.966);
      &:hover{
        cursor: pointer;
        transform: all .3s ease;
        color: white;
      }
    }
    .nav-right{
      display: inline-block;
      float: right;
      .link{
        float: right;
        font-size: 16px;
        line-height: 60px;
        margin-right: 20px;
        text-decoration: none;
        color: rgba(211, 211, 211, 0.966);
        &:hover{
          cursor: pointer;
          transition: color .3s ease;
          color: rgb(255, 255, 255);
        }
      }
      @include submitButton;
      span{
        margin-right: 20px;
        font-size: 22px;
        line-height: 60px;
        color: rgba(160, 160, 160, 0.966);
        &:hover{
          cursor: pointer;
          transform: all .3s ease;
          color: white;
        }
      }
    }
    .drop-menu{
      background-color: $header-footer-color;
      color: rgba(200, 200, 200, 0.966);
      list-style: none;
      padding: 0;
      padding-left: 20px;
      padding-bottom: 10px;
      li{
        padding-bottom: 5px;
        font-size: 16px;
        &:hover{
          cursor: pointer;
          color: white;
        }
      }
    }
    }
  .nav-padding{
    padding-top: 60px;
  }
</style>