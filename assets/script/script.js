const APIkey = '0bc9b29071f3f9d4248ef8dcaa74ed96'
const geoAPIkey = '0bc9b29071f3f9d4248ef8dcaa74ed96'
const cityName = $('#search-input').val().trim();
const lat = 0;
const lon = 0;
const geoQueryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid' + geoAPIkey
const queryURL = 'http://api.openweathermap.org/data/2.5/forecast/?q=' + cityName + '&cnt=100&units=metric&appid=' + APIkey



function getGeo() {
    fetch(geoQueryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

        })
}


function getWeather() {
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            const temp = data.list[0].main.temp
            const wind = data.list[0].wind.speed
            const humidity = data.list[0].main.humidity
            console.log(temp)
            console.log(wind)
            console.log(humidity)



        })
}



$('#search-button').on('click', function (event) {

    event.preventDefault();
    // getGeo()
    getWeather()

})


