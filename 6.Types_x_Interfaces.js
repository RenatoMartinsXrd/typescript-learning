"use strict";
// As diferenças entre types e interfaces são bem sutis, e quando usar um ou outro depende da preferencia
// e se cabe nessas diferenças sutis
// let jose: Cliente = { nome: 'Jose' } -> erro, a interface mescla nome + idade no msm obj
// Temos talvez alguns outros possiveis detalhes, mas a maior parte da questão é preferencia, alguns devs mesclam
// os dois jeitos, talvez trabalhando mais voltado a POO faça muito mais sentido pela nomencluatura utilizar
// interfaces, e no paradigma funcional types se encaixa melhor, a questão é fazer o encaixe necessario na situação
// onde a possibilidade de usar um ou outro é a mais adequada alem da preferencia, por exemplo pra tipos primitivos
// a unica forma seria com types
