import { Component } from 'react';
import { Modal, Form, Input, DatePicker } from 'antd';

const FormItem = Form.Item;

class BookshelfEditModal extends Component {

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
        const { nickname, dateString } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        // const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        return (
            <span>
                <span onClick={this.showModelHandler}>
                    {children}
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
                            label="文章类别"
                        >
                            {
                                getFieldDecorator('nickname', {
                                    initialValue: nickname,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="注册时间"
                        >
                            {
                                getFieldDecorator('account', {
                                    initialValue: dateString,
                                })(<DatePicker onChange={onChange}/>)
                            }
                        </FormItem>
                        
                    </Form>
                </Modal>
            </span>
        );
    }
}


export default Form.create()(BookshelfEditModal);
