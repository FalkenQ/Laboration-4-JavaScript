/*
Detta är ett program för att beräkna arean av en rektangel med olika värden.

Programmet innehåller en funktion som blir tillkallad vid 3 olika tillfällen med olika värden.

Författare: Linus Falk.
*/

"use strict";

const number = [13, 37, 27, 23, 15, 22];

function addNumbers(number) {
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    
    return sum;
}
