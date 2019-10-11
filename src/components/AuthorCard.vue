<template>
	<el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="responsive-card">
		<el-card shadow="hover" class="bordered-card">
			<img src="https://source.unsplash.com/random" class="book-cover" alt="book cover">
			<div class="book-info">
				<div style="display: flex;">
					<h3 class="title">{{ name }}</h3>
					<div style="flex: 100;"></div>
					<div class="like"><i class="el-icon-thumb"></i> <span class="likes">{{ rating }}</span></div>
				</div>
				<p class="description">{{ email }} - {{ bookCountData }}</p>
				<div class="btn-container">
					<el-button class="read-btn" @click="Notify('Unavailable', name + ' is not available at the moment')">View Author</el-button>
				</div>
			</div>
		</el-card>
	</el-col>
</template>

<script>
	export default {
        data: function () {
            return {
                bookCountData: ''
            }
        },
        mounted: function() {
            this.bookCountData = this.bookCount === 1 ? "1 book" : this.bookCount + " books";
        },
		props: [
			'name', 'rating', 'email', 'Notify', 'bookCount'
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
</style>