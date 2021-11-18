const router = require('koa-router')()

// 暂时假装是真实数据
const resData = [
  {
    id: 1,
    file: 'test1.md',
    name: '测试1MD'
  },
  {
    id: 2,
    file: 'test2.md',
    name: '测试2MD'
  },
  {
    id: 3,
    file: 'test3.md',
    name: '测试3MD'
  },
  {
    id: 4,
    file: 'test4.md',
    name: '测试4MD'
  },
  {
    id: 5,
    file: 'test5.md',
    name: '测试5MD'
  },
  {
    id: 6,
    file: 'test6.md',
    name: '测试6MD'
  },
]

router.post('/file/md', async (ctx, next) => {
  const params = ctx.request.body
 
  const {pageNum, pageSize} = params
  if(pageNum && pageSize){
    let res = resData.slice(pageSize*(pageNum-1), pageSize*pageNum)
    console.log('res loading is ===>>> ', res)
    ctx.body = {
      code: 200,
      data: res,
      msg: 'success'
    }
  }else{
    ctx.response.status = 500
  }
})

module.exports = router
