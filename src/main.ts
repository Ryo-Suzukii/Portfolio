import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faArrowUpRightFromSquare, faHouseUser, faBoxArchive, faAddressCard, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faTwitter, faArrowUpRightFromSquare, faAddressCard, faHouseUser, faEnvelope, faBoxArchive, faMapLocationDot)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
