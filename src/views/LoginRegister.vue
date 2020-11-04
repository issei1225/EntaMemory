<template>
<div class="sign-container">
  <!-- ログインフォーム -->
  <form class="container" v-if="login">
    <div class="login-register">
      <span @click="changeLogin" :class={active:login} class="login">Login</span>
      <span @click="changeRegister" :class={active:register} class="register">Register</span>
    </div>
    <label> Email </label>
    <input type="text">
    <label> Password </label>
    <input type="text">
    <button @click="goHome" type="submit">Login</button>
  </form>
  <!-- 登録フォーム -->
  <form class="container" v-else>
    <div class="login-register">
      <span @click="changeLogin" :class={active:login} class="login">Login</span>
      <span @click="changeRegister" :class={active:register} class="register">Register</span>
    </div>
    <label> UserName </label>
    <input type="text">
    <label> Email</label>
    <input type="text">
    <label> Password </label>
    <input type="text">
    <button @click="goNewUser" type="submit">Register</button>
  </form>

  <button class="guest-login">GuestLogin</button>
</div>
</template>

<script>
  export default {
    data () {
      return{
        login:true,
        register:false,
      }
    },
    methods:{
      // フォーム表示切り替え
      changeLogin () {
        this.register = false
        this.login = !this.login
      },
      changeRegister () {
        this.login = false
        this.register = !this.register
      },
      // ユーザー情報登録ページへ遷移
      goNewUser () {
        this.$router.push('newuser')
      },
      // ホームへ遷移
      goHome () {
        this.$router.push('/')
      },
    }
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/variables';
@import '../assets/sass/mixins';
.sign-container{
  height: 80vh;
}
.guest-login{
  display: block;
  background-color: violet;
  border: 1px solid transparent;
  margin: 0 auto;
  height: 50px;
  width: 150px;
  border-radius: 2px;
  color: white;
  &:hover{
    cursor: pointer;
    transition: opacity .3s ease;
    opacity: 0.7;
  }
}
.container{
  padding: 30px;
  width: 80%;
  border:  1px solid $login-border;
  margin: 90px auto;
  position: relative;
  .login-register{
    position: absolute;
    top: -35px;
    left: 10px;
    .login{
      margin-right: 10px;
      @include NonActive;
    }
    .register{
      @include NonActive;
    }
    .active{
      color: black;
      border-bottom: 2px solid black;
    }
  }
  input{
    display: block;
    margin: 0 0 20px 0;
    height: 33px;
    font-size: 15px;
    width: 100%;
    border: 1px solid $login-border;
    &:focus{
      outline: none;
    }
  }
  button{
    display: block;
    margin: 0 0 0 auto;
    height: 35px;
    width: 80px;
    color: rgb(255, 255, 255);
    background-color: black;
    border:1px solid black;
    border-radius: 2px;
    &:hover{
      cursor: pointer;
      transition: opacity .3s ease;
      opacity: 0.7;
    }
  }
}
</style>