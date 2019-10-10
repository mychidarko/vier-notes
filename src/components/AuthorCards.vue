<template>
    <div>
        <div v-if="loading" class="loadingState" v-loading="loading"></div>
        <div v-else>
            <div v-if="error.length > 0" class="errorState">{{ error }}</div>
            <div v-else>
                <el-row :gutter="12" class="cards-container" style="overflow: auto;"  v-infinite-scroll="fetchMore">
                    <div  v-for="(author, index) in authors" :key="index">
                        <AuthorCard :name="author.name" :rating="author.rating" :email="author.email" :bookCount="author.book_count" :Notify="Notify" />
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import AuthorCard from './AuthorCard';

    export default {
        data() {
            return {
                authors: [],
                loading: true,
                error: ""
            }
        },
        components: {
            AuthorCard
        },
        methods: {
            Notify: function (title, message) {
                this.$notify({
                    title,
                    type: 'error',
                    message,
                    duration: 5000
                });
            },
            fetchMore: function() {
                axios
                    .get('http://localhost:8000/authors/all')
                    .then((res) => {
                        var authors = res.data;
                        this.authors = authors;
                    })
                    .catch((err) => {
                        this.error = `Oops!! ${err}`;
                    })
            }
        },
        mounted: function () {
            axios
                .get('http://localhost:8000/authors/all')
                .then((res) => {
                    var authors = res.data;
                    this.authors = authors;
                    this.loading = false;
                })
                .catch((err) => {
                    this.error = `Oops!! ${err}`;
                    this.loading = false;
                })
        }
    }
</script>

<style scoped>
    @media only screen and (min-width: 800px) {
        .cards-container {
            margin-top: 80px !important;
        }
    }

    @media only screen and (max-width: 799px) {
        .cards-container {
            margin-bottom: 60px !important;
        }
    }

    .loadingState, .errorState {
        height: 60vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>