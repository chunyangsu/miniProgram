//校验邮箱格式
function validateEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

//校验手机格式
function validateMobile(mobile) {
    return RegExp(/^1[34578]\d{9}$/).test(mobile);
}

module.exports = {
    validateEmail: validateEmail,
    validateMobile: validateMobile
}