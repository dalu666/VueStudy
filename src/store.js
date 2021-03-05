import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
		name:'root',
		arr:[1,2,3]
	},
    mutations: {
		setName(state,name){
			state.name=name
		}
	},
	getters:{
		arr:state=>{return state.arr},
		name:state=>{return state.name}
	},
    actions: {
		syncName(context,name){
			context.commit('setName',name)
		}
	}
});
