import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    { 
      path: "/scroll",
      name: "Scroll",
      redirect:'/scroll/linkage',
      component:()=>import('./views/Scroll/Scroll.vue'),
      children:[
        {
          path:'linkage',
          name:'Linkage',
          component:()=>import('./views/Scroll/Linkage/Linkage.vue')
        }
      ]
    },
    {
      path: "/main",
      name: "Main",
      component: () =>
        import("./views/Main/Index.vue")
    },
    
   
  ]
});
