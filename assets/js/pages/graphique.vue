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
  <div  class="container-fluid" >
    <div class="row" >
      <div style="width: 100%"  class="col-xs-12 col-9">
        <div class="row">
          <div class="col-12">
            <div class="card text-center">
              <div class="card-header">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Graphique</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-capteur-tab" data-bs-toggle="pill" data-bs-target="#pills-capteur" type="button" role="tab" aria-controls="pills-capteur" aria-selected="false">Capteurs</button>
                  </li>
                </ul>
              </div>
              <div class="card-body" id="test">
                <div class="tab-content" id="pills-tabContent">

                  <!--                  DEBUT AFFICHAGE CAPTEUR-->
                  <div class="tab-pane fade row tab-content" id="pills-capteur" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <h1 class="card-title">Capteur du {{info[0].date}}</h1>
                    <!--                  DEBUT AFFICHAGE CAPTEUR-->
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
                  <!--                FIN AFFICHAGE CAPTEUR-->

                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="accordion">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Température
                          </button>
                        </h2>
                        <!--                        DEBUT AFFICHAGE GRAPHIQUE API-->
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                          <div class="accordion-body">
                            <div v-if="dataArrayGraphiqueTemperatureHeure.length<3">
                              <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div>Chargement des données...
                            </div>
                            <div class="card" v-else>
                              <GChart
                                  type="LineChart"

                                  :data="dataArrayGraphiqueTemperatureHeure"
                                  :options="optionsGraphiqueTemperature"
                              />
                            </div>

                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                              Pression
                            </button>
                          </h2>
                          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                              <div v-if="dataArrayGraphiquePressionHeure.length<3">
                                Chargement des données...

                              </div>
                              <div class="card" v-else>
                                <GChart
                                    type="LineChart"
                                    :data="dataArrayGraphiquePressionHeure"
                                    :options="optionsGraphiquePression"
                                />
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                          <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Altitude
                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                          <div class="accordion-body">

                            <div v-if="dataArrayGraphiqueAltitudeHeure.length<3">
                              Chargement des données...
                            </div>
                            <div class="card" v-else>
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
                  <!--                  FIN AFFICHAGE GRAPHIQUE API-->


                </div>
                <!--                FIN AFFICHAGE CAPTEUR-->
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>