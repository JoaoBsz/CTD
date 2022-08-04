const urlImagens = [];
const imagens = document.querySelectorAll("img");

imagens.forEach((_, index) => {
    const url = prompt(`Adicione o url para a imagem ${index + 1}`);
    urlImagens.push(url);
});

urlImagens.forEach((url,i) => {
    const imagem = document.querySelectorAll('img');
    const link = document.querySelectorAll('.ancora');
    imagem[i].setAttribute("src", url);
    link[i].setAttribute("href", url);
    link[i].setAttribute('target', '_blank');
});




