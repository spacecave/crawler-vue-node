// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Hello from './components/Hello.vue';
import Show from './components/show.vue';

Vue.use(VueRouter);

//let app = Vue.extend(App);

const routes = [
    { path: '/hello', component: Hello},
    { path: '/show', component: Show},
];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});


//router.start(app, '#app');

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})