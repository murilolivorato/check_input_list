import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCheck
} from '@fortawesome/free-solid-svg-icons'
library.add(faCheck)
config.autoAddCss = true
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
import 'bulma'