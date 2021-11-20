const router = require('koa-router')()
const koaReq = require('koa2-request')
const marked = require('marked')

// router.post('/api/blogList', async (ctx, next) => {
//   const params = ctx.request.body

//   const { pageNum, pageSize } = params
//   ctx.body = resData.slice(pageSize * (pageNum - 1), pageSize * pageNum)
// })

// router.post('/api/blogContent', async (ctx, next) => {
//   const params = ctx.request.body

//   // 使用params ===>>> {bolgId: xxx}来查询库中文件的名字, 来拼到链接后面

//   // markdown文件的链接前缀(暂时使用假链接)
//   const mdFileUrl = 'http://localhost:8010/file/md/test.md'
//   const { body: file } = await koaReq({
//     url: mdFileUrl,
//     method: 'get',
//   })

//   ctx.body = {
//     file,
//   }
// })

module.exports = router
