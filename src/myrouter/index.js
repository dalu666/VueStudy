
class HistoryRoute{
    constructor(){
        this.current=null;
    }
}
class vueRouter{
    constructor(options){
        this.mode=options.mode || 'hash';
        this.routes=options.routes || [];
        // 传递的路由表是数组 需要转换成{'/home':Home,'/about',About} 格式
        this.routesMap=this.createdMap(this.routes);
        this.history=new HistoryRoute();
        this.init();
    }
    init(){
        if(this.mode=='hash'){
            location.hash?'':location.hash="/";
            window.addEventListener('load',(params)=>{
                this.history.current=localtion.hash.slice(1);
            })
            window.addEventListener('hashchange',(params)=>{
                this.history.current=localtion.hash.slice(1);
            })
        }else{
            window.addEventListener('load',(params)=>{
                this.history.current=localtion.pathname;
            })
            window.addEventListener('popstate',(params)=>{
                this.history.current=localtion.pathname;
            })
        }
    }
    createdMap(routes){
        return routes.reduce((memo,current)=>{
            memo[current.path]=current.component;
            return memo;
        },{})
    }
};
// 使用vue.use 就会调用install方法
vueRouter.install=function(Vue,opts){
    // 每个组件都有this.$router / this.$route 所以要minxin一下
    Vue.mixin({
        beforeCreate(){
            console.log(this.$options)
            // this.$options 可以拿到new vue时的参数
            if(this.$options && this.$options.router){//定位跟组件
                this._root=this;//把当前实例挂载在_root 上
                this._router=this.$options.router;//把router实例挂载在_router上
                Vue.util.defineReactive(this,'current',this._router.history)

                Object.defineProperty(this,"$router",{  
                    get:function(){ 
                        return this._root._router
                    }
                })
                Object.defineProperty(this,'$route',{
                    get:function(){
                        return this._root._router.history.current;
                    }
                })
            }else{
                // vue组件的渲染顺序 父 -> 子 -> 孙子
                this._root=this.$parent._root;
            }
        },
    });
    // 全局注册 router的两个组件
    Vue.component('router-view',{
        render(h){
            // 将current变成动态的 current变化应该会影响视图刷线
            // vue实现双向绑定  重写Object.defineProperty
            let current = this._self._root._router.history.current;
            let routeMap=this._self._root._router.routesMap;
            return h(routeMap[current])
        }
    })
}
export default vueRouter;