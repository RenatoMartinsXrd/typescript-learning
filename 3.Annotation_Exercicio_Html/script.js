"use strict";
const inputTotal = document.querySelector('input');
const resultadoElement = document.querySelector('p');
const gerarBonus = (numero) => {
    return numero + numero * 0.2;
};
const mostrarResultado = (resultado) => {
    if (resultadoElement)
        resultadoElement.innerText = resultado.toString();
};
const handleInputTotal = () => {
    const numberInputTotal = Number(inputTotal?.value);
    const resultadoBonus = gerarBonus(numberInputTotal);
    mostrarResultado(resultadoBonus);
};
if (inputTotal)
    inputTotal.addEventListener('keyup', handleInputTotal);
