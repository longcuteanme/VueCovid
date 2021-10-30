import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import CountryDetail from './pages/CountryDetail.vue'
import Page404 from './pages/Page404.vue'

const routes=[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/country/:id',
        name:'countryDetail',
        component:CountryDetail
    },
    {
        path: '*',
        name:'404',
        component:Page404
    }
]

export const router = new VueRouter({
    routes
})