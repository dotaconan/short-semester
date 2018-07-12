'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg'+this.ctx.params.id +this.ctx.query.name;
  }
  async form(){
    this.ctx.body= `body: ${JSON.stringify(this.ctx.request.body)}`;
  }
}

module.exports = HomeController;
