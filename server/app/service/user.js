const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = "nihao,lqy"
    return user;
  }
}

module.exports = UserService;
 