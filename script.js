const body = document.querySelector('body');
let inputField = document.getElementById('searchText');
let searchButton = document.getElementById('searchButton');
let weatherCard = document.createElement('div');
let weatherImg = document.getElementById('weatherImg');
let cityName = document.getElementById('cityName');
let weatherCondition = document.getElementById('weatherCondition');
let temperatureText = document.getElementById('temperatureText');

body.appendChild(weatherCard);

let inputCity = '';
let weather = '';

searchButton.addEventListener('click', () => {
    if (inputField.value != '') {
        inputCity = inputField.value;
        fetchThis(inputCity);
    }
});

window.onload = function() {
    inputField.value = '';
  };

const fetchThis = (inputCity) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=4b00f66c64844ff0a65120230232303&q=${inputCity}`)
    .then(resp => resp.json())
    .then((data) => {
        weatherImg.setAttribute('src', data.current.condition.icon);
        weatherImg.setAttribute('alt', data.current.condition.text);
        cityName.innerText = `${data.location.name}, ${data.location.country}`;
        weatherCondition.innerText = `${data.current.condition.text}`;
        temperatureText.innerText = `${data.current.temp_c}°C`;
        inputCity = data.location.name;
        weather = data.current.condition.text;
        backgroundColorChecker(weather);
    });
}
const backgroundColorChecker = (weather) => {
    if (weather == 'Partly cloudy' ) {

    }
    if (weather == 'Overcast') {

    }
    if (weather == 'Clear') {

    }
    if (weather == 'Sunny') {
        //keep the original bg
    }
    if (weather == 'Light rain') {

    }
}