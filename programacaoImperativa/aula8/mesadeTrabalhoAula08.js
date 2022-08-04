function podeSubir(altura, acompanhante) {

if (altura > 1.40 && altura < 2.00) {

    return console.log('Acesso autorizado')
}
else if (altura < 1.40 && altura > 1.20) {

   return acompanhante ? console.log('acesso autorizado somente com acompanhante'): console.log('acesso negado')
   
}
else {

    return console.log('acesso negado')

}

}

podeSubir(1.20, true)

// Felipe silva
// Tawan souza
// João batista
// André souza