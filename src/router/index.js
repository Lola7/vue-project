import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import HelloWorld from '@/components/HelloWorld'
// import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '@/page/home',
      name: 'home',
      component: import('@/page/home/home.vue')
    }
  ]
})
