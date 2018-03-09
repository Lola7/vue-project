<template>
    <div class="time-wrap">
        时间：<span v-bind:class="timeFontColor">{{time}}</span>
    </div>
</template>

<script>

    export default {
        name: "Count",
        data(){
            return {time:60};
        },
        computed: {
            timeFontColor: function () {
                return {
                    'most-time': true,
                    'less-time': false,
                    'no-time': false
                }
            }
        }
    }

</script>

<style>
    .time-wrap{ color: #eee; margin: 0 20px; }

    .most-time{ color: #666; }

    .less-time{ color: #eee; }

    .no-time{ color: #aaa; }
</style>
