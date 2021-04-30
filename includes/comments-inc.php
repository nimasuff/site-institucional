<?php

if(isset($_POST["enviar"])){ //caso o usuário apertanto o botão "Enviar"

    // pegando as respostas dos usuários do site
    $nome = $_POST("c-nome");
    $email = $_POST("c-email");
    $comentario = $_POST("comentario");

    // chamando outro documento para verifcar se o usuário inseriu os dados corretos
    require_once 'dbconection.php';
    require_once 'error-handler-functions.php';

    // cuidando de alguns erros mais óbivios
    if (inputVazio($nome, $email, $comentario) !== false){
        header("location: ../index.php?error=inputvazio");
        exit();
    };
    if (emailInvalido($email) !== false){
        header("loaction: ../index.php?error=emailinvalido");
        exit();
    };
    if (comentarioInvalido($comentario) !==  false){
        header("location: ../index.php?error=comentarioinvalido");
        exit();
    };

    criaMensagem($nome, $email, $comentario, $dbconexao);
}
else{ // caso o usuário tenha tentado burlar o botão "Enviar"
    header("location: ../index.php");
    exit();
}