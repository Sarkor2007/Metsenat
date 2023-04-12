import axios from 'axios'

export default {
    actions: {
        fetchStudents(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/student-list/')
                .then((res) => {
                    context.commit("UPDATE_STUDENTS", res.data)
                })
        },
        postStudent({ commit }, payload) {
            axios.post(`https://metsenatclub.xn--h28h.uz/api/v1/student-create/`, payload)
                .then((res) => {
                    console.log('Ученик добавлен: ', res);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        getUniversity(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/institute-list/')
                .then((res) => {
                    context.commit('UPDATE_UNVERSITIES', res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    mutations: {
        UPDATE_STUDENTS(state, payload) {
            state.students = payload
        },
        UPDATE_UNVERSITIES(state, payload) {
            state.universityList = payload
        },
    },
    state: {
        students: [],
        universityList: []
    },
    getters: {
        getStudentsList(state) {
            return state.students.results
        },
        getUniversityList(state) {
            return state.universityList
        }
    }
}