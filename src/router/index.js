import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import AdminPage from '../views/AdminPage.vue'
import ClientPage from '../views/ClientPage.vue'


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
            component: AdminPage,
            meta: { needLogin: true }
        },
        {
            path: '/admin/sponsors',
            name: 'sponsors',
            component: AdminPage,
            meta: { needLogin: true }
        },
        {
            path: '/admin/dashboard',
            name: 'home',
            component: AdminPage,
            meta: { needLogin: true }
        },
        {
            path: '/admin/sponsors/single/:id',
            name: 'singleSponsor',
            component: SingleSponsorPage,
            meta: { needLogin: true }
        },
        {
            path: '/admin/students/add',
            name: 'add',
            component: AddStudentPage,
            meta: { needLogin: true }
        },
        {
            path: '/admin/students/single/:id',
            name: 'singleStudents',
            component: SingleStudentsPage,
            meta: { needLogin: true }
        },
        {
            path: '/client',
            name: 'client',
            component: ClientPage
        },
    ]
})


router.beforeEach((to, from) => {
    const auth = localStorage.getItem('token');
    if (auth && to.name == 'login' || auth && to.name == 'client') {
        return { name: 'home' };
    }

    if (!auth && to.meta.needLogin) {
        return { name: 'login' }
    }

});


export default router