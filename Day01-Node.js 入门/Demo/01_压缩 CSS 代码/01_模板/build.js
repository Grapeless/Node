/**
 * 需求：在这段代码的基础上，把 index.css 代码打包进同一个 dist/index.html 网页中并运行
 * 要求：css 文件内代码的回车符和换行符都去掉
 * 提示：css 包上 style 标签插入到 html 网页最后也可以运行
 */
const fs = require('fs')
const path = require('path')
/*
fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    const htmlStr = data.toString()
    const resultStr = htmlStr.replace(/[\r\n]/g, '')

    fs.readFile(path.join(__dirname, 'public', 'index.js'), (err, data) => {
        const jsStr = data.toString()
        const jsResultStr = jsStr.replace(/[\r\n]/g, '').replace(/console.log\('.+?'\);/g, '')
        const result = `<script>${jsResultStr}</script>`

        fs.writeFile(path.join(__dirname, 'dist', 'index.html'), resultStr + result, err => {
            if (err) console.log(err)
            else console.log('压缩成功')
        })
    })
})*/
const step1 = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
        if (err) {
            reject(err)
        } else {
            const htmlStr = data.toString().replace(/[\r\n]/g, '')
            resolve(htmlStr)
        }
    })
})

const step2 = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'public/index.js'), (err, data) => {
        if (err) {
            reject(err)
        } else {
            const jsStr = data.toString().replace(/[\r\n]/g, '').replace(/console.log\('.+?'\);/g, '')
            resolve(jsStr)
        }
    })
})
const step3 = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'public/index.css'), (err, data) => {
        if (err) {
            reject(err)
        } else {
            const cssStr = data.toString().replace(/[\r\n]/g, '')
            resolve(cssStr)
        }
    })
});

(async function () {
    try {
        const htmlRes = await step1
        const jsRes = await step2
        const cssRes = await step3
        const finalRes = await new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, 'dist/index.html'),
                `${htmlRes}<style>${cssRes}</style><script>${jsRes}</script>`,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve('压缩成功');
                    }
                }
            );
        });
        console.log(finalRes);
    } catch (e) {
        console.log(e)
    }
})()

