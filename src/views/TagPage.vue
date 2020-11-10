<template>
<div>
  <div class="container">
    <h1>{{title}}</h1>
  </div>
    <div class="max-width">
      <TagPosts />
    </div>
</div>
</template>

<script>
import TagPosts from '@/components/TagPosts.vue'
 export default {
   components:{
     TagPosts,
   },
   data () {
     return {
       title:'',
     }
   },
   created () {
     this.$store.commit('layout/changePath', this.$route.path)
     this.title = this.$route.query.tag
   }
 }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
.container{
  text-align: center;
  h1{
    margin: 30px 0px;
    background: cornflowerblue;
    display: inline-block;
    font-size: 24px;
    color: white;
    padding: 4px 25px;
    border-radius: 5px;
    font-weight: normal;
  }
}
  .max-width{
    width: 90%;
    margin: 0 auto;
    height: 100%;
  }
</style>