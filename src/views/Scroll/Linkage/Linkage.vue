<template>
    <div class="box">
        <div class="box-left" ref="leftWrap" >
            <ul class="leftList">
                <li v-for="(item,index) in leftList" :key="index" @click="handChange(index)" :class="selectOn==index?'on':''">{{item}}</li>
            </ul>
        </div> 
        <div class="box-right" ref="rightWrap">
            <ul class="rightList" ref="wrapRight">
                <li ref="rightItem" class="rightItem" v-for="(item,index) in leftList" :id="'warp'+index" :key="index">{{item}}</li>
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
            heightAll:[],
            scrollHeight:0
        }
    },
    created(){
        this.getData();
    },
    computed:{
        selectOn(){
            let index=this.heightAll.findIndex((item,index)=>{
                return this.scrollHeight>=this.heightAll[index] && this.scrollHeight<this.heightAll[index+1]
            })
            return index>0?index:0;
        }
    },
    methods:{
        getData(){
            for(let i=0;i<20;i++){
                this.leftList.push(i)
                this.rightList.push(i)
            }
            this.$nextTick(()=>{
                this.initScroll();
                this.getGoodHeight();
            })
        },
        initScroll(){
            let that=this;
            this.leftScroll=new BScroll(this.$refs.leftWrap,{
                scrollY:true,
                click:true,
                // scrollbar: {//开启显示滚动条
                //     fade: true,
                //     interactive: false 
                // },
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
            this.rightScroll.on('scroll',(pos)=>{
                this.scrollHeight=Math.abs(Math.round(pos.y));
            })
        },
        getGoodHeight(){
            let liNum=this.$refs.rightItem;
            let height=0;
            this.heightAll.push(height)
            liNum.forEach(item=>{
                height +=item.clientHeight;
                this.heightAll.push(height)
            })
        },
        handChange(index){
            let elList= this.$refs.rightItem//document.getElementsByClassName('rightList')[0];
            let el=this.$refs.rightItem[index];
            this.rightScroll.scrollToElement(el,800)
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
        position relative
        height 100%
        width 1rem
        border-right 1px solid #ccc 
        box-sizing border-box 
        overflow hidden
        .leftList
            height:auto;
            width 100%
            li 
                text-align center
                height .4rem
                line-height .4rem
                border-1px(#ccc)
                &.on 
                    background blue 
                    color #fff 
    .box-right
        position relative
        flex 1
        height 100%
        width 1rem
        overflow hidden
        .rightList
            width 100%
            li 
                text-align center
                height 4rem
                line-height 4rem
                border-1px(#ccc)
                box-sizing border-box

</style>