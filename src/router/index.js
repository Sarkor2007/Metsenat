import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import AdminPage from '../views/AdminPage.vue'
import SinglePage from '../views/SinglePage.vue'





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminPage
        },
        {
            path: '/single',
            name: 'single',
            component: SinglePage
        }
    ]
})

export default router