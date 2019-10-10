<template>
	<div class="editor">
		<h3>{{ note.title }}</h3>
		<img src="https://source.unsplash.com/random" class="book-cover">
		<div v-html="noteBody"></div>
		<h3><i class="el-icon-star-on"></i> {{ note.likes }}</h3>
		<h3><small>by</small> {{ note.author }}</h3>
	</div>
</template>

<script>
	import marked from 'marked';
	import axios from 'axios';

	export default {
		data() {
			return {
				note: {},
				noteBody: ""
			}
		},
		mounted: function() {
			axios
				.get(`http://localhost:8000/book/${this.$route.params.id}`)
				.then((res) => {
					this.note = res.data[0];
					var md = marked(res.data[0].note);
					this.noteBody = md;
				})
		}
	}
</script>

<style scoped>
	@media only screen and (max-width: 799px) {
		.editor {
			margin-top: -20px !important;
			margin-bottom: 60px !important;
		}

		.book-cover {
			width: 100%;
			height: 350px;
		}
	}

	.editor {
		display: flex;
		flex-direction: column;
		margin: 0;
		color: #333;
		margin-top: 70px;
	}

	code {
		color: #f66;
	}
</style>