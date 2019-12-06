function vue(){
    this.$data={a:1};
    this.el=document.getElementById('app');
    this.ast="";
    this.observe(this.$data);
    this.render()
}
vue.prototype.observe=function(){
    let self=this;
    this.$data=new Proxy(this.$data,{
        set:function(target,key,newvalue){
            // 触发更新
            target[key]=newvalue;
            self.render();
        },
        get:function(target,key){
            // 进行依赖收集
            return target[key]
        }
    })
}
vue.prototype.render=function(){
    this.ast="I am render"+this.$data.a;
    this.el.innerHTML=this.ast;
}
// virtual dom    虚拟dom  本身是不存在的，是一个ast语法树；
// 一个组件对应一个virtual dom virtual dom下面会有children ，对应他的子结构 和diff算法，
// virtral 为了保证更新效率，采用diff算法，对比哪里改变了来进行更新的

// vue 运行过程，自定义混入，模板引擎读取生成virtual dom  它多的是ast语法树