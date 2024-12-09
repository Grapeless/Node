// npm i webpack webpack-cli --save-dev
// --save-dev 完全等同于 -D
// 安装开发依赖, 就是说这两个包只有在开发阶段才会使用, 项目上线后不需要再用了
// axios lodash 等这些包都不用 -D 因为项目上线后依然要使用
// 需求: 封装一个 utils.js 文件, 检查用户名和密码的长度, 引入到 index.js 中使用
// 按需导入
import { checkUsername, checkPassword } from '@/utils'

// console.log(checkUsername('ziyang'))
// console.log(checkPassword('123456'))

// 需求: 注册功能, 当用户点击注册, 判断用户名和密码是否符合长度要求
// document.querySelector('.login-btn').addEventListener('click', () => {
//   const username = document.querySelector('.username').value
//   const password = document.querySelector('.password').value
//   if (!checkUsername(username)) {
//     return alert('用户名长度应该大于等于8')
//   }
//   if (!checkPassword(password)) {
//     return alert('密码长度应该大于等于6')
//   }
//   console.log('准备注册')
// })

// 需求: 让 webpack 打包 css 文件
// import 变量 from '路径'
// 不接受任何数据, 只是将其引入进来, 让 webpack 打包
// webpack 会打包所有和入口文件有直接或间接关系的文件
// import '路径'
// webpack 默认只能打包 js 和 json
import '@/css/index.css'

// 需求: 让 webpack 打包 less 文件
// 照着官网 CV
// 1. 下包
// 2. 配置
// 3. 使用 less
// 4. 打包
import '@/less/index.less'

// 需求: 设置 body 的背景图, 在文本框上放一个 logo img 标签
// 常用图片场景:
// 1. 在 css/less 中使用背景图
// 2. 在 js 中使用图片

// img 的 src 中可以设置链接或 BASE64 编码的图片
import imgObj from '@/assets/logo.png'
document.querySelector('.logo-img').src = imgObj


// 需求: 使用 babel 实现语法降级
const arr = [1, 2, 3, 4]
const newArr = arr.map(item => item + 1)
console.log(newArr)

consolee.log(666)

// 需求: 发送请求完成注册
import axios from 'axios'
document.querySelector('.login-btn').addEventListener('click', () => {
  const username = document.querySelector('.username').value
  const password = document.querySelector('.password').value
  if (!checkUsername(username)) {
    return alert('用户名长度应该大于等于8')
  }
  if (!checkPassword(password)) {
    return alert('密码长度应该大于等于6')
  }
  // console.log('准备注册')
  axios({
    url: 'http://ajax-api.itheima.net/register',
    method: 'post',
    data: {
      username,
      password
    }
  }).then(res => {
    alert(res.data.message)
  }).catch(err => {
    alert(err.response.data.message)
  })
})

console.log(456)
