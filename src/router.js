import Vue from "vue";
import Router from "vue-router";
// import Router from "./myrouter/index";

import Home from "./views/Home.vue";
Vue.use(Router);

const routerList=[];
function importAll(r){
  r.keys().forEach((key)=>{
      let keyArr=key.split('.')
      routerList.push({path:'/'+(keyArr[1].split('/')[1]).toLowerCase(),component:r(key).default})
    }
  )
}
importAll(require.context('./views',true,/\.vue/))
console.log(routerList)
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home
    // },
    {
      path: "/",
      name: "about",
      component: () =>
        import("./views/About.vue")
    },
    ...routerList,
  //   {
  //     path: "/scroll",
  //     name: "Scroll",
  //     redirect:'/scroll/linkage',
  //     component:()=>import('./views/Scroll/Scroll.vue'),
  //     children:[
  //         {
  //             path:'linkage',
  //             name:'Linkage',
  //             component:()=>import('./views/Scroll/Linkage/Linkage.vue')
  //         },
  //         {
  //             path:'wate',
  //             name:'Wate',
  //             component:()=>import('./views/Scroll/Linkage/Wate.vue')
  //         }
  //     ]
  // },
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
    // {
    //   path: "/directive",
    //   name: "render",
    //   component: () =>
    //     import("./views/Test/Directive.vue")
    // },
    // {
    //   path: "/getserve",
    //   name: "Getserve",
    //   component: () =>
    //     import("./views/Getserve/Getserve.vue")
    // },
    // {
    //   path: "/jsfn",
    //   name: "jsfn",
    //   component: () =>
    //     import("./views/Test/Jsfn.vue")
    // },
    // {
    //   path: "/draggable",
    //   name: "draggable",
    //   component: () =>
    //     import("./views/Test/Draggable.vue")
    // },
    // {
    //     path: "/dragg",
    //     name: "dragg",
    //     component: () =>
    //       import("./views/Test/Dragg.vue")
    // },
  //   {
  //       path: "/api",
  //       name: "api",
  //       component: () =>
  //         import("./views/Test/Api.vue")
  //   },
  //   {
  //     path: "/param/:id",
  //     name: "Param",
  //     component: () =>
  //       import("./views/Test/Chuancan.vue")
  // },
  //   {
  //     path: "/tryCatch",
  //     name: "TryCatch",
  //     component: () =>
  //       import("./views/Test/TryCatch.vue")
  // },
  //   {
  //     path: "/store",
  //     name: "Store",
  //     component: () =>
  //       import("./views/Test/Store.vue")
  // },
  //   {
  //     path: "/stylus",
  //     name: "stylus",
  //     component: () =>
  //       import("./views/Test/Stylus.vue"),
  //     children:[
  //       {
  //         path: "stylus2",
  //         name: "stylus2",
  //         component: () =>
  //           import("./views/Test/Stylus2.vue")
  //     },]
  // },

  ]
});
