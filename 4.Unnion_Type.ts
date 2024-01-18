// Podemos dizer em typescript que uma variavel pode ser de um tipo ou outros
let total: string | number = 200

function isNumber(value: string | number) {
  if (typeof value === 'number') {
    return true
  }
  return false
}

console.log(isNumber(2))
