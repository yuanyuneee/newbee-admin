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
    ElSelect,
    ElOption
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)

const win = window //
if (process.env.NODE_ENV === 'development') {
    // if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
    // window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    // }
    app.config.devtools = true
}

const orderStatus = {
    0: '待支付',
    1: '已支付',
    2: '配货完成',
    3: '出库成功',
    4: '交易成功',
    '-1': '手动关闭',
    '-2': '超时关闭',
    '-3': '商家关闭'
}

app.config.globalProperties.$filters = {
    orderMap(status) {
        return orderStatus[status] || '未知状态'
    },
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

// 拿到 main 的 DOM 节点，设置它的 scrollTop 值为 0，让其滚动条滚回顶部。我们来这是一个全局公用方法如下所示：
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
    .use(ElSelect)
    .use(ElOption)
app.mount('#app')
