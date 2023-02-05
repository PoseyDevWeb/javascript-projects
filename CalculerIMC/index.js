let reponse = [
  {
    start: 1,
    end: 18.5,
    value: "Insuffisance pondérale (maigreur)",
  },
  {
    start: 18.5,
    end: 25,
    value: "Corpulence normale",
  },
  {
    start: 25,
    end: 30,
    value: "Surpoids",
  },
  {
    start: 30,
    end: 35,
    value: "Obésité modérée",
  },
  {
    start: 35,
    end: 40,
    value: "Obésité sévère",
  },
  {
    start: 40,
    end: 10000,
    value: "Obésité morbide ou massive",
  },
];

let taille = document.querySelector("#taille");

let poids = document.getElementById("poids");

let calculer = document.getElementById("calculer");

let reponseDiv = document.querySelector("#reponses");

reponseDiv.innerHTML = "<h1>0</h1><h2>Vueillez Commencer le Calcul</h2>";

taille.addEventListener("click", () => {
  taille.style.border = "2px solid whitesmoke";
  poids.style.border = "2px solid whitesmoke";
});

poids.addEventListener("click", () => {
  taille.style.border = "2px solid whitesmoke";
  poids.style.border = "2px solid whitesmoke";
});

calculer.addEventListener("click", () => {
  let tailleSaisi = taille.value;
  let poidsSaisi = poids.value;

  if (tailleSaisi === "") {
    taille.style.border = "2px solid red";
    reponseDiv.innerHTML =
      "<h1>Wops</h1><h2>Vueillez Saisir Quelque chose!</h2>";
    return;
  } else if (tailleSaisi < 1) {
    taille.style.border = "2px solid red";
    reponseDiv.innerHTML =
      "<h1>Wops</h1><h2>La taille doit toujours etre superieur à 0</h2>";
  } else if (poidsSaisi === "") {
    poids.style.border = "2px solid red";
    reponseDiv.innerHTML =
      "<h1>Wops</h1><h2>Vueillez Saisir Quelque chose!</h2>";
    return;
  } else if (poidsSaisi < 1) {
    poids.style.border = "2px solid red";
    reponseDiv.innerHTML =
      "<h1>Wops</h1><h2>Le Poids doit toujours etre superieur à 0</h2>";
  } else if (poidsSaisi > 0 && tailleSaisi > 0) {
    poids.style.border = "2px solid whitesmoke";
    taille.style.border = "2px solid whitesmoke";
    tailleSaisi = tailleSaisi / 100;
    let resultat = poidsSaisi / (tailleSaisi * tailleSaisi);

    for (i = 0; i < reponse.length; i++) {
      let start = reponse[i].start;
      let end = reponse[i].end;
      if (resultat >= start && resultat < end) {
        analyse = reponse[i].value;

        reponseDiv.innerHTML = `<h1>${resultat.toFixed(
          2
        )}</h1><h2>Le Resultat : ${analyse}</h2>;`;
      }
    }
    taille.value = "";
    poids.value = "";
  }
});
