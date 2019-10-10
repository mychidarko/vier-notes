<template>
  <div id="app">
    <router-view :hasAuth="hasAuth" :grantAuth="grantAuth" :logout="logout"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hasAuth: false
      }
    },
    methods: {
      grantAuth: function() {
        this.hasAuth = true;
      },
      logout: function() {
        this.hasAuth = false;
      }
    }
  }
</script>

<style>
  #app {
    margin: 0px;
    font-family: 'Gill Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important;
  }

  .flex-space {
    flex: 100
  }

  .margin-left-250 {
    margin-left: 250px !important;
  }

  .float-right {
    float: right !important;
  }
</style>
