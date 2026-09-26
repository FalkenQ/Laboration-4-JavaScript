/*
Detta är ett program för att addera ihop summan av talen i arrayen number.
Programmet består av en array av tal och en funktion som sedan blir anropad för att skriva ut summan av talen.

Författare: Linus Falk.
*/

"use strict";

// Array som innehåller alla tal
const number = [13, 37, 27, 23, 15, 22];

// Funktionen som adderar alla tal i arrayen oavsett antal tal i arrayen med number.length
function addNumbers(number) {

    // Summa som används för att kunna adderas på och slutligen skickas vidare med return
    let sum = 0;

    // for-loop som adderar alla tal
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }

    return sum;
}

// Anropar funktionen och skriver ut summeringen
console.log(addNumbers(number));
