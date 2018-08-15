import { getAllUser } from '../services/userManage';
import { message } from 'antd';

export default {

    namespace: 'userManage',

    state: {
        modalVisible: false,
    },

    subscriptions: {

    },

    effects: {
        * getAllUser({ payload }, { call, put }) {
            const { data } = yield call(getAllUser);
            if (data && data.success) {
                // 获取所有用户信息成功

                yield put({
                    type: 'getAllUserSuccess',
                    payload: data.userData
                });
            }
        },
    },

    reducers: {
        getAllUserSuccess(state, action) {
            let userData = action.payload
            return {...state, ...userData };
        },
        showModal(state) {
            return {...state, modalVisible: true };
        },
        hideModal(state) {
            return {...state, modalVisible: false };
        },
    },

}