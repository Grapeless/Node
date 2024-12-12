function checkUsername(username) {
    return username.length >= 8
}
function checkPassword(password){
    return password.length >= 6
}

export default {
    checkPassword,
    checkUsername
}