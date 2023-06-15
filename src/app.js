/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const who = ["El perro", "Mi abuela", "La tortuga", "Mi pajaro"];
  const action = ["comio", "se orino sobre", "aplastó", "ropio"];
  const what = ["mis deberes", "mis llaves", "el coche"];
  const when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];
  function generadorDeExcusas() {
    let aleatorioWho = who[Math.floor(Math.random() * who.length)];
    let aleatorioAction = action[Math.floor(Math.random() * action.length)];
    let aleatorioWhat = what[Math.floor(Math.random() * what.length)];
    let aleatorioWhen = when[Math.floor(Math.random() * when.length)];

    let excusa = aleatorioWho.concat(
      " ",
      aleatorioAction,
      " ",
      aleatorioWhat,
      " ",
      aleatorioWhen
    );

    return excusa;
  }
  const excuse = document.querySelector("#excuse");
  excuse.innerHTML = generadorDeExcusas();
};
