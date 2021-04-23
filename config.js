// faz o menu lateral aparecer, em telas menores
function menuMobile(){
    var menu = document.getElementById("menu");
    var posicao = menu.style.marginRight;
    if(posicao == "0rem"){
        menu.style.marginRight = "-14rem";
    } else{
        menu.style.marginRight = "0rem";
    }
}
// faz o botão do menu rotacionar ao click
    const barras = document.getElementById('barras');
    barras.addEventListener('click', rodaBarras);
    function rodaBarras(){
        if (barras.style.transform == 'rotate(0deg)'){
            barras.style.transform = "rotate(90deg)";
        } else {
        barras.style.transform = "rotate(0deg)";
        }
    }
// faz um menu dinâmico aparacer
function submenuMembro(){
    var submenu = document.getElementById("submenu-membro");
    function showSubMenuMembro(){
    if (submenu.style.display == "none"){
        submenu.style.display = "flex";
    }
    }
    showSubMenuMembro();
    submenu.addEventListener("mouseover",showSubMenuMembro);
    
    var botao_membros = document.getElementById("botao-membros");
    botao_membros.addEventListener("mouseleave",hideSubMenuMembro);
    submenu.addEventListener("mouseleave",hideSubMenuMembro);
    function hideSubMenuMembro(){
        submenu.style.display = "none";
    }
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