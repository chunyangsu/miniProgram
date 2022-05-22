<template>
	<view>
		<navigator url="/pages/login/login">
			<button>登录</button>
		</navigator>
		<button type="primary" open-type="getUserInfo" @getUserInfo="getUserInfo">
		  微信用户一键登录
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			console.log(11)
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				var self = this;
				// 获取用户信息
				console.log(self)
					uni.login({
						provider: 'weixin',
						success: function(res) {
							console.log(12)
							console.log(res)
							// if (res.code) {
							// 	//发起网络请求
							// 	uni.request({
							// 		method: 'POST',
							// 		url: 'http://************/wxlogin',
							// 		data: {
							// 			code: res.code
							// 		},
							// 		success(res) {
							// 			//将openid存入本地缓存
							// 			// uni.setStorage({
							// 			// 	key: 'openid_key',
							// 			// 	data: res.data.openid
							// 			// });
							// 			// if (res.statusCode == 200 && res.data && res.data.username) {
							// 			// 	self.isFirstWXLogin = false;
							// 			// 	self.name = res.data.username;
							// 			// 	self.password = res.data.password;
							// 			// 	setTimeout(function() {
							// 			// 		self.tologin({
							// 			// 			username: res.data.username,
							// 			// 			password: res.data.password,
							// 			// 			encrypted: true
							// 			// 		})
							// 			// 	}, 0)
							// 			// } else {
							// 			// 	//首次登录，可以跳转到一个绑定账号的页面
							// 			// 	uni.navigateTo({
							// 			// 		url: 'wxlogin'
							// 			// 	});
							// 		 //    }
							// 		}
							// 	})
							// } else {
							// 	console.log('登录失败！' + res.errMsg)
							// }
						},
						fail(e) {
			                console.log('失败')
							console.log(e);
						},
						complete(e) {
							console.log('完成')
							console.log(e);
						}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
