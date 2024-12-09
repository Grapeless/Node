/**
 * 目标：使用 fs 模块，读写文件内容
 * 语法：
 * 1. 引入 fs 模块
 * 2. 调用 writeFile 写入内容
 * 3. 调用 readFile  读取内容
 */
const fs = require('fs')
/*
fs.writeFile('text.txt','这是我写入的数据',err=>{
    console.log(err)
})*/

fs.readFile('text.txt',(err, data)=>{
    console.log(err)
    console.log(data.toString())
})
