//Imi definesc o functie care sa imi returneze iconita de la open weatrher pe baza codului primit de la api
function getWeatherIcon (iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}.png`
}

//Primim viteza vantului in metri/secunda, si noi vrem sa ii convertim in km/h
function windToKmPerHour(meterPerSec) {
    return (meterPerSec * 3600) / 1000;
  } 