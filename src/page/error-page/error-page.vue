<template>
    <div v-if="errorType === 'noAuthority'">没有权限</div>
    <div v-else-if="errorType === 'noPage'">页面找不到</div>
</template>

<script>

    export default {
        name: "errorPage",
        data(){
            return {
                errorType: ''  //errorType：noAuthority || noPage
            }
        },
        created(){
            this.errorType = this.$route.query.errorType;
        }
    }

</script>

<style scoped>

</style>