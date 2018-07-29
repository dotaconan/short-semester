import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'

class TestPage extends React.Component {　

  render() {
    return (
      <div onClick={() => {this.props.dispatch(routerRedux.push('/supplier'))}}>
        当前页路由 {this.props.location.pathname}
      </div>
    )
  }


}

export default connect()(TestPage);