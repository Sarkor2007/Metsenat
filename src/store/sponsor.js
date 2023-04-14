import axios from 'axios'

export default {
    actions: {
        fetchSponsors({ commit, state }, page) {
            if (typeof page == 'number') {
                state.pageNumber = page
            } else if (page == 'minus') {
                state.pageNumber--
            } else if (page == 'plus') {
                state.pageNumber++
            }
            axios.get(`https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/?page=${state.pageNumber}`)
                .then((res) => {
                    commit("UPDATE_SPONSORS", res.data)
                    commit("UPDATE_SPONSORS_PAGES", res.data)
                })
        }
    },
    mutations: {
        UPDATE_SPONSORS(state, payload) {
            state.sponsors = payload
        },
        UPDATE_SPONSORS_PAGES(state, payload) {
            state.pagesCount = payload.count
        },
    },
    state: {
        sponsors: [],
        pageNumber: 1,
        pagesCount: null
    },
    getters: {
        getSponsorsList(state) {
            return state.sponsors.results
        },
        getSponsorsCount(state) {
            return {
                count: state.pagesCount,
                active: state.pageNumber
            }
        }
    }
}