import obj from '@/utils.js'
import axios from "axios"

const {checkUsername, checkPassword} = obj

// console.log(checkUsername('ziyang'))
// console.log(checkPassword('123456'))

const btn = document.querySelector('.login-btn')
const username = document.querySelector('.username')
const password = document.querySelector('.password')

btn.addEventListener('click', function () {
    if (!checkPassword(password.value)) {
        alert('密码长度应大于6')
    }
    if (!checkUsername(username.value)) {
        alert('用户名长度应大于8')
    }
    axios({
        url: 'http://hmajax.itheima.net/api/register',
        method: 'POST',
        data: {
            username: username.value,
            password: password.value
        }
    }).then(res =>{
        console.log(res.data.message)
    }).catch(e =>{
        console.log(e.response.data.message)
    })
})
//导入.css .less .img等非js的基础导入语法
import '@/css/index.css'
import '@/less/index.less'

import imgObj from '@/assets/logo.png'

document.querySelector('.logo-img').src = imgObj

const arr = [1, 2, 3]
console.log(arr.map(value => value + 1))


