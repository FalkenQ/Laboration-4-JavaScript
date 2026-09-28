/*
Detta är ett program som tar emot ett objekt (book) och dess egenskaper.
För att ta emot dem i funktionen som tar emot book som parameter för att kunna skriva ut dess egenskaper.
Som till slut anropas funktionen bookInformation för att skriva ut all information.

Programmet består av ett objekt (book),
en funktion (bookInformation) för att ta emot objektet
och ett anrop för att skriva ut all information.

Författare: Linus Falk.
*/

"use strict";

// Book objekt och dess egenskaper
const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K Rowling",
    release: 1997
}

// Funktionen för att ta emot boken som en parameter och dess egenskaper
function bookInformation(bookObject) {
    console.log("Title: " + bookObject.title);
    console.log("Author: " + bookObject.author);
    console.log("Release year: " + bookObject.release);
}

// Anropar min funktion för att skriva ut book objektet
bookInformation(book);