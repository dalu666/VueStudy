export default{
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
}