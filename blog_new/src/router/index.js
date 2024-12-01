import { createRouter,createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import PostDetail from "../views/PostDetail.vue";
import Aboutme from "../views/Aboutme.vue";
import Dash from "../views/Dash.vue";
import Login from "../views/Login.vue";
import DashPostDetail from "../views/DashPostDetail.vue";
import NewPost from "../views/NewPost.vue";
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/post',
        name:'PostDetail',
        component:PostDetail,
        props:true
    },
    {
        path:'/about',
        name:'Aboutme',
        component:Aboutme
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/dash',
        name:'Dash',
        component:Dash
    },
    {
        path:'/dashpostdetail',
        name:'DashPostDetail',
        component:DashPostDetail
    },
    {
        path:'/newpost',
        name:'NewPost',
        component:NewPost
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router