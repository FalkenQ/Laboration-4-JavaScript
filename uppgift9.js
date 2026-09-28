/*
Detta är ett program för att addera ihop summan av talen i arrayen number.
Programmet består av en array av tal och en funktion som sedan blir anropad för att skriva ut summan av talen.

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
]

function personInformation(peopleObject) {
    if (peopleObject.age < 18) {
        console.log(peopleObject.name + " " + peopleObject.lastName + " är inte myndig.")
    } else {
        console.log(peopleObject.name + " " + peopleObject.lastName + " är myndig.")
    }
}

for (let i = 0; i < people.length; i++) {
    
}