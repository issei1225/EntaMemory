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
        <p>© 2020-present Issei Tashiro</p>
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
    // 画面幅
    width () {
      return this.$store.getters['layout/width']
    },
  },
  methods:{
    // 画面幅変更感知
    handleResize () {
      this.$store.commit('layout/changeWidth', innerWidth)
    }
  },
  // 画面幅変更感知
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  // 画面幅変更感知
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  async created () {
    await this.$store.dispatch('user/downloadPost')
  }
}
</script> 

<style lang="scss">
  html, body, #app{
    background-color: #F2F4FB;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    .router-container{
      margin: 0 auto;
      width: 100%;
      max-width: 1400px;
    }
    footer{
      width: 100%;
      height: 65px;
      background: #3f3f3f;
      margin-top: auto;
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
