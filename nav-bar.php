<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- TÍTULO -->
    <title>NIMAS | UFF</title>
    <!-- FAV ICON -->
    <link rel="shortcut icon" href="assets/img-main/nav-bar/logo-nimas-roxo.png" type="image/x-icon">
    <!-- LINK PARA FOLHAS DE ESTILO -->
    <link rel="stylesheet" href="style/main.css">
    <link rel="stylesheet" href="style/articles.css">
    <link rel="stylesheet" href="style/membros.css">
    <link rel="stylesheet" href="style/projetos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- LINK FONTE DO SITE -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">
</head>
<body>
    <!-- PRELOADER -->
    <div class="loader">
        <div class="barra"></div>
        <div class="barra"></div>
        <div class="barra"></div>
    </div>
    <!-- MENU DE NAVEGAÇÃO -->
    <header id="menu">
        <nav id="menu-navegacao">
            <div id="menu-logo">
                <img src="assets/img-main/nav-bar/logo-nimas-preto.png" alt="Logo do NIMAS" id="logo-nimas">
                <div class="linha-vertical"></div>
                <img src="assets/img-main/nav-bar/logo-uff-preto.png" alt="Logo da Universidade Federal Fluminense (UFF)" id="logo-uff">
            </div>
            
            <div id="menu-links" style="right: -100%;">
                <div class="link-menu"><a href="index.php#discovery" class="over-sublinha">Início</a></div>
                <div class="link-menu"><a href="index.php#sobre" class="over-sublinha">Sobre</a></div>
                <div class="link-menu"><a href="projetos-page.php" class="over-sublinha">Projetos</a></div>
                <div class="link-menu"><a href="membros-page.php" class="over-sublinha">Membros</a></div>
                <div class="link-menu"><a href="index.php#contato" class="over-sublinha">Contato</a></div>
            </div>

            <div id="menu-barras-mobile" style="right: 3%;">
                <label for="barra-menu"><i class="fa fa-bars" id="barras" style="transform: rotate(0deg);color: #000;"></i></label>
                <input type="checkbox" name="barra-menu" id="barra-menu">
            </div>
        </nav>
    </header>