<template>
	<div class="notFound">
		<h3>You appear to be lost</h3>
		<p>WHY DON'T YOU READ THESE ARTICLES ON GETTING LOST? OR <a href="#/home">GO BACK HOME</a></p>
		<HomeCards/>
	    <BottomNav />
	</div>
</template>

<script>
	import HomeCards from './../components/HomeCards';
	import BottomNav from './../components/BottomNav';

	export default {
		components: {
			HomeCards,
    		BottomNav
		}
	}
</script>

<style scoped>
	.notFound {
		padding: 10px;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>