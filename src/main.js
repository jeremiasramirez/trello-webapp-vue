import { createApp } from 'vue'
import App from './App.vue'
import route from './routes/app.route'
import "./styles.css";
createApp(App)
.use(route)
.mount('#app')
