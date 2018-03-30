// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    // body...
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount("#app")
