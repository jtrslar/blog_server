const router = require('koa-router')()
const koaReq = require('koa2-request')
const marked = require('marked')
// 暂时假装是真实数据
const resData = [
  {
    id: 1,
    file: 'test1.md',
    name: '测试1MD',
  },
  {
    id: 2,
    file: 'test2.md',
    name: '测试2MD',
  },
  {
    id: 3,
    file: 'test3.md',
    name: '测试3MD',
  },
  {
    id: 4,
    file: 'test4.md',
    name: '测试4MD',
  },
  {
    id: 5,
    file: 'test5.md',
    name: '测试5MD',
  },
  {
    id: 6,
    file: 'test6.md',
    name: '测试6MD',
  },
]

markedOPtion = {}

router.post('/api/blogList', async (ctx, next) => {
  const params = ctx.request.body

  const { pageNum, pageSize } = params
  ctx.body = resData.slice(pageSize * (pageNum - 1), pageSize * pageNum)
})

router.post('/api/blogContent', async (ctx, next) => {
  const params = ctx.request.body

  // 使用params ===>>> {bolgId: xxx}来查询库中文件的名字, 来拼到链接后面

  // markdown文件的链接前缀(暂时使用假链接)
  const mdFileUrl = 'http://localhost:8010/file/md/test.md'
  const { body: file } = await koaReq({
    url: mdFileUrl,
    method: 'get',
  })

  ctx.body = {
    file,
  }
})

module.exports = router
