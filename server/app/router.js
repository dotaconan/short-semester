'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/zxy/:id', controller.home.index);//查询
  router.post('/form', controller.home.form);//表单传递参数
  router.post('/user', controller.user.create);//表单验证
  router.get('/ccc',controller.comment.index);
  router.redirect('/','/ccc', 302);//重定向-页面跳转
  router.get('/test/:id',controller.user.info);
  
};