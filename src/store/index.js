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
                    active: false,
                    title: 'Homiylar',
                },
                {
                    id: 3,
                    active: true,
                    title: 'Talabalar',
                }
            ]
        }
    },
    mutations: {
        CHANGE_TAB_ACTIVE(state, item) {
            for (const key in store.state.tabView) {
                this.state.tabView[key].active = false
            }
            item.active = true
        }
    }
})


export default store