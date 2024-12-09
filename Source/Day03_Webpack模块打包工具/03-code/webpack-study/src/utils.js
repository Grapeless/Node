// 按需导出
export function checkUsername(username) {
  return username.length >= 8
}
export function checkPassword(password) {
  return password.length >= 6
}

// 默认导出
// export default {
//   checkUsername,
//   checkPassword
// }