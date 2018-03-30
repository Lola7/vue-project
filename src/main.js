// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false;

if(localStorage.token){
    let userInfo = JSON.parse(localStorage.getItem("user-info"));
    let data = {
        userName: userInfo.userName,
        userId: userInfo.userId,
        authority: userInfo.authority
    };
    store.dispatch("INITIALIZE_DATA", data);
}
router.beforeEach((to, from, next) => {
console.log(store.state.userInfo.userId);
    if(store.state.userInfo.userId !== ""){
console.log("333");
        next("login");
    }else{
console.log("222");
        next();
    }
})

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount("#app")
