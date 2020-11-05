<template>
<div class="sign-container">
  <!-- ログインフォーム -->
  <form class="container" v-if="login" onSubmit="return false">
    <div class="login-register">
      <span @click="changeLogin" :class={active:login} class="login">Login</span>
      <span @click="changeRegister" :class={active:register} class="register">Register</span>
    </div>
    <label> Email </label>
    <input v-model="loginEmail" type="text">
    <label> Password </label>
    <input v-model="loginPass" type="text">
    <button @click="onLogin" type="submit">Login</button>
  </form>
  <!-- 登録フォーム -->
  <form class="container" v-else onSubmit="return false">
    <div class="login-register">
      <span @click="changeLogin" :class={active:login} class="login">Login</span>
      <span @click="changeRegister" :class={active:register} class="register">Register</span>
    </div>
    <label> UserName </label>
    <input v-model="name" type="text">
    <label> Email</label>
    <input v-model="registerEmail" type="text">
    <label> Password </label>
    <input v-model="registerPass" type="text">
    <button @click="onRegister" type="submit">Register</button>
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
        loginEmail:'',
        loginPass:'',
        name:'',
        registerEmail:'',
        registerPass:'',
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
      async onRegister () {
        const registerData = {
          name:this.name,
          registerEmail:this.registerEmail,
          registerPass:this.registerPass,
        }
        await this.$store.dispatch('auth/register', registerData)
        console.log('いける')
        this.$router.push('newuser')
      },
      // ログイン処理、ホーム画面遷移
      async onLogin () {
        const loginData = {
          loginEmail:this.loginEmail,
          loginPass:this.loginPass,
        }
        await this.$store.dispatch('auth/login', loginData)
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