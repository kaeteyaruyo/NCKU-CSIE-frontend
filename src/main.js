import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from '@/App.vue'
import store from '@/store'

const i18n = createI18n({
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW'
})

export default createApp(App).use(store).use(i18n)
