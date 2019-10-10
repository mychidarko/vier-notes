<template>
    <div>
        <el-menu :default-active="activeIndex" :router="true" class="el-menu-pc" mode="horizontal">
            <el-menu-item index="1" route="home">Home</el-menu-item>
            <el-menu-item index="2" route="categories">Categories</el-menu-item>
            <el-menu-item index="3" route="authors">All Authors</el-menu-item>
            <el-menu-item index="4" route="library">Reading Lists</el-menu-item>
            <el-menu-item class="float-right">
                <el-input
                    @keyup.enter.prevent="searchFor"
                    placeholder="Search for a note, book or author ...."
                    prefix-icon="el-icon-search"
                    v-model="search"
                    clearable>
                </el-input>
            </el-menu-item>
        </el-menu>
        <div class="el-menu-mobile" mode="horizontal">
            <div class="greeting">
                <h5>{{ greeting }}</h5>
                <h2>{{ username }}</h2>
            </div>
            <div style="flex: 100;"></div>
            <div class="profile-pic">{{ username[0].toUpperCase() }}</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                greeting: this.getGreeting().toUpperCase(),
                search: ""
            }
        },
        props: [
            'username', 'activeIndex'
        ],
        methods: {
            searchFor: function() {
                alert('submitted');
            },
            getGreeting: function() {
                let hour = new Date().getHours();

                if (hour < 12) {
                    return "Good Morning";
                } else if (hour >= 12 && hour < 18) {
                    return "Good Afternoon";
                } else if (hour >= 18 && hour < 24) {
                    return "Good Evening";
                } else {
                    return "Good Day";                 
                }
            }
        }
    }
</script>

<style scoped>
    @media only screen and (max-width: 801px) {
        .el-menu-pc {
            display: none !important;
        }
    }

    @media only screen and (min-width: 800px) {
        .el-menu-mobile {
            display: none !important;
        }
    }

    .el-menu-pc {
        position: fixed !important;
        top: 0;
        width: 100% !important;
        z-index: 1;
    }

    * {
        font-family: 'Gill sans', sans-serif;
    }

    .el-menu-mobile {
        border: none !important;
        display: flex;
        margin-top: 15px;
    }

    .greeting {
        text-align: left !important;
        margin-top: -20px;
    }

    .greeting h5 {
        font-weight: 450;
    }

    .greeting h2 {
        margin-top: -20px;
        font-size: 25px;
        font-weight: 450;
    }

    .profile-pic {
        width: 50px;
        height: 50px;
        background: grey;
        border-radius: 50%;
        margin-bottom: 10px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 30px;
    }
</style>