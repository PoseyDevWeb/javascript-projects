let nomCookie = document.querySelector("#nom");
let valeurCookie = document.querySelector("#valeur");
let creer = document.querySelector("#btn1");
let afficher = document.querySelector("#btn2");

creer.addEventListener("click", (e) => {
  e.preventDefault();
  if (nomCookie.value === "" && valeurCookie.value === "") {
    nomCookie.style.border = "2px solid red";
    valeurCookie.style.border = "2px solid red";
    document.querySelector("#affiche-cookie").innerHTML = "";
    document.querySelector("#creer-modifier-erreur").innerHTML =
      " <h3>Erreur</h3>`";
    document.querySelector("#creer-modifier-erreur").style.background = "red";
  } else if (nomCookie.value === "") {
    nomCookie.style.border = "2px solid red";
    valeurCookie.style.border = "2px solid white";
    document.querySelector("#affiche-cookie").innerHTML = "";
    document.querySelector("#creer-modifier-erreur").innerHTML =
      " <h3>Erreur</h3>`";
    document.querySelector("#creer-modifier-erreur").style.background = "red";
  } else if (valeurCookie.value === "") {
    valeurCookie.style.border = "2px solid red";
    nomCookie.style.border = "2px solid white";
    document.querySelector("#creer-modifier-erreur").innerHTML =
      " <h3>Erreur</h3>`";
    document.querySelector("#creer-modifier-erreur").style.background = "red";
    document.querySelector("#affiche-cookie").innerHTML = "";
  } else {
    valeurCookie.style.border = "2px solid white";
    nomCookie.style.border = "2px solid white";
    document.querySelector("#creer-modifier-erreur").innerHTML =
      " <h3>Reussi</h3>`";
    document.querySelector("#creer-modifier-erreur").style.background = "green";
    creationCookies();
  }
});

afficher.addEventListener("click", (e) => {
  e.preventDefault();
  if (afficherCookie(nomCookie.value) === "Cookie Introuvable") {
    nomCookie.style.border = "2px solid red";
    document.querySelector("#affiche-cookie").innerHTML = "";
    document.querySelector("#creer-modifier-erreur").innerHTML =
      " <h3>Erreur</h3>`";
    document.querySelector("#creer-modifier-erreur").style.background = "red";
  } else {
    nomCookie.style.border = "2px solid white";
    document.querySelector("#affiche-cookie").innerHTML = ` <h3>Nom = ${
      nomCookie.value
    }</h3>
  <h3>Valeur = ${afficherCookie(nomCookie.value)}</h3>`;
  }
});

function creationCookies() {
  const maxAge = 10 * 24 * 60 * 60 * 1000;
  //Creer un token

  return (document.cookie = `${nomCookie.value}=${valeurCookie.value}; max-age=${maxAge}`);
}
nom = nomCookie.value;
function afficherCookie(nom) {
  var regSepCookie = new RegExp("(; )", "g");
  var cookies = document.cookie.split(regSepCookie);
  let ok = 0;
  for (var i = 0; i < cookies.length; i++) {
    var regInfo = new RegExp("=", "g");
    var infos = cookies[i].split(regInfo);
    if (infos[0] === nom) {
      return unescape(infos[1]);
    } else {
      ok++;
    }
  }
  if (ok === cookies.length) return "Cookie Introuvable";
}
