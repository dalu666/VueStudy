export function checkArray(key){
    let arr=['1','2','3','5']
    let index=arr.indexOf(key);
    if(index>-1){
        return true;
    }else{
        return false;
    }
}