// declarando variaveis dos projetos
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
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 9,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 10,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 11,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 12,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 13,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 14,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 15,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 16,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 17,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 18,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 19,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
    {
        id: 20,
        imagem: '',
        nome: '',
        desc: '',
        financiador: '',
        status: '',
    },
]
// selecionando conteiner com todos os projetos
const projetosNimasSection = document.getElementById('projetos-nimas');
// dispara quando a página carrega
window.addEventListener('DOMContentLoaded',function(){
    displayProjetosNimas(projetosNimas);
});

function displayProjetosNimas(projetosNIMAS){
    let displayProjeto = projetosNIMAS.map(function(item){
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
    displayProjeto = displayProjeto.join("");
    projetosNimasSection.innerHTML = displayProjeto;
}