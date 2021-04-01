import request from '@/utils/request'

/* *
* 接口说明：
* 以下请求为报名首页接口请求
*/

// 提交报名信息
export function fetchList(query) {
  return request({
    url: '/api/ad_users/users/',
    method: 'get',
    params: query
  })
}

