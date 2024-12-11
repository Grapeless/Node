const fs = require('fs')
const path = require('path')
const http = require('http')
const qs = require('querystring')

const server = http.createServer()

server.on('request', async (req, res) => {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    try {
        const data = await new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '/data/city.json'), (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(data.toString()))
                }
            })
        })
        if (req.url === '/api/province') {
            const allProvince = data.map(value => value.provinceName)
            res.end(JSON.stringify(allProvince))

            console.log(allProvince)

        } else if (req.url.startsWith('/api/city')) {
            const queryStr = req.url.split('?')[1]
            const pname = qs.parse(queryStr).pname

            const allCity = data.filter(value => value.provinceName === pname)[0].cities
                .map(value => value.cityName)
            res.end(JSON.stringify(allCity))

            console.log(allCity)
        } else if (req.url.startsWith('/api/area')) {
            const queryStr = req.url.split('?')[1]
            const {pname, cname} = qs.parse(queryStr)
            //查询参数皆非空
            if (pname && cname) {
                const allCity = data.filter(value => value.provinceName === pname)[0].cities
                    .map(value => value.cityName)
                //城市名存在
                if (allCity.includes(cname)) {
                    const allArea = data.filter(value => value.provinceName === pname)[0].cities
                        .filter(value => value.cityName === cname)[0].counties
                        .map(value => value.countyName)
                    res.end(JSON.stringify(allArea))

                    console.log(allArea)
                } else {
                    res.end('404 Not Found')
                }
            } else {
                res.end('404 Not Found')
            }
        } else {
            res.end('404 Not Found')
        }
    } catch (e) {
        console.log(e)
    }

})

server.listen(3000, () => {
    console.log('服务器启动成功')
})