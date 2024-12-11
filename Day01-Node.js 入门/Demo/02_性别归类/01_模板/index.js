const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'data/data.json'), (err, data) => {
    if (err) {
        return err
    } else {
        const dataArray = JSON.parse(data.toString())
        const male = JSON.stringify(dataArray.filter(value => value.gender === '男'))
        const female = JSON.stringify(dataArray.filter(value => value.gender === '女'))
        fs.writeFile(path.join(__dirname,'data/男.json'),male,(err)=>{
            if (err){
                return err
            }
        })
        fs.writeFile(path.join(__dirname,'data/女.json'),female,(err)=>{
            if (err){
                return err
            }
        })
    }
})