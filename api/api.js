import requestOfGet from '../request/common';
// 细分解耦，高度封装，统一管理
export function getRequest(url,data){
    return new Promise((reslove,reject)=>{
        requestOfGet(url,data).then((res)=>{
            reslove(res)
        }).catch((error)=>{
            reject(error)
        })
    })
}



