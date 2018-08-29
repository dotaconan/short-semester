import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Input } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

function articleManage({ dispatch, values }) {
  if (!values) {
    values = {
      title: '',
      content: '',
    }
  }

  const editorProps = {
    height: 500,
    contentFormat: 'html',
    initialContent: `${values.content}`,
    onChange: handleChange,
    onRawChange: handleRawChange
  }

  const handleChange = (content) => {
    console.log(content)
  }

  const handleRawChange = (rawContent) => {
    console.log(rawContent)
  }

  return (
    <div>
      <Input placeholder={values.title} />
      <BraftEditor {...editorProps}/>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(articleManage);
