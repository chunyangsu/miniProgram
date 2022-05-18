import request from '@/api/service.js'
export function flushPower() {
	return request({
		url: '/component/README?id=uniui',
		method: 'get'
	})
}