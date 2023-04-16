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
    name: "AdminPage",
    component: {
        TheHeader,
        NavigationPanel,
        Dashboard,
        Sponsors,
        Students,
        SponsorModalFilter,
        StudentsModalFilter,

    },
    data() {
        return {
            selectedComponent: ''
        }
    },
    methods: {
        updateSelectedComponent(newSelectedComponent) {
            this.selectedComponent = newSelectedComponent;
        }
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
        },
        componentPath() {
            return `/admin/${this.selectedComponent}`
        }
    },
    watch: {
        componentPath(newPath) {
            this.$router.push(newPath)
        }
    },
    mounted() {
        const activeItem = this.$store.state.tabView.find(item => item.active);

        if (activeItem) {
            this.$router.push(`/admin/${activeItem.value}`);
        }

        this.$store.dispatch('fetchSponsors', 1)
        this.$store.dispatch('fetchStudents', 1)

    }
}
</script>


<template>
    <the-header />
    <navigation-panel @updateSelectedComponent="updateSelectedComponent"
        :selectedComponent="this.selectedComponent" />
    <div class="wrapper">
        <dashboard v-if="this.tabActived == 1" />
        <sponsors v-else-if="this.tabActived == 2" />
        <students v-else-if="this.tabActived == 3" />
    </div>

    <sponsor-modal-filter />
    <students-modal-filter />
</template>