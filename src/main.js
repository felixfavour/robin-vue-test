import Vue from 'vue'
import RobinChat from 'robin-vue'
import App from './App.vue'

Vue.use(RobinChat)

new Vue({
    render: h => h(App),
}).$mount('#app')
