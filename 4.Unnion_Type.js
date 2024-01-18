"use strict";
// Podemos dizer em typescript que uma variavel pode ser de um tipo ou outros
let total = 200;
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    return false;
}
console.log(isNumber(2));
