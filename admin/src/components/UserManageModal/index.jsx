import React from 'react';
import { Form, Input, Modal } from 'antd'

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
    function handleConfirm() {
        let inputData = { ...getFieldsValue() };
        onConfirm(inputData);
    }

    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            handleConfirm();
        }
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
                    <Input type="text" onKeyDown={handleKeyDown} />
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