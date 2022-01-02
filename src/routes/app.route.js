 
import { createRouter,createWebHashHistory } from "vue-router";
import StartPage from "../pages/start/StartPage";
import HomePage from "../pages/home/home.page";

const routes =  [
    {path: '/start', component: StartPage},
    {path: '/', component: StartPage},
    {path: '/home', component: HomePage}
]
 

const route = createRouter({
    history: createWebHashHistory(),
    routes
})


export default route