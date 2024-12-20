/**
 * 目标：读取 test.txt 文件内容
 * 注意：代码中，使用绝对路径
 * 原因：Node.js 执行时会以终端所在文件夹作为相对路径，去拼接代码中路径使用（导致找不到目标文件）
 * 解决：使用 path.join() 和 __dirname 来填写要查找的目标文件绝对地址
 */
const fs = require('fs')
const path = require('path')

/*fs.readFile('../text.txt',(err, data)=>{
    console.log(err)
    console.log(data)
})*/


fs.readFile(path.join(__dirname,'../text.txt'),(err, data)=>{
    console.log(err)
    console.log(data)
})