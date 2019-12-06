import Vue from "vue";
import Router from "vue-router";
// import Router from "./myrouter/index";

import Home from "./views/Home.vue";
Vue.use(Router);

const routerList=[];
function importAll(r){
  r.keys().forEach(
    (key)=>routerList.push(r(key).default)
  )
}
importAll(require.context('.',true,/\.routes\.js/))
export default new Router({
  // mode: "history",
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
          },
          {
              path:'wate',
              name:'Wate',
              component:()=>import('./views/Scroll/Linkage/Wate.vue')
          }
      ]
  },
    {
      path: "/main",
      name: "Main",
      component: () =>
        import("./views/Main/Index.vue")
    },
    {
      path: "/render",
      name: "render",
      component: () =>
        import("./views/Test/Render.vue")
    },
    {
      path: "/directive",
      name: "render",
      component: () =>
        import("./views/Test/Directive.vue")
    },
    {
      path: "/getserve",
      name: "Getserve",
      component: () =>
        import("./views/Getserve/Getserve.vue")
    },
    {
      path: "/jsfn",
      name: "jsfn",
      component: () =>
        import("./views/Test/Jsfn.vue")
    },
  ]
});
