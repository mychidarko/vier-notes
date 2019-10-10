<template>
	<el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="responsive-card">
		<el-card shadow="hover" class="bordered-card">
			<img src="https://source.unsplash.com/random" class="book-cover">
			<div class="book-info">
				<div style="display: flex;">
					<h3 class="title">{{ title }}</h3>
					<div style="flex: 100;"></div>
					<div class="like"><i class="el-icon-star-off"></i> <span class="likes">{{ likes }}</span></div>
				</div>
				<p class="description">{{ description }}
				<div class="meta-data">
					<small>by</small> <span class="author">{{ author }}</span>
				</div>
				<div class="btn-container">
					<el-button class="read-btn"><el-link icon="el-icon-notebook-1" :href="url">Read {{ titleForBtn }}</el-link></el-button>
				</div>
			</div>
		</el-card>
	</el-col>
</template>

<script>
	export default {
        data: function () {
            return {
                url: `#/note/${this.id}`,
                titleForBtn: this.title.length > 30 ? "Note" : this.title
            }
        },
		props: [
			'title', 'likes', 'description', 'author', 'Notify', 'id'
		]
	}
</script>

<style scoped>
	@media only screen and (min-width: 800px) {
        .book-cover {
            width: 100% !important;
            height: 200px !important;
        }
	}

	.likes, .el-icon-user {
        font-size: 18px !important;
        margin-top: 2px;
    }

	.book-cover {
        width: 100%;
        height: 200px;
    }

	.title {
        font-size: 25px !important;
        font-weight: 520 !important;
        margin-bottom: -5px;
    }

	.responsive-card {
        padding: 10px 20px;
    }

    .bordered-card {
        border: 1px solid #bebebe;
        display: flex;
        flex-direction: column;
    }

    .bordered-card h3 {
        font-weight: 400;
    }

    .book-info {
        text-align: left !important;
    }

    .btn-container {
        margin-top: 30px !important;
    }

    .description {
        color: #8a8a8a !important;
    }

    .author {
        font-weight: 400;
        color: black !important;
    }

    .like {
        font-size: 25px !important;
        margin-top: 23px;
    }

    .read-btn {
        min-width: 100% !important;
        text-align: center !important;
    }
</style>