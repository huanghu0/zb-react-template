import request from '../index'
export function getPermissionInfo(){
    return request({
        url:'/perminfo'
    })
}