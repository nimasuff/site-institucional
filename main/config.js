<<<<<<< Updated upstream
=======
// faz a página de precarregamento aparecer e desaparacer
const preloader = document.querySelector('.loader');
window.addEventListener('load',function(){
    preloader.classList.add('esconde-tela-loader');
});

>>>>>>> Stashed changes
// faz o menu lateral aparecer e desaparacer, em telas menores
// selecionando o menu
const barraMenu = document.getElementById('barra-menu');
// abre o menu ao click no icone
barraMenu.addEventListener('change',showHideMenu);
//esconde o menu ao click em qualquer lugar da página
 window.addEventListener('mouseout',hideMenu);
 function hideMenu(){
     const divMenuMobile = document.getElementById('menu-barras-mobile');
     const divLinks = document.getElementById('menu-links');
     const barras = document.getElementById('barras');
         divMenuMobile.style.right = '3%';
         divLinks.style.right = '-100%';
         barras.style.transform = "rotate(0deg)";
         barras.style.color = '#000';
 }
// faz o menu aparecer e desaparecer pelo click nas barras
function showHideMenu(){
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
}
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
