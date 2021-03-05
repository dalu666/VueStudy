<template>
   <div>
        父子
        <div @click="handleclick">调用父组件方法</div>
   </div>
</template>
<script>
export default {
    name:'Fuzi',
    data(){
        return{
            content:''
        }
    },
    
    methods:{
        // 父组件调用子组件方法
        test(){
            console.log('父元素调用了')
        },
        handleclick(){
            console.log(this.$parent)
        },
    }
}
</script>
<style lang="stylus" scoped>
   
</style>