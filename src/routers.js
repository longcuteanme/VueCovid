import VueRouter from 'vue-router'
import Home from './pages/Home.vue'

const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    }
]

export const router = new VueRouter({
    routes
})