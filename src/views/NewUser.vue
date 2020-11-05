<template>
  <div>
    <h1>Profile Image</h1>
    <div class="img-container" @click="onSetImg">
      <img ref="image" :src="preview" alt="">
      <span><font-awesome-icon icon="camera"/></span>
    </div>
    <h1>Profile Text</h1>
    <textarea v-model="introduction"></textarea>
    <h1>Profile Tags</h1>
    <div class="buttons">
      <button @click="selectTag(tag,index)" v-for="(tag, index) in tags" :key="index" :class="{'active':tag.checked}">{{tag.name}}</button>
    </div>
    <button @click="dataRegister" class="ok-button">EntaMermoryを始める</button>
    <input id="file" type="file" ref="file" @change="setImage" v-show="false"/>
  </div>
</template>

<script>

  export default {
    components:{
    },
    data () {
      return{
        introduction:'',
        image:'',
        preview:'',
        tags:
        [
          { name: 'アニメ', checked: false  },
          { name: '映画', checked: false },
          { name: 'ゲーム', checked: false },
          { name: 'アクション', checked: false  },
          { name: '恋愛', checked: false },
          { name: 'ホラー', checked: false },
          { name: 'SF', checked: false  },
        ],
        selectTags:[],
        tagActive:false,
      }
    },
    methods:{
      goHome () {
        this.$router.push('/')
      },
      // 画像選択起動
      onSetImg () {
        const file = this.$refs.file
        file.click();
      },
      // 画像プレビュー表示
      setImage (e) {
        this.image = e.target.files[0]
        this.preview = URL.createObjectURL(this.image)
        const userImage = this.$refs.image
        userImage.classList.add('image')
      },
      // タグの選択
      selectTag (tag, index) {
        // タグのスタイル変更
        this.tags.forEach((tag, tagIndex) => {
          if (tagIndex === index) {
            tag.checked = !tag.checked
          }
        })
        if (this.selectTags.indexOf(tag.name) === -1) {
          this.selectTags.push(tag.name)
        }else{
          const num = this.selectTags.indexOf(tag.name)
          this.selectTags.splice(num, 1)
        }
      },
      async dataRegister () {
        const data = {
          tags:this.selectTags,
          image:this.image,
          introduction:this.introduction
        }
        await this.$store.dispatch('auth/dataRegister', data)
        this.$router.push('/')
      }
    },
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
@import '../assets/sass/variables.scss';

h1{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 23px;
}
.img-container{
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  &:hover{
    cursor: pointer;
  }
  &:hover > span{
    transition: opacity .3s ease;
    opacity: 1;
  }
  .image{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  span{
    position: absolute;
    z-index: 2;
    top: 70px;
    left: 80px;
    font-size: 40px;
    opacity: 0.7;
  }
}
textarea{
  resize: none;
  display: block;
  margin: 0 auto;
  font-size: 18px;
  width: 350px;
  height: 100px;
  border: 1px solid transparent;
  &:focus{
    outline: none;
  }
}
  .buttons{
    width: 400px;
    margin: 0 auto;
    text-align: center;
    @include TagsButton(40px);
    .active{
      background: $header-footer-color;
      color: white;
    }
  }
.ok-button{
  display: block;
  margin: 50px auto 70px;
  background: violet;
  border-color: transparent;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 3px;
  color: white;
  &:hover{
    cursor: pointer;
    transition: all .3s ease;
    color: violet;
    background: white;
  }
  &:focus{
    outline: none;
  }
}
</style>

