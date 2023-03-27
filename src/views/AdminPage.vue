<script setup>
import TheHeader from '../components/TheHeader.vue'
import NavigationPanel from '../components/NavigationPanel.vue'


import Dashboard from '../components/Dashboard.vue'
import Sponsors from '../components/Sponsors.vue'
import Students from '../components/Students.vue'




// modal windows
import SponsorModalFilter from '../components/modals/SponsorModalFilter.vue'
import StudentsModalFilter from '../components/modals/StudentsModalFilter.vue'
</script>

<script>
export default {
    component: {
        TheHeader,
        NavigationPanel,
        Dashboard,
        Sponsors,
        Students,
        SponsorModalFilter,
        StudentsModalFilter,

    },
    // data() {
    //     return {
    //     }
    // },
    computed: {
        tabActived() {
            let activeTab
            for (const key in this.$store.state.tabView) {
                if (this.$store.state.tabView[key].active == true) {
                    activeTab = this.$store.state.tabView[key].id
                }
            }

            return activeTab
        },
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

    <sponsor-modal-filter />
    <students-modal-filter />
</template>