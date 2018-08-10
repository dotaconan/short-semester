'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  constructor(ctx) {//初始化类
    super(ctx);
    this.session = ctx.session;//将session赋值给该实例，session存储用户数据
    this.userService = ctx.service.userService;//将上下文中service赋值给该实例，方便调用
  }
  async login() {
    this.ctx.validate({//验证body（请求体）中的数据格式是否符合要求
      account: { type: 'string'},
      password: { type: 'string', min: 8, max: 20 },
      rememberMe: { type: 'boolean', required: false },
    });
    const {//把下面3个值从请求体中取出来
      account,
      password,
      rememberMe,
    } = this.ctx.request.body;
    const response = await this.userService.login(account, password);//调用Login方法，并把返回值赋值给response
    if (response.error) this.ctx.status = 403;//判断是否有错误
    if (!response.error && rememberMe) this.ctx.session.maxAge = ms('30d');//把用户有效时间设置30天
    this.ctx.body = response;//设置响应体
  }
  async logout() {
    this.ctx.session = null//清除用户数据session
    this.ctx.body = '退出成功';
  }
  async register() {
    this.ctx.validate({
      account: { type: 'string'},
      password: { type: 'string', min: 8, max: 20 },
      nickname: {type: 'string', min: 1, max: 20 , required: false },
      avatar: {type: 'url', required: false },
      signature:{type: 'string', min: 0, max: 200,required:false}
    });
    const {
      account ,
      password,
      nickname = 'guest',
      avatar = null,
      signature = '这个人很懒,什么都没有留下',
    } = this.ctx.request.body;
    // const {userList} = this.ctx.request.body;
    const response = await this.userService.register(account,password,nickname,avatar,signature);
    if (response.error) this.ctx.status = 409;
    this.ctx.body = response;
  }
  async resetPassword() {

  }
  async updateUserInfo() {
    this.ctx.validate({
      nickname: {type: 'string', min: 1, max: 20 , required: false },
      avatar: {type: 'url', required: false },
      signature:{type: 'string', min: 0, max: 200,required:false}
    });
    const uid = this.ctx.params.uid;    
    const {
      nickname = 'guest',
      avatar = null,
      signature = '这个人很懒,什么都没有留下',
    } = this.ctx.request.body;
    const response = await this.userService.updateUserInfo( uid,nickname, avatar, signature);
    this.ctx.body = response;
  }
  async getUserInfo() {
    const uid = this.ctx.params.uid;//从url拿取数据
    const response = await this.userService.getUserInfo(uid);
    if(response.error) this.ctx.state = 404;
    this.ctx.body = response;
  }
  async getRankList() {

  }
  async getShelfByID() {

  }
  async collectBook() {
      const {bid} = this.ctx.request.body;
      const {uid} = this.session.user;
      const response =await this.userService.collectBook(uid,bid);
      this.ctx.body = response;

  }
  async cancelCollectBook() {
    const {bid} = this.ctx.params;
    const {uid} = this.session.user;
    const response =await this.userService.cancelCollectBook(uid,bid);
    this.ctx.body = response;
  }
  async getAllCollection() {
    const {uid} = this.session.user;
    const response =await this.userService.getAllCollection(uid);
    this.ctx.body = response;
  }


}

module.exports = UserController;