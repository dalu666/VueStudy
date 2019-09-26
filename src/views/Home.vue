<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide>I'm Slide one</swiper-slide>
            <swiper-slide>I'm Slide two</swiper-slide>
            <swiper-slide>I'm Slide three</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
       <div class="userBox">
           <ul class="userList">
               <li>
                   <div class="pic">
                       <img src="" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>啊手动阀手动阀</p>
                       <div class="love">
                            <i></i>
                            <span class="loveNum">666</span>
                       </div>
                   </div>
               </li>
               <li>
                   <div class="pic">
                       <img src="" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>啊手动阀手动阀</p>
                       <div class="love">
                            <i></i>
                            <span class="loveNum">666</span>
                       </div>
                   </div>
               </li>
           </ul>
       </div>
    </div>
    

</template>
<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name:'Home',
        data(){
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: {
                        delay: 3000,
                    },
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev'
                    // }
                }
            }
        },
       components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
            }
        },
        created(){
            this.getGoodsList();
        },
        methods:{
            getGoodsList(){
                var param={
                    page:1,
                    pageSize:8,
                    sort:1,
                    priceLevel:'all'
                }
                axios.get('/api/goods',{params:param})
                .then((response)=>{
                    let res=response.data;
                    if(res.status=='0'){
                        console.log(res)
                    }else{
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
        },
        mounted(){

        }
    }
</script>
<style lang="stylus" scoped>
   .swiper-container {
        height: 2rem;
        width: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: .2rem;
        font-weight: 700;
        background-color: #eee;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .userBox{
        padding:0 .03rem .5rem .03rem;
    }
    .userList{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .userList li{
        width:49%;
        border:1px solid #ccc;
        overflow:hidden;
    }
    .userList li .pic{
        height:1.2rem;
        overflow:hidden;
        border-bottom:1px solid #ccc;
    }
    .userIntroduce{
        height:.4rem;
        line-height:.4rem;
        display:flex;
        justify-content:space-between;

    }
    .userIntroduce p{
        width:50%;
        height:.4rem;
        overflow:hidden;
    }
    .love{
        display:flex;
        align-items:center;
        justify-content:flex-end;
    }
    .userIntroduce .love i{
        display:inline-block;
        width:.3rem;
        height:.3rem;
        border:1px solid #ccc;
    }
    .userIntroduce .love .loveNum{
        width:.5rem;
        text-align:center;
    }
</style>