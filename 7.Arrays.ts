const numeros: Array<number> = [10, 20, 30, 40]

type ArrayNumber = (number | string)[]

const maiorQue = (array: ArrayNumber, n: number) => {
  return array.filter((item) => typeof item === 'number' && item > n)
}

console.log(maiorQue([21, 2, 44, 5, 6, 8, 9, 90, 'sdkdsk'], 10))
