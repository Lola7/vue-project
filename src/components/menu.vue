<template>
    <div class="menu">
        
    </div>
</template>

<script>

    export default {
        name: "menu",
        data(){
            return {
                menu: [{
                    menuName:"首页",
                    path:"home"
                },{
                    menuName:"科目",
                    path:"subject"
                },{
                    menuName:"班级",
                    path:"class"
                },{
                    menuName:"教师",
                    path:"teacher"
                }]
            };
        },
        
    }

</script>

<style>
   
</style>