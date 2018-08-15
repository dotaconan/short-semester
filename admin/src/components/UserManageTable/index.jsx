import React from 'react';
import {connect} from 'dva';
// import {routerRedux} from 'dva/router'
import {Table, Divider, Button} from 'antd';

import UserManageModal from './../UserManageModal/index.jsx'

const UserManageTable = ({userManage, dispatch}) => {
    const {modalVisible} = userManage;

    const data = []

    for (const key in userManage) {
        if (key !== 'modalVisible') {
            data.push(userManage[key])
        }
    }

    const changeAuth = () => {
		dispatch({type: 'userManage/showModal'});
    };
    
    const UserManageModalProps = {
        visible: modalVisible,
        onConfirm(inputData) {
            console.log('inputData: ', inputData);
            dispatch({type: 'userManage/hideModal'});
        },
        onCancel() {
            dispatch({type: 'userManage/hideModal'});
        }
    };

    const UserManageModalGen = () => (<UserManageModal {...UserManageModalProps}/>);

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
                    <a onClick={changeAuth}>权限修改</a>
                    <UserManageModalGen />
                    <Divider type="vertical"/>
                    <a href="javascript:;">Delete</a>
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