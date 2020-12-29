import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Home from './components/Home'

import Nav from './components/Nav'

import ContactUs from './components/ContactUs'

export default {
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'contact',
            path: '/contact',
            component: ContactUs,
        },
        ]
    }
