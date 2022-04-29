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
        // width: 700,
        // height:240,
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
        // width: 700,
        // height:240,
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
        // width: 700,
        // height:240,
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

  },
  beforeUpdate() {
      console.log("TraitementAPI")
      // this.GStailleJSON.set(this.info.length)

      for (let i = 0; i < this.info.length; i++) {
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


</script>

<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-xs-12 col-9">
        <div class="row">
          <div class="col-12">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="true" href="#">Graphiques</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="card text-center">
                  <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Température</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div v-if="dataArrayGraphiqueTemperatureHeure.length<3">
                      Chargement des données...

                    </div>
                    <div v-else>
                      <GChart
                          type="LineChart"
                          :data="dataArrayGraphiqueTemperatureHeure"
                          :options="optionsGraphiqueTemperature"
                      />
                    </div>
                  </div>
                </div>

                <div class="card text-center">
                  <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Pression</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div v-if="dataArrayGraphiquePressionHeure.length<3">
                      Chargement des données...

                    </div>
                    <div v-else>
                      <GChart
                          type="LineChart"
                          :data="dataArrayGraphiquePressionHeure"
                          :options="optionsGraphiquePression"
                      />
                    </div>
                  </div>
                </div>

                <div class="card text-center">
                  <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Altitude</a>
                      </li>
                    </ul>
                  </div>
                  <div class="card-body">
                    <div v-if="dataArrayGraphiqueAltitudeHeure.length<3">
                      Chargement des données...

                    </div>
                    <div v-else>
                      <GChart
                          type="LineChart"
                          :data="dataArrayGraphiqueAltitudeHeure"
                          :options="optionsGraphiqueAltitude"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>



        </div>

        <h1>Capteur du {{info[0].date}}</h1>

          <div class="row">

            <ul class="list-group dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="(p) in info">
                <div class=" list-group-item active">Id: {{p.id}}</div>
                <div class="list-group-item">Altitude: {{p.altitude}} mètres</div>
                <div class="list-group-item">Date: le {{ p.date }} à {{ p.heure }}</div>
                <div class="list-group-item">Pression: {{p.pression}} hPa</div>
                <div class="list-group-item">Température: {{p.temperature}}</div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>



<style>
.sidebar {
  border: 1px solid #efefee;
  box-shadow: 0px 0px 7px 4px #efefee;
  border-radius: 5px;
}
</style>