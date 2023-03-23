<script setup>
import TheHeader from './components/TheHeader.vue'
import NavigationPanel from './components/NavigationPanel.vue'
import Dashboard from './components/Dashboard.vue'
</script>

<template>
  <TheHeader />
  <NavigationPanel />
  <Dashboard />
</template>

<style>
.container {
  width: 100%;
  max-width: 1224px;
  padding: 0px 12px;
  margin: auto;
}
</style>
