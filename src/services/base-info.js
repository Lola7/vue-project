/**
 * base-info.js

 * 概述:
 * 基础信息服务API
 *
 * API:
 * 1.查询学校列表接口  
 * querySchoolList
 *
 * @author Qiutm 2018/4/2
 */

import ajax from '@/util/ajax';

const URL = window.location.protocol + '//' + window.location.host;

/**
 * 查询学校列表接口
 * @param [data] [查询参数] 'app=getShoolMemberList&flag=query&json={"orgId":"1521686832049","name":"","organizationId":"1521686832049","schoolName":""}'
 * @return promise
 */
export const querySchoolList = (data='') => ajax('POST', URL + '/InfoServer/user/orgContact.jsp', data);