<template>
  	<div class="about" id="">
		<!-- <div class="row">
		<span>Departure Date：</span>
		<date-picker :time.sync="starttime" :option="option" :limit="limit"></date-picker>
		</div> -->

		<!-- for Vue 2.0 -->
    	<header-ma></header-ma>
		<ul>
			<router-link tag="li" to="/getserve">go getserve</router-link>
			<router-link tag="li" to="/render">go render</router-link>
			<router-link tag="li" to="/directive">go directive</router-link>
			<router-link tag="li" to="/jsfn">go jsfn</router-link>
			<router-link tag="li" to="/draggable">go draggable</router-link>
            <router-link tag="li" to="/dragg">go dragg</router-link>
            <router-link tag="li" to="/api">vue 全局API</router-link>
           <router-link tag="li" to="/stylus">vue stylus</router-link>
		   <router-link tag="li" to="/param/3">参数</router-link>
		   	<li @click="goParam('Param')">传参</li>
		   <router-link tag="li" to="/stylus/stylus2">vue stylus2</router-link>
		   <li @click="goParam('TryCatch')">TryCatch</li>
		    <li @click="goParam('Store')">Store</li>
		</ul>
		<div id="boxOut">
			<div id="boxInner">内</div>
		</div>
		<div class="row">
			<span>Departure Date：</span>
			<date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
		</div>
  </div>
</template>
<script>
// import myDatepicker from 'vue-datepicker'
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue' 
import headerMa from '../components/header'
export default {
  data () {
    return {
		// for Vue 1.0
		// starttime: '',
		// endtime: '2016-01-19',
		// testTime: '',
		// multiTime: '',
		// for Vue 2.0
		startTime: {
			time: ''
		},
		endtime: {
			time: ''
		},
		option: {
			type: 'min',
			week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
			month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			format: "YYYY/MM/DD HH:mm:ss",
			placeholder: '2019/01/1 22:20:20',
			inputStyle: {
			'display': 'inline-block',
			'padding': '6px',
			'line-height': '22px',
			'font-size': '16px',
			'border': '2px solid #fff',
			'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
			'border-radius': '2px',
			'color': '#5F5F5F'
			},
			color: {
			header: '#ccc',
			headerText: '#f00'
			},
			buttons: {
			ok: 'Ok',
			cancel: 'Cancel'
			},
			overlayOpacity: 0.5, // 0.5 as default
			// dismissible: true // as true as default
		},
		timeoption: {
			type: 'min',
			week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
			month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			format: 'YYYY-MM-DD HH:mm'
		},
		multiOption: {
			type: 'multi-day',
			week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
			month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			format:"YYYY-MM-DD HH:mm"
		},
		limit: [{
			type: Array,
			default:function _default(){
			return [];
			}
		}
		// {
		//   type: 'fromto',
		//   from: '2016-02-01',
		//   to: '2016-02-20'
		// }
		]}
	},
	components: {
		'date-picker': myDatepicker,
		headerMa
	},
	mounted(){
		
		this.$nextTick(()=>{
			var  stWinBody= document.getElementById('boxOut')
			stWinBody.addEventListener('scroll',()=>{
			})
            console.log('scrollTop',stWinBody.scrollTop)
		})
	},

	methods:{
		goParam(url){
			// this.$router.push({path:'/param',query: {id:'1'}})
			this.$router.push({name:url,params:{id:'1',test:'2'}})
		}
	}
}
</script>
<style lang="stylus" scoped>
    ul li{
        height:30px;
        line-height:30px;
    }
	#boxOut
		width 200px
		height 200px
		border 1px solid #cccccc
		overflow auto
		#boxInner
			width 180px
			height 300px
			border 1px solid bule
	
</style>