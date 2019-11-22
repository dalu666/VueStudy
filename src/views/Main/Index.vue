<template>
    <div class="tc" id="box">
        <div v-dir1>自定义指令</div>
        <div class="icon" id="abc"></div>
        <input type="text" >
    </div>
</template>
<script>
export default {
    name:'Main',
    data(){
        return {

        }
    },
    created(){
        let arr=[1,2,3,4,5]
        let str="asdfgABCc0d0e0f";
        console.log(str.toLowerCase())
        
    },
    mounted(){
        let box=document.getElementById('box');
        let children=box.children;
         for(let i=0;i<children.length;i++){
            console.log(children[i].className.includes('icon'))
        }
    },
    // 自定义指令
    directives:{
        dir1:{
            inserted(el){
                // console.log(arguments)
            }
        }
    },
    methosd:{
        isIcon(e){
            return e.id.includes('abc')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .tc{
        text-align:center;
    }
</style>



