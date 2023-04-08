import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import AdminPage from '../views/AdminPage.vue'


import SingleSponsorPage from '../views/SingleSponsorPage.vue'
import SingleStudentsPage from '../views/SingleStudentsPage.vue'


import AddStudentPage from '../views/AddStudentPage.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/admin/students',
            name: 'students',
            component: AdminPage
        },
        {
            path: '/admin/sponsors',
            name: 'sponsors',
            component: AdminPage
        },
        {
            path: '/admin/dashboard',
            name: 'dashboard',
            component: AdminPage
        },
        {
            path: '/admin/sponsors/single/:id',
            name: 'singleSponsor',
            component: SingleSponsorPage
        },
        {
            path: '/admin/students/add',
            name: 'add',
            component: AddStudentPage
        },
        {
            path: '/admin/students/single/:id',
            name: 'singleStudents',
            component: SingleStudentsPage
        },
    ]
})

export default router