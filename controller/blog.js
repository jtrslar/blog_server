const blogService = require('../service/blog')
const koaReq = require('koa2-request')
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
    // markdown文件的链接前缀(暂时使用假链接)
  const mdFileUrl = `http://121.5.23.189:8010/file/md/${dataValues.file}`
  const {body:fileDetail} = await koaReq({
    url: mdFileUrl,
    method: 'get',
  })
  dataValues.fileDetail = fileDetail
  ctx.body = dataValues
}

module.exports = {
  getBlogList,
  getBlogById
}
