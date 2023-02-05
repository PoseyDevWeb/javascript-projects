//"https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=3fdb04eea5194c48943af6b0545d312a&include=minutely";
//forecast/energy
//orevision en 16jours : https://api.weatherbit.io/v2.0/forecast/daily?lat=35.7796&lon=-78.6382&key=3fdb04eea5194c48943af6b0545d312a

let adresse = document.querySelector("#adresse");
let days = [
  {
    1: "lun.",
    2: "Mar.",
    3: "Mer.",
    4: "Jeu.",
    5: "Ven.",
    6: "Sam.",
    7: "Dim.",
  },
];
//const translate = require("google-translate-api");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let currentDate = new Date();
  //let currentYear = currentDate.getFullDay();
  //console.log(currentYear);
  //console.log(new Date().getDay());

  AfficherMeteo();
});

function AfficherMeteo() {
  var url =
    "https://api.myptv.com/geocoding/v1/locations/by-text?searchText=" +
    adresse.value;
  fetch(url, {
    method: "GET",
    headers: {
      apiKey:
        "RVVfY2YyODNlNTUyOGE1NGJkZWFhYThjNjRmMWY1NmRlYzQ6NTg0YThiN2UtZTE1NS00YTc1LThhMzQtMjcyMmRhMTFmOTg4",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (addressArr = data))
    .then((show) => console.log(addressArr))
    .then((show) => showAddress())
    .catch((err) => console.log(err));
}
function showAddress() {
  if (addressArr["locations"].length == 1) {
    adresse.style.border = "1px solid gray";
    addressArr["locations"].forEach((element) => {
      this.long = element.referencePosition.longitude;
      this.lat = element.referencePosition.latitude;
      previsionDaily(lat, long);
      ville = element.address.city;
      pays = element.address.countryName;

      adresse.value =
        " Lat : " +
        element.referencePosition.latitude +
        ", long : " +
        element.referencePosition.longitude;
    });

    let url2 = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=3fdb04eea5194c48943af6b0545d312a`;
    fetch(url2)
      .then((response) => {
        response.json().then((object) => {
          console.log(object);

          let affichage = "<ul>";
          //for (let tempe of object) {
          object["data"].forEach((element) => {
            affichage += `<img src="img/${
              element.weather.icon
            }.png" alt=""><li><h2>${element.temp.toFixed(
              0
            )}°C </h2></li><li> <h3>${ville} / ${pays}</h3><h5>${
              element.weather.description
            }</h5></li><br>`;
          });
          affichage += "</ul>";
          document.querySelector("#villes").innerHTML = affichage;
          adresse.value = "";
        });
      })

      .catch((err) => console.log("Erreur :" + err));
  } else {
    adresse.style.border = "2px solid red";
    adresse.value = "";
    adresse.placeholder = "(exp : Paris, France) ou (tokyo, Japon)";
    document.querySelector("#villes").innerHTML = "";
  }
}

//prevision Daily

function previsionDaily(latitude, longitude) {
  let url3 = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latitude}&lon=${longitude}&key=3fdb04eea5194c48943af6b0545d312a`;
  fetch(url3)
    .then((response) => {
      response.json().then((object) => {
        console.log(object);

        let affichage = "<ul>";
        //for (let tempe of object) {
        let i = 0;
        object["data"].forEach((element) => {
          i++;
          if (i < 10 && i > 1) {
            affichage += `<li>${element.datetime.slice(
              5,
              10
            )}<br><img src="img/${
              element.weather.icon
            }.png" alt=""><br>${element.high_temp.toFixed(
              0
            )}°C<br> ${element.low_temp.toFixed(0)}°C</li>`;
          } else {
            return;
          }
        });
        affichage += "</ul>";
        document.querySelector("#jour").innerHTML = affichage;
      });
    })

    .catch((err) => console.log("Erreur :" + err));
}
