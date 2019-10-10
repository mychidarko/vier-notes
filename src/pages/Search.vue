<template>
	<div class="indexPage">
		<Header username="Mychi Darko"></Header>
		Search
    	<CategoryCards/>
	    <BottomNav activeIndex="4" />
	</div>
</template>

<script>
	import Header from './../components/Header';
	import CategoryCards from './../components/CategoryCards';
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
			CategoryCards,
			Sidebar,
    		BottomNav
		}
	}
</script>