<template>
	<div class="news_list">
		<div class="news_item" v-for="(item, index) in newsData" :key="index">
			<div class="news_title">{{item.title}}</div>
			
			<div class="news_img" v-if="item.thumbnail_pic_s03">
				<div class="news_img_box">
					<img class="auto-img" :src="item.thumbnail_pic_s">
				</div>
				<div class="news_img_box">
					<img class="auto-img" :src="item.thumbnail_pic_s02">
				</div>
				<div class="news_img_box">
					<img class="auto-img" :src="item.thumbnail_pic_s03">
				</div>
			</div>  
			
			<div class="news_img" v-else-if="item.thumbnail_pic_s02">
				<div class="news_img_box">
					<img class="auto-img" :src="item.thumbnail_pic_s">
				</div>
				<div class="news_img_box">
					<img class="auto-img" :src="item.thumbnail_pic_s02">
				</div>
			</div>
			
			<div class="news_img" v-else>
				<div class="news_img_box">
					<img class="auto-img" :src="item.thumbnail_pic_s">
				</div>
			</div>
			
			
			<div class="news_author">{{item.author_name}}</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	
	export default{
		
		created() {
			this.$store.dispatch('news')
		},
		computed:{
			...mapGetters(['newsData']),
		}
	}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	
	.news_list{
		padding: 0 15px 15px;
		width: 100%;
		box-sizing: border-box;
		
		.news_item{
			width: 100%;
			border-bottom: 1px solid #eee;
			
			.news_title{
				width: 100%;
				font-size: 14px;
				color: #000;
				margin: 15px 0;
				line-height: 18px;
			}
			
			.news_img{
				display: flex;
				width: 100%;
				
				.news_img_box{
					flex: 1;
					margin-right: 5px;
					border-radius: 5px;
					overflow: hidden;
				}
				.news_img_box:last-child{
					margin-right: 0;
				}
			}
			
			.news_author{
				width: 100%;
				margin: 15px 0;
				font-size: 12px;
				color: #666;
			}
		}
	}
</style>
