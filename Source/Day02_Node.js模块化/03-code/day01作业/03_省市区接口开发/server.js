const http = require('http')
const fs = require('fs')
const path = require('path')
const qs = require('querystring')

const server = http.createServer()

// 需求:
// 1. 当用户请求 /api/province 时返回省份数据
// 2. 当用户请求 /api/city?pname=湖北省 时返回城市数据
// 3. 当用户请求 /api/area?pname=湖北省&cname=武汉市 时返回地区数据
server.on('request', (req, res) => {
  if (req.url === '/api/province') {
    fs.readFile(path.join(__dirname, 'city.json'), (err, data) => {
      if (err) return console.log(err)
      const arr = JSON.parse(data.toString())
      const plist = arr.map(item => item.provinceName)
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(JSON.stringify(plist))
    })
  } else if (req.url.startsWith('/api/city')) {
    // 获取到参数
    // req.url => /api/city?pname=湖北省
    const paramStr = req.url.split('?')[1]
    const paramObj = qs.parse(paramStr)
    const pname = paramObj.pname
    console.log(pname)

    fs.readFile(path.join(__dirname, 'city.json'), (err, data) => {
      if (err) return console.log(err)
      const arr = JSON.parse(data.toString())
      
      // 根据用户传入的省份名找到对应的省份对象
      const pObj = arr.find(item => item.provinceName === pname)
      // console.log(pObj.cities.map(item => item.cityName))
      // 再 map 出所有的城市名称
      const clist = pObj.cities.map(item => item.cityName)

      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(JSON.stringify(clist))
    })
  } else if (req.url.startsWith('/api/area')) {
    // 获取到参数
    // req.url => /api/area?pname=湖北省&cname=武汉市
    const paramStr = req.url.split('?')[1]
    const paramObj = qs.parse(paramStr)
    const pname = paramObj.pname
    const cname = paramObj.cname
    console.log(pname, cname)

    fs.readFile(path.join(__dirname, 'city.json'), (err, data) => {
      if (err) return console.log(err)
      const arr = JSON.parse(data.toString())
      
      // 根据用户传入的省份名找到对应的省份对象
      const pObj = arr.find(item => item.provinceName === pname)
      // console.log(pObj.cities.map(item => item.cityName))
      const cObj = pObj.cities.find(item => item.cityName === cname)
      // 再 map 出所有的地区名称
      const alist = cObj.counties.map(item => item.countyName)

      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(JSON.stringify(alist))
    })
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('您要访问的资源不存在')
  }
})

server.listen(3000, () => {
  console.log('服务器启动成功!')
})