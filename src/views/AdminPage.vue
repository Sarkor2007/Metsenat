<script setup>
import TheHeader from '../components/TheHeader.vue'
import NavigationPanel from '../components/NavigationPanel.vue'


import TheDashboard from '../components/TheDashboard.vue'
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
        TheDashboard,
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
            let path = `/admin/${this.selectedComponent}`
            this.$router.push(path)
        },
    },
    computed: {
        tabActived() {
            let activeTab
            for (const key in this.$store.state.tabView) {
                if (`/admin/${this.$store.state.tabView[key].value}` == this.$route.path) {
                    activeTab = this.$store.state.tabView[key].id
                    this.$store.commit('CHANGE_TAB_ACTIVE', this.$store.state.tabView[key])
                    let data = JSON.stringify(this.$store.state.tabView)
                    localStorage.setItem('tabVie    w', data)
                }
            }
            return activeTab
        },
    },
    mounted() {
        if (this.$route.path === '/admin/dashboard') {
            this.selectedComponent = 'dashboard';
        } else if (this.$route.path === '/admin/sponsors') {
            this.selectedComponent = 'sponsors';
        } else if (this.$route.path === '/admin/students') {
            this.selectedComponent = 'students';
        }
        
        const activeItem = this.$store.state.tabView.find(item => item.active);

        if (activeItem) {
            this.$router.push(`/admin/${activeItem.value}`);
        }


    }
}
</script>


<template>
    <the-header />
    <navigation-panel @updateSelectedComponent="updateSelectedComponent"
        :selectedComponent="this.selectedComponent" />
    <div class="wrapper">
        <TheDashboard v-if="this.tabActived == 1" />
        <sponsors v-else-if="this.tabActived == 2" />
        <students v-else-if="this.tabActived == 3" />
    </div>

    <sponsor-modal-filter />
    <students-modal-filter />
</template>