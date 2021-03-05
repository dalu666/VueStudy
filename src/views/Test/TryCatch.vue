<template>
    <div>
        <div>
            tryCatch
        </div>
    </div>
</template>
<script lang="ts">
export default{
    name:'TryCatch',
    data(){
        return{

        }
    },
    mounted(){
        this.test()
    },
    methods:{
        test(){
            try{
                setTimeout(() => {
                    var promise = new Promise(function (resolve, reject) {
                           throw new Error(5)
                           reject()
                   })
                   promise.then(v => console.log(v)).catch(e=>{console.log(e)})
                }, 10);
            } catch (e){
                console.log(e)
            }
        }
    }
}
</script>