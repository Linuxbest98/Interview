<template>
	<div>
		<div class="trans">
			<div class="trans_top">
				
				<div>
					<div class="trans_from"><span>中文</span></div>
					<div class="trans_change_box">
						<div class="trans_change"><img class="auto-img" src="../../../public/img/ic_trans_change_normal.png"></div>
					</div>
					<div class="trans_to"><span>英文</span></div>
				</div>
				
				<div class="trabs_input">
					<textarea placeholder="在此输入要翻译的文本"></textarea>
				</div>
				
			</div>
			<div class="trans_bottom">

			</div>
		</div>
		<NavBar></NavBar>
	</div>
</template>

<script>
	import NavBar from '../../components/NavBar.vue'
	export default {
		components: {
			NavBar
		}
	}
</script>

<style lang="scss" rel="stylesheet" scoped>
	.auto-img {
		width: 100%;
		display: block;
	}

	.trans_icon {
		display: inline-block;
		height: 10px;
		width: 10px;

	}

	.trans {
		width: 100%;

		.trans_top {
			width: 100%;
			height: 170px;
			padding: 15px;
			box-sizing: border-box;
			box-shadow: 0 1px 10px #999;

			.trans_from {
				position: relative;
				float: left;
				font-size: 15px;
				color: #000;
				
				>span::after{
					content: '';
					position:absolute;
					right: -15px;
					bottom: 0;
					background: url(../../../public/img/ic_arrow_drop_down.9.png) center center no-repeat;
					background-size: cover;
					width: 15px;
					height: 15px;
				}
			}

			.trans_change_box {
				float: left;
				position: relative;
				width: 30px;
				height: 18px;
				border-radius: 10px;
				border: 1px solid #eee;
				margin: 0 25px;

				.trans_change {
					position: absolute;
					left: 0;
					top: 0;
					bottom: 0;
					right: 0;
					margin: auto;
					width: 20px;
				}
			}

			.trans_to {
				position: relative;
				float: left;
				font-size: 15px;
				color: #000;
				
				>span::after{
					content: '';
					position:absolute;
					right: -15px;
					bottom: 0;
					background: url(../../../public/img/ic_arrow_drop_down.9.png) center center no-repeat;
					background-size: cover;
					width: 15px;
					height: 15px;
				}
			}

			.trabs_input{
				width: 100%;
				margin-top: 20px;
				
				>textarea{
					display: block;
					height: 100%;
					width: 100%;
					border: none;
					outline: none;
					font-size: 20px;
				}
				
				>input::-webkit-textarea-placeholder{
					font-size: 20px;
					font-family: '微软雅黑'
				}
			}

		}

		.trans_bottom {
			width: 100%;
		}
	}
</style>
