import { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { nickname, sex, account, role } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title={this.props.record.id ? '编辑' : '新建'}
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="昵称"
            >
              {
                getFieldDecorator('nickname', {
                  initialValue: nickname,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="账户"
            >
              {
                getFieldDecorator('account', {
                  initialValue: account,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="性别"
            >
              {
                getFieldDecorator('sex', {
                  initialValue: sex,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="权限"
            >
              {
                getFieldDecorator('role', {
                  initialValue: role,
                })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);
