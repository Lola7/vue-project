import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
    // mode: "history",
    routes: [
        {
            path: '/',
            name: 'app',
            component: App,
            children: [
                { path: '', name: 'authority', component: () => import('@/page/authority/authority')},
                { path: '/home', name: 'home', component: () => import('@/page/home/home')},
                { path: '/login', name: 'login', component: () => import('@/page/login/login')}
            ]
        }
    ]
})
