const Sequelize = require('sequelize')

const mysqlConfig = {
    database: 'web',
    user: 'root',
    password: '123456',
    host: '175.24.45.21',
    port: 3306
}

const sequelize = new Sequelize(
    mysqlConfig.database,
    mysqlConfig.user,
    mysqlConfig.password,
    {
        host: mysqlConfig.host,
        port: mysqlConfig.port,
        dialect:'mysql',
        dialectOptions:{
            //字符集
            charset:'utf8mb4',
            collate:'utf8mb4_unicode_ci',
            supportBigNumbers: true,
            bigNumberStrings: true
        },
        pool:{
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        timezone: '+08:00'  //东八时区
    }
);

// async function testConnect() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

 
module.exports = sequelize;