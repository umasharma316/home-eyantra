window.Vue = require('vue');

import vuetify from './vuetify'

import App from './components/App'
import VueRouter from 'vue-router';
import routes from './routes';


import Nav from '../js/components/Nav'



Vue.component('Nav', require('../js/components/Nav.vue').default, {
    name: 'Nav'
});

const app = new Vue({
    vuetify,
    render: h => h(App),
    el: '#app',
    components:{
        Nav,
    },
    router: new VueRouter(routes)
});