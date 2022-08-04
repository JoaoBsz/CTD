const urlImagens = [];
const conteudo = document.querySelector(".conteudo")

for (let index = 0; index < 3; index++) {
    const url = prompt(`Adicione o url para a imagem ${index + 1}`);
    urlImagens.push(url);
};

urlImagens.forEach((url) => {
    const template = `
    <div class="cartao">
        <a class="ancora" href= "${url}" target="_blank">
            <img src="${url}">
        </a>
     </div>`;

     conteudo.innerHTML += template;
});

/* 
Etapa 3:

1- O elemento pai é a div com a classe "Conteudo";

2- O elemento filho é  a div com a classe "cartao"

3- Primeiro declaramos um array vazio, para capturar a resposta do prompt. Depois selecionamos
o elemento pai dos elementos filhos que irão ser criados. No for fazemos o prompt aparecer 3 vezes
para o usuario e passamos um push para levar a informação do prompt para a variavel "urlImagens". Por fim
criamos um forEach que irá percorrer a variável "urlImagens" e adicionar, através de um template string, essas url
no template string

*/ 

