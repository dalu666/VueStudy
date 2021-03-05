import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {checkArray} from './common/array'
import 'swiper/dist/css/swiper.css'
import vMessage from './components/Message/Message.js' 
Vue.use(vMessage)
// 自定义指令
Vue.directive('customlulu',{
    bind(){// 只调用一次 
        console.log('1-bind')
    },
    inserted(){// 被绑定元素插入父节点时调用
        console.log('2-inserted')
    },
    update(){//被绑定于元素所在的模板更新时调用， 而无论绑定值是否变化。
        console.log('3-update')
    },
    componentUpdated(){ //被绑定元素所在模板完成一次更新周期时调用
        console.log('4-componentUpdated')
    },
    unbind(){//解绑时调用
        console.log('5-unbind')
    }

})
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
let author= Vue.extend({
    template:'<p>{{authorName}}</p>',
    data(){
        return {
            authorName:'lulu'
        }
    }
})
new author().$mount('#lulu')
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
  render: h => h(App),
  mounted(){
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount("#app");
