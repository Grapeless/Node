/**
 * 目标：读取 test.txt 文件内容
 * 注意：代码中，使用绝对路径
 * 原因：Node.js 执行时会以终端所在文件夹作为相对路径，去拼接代码中路径使用（导致找不到目标文件）
 * 解决：使用 path.join() 和 __dirname 来填写要查找的目标文件绝对地址
 */

// 1. 引入 fs 和 path 模块
const fs = require('fs')
const path = require('path')
// 由于使用的是相对路径, 它相对的是命令执行的路径, 而不是当前文件所在的路径
// 最佳解决方案: 使用绝对路径
// fs.readFile('../text.txt', (err, data) => {
//   console.log(err) // null
//   console.log(data.toString())
// })

// __dirname: 内置全局变量, 表示当前文件所在的目录(绝对路径)
// console.log(__dirname)
// console.log(path.join(__dirname, 'a.txt'))
// console.log(path.join(__dirname, '../text.txt'))

fs.readFile(path.join(__dirname, '../text.txt'), (err, data) => {
  console.log(err) // null
  console.log(data.toString())
})