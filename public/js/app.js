// function createNode(element) {
//     return document.createElement(element);
// }
//
// function append(parent, el) {
//     return parent.appendChild(el);
// }
google.load("visualization", "1", {packages:["corechart","line"]});
google.setOnLoadCallback(drawChart);

function drawChart() {
    const ul = document.getElementById('authors');
    const url = 'http://127.0.0.1:8000/api/bmp180s.json';

    async function fetchTable(url) {
        const resp = await fetch(url);
        callbackWithData(await resp.json());
    }

    function callbackWithData(data) {
        // console.log(data.length)
        let tailleJSON=data.length

        var dataArrayGraphiqueTemperatureHeure = [             // où les données seront insérées avec les attribut de pré inséré ici Température
            ["Heure", "Température"]
        ];
        var dataArrayGraphiquePressionHeure = [             // où les données seront insérées avec les attribut de pré inséré ici Pression
            ["Heure", "Pression"]
        ];
        var dataArrayGraphiqueAltitudeHeure = [             // où les données seront insérées avec les attribut de pré inséré ici Altitude
            ["Heure", "Altitude"]
        ];

        for (let i = 0; i < tailleJSON; i++) {
            let heure=data[i].heure;
            let temperature=data[i].temperature;
            let pression=data[i].pression;
            let altitude=data[i].altitude;
            dataArrayGraphiqueTemperatureHeure.push([heure,temperature])
            dataArrayGraphiquePressionHeure.push([heure,pression])
            dataArrayGraphiqueAltitudeHeure.push([heure,altitude])
        }
        // var options = {
        //     hAxis: {
        //         title: 'Time',
        //         textStyle: {
        //             color: '#01579b',
        //             fontSize: 20,
        //             fontName: 'Arial',
        //             bold: true,
        //             italic: true
        //         },
        //         titleTextStyle: {
        //             color: '#01579b',
        //             fontSize: 16,
        //             fontName: 'Arial',
        //             bold: false,
        //             italic: true
        //         }
        //     },
        //     vAxis: {
        //         title: 'Popularity',
        //         textStyle: {
        //             color: '#1a237e',
        //             fontSize: 24,
        //             bold: true
        //         },
        //         titleTextStyle: {
        //             color: '#1a237e',
        //             fontSize: 24,
        //             bold: true
        //         }
        //     },
        //     colors: ['#a52714', '#097138']
        // };

        var dataTableGraphiquePressionHeure = google.visualization.arrayToDataTable(dataArrayGraphiquePressionHeure);
        var dataViewGraphiquePressionHeure = new google.visualization.DataView(dataTableGraphiquePressionHeure);
        var optionsGraphiquePression = {                                             // param pour le graph Température
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
        };
        var graphiquePressionHeure = new google.visualization.LineChart(document.getElementById('graphiquePression'));// fonction pour créer le graph
        graphiquePressionHeure.draw(dataViewGraphiquePressionHeure, optionsGraphiquePression);

//-------------------------------------------------------------------------------------------------------------------------------

        var dataTableGraphiqueTemperatureHeure = google.visualization.arrayToDataTable(dataArrayGraphiqueTemperatureHeure);
        var dataViewGraphiqueTemperatureHeure = new google.visualization.DataView(dataTableGraphiqueTemperatureHeure);
        var options = {
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
        }
        var graphiqueTemperatureHeure = new google.visualization.LineChart(document.getElementById('graphiqueTempérature'));// fonction pour créer le graph
        graphiqueTemperatureHeure.draw(dataViewGraphiqueTemperatureHeure, options);

//-------------------------------------------------------------------------------------------------------------------------------

        var dataTableGraphiqueAltitudeHeure = google.visualization.arrayToDataTable(dataArrayGraphiqueAltitudeHeure);
        var dataViewGraphiqueAltitudeHeure = new google.visualization.DataView(dataTableGraphiqueAltitudeHeure);
        var optionsGraphiqueAltitude = {                                             // param pour le graph Température
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
        };
        var graphiqueAltitudeHeure = new google.visualization.LineChart(document.getElementById('graphiqueAltitude'));// fonction pour créer le graph
        graphiqueAltitudeHeure.draw(dataViewGraphiqueAltitudeHeure, optionsGraphiqueAltitude);

        // console.log(data);
    }
    fetchTable(url)
}



//----------------------------------------------------------RANDOM BULLSHIT I SAVE
//----------------------------------------------------------RANDOM BULLSHIT I SAVE
//----------------------------------------------------------RANDOM BULLSHIT I SAVE
//----------------------------------------------------------RANDOM BULLSHIT I SAVE
// async function fetchTable(url) {
//     const resp = await fetch(url);
//     return resp.json();
// }
//                                  //SOLUTION 1
// function processTable(data) {
//     console.log(data);
// }
//
// fetchTable(url).then(processTable);
     // console.log(callbackWithData)

    // fetch(url)
    //     .then((resp) => resp.json())
    //     .then(function(data) {
    //         // console.log(data)
    //         let bmp180s = data;
    //         return bmp180s.map(function(bmp180) {
    //             // console.log(bmp180)
    //             let li = createNode('li');
    //             // let img = createNode('img');
    //             let span = createNode('span');
    //             // img.src = author.picture.medium;
    //             li.innerHTML = `id:${bmp180.id}
    //                             Température: ${bmp180.temperature}
    //                             Pression: ${bmp180.pression}
    //                             Altitude: ${bmp180.altitude}
    //                             Date: le ${bmp180.date}
    //                             à ${bmp180.heure} `;    //ce que je veux afficher dans l'html pour test
    //             append(ul, li);                     //test d'affichage dans ma vue twig qui fonctionne
    //             // let tailleJSON=bmp180s.length;
    //             // console.log(tailleJSON)
    //             let Temp=bmp180.temperature
    //             let id=bmp180.id
    //             let heure=bmp180.heure
    //             // console.log()
    //             // console.log(Temp)
    //             tableauValeur=[bmp180];
    //             // console.log(tableauValeur)
    //
    //             var dataAsArray = [             // où les données seront insérées avec les attribut de pré inséré ici température
    //                 ["heure","température"]
    //             ];
    //             dataAsArray.push([id,Temp])
    //
    //             // for (let i = 0; i < tailleJSON; i++) {
    //             // console.log("test for")
    //             // console.log(dataAsArray)
    //             // }
    //             // Tab.forEach((Resultat)=>{
    //             //     for (let j = 0; j < Tab[0].length; j++) {
    //             //         let v1=Resultat[j][0];
    //             //         let v2=Resultat[j][1];
    //             //
    //             //         // console.log(Resultat)
    //             //         dataAsArray.push([j,v1,v2])
    //             //         // console.log("v1: "+v1,"v2: "+v2)
    //             //         // data.addRows([[j,v1,v2]]);
    //             //     }
    //             //     // console.log(tableau[i][i])
    //             // });
    //             // console.log(dataAsArray)
    //
    //             var dataTable = google.visualization.arrayToDataTable(dataAsArray);
    //             var dataView = new google.visualization.DataView(dataTable);
    //             var options = {                                             // param pour le graph
    //                 title: "Température",
    //             };
    //             var chart = new google.visualization.LineChart(document.getElementById('my_chart'));// fonction pour créer le graph
    //             chart.draw(dataView, options);
    //         })
    //
    //                                                                            // on affiche le graph en fonction de donnée et paramètre
    //         })
    //         // console.log(tableauValeur)
    //
    //
    //     .catch(function(error) {
    //         console.log(error);
    //     });}


// function createNode(element) {
//     return document.createElement(element);
// }
//
// function append(parent, el) {
//     return parent.appendChild(el);
// }
//
// const ul = document.getElementById('authors');
// const url = 'https://randomuser.me/api/?results=10';
//
// fetch(url)
//     .then((resp) => resp.json())
//     .then(function(data) {
//         let authors = data.results;
//         return authors.map(function(author) {
//             let li = createNode('li');
//             let img = createNode('img');
//             let span = createNode('span');
//             img.src = author.picture.medium;
//             span.innerHTML = `${author.name.first} ${author.name.last}`;
//             append(li, img);
//             append(li, span);
//             append(ul, li);
//         })
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// /**
//  * Grab data attributes with vanilla JavaScript (ES6)
//  */
// document.addEventListener('DOMContentLoaded', () => {
//
//     // Select elements by their data attribute
//     const entryElements =
//         document.querySelectorAll('[data-bmp-id]');
//
//     // Map over each element and extract the data value
//     const entryIds =
//         Array.from(entryElements).map(
//             item => item.dataset.bmpId
//         );
//
//     // You'll now have an array containing string values
//     console.log(entryIds); // eg: ["1", "2", "3"]
// });


// google.charts.load('current', {packages: ['corechart', 'line']});
// google.charts.setOnLoadCallback(drawAxisTickColors);
//
// document.addEventListener('DOMContentLoaded');
//
//     function drawAxisTickColors() {
//
//     let userRating = document.querySelector('.js-user-rating');
//     let tableau = [userRating.dataset.isAuthenticated];
//
//         for (const [key, value] of Object.entries(tableau)) {
//             console.log(`${key}: ${value}`);
//         }
//
//         // tableau.forEach((iTab1)=>{
//         //
//         //     console.log(iTab1)
//         //     // let tab2=[iTab1]
//         //     // tab2.forEach((iTab2)=>{
//         //     //     console.log(iTab2)
//         //     // })
//         // // console.log(typeof tableau)
//         // });
//
//
//
//      // console.log(tableau)
//     // console.log(tableau.length)
//     // console.log("yeeeeeeeeeeeee")
//
//
//
//         var data = new google.visualization.DataTable();
//         data.addColumn('number', 'X');
//         data.addColumn('number', 'Dogs');
//         data.addColumn('number', 'Cats');
//         for (let i=0;i<tableau.length;i++){
//             let v1=Math.random();
//             let v2=Math.random();
//             // console.log(tableau[i][i])
//
//             data.addRows([[i,v1,v2]]);
//         }
//         // data.addRows([
//         //     [0, 0, 0]
//         // ]);
//
//
//         var options = {
//             hAxis: {
//                 title: 'Time',
//                 textStyle: {
//                     color: '#01579b',
//                     fontSize: 20,
//                     fontName: 'Arial',
//                     bold: true,
//                     italic: true
//                 },
//                 titleTextStyle: {
//                     color: '#01579b',
//                     fontSize: 16,
//                     fontName: 'Arial',
//                     bold: false,
//                     italic: true
//                 }
//             },
//             vAxis: {
//                 title: 'Popularity',
//                 textStyle: {
//                     color: '#1a237e',
//                     fontSize: 24,
//                     bold: true
//                 },
//                 titleTextStyle: {
//                     color: '#1a237e',
//                     fontSize: 24,
//                     bold: true
//                 }
//             },
//             colors: ['#a52714', '#097138']
//         };
//         var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
//         chart.draw(data, options);
//     }
//
//     // or with jQuery
//     //var isAuthenticated = $('.js-user-rating').data('isAuthenticated');
//
//
//
//
