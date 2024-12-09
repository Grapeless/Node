const fs = require('fs')
const path = require('path')

// 1. 读取所有数据
fs.readFile(path.join(__dirname, 'data/data.json'), (err, data) => {
  if (err) return console.log(err)

  const arr = JSON.parse(data.toString())
  // console.log(arr)

  const man = arr.filter(item => item.gender === '男')
  const woman = arr.filter(item => item.gender === '女')
  // console.log(man)
  // console.log(woman)

  fs.writeFile(path.join(__dirname, 'data/男.json'), JSON.stringify(man), err => {
    if (!err) console.log('写入男成功')
  })

  fs.writeFile(path.join(__dirname, 'data/女.json'), JSON.stringify(woman), err => {
    if (!err) console.log('写入女成功')
  })
})