import serive from './server';
export default function requestOfGet(url,data){
    return serive.get(url,{params:data});
}