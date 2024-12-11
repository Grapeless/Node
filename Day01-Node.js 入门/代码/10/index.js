/**
 * 目标：基于 Web 服务，开发-城市列表数据接口
 * 步骤：
 *  1. 判断 req.url 资源路径+查询字符串，路径前缀匹配/api/city
 *  2. 借助 querystring 模块的方法，格式化查询参数字符串
 *  3. 读取 city.json 城市数据，匹配省份名字下属城市列表
 *  4. 返回城市列表，启动 Web 服务测试
 */
const fs = require('fs')
const path = require('path')
const http = require('http')
const qs = require('querystring')

const server = http.createServer()

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')

    if (req.url === '/api/province') {
        fs.readFile('data/province.json', (err, data) => {
            if (err) {
                return err
            } else {
                res.end(data.toString())
            }
        })
    } else if (req.url.startsWith('/api/city')) {

        const queryParam = req.url.split('?')[1]
        const queryParamObj = qs.parse(queryParam)
        const pname = queryParamObj.pname

        fs.readFile(path.join(__dirname, 'data/city.json'), (err, data) => {
            if (err) {
                return err
            } else {
                const dataObj = JSON.parse(data.toString())
                const aimDataList = JSON.stringify(dataObj[pname])
                res.end(aimDataList)
            }
        })
    } else {
        res.end('404 Not Found')
    }
})

server.listen(3000, () => {
    console.log('服务器已启动')
})
