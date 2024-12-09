/**
 * 目标：基于 express 软件包，开发提供省份列表的数据接口
 * 要求：get 请求方法，/api/province 的请求路径
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()

// 用户使用 get 请求 /api/province 时才返回数据
server.get('/api/province', (req, res) => {
  // 读取省份数据并返回
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    if (err) return console.log(err)
    res.send(data.toString())
  })
})

// * 表示所有路径
server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})