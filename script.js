const body = document.querySelector('body');
let inputField = document.getElementById('searchText');
let searchButton = document.getElementById('searchButton');
let weatherCard = document.createElement('div');
let weatherImg = document.getElementById('weatherImg');
let cityName = document.getElementById('cityName');
let weatherCondition = document.getElementById('weatherCondition');
let temperatureText = document.getElementById('temperatureText');

body.appendChild(weatherCard);

//api stuff current one
let inputCity = '';
// let apiUrl = `http://api.weatherapi.com/v1/current.json?key=4b00f66c64844ff0a65120230232303&q=${inputCity}`;
//new api stuff
//key 6395fbd333a047e2d87d11df8ddf03ac
//test with this http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6395fbd333a047e2d87d11df8ddf03ac

searchButton.addEventListener('click', () => {
    inputCity = inputField.value;
    fetchThis(inputCity);
});

window.onload = function() {
  };

const fetchThis = (inputCity) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=4b00f66c64844ff0a65120230232303&q=${inputCity}`)
    .then(resp => resp.json())
    .then((data) => {
        weatherImg.setAttribute('src', data.current.condition.icon);
        weatherImg.setAttribute('alt', data.current.condition.text);
        cityName.innerText = `${data.location.name} (${data.location.country})`;
        weatherCondition.innerText = data.current.condition.text;
        temperatureText.innerText = `${data.current.temp_c}°C (${data.current.temp_f}°F)`;
        inputCity = data.location.name;
    });
}