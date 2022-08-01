import Vue from 'vue'
import RobinChat from 'robinapp-vue'
import App from './App.vue'

Vue.use(RobinChat)

new Vue({
    render: h => h(App),
}).$mount('#app')
