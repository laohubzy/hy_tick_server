module.exports = {
    SUCCESS: {
        code: 200,
        message: '请求成功'
    },
    FAIL: {
        code: 0,
        message: '请求失败'
    },

    TOKEN_ERROR: {
        code: 1000,
        message: '签名错误'
    },
    NO_PERMISSION: {
        code: 2000,
        message: '无操作权限'
    },
    PARAM_ERROR: {
        code: 3000,
        message: '参数不得为空'
    },
    PARAM_MATCH_ERROR: {
        code: 4000,
        message: '参数类型不匹配'
    },    
}