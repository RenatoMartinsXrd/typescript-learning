"use strict";
// Exemplo de como fica verboso sem usar um type
const createProduto = (data) => {
    return {
        ...data,
        calcularTotal: function () {
            return this.preco * this.quantidade;
        }
    };
};
const createProduct = (produto) => {
    return {
        ...produto,
        calcularTotal: function () {
            return this.preco * this.quantidade;
        }
    };
};
const produto = createProduct({
    nome: 'Teclado',
    preco: 20,
    quantidade: 2
});
console.log(produto);
const printarCategoria = (categoria) => {
    console.log(categoria);
};
// printarCategoria('lala') -> gera um erro ts pois categoria é um tipo de string com valores pré-definidos
printarCategoria('alimento');
