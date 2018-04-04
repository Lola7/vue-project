import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'app',
            component: App,
            children: [
                //主页
                {   
                    path: '/home', 
                    name: 'home', 
                    component: () => import('@/page/home/home'), meta: {requiresAuth: true, role:'all'},
                    children: [
                        //学校列表
                        {
                            path: 'school-list', 
                            name: 'schoolList', 
                            component: () => import('@/page/school-list/school-list'), meta: {requiresAuth: true, role:'schoolManager'}
                        }
                    ]
                },
                //登录
                {path: '/login', name: 'login', component: () => import('@/page/login/login')},

                //学校列表
                // {path: '/school-list', name: 'schoolList', component: () => import('@/page/school-list/school-list'), meta: {requiresAuth: true, role:'schoolManager'}},
                
                //错误页面
                {path: '/error-page', name: 'error-page', component: () => import('@/page/error-page/error-page')}
            ]
        }
    ]
})
