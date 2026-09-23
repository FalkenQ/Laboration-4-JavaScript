/*
Detta är ett program för att beräkna arean av en rektangel med olika värden.

Programmet innehåller en funktion som blir tillkallad vid 3 olika tillfällen med olika värden.

Författare: Linus Falk.
*/

"use strict";

// Funktionen för att beräkna arean på en rektangel
function calculateArea(a, b) {
   const area = a * b;
   return area;

}

// Anropar funktionen calculateArea 10 * 6
console.log(calculateArea(10, 6));

// Anropar funktionen calculateArea 15 * 32
console.log(calculateArea(15, 32));

// Anropar funktionen calculateArea 3 * 5
console.log(calculateArea(3, 5));