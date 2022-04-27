import Vue from 'vue';
import App from './pages/graphique'
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
// App.tailleJSON=App.tailleJSON
// console.log(App.tailleJSON)
// for (let i = 0; i < tailleJSON; i++) {
//     console.log(i)
//     let heure=info[i].heure;
//     let temperature=info[i].temperature;
//     let pression=info[i].pression;
//     let altitude=info[i].altitude;
//     dataArrayGraphiqueTemperatureHeure.push([heure,temperature])
//     dataArrayGraphiquePressionHeure.push([heure,pression])
//     dataArrayGraphiqueAltitudeHeure.push([heure,altitude])
// }
new Vue({

    render(h){
        return h(App);
    }

}).$mount('#app')
// import { createApp } from 'vue';
// import App from './pages/graphique'
//
// createApp(App).mount('#app');