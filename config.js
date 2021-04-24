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
function slideProjeto1(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri1");
    var desc = document.getElementById("especifica1");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}

function slideProjeto2(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri2");
    var desc = document.getElementById("especifica2");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}

function slideProjeto3(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri3");
    var desc = document.getElementById("especifica3");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}

function slideProjeto4(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri4");
    var desc = document.getElementById("especifica4");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}

function slideProjeto5(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri5");
    var desc = document.getElementById("especifica5");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}

function slideProjeto6(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri6");
    var desc = document.getElementById("especifica6");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}

function slideProjeto7(){
    var titulo = document.getElementById("titulo-projetos");
    var p = document.getElementById("descri7");
    var desc = document.getElementById("especifica7");
    if(p.style.display === "none"){
        p.style.display = "flex";
        desc.style.display = "flex";
        titulo.style.height = "20vh";
    }
    addEventListener("mouseout",fechaSlide);
    function fechaSlide(){
        p.style.display = "none";
        desc.style.display = "none";
        titulo.style.height = "40vh";
    }
}