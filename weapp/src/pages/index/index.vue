<template>
  <div class="root">
    <div v-show="isShow.personal">
      <Personal />
    </div>
    <div v-show="isShow.find">
      <Find />
    </div>
    <div v-show="isShow.news">
      <News />
    </div>
    <div v-show="isShow.status">
      <Status />
    </div>
    <!-- 底部标签栏 -->
    <div class="footerTab">
      <i-tab-bar :current="current" :fixed="true" @change="handleChange">
        <i-tab-bar-item key="status" icon="homepage" current-icon="homepage_fill" title="状态"></i-tab-bar-item>
        <i-tab-bar-item key="news" icon="group" current-icon="group_fill" title="资讯"></i-tab-bar-item>
        <i-tab-bar-item key="find" icon="remind" current-icon="remind_fill" title="发现"></i-tab-bar-item>
        <i-tab-bar-item key="personal" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>
      </i-tab-bar>
    </div>
  </div>
</template>

<script>
import Personal from './../../components/personal'
import Find from './../../components/find'
import News from './../../components/news'
import Status from './../../components/status'

export default {
  components: {
    Personal,
    Find,
    News,
    Status
  },
  data () {
    return {
      current: 'status',
      isShow: {
        personal: false,
        find: false,
        news: false,
        status: false
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
