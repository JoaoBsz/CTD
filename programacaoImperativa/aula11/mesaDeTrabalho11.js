// Repetir como um papagaio

// estrutura básica for (inicio, condicao, incremento ou decremento)

for (let index = 1; index <= 100; index++) {
    index % 2 == 0 ? 0: console.log(index)
}
 


// Criando a tabuada

// numeros impares 1 a 100
// var contador = 1;

// estrutura básica do WHILE
// while (condicaoDeParada) {
//     ação
//     incremento/decremento no contador
// }

/*
do primeiro executar
while (condição)
*/

// media da turma

// dados da turma - alunos e notas
// RESULTADO é minha média
// média GERAL que é a turma
// média do ALUNO

// var dados = [];
// var media = 0;
// var mediaGeralResultado = 0;

// // cria o nosso array de dados de alunos
// dados[0] = [ "aluno 1", 7, 8, 7, 8 ]; // 0 nome do aluno
// dados[1] = [ "aluno 2", 9, 9, 7, 7 ];
// dados[2] = [ "aluno 3", 8, 8, 9, 10 ];
// dados[3] = [ "aluno 4", 9, 9, 10, 6 ];

// for (let inicio = 0; inicio < dados.length; inicio++) {
//     // media Aluno
//     var mediaAluno = ( dados[inicio][1] + dados[inicio][2] + dados[inicio][3] ) / (dados[inicio].length -1);

//     media += mediaAluno; // acumula

//     console.log(dados[inicio][0] + " - " + mediaAluno);
// }

// mediaGeralResultado = media / dados.length;

// console.log(mediaGeralResultado)




// CORRIGIR A FUNÇÃO adicionarElementosDoArray2NoArray1
// de forma que o resultado seja o ARRAY 1 + ARRAY 2

// UTILIZE QUALQUER ESTRUTURA VISTA ATÉ A AULA DE HOJE !!!!!!!

// let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela']
// let designInterface = ['Figma', 'Adobe XD', 'Sketch', 'Marvel APP']

// function converterMaisculas(array){
    // array[0] = array[0].toUpperCase();
    // array[1] = array[1].toUpperCase();
    // array[2] = array[2].toUpperCase();
    // array[3] = array[3].toUpperCase();
    // array[4] = array[4].toUpperCase();

//     for (let index = 0; index < array.length; index++) {
//         array[index] = array[index].toUpperCase();
//     }

//     return array;
// }

// console.log(filmes);
// console.log(converterMaisculas(filmes));

// let filmes = ['star wars', 'matrix', 'robot', 'o Preço do Amanhã', 'a Vida é Bela']
// let designInterface = ['Figma', 'Adobe XD', 'Sketch', 'Marvel APP']



// function adicionarElementosDoArray2NoArray1(array1, array2) {

//     console.log('entrada - ', array2);
    // converterMaisculas(array1); * chama a função de fora
    // converterMaisculas(array2); 
    // console.log('maiusculas - ', array2);
    
    // array2.pop().toUpperCase();  *Tira o ultimo
    
    // array1.push(array2.pop().toUpperCase()); *Tira o ultimo deixa ele maiusculo e joga para o array 1
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());
    // array1.push(array2.pop().toUpperCase());

//     array1.push(array2.pop());
//     array1.push(array2.pop());
//     array1.push(array2.pop());
//     array1.push(array2.pop());

//     console.log('saida - ', array2);
    
//     return array1;
// } 

// console.log("Array1 com a Array2 - ", adicionarElementosDoArray2NoArray1(filmes, designInterface))