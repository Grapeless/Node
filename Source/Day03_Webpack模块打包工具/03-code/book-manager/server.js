// 包名的要求:
// 不能有中文, 不要用驼峰
// 标准规范应该用 - 连接多个单词, 而不是用 _ 或驼峰命名
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const server = express()
server.use(cors())
// 让你的服务器支持解析 application/json 格式的请求
server.use(express.json()) // for parsing application/json
// 让你的服务器支持解析 x-www-form-urlencoded 格式的请求
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 监听 post 请求
server.post('/api/books', (req, res) => {
  // console.log(req.query)
  // console.log(req.params)
  // console.log(req.body)
  // 都应该对参数进行严格的校验, 使用最朴素的方法来校验
  if (!req.body.bookname) {
    res.status(400)
    res.send({
      message: '请传入 bookname 参数'
    })
    return
  }
  // 1. 读取数据
  fs.readFile(path.join(__dirname, 'data/book.json'), (err, data) => {
    // 2. 转成对象
    const arr = JSON.parse(data.toString())
    // 3. 往数组里按照格式 push 一个新对象
    console.log(arr)
    const obj = {
      id: arr[arr.length - 1].id + 1,
      bookname: req.body.bookname,
      author: req.body.author,
      publisher: req.body.publisher,
      createdAt: new Date(),
      updateAt: new Date()
    }
    // console.log(obj)
    arr.push(obj)
    // 4. 数据回写
    fs.writeFile(path.join(__dirname, 'data/book.json'), JSON.stringify(arr), () => {
      console.log('写入成功')
      res.send({
        message: '添加图书成功',
        data: obj
      })
    })
  })
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('您要访问的资源不存在')
})

server.listen(3000, () => {
  console.log('服务已启动')
})