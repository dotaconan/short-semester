<template>
  <div class="root">
    <div v-show="isShow.personal">
      <Personal />
    </div>
    <div v-show="isShow.news">
      <News />
    </div>
    <!-- 底部标签栏 -->
    <div class="footerTab">
      <i-tab-bar :current="current" :fixed="true" @change="handleChange">
        <i-tab-bar-item key="news" icon="group" current-icon="group_fill" title="资讯"></i-tab-bar-item>
        <i-tab-bar-item key="personal" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
      </i-tab-bar>
    </div>
  </div>
</template>

<script>
import Personal from './../../components/personal'
import News from './../../components/news'

export default {
  components: {
    Personal,
    News
  },
  data () {
    return {
      current: 'news',
      isShow: {
        personal: false,
        news: false
      }
    }
  },
  created () {
  },
  computed: {
    showComponents () {
      for (const key in this.isShow) {
        if (this.isShow.hasOwnProperty(key)) {
          this.isShow[key] = false
          if (key === this.current) {
            this.isShow[key] = true
          }
        }
      }
    }
  },
  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleChange ({mp: { detail }}) {
      this.setData({
        current: detail.key
      })
    }
  }
}
</script>

<style>
</style>
