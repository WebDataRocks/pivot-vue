<script setup>
import { Pivot } from "@webdatarocks/vue-webdatarocks";
import TopMenu from "./components/TopMenu.vue";
import "@webdatarocks/webdatarocks/webdatarocks.css";
</script>

<template>
  <div id="container">
    <TopMenu />
    <div id="pivot">
      <Pivot 
         report="https://cdn.webdatarocks.com/reports/report.json"
         toolbar
         height="600"
      />
    </div>
  </div>
</template>
