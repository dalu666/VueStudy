<template>
    <div>
        <div>render</div>
        <Button 
            :type="type"
            :text="text"
            @childevent="myevent"
        ></Button>
        <Button 
            :type="'danger'"
            :text="'危险的'"
            @childevent="dangerBtn"
        ></Button>
        <Button 
            :type="'normal'"
            :text="'普通的'"
            @childevent="infobtn"
        ></Button>
        <Button 
            :type="'waring'"
            :text="'错误'"
            @childevent="errorbtn"
        ></Button>
    </div>
</template>
<script>
import Button from "./Button"
export default {
    name:'render',
    data(){
        return {
            type:'success',
            text:'button'
        }
    },
    created(){
        let obj={a:1,b:2};
        let {a:localA,b,c=4}=obj;
        console.log(obj)

    },
    components:{Button},
    methods:{
        myevent(){
            console.log(123)
            this.$message.success('成功消息')
        },
        dangerBtn(){
            this.$message.warning('危险消息') 
        },
        infobtn(){
            this.$message.info('普通消息')
        },
        errorbtn(){
            this.$message.error('错误消息')
        },
    }
}
</script>