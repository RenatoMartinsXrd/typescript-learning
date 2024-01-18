// Exemplo de como fica verboso sem usar um type
const createProduto = (data: {
  nome: string
  preco: number
  quantidade: number
}) => {
  return {
    ...data,
    calcularTotal: function () {
      return this.preco * this.quantidade
    }
  }
}

type Produto = {
  nome: string
  preco: number
  quantidade: number
}

const createProduct = (produto: Produto) => {
  return {
    ...produto,
    calcularTotal: function () {
      return this.preco * this.quantidade
    }
  }
}

const produto: Produto = createProduct({
  nome: 'Teclado',
  preco: 20,
  quantidade: 2
})

console.log(produto)

type Categorias = 'eletronico' | 'alimento' | 'moda'

const printarCategoria = (categoria: Categorias) => {
  console.log(categoria)
}

// printarCategoria('lala') -> gera um erro ts pois categoria é um tipo de string com valores pré-definidos
printarCategoria('alimento')
