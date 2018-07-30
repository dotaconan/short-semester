'use strict';

// const qs = require('qs');
// const mockjs = require('mockjs');

module.exports = {
    'POST /admin/login'(req, res) {
        console.log('req.body', req.body)
        const { username, password } = req.body;
        //数据开始模拟
        if (username == 'guest' && password == 'guest') {
            res.json({
                success: true,
                msg: '登录成功',
                userInfo: {
                    username: 'guest'
                }
            });
        } else {
            res.json({
                success: false,
                msg: '登录失败'
            });
        }
    },
    'POST /admin/logout'(req, res) {
       res.json({
           success: true
       })
    },
}