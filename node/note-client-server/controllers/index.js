// 实现连接数据库的功能
// 导入模块
const mysql = require('mysql2/promise')
const { database } = require('../config/index.js')

// 创建连接池，设置连接池的参数
const pool = mysql.createPool(database)

// 可以连接数据库的方法
const allService = {
  async query(sql) {
    try {
      // 通过连接池连接数据库
      const conn = await pool.getConnection()
      // 对该连接进行某些操作
      // rows是查询到的数据，err是错误信息
      const [rows, err] = await conn.query(sql)
      // 释放连接
      pool.releaseConnection(conn)
      // 返回查询到的数据
      return Promise.resolve(rows)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

// 登录
const userLogin = (username, password) => {
  const _sql = `select * from users where username="${username}" and password="${password}"`
  return allService.query(_sql)
}

module.exports = {
  userLogin
}