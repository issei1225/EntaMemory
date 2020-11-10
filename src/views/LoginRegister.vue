<template>
<div class="sign-container">
  <!-- ログインフォーム -->
  <form class="container" v-if="login" onSubmit="return false">
    <div class="login-register">
      <span @click="changeLogin" :class={active:login} class="login">ログイン</span>
      <span @click="changeRegister" :class={active:register} class="register">会員登録</span>
    </div>
    <label> メールアドレス </label>
    <input v-model="loginEmail" type="text" placeholder="test@test.com">
    <label> パスワード </label>
    <input v-model="loginPass" type="password" placeholder="test1234">
    <button @click="onLogin" type="submit">ログイン</button>
  </form>
  <!-- 登録フォーム -->
  <form class="container" v-else onSubmit="return false">
    <div class="login-register">
      <span @click="changeLogin" :class={active:login} class="login">Login</span>
      <span @click="changeRegister" :class={active:register} class="register">会員登録</span>
    </div>
    <label> ユーザーネーム </label>
    <input v-model="name" type="text">
    <label> メールアドレス</label>
    <input v-model="registerEmail" type="text" placeholder="test@test.com">
    <label> パスワード </label>
    <input v-model="registerPass" type="password" placeholder="test1234">
    <button @click="onRegister" type="submit">登録</button>
  </form>

  <button class="guest-login" @click="guestLogin">ゲストログイン</button>
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
        if(this.name != '' && this.registerEmail != '' && this.registerPass != '') {
          const registerData = {
            name:this.name,
            registerEmail:this.registerEmail,
            registerPass:this.registerPass,
          }
          try{
            await this.$store.dispatch('auth/register', registerData)
            this.$router.push('newuser')
          }catch(e){
            // 会員登録エラー時処理
            if(e.message == 'The email address is badly formatted.'){
              alert('メールアドレスかパスワードが正しく入力されていません');
            }else if(e.message == 'The email address is already in use by another account..'){
              alert('既に存在するアカウントです');
            }else if (e.message == 'Password should be at least 6 characters'){
              alert('パスワードは6文字以上にしてください');
            }
          }
        }else{
          alert('未入力項目があります')
        }
      },
      // ログイン処理、ホーム画面遷移
      async onLogin () {
        if(this.loginEmail != '' && this.loginPass) {
          const loginData = {
            loginEmail:this.loginEmail,
            loginPass:this.loginPass,
          }
          try{
            await this.$store.dispatch('auth/login', loginData)
            this.$router.push('/')
          }catch(e){
            //  ログインエラー時の各メッセージ
            if(e.message == 'The email address is badly formatted.'){
              alert('メールアドレスの形式が正しくありません');
            }else if(e.message == 'There is no user record corresponding to this identifier. The user may have been deleted.'){
              alert('存在しないアカウントです');
            }else if (e.message == 'The password is invalid or the user does not have a password.'){
              alert('パスワードが無効です');
            }
          }
        }else{
          alert('未入力項目があります')
        }
      },
      // ゲストログイン
      async guestLogin () {
        const loginData = {
          loginEmail:'guest@test.com',
          loginPass:'guest1234fesdfse',
        }
        await this.$store.dispatch('auth/login', loginData)
        this.$router.push('/')
      },
    },
    created () {
      this.$store.commit('layout/changePath', this.$route.path)
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
  &:focus{
    outline: none;
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