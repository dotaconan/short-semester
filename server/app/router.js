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
  router.post('/community',controller.communityController.createArticle);
  router.post('/user/login',controller.userController.login);
      router.get('/user/logout',controller.userController.logout);
      router.post('/user/register',controller.userController.register);
      router.put('/user/info/:uid',controller.userController.updateUserInfo);
};