<template>
    <div class="max-width">
      <Tags />
      <Posts />
    </div>
</template>

<script>
import Tags from '@/components/Tags.vue'
import Posts from '@/components/Posts.vue'
  export default {
    components:{
      Tags,
      Posts
    },
    //  現在のページを取得
    created () {
      this.$store.commit('layout/changePath', this.$route.path)
    }
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
.max-width{
  width: 90%;
  margin: 0 auto;
  height: 100%;
}
</style>

