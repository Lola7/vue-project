<template>
    <div class="login">
        <div class="row"><label>用户名：</label>&emsp;<input placeholder="用户名" name="username" v-model="userName"></div>
        <div class="row"><label>密&emsp;码：</label>&emsp;<input type="password" placeholder="密码" name="password" v-model="password"></div>
        <div class="row"><input type="button" value="登录" name="login" @click="login"></div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        name: "login",
        data(){
            return { 
                userName: "",
                password: ""
            };
        },
        computed: mapState.userInfo,
        methods: {
            ...mapMutations(['RECORD_USERINFO']),
            login(){
                let result = { token:"231432", userId: "1234", userName: this.userName, role: "schoolManager"};
                localStorage.setItem("token", "231432");
                localStorage.setItem("user-info", JSON.stringify(result));
                this.RECORD_USERINFO(result);
                this.$router.push({path: "home"});
            }
        }
    }

</script>

<style scoped>
    .login{
        text-align: center;
    }

    .row{
        margin-bottom: 20px;
    }
</style>