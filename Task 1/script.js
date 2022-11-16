/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
"use strict";
console.log("script.js");

const formSubmit = document.getElementById("submit-btn");
const rezultP = document.getElementById("output");

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  rezultP.innerHTML = "";
  kgToLb();
  kgToG();
  kgToOz();
});

function kgToLb() {
  const newP = document.createElement("p");
  const kgInput = document.getElementById("search").value.trim();
  const lbRez = kgInput * 2.2046;
  newP.classList.add("results_style");
  rezultP.appendChild(newP);
  newP.textContent = `Svarai : ${lbRez}`;
}

function kgToG() {
  const newP = document.createElement("p");
  const kgInput = document.getElementById("search").value.trim();
  const gRez = kgInput / 0.001;
  newP.classList.add("results_style");
  rezultP.appendChild(newP);
  newP.textContent = `Gramai : ${gRez}`;
}

function kgToOz() {
  const newP = document.createElement("p");
  const kgInput = document.getElementById("search").value.trim();
  const ozRez = kgInput * 35.274;
  newP.classList.add("results_style");
  rezultP.appendChild(newP);
  newP.textContent = `Uncijos : ${ozRez}`;
}
