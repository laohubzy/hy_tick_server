// 查询表数据
const QUERY_TABLE = (tableName, where) => {
    return where ? `SELECT * FROM ${tableName}` : `SELECT * FROM ${tableName} WHERE ${where}`
}

// 插入数据 INSERT INTO USER(user_name, user_password) VALUES('wsy', '2233')
const INSERT_TABLE = (tableName, keys, vals) => {
    if(typeof keys === 'string') {
        return `INSERT INTO ${tableName}(${keys}) VALUES (${vals})`
    }
    `INSERT INTO ${tableName}(${keys.join(',')}) VALUES (${vals.join(',')})`
}

// 选择：select * from table1 where 范围
// 插入：insert into table1(field1,field2) values(value1,value2)
// 删除：delete from table1 where 范围
// 更新：update table1 set field1=value1 where 范围
// 查找：select * from table1 where field1 like ’%value1%’ ---like的语法很精妙，查资料!
// 排序：select * from table1 order by field1,field2 [desc]
// 总数：select count as totalcount from table1
// 求和：select sum(field1) as sumvalue from table1
// 平均：select avg(field1) as avgvalue from table1
// 最大：select max(field1) as maxvalue from table1
// 最小：select min(field1) as minvalue from table1

module.exports = {
    QUERY_TABLE,
    INSERT_TABLE
}