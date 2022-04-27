<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-xs-12 col-9">
        <div class="row">
          <div class="col-12">
            <h1>
              Graphique
            </h1>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-6 mb-2 pb-2">
            <div>
<!--              <GChart-->
<!--                  type="LineChart"-->
<!--                  :data="chartData"-->
<!--                  :options="chartOptions"-->
<!--              />-->
              <GChart
                  type="LineChart"
                  :data="dataArrayGraphiqueAltitudeHeure"
                  :options="optionsGraphiqueAltitude"
              />
              <GChart
                  type="LineChart"
                  :data="dataArrayGraphiquePressionHeure"
                  :options="optionsGraphiquePression"
              />
              <GChart
                  type="LineChart"
                  :data="dataArrayGraphiqueTemperatureHeure"
                  :options="optionsGraphiqueTemperature"
              />
            </div>
            <li v-for="(p) in info">
              <div>Altitude: {{p.altitude}}</div>
              <div>Date: {{p.date}}</div>
              <div>Heure: {{p.heure}}</div>
              <div>Id: {{p.id}}</div>
              <div>Pression: {{p.pression}}</div>
              <div>Température: {{p.temperature}}</div>
            </li>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart
  },
  name:"graphique",

  data() {
    return {
      info: null,
      tailleJSON:null,
      dataArrayGraphiqueTemperatureHeure:[             // où les données seront insérées avec les attribut de pré inséré ici Température
        ["Heure", "Température"],
      ],
      optionsGraphiqueTemperature : {
        vAxis: {
          title: 'Température (°C)',
          textStyle: {
            color: '#01579b',
            fontSize: 20,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          hAxis: {
            title: 'Heure',
            textStyle: {
              color: '#1a237e',
              fontSize: 24,
              bold: true
            }
            // param pour le graph Température
            // title: "Température",
          }
        }
      },
      dataArrayGraphiquePressionHeure: [             // où les données seront insérées avec les attribut de pré inséré ici Pression
        ["Heure", "Pression"]
      ],
      optionsGraphiquePression : {                                             // param pour le graph Température
        vAxis: {
          title: 'Pression (hPa)',
          textStyle: {
            color: '#a52714',
            fontSize: 20,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          hAxis: {
            title: 'Heure',
            textStyle: {
              color: '#1a237e',
              fontSize: 24,
              bold: true
            }
            // param pour le graph Température
            // title: "Température",
          }
        },
        colors: ['#a52714']
      },
      dataArrayGraphiqueAltitudeHeure: [             // où les données seront insérées avec les attribut de pré inséré ici Altitude
        ["Heure", "Altitude"]
      ],
      optionsGraphiqueAltitude: {                                             // param pour le graph Température
        vAxis: {
          title: 'Altitude (m)',
          textStyle: {
            color: '#097138',
            fontSize: 20,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          hAxis: {
            title: 'Heure',
            textStyle: {
              color: '#1a237e',
              fontSize: 24,
              bold: true
            }
            // param pour le graph Température
            // title: "Température",
          }
        },
        colors: ['#097138']
      },
      // chartData: [
      //   ['Heure', 'Température', 'Altitude', 'Pression']
      // ],
      //
      // chartOptions: {
      //   chart: {
      //     title: 'Test BMP180',
      //     subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      //   }
      // }
    }
  },
  mounted () {
    axios
        .get('http://127.0.0.1:8000/api/bmp180s.json')
        .then(response => (this.info = response.data))

  },
  computed:{
    GStailleJSON:{
      get:function (){
        return this.tailleJSON;
      },

      set:function (x){
        this.tailleJSON=x;
      }
    },
    GSdataArrayGraphiqueTemperatureHeure:{
      get:function (){
        return this.dataArrayGraphiqueTemperatureHeure
      },
      set:function (x){
        this.dataArrayGraphiqueTemperatureHeure.push(x)
      }
    },
    GSdataArrayGraphiquePressionHeure:{
      get:function (){
        return this.dataArrayGraphiquePressionHeure
      },
      set:function (x){
        this.dataArrayGraphiquePressionHeure.push(x)
      }
    },
    GSdataArrayGraphiqueAltitudeHeure:{
      get:function (){
        return this.dataArrayGraphiqueAltitudeHeure
      },
      set:function (x){
        this.dataArrayGraphiqueAltitudeHeure.push(x)
      }
    },
    traitementAPI:function(){
      console.log("TraitementAPI")
      // this.GStailleJSON.set(this.info.length)

      for (let i = 0; i < this.info.length; i++) {
        // console.log(i)

        let heure=this.info[i].heure;
        let temperature=this.info[i].temperature;
        let pression=this.info[i].pression;
        let altitude=this.info[i].altitude;
        // console.log(heure,temperature,pression,altitude)
        this.dataArrayGraphiqueTemperatureHeure.push([heure,temperature])
        this.dataArrayGraphiquePressionHeure.push([heure,pression])
        this.dataArrayGraphiqueAltitudeHeure.push([heure,altitude])
        // this.chartData.push([heure,temperature,altitude,pression])
      }
    }

  }

}


</script>

<style>
.sidebar {
  border: 1px solid #efefee;
  box-shadow: 0px 0px 7px 4px #efefee;
  border-radius: 5px;
}
</style>