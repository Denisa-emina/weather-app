//Declar functia care imi va afisa vremea pe urmatoarele 5 zile, iar apelul functiei se va face din index.js
function displayWeatherForecast(city) {
    //Prima data ne generam linkul API-ului catre care vom face request-ul
    const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);
//Imi selectez elem cu clasa .weather-forecast deoarece aici am sa inserez html ul generat in fpasul cu fetch
 const weatherForecastContainer = document.querySelector(".weather-forecast");
 //Inainte de avface call-ul catre server (adica inainte de fetch) am sa golesc containerul de weatherForecastContainer
 weatherForecastContainer.innerHTML = "";
  
    //Facem request catre API
    fetch(forecastWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
        //console.log(data);
        //Ne folosim de object destructuring pt a accesa doar proprietatea list din obiectul data
        const { list } = data;

        //Ne declaram un obiect gol in care o sa tinem predictiile pe zile
        const daysMap = {};

        //Iteram prin cele 40 de predictii primite de la server, adica prin fiecare elem al arrayului list
        list.forEach((element) => {
           //Extragem proprietatea dt din fiecare elem al array-ului
           const { dt } = element;
           const day = getDayOfTheWeek(dt);

           //Daca avem deja ziua saptamanii in obiectul daysMap, ii adaugam o noua predictie, adica ii adaugam element
           if (daysMap[day]) {
            daysMap[day].push(element);
           //Altfel daca nu avem ziua sapt in obiectul daysMap, o sa adaugam ziua respectiva impreuna cu elementul(sau predictia)
        } else {
            daysMap[day] = [element];
        }
        })

        //Iteram prin obiectul daysMap care are deja datele grupate pe zile, folosind instructiunea for...in- adica fiecare cheie din obiect reprezinta o zi a saptamanii
         for(dayKey in daysMap) {
           //Inserez in HTML ziua din obiectul daysMap
           weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`;
           //Imi extrag elementul curent din obiectul daysMap
           
           let weatherByDays = daysMap[dayKey];
           weatherByDays.forEach((element) => {
            //Pt fiecare elem sau predictie pot sa ma apuc sa extrag datele de interes
            const { dt, main, weather } = element;
            //Procesez ora
            const hour = getHour(dt);
            //Rotunjim temepratura
            const temperature = Math.round(main.temp);
            const realFeel = Math.round(main.feels_like);
            //Atentie la descriere deoarece weather este un array cu un singur elemen si accesam mereu elem 0
            const description = weather[0].description;
            const weatherIcon = getWeatherIcon(weather[0].icon);

            //Inseram in HTML toate datele de mai sus
            weatherForecastContainer.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>${hour}</div>
              <div><img src="${weatherIcon}" alt="" /></div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div>${description}</div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
           });
         }

    });
        
}