<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'),true);


$today = date('Y-m-d H:i:s');

if($postjson['aksi']=="proses_register"){
    $password = md5($postjson['password']);

    $insert = mysqli_query($mysqli, "INSERT INTO tb_cad_usuario SET
    your_name = '$postjson[your_name]',
    email_address = '$postjson[email_address]',
    password = '$password',
    created_at = '$today'
    ");


if($insert){
    $result = json_encode(array('success' => true, 'msg' => 'Registro Inserido com Sucesso!'));
}else{
    $result = json_encode(array('success' => false, 'msg' => 'Erro ao realizar Registro!'));
}

echo $result;
}