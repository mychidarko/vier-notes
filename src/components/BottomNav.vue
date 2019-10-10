<template>
    <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" active-text-color="#16f">
        <el-menu-item index="1" route="/home" class="menu-item" aria-label="Home">
            <i class="el-icon-house footer-icon"></i>
        </el-menu-item>
        <el-menu-item index="2" route="/categories" class="menu-item" aria-label="Categories">
            <i class="el-icon-menu footer-icon"></i>
        </el-menu-item>
        <el-menu-item index="3" route="/add" class="menu-item" aria-label="Add Note">
            <i class="el-icon-plus footer-icon"></i>            
        </el-menu-item>
        <el-menu-item index="4" route="/search" class="menu-item" aria-label="Search">
            <i class="el-icon-search footer-icon"></i>
        </el-menu-item>
        <el-menu-item index="5" route="/authors" class="menu-item" aria-label="Authors">
            <i class="el-icon-user footer-icon"></i>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        props: [
            'activeIndex'
        ]
    }
</script>

<style scoped>
    @media only screen and (min-width: 800px) {
        .el-menu-demo {
            display: none !important;
        }
    }

    .el-menu-demo {
        min-width: 100% !important;
        z-index: 1 !important;
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        border-top: 1px solid #bebebe;
        background: white !important;
        text-align: center !important;
    }

    .menu-item {
        width: 20% !important;
        margin-bottom: 0px !important;
    }

    .footer-icon {
        font-size: 25px !important;
    }
</style>