import React from 'react';
import { Form, Modal, Select } from 'antd'

const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        span: 6
    },
    wrapperCol: {
        span: 14
    }
};
const UserManageModal = ({
    visible,
    onConfirm,
    onCancel,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue
    }
}) => {
    let selectData = 0;
    function handleConfirm() {
        onConfirm(selectData);
    }

    function handleChange(value) {
        selectData = value;
      }

    const modalOpts = {
        title: '权限修改',
        visible,
        onOk: handleConfirm,
        onCancel
    };
    return (
        <Modal {...modalOpts}>
            <Form layout='horizontal'>
                <FormItem label='权限' hasFeedback {...formItemLayout}>
                    <Select defaultValue="0" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="0">管理员</Option>
                        <Option value="1">普通用户</Option>
                    </Select>
                </FormItem>
            </Form>
        </Modal>
    );
};

UserManageModal.propTypes = {
    // visible: PropTypes.any,
    // onConfirm: PropTypes.func,
    // onCancel: PropTypes.func,
    // form: PropTypes.object.isRequired
};
export default Form.create()(UserManageModal);