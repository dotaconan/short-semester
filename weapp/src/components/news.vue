<template>
  <div>
    <i-input :value="search" placeholder="查找文章"/>
    <i-button @click="searchArticle">搜索</i-button>
    <i-button @click="getArtcile">重置</i-button>
    <div v-for="i in article" :key="i" class="card">
      <div style="margin: 16px"></div>
      <i-card full :title="i.title" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
          <div slot="content" v-html="i.content">
            
          </div>
          <div slot="footer" @click="likeArticle(i._id, i.like)">点赞 {{i.like}}</div>
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
    searchArticle () {
      this.$net.post(`${baseURL}/article_api/search`, {
        title: this.search
      })
        .then((res) => {
          // console.log(res.data)
          this.article = res.data
        })
    },
    getArtcile () {
      this.$net.get(`${baseURL}/article_api`).then((d) => {
        // console.log(d.data)
        this.article = d.data.article
      }).catch(err => {
        console.log(err.status, err.message)
      })
    },
    likeArticle (id, like) {
      this.$net.post(`${baseURL}/article_api/like`, {
        id: id,
        like: like += 1
      })
        .then((res) => {
          console.log(res.data)
          this.getArtcile()
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
