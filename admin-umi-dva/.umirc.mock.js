const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = {
  'POST /login' (req, res) {
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
  },
  'GET /user' (req, res) {
    console.log(req.query);
    let userData = []
    let randomArray = [0, 1]

    for (let i = 0; i < 8; i++) {
        let newUser = {
            id: Random.string('number', 5),
            nickname: Random.cname(),
            sex: Random.pick(randomArray),
            account: Random.email(),
            cover: 'https://avatars0.githubusercontent.com/u/19502268?s=40&v=4',
            date: Random.date(),
            role: Random.pick(randomArray),
        }
        userData.push(newUser)
    }
    res.json({
      success: true,
      data: userData
    })
  },
  'DELETE /user/:id' (req, res) {
    console.log('d: ',req.query);
    let userData = []
    let randomArray = [0, 1]

    for (let i = 0; i < 8; i++) {
        let newUser = {
            id: Random.string('number', 5),
            nickname: Random.cname(),
            sex: Random.pick(randomArray),
            account: Random.email(),
            cover: 'https://avatars0.githubusercontent.com/u/19502268?s=40&v=4',
            date: Random.date(),
            role: Random.pick(randomArray),
        }
        userData.push(newUser)
    }
    res.json({
      success: true,
      data: userData
    })
  },
  'PATCH /user/:id' (req, res) {
    console.log(req.query);
    let userData = []
    let randomArray = [0, 1]

    for (let i = 0; i < 8; i++) {
        let newUser = {
            id: Random.string('number', 5),
            nickname: Random.cname(),
            sex: Random.pick(randomArray),
            account: Random.email(),
            cover: 'https://avatars0.githubusercontent.com/u/19502268?s=40&v=4',
            date: Random.date(),
            role: Random.pick(randomArray),
        }
        userData.push(newUser)
    }
    res.json({
      success: true,
      data: userData
    })
  },
  'POST /user' (req, res) {
    console.log(req.query);
    let userData = []
    let randomArray = [0, 1]

    for (let i = 0; i < 8; i++) {
        let newUser = {
            id: Random.string('number', 5),
            nickname: Random.cname(),
            sex: Random.pick(randomArray),
            account: Random.email(),
            cover: 'https://avatars0.githubusercontent.com/u/19502268?s=40&v=4',
            date: Random.date(),
            role: Random.pick(randomArray),
        }
        userData.push(newUser)
    }
    res.json({
      success: true,
      data: userData
    })
  }
}
