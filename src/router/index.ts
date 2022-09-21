import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: () => import('../views/home.vue') },
        {path: '/about',name: 'About',component: () => import('../views/about.vue')},
        {path: '/:pathmatch(.*)*',name: 'NotFound',component: () => import('../views/404.vue')}
    ]
}) 

export default router