<template>
	<div class="indexPage">
		<Header username="Mychi Darko" activeIndex="3"></Header>
    	<AuthorCards/>
	    <BottomNav activeIndex="5" />
	</div>
</template>

<script>
	import Header from './../components/Header';
	import AuthorCards from './../components/AuthorCards';
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
			AuthorCards,
			Sidebar,
    		BottomNav
		}
	}
</script>