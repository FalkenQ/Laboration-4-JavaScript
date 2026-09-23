/*
Detta är ett program för att skapa en "food" array med 5 måltider.
Programmet skriver ut hela arrayen, första elementet, sista elementet.
Programmet lägger till en måltid/element sist i arrayen.
Programmet tar bort första måltiden/elementet och flyttar ner alla element ett steg.
Sist skriver programmet ut de nuvarande elementen/måltider som finns i food arrayen.

Programmet innehåller en array som sen använder sig av push och shift för att utföra sin uppgift.

Författare: Linus Falk.
*/

"use strict";

const food = ["Soup", "Spaghetti", "Pizza", "Sushi", "Ramen"];

// 1. Hela arrayen utskriven
console.log(food);

// 2. Första elementet
console.log("Your food is " + food[0]);

// 3. Sista elementet
console.log("Your food is " + food[4]);

// 4. Lägger till en maträtt sist i min array och skriver ut arrayen
food.push("Bolognese");
console.log(food);

// 5. Tar bort första maträtten ur arrayen och skriver ut arrayen
food.shift(food);
console.log(food);

// 6. Skriver ut arrayen igen
console.log("Detta är de nuvarande elementen/måltider i food arrayen: " + food);