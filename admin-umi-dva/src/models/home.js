import {message} from 'antd';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'home',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
        history.listen(location => {
            if (location.pathname !== '/login') {
                //权限验证通过
                if(sessionStorage.getItem('userInfo')){
                  dispatch({
                    type: 'loginSuccess',
                    payload: JSON.parse(sessionStorage.getItem('userInfo')) || {}
                });
                } else {
                    message.error('请登录后访问本系统！');
                    dispatch({
                      type: 'redirectLogin',
                    });
                }
            }
            switch(location.pathname){
              case '/login':
                document.title="登录";
              break;
              case '/':
                document.title="首页";
              break;
              case '/articles':
                document.title="文章管理";
              break;
              case '/bookshelf':
                document.title="书架管理";
              break;
              case '/users':
                document.title="用户管理";
              break;
              default:break;
              }
        });
    },
},

  effects: {
    *redirectLogin({ payload }, { put }) {
      yield put(routerRedux.push('/login'));
    },

    *redirectHome({ payload }, { put }) {
      yield put(routerRedux.push('/'));
    },
  },

  reducers: {
    loginSuccess(state, action) {
      let userInfo = action.payload;
      return { ...state, ...userInfo, isLogin: true, modalVisible: false };
    },
  },

};
