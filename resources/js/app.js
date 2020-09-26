require("./bootstrap");

import Vue from "vue";

import App from "@components/App";

//Plugins

import registerPlugins from './plugins'

registerPlugins(Vue)

// import BaseButton from './components/BaseButton'
// Vue.component('BaseButton',BaseButton)

const app = new Vue({
    el: "#app",
    render: h => h(App)
});
