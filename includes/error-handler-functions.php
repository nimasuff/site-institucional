<?php

function inputVazio($nome, $email, $comentario){
    $resultado;
    if (empty($nome) || empty($email) || empty($comentario)){
        $resultado = true;
    } else{
        $resultado = false;
    }
    return $resultado;
}

function emailInvalido($email){
    $resultado;
    if (!filter_var(filter_var($email, FILTER_SANITIZE_EMAIL), FILTER_VALIDATE_EMAIL)){
        $resultado = true;
    }
    else {
        $resultado = false;
    }
    return $resultado;
}