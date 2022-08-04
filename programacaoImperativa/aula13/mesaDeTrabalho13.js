let cliente = {
    numero: "5486273622",
    tipo: "conta Corrente",
    saldo: 27771,
    titular: "Abigael Natte"
}

class Cliente {
    constructor(valorNumero, valorTipo, valorSaldo, valorTitular) {
        this.numero = valorNumero;
        this.tipo = valorTipo;
        this.saldo = valorSaldo;
        this.titular = valorTitular;
    }
}

let cliente1 = new Cliente ("1183971869", "Conta Poupança", 8675, "Ramon Connell");
let cliente2 = new Cliente ("9582019689", "Conta Poupança", 27363, "Jarret Lafuente");
let cliente3 = new Cliente ("1761924656", "Conta Poupança", 32415, "Ansel Ardley");
let cliente4 = new Cliente ("7401971607", "Conta Poupança", 18789, "Jacki Shurmer");
let cliente5 = new Cliente ("630841470", "Conta Corrente", 28776, "Jobi Mawtus");
let cliente6 = new Cliente ("4223508636", "Conta Corrente", 2177, "Thomasin Latour");
let cliente7 = new Cliente ("185979521", "Conta Poupança", 25994, "Lonnie Verheijden");
let cliente8 = new Cliente ("3151956165", "3151956165", 7601, "Alonso Wannan");
let cliente9 = new Cliente ("2138105881", "Conta Poupança", 33196, "Bendite Huggett");

let banco = {
    clientes: {
        dados: cliente,
        dados1: cliente2,
        dados2: cliente2,
        dados3: cliente3,
        dados4: cliente4,
        dados5: cliente5,
        dados6: cliente6,
        dados8: cliente8,
        dados9: cliente9
    },
    // consultarCliente: function (titular){
    //     for (let i = 0; i =< this.clientes.length)
    // }
}
