// const BASEURL = 'https://www.baidu.com/'
const BASEURL = process.env.VUE_APP_BASE_URL
// 请求拦截器
uni.addInterceptor('request', {
  invoke(args) {
  },
  success(args) {
    // 请求成功后
  }, 
  fail(err) {
	  // 请求失败
    console.log('interceptor-fail',err)
  }, 
  complete(res) {
	  // 完成拦截的回调
  }
})
// 创建请求服务
function createSerive (config) {
	let reuest = new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL  + config.url,
			header: config.header,
			method: config.method,
			data: config.method,
			timeout: config.timeout,
			dataType: config.dataType,
			responseType: config.responseType,
			success:(res) => {
				if(res.data.code === 2000) {
					resolve(res.data)
				} else {
					reject(res.data)
				}
			},
			fail: () => {
				reject()
			},
			complete: () => {
			}
		})
	})
	return reuest
}
// 请求方法
function request (option) {
	const optionDefault = {
	  headers: {
	  },
	  timeout: option.timeout ? option.timeout : 35000, // 请求接口超时设置
	  dataType:  option.dataType ? option.dataType : 'json', // 对返回的数据做一次 JSON.parse
	  responseType: option.responseType ? option.responseType : 'text', // 设置响应的数据类型。合法值：text、arraybuffer
	  data: {}
	}
	return createSerive(Object.assign(optionDefault, option))
}
export default request