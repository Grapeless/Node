/**
 * 目标：使用 fs 模块，读写文件内容
 * 语法：
 * 1. 引入 fs 模块
 * 2. 调用 writeFile 写入内容
 * 3. 调用 readFile  读取内容
 */

// 1. 引入 fs 模块
const fs = require('fs')

// 2. 调用 writeFile 方法写入内容
// 语法:
// fs.writeFile('路径', '内容', 回调函数)
// fs.writeFile('text.txt', '我努力写入的世界', err => {
//   console.log(err)
// })

// 3. 调用 readFile 方法读取内容
// 语法:
// fs.readFile('路径', 回调函数)
fs.readFile('text.txt', (err, data) => {
  console.log(err) // null
  // Buffer 是数据流, 因为在磁盘上读取的数据就是由二进制组成的, 我们平时看到的数据都是有编码的
  // 硬盘中的文件可能是各种各样的数据: 文本 / 视频 / 音频
  // 将数据流转成字符串
  console.log(data.toString())
})