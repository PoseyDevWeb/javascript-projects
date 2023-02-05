let quiz1 = document.querySelector("#quiz1");
let quiz2 = document.querySelector("#quiz2");
let quiz3 = document.querySelector("#quiz3");
let quiz4 = document.querySelector("#quiz4");
let quiz5 = document.querySelector("#quiz5");
let resultat = document.getElementById("resultat");
let valider = document.getElementById("valider");
let option = document.getElementById("option");

window.addEventListener("load", () => {
  resultat.innerHTML = `<h2>Cliquez sur Valider Pour Voir le Resultat</h2>`;
  // gener un tableau de nombre different
  let arrayNumbers = [];
  while (arrayNumbers.length < 5) {
    let randomNum = Math.floor(Math.random() * quizArray.length - 1) + 1;
    if (arrayNumbers.indexOf(randomNum) === -1) {
      arrayNumbers.push(randomNum);
    }
  }

  //question1
  document.querySelector("#h1-1").innerHTML = quizArray[arrayNumbers[0]].quiz;
  document.getElementById("label1-1").innerHTML =
    quizArray[arrayNumbers[0]].vrai;

  document.getElementById("label1-2").innerHTML =
    quizArray[arrayNumbers[0]].faux1;

  document.getElementById("label1-3").innerHTML =
    quizArray[arrayNumbers[0]].faux2;

  //question2
  document.querySelector("#h1-2").innerHTML = quizArray[arrayNumbers[1]].quiz;
  document.getElementById("label2-1").innerHTML =
    quizArray[arrayNumbers[1]].vrai;

  document.getElementById("label2-2").innerHTML =
    quizArray[arrayNumbers[1]].faux1;

  document.getElementById("label2-3").innerHTML =
    quizArray[arrayNumbers[1]].faux2;

  //question3
  document.querySelector("#h1-3").innerHTML = quizArray[arrayNumbers[2]].quiz;
  document.getElementById("label3-1").innerHTML =
    quizArray[arrayNumbers[2]].vrai;

  document.getElementById("label3-2").innerHTML =
    quizArray[arrayNumbers[2]].faux1;

  document.getElementById("label3-3").innerHTML =
    quizArray[arrayNumbers[2]].faux2;

  //question4
  document.querySelector("#h1-4").innerHTML = quizArray[arrayNumbers[3]].quiz;
  document.getElementById("label4-1").innerHTML =
    quizArray[arrayNumbers[3]].vrai;

  document.getElementById("label4-2").innerHTML =
    quizArray[arrayNumbers[3]].faux1;

  document.getElementById("label4-3").innerHTML =
    quizArray[arrayNumbers[3]].faux2;

  //question5
  document.querySelector("#h1-5").innerHTML = quizArray[arrayNumbers[4]].quiz;
  document.getElementById("label5-1").innerHTML =
    quizArray[arrayNumbers[4]].vrai;

  document.getElementById("label5-2").innerHTML =
    quizArray[arrayNumbers[4]].faux1;

  document.getElementById("label5-3").innerHTML =
    quizArray[arrayNumbers[4]].faux2;
});

let list1 = document.querySelector("#list1");
let list2 = document.querySelector("#list2");
let list3 = document.querySelector("#list3");
let list4 = document.querySelector("#list4");
let list5 = document.querySelector("#list5");
let divIdQuiz1 = document.querySelector("#div-id-quiz1");
let divIdQuiz2 = document.querySelector("#div-id-quiz2");
let divIdQuiz3 = document.querySelector("#div-id-quiz3");
let divIdQuiz4 = document.querySelector("#div-id-quiz4");
let divIdQuiz5 = document.querySelector("#div-id-quiz5");

valider.addEventListener("click", () => {
  resultat.innerHTML = `<h2>Cliquez sur Valider Pour Voir le Resultat</h2>`;
  let Scorre = 0;
  //Quiz1

  if (list1.children[0].checked === false) {
    divIdQuiz1.style.background = "brown";
  } else {
    divIdQuiz1.style.background = "green";
    Scorre++;
  }

  //quiz2
  if (list2.children[8].checked === false) {
    divIdQuiz2.style.background = "brown";
  } else {
    divIdQuiz2.style.background = "green";
    Scorre++;
  }

  //quiz3
  if (list3.children[4].checked === false) {
    divIdQuiz3.style.background = "brown";
  } else {
    divIdQuiz3.style.background = "green";
    Scorre++;
  }

  //quiz4
  if (list4.children[8].checked === false) {
    divIdQuiz4.style.background = "brown";
  } else {
    divIdQuiz4.style.background = "green";
    Scorre++;
  }

  //quiz5
  if (list5.children[0].checked === false) {
    divIdQuiz5.style.background = "brown";
  } else {
    divIdQuiz5.style.background = "green";
    Scorre++;
  }

  if (Scorre === 5) {
    resultat.innerHTML = `<h2>🎉Bravos! c'est un sans faute🎉</h2><h1>Votre Scorre : ${Scorre} / 5</h1>
  <h3>Cliquez pour un autre Parti <input type="submit" value="next" id="next"> !</h3>`;
    let next = document.querySelector("#next");
    next.addEventListener("click", () => {
      location.reload();
    });
  } else {
    resultat.innerHTML = ` <h2>😢Vous pouvez Faire mieux!😢</h2> <h1>Votre Scorre : ${Scorre} / 5</h1>
  <h3>Cochez une autre reponse dans les cases rouges , puis re-valider!</h3>`;
  }
});
