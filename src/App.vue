<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import component from './components/component.vue'
import compoenetSetup from "./components/compoenetSetup.vue"
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <component :title-info="{value:'vue3 example one', color:'green'}"/>
  <compoenet-setup :title-info="{value:'vue3 example two', color:'red'}" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
