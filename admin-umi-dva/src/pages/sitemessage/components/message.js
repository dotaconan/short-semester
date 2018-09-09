import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button, Modal } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './message.css';

function Articles({ dispatch }) {
	const columns = [{
			title: '消息内容',
			dataIndex: 'name',
	  }, {
			title: '发生时间',
			dataIndex: 'date',
	  }, {
			title: '消息类型',
			dataIndex: 'type',
	  }];

	  const data = [{
				name: 'John Brown',
				date: '2017/04/24',
				type: '产品消息'
			}, {
				name: 'John Brown',
				date: '2017/04/24',
				type: '产品消息'
			}, {
				name: 'John Brown',
				date: '2017/04/24',
				type: '产品消息'
			}, {
				name: 'John Brown',
				date: '2017/04/24',
				type: '产品消息'
		}];
	  
	  // rowSelection object indicates the need for row selection
	  const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
		  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: record => ({
		  disabled: record.name === 'Disabled User', // Column configuration not to be checked
		  name: record.name,
		}),
	  };

  return (
    <div className={styles.normal}>
      <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
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
