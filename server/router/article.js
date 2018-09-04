const express = require('express')
const router = express.Router()

const articleAction = require('./../controller/article')

// 获取所有文章
router.get('/', articleAction.getAllArticle)

// 添加文章
router.post('/', articleAction.addArticle)

// 根据 id 编辑文章
router.patch('/:id', articleAction.editArticle)

// 根据 id 删除文章
router.delete('/:id', articleAction.deleteArticle)

module.exports = router