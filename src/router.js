import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "scroll",
      component: () =>
        import("./views/Scroll/Scroll.vue")
    },
    {
      path: "/",
      name: "Main",
      component: () =>
        import("./views/Main/Index.vue")
    },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>
    //     import("./views/About.vue")
    // }
  ]
});
