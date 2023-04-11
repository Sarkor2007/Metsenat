import axios from 'axios'

export default {
    actions: {
        fetchSponsors(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/')
                .then((res) => {
                    context.commit("UPDATE_SPONSORS", res.data)
                })
        }
    },
    mutations: {
        UPDATE_SPONSORS(state, payload) {
            state.sponsors = payload
        }
    },
    state: {
        sponsors: []
    },
    getters: {
        getSponsorsList(state) {
            return state.sponsors.results
        }
    }
}