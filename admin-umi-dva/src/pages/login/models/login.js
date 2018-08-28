import { doLogin, doLogout } from './../services/login';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'userLogin',

  state: {
    username: '',
    isLogin: false,
    modalVisible: false,
    authToken: '',
    pathname: '/',
    logupModalVisible: false
  },

  subscriptions: {
    setup({ dispatch, history }) {

    },
  },

  effects: {
    * doLogin({ payload }, { call, put }) {
      let { userData, resolve, reject } = payload;
      const { data } = yield call(doLogin, userData);

      if (data && data.success) {
        let userInfo = data.userInfo;
        yield sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
        //登录成功
        yield put({
          type: 'loginSuccess',
          payload: userInfo
        });
        // 跳转到首页
        yield put(routerRedux.push('/'));

        resolve();
      } else {
        reject(data);
      }
    },
    * doLogout({ payload }, { call, put }) {
      const { data } = yield call(doLogout);

      if (data && data.success) {
        yield sessionStorage.removeItem('userInfo')
        //退出登录成功
        yield put({
          type: 'logoutSuccess',
          payload: data.userInfo
        });
        yield put(routerRedux.push('/login'));
      }
    },
  },

  reducers: {
    login(state, action) {
      return { ...state,
        modalVisible: true
      };
    },
    loginSuccess(state, action) {
      let userInfo = action.payload;
      return { ...state,
        ...userInfo,
        isLogin: true,
        modalVisible: false
      };
    },
    logoutSuccess(state, action) {
      return { ...state,
        username: '',
        authToken: '',
        isLogin: false
      };
    },
    hideModal(state) {
      return { ...state,
        modalVisible: false
      };
    },
  },

}
