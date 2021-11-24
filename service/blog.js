const blogModel = require('../models/blog')

// 查询bloglist(分页)
const getBlogList = async (pageNum, pageSize) => {
  return await blogModel.findAll({
    offset: pageSize * (pageNum - 1),
    limit: pageSize,
  })
}

// 根据id查询blog
const getBlogById = async (id) => {
  return await blogModel.findOne({
    where: {id}
  })
}

module.exports = {
  getBlogList,
  getBlogById
}
