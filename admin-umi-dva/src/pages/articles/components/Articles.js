import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button, Modal } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Articles.css';

function Articles({ dispatch, list: dataSource, loading, total, page: current }) {
  function deleteHandler(id) {
    dispatch({
      type: 'articles/remove',
      payload: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/articles',
      query: { page },
    }));
  }

  function editHandler(id, values) {
    dispatch(routerRedux.push({
      pathname: '/articlemanage',
      body: { values },
    }))
  }

  function createHandler() {
    dispatch(routerRedux.push('/articlemanage'))
  }

  function info(value) {
    Modal.info({
      title: `${value.title}`,
      content: (
        <div dangerouslySetInnerHTML={{
          __html: `${value.content}`
        }}/>
      ),
      onOk() {},
    });
  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '点赞数',
      dataIndex: 'like',
      key: 'like',
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <a onClick={() => editHandler(record.id, record)}>Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
          <a onClick={() => info(record)}>view</a>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.create}>
          <Button onClick={createHandler} type="primary">Create Article</Button>
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
  const { list, total, page } = state.articles;
  return {
    list,
    total,
    page,
    loading: state.loading.models.articles,
  };
}

export default connect(mapStateToProps)(Articles);
