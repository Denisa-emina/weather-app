//luam valoarea cheii city din localstorage
let currentCityFromLs = localStorage.getItem("city");

//Pasul urmator este sa actua;izam orasul afisat pe ecran daca avem cheia city in localStorage
const currentCityTag = document.querySelector(".current-city");
if (currentCityTag) {
    currentCityTag.innerHTML = currentCityFromLs;
  }

  if (!currentCityFromLs) {
    localStorage.setItem("city", "București");
    currentCityTag.innerHTML = "București";
      }
  
//Afisam vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLs); 

//Afisam vremea pe urmatoarele 5 zile
displayWeatherForecast(currentCityFromLs);