const router = require('koa-router')()
const userController = require('../controllers/userController')

router.prefix('/user')

router.post('/login', userController.login)

router.post('/register', userController.register)

module.exports = router
