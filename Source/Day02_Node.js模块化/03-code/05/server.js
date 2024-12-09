/**
 * 目标：使用 npm 下载 dayjs 软件包来格式化日期时间
 *  1. （可选）初始化项目清单文件，命令：npm init -y
 *  2. 下载软件包到当前项目，命令：npm i 软件包名称
 *  3. 使用软件包
 */

// 模块名 or 路径?
// 自己写的模块就写路径, 其他情况都是模块名 (内置的 / 下载的)
const dayjs = require('dayjs')
// 2023-04-23 11:52:00
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))