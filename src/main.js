// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import VueRouter from 'vue-router';
import Sel from './components/select/Sel.vue';
import Show from './components/content/content.vue';
import iview from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(iview);

Vue.http.options.emulateJSON = true;

//let app = Vue.extend(App);

const routes = [
    { path: '/sel', component: Sel},
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