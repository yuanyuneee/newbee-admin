import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { ElButton, ElContainer, ElMenu, ElAside, ElSubmenu, ElMenuItemGroup, ElMenuItem } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.use(router)
app.use(ElButton)
    .use(ElContainer)
    .use(ElMenu)
    .use(ElAside)
    .use(ElSubmenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
app.mount('#app')
