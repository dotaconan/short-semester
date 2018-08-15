import React from 'react';
import {connect} from 'dva';
// import {routerRedux} from 'dva/router'
import {Table, Divider} from 'antd';

import UserManageModal from './../UserManageModal/index.jsx'
let clickUserId = 0;

const UserManageTable = ({userManage, dispatch}) => {
    const {modalVisible} = userManage;

    let data = []

    for (const key in userManage) {
        if (key !== 'modalVisible') {
            data.push(userManage[key])
        }
    }

    const changeAuth = (userId) => {
        clickUserId =  userId;
		dispatch({type: 'userManage/showModal'});
    };

    const deleteUser = (userID) => {
		dispatch({
            type: 'userManage/deleteUser',
            payload: {
                userID: userID
            }
        });
    }
    
    const UserManageModalProps = {
        visible: modalVisible,
        onConfirm(authId) {
            let changeData = {
                authId: authId,
                clickUserId: clickUserId
            }
            dispatch({
                type: 'userManage/changeAuth',
                payload: changeData
            });
        },
        onCancel() {
            dispatch({type: 'userManage/hideModal'});
        }
    };

    const columns = [
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex'
        }, {
            title: '权限',
            dataIndex: 'auth',
            key: 'auth'
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a onClick={() => changeAuth(record.id)}>权限修改</a>
                    <UserManageModal {...UserManageModalProps}/>
                    <Divider type="vertical"/>
                    <a onClick={() => deleteUser(record.id)}>Delete</a>
                </span>
            )
        }
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data}/>
        </div>
    );
}

function mapStateToProps({userManage}) {
    return {userManage};
}

export default connect(mapStateToProps)(UserManageTable);