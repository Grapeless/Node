/**
 * 目标二：压缩 js 里代码，并整合到 html 中一起运行
 *  2.1 读取 public/index.js 内容
 *  2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
 *  2.3 确认后，拼接 html 内容写入到 dist/index.html 内
 */
// 导入模块
const fs = require('fs')
const path = require('path')

// 1.1 读取 public/index.html 内容
fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
  // 如果有错误就阻止往后执行
  if (err) return console.log(err)
  // console.log(data.toString())
  const htmlStr = data.toString() 
  // 1.2 使用正则替换内容字符串里的，回车符\r 换行符\n
  const htmlResult = htmlStr.replace(/[\r\n]/g, '').replace(/\s+/g, ' ')
  // 2.1 读取 public/index.js 内容
  fs.readFile(path.join(__dirname, 'public/index.js'), (err, data) => {
    if (err) return console.log(err)
    // 2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
    // console.log(data.toString())
    const jsStr = data.toString()
    // + 所有量词默认都是贪婪模式
    // 贪婪模式: 匹配到之后还会继续匹配, 如果后续依然有相同的字符, 才会结束匹配, 中间的所有字符都会匹配上
    // 关闭贪婪模式只需要在量词后面加一个 ?
    const jsResult = jsStr.replace(/[\r\n]/g, '').replace(/\s+/g, ' ').replace(/console.log\(.+?\)/g, '')
    // console.log(`<script>${jsResult}</script>`)
    // 1.3 确认后，写入到 dist/index.html 内
    // 2.3 确认后，拼接 html 内容写入到 dist/index.html 内
    fs.writeFile(path.join(__dirname, 'dist/index.html'), htmlResult + `<script>${jsResult}</script>`, err => {
      console.log(err)
    })
  })
})

// 拓展作业:
// 自行封装一个读取文件的函数 read, 实现以下效果:

// read(path.join(__dirname, 'public/index.html')).then(data => {}).catch(err => {})
// const htmlData = await read(path.join(__dirname, 'public/index.html'))
// const htmlStr = htmlData.toString()
// const jsData = await read(path.join(__dirname, 'public/index.js'))
// const jsStr = jsData.toString()
// const htmlResult = htmlStr.replace(/[\r\n]/g, '').replace(/\s+/g, ' ')
// const jsResult = jsStr.replace(/[\r\n]/g, '').replace(/\s+/g, ' ').replace(/console.log\(.+?\)/g, '')
// fs.writeFile(path.join(__dirname, 'dist/index.html'), htmlResult + `<script>${jsResult}</script>`, err => {
//   console.log(err)
// })
// function read() {}
