import types from "../mutation-type";
// import ajax from "@/util/ajax"

export default {
    state:{
        userId:"",
        userName:"",
        authority:""
    },

    actions:{
        //初始化用户信息
        initializeData({ commit }, data) {
            commit('types.INITIALIZE_DATA', data);
        }
    },

    mutations:{
        //初始化用户信息
        [types.INITIALIZE_DATA](state, userInfo){
            state.userId = userInfo.userId;
            state.userName = userInfo.userName;
            STATE.authority = userInfo.authority;
        }
    }
};