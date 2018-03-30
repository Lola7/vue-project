<template>
    <div id="login" class="login">
        <div class="row"><label>用户名：</label>&emsp;<input placeholder="用户名" name="username" v-model="userName"></div>
        <div class="row"><label>密&emsp;码：</label>&emsp;<input type="password" placeholder="密码" name="password" v-model="password"></div>
        <div class="row"><input type="button" value="登录" name="login" @click="login"></div>
    </div>
</template>

<script>

    export default {
        name: "login",
        data(){
            return {
                userName: "", 
                password: ""
            };
        },
        methods: {
            login(){
                this.$router.push({name: "home", params:{userId:"1234", authority:"schoolManager"}});
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