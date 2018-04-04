<template>
    <div>
        <div class="header">
            <menuComp></menuComp>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="footer">
            
        </div>
    </div>
</template>

<script>
    import menuComp from '@/components/menu';
    export default {
        name: "home",
        components: {
            menuComp
        },
        created (){
console.log(1111);
        }
    }
</script>

<style>
    
</style>