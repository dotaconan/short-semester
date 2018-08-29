import { connect } from 'dva';
import { Input } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

function articleManage({ values }) {
  if (!values) {
    values = {
      title: '',
      content: '',
    }
  }

  const handleChange = (content) => {
    console.log(content)

  }

  const editorProps = {
    height: 500,
    contentFormat: 'html',
    initialContent: `${values.content}`,
    onChange: handleChange,
    onRawChange: handleRawChange
  }

  return (
    <div>
      <Input defaultValue={values.title} />
      <BraftEditor {...editorProps}/>
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(articleManage);
