const blogService = require('../service/blog')
const serverConfig = require('../config/database.json')
const fs = require('fs')

const marked = require('marked')

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

const getBlogById = async (ctx)=>{
  const {id} = ctx.request.body
  if(!id){
    ctx.body = {
      code: 500,
      msg: '参数错误',
    }
    return
  }

  const {dataValues} = await blogService.getBlogById(id)
  const file = fs.readFileSync(`${serverConfig.filePath}/${dataValues.file}`)
  dataValues.fileDetail = file.toString()
  ctx.body = dataValues
}

module.exports = {
  getBlogList,
  getBlogById
}
