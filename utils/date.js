//Aici o sa avem logica pt a ne extrage date despre data de la API (PROPRIETATEA DT)
function getDayOfTheWeek(dateInUtc){
//Pt ca data de la api este in utc format- trebuie sa o transform folosind obiectul date din js
const date = new Date(dateInUtc * 1000);
const dayIndex = date.getDay();
let day;

    switch (dayIndex) {
        case 0:
          day = "Duminică";
          break;
        case 1:
          day = "Luni";
          break;
        case 2:
          day = "Marți";
          break;
        case 3:
          day = "Miercuri";
          break;
        case 4:
          day = "Joi";
          break;
        case 5:
          day = "Vineri";
          break;
        case 6:
          day = "Sâmbătă";
          break;
        default:
          // Aruncam o eroare daca index-ul nu este valid (nu ar trebui sa se ajunga aici).
          throw new Error("Invalid day index.");
    } 

    return day;
}

function getHour(dateInUtc) {
    const date = new Date(dateInUtc * 1000);
    //Extragem ora folosind metoda getHours a obiectului date
    //Daca ora este mai mica decat 10 o sa ii adaugam noi un 0 in fata
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    //Extragem minutele folosind o metoda de pe obiectul date- getMinutes
    let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  // Returnam ora, sub formatul dorit.
  return `${hours}:${minutes}`;
}