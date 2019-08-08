<template>
	<div>
<!-- 		<div class="load" v-if="kiki">
			<img class="load_img" src="../../public/img/timg.gif">
		</div>
		<div v-else> -->
			<Header></Header>
			<NavBar></NavBar>
		<!-- </div> -->

	</div>

</template>

<script>
	import Header from '../components/Header.vue'
	import NavBar from '../components/NavBar.vue'
	export default {

		// 		created() {
		// 			this.$store.dispatch('news')
		// 		},
// 		data() {
// 			return {
// 				kiki: true
// 			}
// 		},
// 		mounted() {
// 			this.$nextTick(function() {
// 				setTimeout(() => {
// 					return this.kiki = false
// 				}, 3000)
// 			})
// 
// 		},
		components: {
			Header,
			NavBar
		}
	}
</script>
<style>
	.load{
		width: 100%;
		height: 100%;
		background: #000;
		position: fixed;
		
	}
	.load_img{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
</style>
