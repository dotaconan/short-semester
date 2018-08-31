function getCtx (selector) {
  const pages = getCurrentPages()
  const ctx = pages[pages.length - 1]

  const componentCtx = ctx.selectComponent(selector)

  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件')
    return null
  }
  return componentCtx
}

function Toast (options) {
  const { selector = '#toast' } = options
  const ctx = getCtx(selector)

  ctx.handleShow(options)
}

Toast.hide = function (selector = '#toast') {
  const ctx = getCtx(selector)

  ctx.handleHide()
}

function Message (options) {
  const { selector = '#message' } = options
  const ctx = getCtx(selector)

  ctx.handleShow(options)
}

function formatTime (date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  $Toast: Toast,
  $Message: Message,
  $formatTime: formatTime
}
