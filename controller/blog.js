const blogService = require('../service/blog')

const getBlogList = async (ctx) => {
  const { pageNum, pageSize } = ctx.request.body
  if (!pageSize || !pageNum) {
    ctx.body = {
      code: 500,
      msg: '参数错误',
    }
    return
  }
  ctx.body = await blogService.getBlogList(pageNum, pageSize)
}

module.exports = {
  getBlogList,
}
