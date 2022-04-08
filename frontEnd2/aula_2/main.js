/* let maoUsuario = parseInt(prompt("Pedra(1), papel(2) e tesoura(3)"));
let random = parseInt(Math.random() * 3 +1);

let maoMaquina = random;

let resultado = "sem calculo"

console.log(maoUsuario)
console.log(maoMaquina)

if (maoUsuario == 1){
    if (maoMaquina == 1){
        resultado = 'empate';
    }

    if (maoMaquina == 2){
        resultado = 'vitoria';
    }

    if (maoMaquina == 3){
        resultado = 'derrota';
    }
}

if (maoUsuario == 2){
    if (maoMaquina == 1){
        resultado = 'vitoria';
    }

    if (maoMaquina == 2){
        resultado = 'empate';
    }

    if (maoMaquina == 3){
        resultado = 'derrota';
    }
}

if (maoUsuario == 3){
    if (maoMaquina == 1){
        resultado = 'derrota';
    }

    if (maoMaquina == 2){
        resultado = 'vitoria';
    }

    if (maoMaquina == 3){
        resultado = 'empate';
    }
}

alert(resultado) */


/* function escolhaDoUsuario(){
    maoUsuario = parseInt(prompt("Pedra(1), papel(2) e tesoura(3)"));
    console.log(maoUsuario)
}

function escolhaDaMaquina(){
    let random = parseInt(Math.random() * 3 +1);
    let maoMaquina = random
    console.log(maoMaquina)
} */



let vitoria1 = 0; /* registra as vitorias do usuario */
let vitoria2 = 0; /* registra as vitórias da maquina */
let resultado = "sem resultado" /* registra o status de cada partida (empate, derrota, vitória)*/


    for (var index = 0; index < 3; index ++) {

        let escolhaDoUsuario = parseInt(prompt("Pedra(1), papel(2) e tesoura(3)"));

        let random = parseInt(Math.random() * 3 +1);
        let escolhaDaMaquina = random 


        if (escolhaDoUsuario == escolhaDaMaquina) {
            resultado = "empate"
        }

        if (escolhaDoUsuario == 1){
            switch (escolhaDaMaquina){
                case 2:
                    resultado = "derrota"
                    vitoria2++
                break;

                case 3:
                    resultado = "vitoria"
                    vitoria1++
                break;
            }
        }

        if (escolhaDoUsuario == 2){
            switch (escolhaDaMaquina){
                case 1:
                    resultado = "vitoria"
                    vitoria1++
                break;

                case 3:
                    resultado = "derrota"
                    vitoria2++
                break;
            }
        }
        if (escolhaDoUsuario == 3){
            switch(escolhaDaMaquina){
                case 1:
                    resultado = "derrota"
                    vitoria2++
                break;

                case 2:
                    resultado = "vitoria"
                    vitoria1++
                break;
            }
        }

        alert("Sua escolha: " + escolhaDoUsuario + "| Maquina: " + escolhaDaMaquina) 
        /* Exibe na tela o que o usuario e a maquina escolheram*/

        alert(resultado)
        /* Exibe na tela o status da partida (vitória, empate e derrota)*/
    }

let resultadoFinal = "sem resultado"

if (vitoria1 > vitoria2){

    resultadoFinal = "Você ganhou" 

 } if (vitoria1 == vitoria2) {

     resultadoFinal = "empatou"

 } if (vitoria1 < vitoria2) {

    resultadoFinal = "você perdeu"
    
}

alert("Pontuação final: " + vitoria1 + "x" + vitoria2) /* exibe a pontuação final na tela*/
alert(resultadoFinal) /* exibe se você ganhou ou perdeu*/ 

