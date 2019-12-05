<template>
    <div>
        <div class="title">getserve</div>
        <button @click="add">添加</button>
        <button @click="search">查找</button>
        <input type="text" v-model="id">
        <ul class="goodList">
            <li v-for="(item,index) in goodList" :key="index">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <span>{{item.desc}}</span>
                <span>{{item.price}}</span>
                 <span @click="updata(item.id)">修改</span>
                <span @click="del(item.id)">删除</span>
            </li>
        </ul>
    </div>
</template>
<script>
import url from '../../../request/apiUrl'
import {getRequest} from '../../../api/api'
import axios from 'axios'
export default {
    name:'Getserve',
    data(){
        return{
            goodList:[],
            id:''
        }
    },
    created(){
        let houseObj={};//发布者
        houseObj.list=[];//缓存列表（登记册）；
        // 添加订阅者
        houseObj.listen=function(fn){
            // 订阅消息添加到缓存列表
            this.list.push(fn);
        }
        // 发布
        houseObj.trigger=function(){
            for(let i=0,fn;fn=this.list[i++];){
                fn.apply(this,arguments)
            }
        }
        houseObj.listen(function(size){
            console.log('小红要的房子是'+size+'平米')
        })
        houseObj.listen(function(size){
            console.log('小绿要的房子是'+size+'平米')
        })
        // houseObj.trigger(100);
        // houseObj.trigger(150);
        this.init()
    },
    methods:{
        init(){
            getRequest(url.goodAll,{}).then((res)=>{
                if(res.code==200){
                    this.goodList=res.data;
                }
            })
        },
        add(){
            let data={};
            data.name="香蕉"+Math.floor((Math.random()*10)+1);
            data.desc="香山的";
            data.price="8.88";
            data.sum='2'
            getRequest(url.goodAdd,data).then((res)=>{
                if(res.code==200){
                   this.init()
                }
            })
        },
        del(index){
            let data={};
            data.id=index;
            getRequest(url.goodDel,data).then((res)=>{
                if(res.code==200){
                   this.init()
                }
            })
        },
        updata(index){
            let data={};
            data.id=index;
            data.price=((Math.random()*10)+1).toFixed(2)
            getRequest(url.goodUpdate,data).then((res)=>{
                if(res.code==200){
                   this.init()
                }
            })
        },
        search(){
            let data={};
            data.id=this.id;
            getRequest(url.goodById,data).then((res)=>{
                if(res.code==200){
                   this.goodList=res.data;
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
input
    border 1px solid #ccc
button
    margin 0 .05rem
.title
    height .5rem
    line-height .5rem
    text-align center
.goodList
    li
        display flex
        border-bottom 1px solid #ccc 
        justify-content space-around
        flex-direction row 
        flex-warp no-wrap
        height .5rem 
        line-height .5rem
        span 
            width 16.6%
            overflow hidden
</style>