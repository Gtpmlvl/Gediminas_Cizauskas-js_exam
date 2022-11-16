/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
"use strict";
console.log("script.js");

class Movie {
  constructor(titleName, dirName, movieBudget) {
    this.title = titleName;
    this.director = dirName;
    this.budget = movieBudget;
  }

  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}

const movie1 = new Movie("Rokis", "Stallone", 50000000);
const movie2 = new Movie("Godfather", "Coppola", 600000000);
console.log("movie1.wasExpensive() ===", movie1.wasExpensive());
console.log("movie2.wasExpensive() ===", movie2.wasExpensive());
console.log("movie1 ===", movie1);
console.log("movie2 ===", movie2);
