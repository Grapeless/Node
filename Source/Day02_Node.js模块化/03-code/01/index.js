/**
 * 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
 */

// 导入语法:
// require('模块名 或 路径')
const obj = require('./utils.js')

console.log(obj)
console.log(obj.getArraySum([ 1, 2, 3 ]))