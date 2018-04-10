<template>
    <div class="dialog">
        <div class="simple-dialog" v-bind:style="dialogBoxStyle" id="simple_dialog">
            <div class="dialog-header">
                <label>{{title}}</label>
                <span class="dialog-close" @click="close">×</span>
            </div>
            <div class="dialog-content">
                <slot></slot>
            </div>
        </div>
        <div class="dialog-shade" v-bind:style="shadeBoxStyle"></div>
    </div>

</template>

<script>
    export default {
        name: "dialog-model",
        props: ["title"],
        data(){
            return {
                shadeBoxStyle: { width: "0", height: "0"},
                dialogBoxStyle: { left: "0", top: "0"}
            }
        },
        updated(){
            let width = document.body.clientWidth,
                height = document.body.clientHeight;
            this.shadeBoxStyle.width = width + "px";
            this.shadeBoxStyle.height = height + "px";
            this.dialogBoxStyle.left = (width - document.getElementById("simple_dialog").clientWidth) / 2 + "px";
            this.dialogBoxStyle.top = (height - document.getElementById("simple_dialog").clientHeight) / 2 + "px";
        },
        created(){
console.log("dialog created");
        },
        methods: {
            close(){
                this.$emit("closeDialog");
            }
        }
    }

</script>

<style>
   html, body{
        height: 100%;
        width: 100%;
    } 
</style>

<style scope>
    .dialog{
        position: fixed;
        top:0;
        left:0;
    }

    .dialog-shade{ 
        width: 100%;
        height: 100%;
        background-color: rgba(10, 10, 10, 0.5);
    }

    .simple-dialog{
        position: fixed;
        box-shadow: 0px 0px 10px rgba(130, 107, 36, 0.8);
    }

    .dialog-header{
        background: #b9993c;
        padding: 0 10px;
        line-height: 30px;
        display:  flex;
        justify-content:  space-between;
        color:  #fff;
    }

    .dialog-close{
        font-size: 24px;
        cursor: pointer;
    }
    .dialog-close:hover{
        color: #91782d;
    }

    .dialog-close:active{
        color: #6c571a;
    }

    .dialog-content{
        background: #eee;
        padding: 20px;
    }
</style>