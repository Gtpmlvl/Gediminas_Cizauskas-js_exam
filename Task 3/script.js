/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
console.log("script.js");

const ENDPOINT = "https://api.github.com/users";
const divElCards = document.getElementById("output");
const showUsersBtn = document.getElementById("btn");

showUsersBtn.addEventListener("click", () => {
  console.log("click");

  getData(ENDPOINT).then((dataArr) => {
    makeCardList(dataArr);
  });
});

function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs)
    .catch((err) => console.warn("klaida getData", err));
}

function makeCard(obj) {
  const divEl = document.createElement("div");
  divEl.className = "card card--user";
  const imgEl = document.createElement("img");
  imgEl.src = obj.avatar_url;
  imgEl.alt = obj.login;
  const h3El = document.createElement("h3");
  h3El.className = "small__heading";
  h3El.textContent = `Login: ${obj.login}`;
  divEl.append(imgEl, h3El);
  return divEl;
}

function makeCardList(arr) {
  divElCards.innerHTML = "";
  arr
    .map((uObj) => makeCard(uObj))
    .forEach((htmEl) => divElCards.append(htmEl));
}
