const mysql = require('mysql')
const MYSQL_CONNECT = require('../config/mysql-config')

const pool = mysql.createPool(MYSQL_CONNECT)

const query = (sql, val) => {
    return new Promise((res, rej) => {
        pool.getConnection((err, connection) => {
            if(err) {
                rej(err)
            } else {
                connection.query(sql, val, (err, fields) => {
                    if(err) {
                        rej(err)
                    } else {
                        res(fields)
                        connection.release()
                    }
                })
            }
        })
    })
}

module.exports = {
    query
}