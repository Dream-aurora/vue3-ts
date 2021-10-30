import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store'  // 导入store 这是一个插件需要use()
createApp(App).use(store, key).mount('#app')
