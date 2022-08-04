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
var aluno = new Aluno ('joão', 3, [8, 10, 10]);
var aluno2 = new Aluno ('lucas', 5, [9, 6, 9]);
var aluno3 = new Aluno ('caio', 4, [6, 6, 10]);
var aluno4 = new Aluno ('matheus', 2, [9, 10, 10]);
var aluno5 = new Aluno ('Thais', 1, [10, 10, 9]);

const array = [aluno, aluno2, aluno3, aluno4, aluno5]


module.exports = array






