<template>
  <div>
    <div class="container">
      <span @click="changePosts" :class="{active:postsActive}">投稿</span>
      <span @click="changeLikes" :class="{active:likesActive}">お気に入り</span>
    </div>
    <div class="posts-container">
      <MyPosts v-if="postsActive" />
      <FavoritePosts v-else />
    </div>
  </div>
</template>

<script>
import MyPosts from '@/components/MyPosts.vue'
import FavoritePosts from '@/components/FavoritePosts.vue'
 export default {
   components:{
    MyPosts,
    FavoritePosts
   },
   data () {
    return{
      postsActive:true,
      likesActive:false,
    }
   },
   methods:{
    changePosts () {
      this.postsActive = !this.postsActive
      this.likesActive = false
    },
    changeLikes () {
      this.likesActive = !this.likesActive
      this.postsActive = false
    },
  }
 }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';

  .container{
    border-bottom:1px solid rgb(112, 112, 112);
    padding: 0 25px;
    span{
      display: inline-block;
      padding-bottom: 16px;
      margin-right: 15px;
      &:hover{
        cursor: pointer;
      }
    }
    .active{
      border-bottom: 3px solid black;
    }
  }
  .posts-container{
    width: 90%;
    margin: 0 auto;
  }

</style>
