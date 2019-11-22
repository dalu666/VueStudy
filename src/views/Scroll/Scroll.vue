<template>
    <div class="box">
        <div>标题</div>
        <div class="wrap" ref="wrap">
            <div class="content">
                <ul>
                    <li v-for="(item,index) in date" :key="index">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScorll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
        return{
            date:[],
            page:1
        }
    },
    created(){
        
    },
    mounted(){
        this.getData();
        this.initScroll();
    },
    methods:{
        getData(page){
            for(let i=10*(this.page-1);i<10*this.page;i++){
                this.date.push(i)
            }
        },
        initScroll(){
            this.wrapScroll=new BScorll(this.$refs.wrap,{
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
                pullDownRefresh: {//开启下来刷新
                    threshold: 50,
                    stop: 20
                }
            })
            this.wrapScroll.on('pullingUp',()=>{
                let page=this.page++;
                this.getData(page)
                //********* */ 控制再次下拉*****
                this.wrapScroll.finishPullUp()  
                setTimeout(()=>{
                    this.wrapScroll.refresh()
                },800)
                // *********
            })
               
        },
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl';
.wrap
    position relative // 定位用来控制滚动条
    height 3rem
    margin-top 2rem
    overflow hidden
    ul 
        li
            height .8rem
            line-height .8rem
            border-1px(#ccc) 
</style>