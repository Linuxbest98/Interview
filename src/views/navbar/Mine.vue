<template>
	<div>
		<div class="mine">
			<div class="mine_detail">
				<div class="mine_img"><img class="auto-img" src="../../../public/img/avatar_default.png"></div>
				<div class="mine_name"><div class="mine_name_c">DonglinLee98</div></div>
				<div class="mine_check">查看或编辑个人主页</div>
			</div>
			
			<div class="func">
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_vip_gloden_entrance_rect_bg.png"></div>
					<div class="func_name">会员中心</div>
					<div class="func_ex">开通立享多项特权</div>
				</div>
			</div>
			
			<div class="func">
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_notifications_orange.png"></div>
					<div class="func_name">消息中心</div>
				</div>
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_eyes_on_red_green.png"></div>
					<div class="func_name">我的关注</div>
				</div>
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_my_collection_blue.png"></div>
					<div class="func_name">我的收藏</div>
				</div>
			</div>
			
			<div class="func">
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_column.png"></div>
					<div class="func_name">已购买的内容</div>
				</div>
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_youdao_course_download_yellow.png"></div>
					<div class="func_name">已下载专栏</div>
				</div>
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_my_coupon_golden.png"></div>
					<div class="func_name">我的优惠券</div>
				</div>
			</div>
			
			<div class="func">
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_youdao_course_green.png"></div>
					<div class="func_name">我的精品课</div>
				</div>
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_download_dict_red.png"></div>
					<div class="func_name">下载离线数据包</div>
				</div>
				<div class="func_pad">
					<div class="func_img"><img class="auto-img" src="../../../public/img/ic_setting_blue.png"></div>
					<div class="func_name">设置</div>
				</div>
			</div>
			
		</div>
		<NavBar></NavBar>
	</div>
</template>

<script>
	import NavBar from '../../components/NavBar.vue'
	export default{
		components:{
			NavBar
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	
	.auto-img{
		width: 100%;
		display: block;
	}
	.mine{
		padding: 35px 0 50px;
		box-sizing: border-box;
		width: 100%;
		
		.mine_detail{
			width: 100%;
			padding: 0 15px 15px;
			box-sizing: border-box;
			
			.mine_img{
				width: 15%;
				float: right;
			}
			
			.mine_name{
				font-size: 23px;
				font-weight: 900;
				color: #000;
			}
			
			.mine_name_c{
				display: inline-block;
				position: relative;
				font-size: 23px;
				font-weight: 900;
				color: #000;
			}
			
			.mine_name_c::before{
				position: absolute;
				right: -18px;
				bottom: 0;
				width: 15px;
				height: 15px;
				background: url(../../../public/img/ic_vip_not_login_silver.png) center center no-repeat;
				background-size: cover;
				content: '';
			}
			
			.mine_check{
				font-size: 12px;
				color: #999;
				line-height: 30px;
			}
			
		}
	}

	.func{
		width: 100%;
		padding: 8px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #eee;
		
		.func_pad{
			display: flex;
			padding: 15px;
			box-sizing: border-box;
			.func_img{
				flex: 0 0 20px;
				width: 20px;
				margin-right: 25px;
			}
			
			.func_name{
				flex: 1;
				font-size: 15px;
				line-height: 20px;
				color: #000;
			}
			
			.func_ex{
				flex: 1;
				font-size: 12px;
				line-height: 20px;
				color: #999;
				text-align: right;
			}
		}
		
	}
</style>
