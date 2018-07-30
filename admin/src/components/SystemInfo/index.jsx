import React from 'react';
import { Button, Avatar, Modal } from 'antd';
import {connect} from 'dva';
import LoginModal from './../LoginModal/index.jsx';
import {systemInfo, userInfo, userName, loginButton} from './index.css';
import { routerRedux } from 'dva/router'


const SystemInfo = ({systemUser, dispatch}) => {
	const { isLogin, username, modalVisible } = systemUser;	
	const loginClick = () => {
		dispatch({
			type: isLogin ? 'systemUser/doLogout' : 'systemUser/login'
		});
		dispatch(routerRedux.push('/'));
	};

	const loginModalProps = {
		visible: modalVisible,
		onConfirm(userData){
			new Promise(function(resolve, reject){
				dispatch({
					type: 'systemUser/doLogin',
					payload: {
						userData,
						resolve,
						reject
					}
				});
			}).then(null, (data)=>{
				Modal.error({
					title: '错误提示',
					content: <p style={{fontSize: 14}}>用户名 或 密码 错误！</p>
				});
			});
		},
		onCancel(){
			dispatch({
				type: 'systemUser/hideModal'
			});
		}
	};

	const LoginModalGen = () => (<LoginModal {...loginModalProps}/>);

	return (
		<div className={systemInfo}>
			<span className={userInfo}>
                <span className={userName}>
                    {
                        isLogin ? 
                        <span><Avatar style={{marginRight: '4px'}} size="small" icon="user" /> {username} </span> : null
                    }
                </span>
                <Button type="primary" className={loginButton} onClick={loginClick}>{isLogin ? "退出" : "登录"}</Button>
            </span>
			<LoginModalGen />
		</div>
	);
};

function mapStateToProps({systemUser}) {
	return {systemUser};
}

export default connect(mapStateToProps)(SystemInfo);