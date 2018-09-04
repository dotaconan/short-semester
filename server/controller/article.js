const ArticleDataModel = require('./../mongo/model/articleModel')

// 获取所有文章
function getAllArticle (req, res) {
	const { page } = req.query
    const itemsPerPage = 8;
    const index = (page - 1) * itemsPerPage;

    let howManyUsers = 0;

    ArticleDataModel.find({},(err, results) => {
        if(err) console.log(err)
        howManyUsers = results.length
    })

    const _article = ArticleDataModel.find()
    _article
        .skip(index)
        .limit(itemsPerPage)
        .exec((err, articleResults) => {
            if(err) {
                console.log(err)
                res.send({
                    status: false,
                    msg: '数据库查询失败'
                })
            }
            res.send({
                status: true,
                article: articleResults,
                count: howManyUsers
            })
        })
}

// 添加文章
function addArticle(req, res) {
	const { title, content } = req.body
	console.log(title, content)
	// 创建 model
	let _articleData = new ArticleDataModel({
		title: title,
		like: 0,
		content: content,
	});

	_articleData.save((err, results) => {
		if (err) {
			console.log(err)
				// 返回
			res.send({
				status: false,
				msg: '数据库保存失败'
			})
			return false
		}
		// 返回添加信息
		res.send({
			status: true,
			msg: '添加成功'
		})
	})
}

// 根据 id 编辑文章信息
function editArticle (req, res) {
	const { title, content } = req.body
	const { id } = req.params

	ArticleDataModel.update(
        { _id: id }, 
        { $set: {
            'title': title,
            'content': content, 
           } 
        }, err => {
            if(err) {
                console.log(err)
                res.send({
                    status: false,
                    msg: '更新数据失败'
                })
                return false
            }
            res.send({
                status: true,
                msg: '更新数据成功'
            })
        })
}

// 根据 id 删除文章
function deleteArticle (req, res) {
	const { id } = req.params
	ArticleDataModel.remove({ _id: id }, err => {
        if (err) {
            console.log(err)
            res.send({
                status: false,
                msg: '删除失败'
            })
        }
        res.send({
            status: true,
            msg: '删除成功'
        })
    })
}

module.exports = {
	getAllArticle,
	addArticle,
	editArticle,
	deleteArticle
}