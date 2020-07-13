const User = require('./modules/user')

User.findAll().then((res) => {
    console.log(res)
})