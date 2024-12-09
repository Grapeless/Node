/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 * 
 * Node 默认采用的是 CommonJS 规范, 所以默认情况下无法直接使用 ES6 模块化规范
 *    - 新建一个 package.json
 *    - 设置 { "type": "module" }
 * 
 * 不管是什么模块化的规范, 目的都是为了实现模块化, 将其他模块导入到自己模块中使用, 自己也可以对外暴露成员给其他模块使用
 * 
 * 在 Node 中就用默认的 CommonJS 规范, 以后写前端页面再全部使用 ES6 模块化规范
 */

// ES6 默认导入语法
// import 变量名 from '模块名或路径'
import obj from './utils.js'

console.log(obj)