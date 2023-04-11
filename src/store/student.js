import axios from 'axios'

export default {
    actions: {
        fetchStudents(context) {
            axios.get('https://metsenatclub.xn--h28h.uz/api/v1/student-list/')
                .then((res) => {
                    context.commit("UPDATE_STUDENTS", res.data)
                })
        }
    },
    mutations: {
        UPDATE_STUDENTS(state, payload) {
            state.students = payload
        }
    },
    state: {
        students: []
    },
    getters: {
        getStudentsList(state) {
            return state.students.results
        }
    }
}