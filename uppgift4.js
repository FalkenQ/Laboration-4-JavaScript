/*
Detta är ett program som skriver ut alla tal mellan 1-20 och även alla jämna tal mellan 1-20.
Koden består av två for loopar. Den första skriver ut alla tal 1-20.
for loop två skriver bara ut de jämna talen i talföljden 1-20.
Författare: Linus Falk.
*/

"use strict";

// for loop för talföljden 1-20
for (let i = 1; i <= 20; i++ ) {
    console.log("Numret är " + i);
}

// for loop för talföljden 1-20 men bara jämna tal
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Det jämna talet är " + i);
    }
}