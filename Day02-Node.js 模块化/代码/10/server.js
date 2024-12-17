/**
 * 目标：基于 express 软件包，开发提供省份列表的数据接口
 * 要求：get 请求方法，/api/province 的请求路径
 */
const express = require('express')
const fs = require('fs')
const path = require('path')
const server = express()

server.get('/api/province', (req, res) => {
    fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
        if (err) {
            return err
        } else {
            res.send(data.toString())
        }
    })
})

server.get('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
})

server.listen(3000, () => {
    console.log('服务器已经启动')
})