<template>
  <div id="app">
    <WebDataRocks report="https://cdn.webdatarocks.com/reports/report.json" toolbar></WebDataRocks>
  </div>
</template>

<script>
import WebDataRocks from './components/WebDataRocks.vue'

export default {
  name: 'app',
  components: {
    WebDataRocks
  }
}
</script>

<style>
</style>
