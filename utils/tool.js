const qs = require('qs')
const md5 = require('md5')

// 首字母转大写
const ReplaceFirstUper = (str) => {  
    str = str.toLowerCase();   
    return str.replace(/\b(\w)|\s(\w)/g, (m) => {
            return m.toUpperCase();
        }
    ); 
}

// 格式化返回函数
const formatResponse = (code, message, data) => {
    return {
        code,
        message,
        data
    }
}

// md5加密
const md5Param = (param) => {
    let str = qs.stringify(param)
    str = str.split('').map(i => i.charCodeAt(0).toString(16)).join('').toUpperCase()
    str = md5(str)
    return str
}

exports.ReplaceFirstUper = ReplaceFirstUper
exports.formatResponse = formatResponse
exports.md5Param = md5Param