<template>
    <ul class="menu">
        <li v-for="item in menu"><router-link :to="'/home/'+item.path">{{item.menuName}}</router-link></li>
    </ul>
</template>

<script>

    export default {
        name: "menuComp",
        data(){
            return {
                menu: [{
                    menuName:"学校",
                    path:"school-list"
                },{
                    menuName:"班级",
                    path:"class"
                },{
                    menuName:"教师",
                    path:"teacher"
                }]
            };
        },
        methods: {
            
        }
    }

</script>

<style scoped>
    .menu{
        list-style: none;
        margin: 0;
        padding: 20px;
        background-color: #eee;
        border: 1px solid #e0d19b;
        box-shadow: 0px 2px 6px rgba(100, 71, 6, 0.5);
    }

    .menu li{
        display: inline-block;
        margin: 0 20px;
    }
</style>