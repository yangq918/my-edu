<template>
  <div id="app">
    <MainCompent/>
  </div>
</template>

<script>
import MainCompent from './components/MainCompent.vue'

export default {
  name: 'app',
  components: {

    MainCompent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}
</style>
