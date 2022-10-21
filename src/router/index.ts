import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/contact', name: 'Contact', component: () => import('../views/contact.vue') },
        { path: '/:pathmatch(.*)*', name: 'NotFound', component: () => import('../views/404.vue') }
    ]
})

export default router