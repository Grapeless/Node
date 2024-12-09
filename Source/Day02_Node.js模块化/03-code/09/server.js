/**
 * 目标：基于 express 软件包，开发 Web 服务返回资源给客户端
 * 1. 下载 express 软件包
 * 2. 导入 express 并创建服务对象
 * 3. 监听请求方法和请求路径
 * 4. 对其他路径返回 404 提示 (设置状态码)
 * 5. 设置监听端口号
*/

// 2. 导入 express 并创建服务对象
const express = require('express')
const server = express()

// 监听 get 请求
// server.get
server.get('/', (req, res) => {
  // 全自动帮你设置请求头
  res.send('你好世界')
})

server.get('*', (req, res) => {
  // 修改状态码
  res.status(404)
  // 响应文本内容
  res.send('您访问的资源不存在')
})

// 开启服务
server.listen(3000, () => {
  console.log('服务器已启动')
})