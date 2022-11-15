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

const kgInput = document.getElementById("search");
const formSubmit = document.getElementById("submit-btn");
const rezultP = document.getElementById("output");

// formSubmit.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("paspaudei");

//   const kgInput = document.getElementById("search").value.trim();
//   const kgToLb = kgInput * 2.2046;

//   rez.append(kgToLb);

//   console.log("kgToLb ===", kgToLb);
//   calcRez(kgToLb);
// });

formSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  kgToLb();
  kgToG();
  kgToOz();
});

function kgToLb() {
  const newP = document.createElement("p");
  const kgInput = document.getElementById("search").value.trim();
  const lbRez = kgInput * 2.2046;
  console.log("lbRez ===", lbRez);
  newP.classList.add("results_style");
  rezultP.appendChild(newP);
  newP.textContent = `Svarai : ${lbRez}`;
}

function kgToG() {
  const newP = document.createElement("p");
  const kgInput = document.getElementById("search").value.trim();
  const gRez = kgInput / 0.001;
  console.log("gRez ===", gRez);
  newP.classList.add("results_style");
  rezultP.appendChild(newP);
  newP.textContent = `Gramai : ${gRez}`;
}

function kgToOz() {
  const newP = document.createElement("p");
  const kgInput = document.getElementById("search").value.trim();
  const ozRez = kgInput * 35.274;
  console.log("ozRez ===", ozRez);
  newP.classList.add("results_style");
  rezultP.appendChild(newP);
  newP.textContent = `Uncijos : ${ozRez}`;
}

// formSubmit.addEventListener("click", (event) => {
//   event.preventDefault();
//   kgToG();
// });

// formSubmit.addEventListener("click", (event) => {
//   event.preventDefault();
//   kgToOz();
// });

// function calcRez() {
//   const newP = document.createElement("p");
//   newP.textContent = kgToLb;
//   rez.appendChild(newP);
// }

// function kgToLb() {
//   const kgInput = document.getElementById("search").value.trim();
//   const lbRez = kgInput * 2.2046;
//   console.log("lbRez ===", lbRez);
//   addRez();
// }

// function kgToG() {
//   const kgInput = document.getElementById("search").value.trim();
//   const gRez = kgInput / 0.001;
//   console.log("gRez ===", gRez);
//   addRez();
// }

// function kgToOz() {
//   const kgInput = document.getElementById("search").value.trim();
//   const OzRez = kgInput * 35.274;
//   console.log("OzRez ===", OzRez);
//   addRez();
// }
