/*
Detta är ett program som kollar personens ålder och ser ifall personen antigen räknas som ett barn,
vuxen/myndig eller en pensionär och även ifall personen har gjort en korrekt inmatning med sin ålder.
koden innehåller if, else if, och else satser.
Författare: Linus Falk.
*/

"use strict";

// Konstant för ålder
const age = -7;

// if satser för att checka om man är under 18, mellan 18-65, 65 eller över samt om personen har gjort en korrekt inmatning av ålder
if (age > 17 && age < 65 && age >= 0) {
    console.log("Du är " + age + " år. Så du är myndig.");
} else if (age < 0) {
    console.log("Felaktig inmatning.");
} else if (age < 18) {
    console.log("Du är fortfarande inte myndig. Du är " + age + " år");
} else {
    console.log("Grattis, du får pensionär rabatt. Du har snurrat runt jorden " + age + " gånger.");
}