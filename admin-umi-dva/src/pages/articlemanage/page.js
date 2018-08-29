import Manage from './components/manage';
import { Breadcrumb, Button } from 'antd';
import Link from 'umi/link';

export default (location) => {
  if (location.location.body) {
    return (
      <div>
        <div style={{height: 60}}>
          <div style={{float: 'left', height: 60}}>
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/articles">文章管理</Link></Breadcrumb.Item>
              <Breadcrumb.Item>修改文章</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={{float: 'right', height: 60}}>
            <Button>修改文章</Button>
          </div>
        </div>
        <Manage values={location.location.body.values}></Manage>
      </div>
    )
  }else {
    return (
      <div>
        <div style={{height: 60}}>
          <div style={{float: 'left', height: 60}}>
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/articles">文章管理</Link></Breadcrumb.Item>
              <Breadcrumb.Item>发表文章</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={{float: 'right', height: 60}}>
            <Button>发表文章</Button>
          </div>
        </div>
        <Manage></Manage>
      </div>
    )
  }

}
