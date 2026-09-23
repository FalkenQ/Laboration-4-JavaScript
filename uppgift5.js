/*
Detta är ett program som skriver ut alla tal mellan 1-20 och även alla jämna tal mellan 1-20.
Koden består av två for loopar. Den första skriver ut alla tal 1-20.
for loop två skriver bara ut de jämna talen i talföljden 1-20.
Författare: Linus Falk.
*/

"use strict";

const food = ["Soup", "Spaghetti", "Pizza", "Sushi", "Ramen"];

// Hela arrayen utskriven
console.log(food);

// Första elementet
console.log("Your food is " + food[0]);

// Sista elementet
console.log("Your food is " + food[4]);

// Lägger till en maträtt sist i min array och skriver ut arrayen
food.push("Bolognese");
console.log(food);

// Tar bort första maträtten ur arrayen och skriver ut arrayen
food.shift(food);
console.log(food);