<template>
	<div class="indexPage">
		<Header username="Mychi Darko" activeIndex="1"></Header>
    	<HomeCards/>
    	<BottomNav activeIndex="1" />
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