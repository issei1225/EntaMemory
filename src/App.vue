<template>
  <div id="app">
    <div id="nav">
      <Navbar />
      <PostModal />
    </div>
    <div class="router-container">
      <router-view/>
    </div>
      <footer>
        <p>© 2018-present Issei Tashiro</p>
      </footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PostModal from '@/components/PostModal.vue'

export default {
  components: {
    Navbar,
    PostModal,
  },
  data () {
    return{
    }
  },
  computed:{
    width () {
      return this.$store.getters['user/width']
    }
  },
  methods:{
    handleResize () {
      this.$store.commit('user/changeWidth', innerWidth)
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script> 

<style lang="scss">
  html, body, #app{
    background-color: #F2F4FB;
    height: 100%;
    position: relative;
    .router-container{
      margin: 0 auto;
      max-width: 1400px;
    }
    footer{
      width: 100%;
      height: 65px;
      background: #3f3f3f;
      margin-top: 50px;
      p{
        color: white;
        text-align: center;
        line-height: 65px;
      }
    }
  }
  *{
    box-sizing: border-box;
    margin: 0;
  }
</style>
