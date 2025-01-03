// var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=&{lat}&lon=${lon}&appid=${APIkey}`
var APIkey = '0bc9b29071f3f9d4248ef8dcaa74ed96' 
// var geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIkey}`
//console.log( '`https://api.openweathermap.org/data/2.5/forecast?lat=&51.5073219&lon=-0.1276474&appid=0bc9b29071f3f9d4248ef8dcaa74ed96'
//)

var code = 'api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon&lon=-0.1276474&appid=0bc9b29071f3f9d4248ef8dcaa74ed96'
function getGio(){
var geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${APIkey}`
fetch(geoAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data[0]);
    getWeather(data[0])
  })}
 getGio()
 function getWeather(location) {
console.log(location);
var {lat, lon} = location
var city = location.name
var weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`

fetch(weatherAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // currentWeather(data.list[0])
    // forcarsWather(data.list)
  })}
//   function currentWather(today)
//  today.main.temp 
// var temp = today.main.temp

// function forcatsWeather(forcast)