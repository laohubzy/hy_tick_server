const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize')

const sequelize = require('./config')
const Tool = require('../utils/tool')

// model 目录绝对路径
const modelPath = path.resolve(__dirname, './db');
// 读取所有 model 文件
const files = fs.readdirSync(modelPath);

const db = {};
// 将 model 挂到 db 上
files.forEach(fileName => {
    console.log('xxx')
  let modelName = Tool.ReplaceFirstUper(fileName.slice(0, -3));
  db[modelName] = require(path.resolve(modelPath, fileName))(sequelize, Sequelize)
  db[modelName].sync({
    force: true
  })
});


module.exports = db;