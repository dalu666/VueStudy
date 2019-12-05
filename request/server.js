import axios from 'axios';
// 获取token
function getTokenByLocal(){
    let token =sessionStorage.getItem('token') || '';
    return;
}
// 创建实列
const serive =axios.create({
    baseUrl:'/api',
    timeout:500
})
// request 请求拦截
serive.interceptors.request.use(
    config=>{
        if(getTokenByLocal()){
            config.headers['token']=getTokenByLocal();
            config.headers['ContentType']='application/json;charse=utf-8';
        }
        return config;
    },
    error=>{
        Promise.reject(error)
    }
)

// response 响应拦截器
serive.interceptors.response.use(
    response=>{
        let res=response.data;
        if(res.code==200){
            //do something
        }else{
            //do something
        }
        return Promise.resolve(response.data)
    },
    error=>{
        return Promise.reject(error)
    }
)

export default serive;