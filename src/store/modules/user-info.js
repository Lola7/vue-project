import type from "../mutation-type";
import ajax from "@/util/ajax"

export default {
    state:{
        userId:"",
        userName:"",
        authority:""
    },

    actions:{
        //初始化用户信息
        initializeData({ commit }) {
            commit('type.INITIALIZE_DATA');
        }
    },

    mutations:{
        //初始化用户信息
        [type.INITIALIZE_DATA](state){

            state.userId = userInfo.userId;
            state.userName = userInfo.userName;
            state.authority = userInfo.authority;
        }
    }
};