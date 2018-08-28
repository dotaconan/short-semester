'use strict';

// const qs = require('qs');
// const mockjs = require('mockjs');

module.exports = {
  'POST /login' (req, res) {
    console.log('req.body', req.body)
    const { username, password } = req.body;
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
  'POST /logout' (req, res) {
    res.json({
      success: true
    })
  }
}
