const express = require('express')
const router = express.Router()

const userAction = require('./../controller/user')

const {oAuthAdmin, oAuthBase} = require('./../libs/oauth')


// 用户登录
router.post('/login', userAction.login);

// 用户登出
router.post('/signout', userAction.logout);

// 录入用户
router.post('/typein', oAuthAdmin, userAction.adminInput);




module.exports = router