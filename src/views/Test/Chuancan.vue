<template>
    <div>
        <div class="box">
            参数1
            <div @click="handleFun">调用子组件方式</div>
            <fu-zi ref="childMethods"></fu-zi>
        </div>
    </div>
</template>
<script>

import fuZi from '../../components/fuzi'
export default {
    name:'Param',
    components:{fuZi},
    data(){
        return {

        }
    },
    created(){
        console.log( this.$route)
    },
    methods:{
       handleFun(){
           this.$refs.childMethods.test()
       }
    }
}
</script>
<style lang="stylus" scoped>
   
</style>