<script setup>
import TheHeader from '../components/TheHeader.vue'
import Single from '../components/single/Single.vue'
</script>

<script>
export default {
    name: "SinglePage",
    component: {
        TheHeader
    }
}
</script>

<template>
    <TheHeader />
    <Single />
</template>

<style lang="scss" scoped></style>