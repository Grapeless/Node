/**
 * 目标：项目上线时，可以让前后端在同一个源下访问
 * 需求：让 express 支持静态（网页）资源返回
 * 核心：使用 express 内置函数 express.static() 绑定静态资源文件夹向前端暴露
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()

// 安装插件
// 将 public 目录下所有的资源托管
// 托管: 当用户请求 /index.html 时, 会自动去 public 下面查找这个文件并返回
server.use(express.static('./public'))

server.get('/api/province', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    res.send(data.toString())
  })
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})