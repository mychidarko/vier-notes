<template>
	<div class="indexPage">
		<Header username="Mychi Darko" activeIndex="2"></Header>
		<h3>{{ $route.params.category[0].toUpperCase() + $route.params.category.slice(1) }}</h3>
    	<HomeCards/>
	    <BottomNav activeIndex="2" />
	</div>
</template>

<script>
	import Header from './../components/Header';
	import HomeCards from './../components/HomeCards';
	import Sidebar from './../components/Sidebar';
	import BottomNav from './../components/BottomNav';

	export default {
		data() {
			return {
				smth: 1
			}
		},
		components: {
			Header,
			HomeCards,
			Sidebar,
    		BottomNav
		}
	}
</script>