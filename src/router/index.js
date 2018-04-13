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
                            component: () => import('@/page/base-info/school-list'), meta: {requiresAuth: true, role:'schoolManager'}
                        }
                    ]
                },
                //登录
                {path: '/login', name: 'login', component: () => import('@/page/account/login')},

                //学校列表
                // {path: '/school-list', name: 'schoolList', component: () => import('@/page/school-list/school-list'), meta: {requiresAuth: true, role:'schoolManager'}},
                
                //客户管理--创建客户
                {path: '/create-customer', name: 'create-customer', component: () => import('@/page/customer-manager/create-customer')},
                
                //错误页面
                {path: '/error-page', name: 'error-page', component: () => import('@/page/error-page')}
            ]
        }
    ]
})
