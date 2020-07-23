
const Model = require('../model')
const Tool = require('../utils/tool')
const userParam = require('../pramater/user')
const responseConfig = require('../config/responseConfig')
const { parameterVerify } = require('../utils/parameterVerify')


const login = async (ctx) => {
    const data = parameterVerify(userParam.login, ctx.request.body, false)
    if (data) {
        ctx.body = data
        return
    }
    const { password, userName } = ctx.request.body
    const user = await Model.User.findOne(
        {
            where: { user_name: userName, }
        }
    )
    if (user) {
        ctx.body = Tool.formatResponse(responseConfig.SUCCESS.code, '登录成功', {
            token: Tool.md5Param({ password, userName }),
            userId: user.user_id,
            userName: user.user_name
        })
        return
    }

    ctx.body = Tool.formatResponse(responseConfig.FAIL.code,'登录失败')

}

const register = async (ctx) => {
    const data = parameterVerify(userParam.login, ctx.request.body, false)
    if (data) {
        ctx.body = data
        return
    }
    const { password, userName } = ctx.request.body
    try {
        let user = await Model.User.findOne({ where: { user_name: userName } })
        console.log(userName)
        if (user) {
            ctx.body = Tool.formatResponse(responseConfig.FAIL.code,'用户名重复')
            return
        }
        await Model.User.create({
            user_name: userName,
            user_password: password,
        })    
        ctx.body = Tool.formatResponse(responseConfig.SUCCESS.code, '注册成功')         
    } catch (error) {
        ctx.body = Tool.formatResponse(responseConfig.FAIL.code,'注册失败')
    }
}

module.exports = {
    login,
    register
}
