import React from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router'
import { Table, Icon, Divider,Modal, Button } from 'antd';

class UserManage extends React.Component {
    constructor(props) {
      super(props)
      props.dispatch({
        type: 'userManage/getAllUser'
      });
      console.log(props);
    }

    state = { 
      visible: false,
      data: [],
    }
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }

    columns = [{
        title: '名字',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
      }, {
        title: '权限',
        dataIndex: 'auth',
        key: 'auth',
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={this.showModal}>Open</Button>
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
        ),
      }];

      data = [{
        key: '1',
        name: 'John Brown',
        sex: 0,
        auth: 0,
    }, {
        key: '2',
        name: 'Jim Green',
        sex: 0,
        auth: 1,
    }, {
        key: '3',
        name: 'Joe Black',
        sex: 0,
        auth: 2,
    }];
  
    render() {
      return (
        <div>
            <Table columns={this.columns} dataSource={this.data} />
        </div>
      );
    }
  }


function mapStateToProps({userManage}) {
	return {userManage};
}

export default connect(mapStateToProps)(UserManage);