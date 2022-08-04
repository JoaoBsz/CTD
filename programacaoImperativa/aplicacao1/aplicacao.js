// let dados = {
//     nome: 'joão',
//     altura: 1.75,
//     genero: 'masculino'
// }

class Dados {
    constructor(nome, altura, genero) {
        this.nome = nome;
        this.altura = altura;
        this.genero = genero;

    }

}


let dados1 = new Dados ('gustavo', 1.70, 'masculino');
let dados2 = new Dados ('Gabriela', 1.60, 'feminino');
let dados3 = new Dados ('Gabriel', 1.65, 'masculino');
let dados4 = new Dados ('Joana', 1.75, 'feminino');
let dados5 = new Dados ('Diego', 1.85, 'masculino');
let dados6 = new Dados ('Thiago', 1.65, 'masculino');
let dados7 = new Dados ('Ana', 1.55, 'feminino');
let dados8 = new Dados ('leticia', 1.70, 'feminino');
let dados9 = new Dados ('lorena', 1.45, 'feminino');
let dados10 = new Dados ('Rhuam', 1.90, 'masculino');
let dados11 = new Dados ('alessandra', 1.60, 'feminino');
let dados12 = new Dados ('alex', 1.75, 'masculino');
let dados13 = new Dados ('bruna', 1.55, 'feminino');
let dados14 = new Dados ('Bruno', 1.65, 'masculino');

let array = [dados1, dados2, dados3, dados4, dados5, dados6, dados7, dados8, dados9, dados10, dados11, dados12, dados13, dados14];


function maiorAltura(valor) {
    var maior = array[0].altura; // inicializar o valor com a primeira posicao
    for (let i = 0; i < array.length; i++) { // percorrer o array de altura
        if (array[i].altura > maior) { // comparar
            maior = array[i].altura;
        }
    }
    return maior;
}



function menorAltura(valor) {
    var menor = array[0].altura;
    for (let i = 0; i < array.length; i++) {
        if (array[i].altura < menor) {
            menor = array[i].altura;
        }
    }
    return menor;
}



function mediaMulheres(valor) {
    var soma = 0;
    var media = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].genero === "feminino") {
            soma += array[i].altura;
            media++;
        }
    }
    return (soma / media);
}



function qtdeHomens(valor) {
    var homens = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].genero === "masculino") {
            homens++;
        }
    }
    return homens;
}

console.log("A Maior Altura é " + maiorAltura(array).toFixed(2) + " Metros.");
console.log("A Menor Altura é " + menorAltura(array) + " Metros.");
console.log("A Média de Altura das Mulheres é de " + mediaMulheres(array).toFixed(2) + " Metros.");
console.log("A Quantidade é de " + qtdeHomens(array) + " Homens.");






