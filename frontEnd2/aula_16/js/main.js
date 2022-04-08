// Construir um formulário e alterar suas propriedades com JavaScript.
// Crie uma nova página HTML e adicione via JavaScript os seguintes elementos:

// Variavel do Contador
var count = 0;

// Criação do Formulário
var formulario = document.createElement("form");
formulario.setAttribute("method", "post");
formulario.setAttribute("action", "submit");

// Definindo quem é o Elemento PAI
document.body.appendChild(formulario);

// Input E-mail
var email = document.createElement("input");
email.setAttribute("type", "email");
email.setAttribute("name", "email")
email.setAttribute("placeholder", "Digite seu e-mail");
email.setAttribute("required", "required");
email.classList.add('email');
formulario.appendChild(email);

// Input Senha
var senha = document.createElement("input");
senha.setAttribute("type", "password");
senha.setAttribute("placeholder", "Digite sua senha");
senha.setAttribute("required", "required");
senha.setAttribute("minlength", "2");
senha.setAttribute("maxlength", "8");
senha.classList.add('senha');
formulario.appendChild(senha);

// Botão Enviar
var btnEnviar = document.createElement("input");
btnEnviar.setAttribute("type", "submit");
btnEnviar.classList.add('btnEnviar');
formulario.appendChild(btnEnviar);

// Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo
btnEnviar.onmouseover = function () {
  btnEnviar.style.color = "white";
  btnEnviar.style.background = "black";
};

btnEnviar.onmouseout = function () {
  btnEnviar.style.color = "black";
  btnEnviar.style.background = "white";
};

// Botão Reset
var btnReset = document.createElement("input");
btnReset.setAttribute("type", "reset");
btnReset.classList.add('btnReset');
formulario.appendChild(btnReset);

// Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo
btnReset.onmouseover = function () {
  btnReset.style.color = "white";
  btnReset.style.background = "black";
};

btnReset.onmouseout = function () {
  btnReset.style.color = "black";
  btnReset.style.background = "white";
};

// Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
formulario.addEventListener('submit', function (event) {
  console.log("Seu formulário foi encaminhado.");
  event.preventDefault();
});

// Mostre um alerta na página quando a tela terminar de ser carregada.
window.onload = function () {
  alert("O Formulário está pronto.")
}

//Faça um trecho de código que utilize algum evento de teclado.
// Esse evento irá escrever o conteúdo do input em uma tag <p>.
// Logo abaixo o número de vezes que esse evento foi chamado.
// Exemplo: <p>futebol</p> <p>7</p> .

// Criando a tag "p"
var paragrafo = document.createElement("p");
// Adicionando uma classe "texto_paragrafo"
paragrafo.classList.add('conteudoInputEmail');
// Linkando o nó paragrafo (tag p), para o form (elemento pai)
formulario.appendChild(paragrafo);

// Count (contador)
var qtdVezesEventoFoiChamado = document.createElement("p");
qtdVezesEventoFoiChamado.classList.add('qtdVezesEventoFoiChamado')
formulario.appendChild(qtdVezesEventoFoiChamado);


email.addEventListener('keydown', function (event) {
  paragrafo.innerHTML += event.key;
  count++;
  qtdVezesEventoFoiChamado.innerHTML = count;
})



