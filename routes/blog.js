const router = require('koa-router')()
const blogController = require('../controller/blog')

router.prefix('/api/blog')

router.post('/list', blogController.getBlogList)
router.post('/content', blogController.getBlogById)

module.exports = router
