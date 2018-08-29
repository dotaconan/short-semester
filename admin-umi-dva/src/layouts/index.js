import React from 'react';
import styles from './index.css';
import withRouter from 'umi/withRouter';

import { Layout, Menu, Icon, Button } from 'antd';
import Link from 'umi/link';

const { Header, Content, Footer } = Layout;

function LayoutGlobal({dispatch, children, location }) {
  const userLogout = () => {
    window.g_app._store.dispatch({
      type: "userLogin/doLogout"
    })
  }

  if (location.pathname === '/login') {
    return (
      <Layout className={styles.layout}>

      <Content style={{ padding: '0 100px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 500, minWidth: 1000 }}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        system ©2018 Created by <a href="https://github.com/Riunshow">Riunshow</a>
      </Footer>
    </Layout>
    )
  }

  return (
    <Layout className={styles.layout}>
      <Header style={{ minWidth: 1580 }}>
        <div className={styles.logo} />
        <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
              <Link to="/"><Icon type="home" />主页</Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <Link to="/users"><Icon type="bars" />用户管理</Link>
            </Menu.Item>
            <Menu.Item key="/articles">
              <Link to="/articles"><Icon type="form" />文章管理</Link>
            </Menu.Item>
            <Menu.Item key="/bookshelf">
              <Link to="/bookshelf"><Icon type="database" />书架管理</Link>
            </Menu.Item>
            <Menu.Item key="logout" className={styles.logout}>
              <Button type="primary" onClick={userLogout}><Icon type="poweroff" />退出</Button>
            </Menu.Item>
            <Menu.Item key="avatar" className={styles.avatar}>
              <Button type="primary"><Icon type="frown-circle" />头像</Button>
            </Menu.Item>
        </Menu>
      </Header>

      <Content style={{ padding: '0 100px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 800, minWidth: 1000 }}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        system ©2018 Created by <a href="https://github.com/Riunshow">Riunshow</a>
      </Footer>
    </Layout>
  );
}
export default withRouter(LayoutGlobal);
