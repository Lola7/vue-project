<template>
    <div>
        <dialog-model title="学校教师" v-on:closeDialog="closeDialog" v-show="showMember">
            <table>
                <thead>
                    <tr><th>角色</th><th>姓名</th><th>年段</th><th>科目</th><th>手机号码</th></tr>
                </thead>
                <tbody>
                    <tr v-for="item in teacherInfo">
                        <td>{{ item.role }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.userSection }}</td>
                        <td>{{ item.subjectName }}</td>
                        <td>{{ item.mobilePhone }}</td>
                    </tr>
                </tbody>
            </table>
        </dialog-model>
    </div>
</template>

<script>
    import dialog from '@/components/dialog';
    export default {
        name: "member-info",
        components:{
            "dialog-model": dialog,
        },
        props: ["organizationId", "showMember"],
        data(){
            return {
                teacherInfo: [{
                    name: "qiutm",
                    mobilePhone: "13413242344",
                    role: "teacher",
                    subjectName: "语文",
                    userId: "13432432",
                    userSection: "高中"
                }]
            }
        },
        created(){
console.log("member-info created");
        },
        watch:{
            organizationId: function () {
                //todo：查询对应organizationId的教师信息
            }
        },
        methods: {
            closeDialog: function () {
                this.$emit("hide", {showMember: false});
            }
        }
    }
</script>

<style scoped>

</style>