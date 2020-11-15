<template>
<div>
  <div class="container">
    <router-link class="title" to="/">EntaMemory</router-link>
    <!-- メニュー -->
    <div class="nav-right" v-if="width">
      <router-link v-if="!active" class="link" to="loginregister">ログイン/会員登録</router-link>
      <span v-if="active" @click="logout" class="link">ログアウト</span>
      <router-link v-if="active" class="link" to="mypage">マイページ</router-link>
      <button v-if="active" class="submit" @click="onPostModal">感想を投稿</button>
    </div>
    <!-- スマホサイズメニュー -->
    <div class="nav-right" v-if="!width">
       <span @click="changeDrop"><font-awesome-icon icon="bars"/></span>
    </div>
    <!-- ドロップダウンメニュー -->
    <transition>
      <ul class="drop-menu" v-if="!width && drop">
        <li @click="changeDrop"><router-link v-if="!active" class="link" to="loginregister">ログイン/会員登録</router-link></li>
        <li v-if="active"  @click="onPostModal">感想を投稿</li>
        <li v-if="active"><router-link class="link" to="mypage">マイページ</router-link></li>
        <li v-if="active"><span class="link" @click="logout">ログアウト</span></li>

      </ul>
    </transition>
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
        return this.$store.getters['layout/width']
      },
      // 現在のパス
      path () {
        return this.$store.getters['layout/path']
      },
    },
    methods:{
      // 投稿モーダル切り替え
      onPostModal () {
        if(!this.active){
          alert('投稿をするにはログインが必要です')
        }else{
          this.$store.commit('layout/changeModal')
        }
      },
      // ドロップダウン切り替え
      changeDrop () {
        this.drop = !this.drop
      },
      // ログアウト
      logout () {
        const resolve = confirm('ログアウトしますか？')
        if (resolve) {
          this.$store.commit('auth/logout')
          console.log(this.path)
          if(this.path != '/') {
            this.$router.push('/')
          }
        }
      }
    },
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
        background: transparent;
        border: none;
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
    .v-enter-active, .v-leave-active {
      transition: opacity .3s;
    }

    .v-enter, .v-leave-to {
      opacity: 0;
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
        .link{
          color: rgba(211, 211, 211, 0.966);
          text-decoration: none;
          &:hover{
            cursor: pointer;
            color: white;
          }
        }
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