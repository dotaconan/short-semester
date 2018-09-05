<template>
  <div>
    <i-input :value="search" placeholder="查找文章" />
    <div v-for="i in article" :key="i" class="card">
      <div style="margin: 16px"></div>
      <i-card full :title="i.title" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
          <div slot="content" v-html="i.content">
            
          </div>
          <div slot="footer">点赞</div>
      </i-card>
    </div>
  </div>
</template>

<script>
import { baseURL } from './../utils/baseURL.js'

export default {
  data () {
    return {
      search: '',
      article: []
    }
  },
  created () {
    this.getArtcile()
  },
  methods: {
    getArtcile () {
      this.$net.get(`${baseURL}/article_api`).then((d) => {
        // console.log(d.data)
        this.article = d.data.article
      }).catch(err => {
        console.log(err.status, err.message)
      })
    }
  }
}
</script>

<style>
.card:last-child {
  margin-bottom: 50px;
}
</style>
