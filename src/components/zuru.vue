<template>
   <div>
       {{testProvid}} 
   </div>
</template>
<script>
export default {
    name:'Zuru',
    inject:['testProvid'],
    data(){
        return{
            content:''
        }
    },
    
    methods:{
        
    }
}
</script>
<style lang="stylus" scoped>
   
</style>