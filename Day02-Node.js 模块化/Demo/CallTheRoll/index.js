const express = require('express')
const lodash = require('lodash')
const cors = require('cors')
const {stuName} = require('./data')


// console.log(stuName)
const server = express()
server.use(cors())
server.get('/api/rand', (req, res) => {
    res.send(stuName[lodash.random(9)])
})

server.get('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
})

server.listen(3000, () => {
    console.log('服务器已启动')
})