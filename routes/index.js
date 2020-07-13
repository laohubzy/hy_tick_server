const router = require('koa-router')()
const Model = require('../model')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  console.log('Model', Model.User)
  let data = await Model.User.build({
  });
  ctx.body = data
})

module.exports = router
