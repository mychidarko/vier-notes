<template>
	<div class="editor">
		<h3>Add Note</h3>
		<form class="addNoteForm" @submit.prevent="addNote">
			<el-input v-model="title" placeholder="Enter title..."></el-input>
			<el-input v-model="author" placeholder="Enter author..."></el-input>
			<textarea v-model="description" placeholder="Enter description..."></textarea>
			<textarea v-model="body" placeholder="Type your note..."></textarea>
			<el-button type="success" icon="el-icon-check" native-type="submit" :loading="loading">Add Note</el-button>
		</form>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				author: '',
				title: '',
				description: '',
				body: '',
				loading: false
			}
		},
		methods: {
			addNote: function() {
				this.loading = true;
				var data = JSON.stringify({
					author: this.author,
					title: this.title,
					description: this.description,
					body: this.body
				});
				axios({
					method: 'POST',
					url: 'https://vier-api.000webhostapp.com/note/add',
					headers: { 'Content-Type': 'application/json' },
					data
				}).then((res) => {
					// console.log(res.data);
					this.Notify(res.data.message, res.data.type);
					if (res.data.clearForm === true) {
						this.title = '';
						this.author = ''; 
						this.body = ''; 
						this.description = '';
					}
				}).catch((err) => {
					this.Notify(err, 'error');
					// console.log(err);
				}).finally(() => {
					this.loading = false;
				})
			},
			Notify: function(message ,type) {
				this.$notify({
                    title: '',
                    type,
                    message,
                    duration: 5000
				});
			}
		}
	}
</script>

<style scoped>
	@media only screen and (max-width: 799px) {
		.editor {
			margin-top: -20px !important;
			margin-bottom: 80px !important;
		}

		textarea {
			border-right: none !important;
			height: 100px !important;
		}
	}

	.editor {
		display: flex;
		flex-direction: column;
		margin: 0;
		color: #333;
		margin-top: 70px;
	}

	textarea {
		border: none;
		border-right: 1px solid #ccc;
		resize: none;
		outline: none;
		background-color: #f6f6f6;
		font-size: 14px;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		padding: 20px;
		height: 300px;
		width: calc(87vw - 10px);
	}

	code {
		color: #f66;
	}
</style>