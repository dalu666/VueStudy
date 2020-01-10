<template>
    <div>
        <div>
            
            <div v-customlulu='color'>{{num}}</div>
            <button @click="add">增加</button>
            <ul>
                <li v-for="(item,index) in list" :key='index'>{{item}}</li>
            </ul>
            <div  id="lulu"></div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
        return {
            num:0,
            color:'red',
            list:[
                'aaa',
                'bbb',
                'ccc'
            ]
        }
    },
    methods:{
        add(){
            this.num++;
            this.color="#333";
            Vue.set(this.list,1,'999')
        }
    }
}
</script>