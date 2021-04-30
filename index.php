<?php
    include_once 'C:\xampp\htdocs\site-institucional\nav-bar.php';
?>
    <!-- CALL TO ACTION SECTION -->
    <section id="discovery">
        <div id="titulo-si">
            <h1>NIMAS</h1>
            <div class="sublinhado"></div>
            <p>Núcleo de Inovação <br>Meio Ambiente e Sociedade</p>

            <div class="call-to-action">
                <button class="botao-contato"><a href="#contato">Saiba Mais</a></button>
            </div>
        </div>

        <div class="image-explan">
            <img src="assets/img-main/discovery/tec-logic.svg" alt="Animação de personagem lógica e tec">
        </div>

        <aside id="redes-sociais">
            <div class="icones-rede">
                <a href="https://github.com/nimasuff" target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://www.linkedin.com/company/nimasuff/" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="mailto:labnimas.esc@id.uff.br?subject=Comentário | SI do NIMAS"><i class="fa fa-envelope"></i></a>
            </div>
        </aside>
    </section>
    <!-- SECTION SOBRE -->
    <section id="sobre">
        <div id="principios">
            <h2>Sobre</h2>
            <div class="sublinhado"></div>
            <div class="principio">
                <p>O NIMAS - Núcleo de Inovação Meio Ambiente e Sociedade da UFF é um laboratório multidisciplinar e interprofissional de desenvolvimento tecnológico e extensão da Faculdade de Economia, integrado a atividades de pesquisa e de ensino.</p>
                <p>Criado em 2009 com recursos de projeto FAPERJ de apoio ao desenvolvimento tecnológico. Em 2014, torna-se um grupo de pesquisas do CNPq, e passa a se chamar NIMAS.</p>
            </div>

            <div class="principio">
                <h3>Missão</h3>
                <p>É um Programa de Extensão Tecnológica que tem, como objetivo principal, levar o conhecimento e experiência do corpo docente do Departamento de Economia da UFF à Comunidade Acadêmica da UFF e à Comunidade Externa. </p>
            </div>

            <div class="principio">
                <h3>Visão</h3>
                <p>O programa tem como proposta a inserção dos alunos dos Cursos de Graduação e Pós-graduação em Economia em suas atividades, tornando possível, através de práticas extensionistas, a aplicação dos conhecimentos adquiridos nas disciplinas do Curso de Graduação e Pós-graduação em Economia e outros departamentos da UFF.</p>
            </div>

            <div class="image-sobre">
                <img src="assets/img-main/sobre/ouvindo.svg" alt="lampada feita de água" id="procurando">
            </div>
        </div>

        <div class="principio">
            <h3>Atividades</h3>
            <ol>
                <li>assessoria em projetos de consultoria com empresas públicas e privadas;</li>
                <li>identificação de oportunidades de inserção de novos produtos e serviços no mercado através de uma tecnologia de produto /ou serviço;</li>
                <li>desenvolvimento de projetos de pesquisa;</li>
                <li>iniciação científica e desenvolvimento tecnológico;</li>
                <li>realização de seminários nacionais e internacionais;</li>
                <li>integração com outros grupos de pesquisa nacionais e internacionais;</li>
                <li>e geração de material bibliográfico nas áreas de: empreendedorismo, economia criativa, sustentabilidade, meio ambiente e energia. </li>
            </ol>
        </div>
    </section>
    <!-- SECTION NEWSLETTER -->
    <section id="newsletter">
        <div class="newsletter-imagem">
            <img src="assets/img-main/newsletter/envelop.svg" alt="animação de chamada para newsletter">
        </div>
        <form action="#" method="POST" id="e-mail">
            <h2>Newsletter</h2>
            <div class="sublinhado"></div>
            <p>Insira seu melhor e-mail e <br>fique por dentro do NIMAS:</p>
            <input type="email" class="formatacao-input" name="email" placeholder="e-mail" maxlength="40" required>
            <input type="submit" value="Enviar">
        </form>
    </section>
    <!-- SECTION PARCEIROS DO NIMAS -->
    <section id="parceiros">
        <h2>Parceiros</h2>
        <div class="sublinhado"></div>
        <div id="logo-parceiros">
            <div class="parceiro">
                <img src="assets/img-main/parceiros/cired.png" alt="parceiro cired">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/lima.png" alt="parceiro lima">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/National_Institute_of_Technology_Trichy_Logo.png" alt="parceiro National_Institute_of_Technology_Trichy">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/nemo.png" alt="parceiro nemo">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/logo uff.png" alt="parceiro UFF">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/ppe.png" alt="parceiro ppe">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/prefeitura rj.png" alt="parceiro prefeitura do RJ">
            </div>
            <div class="parceiro">
                <img src="assets/img-main/parceiros/cenbio.png" alt="parceiro cenbio">
            </div>
        </div>
    </section>
    <!-- SECTION CONTATO -->
    <section id="contato">
        <form action="includes/comments-inc.php" method="POST" id="form-contato">
            <h2>Contato</h2>
            <div class="sublinhado"></div>
            <div class="image-contato">
                <img src="assets/img-main/contato/support_active.png" alt="Imagem de chat">
            </div>
        
            <div class="linha-form">
                <label for="c-nome">Nome</label>
                <input type="text" name="c-nome" id="c-nome" class="formatacao-input" placeholder="nome..." maxlength="30">
            </div>
            <!-- <div class="linha-form">
                <label for="c-sobrenome">Sobrenome</label>
                <input type="text" name="c-sobrenome" id="c-sobrenome" class="formatacao-input" placeholder="seu sobrenome" maxlength="30">
            </div> -->
            <div class="linha-form">
                <label for="c-email">E-mail</label>
                <input type="email" name="c-email" id="c-email" class="formatacao-input" placeholder="e-mail..." maxlength="40">
            </div>
            <div class="comentario-form">
                <label for="comentario">Comentário</label>
                <textarea name="comentario" id="comentario" cols="15" rows="5" placeholder="comentário..." maxlength="244"></textarea>
            </div>

            <input type="submit" name="enviar" value="Enviar">
        </form>
        <div class="mapa-info-contato">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.6054893208791!2d-43.13297010574935!3d-22.898074527982097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983d47745f783%3A0x2321fc9b4e48f3a5!2sUFF%20-%20Faculdade%20de%20Economia!5e0!3m2!1spt-BR!2sbr!4v1618105183507!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            <address class="info-contato">
                <div class="dado-contato">
                    <div class="dado-tipo">
                        E-mail:
                    </div>
                    <div class="dado-atual">
                        <a href="mailto:labnimas.esc@id.uff.br?subject=Comentário | SI do NIMAS" class="over-sublinha" target="_blank">labnimas.esc@id.uff.br</a>
                    </div>
                </div>
                <div class="dado-contato">
                    <div class="dado-tipo">
                        Celular:
                    </div>
                    <div class="dado-atual">
                        <a href="https://wa.me/5521993002017?text=Olá,%20vim%20pelo%20site%20do%20NIMAS." class="over-sublinha" target="_blank"><i class="fa fa-whatsapp"></i>(21) 99300-2017</a>
                    </div>
                </div>
                <div class="dado-contato">
                    <div class="dado-tipo">
                        Endereço:
                    </div> 
                    <div class="dado-atual">
                        Universidade Federal Fluminense – Campus Gragoatá - Rua Prof. Marcos Valdemar de Freitas Reis, s/n, Bloco F – Sala 414 - São Domingos, Niterói - RJ, 24210-200
                    </div>
                </div>
            </address>
        </div>
    </section>
<?php
    include_once 'C:\xampp\htdocs\site-institucional\footer.php';
?>
