const blogModel = require('../models/blog')

// 查询bloglist(分页)
const getBlogList = async (pageNum, pageSize) => {
  if (!pageNum || !pageSize) {
    return []
  }
  return await blogModel.findAll({
    offset: pageSize * (pageNum - 1),
    limit: pageSize,
  })
}

module.exports = {
  getBlogList,
}
