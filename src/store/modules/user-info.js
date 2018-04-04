import * as types from "../mutation-type";
// import ajax from "@/util/ajax"

export default {
    state:{
        token:"",
        userId:"",
        userName:"",
        role:""
    },

    actions:{
        //初始化用户信息
        recordUserInfo({ commit }, data) {
            commit(types.RECORD_USERINFO, data);
        }
    },

    mutations:{
        //初始化用户信息
        [types.RECORD_USERINFO](state, userInfo){
            state.token = userInfo.token;
            state.userId = userInfo.userId;
            state.userName = userInfo.userName;
            state.role = userInfo.role;
        }
    }
};