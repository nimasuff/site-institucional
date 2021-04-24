// faz o menu lateral aparecer, em telas menores
const barraMenu = document.getElementById('barra-menu')
barraMenu.addEventListener('change',function(){
    const divMenuMobile = document.getElementById('menu-barras-mobile');
    const divLinks = document.getElementById('menu-links');
    const barras = document.getElementById('barras');
    if (divMenuMobile.style.right == "3%"){
        divMenuMobile.style.right = '14%';
        divLinks.style.right = '0%';
        barras.style.transform = "rotate(90deg)";
        barras.style.color = '#fff';
    } else {
        divMenuMobile.style.right = '3%';
        divLinks.style.right = '-100%';
        barras.style.transform = "rotate(0deg)";
        barras.style.color = '#000';
    }
})
// faz o menu do top sumir ao rolar a página nas telas grandes
let posicaoPaginaInicial = window.pageYOffset;
document.getElementById('menu').style.top = '0';
window.onscroll = function(){
    let posicaoPaginaAtual = window.pageYOffset;
    if (posicaoPaginaInicial > posicaoPaginaAtual){
        document.getElementById('menu').style.top = '0';
    } else{
        document.getElementById('menu').style.top = '-70px';
    }
    posicaoPaginaInicial = posicaoPaginaAtual;
}


// faz o slide do projeto ficar maior e menor conforme o movimento do mouse, e faz aparecer o restante do conteudo
