<template>
  <div class="container">
    <Profile />
    <MyPageBar />
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import MyPageBar from '@/components/MyPageBar.vue'

 export default {
   components:{
     Profile,
     MyPageBar,
   },
   created () {
     this.$store.commit('layout/changePath', this.$route.path)
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

