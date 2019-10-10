<template>
	<div class="indexPage">
		<Header username="Mychi Darko"></Header>
    	<AddNoteEditor/>
	    <BottomNav activeIndex="3" />
	</div>
</template>

<script>
	import Header from './../components/Header';
	import Sidebar from './../components/Sidebar';
	import BottomNav from './../components/BottomNav';
	import AddNoteEditor from './../components/AddNoteEditor';

	export default {
		data() {
			return {
				smth: 1
			}
		},
		components: {
			Header,
			Sidebar,
    		BottomNav,
    		AddNoteEditor
		}
	}
</script>