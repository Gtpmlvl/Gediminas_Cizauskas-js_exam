/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
"use strict";
console.log("script.js");

const ENDPOINT = "cars.json";
const divCardEl = document.getElementById("output");

addEventListener("load", (event) => {
  event.preventDefault();
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      makeCardList(data);
    });
});

function makeCard(obj) {
  const divEl = document.createElement("div");
  divEl.className = "card card--user";

  const h3El = document.createElement("h3");
  h3El.className = "small__heading";
  h3El.textContent = `${obj.brand}:`;
  const h4El = document.createElement("h4");
  h4El.className = "models__heading";
  h4El.textContent = `${obj.models}`;

  divEl.append(h3El, h4El);
  return divEl;
}

function makeCardList(arr) {
  arr
    .map((uObj) => makeCard(uObj))
    .forEach((htmlEl) => divCardEl.append(htmlEl));
}
