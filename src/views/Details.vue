<template>
  <div class="container">
    <img :src="post.image" alt="">
    <main>
      <h1 class="title">{{post.title}}</h1>

      <section class="user-container">
        <img class="user-image" :src="post.userImage">
        <span>{{post.name}}</span>
      </section>

      <section class="tags">
          <div class="buttons">
            <button class="tag" v-for="(tag, index) in post.selectTags" :key="index">{{tag}}</button>
          </div>
      </section>


      <section class="main-text">
        <h1 class="sub-title">{{post.postTitle}}</h1>
        <p>{{post.mainText}}</p>
      </section>

      <section class="comments">
        <h1>コメント</h1>
        <ul>
          <li v-for="(comment, index) in post.comments" :key="index">
            <img class="user-image" :src="comment.image">
              <span>{{comment.name}}</span>
              <span class="comment">{{comment.comment}}</span>
          </li>
        </ul>
        <textarea v-model="comment"></textarea>
        <button class="submit" @click="postComment">コメントする</button>
      </section>
      <button v-show="deletePremit" @click="deletePost" class="delete">投稿を削除</button>
    </main>
  </div>
</template>

<script>
 export default {
   data () {
     return {
       comment:'',
     }
   },
   computed:{
     post () {
       return this.$store.getters['user/selectPost']
     },
     userData () {
       return this.$store.getters['auth/userData']
     },
     deletePremit () {
       if (this.post.uid === this.userData.uid) {
         return true
       } else {
         return false
       }
     },
      active () {
        return this.$store.getters['auth/active']
      },
   },
   methods:{
    //  投稿削除
     async deletePost () {
       const result = confirm('この投稿を削除しますか？')
       if (result) {
         await this.$store.dispatch('user/deletePost')
         alert('投稿を削除しました')
         this.$router.push('/')
         this.$store.dispatch('user/downloadPost')
       }
     },
    //  コメント投稿
     async postComment () {
       if (this.active) {
         const commentData = 
         {
           comment:this.comment,
           name:this.userData.name,
           image:this.userData.image,
         }
         this.$store.commit('user/pushComment', commentData)
         await this.$store.dispatch('user/uploadComment')
       }else{
         alert('コメントをするにはログインが必要です')
       }
     }
   },
   created () {
     this.$store.commit('layout/changePath', this.$route.path)
   }
 }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
.container{
  width: 92%;
  max-width: 750px;
  margin: 20px auto 0px;
  background: white;
  padding-bottom: 30px;
  img{
    width: 100%;
  }
  main{
    padding: 0 15px;
    .title{
      display: inline-block;
      font-size: 25px;
    }
    button{
      padding: 0 20px;
      height: 30px;
      background: rgba(255, 255, 255, 0);
      margin:10px 10px 0px 0px;
      border: 1px solid transparent;
      box-shadow: 0px 0px 2px black;
      border-radius: 2px;
      &:focus{
        outline: none;
      }
    }
    .active{
      background: $header-footer-color;
      color: white;
    }
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
        object-fit: cover;
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
            object-fit: cover;
          }
          span{
            margin-left: 10px;
            font-size: 16px;
          }
          .comment{
            display: block;
            margin-left: 70px;
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
          cursor: pointer;
          transition: all .3s ease;
          color: white;
          border: white;
        }
      }
    }
    .delete{
      display: block;
      margin-left: auto;
      color: rgb(218, 50, 50);
      &:hover{
        cursor: pointer;
      }
    }
  }
}
</style>
