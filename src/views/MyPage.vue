<template>
  <div class="container">
    <Profile />
    <MyPageBar />
    <div class="posts-container">
      <Posts />
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import MyPageBar from '@/components/MyPageBar.vue'
import Posts from '@/components/Posts.vue'
 export default {
   components:{
     Profile,
     MyPageBar,
     Posts
   }
 }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
.posts-container{
  width: 90%;
  margin: 0 auto;
}

</style>

