<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>
<script>
import tabbar from './components/common/tabbar/tabbar.vue'
export default {
  name: 'app',
  components:{
    tabbar:tabbar
  }

}
</script>
<style>
@import "../src/assets/css/base.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
