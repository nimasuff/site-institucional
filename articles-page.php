<?php
    include_once 'nav-bar.php';
?>
    <!-- SECTION INTRODUÇÃO to ARTIGOS -->
    <section id="call-to-action-artigos">
        <header class="conteudo-artigos">
            <h2>Artigos</h2>
            <div class="sublinhado"></div>
        </header>
        <video class="container-video" controls muted autoplay loop>
            <source src="assets/img-artigos/video-writing.mp4" type="video/mp4">
        </video>
    </section>
    <!-- SECTION ARTIGOS -->
    <section id="section-artigos">
        <!-- seção principal do site -->
        <header id="artigos-destaque">

        </header>
        <main id="expo-artigos">
            <section class="lista-artigios">
                <!-- um artigo -->
                <div class="chamada-artigo">
                    <figure class="container-imagem-artigo">
                        <img src="assets/img-artigos/profile-picture.jpg" alt="imagem do artigo">
                        <figcaption class="dados-art">
                            <span class="data-publicacao">data da publicacao</span>
                            <span class="autor-art">nome do autor</span>
                        </figcaption>
                    </figure>
                    <div class="infos-artigo">
                        <span class="subtitulo-artigo">subtitulo</span>
                        <h3 class="titulo-artigo">
                            <a href="#" target="_blank">titulo</a>
                        </h3>
                        <ul class="resumo-artigo">
                            <li>resumo do artigo</li>
                        </ul>
                    </div>
                </div>
                <div class="sublinhado"></div>

                <div class="chamada-artigo">
                    <figure class="container-imagem-artigo">
                        <img src="assets/img-artigos/profile-picture.jpg" alt="imagem do artigo">
                        <figcaption class="dados-art">
                            <span class="data-publicacao">data da publicacao</span>
                            <span class="autor-art">Publicado por: </span>
                        </figcaption>
                    </figure>
                    <div class="infos-artigo">
                        <span class="subtitulo-artigo">subtitulo</span>
                        <h3 class="titulo-artigo">
                            <a href="#" target="_blank">titulo</a>
                        </h3>
                        <ul class="resumo-artigo">
                            <li>resumo do artigo</li>
                        </ul>
                    </div>
                </div>
                <div class="sublinhado"></div>
            </section>
            <!-- barra da direita -->
            <aside class="barra-lateral">
                <div class="container-art-mais-lidos">
                    <h3>Mais Lidos</h3>
                    <div class="sublinhado"></div>
                    <div class="art-mais-lidos">

                        <div class="art-mais">
                            <span class="colocacao">1</span>
                            <span class="titulo-art-mais"></span>
                        </div>

                        <div class="sublinhado"></div>
                        <div class="art-mais">
                            <span class="colocacao">2</span>
                            <span class="titulo-art-mais"></span>
                        </div>

                        <div class="sublinhado"></div>
                        <div class="art-mais">
                            <span class="colocacao">3</span>
                            <span class="titulo-art-mais"></span>
                        </div>

                        <div class="sublinhado"></div>
                        <div class="art-mais">
                            <span class="colocacao">4</span>
                            <span class="titulo-art-mais"></span>
                        </div>

                        <div class="sublinhado"></div>
                        <div class="art-mais">
                            <span class="colocacao">5</span>
                            <span class="titulo-art-mais"></span>
                        </div>
                    </div>
                </div>
            </aside>
        </main>
    </section>

<?php 
    include_once 'footer.php';
?>