// O exercício a seguir é proposto:
// Usando apenas .pop() e .push()
// crie uma função que receba uma matriz de 4 elementos por parâmetro
// retorne uma matriz com os elementos invertidos em sua ordem:
// Então [1,2,3,4]
// retorna [4,3,2,1]

// let array = [1,2,3,4]
// let arrayInvertido = []

//  function inverteArray(){
//     arrayInvertido.push(array.pop())
//     arrayInvertido.push(array.pop())
//     arrayInvertido.push(array.pop())
//     arrayInvertido.push(array.pop())
//      return arrayInvertido
//  }

//  console.log(inverteArray(1, 2, 3, 4))

// function matrizInvertido(array) {
//     saida1 = array.pop()
//     saida2 = array.pop()
//     saida3 = array.pop()
//     saida4 = array.pop()
    
//     array.push(saida1)
//     array.push(saida2)
//     array.push(saida3)
//     array.push(saida4)

//     console.log(array)
// }

// matrizInvertido([1, 2, 3, 4])

// let array = [1, 2, 3, 4]

// function somarArray(array) {

//     let soma = array[0] + array[1] + array[2] + array[3] + array[4] + array[5]
//     return console.log (soma)
// }

// somarArray()

function somarArray(){
    let soma = [1,2,3,4]
    soma = soma[0] + soma[1] + soma[2]
    return soma
}
console.log(somarArray())


