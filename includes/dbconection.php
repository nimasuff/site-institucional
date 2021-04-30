<?php

$serverName = 'localhost';
$dbname = 'u669022899_si_nimas';
$dbuserName = 'u669022899_claude_cohen';
$dbpassword = 'Cohen1801';


$dbconexao = mysqli_connect($serverName, $dbname, $dbuserName, $dbpassword);

if (!$dbconexao){
    die("Falha na conexão com o Banco de Dados: " . mysqli_connect_error());
}