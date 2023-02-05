const tout = document.querySelector("#tout");
const aFaire = document.querySelector("#a-faire");
const faites = document.querySelector("#faites");

tout.addEventListener("click", () => {
  tout.style.background = "green";
  tout.style.color = "white";
  aFaire.style.background = "white";
  aFaire.style.color = "green";
  faites.style.background = "white";
  faites.style.color = "green";
});

aFaire.addEventListener("click", () => {
  aFaire.style.background = "green";
  aFaire.style.color = "white";
  tout.style.background = "white";
  tout.style.color = "green";
  faites.style.background = "white";
  faites.style.color = "green";
});

faites.addEventListener("click", () => {
  faites.style.background = "green";
  faites.style.color = "white";
  tout.style.background = "white";
  tout.style.color = "green";
  aFaire.style.background = "white";
  aFaire.style.color = "green";
});
