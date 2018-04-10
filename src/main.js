// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import router from './router';
import components from '@/components/global-components';

Vue.config.productionTip = false;
Vue.use(components);

if(localStorage.getItem("token")){
    let userInfo = JSON.parse(localStorage.getItem("user-info"));
    let data = {
        userName: userInfo.userName,
        userId: userInfo.userId,
        role: userInfo.role
    };
    store.dispatch("recordUserInfo", data);
}

//路由守卫：登录，角色权限验证
router.beforeEach((to, from, next) => {
    //1.通过路由名称是否为null判断此路径是否为空页面
    if(!to.name){
        next({ path: "/error-page", query: {errorType: "noPage"} });
    }else{
        //2.检查哪个路由记录需要登录验证
        if(to.matched.some(record => record.meta.requiresAuth)){
            if(store.state.userInfo.userId !== ""){
                //3.检查每个路由记录权限角色是否是当前角色
                if(to.matched.every(record => !record.meta.role || record.meta.role === store.state.userInfo.role || record.meta.role === "all")){
                    next();
                }else{
                    next({ path: "errorPage", query: {errorType: "noAuthority"} });
                }           
            }else{
                next({ path: "login", redirect: to.fullPath });
            }       
        }else{
            next();        
        }
    }   
});

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount("#app");
