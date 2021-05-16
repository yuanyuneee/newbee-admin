import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {
    ElButton,
    ElContainer,
    ElMenu,
    ElAside,
    ElSubmenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElPopover,
    ElTag,
    ElCard,
    ElTable,
    ElTableColumn,
    ElUpload,
    ElDialog,
    ElPagination,
    ElPopconfirm,
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)

const win = window //
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
        // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
        win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
}

app.use(router)
app.use(ElButton)
    .use(ElContainer)
    .use(ElMenu)
    .use(ElAside)
    .use(ElSubmenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElCheckbox)
    .use(ElPopover)
    .use(ElTag)
    .use(ElCard)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElUpload)
    .use(ElDialog)
    .use(ElPagination)
    .use(ElPopconfirm)
app.mount('#app')
