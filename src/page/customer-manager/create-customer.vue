<template>
    <div class="org-manager">
        <ul class="info-list">
            <li class="info-item">
                <div class="info-header">
                    <div class="title">客户信息</div>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col">
                            <span class="input-name">机构名称：</span>
                            <input type="text" name="orgName" class="input-text" placeholder="罗湖区教育局">
                            <p class="tips">机构名称最多 50 个汉字</p>
                        </div>
                        <div class="col">
                            <span class="input-name">机构编码：</span>
                            <input type="text" name="orgCode" class="input-text" placeholder="9位数字">
                            <p class="tips">机构编码必须是 9 位数字</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-org-type">
                            <span class="input-name">机构类型：</span>
                            <div class="radio-wrapper">
                                <input type="radio" name="orgType" id="org-type-0" value="0" checked>
                                <label for="org-type-0">教育管理机构</label>
                            </div>
                            <div class="radio-wrapper">
                                <input type="radio" name="orgType" id="org-type-1" value="1">
                                <label for="org-type-1">学校</label>
                            </div>
                        </div>
                        <div class="col col-step">
                            <span class="input-name">学阶：</span>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" name="stepInfos" id="step-id-3" value="3" data-name="小学" checked disabled>
                                <label for="step-id-3">小学</label>
                            </div>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" name="stepInfos" id="step-id-2" value="2" data-name="初中" checked disabled>
                                <label for="step-id-2">初中</label>
                            </div>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" name="stepInfos" id="step-id-1" value="1" data-name="高中" checked disabled>
                                <label for="step-id-1">高中</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span class="input-name">联系方式：</span>
                            <input type="text" name="orgTel" class="input-text" placeholder="必填">
                            <p class="tips">固话或手机号</p>
                        </div>
                        <div class="col col-region">
                            <span class="input-name">所在地域：</span>
                            <div class="region-block org-region">
                                <select class="cascade cascade-province">
                                    <option>省</option>
                                </select>
                                <select class="cascade cascade-city">
                                    <option>市</option>
                                </select>
                                <select class="cascade cascade-county">
                                    <option>区</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="info-item">
                <div class="info-header">
                    <div class="title">付费信息</div>
                </div>
                <div class="content">
                    <div class="payment">
                        <div class="row">
                            <div class="col full-col">
                                <span class="input-name">使用方式：</span>
                                <!-- <div class="radio-wrapper">
                                    <input type="radio" name="paid" id="paid-0" value="0">
                                    <label for="paid-0">试用</label>
                                </div> -->
                                <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
                                <div class="radio-wrapper" style="margin-left:46px;">
                                    <input type="radio" name="paid" id="paid-1" value="1" checked>
                                    <label for="paid-1">付费使用</label>
                                </div>
                                <span class="input-name">付费方：</span>
                                <input type="text" name="payer" class="input-text" placeholder="选填">
                            </div>
                        </div>
                        <div class="row pay-method-row">
                            <div class="pay-method">
                                <div class="method-type deadline">
                                    <!-- <div class="radio-wrapper borderless">
                                        <input type="radio" name="payMethod" id="DEADLINE" value="DEADLINE" checked>
                                        <label for="DEADLINE">按期限：</label>
                                    </div>
                                    <div class="date-input-wrapper" onclick="WdatePicker({el:'date-begin', skin: 'kaow-school', dateFmt:'yyyy-MM-dd', readOnly: true, maxDate: '#F{$dp.$D(\'date-end\')}'});">
                                        <input type="text" class="date-input" id="date-begin" placeholder="开始时间">
                                    </div>
                                    <span style="margin:0 15px;">至</span>
                                    <div class="date-input-wrapper" onclick="WdatePicker({el:'date-end', skin: 'kaow-school', dateFmt:'yyyy-MM-dd', readOnly: true, minDate: '#F{$dp.$D(\'date-begin\')}'});">
                                        <input type="text" class="date-input" id="date-end" placeholder="结束时间">
                                    </div> -->
                                </div>
                                <div class="method-divider"></div>
                                <div class="method-type counts">
                                    <div class="radio-wrapper borderless">
                                        <input type="radio" name="payMethod" id="COUNTS" value="COUNTS">
                                        <label for="COUNTS">按次数：</label>
                                    </div>
                                    <input type="number" name="maxCounts" class="input-text max-counts" value="0" min="0" step="1" disabled>
                                    剩余：<span class="left-counts">0</span>次
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span class="input-name">账号：</span>
                            <input type="text" name="account" class="input-text" title="添加成功后，由系统生成" disabled>
                        </div>
                        <div class="col">
                            <span class="input-name">初始密码：</span>
                            <input type="text" name="password" class="input-text initial-pwd" value="123456" disabled>
                            <button class="btn green init-pwd off">重置回初始密码</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <span class="input-name">手机号：</span>
                            <input type="text" name="mobile" class="input-text" placeholder="选填">
                            <p class="tips">手机号错误</p>
                        </div>
                    </div>
                </div>
            </li>
            <li class="info-item">
                <div class="info-header">
                    <div class="title">所属上级</div>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col full-col">
                            <div style="width:100%;">
                                <ul class="super-orgs">
                                    <!-- <li class="super-org">
                                        <div class="region-block">
                                            <select class="cascade cascade-province">
                                                <option>省</option>
                                            </select>
                                            <select class="cascade cascade-city">
                                                <option>市</option>
                                            </select>
                                            <select class="cascade cascade-county">
                                                <option>区</option>
                                            </select>
                                            <select class="cascade cascade-org">
                                                <option>无</option>
                                            </select>
                                        </div>
                                        <i class="iconfont icon-cuohao del-super-org" title="删除"></i>
                                    </li> -->
                                </ul>
                                <button class="btn add-super-org" title="增加所属上级">
                                    <i class="iconfont icon-jiahao"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="info-item">
                <div class="info-header">
                    <div class="title">图像上传</div>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col">
                            <span class="input-name">图像在：</span>
                            <div class="radio-wrapper">
                                <input type="radio" name="imgUrlType" id="img-url-type-0" value="0" checked>
                                <label for="img-url-type-0">我方阿里云</label>
                            </div>
                            <div class="radio-wrapper" style="margin-left:46px;">
                                <input type="radio" name="imgUrlType" id="img-url-type-1" value="1">
                                <label for="img-url-type-1">机构本地部署</label>
                            </div>
                        </div>
                        <div class="col">
                            <span class="input-name">图像地址：</span>
                            <input type="text" name="imgUrl" class="input-text" placeholder="http://imgali.kaow.cn/" disabled>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="btns">
            <button class="btn darkgreen save-org">保存</button>
            <button class="btn blue cancel">取消</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create-customer",
        data(){
            return {
                radio7: "2"
            }
        },
        created(){
            
        }
    }

</script>

<style scoped lang="sass">
    @import '../../assets/sass/create-customer.scss';
</style>