<template>
  <div class="container">
    <img src="../assets/images/anime1.jpg" alt="">
    <main>
      <h1 class="title">IRONMAN</h1>

      <section class="user-container">
        <img class="user-image" src="../assets/images/game.jpg">
        <span>namena</span>
      </section>

      <section class="tags">
          <div class="buttons">
            <button>アニメ</button>
            <button>映画</button>
            <button>アクション</button>
            <button>ネタバレなし</button>
          </div>
      </section>


      <section class="main-text">
        <h1 class="sub-title">TITLE</h1>
        <p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文</p>
      </section>

      <section class="comments">
        <h1>Comments</h1>
        <ul>
          <li>
            <img class="user-image" src="../assets/images/game.jpg">
            <span>こめんとこめんとこめんと</span>
          </li>
          <li>
            <img class="user-image" src="../assets/images/game.jpg">
            <span>こめんとこめんとこめんと</span>
          </li>
          <li>
            <img class="user-image" src="../assets/images/game.jpg">
            <span>こめんとこめんとこめんと</span>
          </li>
        </ul>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button class="submit">Submit</button>
      </section>
    </main>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
.container{
  width: 92%;
  max-width: 750px;
  margin: 20px auto 0px;
  background: white;
  img{
    width: 100%;
  }
  main{
    padding: 0 15px;
    .title{
      display: inline-block;
      font-size: 25px;
    }
    @include TagsButton(30px);
    .user-container{
      position: relative;
      left: -20px;
      margin: 10px 0px;
      .user-image{
        width: 40px;
        height: 40px;
        margin-left: 20px;
        border: 1px solid black;
        border-radius: 50%;
        vertical-align: middle;
      }
      span{
        margin-left: 10px;
        font-size: 16px;
      }
    }
    .main-text{
      margin: 20px 0px;
      .sub-title{
        font-size: 20px;
      }
    }
    .comments{
      padding-bottom: 40px;
      ul{
        list-style: none;
        padding: 0;
        margin-bottom: 30px;
        li{
          position: relative;
          left: -20px;
          margin: 10px 0px;
          .user-image{
            width: 40px;
            height: 40px;
            margin-left: 20px;
            border: 1px solid black;
            border-radius: 50%;
            vertical-align: middle;
          }
          span{
            margin-left: 10px;
            font-size: 16px;
          }
        }
      }
      textarea{
        display: block;
        resize: none;
        width: 100%;
        height: 150px;
        font-size: 18px;
        &:focus{
          outline: none;
        }
      }
      .submit{
        display: block;
        margin: 20px auto 0px;
        font-size: 16px;
        width: 70%;
        height: 40px;
        &:hover{
          background: violet;
          color: white;
          border: white;
        }
      }
    }
  }
}
</style>
