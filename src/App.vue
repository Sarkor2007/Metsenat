<script setup>
import TheHeader from './components/TheHeader.vue'
import NavigationPanel from './components/NavigationPanel.vue'


import Dashboard from './components/Dashboard.vue'
import Sponsors from './components/Sponsors.vue'
import Students from './components/Students.vue'
</script>

<script>
export default {
  component: {
    TheHeader,
    NavigationPanel,
    Dashboard,
    Sponsors,
    Students,
  },
  computed: {
    tabActived() {
      let activeTab
      for (const key in this.$store.state.tabView) {
        if (this.$store.state.tabView[key].active == true) {
          activeTab = this.$store.state.tabView[key].id
        }
      }

      return activeTab
    }
  }
}
</script>

<template>
  <TheHeader />
  <NavigationPanel />
  <div class="wrapper">
    <Dashboard v-if="this.tabActived == 1" />
    <Sponsors v-else-if="this.tabActived == 2" />
    <Students v-else-if="this.tabActived == 3" />
  </div>
</template>

<style>
.container {
  width: 100%;
  max-width: 1224px;
  padding: 0px 12px;
  margin: auto;
}
</style>
