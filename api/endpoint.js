//API keyurile in genera nu ar fi bine sa le stocam in format text in codul nostru pt ca orice ar putea sa le vada si sa le foloseasca, e bine ca ele sa stea pe server, dar in cazul nostru fiind un API gratuit o sa le stocam aici
const API_KEY = '25fe6cc7530118dfbcc7fa225251307f';

//Construim linkurile(endpointurile) catre care noi o sa facem requesturi care js
function getCurrentWeatherEndpoint(city){
return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

//Declaram a 2 a functie pe care o vom folosi pentru a lua url-ul catre API-ul ce ne returneaza date despre vremea pe 5 zile
function getForecastWeatherEndpoint(city) {
return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}