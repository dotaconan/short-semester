import { doLogin, doLogout } from '../services/user';
import {message} from 'antd';
import { routerRedux } from 'dva/router';

export default {

    namespace: 'systemUser',

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
            history.listen(location => {
                if (location.pathname !== '/') {
                    //权限验证通过
                    if(sessionStorage.getItem('userInfo')){
                        dispatch({
                            type: 'loginSuccess',
                            payload: JSON.parse(sessionStorage.getItem('userInfo')) || {}
                        });
                    } else {
                        message.error('请登录后访问本系统！');
                        dispatch({
                            type: 'redirect',
                        });
                    }
                }
            });
        },
    },

    effects: {
        *doLogin({ payload }, { call, put }) {
            let {
                userData,
                resolve,
                reject
            } = payload;
			yield put({ type: 'showLoading' });
			const { data } = yield call(doLogin, userData);
            if (data && data.success) {
                let userInfo = data.userInfo;
                yield sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                //登录成功
                yield put({
                    type: 'loginSuccess',
                    payload: userInfo
                });
                resolve();
            } else {
                reject(data);
            }
        },
        *doLogout({ payload }, { call, put }) {
            const { data } = yield call(doLogout);
            if (data && data.success) {
                yield sessionStorage.removeItem('userInfo')
                //退出登录成功
                yield put({
                    type: 'logoutSuccess',
                    payload: data.userInfo
                });
            }
        },
        // 路由跳转
        *redirect({ payload }, { put }) {
            yield put(routerRedux.push('/'));
        },
    },

    reducers: {
        login(state, action) {
            return { ...state, modalVisible: true };
        },
        loginSuccess(state, action) {
            let userInfo = action.payload;
            return { ...state, ...userInfo, isLogin: true, modalVisible: false };
        },
        logoutSuccess(state, action) {
            return { ...state, username: '', authToken: '', isLogin: false };
        },
        hideModal(state) {
            return { ...state, modalVisible: false };
        },
    },

}
