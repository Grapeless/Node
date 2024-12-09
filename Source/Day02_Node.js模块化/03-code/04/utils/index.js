/**
 * 在 index.js 中将当前包里所有的模块内容都导出出去
 */
// 先导入两个模块的内容
const { getArraySum } = require('./lib/arr.js')
const { checkUser, checkPwd } = require('./lib/str.js')

// 将所有内容导出
module.exports = {
  getArraySum,
  checkUser,
  checkPwd
}