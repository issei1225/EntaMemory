<template>
<div>
  <div class="overlay" @click.self="ofModal" v-if="width === true && modal === true">
    <div class="container">
      <h1>映画、アニメ、ゲームの感想を投稿しよう！</h1>
      <div class="img-container" @click="onSetImg">
        <span><font-awesome-icon icon="camera"/></span>
        <img ref="image" :src="preview">
      </div>
      <div class="text-container">
        <label>作品名</label>
        <input v-model="title"  type="text">
        <label>投稿タイトル</label>
        <input v-model="postTitle" type="text">
        <label>本文</label>
        <textarea v-model="mainText"></textarea>
        <label>タグ</label>
        <div class="buttons">
          <button @click="selectTag(tag,index)" v-for="(tag, index) in tags" :key="index" :class="{'active':tag.checked}">{{tag.name}}</button>
        </div>
        <button class="submit" @click="post">投稿</button>
        <button class="cancel" @click="ofModal">キャンセル</button>
      </div>
      <input id="file" type="file" ref="file" @change="setImage" v-show="false"/>
    </div>
  </div>
  <SmartPostModal />
</div>
</template>

<script>
import SmartPostModal from '@/components/SmartPostModal.vue'
  export default {
    components:{
      SmartPostModal,
    },
    data () {
      return{
        title:'',
        postTitle:'',
        mainText:'',
        image:'',
        tags:
        [
          { name: 'アニメ', checked: false  },
          { name: '映画', checked: false },
          { name: 'ゲーム', checked: false },
          { name: 'アクション', checked: false  },
          { name: '恋愛', checked: false },
          { name: 'ホラー', checked: false },
          { name: 'スポーツ', checked: false },
          { name: 'SF', checked: false  },
          { name: 'ネタバレあり', checked: false },
        ],
        preview:'',
        selectTags:[],
      }
    },
    computed:{
      width () {
        return this.$store.getters['layout/width']
      },
      modal () {
        return this.$store.getters['layout/modal']
      },
      userData () {
        return this.$store.getters['auth/userData']
      },
    },
    methods:{
      // モーダルを閉じる
      ofModal () {
        this.$store.commit('layout/changeModal')
        this.title = ''
        this.postTitle = ''
        this.mainText = ''
        this.image = ''
        this.preview = ''
        this.selectTags = []
        this.tags.forEach((tag) => {
          tag.checked = false
        })
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
      // 投稿
      async post () {
        const postData = 
        {
          uid:this.userData.uid,
          name:this.userData.name,
          userImage:this.userData.image,
          title:this.title,
          postTitle:this.postTitle,
          mainText:this.mainText,
          image:this.image,
          selectTags:this.selectTags,
          comments:[],
          favorite:[],
          likes:0,
        }
        await this.$store.dispatch('user/post', postData)
        this.ofModal()
        alert('投稿しました')
        // this.$store.commit('user/resetPostData')
        await this.$store.dispatch('user/downloadPost')
      },
    },
  }
</script>

<style scoped lang="scss">
@import '../assets/sass/mixins';
@import '../assets/sass/variables';
    .overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.418);
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center; 
    .container{
      width: 85%;
      height: 90%;
      background: white;
      border-radius: 5px;
      overflow: scroll;
      padding: 30px;
      h1{
        text-align: center;
        margin: 0 auto 20px;
        font-size: 25px;
        font-weight: normal;
        background: $submit-color;
        border-radius: 3px;
        width: 60%;
        color: white;
        padding: 6px 0px;
      }
      .img-container{
        width: 70%;
        margin: 0 auto;
        height: 70%;
        border: 4px dashed $login-border;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 3px;
        &:hover{
          cursor: pointer;
          transition: border-color .3s ease;
          border-color: black;
        }
        &:hover > span{
          color: black;
          transition: color .3s ease;
        }
        span{
          position: absolute;
          font-size: 50px;
          color: $login-border;
        }
        .image{
          width: 95%;
          height: 95%;
          object-fit: cover;
          border-radius: 3px;
        }
      }
      .text-container{
        width: 70%;
        margin: 0 auto;
        input, textarea{
          display: block;
          resize: none;
          width: 100%;
          height: 35px;
          &:focus{
            outline: none;
          }
        }
        textarea{
          height: 180px;
          font-size: 18px;
        }
        label{
          display: block;
          margin-top: 30px;
        }
        .buttons{
          button{
            padding: 0 20px;
            height: 30px;
            background: rgba(255, 255, 255, 0);
            margin:10px 10px 0px 0px;
            border: 1px solid transparent;
            box-shadow: 0px 0px 2px black;
            border-radius: 2px;
            &:hover{
              cursor: pointer;
              transition: all .3s ease;
            }
            &:focus{
              outline: none;
            }
          }
          .active{
            background: $header-footer-color;
            color: white;
          }
            margin-bottom: 30px;
          }
          @include submitButton;
          @include cancelButton;
      }
    }
  }
</style>

