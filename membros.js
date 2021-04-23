// definindo as variaveis para coordenadores
const membros_coordenador = [
    {
        id: 1,
        nome: 'Claude Cohen',
        img_perfil: 'img/membros/claude-cohen.jpg',
        linkedin: 'https://www.linkedin.com/in/claude-cohen-427b97146/',
        lattes: ''
    },
    {
        id: 2,
        nome: 'João Gabriel',
        img_perfil: 'img/membros/jg.jpg',
        linkedin: 'https://www.linkedin.com/in/joao-gabriel-martins/',
        lattes: 'http://lattes.cnpq.br/8542656790521330',
    }
]
// definindo as variaveis para pesquisadores internos
const membros_pesq_int = [
    {
        id: 1,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 2,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 3,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 4,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 5,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 6,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
]
// definindo as variaveis para pesquisadores externos
const membros_pesq_ext = [
    {
        id: 1,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 2,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 3,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 4,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 5,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 6,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
]
// definindo as variaveis para estudantes de economia
const bach_economia = [
    {
        id: 1,
        nome: 'João Gabriel Martins',
        img_perfil: '\img\membros\jg.jpg',
        linkedin: 'https://www.linkedin.com/in/joao-gabriel-martins/',
        lattes: 'http://lattes.cnpq.br/8542656790521330',
    },
    {
        id: 2,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 3,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 4,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 5,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 6,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 7,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 6,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
]
// definindo as variaveis para estudantes de ciências ambietais
const bach_ambientais = [
    {
        id: 1,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 2,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 3,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 4,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 5,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 6,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 7,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
    {
        id: 8,
        nome: '',
        img_perfil: '',
        linkedin: '',
        lattes: '',
    },
]
// criando as variaveis de seleção - coordenadores
var fotoCor = document.getElementById('foto-perfil-coordenadora');
var nomeCor = document.getElementById('nome-coordenadora');
var linkCor = document.getElementById('linkedin-coordenadora');
var lattCor = document.getElementById('lattes-coordenadora');
// criando as variaveis de seleção - pesquisadores internos
var fotoPesqInt = document.getElementById('foto-perfil-pesq-int');
var nomePesqInt = document.getElementById('nome-pesq-int');
var linkPesqInt = document.getElementById('linkedin-pesq-int');
var lattPesqInt = document.getElementById('lattes-pesq-int');
// criando as variaveis de seleção - pesquisadores externos
var fotoPesqExt = document.getElementById('foto-perfil-pesq-ext');
var nomePesqExt = document.getElementById('nome-pesq-ext');
var linkPesqExt = document.getElementById('linkedin-pesq-ext');
var lattPesqExt = document.getElementById('lattes-pesq-ext');
// criando as variaveis de seleção - ciências econômicas
var fotoBachEco = document.getElementById('foto-perfil-bach-econ');
var nomeBachEco = document.getElementById('nome-bach-econ');
var linkBachEco = document.getElementById('linkedin-bach-econ');
var lattBachEco = document.getElementById('lattes-bach-econ');
// criando as variaveis de seleção - ciências ambientais
var fotoBachAmb = document.getElementById('foto-perfil-bach-ambet');
var nomeBachAmb = document.getElementById('nome-bach-amb');
var linkBachAmb = document.getElementById('linkedin-bach-amb');
var lattBachAmb = document.getElementById('lattes-bach-amb');

// criando as variaveis para os botões: 'próximo' e 'anterior' - coordenadora
const btn_ant_coor = document.getElementById('btn-ant-coor');
const btn_prox_coor = document.getElementById('btn-prox-coor');
// criando as variaveis para os botões: 'próximo' e 'anterior' - pesquisadores internos
const btn_ant_pesq_int = document.getElementById('btn-ant-pesq-int');
const btn_prox_pesq_int = document.getElementById('btn-prox-pesq-int');
// criando as variaveis para os botões: 'próximo' e 'anterior' - pesquisadores externos
const btn_ant_pesq_ext = document.getElementById('btn-ant-pesq-ext');
const btn_prox_pesq_ext = document.getElementById('btn-prox-pesq-ext');
// criando as variaveis para os botões: 'próximo' e 'anterior' - bacharelado economia
const btn_ant_bach_eco = document.getElementById('btn-ant-bach-eco');
const btn_prox_bach_eco = document.getElementById('btn-prox-bach-eco');
// criando as variaveis para os botões: 'próximo' e 'anterior' - bacharelado ciências ambientais
const btn_ant_bach_amb = document.getElementById('btn-ant-bach-amb');
const btn_prox_bach_amb = document.getElementById('btn-prox-bach-amb');


//****************** Ok, criamos as variaveis **************************

// ************* codando formação --> coordenador

// declarando o valor inicial do item na array coordenador membro
let itemAtualCor = 0;
// declarando um ouvinte para quando a página carregar
window.addEventListener('DOMContentLoaded',function(){
    mostraCoordenador(itemAtualCor);
});
// função para mostrar a pessoa baseada no item atual
function mostraCoordenador(coordenador){
    const item = membros_coordenador[coordenador];
    fotoCor.src = item.img_perfil;
    nomeCor.textContent = item.nome;
    linkCor.href = item.linkedin;
    lattCor.href = item.lattes;
}
// mostra o próximo coordenador
btn_prox_coor.addEventListener('click',function(){
    itemAtualCor++;
    if(itemAtualCor > membros_coordenador.length - 1){
        itemAtualCor = 0;
    }
    mostraCoordenador(itemAtualCor);
})
// mostra o coordenador anterior
btn_ant_coor.addEventListener('click',function(){
    itemAtualCor--;
    if(itemAtualCor < 0){
        itemAtualCor = membros_coordenador.length - 1;
    }
    mostraCoordenador(itemAtualCor);
})
//____________________________________________
//************* codando formação --> pesquisador interno

// declarando o valor inicial do item na array membro pesquisador interno
let itemAtualPesqInt = 0;

// declarando um ouvinte para o carregamento da página setar o pesquisador interno inicial
window.addEventListener('DOMContentLoaded',function(){
    mostraPesqInt(itemAtualPesqInt);
})

// mostra os dados do pesquisador interno selecionado
function mostraPesqInt(pesquisador_interno){
    const item = membros_pesq_int[pesquisador_interno];
    fotoPesqInt.src = item.img_perfil;
    nomePesqInt.textContent = item.nome;
    linkPesqInt.href = item.linkedin;
    lattPesqInt.href = item.lattes;
}

// mostra o próximo pesquisador interno
btn_prox_pesq_int.addEventListener('DOMContentLoaded', function(){
    itemAtualPesqInt++;
    if(itemAtualPesqInt > membros_pesq_int.length - 1){
        itemAtualPesqInt = 0;
    }
    mostraPesqInt(itemAtualPesqInt);
})
// mostra o pesquisador anterior
btn_ant_pesq_int.addEventListener('DOMContentLoaded',function(){
    itemAtualPesqInt--;
    if(itemAtualPesqInt < 0){
        membros_pesq_int.length - 1;
    }
    mostraPesqInt(itemAtualPesqInt);
})
//___________________________________________
// *************************** codando formação --> pesquisadores externos
// declarando o valor inicial do item dentro da array membros_pesq_ext
let itemAtualPesqExt = 0;

// declarando uma função para chamar a função que expoe o pesquisador externo, ao carregar a página
window.addEventListener('DOMContentLoaded', function(){
    mostraPesqExt(itemAtualPesqExt);
})

// declarando função para expor o pesquisador externo
function mostraPesqExt(pesquisador_externo){
    const item = membros_pesq_ext[pesquisador_externo];
    fotoPesqExt.src = item.img_perfil;
    nomePesqExt.textContent = item.nome;
    linkPesqExt.href = item.linkedin;
    lattPesqExt.href = item.lattes;
}
// mostra o próximo pesquisador externo
btn_prox_pesq_ext.addEventListener('click',function(){
    itemAtualPesqExt++;
    if(itemAtualPesqExt > pesquisador_externo.length - 1){
        itemAtualPesqExt = 0;
    }
    mostraPesqExt(itemAtualPesqExt);
})
// mostra o pesquisador externo anterior
btn_ant_pesq_ext.addEventListener('click',function(){
    itemAtualPesqExt--;
    if(itemAtualPesqExt < 0){
        itemAtualPesqExt = pesquisador_externo.length - 1;
    }
    mostraPesqExt(itemAtualPesqExt);
})
//___________________________________
// *********************************** codando formação --> bacharel economia
// declarando valor inicial da array bach_economia
let itemBachEco = 0;

// declarando uma função para chamar a função que expoe o bacharel em economia, ao carregar a página

window.addEventListener('DOMContentLoaded', function(){
    mostraBachEco(itemBachEco);
})

// declarando função que expoe os dados de cada bacharel em economia
function mostraBachEco(membro_economista){
    const item = bach_economia[membro_economista];
    fotoBachEco.src = item.img_perfil;
    nomeBachEco.textContent = item.nome;
    linkBachEco.href = item.linkedin;
    lattBachEco.href = item.lattes;
}

// declarando botão próximo
btn_prox_bach_eco.addEventListener('click',function(){
    itemBachEco++;
    if(itemBachEco > bach_economia.length - 1){
        itemBachEco = 0;
    }
    mostraBachEco(itemBachEco);
})
// declarando botão 'anterior'
btn_ant_bach_eco.addEventListener('click',function(){
    itemBachEco--;
    if(itemBachEco < 0){
        itemBachEco = bach_economia.length - 1;
    }
    mostraBachEco(itemBachEco);
})
//____________________________________________________
// ************************ codando --> bacharem ambientais
// declarando valor inicial do bacharem em ambientais
let itemBachAmb = 0;

// chamando função ao carregamento da página
window.addEventListener('DOMContentLoaded',function(){
    mostraBachAmb(itemBachAmb);
})

// declarando função que display os dados do membro
function mostraBachAmb(membro_ambientais){
    const item = bach_ambientais[membro_ambientais];
    fotoBachAmb.src = item.img_perfil;
    nomeBachAmb.textContent = item.nome;
    linkBachAmb.href = item.linkedin;
    lattBachAmb.href = item.lattes;
}
// declarando botão próximo
btn_prox_bach_amb.addEventListener('click', function(){
    itemBachAmb++;
    if(itemBachAmb > bach_ambientais.length - 1){
        itemBachAmb = 0;
    }
    mostraBachAmb(itemBachAmb);
})
// declarando botão volta
btn_ant_bach_amb.addEventListener('click', function(){
    itemBachAmb--;
    if(itemBachAmb < 0){
        itemBachAmb = bach_ambientais.length - 1;
    }
    mostraBachAmb(itemBachAmb);
})
//__________________________________________________________