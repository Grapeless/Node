/**
 * 目标一：压缩 html 里代码
 * 需求：把 public/index.html 里的，回车/换行符去掉，写入到 dist/index.html 中
 *  1.1 读取 public/index.html 内容
 *  1.2 使用正则替换内容字符串里的，回车符\r 换行符\n
 *  1.3 确认后，写入到 dist/index.html 内
 */
const fs = require('fs')
const path = require('path')

let str = ''
fs.readFile(path.join(__dirname,'public/index.html'),(err, data)=>{
    if(err) return
    str = data.toString().replace(/[\r\n]/g,'').replace(/[\s+]/,' ')
    console.log(str)
    fs.writeFile(path.join(__dirname,'dist/index.html'),str,err =>{
        console.log(err)
    })
})
