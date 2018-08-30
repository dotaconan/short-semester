<template>
  <div>
    <i-input :value="search" placeholder="查找文章" />
    <div v-for="i in 10" :key="i" class="card">
      <div style="margin: 16px">标题</div>
      <i-card full title="卡片标题" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
          <div slot="content">
            基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
            基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
            基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
          </div>
          <div slot="footer">点赞</div>
      </i-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style>
.card:last-child {
  margin-bottom: 50px;
}
</style>
