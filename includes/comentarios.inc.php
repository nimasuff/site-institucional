<?php
$nome = $email = $assunto = $comentario = '';
$nomeErro = $emailErro = $assuntoErro = $comentarioErro = '';
// pegando os dados do formulário e declarando as suas respectivas variaveis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["c-nome"])){
        $nomeErro = "Por favor, informe o seu nome.";
    }   elseif (!preg_match("/^[a-zA-Z-' ]*$/",$nome)){
            $nomeErro = "Nome inválido.";
        }   else {
                $nome = valData($_POST["c-nome"]);
            }

    if (empty($_POST["c-mail"])){
        $emailErro = "Por favor, fornça seu e-mail.";
    }   elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErro = "Email inválido.";
        }   else {
                $email = valData($_POST["c-email"]);
            }

    if (empty($_POST["c-assunto"])) {
        $assuntoErro = "Por favor, forneça um assunto p/ o seu comentário.";
    } else {
        $assunto = valData($_POST["c-assunto"]);
    }

    if(empty($_POST["c-comentario"])){
        $comentarioErro = "Por favor, forneça um comentário.";
    } else {
        $comentario = valData($_POST["c-comentario"]);
    }
}
// garantindo que as variaveis não possam ferir nosso sistema
function valData($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}



// TESTE display dos dados
// echo "Nome:";
// echo "<br>";
// echo $nome;
// echo "<br>";
// echo "Nome erro";
// echo "<br>";
// echo $nomeErro;
// echo "<br>";
// echo "<br>";
// echo "E-mail:";
// echo "<br>";
// echo $email;
// echo "<br>";
// echo "E-mail erro:";
// echo "<br>";
// echo $emailErro;
// echo "<br>";
// echo "<br>";
// echo "Assunto:";
// echo "<br>";
// echo $assunto;
// echo "<br>";
// echo "Assunto erro:";
// echo "<br>";
// echo $assuntoErro;
// echo "<br>";
// echo "<br>";
// echo "Comentáiro:";
// echo "<br>";
// echo $comentario;
// echo "<br>";
// echo $comentarioErro;

