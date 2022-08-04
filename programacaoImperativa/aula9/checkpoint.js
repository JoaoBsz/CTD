function acesso(senha) {
    if (senha == 1234) {
        return console.log('acesso permitido')
    } else {
        return console.log('acesso negado')
    }
}

function acesso2(_senha) {
    _senha == 1234 ? console.log('acesso permitido') : console.log('acesso negado')

}



function qualMaior(x, y) {
    if (x > y){
        return console.log(x, 'é maior que', y)
    }else if (x < y) {
        return console.log(y, 'é maior que', x)
    }else if (x == y) {
        return console.log(x, 'e', y, 'são iguais')
    }
}

function mesesDoAno(numero) {
    switch(numero) {
        case 1: 
            console.log('janeiro');
        break;
        case 2:
            console.log('fevereiro');
        break;
        case 3:
            console.log('março');
        break;
        case 4:
            console.log('abril')
        break;
        case 5:
            console.log('maio')
        break;
        case 6:
            console.log('junho')
        break;
        case 7:
            console.log('julho')
        break;
        case 8:
            console.log('agosto')
        break;
        case 9:
            console.log('setembro')
        break;
        case 10:
            console.log('outubro')
        break;
        case 11:
            console.log('novembro')
        break;
        case 12:
            console.log('dezembro')
        break;
    }
}



function micro(comida, tempo) {

    if (comida == 'pipoca' && tempo >= 10 && tempo < 20) {
        return console.log('Prato pronto, bom apetite')
    }else if (comida == 'pipoca' && tempo < 10) {
        return console.log('tempo insuficiente')
    }else if (comida == 'pipoca' && tempo >= 20 && tempo < 30) {
        return console.log('a pipoca queimou')
    }else if(comida == 'pipoca' && tempo >= 30) {
        return console.log('kabumm!')
    }
    
    else if (comida == 'macarrao' && tempo >= 8 && tempo < 16) {
        return console.log('Prato pronto, bom apetite')
    }else if (comida == 'macarrao' && tempo < 8) {
        return console.log('tempo insuficiente')
    }else if (comida == 'macarrao' && tempo >= 16 && tempo < 24) {
        return console.log('a comida queimou')
    }else if (comida == 'macarrao' && tempo >= 24) {
        return console.log('kabumm!') 
    }

    else if (comida == 'carne' && tempo >= 15 && tempo < 30) {
        return console.log('Prato pronto, bom apetite')
    }else if (comida == 'carne' && tempo < 15) {
        return console.log('tempo insuficiente')
    }else if (comida == 'carne' && tempo >= 15 && tempo < 45) {
        return console.log('a comida queimou')
    }else if (comida == 'carne' && tempo >= 45) {
        return console.log('kabumm!') 
    }

    else if (comida == 'feijao' && tempo >= 12 && tempo < 24) {
        return console.log('Prato pronto, bom apetite')
    }else if (comida == 'feijao' && tempo < 12) {
        return console.log('tempo insuficiente')
    }else if (comida == 'feijao' && tempo >= 24 && tempo < 36) {
        return console.log('a comida queimou')
    }else if (comida == 'feijao' && tempo >= 36) {
        return console.log('kabumm!') 
    }

    else if (comida == 'brigadeiro' && tempo >= 8 && tempo < 16) {
        return console.log('Prato pronto, bom apetite')
    }else if (comida == 'brigadeiro' && tempo < 8) {
        return console.log('tempo insuficiente')
    }else if (comida == 'brigadeiro' && tempo >= 16 && tempo < 24) {
        return console.log('a comida queimou')
    }else if (comida == 'brigadeiro' && tempo >= 24) {
        return console.log('kabumm!') 
    }

    else{
        return console.log('Prato inexistente')
    }
}

micro('frango', 10)
