// As diferenças entre types e interfaces são bem sutis, e quando usar um ou outro depende da preferencia
// e se cabe nessas diferenças sutis

interface Client {
  name: string
  address: string
}

type ClientType = {
  name: string
  address: string
}

// Interfaces não podem ser usadas para tipo primitivo, apenas objetos
type ErrorCode = string | number
// interface ErrorCode { string | number } - erro

// Em funções, podemos definir em ambos, com a diferença na sintaxe, com type fica mais "legivel"

type SomarFunction = (num1: number, num2: number) => number

interface SubtrairFunction {
  (num1: number, num2: number): number
}

// Mesclagem de declaraçções -> com interfaces podemos definir varias vezes a mesma interface, porque ela é aberta
// então o TS mesclara essas definições em uma "unica" interface, PS: não é como se fosse sobrecarga e sim merge

interface Cliente {
  nome: string
}

interface Cliente {
  idade: string
}

// let jose: Cliente = { nome: 'Jose' } -> erro, a interface mescla nome + idade no msm obj

// Temos talvez alguns outros possiveis detalhes, mas a maior parte da questão é preferencia, alguns devs mesclam
// os dois jeitos, talvez trabalhando mais voltado a POO faça muito mais sentido pela nomencluatura utilizar
// interfaces, e no paradigma funcional types se encaixa melhor, a questão é fazer o encaixe necessario na situação
// onde a possibilidade de usar um ou outro é a mais adequada alem da preferencia, por exemplo pra tipos primitivos
// a unica forma seria com types
