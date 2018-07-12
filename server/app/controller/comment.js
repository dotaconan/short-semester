'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
    async index() {
        this.ctx.body = 'this is comment';
    }
}

module.exports = CommentController;
