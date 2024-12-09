/**
 * 目标：基于 Web 服务，开发-省份列表数据接口
 * 步骤：
 *  1. 创建 Web 服务
 *  2. 使用 req.url 获取请求的资源路径，读取 json 文件数据返回
 *  3. 其他请求的路径，暂时返回不存在的提示
 *  4. 运行 Web 服务，用浏览器请求地址查看效果
 */

// 1. 创建 Web 服务
const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer()

server.on('request', (req, res) => {
  // 2. 使用 req.url 获取请求的资源路径，读取 json 文件数据返回
  // console.log('有人来请求了:', req.url)
  // 如果请求 /api/province 就去读取 json 文件数据
  if (req.url === '/api/province') {
    fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
      if (err) return console.log(err)
      // 不要忘了设置响应头
      res.setHeader('Content-Type', 'application/json')
      // 响应读到的 json 数据
      res.end(data.toString())
    })
  } else {
    // 其他情况响应找不到该资源
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('找不到该资源')
  }
})

server.listen(3000, () => {
  console.log('Web 服务器已启动')
})