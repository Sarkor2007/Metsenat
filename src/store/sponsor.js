import axios from 'axios'

export default {
    actions: {
        fetchSponsors({ commit }, page) {
            axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/?page=${page}`)
                .then((res) => {
                    commit("UPDATE_SPONSORS", res.data)
                })
        }
    },
    mutations: {
        UPDATE_SPONSORS(state, payload) {
            state.sponsors = payload
        }
    },
    state: {
        sponsors: [],
        pageNumber: 1
    },
    getters: {
        getSponsorsList(state) {
            return state.sponsors.results
        }
    }
}