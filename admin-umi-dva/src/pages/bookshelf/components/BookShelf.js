import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Bookshelf.css';
import BookshelfModel from './BookshelfModel';

function Bookshelf({ dispatch, list: dataSource, loading, total, page: current }) {
    function deleteHandler(id) {
        dispatch({
            type: 'bookshelf/remove',
            payload: id,
        });
    }

    function pageChangeHandler(page) {
        dispatch(routerRedux.push({
            pathname: '/bookshelf',
            query: { page },
        }));
    }

    function editHandler(id, values) {
        dispatch({
            type: 'bookshelf/patch',
            payload: { id, values },
        });
    }

    function createHandler(values) {
        dispatch({
            type: 'bookshelf/create',
            payload: values,
        });
    }

    const columns = [
        {
            title: '文章类别',
            dataIndex: 'nickname',
            key: 'nickname',
            render: text => <a href="">{text}</a>,
        },
        {
            title: '注册时间',
            dataIndex: 'dateString',
            key: 'dateString',
        },  
        {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <span className={styles.operation}>
                    <BookshelfModel record={record} onOk={editHandler.bind(null, record.id)}>
                        <a>Edit</a>
                    </BookshelfModel>
                    <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
                        <a href="">Delete</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <div className={styles.normal}>
            <div>
                <div className={styles.create}>
                    <BookshelfModel record={{}} onOk={createHandler}>
                        <Button type="primary">Create Bookshelf</Button>
                    </BookshelfModel>
                </div>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={record => record.id}
                    pagination={false}
                />
                <Pagination
                    className="ant-table-pagination"
                    total={total}
                    current={current}
                    pageSize={10}
                    onChange={pageChangeHandler}
                />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    const { list, total, page } = state.bookshelf;
    return {
        list,
        total,
        page,
        loading: state.loading.models.bookshelf,
    };
}

export default connect(mapStateToProps)(Bookshelf);
