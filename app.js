

// const fetch = require('node-fetch');

// fetch('https://openweathermap.org/api')
//     .then(res => res.text())
//     .then(text => console.log(text))

// const fetch = require('node-fetch');

// fetch('https://openweathermap.org/api')
//     .then(res => res.json())
//     .then(json => {
//         console.log("First user in the array:");
//         console.log(json[0]);
//         console.log("Name of the first user in the array:");
//         console.log(json[0].name);
// })

const fetch = require('node-fetch');

fetch('api.openweathermap.org/data/2.5/weather?q={London,uk}&appid={00a276526baac593ba869bd8a27d6ef9}')

//fetch('http://bulk.openweathermap.org/archive/{weather_14.json.gz}?appid={00a276526baac593ba869bd8a27d6ef9}')
// fetch('api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&appid={00a276526baac593ba869bd8a27d6ef9}')
    .then(res => res.json())
    .then(json => {
       // console.log("First user in the array:");
        console.log(json[0]);
       // console.log("Name of the first user in the array:");
       // console.log(json[0].name);
})

// const request = require('request')
// //const url = 'https://jsonplaceholder.typicode.com/todos/1';
// const url = 'http://bulk.openweathermap.org/archive/{weather_14.json.gz}?appid={test}'
// //const url = 'https://api.darksky.net/forecast/5a6c29e0d9c879cef11d4d5de29d7d78/37.8267,-122.4233'
// request({ url: url }, (error, response) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(response.body)
// })

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('https://api.openweathermap.org/data/2.5/roadrisk?appid={test}', (res, req) => {
//     const test = {
//         "lat": req.body.lat,
//         "lon": req.body.lon,
//         "dt": req.body.dt
//     };
//     res.send(console.log(test));
// })

// let date_ob = new Date();

// // current date
// // adjust 0 before single digit date
// let date = ("0" + date_ob.getDate()).slice(-2);

// if (date%2 === 0){
//     console.log("date is prime = "  ,date)
// }else{
//     console.log("date is not prime",date)
//}


