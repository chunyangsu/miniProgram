<template>
	<view>
		<!-- logo -->
		<view class="logo">
			<image class="pic-auto" src="../../static/images/gyg_logo.png" mode="" />
		</view>
		<!-- 登录 -->
		<view class="login-box">
			<view class="login-btn">手机号码一键注册登录</view>
		</view>
		<!-- 条款与政策 -->
		<view class="clause">
			<!-- 复选框 -->
			<view class="checkbox">
				<van-checkbox :value="checked" checked-color="#07c160" @change="checkClause" />
			</view>
			<!-- 文本 -->
			<view class="text">我已阅读并同意
				<navigator class="clause-title" url="/pages/detailManage/serviceClauseDetail">《工易谷服务条款》</navigator>及
				<navigator class="clause-title" url="/pages/detailManage/privacyPolicyDetail">《隐私政策》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false
			}
		},
		methods: {
			checkClause() {
				console.log(1)
			}
		}
	}
</script>

<style lang="scss">
.logo {
	width: 100px;
	height: 100px;
	line-height: 98px;
	text-align: center;
	margin: 0 auto;
	margin-top: 200rpx;
}

.login-box {
	margin-top: 100rpx;
	width: 100%;
}
.login-btn {
	text-align: center;
	height: 90rpx;
	line-height: 90rpx;
	width: 656rpx;
	background-color: #07c160;
	color: #fff;
	margin: 0 auto;
	border-radius: 42rpx;
}
.clause {
	display: flex;
	margin: 0 auto;
	margin-top: 30rpx;
	width: 656rpx;
}
.checkbox {
	margin-top: 2rpx;
}
.text {
	font-size: 28rpx;
	color: #777676;
	line-height: 48rpx;
}
.clause-title {
	color: #2196F3;
	display: inline;
}
</style>
