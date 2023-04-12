import axios from 'axios'

export default {
    actions: {
        fetchDashboard(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/dashboard/')
                .then((res) => {
                    context.commit("UPDATE_DASHBOARD", res.data)
                })
        }
    },
    mutations: {
        UPDATE_DASHBOARD(state, payload) {
            state.dashboard = payload
        }
    },
    state: {
        dashboard: []
    },
    getters: {
        getDashboardList(state) {
            return state.dashboard
        }
    }
}