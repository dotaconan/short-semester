'use strict';

const createRule = {
    username: {
        type: 'email',
    },
    password: {
        type: 'password',
        compare: 're-password',
    },
};


const Controller = require('egg').Controller;

class UserController extends Controller {
    async create() {
        this.ctx.body = this.ctx.request.body;
    }
}

module.exports = UserController;
