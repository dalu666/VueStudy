import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {checkArray} from './common/array'
import 'swiper/dist/css/swiper.css'
import vMessage from './components/Message/Message.js' 
Vue.use(vMessage)
Vue.directive('display-key',{
  inserted(el,binding){
    let displayKey=binding.value;
    if(displayKey){
      let hasPermission=checkArray(displayKey);
      // 如果没有权限删除dome节点
      if(!hasPermission){
        el.parentNode && el.parentNode.removeChild(el)
      }
    }else{
      console.log('需要传值')
    }
  }
})
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)

let fn=function(){console.log('fn ')};
fn.install=function(){
  Vue.mixin({
    beforeCreate:function(){
      // console.log(this.$options)
    }
  })
}
Vue.use(fn)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
