/**
 * 目标二：压缩 js 里代码，并整合到 html 中一起运行
 *  2.1 读取 public/index.js 内容
 *  2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
 *  2.3 确认后，拼接 html 内容写入到 dist/index.html 内
 */
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
    if (err) return
    let htmlStr = data.toString().replace(/[\r\n]/g, '').replace(/\s+/g, ' ')
    // console.log(htmlStr)
    fs.readFile(path.join(__dirname, 'public/index.js'), (err, data) => {
        if (err) return
        let jsStr = data.toString().replace(/[\r\n]/g, '').replace(/console.log\(.+?\)/g, '').replace(/\s+/g, ' ')
        fs.writeFile(path.join(__dirname, 'dist/index.html'), htmlStr+`<script>${jsStr}</script>`, err => {
            console.log(err)
        })
    })
})