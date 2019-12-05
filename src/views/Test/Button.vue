<script>
import { stringify } from 'querystring'
export default {
    props:{
        type:{
            type:String,
            default:'nomall'
        },
        text:{
            type:String,
            default:'demo'
        }
    },
    render(h){
        return h('div',{
            class:{
                btn:true,
                'btn-success':this.type==='success',
                'btn-danger':this.type==='danger',
                'btn-waring':this.type==='waring',
            },
            domProps:{
                innerText:this.text
            },
            on:{
                click:this.demoClick
            }
        })
    },
    methods:{
        demoClick(){
            this.$emit('childevent')
        }
    }
}
</script>
<style lang="stylus" scoped>
.btn 
    width 1rem
    height .5rem
    line-height .5rem
    background blue
    color #fff 
    text-align center
.btn-success
    background green 
.btn-danger 
    background yellow 
    color blue
.btn-waring
    background red
.normal
    background blue
</style>