<template>
    <div id="login" class="login">
        <div class="row"><label>用户名：</label>&emsp;<input placeholder="用户名" name="username" v-model="userName"></div>
        <div class="row"><label>密&emsp;码：</label>&emsp;<input type="password" placeholder="密码" name="password" v-model="password"></div>
        <div class="row"><input type="button" value="登录" name="login" @click="login"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "login",
        data(){
            return { 
                userName:"",
                password: ""
            };
        },
        computed: mapState.userInfo,
        methods: {
            login(){
                let result = { userId: "1234", userName: this.userName, authority: "schoolManager"};
                localStorage.setItem("user-info", JSON.stringify(result));
                localStorage.setItem("token", "2142352342");
                this.$store.commit("INITIALIZE_DATA", result);
                this.$router.push({path: "home"});
            }
        }
    }

</script>

<style>
    .login{
        text-align: center;
    }

    .row{
        margin-bottom: 20px;
    }
</style>