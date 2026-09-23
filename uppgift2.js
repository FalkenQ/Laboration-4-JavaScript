/*
Detta är ett program som räknar ut priset med moms och utan moms på antalet mjölk kartonger.
Koden består av variabler och konstanter som används för ekvationerna för att räkna ut priset på mjölk med eller utan moms.
Författare: Linus Falk.
*/

"use strict";

// Variabler och konstanter
const milk = 16;
const amountMilk = 10;

// Ekvationer för att räkna ut pris på antelt mjölk och mjölk + moms
const totalAmountPrice = milk * amountMilk;
const totalAmountPriceVat = totalAmountPrice * 1.25;

// Kod för att skriva ut i terminalen
console.log("Pris: " + milk + " kr/st");
console.log("Antal: " + amountMilk + " st");
console.log("Totalt: " + totalAmountPrice + " kr");
console.log("Totalt inkl moms: " + totalAmountPriceVat + " kr");