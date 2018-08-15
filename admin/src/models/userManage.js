import { getAllUser, changeAuth, deleteUser } from '../services/userManage';
// import { message } from 'antd';

export default {

    namespace: 'userManage',

    state: {
        modalVisible: false
    },

    subscriptions: {},

    effects: {
        * getAllUser({
            payload
        }, { call, put }) {
            const { data } = yield call(getAllUser);
            if (data && data.success) {
                // 获取所有用户信息成功

                yield put({ type: 'getAllUserSuccess', payload: data.userData });
            }
        },
        * changeAuth({
            payload
        }, { call, put }) {
            let { authId, clickUserId } = payload;
            let changeData = {
                authId: authId,
                userId: clickUserId
            }
            const { data } = yield call(changeAuth, changeData);
            if (data && data.success) {
                // 获取所有用户信息成功
                yield put({ type: 'getAllUserSuccess', payload: data.userData });
            }
        },
        * deleteUser({
            payload
        }, { call, put }) {
            let { userID } = payload;

            const { data } = yield call(deleteUser, { userID: userID });
            if (data && data.success) {
                // 获取所有用户信息成功
                yield put({ type: 'getAllUserSuccess' });
            }
        }
    },

    reducers: {
        getAllUserSuccess(state, action) {
            let userData = action.payload

            for (const key in userData) {
                switch (parseInt(userData[key].auth)) {
                    case 0:
                        userData[key].auth = '管理员'
                        break;
                    case 1:
                        userData[key].auth = '普通用户'
                        break;
                    default:
                        break;
                }
                switch (parseInt(userData[key].sex)) {
                    case 0:
                        userData[key].sex = '男'
                        break;
                    case 1:
                        userData[key].sex = '女'
                        break;
                    default:
                        break;
                }
            }
            return {
                ...state,
                ...userData,
                modalVisible: false
            };
        },
        showModal(state) {
            return {
                ...state,
                modalVisible: true
            };
        },
        hideModal(state) {
            return {
                ...state,
                modalVisible: false
            };
        }
    }
}