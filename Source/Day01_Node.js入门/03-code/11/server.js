/**
 * 目标：编写 web 服务，监听请求的是 /index.html 路径的时候，返回 dist/index.html 时钟案例页面内容
 * 步骤：
 *  1. 基于 http 模块，创建 Web 服务
 *  2. 使用 req.url 获取请求资源路径，并读取 index.html 里字符串内容返回给请求方
 *  3. 其他路径，暂时返回不存在提示
 *  4. 运行 Web 服务，用浏览器发起请求
 */

// 服务器程序:
// 1. 写数据接口  http://localhost:3000/api/province
// 2. 提供 Web 服务, 响应网页等资源, 客户端请求 HTML / css / js / 图片 / 音频 / 视频 等等资源时, 向客户端响应对应的资源数据

// 1. 基于 http 模块，创建 Web 服务
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
  if (req.url === '/index.html' || req.url === '/') {
    // 2. 使用 req.url 获取请求资源路径，并读取 index.html 里字符串内容返回给请求方
    fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => { 
      if (err) return console.log(err)
      // 4. 运行 Web 服务，用浏览器发起请求
      // application/json : 这次响应的是 JSON 字符串, 一般是写接口用的
      // text/html;charset=utf-8 : 这次响应的是 HTML 字符串, 编码为 utf-8
      // text/plain 普通文本
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data.toString())
    })
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('您访问的资源不存在')
  }
})

server.listen(8080, () => {
  console.log('Web 服务器已启动')
})