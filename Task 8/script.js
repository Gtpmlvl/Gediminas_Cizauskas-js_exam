/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
"use strict";
console.log("script.js");

class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    const sum = this.a + this.b;
    console.log("sum  ===", sum);
  }
  subtraction() {
    const sum = this.a - this.b;
    console.log("sum subtraction ===", sum);
  }
  multiplication() {
    const sum = this.a * this.b;
    console.log("sum multiplication ===", sum);
  }
  division() {
    const sum = this.a / this.b;
    console.log("sum division ===", sum);
  }
}

const sumRez = new Calculator(1000, 100);
sumRez.sum();
sumRez.subtraction();
sumRez.multiplication();
sumRez.division();
