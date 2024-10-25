import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from "./store"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.use(router)//路由挂载
app.use(store)//stoore挂载
app.mount('#app')
