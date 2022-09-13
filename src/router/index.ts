import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('../views/home.vue')
const About = () => import('../views/about.vue')

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
        }
    ]
}) 

export default router