import { createStore } from 'vuex'


const store = createStore({
    state() {
        return {
            tabView: [
                {
                    id: 1,
                    active: false,
                    title: 'Dashboard',
                },
                {
                    id: 2,
                    active: true,
                    title: 'Homiylar',
                },
                {
                    id: 3,
                    active: false,
                    title: 'Talabalar',
                }
            ],
            isModalFilterSponsor: false,
            sponsorSumsFilter: [
                {
                    money: 'Barchasi',
                    active: true,
                    type: 'all'
                },
                {
                    money: 1000000,
                    active: false
                },
                {
                    money: 5000000,
                    active: false
                },
                {
                    money: 7000000,
                    active: false
                },
                {
                    money: 10000000,
                    active: false
                },
                {
                    money: 30000000,
                    active: false
                },
                {
                    money: 50000000,
                    active: false
                },
            ],
        }
    },
    mutations: {
        CHANGE_TAB_ACTIVE(state, item) {
            for (const key in store.state.tabView) {
                this.state.tabView[key].active = false
            }
            item.active = true
        },
        TOGGLE_FILTER_SPONSOR(state) {
            if (state.isModalFilterSponsor == false) {
                state.isModalFilterSponsor = true;
            } else {
                state.isModalFilterSponsor = false
            }
        }
    }
})


export default store