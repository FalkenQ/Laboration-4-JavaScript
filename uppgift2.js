/*

Författare: Linus Falk.
*/

"use strict";

// Variabler och konstanter
let milk = 16;
const amountMilk = 10;

// Ekvationer
const totalAmountPrice = milk * amountMilk;
const totalAmountPriceVat = totalAmountPrice * 1.25;

// Kod för att skriva ut i terminalen
console.log("Pris: " + milk);
console.log("Antal: " + amountMilk);
console.log("Totalt: " + totalAmountPrice);
console.log("Totalt inkl moms: " + totalAmountPriceVat);