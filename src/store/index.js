import { createStore } from 'vuex'
import sponsor from './sponsor.js'
import student from './student.js'



const store = createStore({
    modules: {
        student,
        sponsor
    },
    state() {
        return {
            tabView: [
                {
                    id: 1,
                    active: true,
                    title: 'Dashboard',
                    value: "dashboard"
                },
                {
                    id: 2,
                    active: false,
                    title: 'Homiylar',
                    value: "sponsors"
                },
                {
                    id: 3,
                    active: false,
                    title: 'Talabalar',
                    value: "students"
                }
            ],
            isModalFilterSponsor: false,
            isModalFilterStudents: false,
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
            selectedStatus: 'all',
            selectedType: 'all',
            selectedUniversity: 'all',
            studentsList: [
                {
                    // id: 1,
                    name: 'Alimov Abror Xabibullayevich',
                    type: 'Bakalavr',
                    otm: 'Toshkent shahridagi INHA Universiteti',
                    university: 'inha',
                    sumSpent: '14 000 000',
                    sumContract: '30 000 000',
                },
                {
                    // id: 2,
                    name: 'Saimov Rustam Saimjonovich',
                    type: 'Magistr',
                    otm: 'O’zbekiston milliy universiteti',
                    university: 'milliy',
                    sumSpent: '28 000 000',
                    sumContract: '28 000 000',
                },
            ],
        }
    },
    mutations: {
        NEW_TAB_VIEW(state, data) {
            state.tabView = data
        },
        CHANGE_TAB_ACTIVE(state, item) {
            for (const key in store.state.tabView) {
                state.tabView[key].active = false
            }
            item.active = true
        },
        TOGGLE_FILTER_SPONSOR(state) {
            state.isModalFilterSponsor = !state.isModalFilterSponsor;
        },
        TOGGLE_FILTER_STUDENTS(state) {
            state.isModalFilterStudents = !state.isModalFilterStudents;
        },
        UPDATE_SELECTED_STATUS(state, value) {
            state.selectedStatus = value;
        },
        UPDATE_SELECTED_TYPE(state, value) {
            state.selectedType = value;
        },
        UPDATE_SELECTED_UNIVERSITY(state, value) {
            state.selectedUniversity = value;
        },
        ADD_NEW_STUDENT(state, data) {
            state.studentsList.push(data)
        }
    }
})


export default store