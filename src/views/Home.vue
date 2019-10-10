<template>
    <div>
        <div class="babytitle">快乐baby</div>
        <swiper :options="swiperOption" ref="mySwiper" >
            <swiper-slide><img src="../assets/images/b1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/b2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/b3.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/b4.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/b5.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/b6.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/b7.png" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
       <div class="userBox">
           <ul class="userList">
               <li >
                   <div class="pic"  imged="../assets/images/f1.jpg">
                       <img @click="enlarge($event)" src="../assets/images/f1.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f2.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f3.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f4.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f5.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f6.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f7.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f8.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f9.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f10.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <!-- 大于10 -->
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f11.png" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f12.png" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f13.png" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f14.png" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f54.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f16.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f17.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f18.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f19.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f20.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <!-- 大于20 -->
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f21.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f22.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f23.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f24.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f25.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f26.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f27.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f28.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f29.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f30.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <!-- 大于30 -->
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f31.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f32.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>快乐baby</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f33.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f34.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f35.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
              
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f37.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f39.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f41.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f42.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
               <li >
                   <div class="pic" @click="enlarge">
                       <img @click="enlarge($event)" src="../assets/images/f54.jpg" alt="img">
                   </div>
                   <div class="userIntroduce">
                       <p>猜猜我是谁？</p>
                       <div class="love" @click="editNum(item)">
                            <!-- <i></i> -->
                            <span class="loveNum"></span>
                       </div>
                   </div>
               </li>
           </ul>
           <div class="bottom tc">已到底</div>
           <div class="tc codebox">
               <p class="custom">欢迎关注下方二维码，定制个人网站。</p>
               <img src="../assets/images/code.jpg" alt="">
           </div>
       </div>
       <div v-show="imgtoggled">
           <div class="mask"></div>
           <div class="preview">
               <div class="previewImg"><img :src="imgsed"  alt=""></div>
                <div class="close" @click="close"><img src="../assets/images/close.png" alt=""></div>
           </div>
       </div>
       <div class="congratulate" v-show="canvastoggle">
           <div class="canvas" ref="canvas"></div>
           <ul class="tc">
               <li>开</li>
               <li>开</li>
               <li>心</li>
               <li>心</li>
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
                },
                photoList:[],
                imgsed:'',
                imgtoggled:false,
                timeset:null,
                canvastoggle:true
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
            let num=0;
            let timeset= setInterval(()=>{
                num ++ ;
                this.$refs.canvas.style.top=num + '%';
                if(num>108){
                    clearInterval(timeset);
                    this.timeset=null;
                    this.canvastoggle=false;

                }
            },100)
            
        },
        methods:{
            enlarge(e){
                console.log(e.target.getAttribute('src'))
                this.imgtoggled=true;
                this.imgsed=e.target.getAttribute('src');
            },
            close(){
                this.imgtoggled=false;
            },
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
                        this.photoList=res.result.list;
                    }else{
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            },
            editNum(item){
                item.productNum++;
                axios.post('api/goods/cartEdit',{
                    productId:item.productId,
                    productNum:item.productNum,
                }).then((response)=>{
                    let res=response.data;
                    console.log(res)
                })
            },
        }
     
    }
</script>
<style lang="stylus" scoped>
    .babytitle{
        height:.4rem;
        line-height:.4rem;
        text-align:center;
        background: violet;
        color: #fff;
        font-size: .2rem;
        font-weight: bolder;
    }
    .bottom{
        font-size:.14rem;
        line-height:.3rem;
    }
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
        margin-top:.1rem;
    }
    .userList li{
        width:49%;
        overflow:hidden;
    }
    .userList li .pic{
        height:2rem;
        overflow:hidden;
        border-bottom:1px solid #ccc;
    }
    .userIntroduce{
        height:.3rem;
        line-height:.3rem;
        display:flex;
        justify-content:space-between;

    }
    .userIntroduce p{
        width:60%;
        height:.3rem;
        overflow:hidden;
        color:violet;
        font-size:.15rem;
        padding-left:.1rem;
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
    .preview{
        position:absolute;
        z-index:99;
        left:0;
        top:0;
        bottom:0;
        right:0;
    }
    .previewImg{
        width:90%;
        height:80%;
        text-align:center;
        margin-top:5%;
        margin-left:5%;
    }
    .previewImg img{
        max-width:100%;
        max-height:100%;
        border:3px solid #fff;
        border-radius:3px;
    }
    .close{
        position:absolute;
        left:50%;
        bottom:0;
        margin-left:-.5rem;
        width:1rem;
        height:1rem;
        text-align:center;
        line-height:1rem;
    }
    .close img{
        max-width:.3rem;
        border-radius:50%;
        background:#fff;
    }
    .congratulate{
        position:absolute;
        z-index:99;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background: rgba(0,0,0,0.7);
        color:#Fff;
    }
    .congratulate ul{
        padding-top:.5rem;
    }
    .congratulate li{
        font-size:.3rem;
        font-weight: bolder;
        margin-bottom:.3rem;
    }
    .canvas{
        position:absolute;
        z-index:99;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background: #ee82ee;
        -webkit-transition: all 300ms linear; -moz-transition: all 300ms linear; -o-transition: all 300ms linear; -ms-transition: all 300ms linear; transition: all 300ms linear;
    }
    .codebox{
        background:#ee82ee
        padding-bottom:.25rem;
    }
    .custom{
        color:#fff;
        line-height:.5rem;
    }
</style>