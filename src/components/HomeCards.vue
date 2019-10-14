<template>
    <div>
        <div v-if="loading" class="loadingState" v-loading="loading"></div>
        <div v-else>
            <div v-if="error.length > 0" class="errorState">{{ error }}</div>
            <div v-else>
                <el-row :gutter="12" class="cards-container" style="overflow: auto;"  v-infinite-scroll="fetchMore">
                    <div  v-for="(book, index) in books" :key="index">
                        <Card :title="book.title" :likes="book.likes" :id="book.id" :description="book.description" :author="book.author" :Notify="Notify" />
                    </div>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Card from './Card';

    export default {
        data() {
            return {
                books: [],
                loading: true,
                error: ""
            }
        },
        components: {
            Card
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
                    .get('https://vier-api.000webhostapp.com/books/all')
                    .then((res) => {
                        var books = res.data;
                        this.books = books;
                    })
                    .catch((err) => {
                        this.error = `Oops!! ${err}`;
                    })
            }
        },
        mounted: function () {
            axios
                .get('https://vier-api.000webhostapp.com/books/all?limit=4')
                .then((res) => {
                    var books = res.data;
                    this.books = books;
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