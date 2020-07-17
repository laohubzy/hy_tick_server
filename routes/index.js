const router = require('koa-router')()
const Model = require('../model')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/getUser', async (ctx, next) => {
  const users = await Model.User.findAll()
  ctx.body = users
})

router.get('/json', async (ctx, next) => {
  let users = await Model.User.bulkCreate([{
    user_name: 'ask来得及',
    user_password: 123,
  },
  {
    user_name: '1255',
    user_password: 123,
  }]);
//  let users = await Model.User.findOrCreate(
//     {where:{
//       user_name: '王诗雨',
//       user_password: 123,
//     }}
//   )
// let users = await Model.User.findAll({
//   where: {
//     user_name: 'huya',
//   }
// })
  
  console.log(JSON.parse(JSON.stringify(users)));  
  ctx.body = users
})

module.exports = router
