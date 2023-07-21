/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// VueFire
import { VueFire } from 'vuefire'
import { firebaseApp } from './plugins/firebase'

const app = createApp(App)

registerPlugins(app)

app
  .use(VueFire, {
    firebaseApp,
  })
  .mount('#app')
