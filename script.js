const body = document.querySelector('body');
let inputField = document.getElementById('searchText');
let searchButton = document.getElementById('searchButton');
let weatherCard = document.createElement('div');

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
        console.log(data.location.name);
        console.log(data.location.country);
        inputCity = data.location.name;
    });
}