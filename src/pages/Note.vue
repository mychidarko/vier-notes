<template>
	<div class="indexPage">
		<Header username="Mychi Darko" activeIndex="4"></Header>
    	<Note/>
	    <BottomNav activeIndex="1" />
	</div>
</template>

<script>
	import Header from './../components/Header';
	import Note from './../components/Note';
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
			Note,
			Sidebar,
    		BottomNav
		}
	}
</script>