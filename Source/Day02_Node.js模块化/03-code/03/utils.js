/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"命名"导出
 * 也可以叫它 按需导出
 * export 定义语句
 */
export const baseURL = 'http://hmajax.itheima.net'
export const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// 默认导出和按需导出可以同时使用
export default {
  a: 10
}