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
    ElCascader,
    ElRadioGroup,
    ElRadio,
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

app.config.globalProperties.$filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            // 当 url 以 http 开头时候，我们返回原路径
            return url
        } else {
            // 否则，我们给路径添加 host，如下
            url = `http://backend-api-02.newbee.ltd${url}`
            return url
        }
    }
}

app.config.globalProperties.goTop = function () {
    const main = document.querySelector('.main')
    main.scrollTop = 0
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
    .use(ElCascader)
    .use(ElRadioGroup)
    .use(ElRadio)
app.mount('#app')
