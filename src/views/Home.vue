<template>
  <div>
    <div class="max-width">
      <Tags />
      <Posts />
    </div>
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
    data () {
      return{

      }
    },
    methods:{

    },
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
.max-width{
  width: 90%;
  margin: 0 auto;
}
</style>

