/**
 * 目标：基于 express 软件包，开发 Web 服务返回资源给客户端
 */
const express = require('express')
const fs= require('fs')
const path = require('path')
const server = express()

server.get('/api/province', (req, res) => {
    readFile(path.join(__dirname,''))
})

server.get('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
})

server.listen(3000, () => {
    console.log('服务器已经启动')
})