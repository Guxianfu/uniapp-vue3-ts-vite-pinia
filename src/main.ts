import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import { i18n } from '@/locale';
import "@/utils/interceptor";
export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia()
  app.use(i18n);
  app.use(pinia)
  return {
    app
  };
}
