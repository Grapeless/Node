/**
 * 目标二：压缩 js 里代码，并整合到 html 中一起运行
 *  2.1 读取 public/index.js 内容
 *  2.2 使用正则替换内容字符串里的，回车符\r 换行符\n 打印语句console.log('xxx');
 *  2.3 确认后，拼接 html 内容写入到 dist/index.html 内
 */
const fs = require('fs')
const path = require('path')

const step1 = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
        if (err) {
            reject(err)
        }
        const htmlStr = data.toString().replace(/[\r\n]/g, '')
            .replace(/\s+/g, ' ')

        resolve(htmlStr)
    })
})
const step2 = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'public/index.js'), (err, data) => {
        if (err) {
            reject(err)
        }
        const jsStr = data.toString().replace(/[\r\n]/g, '')
            .replace(/console.log\(.+?\)/g, '')
            .replace(/\s+/g, ' ')

        resolve(jsStr)
    })
})

async function start() {
    try {
        const htmlRes = await step1
        const jsRes = await step2
        const finalRes = await new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, 'dist/index.html'), htmlRes + `<script>${jsRes}</script>`, err => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve('执行成功')
                    }
                }
            )
        })
        console.log(finalRes)
    } catch (e) {
        console.log('执行失败')
    }
}

start()