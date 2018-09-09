// import Manage from './components/manage';
import { Breadcrumb, Button, Input, message } from 'antd';
import Link from 'umi/link';

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

let articleData = {}
let articleId
function Manage({ values }) {
  if (!values) {
    values = {
      title: '',
      content: '',
    }
  }
  articleData = values;
  articleId = values._id

  const editorChange = (content) => {
    articleData.content = content
  }

  const inputChange = (event) => {
    articleData.title = event.target.value
  }

  const editorProps = {
    height: 500,
    contentFormat: 'html',
    initialContent: `${values.content}`,
    onChange: editorChange
  }

  return (
    <div>
      <Input defaultValue={values.title} onChange={inputChange}/>
      <BraftEditor {...editorProps}/>
    </div>
  )
}

const handleSubmit = () => {
  console.log(articleData)
  if (articleData.title === '' || articleData.content === '') {
    message.warning('内容不能为空');
  }else {
    articleId ?
      window.g_app._store.dispatch({
        type: "articles/patch",
        payload: {
          articleData
        }
      }) :
      window.g_app._store.dispatch({
        type: "articles/create",
        payload: articleData
      })
  }
  
}

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
            <Button onClick={handleSubmit}>修改文章</Button>
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
            <Button onClick={handleSubmit}>发表文章</Button>
          </div>
        </div>
        <Manage></Manage>
      </div>
    )
  }

}
