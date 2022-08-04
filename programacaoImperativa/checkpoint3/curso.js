const array = require('./listaEstudantes')


let curso = {
    nomeDoCurso: "CTD",
    notaDeAprovação: 7,
    faltasMax: 12,
    listaDeEstudantes: array
}

class Aluno {
    constructor(nome, qDeFaltas, [nota1, nota2, nota3]) {
        this.nome = nome;
        this.qDeFaltas = qDeFaltas;
        this.notas = [nota1, nota2, nota3];
        this.soma = this.notas.reduce((acumulador, nota) => {
            return acumulador + nota
        }, 0);
        this.media = this.soma/this.notas.length;
        this.faltas = this.qDeFaltas += 1
    }
}

let aluno6 = new Aluno ('Ana', 0, [10, 10, 10])
    
let addAluno = (aluno) => {
     curso.listaDeEstudantes.push(aluno)
} 


const resultado = function (array) {
        if(array.media >= curso.notaDeAprovação) {
            return true
        }else {
            return false
        }
    }


console.log(resultado(array[0]))

function resultadoTurma (){
    let resultados = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].media >= curso.notaDeAprovação) {
            resultados.push(array[i].nome, "= aprovado")
        }else {
            resultados.push(array[i].nome, "= reprovado") 
        }
    }
    return resultados
}

console.log(resultadoTurma())

