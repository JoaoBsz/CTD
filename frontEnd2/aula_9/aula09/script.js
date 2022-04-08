
const form = document.querySelector('#form');
const containerCards = document.querySelector('#container-cards');
var cards = [];

const addCard = function (titulo, descricao, url) {
    const template = `
    <div class="card">
       <img src="${url}" alt="${titulo}" >
       <p>${titulo}</p>
       <p>${descricao}</p>
     </div>
    `;

    containerCards.innerHTML += template;

}

form.onsubmit = function (event) {
    var titulo = document.querySelector('#titulo').value;
    var descricao = document.querySelector('#descricao').value;
    var url = document.querySelector('#url').value;

    // criar o card ao clicar em submit
    var card = {
        titulo: titulo,
        descricao: descricao,
        url: url
    };

    // adicionar o card à lista cards
    cards.push(card);

    addCard(titulo, descricao, url);


    event.preventDefault();

}

