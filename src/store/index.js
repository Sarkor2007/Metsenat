import { createStore } from 'vuex'
import sponsor from './sponsor.js'



const store = createStore({
    modules: {
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
            sponsorsList: [
                {
                    id: 1,
                    name: 'Alimov Abror Xabibullayevich',
                    tel: '+99899 973-72-60',
                    sumSponsor: 30000000,
                    sumSpent: 0,
                    date: '15.01.2021',
                    status: 'Yangi',
                    howis: 'new'
                },
                {
                    id: 2,
                    name: 'Saimov Rustam Saimjonovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: 1000000,
                    sumSpent: 0,
                    date: '02.02.2021',
                    status: 'Moderatsiyada',
                    howis: 'moderation'
                },
                {
                    id: 3,
                    name: 'Sanginov Otabek Muratovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: 5000000,
                    sumSpent: 5000000,
                    date: '20.04.2021',
                    status: 'Tasdiqlangan',
                    howis: 'actived'
                },
                {
                    id: 4,
                    name: 'Nazarov Sanjar Olimovich',
                    tel: '+99899 973-72-60',
                    sumSponsor: 7000000,
                    sumSpent: 7000000,
                    date: '03.05.2021',
                    status: 'Bekor qilingan',
                    howis: 'cancel'
                },
            ]
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