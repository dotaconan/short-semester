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
