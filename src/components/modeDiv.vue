<template>
    <div @dblclick="editFun">
        {{content}}
    </div>
</template>
<script>
export default {
    name:'modeDiv',
    data(){
        return{
            content:''
        }
    },
    methods:{
        editFun(){
            this.content='div'
        }
    }
}
</script>
<style lang="stylus" scoped>
    div{
        border:1px solid #ccc;
        position:absolute;
        width:100px;
        height:30px;
    }
</style>