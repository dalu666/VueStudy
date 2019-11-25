<template>
    <div class="container">
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData" ref="waterfall" >
            <div class="img-info" slot-scope="props">
                <p class="some-info">第{{props.index+1}}张图片</p>
                <p class="some-info">{{props.value.info}}</p>
            </div>
            <div slot="waterfall-over">
                <div class="">
                    到底不了，也可以是别的内容。
                    
                </div>
            </div>
        </vue-waterfall-easy>
        <div class="wrap" ref="wrap">
            <div class="content">
                <ul>
                    <li v-for="(item,index) in date" :key="index">{{item}} </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BScorll from 'better-scroll'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
    name:'Scroll',
    data(){
        return{
            date:[],
            page:1,
            imgsArr:[],
            group: 0,
        }
    },
    components: {
        vueWaterfallEasy
    },
    created(){
        this.getData();
        this.$nextTick(()=>{
            this.initScroll();
        })
    },
    methods:{
        getData(page){
            console.log(this.group)
            if(this.group===2){
                this.$refs.waterfall.waterfallOver()
                return;
            }
            for(let i=10*(this.page-1);i<10*this.page;i++){
                this.date.push(i)
                let img={src:'http://39.105.45.48/img/kong.png?time='+i}
                this.imgsArr = this.imgsArr.concat(img)
            }
            this.group++;
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
<style lang="stylus"   scoped>
@import '../../../common/stylus/mixin.styl';
.container
    display flex
    flex-direction column
    width 100%
    height 100%
    padding-bottom .5rem
    box-sizing border-box
    .nav
        display flex 
        justify-content space-around
        height .4rem
        text-align center
        border-1px(#ccc)
        li 
            line-height .4rem
    .wrap
        position relative // 定位用来控制滚动条
        height 1rem
        margin-top 0.1rem
        border-top 1px solid #ccc
        overflow hidden
        ul 
            li
                height .8rem
                line-height .8rem
                border-1px(#ccc) 
</style>