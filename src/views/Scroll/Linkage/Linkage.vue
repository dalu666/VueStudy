<template>
    <div class="box">
        <div class="box-left" ref="leftWrap">
            <ul class="leftList">
                <li v-for="(item,index) in leftList" :key="index">{{item}}</li>
            </ul>
        </div> 
        <div class="box-right" ref="rightWrap">
            <ul class="rightList">
                <li v-for="(item,index) in leftList" :key="index">{{item}}</li>
            </ul>
        </div>   
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'Linkage',
    data(){
        return {
            leftList:[],
            rightList:[],

        }
    },
    created(){
       
        
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            for(let i=0;i<13;i++){
                this.leftList.push(i)
                this.rightList.push(i)
            }
            this.$nextTick(()=>{
                this.initScroll();
            })
        },
        initScroll(){
            this.leftScroll=new BScroll(this.$refs.leftWrap,{
                scrollY:true,
                click:true,
                scrollbar: {//开启显示滚动条
                    fade: true,
                    interactive: false 
                },
                probeType:3,//开启滚动事件
                pullUpLoad: {//开启上拉
                    threshold: 50
                },
            })
            this.rightScroll=new BScroll(this.$refs.rightWrap,{
                scrollY:true,
                click:true,
                scrollbar: {//开启显示滚动条
                    fade: true,
                    interactive: false 
                },
                probeType:3,//开启滚动事件
                pullUpLoad: {//开启上拉
                    threshold: 50
                },
            })
        }
    }
}
</script>
<style lang="stylus" >
@import '../../../common/stylus/mixin.styl';
.box
    display flex
    width 100%
    height 100%
    padding-bottom .5rem
    box-sizing border-box 
    .box-left
        display flex
        height 100%
        width 1rem
        border-right 1px solid #ccc 
        box-sizing border-box 
        overflow hidden
        .leftList
            width 100%
            li 
                text-align center
                height .4rem
                line-height .4rem
                border-1px(#ccc)
    .box-right
        flex 1
        display flex
        height 100%
        width 1rem
        overflow hidden

</style>