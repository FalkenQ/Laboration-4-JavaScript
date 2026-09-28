/*
Detta är ett program som tar emot en array av tre personer och tre egenskaper.
Funktionen i programmet kontrollerar deras ålder och ser ifall personen är myndig eller inte.
For-loopen i programmet går därefter igenom arrayen tills den når slutet av arreyen med length och bryter loopen.

Programmet består av en array med tre objekt och 3 egenskaper för varje objekt.
En funktion som går igenom allas ålder och skriver ut en av två console.logs beroende på ålder.
En for-loop för att gå igenom array till slut för att sen brytas.

Författare: Linus Falk.
*/

"use strict";

// Array med tre objekt av personers namn och ålder
const people = [
    {
        name: "Alexander",
        lastName: "Rapp",
        age: 25
    },
    {
        name: "Alicia",
        lastName: "Falk",
        age: 15
    },
    {
        name: "Peter",
        lastName: "Falk",
        age: 67
    }
];

// Funktion som checkar om personen är myndig eller inte och skickar ut lämpligt svar utifrån ålder
function personInformation(peopleObject) {
    if (peopleObject.age < 18) {
        console.log(peopleObject.name + " " + peopleObject.lastName + " är inte myndig.");
    } else {
        console.log(peopleObject.name + " " + peopleObject.lastName + " är myndig.");
    }
}

// For-loop som går igenom arrayen tills den överskrider "length"
for (let i = 0; i < people.length; i++) {
    personInformation(people[i]);
}