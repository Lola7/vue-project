<template>
    <div>
        <div class="head">
            <menu></menu>
        </div>
        <div>
            
        </div>
    </div>
</template>

    import menu from '@/components/menu';
    export default {
        name: "home",
        components: {
            menu
        },
        created (){
            console.log(1111);
        }
    }
</script>

<style>
    
</style>