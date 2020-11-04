<template>
  <div class="container">
    <span @click="changePosts" :class="{active:postsActive}">Posts</span>
    <span @click="changeLikes" :class="{active:likesActive}">Likes</span>
  </div>
</template>

<script>
 export default {
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

</style>
