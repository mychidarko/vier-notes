<template>
	<div class="d-flex flex-col">
		<el-row v-loading="loading" v-if="loading" class="loadingState height-weird"></el-row>
		<div class="editor" v-else>
			<h3>{{ note.title }}</h3>
			<img src="https://source.unsplash.com/random" class="book-cover">
			<div v-html="noteBody"></div>
			<h3><i class="el-icon-star-on"></i> {{ note.likes }}</h3>
			<h3><small>by</small> {{ note.author }}</h3>
		</div>
	</div>
</template>

<script>
	import marked from 'marked';
	import axios from 'axios';

	export default {
		data() {
			return {
				note: {},
				noteBody: "",
				loading: true
			}
		},
		mounted: function() {
			window.axios = axios;
			axios
				.get(`https://vier-api.000webhostapp.com/book/${this.$route.params.id}`)
				.then((res) => {
					if (res.data) {
						this.note = res.data[0];
						var md = marked(res.data[0].note);
						this.noteBody = md;
						this.loading = false;
					}
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

		.height-weird {
			margin-top: 32vh !important;
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

	.d-flex {
		display: flex !important;
	}

	.flex-col {
		flex-direction: column !important;
	} 

	.loadingState {
		justify-content: center !important;
		align-items: center !important;
	}
</style>