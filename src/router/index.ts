import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('../views/home.vue')
const About = () => import('../views/about.vue')
const NotFound = () => import('../views/404.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/:pathmatch(.*)*',
            name: 'notFound',
            component: NotFound
        }
    ]
}) 

export default router