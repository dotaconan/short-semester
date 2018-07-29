import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import styles from './index.css';

import NavLink from './../../components/NavLink/index.jsx'

const { Header, Sider } = Layout;

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.home.activeIndex.toString()]}>
            <Menu.Item key="1">
              <NavLink target="/test1" linkText={<span><Icon type="user" /><span>测试路由1</span></span>} />
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink target="/test2" linkText={<span><Icon type="user" /><span>测试路由2</span></span>} />
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink target="/test3" linkText={<span><Icon type="user" /><span>测试路由3</span></span>} />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <div style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </div>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps({home}) {
  return {home};
}

export default connect(mapStateToProps)(HomePage);