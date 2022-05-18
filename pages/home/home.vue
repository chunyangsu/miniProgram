<template>
	<view>
		home111
		<van-button type="warning">警告按钮12</van-button>11
		<!-- <van-field value="{{ value }}" placeholder="请输入用户名" /> -->
		<van-tag type="primary">标签1</van-tag>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		onLoad() {
			const BASEURL = process.env.VUE_APP_BASE_URL
			console.log(BASEURL)
		}
	}
</script>

<style lang="scss">

</style>
