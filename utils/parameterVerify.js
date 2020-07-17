

const responseConfig = require('../config/responseConfig')
const Tool = require('../utils/tool')

// 校验传参
const parameterVerify = (configs, params, isVerifySign = true) => {
    const keys = Object.keys(configs)
    const length = keys.length
    for (let index = 0; index < length; index++) {
        const key = keys[index]
        const param = params[key];
        const config = configs[key]
        if(!param && config.isRequire) {
            return Tool.formatResponse(
                responseConfig.PARAM_ERROR.code,
                responseConfig.PARAM_ERROR.message
            )
        }
        if(params[key].constructor !== config.type) {
            return Tool.formatResponse(
                responseConfig.PARAM_MATCH_ERROR.code,
                responseConfig.PARAM_MATCH_ERROR.message + key
            )
        }
    }
    if(isVerifySign) {
        const data = signVerify(params)
        if(data) {
            return data
        }
    }    
    return null
}

// 校验签名
const signVerify = (data) => {
    const { sign } = data
    const param = JSON.parse(JSON.stringify(data))
    delete  param.sign
    let str = Tool.md5Param(param)
    if(sign !== str) {
        return Tool.formatResponse(
            responseConfig.TOKEN_ERROR.code,
            responseConfig.TOKEN_ERROR.message
        )
    }
}

module.exports = {
    signVerify,
    parameterVerify,
}