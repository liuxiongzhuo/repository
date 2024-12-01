import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import Backgroud0 from './components/Backgroud0.vue'
import Backgroud1 from './components/Backgroud1.vue'
import Backgroud2 from './components/Backgroud2.vue'
import Backgroud3 from './components/Backgroud3.vue'
import Sidebar from './components/Sidebar.vue'
import DashSidebar from './components/DashSidebar.vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
const app=createApp(App)
app.use(Viewer)
app.use(router)
app.component('Sidebar',Sidebar)
app.component('DashSidebar',DashSidebar)
app.component('Backgroud0',Backgroud0)
app.component('Backgroud1',Backgroud1)
app.component('Backgroud2',Backgroud2)
app.component('Backgroud3',Backgroud3)
app.mount('#app')