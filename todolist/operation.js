const newItemImput = document.querySelector("#saisir");
const divForm = document.querySelector("#div-form");
const ajouter = document.querySelector("#ajouter");
const todoList = document.querySelector("#todolist");
const ulListe = document.querySelector("#ulListe");

ajouter.addEventListener("click", (e) => {
  e.preventDefault();
  AddItems();
});

function AddItems() {
  newItem = newItemImput.value;
  if (newItemImput.value === "") {
    return;
  }

  let listItem = document.createElement("li");

  let chekbox = document.createElement("input");
  chekbox.type = "checkbox";
  listItem.innerHTML = `<input type='checkbox' /><label>${newItem}</label><img src="téléchargement.png" id="corbeille">`;
  const corbeille = document.querySelector("#corbeille");

  ulListe.appendChild(listItem);

  newItemImput.value = "";
  this.listItem = [];

  listItem.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      this.listItem.push(listItem);
      listItem.remove();
    }
  });

  aFaire.addEventListener("click", () => {
    if (this.listItem.length > 0) {
      copieListe = listItem;
      this.arraycopieListe = [];
      this.arraycopieListe.push(copieListe);
      listItem.remove();
      let compt = 0;
      if (copieListe.firstChild.checked === false) {
        for (y = 0; y < this.arraycopieListe.length; y++) {
          for (i = 0; i < this.listItem.length; i++) {
            if (this.listItem[i] !== this.arraycopieListe[y]) {
              compt++;
              if (compt === this.listItem.length)
                ulListe.appendChild(this.arraycopieListe[y]);
            }
          }
        }
      }

      listItem = copieListe;
    } else {
      copieListe = listItem;
      listItem.remove();
      if (
        copieListe.firstChild.checked === false &&
        copieListe !== this.listItem
      ) {
        ulListe.appendChild(copieListe);
      }
      listItem = copieListe;
    }
    //}
  });

  faites.addEventListener("click", () => {
    if (this.listItem.length > 0) {
      copieListe = listItem;
      this.arraycopieListe = [];
      this.arraycopieListe.push(copieListe);
      listItem.remove();
      let compt = 0;

      if (copieListe.firstChild.checked === true) {
        for (y = 0; y < this.arraycopieListe.length; y++) {
          for (i = 0; i < this.listItem.length; i++) {
            if (this.listItem[i] !== this.arraycopieListe[y]) {
              compt++;
              if (compt === this.listItem.length)
                ulListe.appendChild(this.arraycopieListe[y]);
            }
          }
        }
      }

      listItem = copieListe;
    } else {
      copieListe = listItem;
      listItem.remove();
      if (
        copieListe.firstChild.checked === true &&
        copieListe !== this.listItem
      ) {
        ulListe.appendChild(copieListe);
      }
      listItem = copieListe;
    }
  });

  tout.addEventListener("click", () => {
    if (this.listItem.length > 0) {
      copieListe = listItem;
      this.arraycopieListe = [];
      this.arraycopieListe.push(copieListe);
      listItem.remove();
      let compt = 0;

      for (y = 0; y < this.arraycopieListe.length; y++) {
        for (i = 0; i < this.listItem.length; i++) {
          if (this.listItem[i] !== this.arraycopieListe[y]) {
            compt++;
            if (compt === this.listItem.length)
              ulListe.appendChild(this.arraycopieListe[y]);
          }
        }
      }

      listItem = copieListe;
    } else {
      copieListe = listItem;
      listItem.remove();
      if (copieListe !== this.listItem) {
        ulListe.appendChild(copieListe);
      }
      listItem = copieListe;
    }
  });
}
