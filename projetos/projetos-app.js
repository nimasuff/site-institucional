// declarando a array com todos os projetos em andamento e finalizados pelo NIMAS até hoje. 
// A propriedade 'status' é fundamental para o funcionamento do filtro.
const projetosNimas = [
    {
        id: 1,
        imagem: 'img-projetos/original/projeto1-energy.svg',
        nome: 'Análise do consumo e do potencial de conservação de energia elétrica em comunidades de baixo poder aquisitivo',
        desc: 'Construir indicadores (sociais, econômicos, culturais e tecnológicos) que possibilitem o estabelecimento de um índice que quantifique o potencial de conservação de energia elétrica e meça o consumo da mesma em determinada comunidade, contribuindo para elaboração de medidas e diretrizes para uso racional de energia elétrica, através de ações futuras de gerenciamento tanto pelo lado da oferta quanto da demanda.',
        financiador: 'Faperj',
        status: 'Finalizado',
    },
    {
        id: 2,
        imagem: 'img-projetos/original/projeto2-environment.svg',
        nome: 'Evolution of consumption patterns, economic convergence and carbon footprint of development. A comparison Brazil – France',
        desc: 'Comparar a dinâmica de desenvolvimento e mudanças no estilo de vida de um país mais industrializado e urbanizado, como a França, e um país "emergente", o Brasil, com um desenvolvimento industrial mais recente, mas com uma taxa de urbanização que excede a da França.',
        financiador: 'FAPESP e ANR- Agence Nationale de la Recherche',
        status: 'Finalizado',
    },
    {
        id: 3,
        imagem: 'img-projetos/original/projeto3-mobile-wireframe.svg',
        nome: 'Padrões de consumo, convergência econômica e pegada de carbono do desenvolvimento: comparação Brasil-França: ECOPA: o enfoque da economia',
        desc: 'Este projeto de pesquisa integrou um projeto mais amplo - o ECOPA. O estudo realizou uma abordagem integrada dos padrões de desenvolvimento e de consumo através das principais necessidades das famílias: habitação, mobilidade, alimentação e lazer, que são responsáveis pela maior parte da pegada ambiental das despesas domésticas.',
        financiador: 'FAPESP',
        status: 'Finalizado',
    },
    {
        id: 4,
        imagem: 'img-projetos/original/projeto4-trown-away.svg',
        nome: 'Diagnóstico de resíduos sólidos da cidade do Rio de Janeiro, incluindo estudo complementar ao inventário de emissões de gases do efeito estufa',
        desc: 'A Prefeitura da Cidade do Rio de Janeiro teve como objetivo atualizar o inventário de emissões de GEE para o ano de 2012, verificando as reduções efetivamente alcançadas, e atualizar seu Plano de Ação Municipal para a mitigação dessas emissões. A parte que compete à equipe da UFF refere-se especificamente à geração e destinação de resíduos em favelas.',
        financiador: 'SMAC/RJ',
        status: 'Finalizado',
    },
    {
        id: 5,
        imagem: 'img-projetos/original/projeto5-scooter.svg',
        nome: 'Balanço Energético do Estado do Rio de Janeiro (BEERJ) 2017, ano base 2016 e Matriz energética do Estado do Rio de Janeiro 2017-2031<br>&<br>Balanço Energético do Estado do Rio de Janeiro (BEERJ) 2015, ano-base 2014 e Matriz Energética do Estado do Rio de Janeiro 2015-2030',
        desc: 'Construção do Balanço Energético estadual e de cenários macroeconômicos para Matriz Energética do Rio de Janeiro.',
        financiador: 'Secretaria de Energia do Estado do Rio de Janeiro',
        status: 'Finalizado',
    },
    {
        id: 6,
        imagem: 'img-projetos/original/projeto6-creative-experiment.svg',
        nome: 'A economia criativa e seus impactos sobre a sustentabilidade: A contribuição das startups ao meio ambiente no Rio de Janeiro - PIBIC VOLUNTÁRIO',
        desc: 'O estudo observa o número de startups incubadas em incubadoras de empresas ligadas à Economia Criativa e meio ambiente e mapeia os empreendimentos por área de atuação da Economia Criativa que criam/trabalham ou que podem vir a criar/trabalhar com produtos e/ou serviços que afetam de alguma forma o meio ambiente e que estão incubados ou que já foram graduados por estas incubadoras no RJ nos últimos anos e compara-os às cidades de São Paulo e Florianópolis.',
        financiador: 'UFF',
        status: 'Finalizado',
    },
    {
        id: 7,
        imagem: 'img-projetos/original/projeto7-forming-ideas.svg',
        nome: 'A ECONOMIA CRIATIVA E SEUS IMPACTOS SOBRE A SUSTENTABILIDADE: A contribuição das startups ditas do setor de Economia Criativa ao meio ambiente no Rio de Janeiro',
        desc: 'Examinar os impactos sobre a sustentabilidade da economia criativa através de uma análise da contribuição das startups ditas do setor de Economia Criativa ao meio ambiente no Brasil e mais especificamente no Rio de Janeiro.',
        financiador: 'Faperj',
        status: 'Finalizado',
    },
    {
        id: 8,
        imagem: 'img-projetos/original/projeto8-bicycle.svg',
        nome: 'PDPA GENER-NIMAS: Mobilidade sustentável',
        desc: 'Projeto com a Prefeitura de Niterói para elaboração de uma plataforma para tomadores de decisão sobre mobilidade sustentável',
        financiador: 'Prefeitura de Niterói',
        status: 'Em Andamento',
    },
    {
        id: 9,
        imagem: 'img-projetos/original/projeto9-eletric-car.svg',
        nome: 'PDPA NIMAS-GENER: Análise da vulnerabilidade Energética em Comunidades de Niterói e aprimoramento de políticas públicas municipais em atendimento à população',
        desc: 'Projeto com a Prefeitura de Niterói para identificar e analisar vulnerabilidades energéticas em comunidades carentes de Niterói para propor o desenvolvimento e/ou o aprimoramento de políticas públicas de redução destas vulnerabilidades.',
        financiador: 'Prefeitura de Niterói',
        status: 'Em Andamento',
    },
    {
        id: 10,
        imagem: 'img-projetos/original/projeto10-chef.svg',
        nome: 'Avaliação de Viabilidade Econômica de Uso de Resíduos de Casca de Coco para Aproveitamento Energético : PIBITI/PIBINOVA',
        desc: '',
        financiador: 'CNPq/UFF',
        status: 'Em Andamento',
    },
    {
        id: 11,
        imagem: 'img-projetos/original/projeto11-alien-science.svg',
        nome: 'BRICS: Aproveitamento energético de resíduos por pirólise',
        desc: '',
        financiador: 'CNPq',
        status: 'Em Andamento',
    },
    {
        id: 12,
        imagem: 'img-projetos/original/projeto12-upgrade.svg',
        nome: 'O grau de sobrevivência de startups de Economia Criativa, e seus impactos sobre a sustentabilidade no Rio de Janeiro',
        desc: 'O projeto possui dois grandes objetivos: primeiro, o de examinar os impactos relacionados à sustentabilidade das startups de economia criativa no meio ambiente, através de uma análise de sua contribuição na redução de impactos negativos no mesmo e mais especificamente no Rio de Janeiro; <br> E segundo, o de testar a hipótese de que startups que buscam gerar menos impacto no meio ambiente têm probabilidade de sobrevivência maior.',
        financiador: 'FAPERJ',
        status: 'Em Andamento',
    },
    {
        id: 13,
        imagem: 'img-projetos/original/projeto13-app-wireframe.svg',
        nome: 'AOMU - Aplicativo otimizador de mobilidade urbana',
        desc: 'Proposta de um aplicativo que visa melhorar a mobilidade urbana das pessoas, reduzindo os congestionamentos provocados pela presença de taxis circulando vazios sem necessidade, um transporte público mais previsível e, portanto, mais procurado, reduzindo o número de carros individuais e, no final das contas, gerando menos atrasos dos indivíduos, aumentando a produtividade do trabalho.',
        financiador: 'UFF e FAPERJ',
        status: 'Em Andamento',
    },
    {
        id: 14,
        imagem: 'img-projetos/original/projeto14-growing.svg',
        nome: 'Transição energética global e desenvolvimento sustentável',
        desc: 'Estudo descritivo sobre a atual conjuntura mundial e brasileira referente às políticas e tecnologias voltadas para efetivação da transição energética que inibe o uso de combustíveis fósseis e estimula a geração e consumo de energia por fontes renováveis alternativas.',
        financiador: 'Claude Cohen',
        status: 'Em Andamento',
    },
    {
        id: 15,
        imagem: 'img-projetos/original/projeto15-nature.svg',
        nome: 'Desmatamento e impactos sobre o comércio internacional',
        desc: 'A partir da análise da crise internacional desencadeada pelas queimadas na Amazônia e seu impacto sobre o comércio exterior brasileiro, busca-se entender as conexões entre desmatamento e comércio internacional.',
        financiador: '',
        status: 'Em Andamento',
    }
];

// selecionando conteiner com todos os projetos
const projetosNimasSection = document.getElementById('projetos-nimas');

// seleciionando os botões de filtragem dos projetos --> o médodo querySelectAll gera uma array com todos os botões dessa class '.botao-filtro'
const btnFiltro = document.querySelectorAll('.botao-filtro');

// agora vamos ouvir o click de cada botao INDIVIDUALMENTE e fazer com que aparecam apenas os projetos que possuem o status igual ao botão clicado. Para os casos em que o botão "Todos" for selecionado, também será criada uma condição. 
btnFiltro.forEach(function(botao){
    botao.addEventListener('click',function(e){
        const statusBtn = e.currentTarget.dataset.status; // retorna o status 'data-status=' do botão clicado
        // pega os items da array 'projetosNimas' e retorna apenas aqueles que batem com o status de 'statusBtn'
        const statusProjetos = projetosNimas.filter(function(projetosNimasItens){  
            if(projetosNimasItens.status === statusBtn){
                return projetosNimasItens;
            }
        });
        // nenhum projeto tem o status: 'todos', logo temos que criar esse cenário
        if(statusBtn === "Todos"){
            displayProjetosNimas(projetosNimas);
        } else {
            displayProjetosNimas(statusProjetos);
        }
    });
});

// dispara a função 'displayProjetosNimas' quando a página carrega
window.addEventListener('DOMContentLoaded',function(){
    displayProjetosNimas(projetosNimas);
});

// essa função faz com que os projetos apareçam dentro da seção 'projetos-nimas'
function displayProjetosNimas(projetosNIMAS){
    let displayProjeto = projetosNIMAS.map(function(item){ 
// o metodo 'map' retorna uma array e coloca uma vircula entre um código e outro.
        return `<article class="projeto finalizado">
                <!-- imagem do projeto -->
                <img src="${item.imagem}" alt="imagem projeto: ${item.nome}" class="imagem-projeto">
                <div class="conteudo-projeto">
                    <!-- nome do projeto -->
                    <header class="nome-projeto">
                        <h4>${item.nome}</h4>
                        <div class="sublinhado"></div>
                    </header>
                    <!-- descrição do projeto -->
                    <div class="descricao-projeto">
                        <!-- descricao -->
                        <p>${item.desc}</p>
                        <!-- dados do projeto -->
                        <div class="dados-projeto">
                            <div class="dado">
                                <span class="tipo-dado-projeto">Financiador(es):</span>
                                <span class="dado-projeto-atual">${item.financiador}</span>
                            </div>
                            <div class="dado">
                                <span class="tipo-dado-projeto">Status:</span>
                                <span class="dado-projeto-atual">${item.status}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>`
    })
// o médodo 'join' basicamente remove essa virgula entre um item e outro da array, deixando ela aparecer no HTML
    displayProjeto = displayProjeto.join("");
    projetosNimasSection.innerHTML = displayProjeto;
};