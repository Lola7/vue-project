<template>
    <div>
        <table class="school-list">
            <thead>
                <tr>
                    <th>学校名称</th>
                    <th>学校代码</th>
                    <th>学校类型</th>
                    <th>信息管理员姓名</th>
                    <th>手机号码</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="schoolList.length === 0"><td colspan="6"><loading></loading></td></tr>
                <tr v-for="item in schoolList">
                    <td>{{ item.orgName }}</td>
                    <td>{{ item.schoolCode }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.userName }}</td>
                    <td>{{ item.mobilePhone }}</td>
                    <td><a class="listUser" @click="show(item.organizationId)" href="javascript:void(0)">成员</a></td>
                </tr>
            </tbody>
        </table>
        <member-info v-bind:showMember="showMember" v-bind:organizationId="selectedOrganizationId"  v-on:hide="hide"></member-info>
    </div>   
</template>

<script>
    /**
     * school-list
     * 
     * 概述:
     * 学校列表管理
     *
     * 功能：
     * 1.展示学校列表
     * 2.提供搜索学校，查看成员方法
     *
     * @author Qiutm 2018/4/2
     */
    import {querySchoolList} from '@/model/base-info';
    import memberInfo from '@/page/member-info/member-info';

    export default {
        name: 'schoolList',
        components: {
            // 'dialog-model': dialog,
            'member-info': memberInfo
        },
        data(){
            return {
                schoolList: [],
                selectedOrganizationId: '',
                showMember: false
            };
        },
        created(){
            //获取学校列表
            var self = this;
            // 假数据
            let data = 'app=getShoolMemberList&flag=query&json={"orgId":"1521686832049","name":"","organizationId":"1521686832049","schoolName":""}';
            querySchoolList(data).then(
                function (data) {
                    if(data && data.length !== 0){
                        data[0].forEach(function (val) {
                            self.schoolList.push(val);
                        })
                    }
                }, 
                function (error) {
                  
                }
            );
        },
        methods:{
            //展示学校成员
            show(id){
                this.showMember = true;
                this.selectedOrganizationId = id;
            },
            //关闭成员显示
            hide(payload){
                this.showMember = payload.showMember;
            }
        }
    }

</script>

<style scoped>
    .school-list{
        width: 100%;
        text-align: center;
        background-color: #f6f4f0;
        border-collapse: collapse;
        box-shadow: 0 4px 4px rgba(0,0,0,0.3);
    }

    .school-list th{
        padding: 10px 0;
        background-color: #eae4c8;
    }

    .school-list td{
        padding: 10px 0;
        border-bottom: 1px solid #eae4c8;
    }
</style>