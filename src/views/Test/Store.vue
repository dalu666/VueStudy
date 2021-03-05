<template>
    <div>
        <div>
            Store
            <button @click="setName">设置</button> <br>

            <button @click="syncSetName">异步 设置</button> <br>

            <button @click="getName">获取</button> <br>
        </div>
    </div>
</template>
<script lang="ts">
import {mapGetters} from 'vuex'
export default{
    name:'Store',
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters(['arr','name'])
    },
    mounted(){
       console.log(this.arr,this.name)
        // console.log(this.$store.state.name)
    },
    methods:{
       setName(){
           this.$store.commit('setName','newName')
       },
       syncSetName(){
           this.$store.dispatch('syncName','syncNewName')
       },
       getName(){
           console.log(this.$store.state.name)
       }
    }
}
</script>