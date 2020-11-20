
//Bu using fetch-Module

 const fetch = require('node-fetch');

let url = "http://bulk.openweathermap.org/archive/{weather_14.json.gz}?appid={00a276526baac593ba869bd8a27d6ef9}";

// let url = "https://api.darksky.net/forecast/5a6c29e0d9c879cef11d4d5de29d7d78/37.8267,-122.4233";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(json)
    });


 // another way to fetch the json

// const request = require('request')
// //const url = 'https://jsonplaceholder.typicode.com/todos/1';
// //const url = 'http://bulk.openweathermap.org/archive/{weather_14.json.gz}?appid={test}'
// const url = 'https://api.darksky.net/forecast/5a6c29e0d9c879cef11d4d5de29d7d78/37.8267,-122.4233'
// request({ url: url }, (error, response) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(response.body)
// })


  


