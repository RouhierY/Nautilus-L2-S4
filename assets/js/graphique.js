import Vue from 'vue';
import App from './pages/graphique'
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
// createApp({App}).mount('#app')
new Vue({

    render(h){
        return h(App);
    }

}).$mount('#app')

// import { createApp } from 'vue';
// import App from './pages/graphique'
//
// createApp(App).mount('#app');